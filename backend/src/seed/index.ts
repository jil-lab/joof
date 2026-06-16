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
} from './data';

type StrapiInstance = Core.Strapi;

async function isEmpty(strapi: StrapiInstance, uid: string): Promise<boolean> {
  const count = await strapi.db.query(uid as Parameters<typeof strapi.db.query>[0]).count({});
  return count === 0;
}

async function seedSiteSetting(strapi: StrapiInstance) {
  const uid = 'api::site-setting.site-setting' as Parameters<typeof strapi.db.query>[0];
  const existing = await strapi.db.query(uid).findOne({});
  if (existing) return;

  await strapi.db.query(uid).create({ data: siteSettingData });
  strapi.log.info('[seed] Site setting created');
}

async function seedCollection<T extends object>(
  strapi: StrapiInstance,
  uid: string,
  items: T[],
  label: string,
) {
  if (!(await isEmpty(strapi, uid))) return;
  for (const item of items) {
    await strapi.db.query(uid as Parameters<typeof strapi.db.query>[0]).create({ data: item });
  }
  strapi.log.info(`[seed] ${label}: ${items.length} records created`);
}

export async function runSeed(strapi: StrapiInstance) {
  strapi.log.info('[seed] Starting database seed…');

  await seedSiteSetting(strapi);

  await seedCollection(
    strapi,
    'api::timeline-milestone.timeline-milestone',
    timelineMilestonesData,
    'Timeline milestones',
  );

  await seedCollection(strapi, 'api::advisor.advisor', advisorsData, 'Advisors');

  await seedCollection(strapi, 'api::team-member.team-member', teamMembersData, 'Team members');

  await seedCollection(strapi, 'api::core-value.core-value', coreValuesData, 'Core values');

  await seedCollection(strapi, 'api::impact-stat.impact-stat', impactStatsData, 'Impact stats');

  await seedCollection(strapi, 'api::testimonial.testimonial', testimonialsData, 'Testimonials');

  await seedCollection(strapi, 'api::program.program', programsData, 'Programs');

  strapi.log.info('[seed] Seed complete ✓');
}
