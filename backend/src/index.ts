import type { Core } from '@strapi/strapi';
import cloudinary from 'cloudinary';
import { runSeed } from './seed';

async function destroyCloudinaryAsset(file: any) {
  const { public_id, resource_type } = file?.provider_metadata ?? {};
  if (!public_id) return;
  try {
    await cloudinary.v2.uploader.destroy(public_id, {
      resource_type: resource_type || 'image',
      invalidate: true,
    });
  } catch (err: any) {
    // Non-fatal — log but don't block the delete
    console.warn(`[cloudinary] Failed to delete asset "${public_id}": ${err.message}`);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });

    // Force resource_type 'raw' for documents/PDFs so Cloudinary stores them
    // as-is instead of processing them as images (which corrupts the files).
    const provider = strapi.plugin('upload').provider as any;
    const isRawMime = (mime: string) =>
      mime && !mime.startsWith('image/') && !mime.startsWith('video/') && !mime.startsWith('audio/');

    const wrap = (fn: Function) => (file: any, customConfig: any = {}) => {
      if (isRawMime(file.mime) && !customConfig.resource_type) {
        customConfig = { ...customConfig, resource_type: 'raw' };
      }
      return fn(file, customConfig);
    };

    provider.upload = wrap(provider.upload.bind(provider));
    provider.uploadStream = wrap(provider.uploadStream.bind(provider));

    strapi.db.lifecycles.subscribe({
      models: ['plugin::upload.file'],

      async beforeDelete({ params }) {
        const file = await strapi.db
          .query('plugin::upload.file')
          .findOne({ where: params.where });
        await destroyCloudinaryAsset(file);
      },

      async beforeDeleteMany({ params }) {
        const files = await strapi.db
          .query('plugin::upload.file')
          .findMany({ where: params.where });
        await Promise.all(files.map(destroyCloudinaryAsset));
      },
    });

    if (process.env.NODE_ENV !== 'production') {
      await runSeed(strapi);
    }
  },
};
