import type { Core } from '@strapi/strapi';
import {
  siteSettingData,
  timelineMilestonesData,
  advisorsData,
  teamMembersData,
  coreValuesData,
  impactStatsData,
  testimonialsData,
  programsData,
  categoriesData,
  blogPostsData,
} from './data';

type UID = Parameters<Core.Strapi['documents']>[0];

// ── Content seeding ───────────────────────────────────────────────────────────

async function seedSiteSetting(strapi: Core.Strapi) {
  const uid = 'api::site-setting.site-setting' as UID;
  const existing = await strapi.documents(uid).findFirst({});
  if (existing) return;
  await strapi.documents(uid).create({ data: siteSettingData as any, status: 'published' });
  strapi.log.info('[seed] Site setting created');
}

async function seedCollection<T extends object>(
  strapi: Core.Strapi,
  uid: string,
  items: T[],
  label: string,
) {
  const count = await strapi.documents(uid as UID).count({});
  if (count > 0) return;
  for (const item of items) {
    await strapi.documents(uid as UID).create({ data: item as any, status: 'published' });
  }
  strapi.log.info(`[seed] ${label}: ${items.length} records created`);
}

async function seedCategories(strapi: Core.Strapi) {
  let created = 0;
  for (const cat of categoriesData) {
    const existing = await strapi.db
      .query('api::category.category')
      .findOne({ where: { slug: cat.slug } });
    if (!existing) {
      await strapi.documents('api::category.category' as UID).create({ data: cat as any, status: 'published' });
      created++;
    }
  }
  if (created > 0) strapi.log.info(`[seed] Categories: ${created} records created`);
}

async function seedBlogPosts(strapi: Core.Strapi) {
  // Fetch category document IDs by slug for linking
  const catCache: Record<string, string> = {};
  for (const slug of ['healthcare', 'education', 'news']) {
    const c = await strapi.db
      .query('api::category.category')
      .findOne({ where: { slug } });
    if (c) catCache[slug] = (c as any).document_id;
  }

  const catByIndex: Record<number, string | undefined> = {
    0: catCache['healthcare'],
    1: catCache['education'],
    2: catCache['news'],
  };

  let created = 0;
  for (let i = 0; i < blogPostsData.length; i++) {
    const post = blogPostsData[i];
    const existing = await strapi.db
      .query('api::blog-post.blog-post')
      .findOne({ where: { slug: post.slug } });
    if (!existing) {
      const catDocId = catByIndex[i];
      await strapi.documents('api::blog-post.blog-post' as UID).create({
        data: {
          ...post,
          ...(catDocId ? { category: catDocId } : {}),
        } as any,
        status: 'published',
      });
      created++;
    }
  }
  if (created > 0) strapi.log.info(`[seed] Blog posts: ${created} records created`);
}

// ── Public permissions ────────────────────────────────────────────────────────

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) return;

  const actionsToEnable = [
    'api::advisor.advisor.find',
    'api::advisor.advisor.findOne',
    'api::blog-post.blog-post.find',
    'api::blog-post.blog-post.findOne',
    'api::category.category.find',
    'api::category.category.findOne',
    'api::core-value.core-value.find',
    'api::core-value.core-value.findOne',
    'api::impact-stat.impact-stat.find',
    'api::impact-stat.impact-stat.findOne',
    'api::partner.partner.find',
    'api::partner.partner.findOne',
    'api::program.program.find',
    'api::program.program.findOne',
    'api::site-setting.site-setting.find',
    'api::team-member.team-member.find',
    'api::team-member.team-member.findOne',
    'api::testimonial.testimonial.find',
    'api::testimonial.testimonial.findOne',
    'api::timeline-milestone.timeline-milestone.find',
    'api::timeline-milestone.timeline-milestone.findOne',
  ];

  const permissions = await strapi.db
    .query('plugin::users-permissions.permission')
    .findMany({ where: { action: { $in: actionsToEnable }, role: { id: publicRole.id } } });

  for (const perm of permissions) {
    if (!perm.enabled) {
      await strapi.db
        .query('plugin::users-permissions.permission')
        .update({ where: { id: perm.id }, data: { enabled: true } });
    }
  }

  strapi.log.info(`[seed] Public permissions: ${permissions.length} routes enabled`);
}

// ── Entry point ───────────────────────────────────────────────────────────────

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info('[seed] Starting database seed…');

  await seedSiteSetting(strapi);
  await seedCollection(strapi, 'api::timeline-milestone.timeline-milestone', timelineMilestonesData, 'Timeline milestones');
  await seedCollection(strapi, 'api::advisor.advisor', advisorsData, 'Advisors');
  await seedCollection(strapi, 'api::team-member.team-member', teamMembersData, 'Team members');
  await seedCollection(strapi, 'api::core-value.core-value', coreValuesData, 'Core values');
  await seedCollection(strapi, 'api::impact-stat.impact-stat', impactStatsData, 'Impact stats');
  await seedCollection(strapi, 'api::testimonial.testimonial', testimonialsData, 'Testimonials');
  await seedCollection(strapi, 'api::program.program', programsData, 'Programs');
  await seedCategories(strapi);
  await seedBlogPosts(strapi);
  await setPublicPermissions(strapi);

  strapi.log.info('[seed] Seed complete ✓');
}
