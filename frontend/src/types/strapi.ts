// Strapi v5 shared types — attributes are flat (no nested .attributes wrapper)

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

export interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: StrapiMeta;
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: StrapiMeta;
}

// ── Entity types ────────────────────────────────────────────────────────────

export interface SiteSettings {
  id: number;
  heroHeadline?: string;
  heroSubtext?: string;
  heroImage?: StrapiMedia;
  missionTitle?: string;
  missionBody?: string;
  missionImage?: StrapiMedia;
  visionStatement?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  officeHours?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

export interface TimelineMilestone {
  id: number;
  year: string;
  title: string;
  description?: string;
  order: number;
  publishedAt?: string;
}

export interface Advisor {
  id: number;
  name: string;
  role?: string;
  domain?: string;
  bio?: string;
  photo?: StrapiMedia;
  linkedin?: string;
  order: number;
  publishedAt?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo?: StrapiMedia;
  website?: string;
  order: number;
  publishedAt?: string;
}

export interface CoreValue {
  id: number;
  title: string;
  description?: string;
  icon?: string;
  order: number;
  publishedAt?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role?: string;
  bio?: string;
  photo?: StrapiMedia;
  linkedin?: string;
  order: number;
  publishedAt?: string;
}

export interface ImpactStat {
  id: number;
  label: string;
  number: number;
  icon?: string;
  order: number;
}

export interface ProgramFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProgramStat {
  number: number;
  label: string;
  icon?: string;
}

export interface Program {
  id: number;
  title: string;
  type: 'healthcare' | 'education' | 'community';
  shortDescription?: string;
  description?: unknown;
  featuredImage?: StrapiMedia;
  images?: StrapiMedia[];
  features?: ProgramFeature[];
  impactStats?: ProgramStat[];
  slug?: string;
  order: number;
  publishedAt?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location?: string;
  image?: StrapiMedia;
  order: number;
  publishedAt?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug?: string;
  excerpt?: string;
  content?: unknown;
  featuredImage?: StrapiMedia;
  imageUrl?: string;
  author?: string;
  readTime?: number;
  tags?: string[];
  order: number;
  publishedAt?: string;
}

export interface Report {
  id: number;
  title: string;
  year: number;
  file?: StrapiMedia;
  publishedAt?: string;
}

export interface AboutPage {
  id: number;
  heroTitle: string;
  foundationSectionTitle?: string;
  foundationParagraph1: string;
  foundationParagraph2: string;
  foundationBadgeYear?: string;
  foundationBadgeLabel?: string;
  foundationParagraph3: string;
  foundationParagraph4: string;
  missionSectionTitle?: string;
  missionBody: string;
  founderVisionSectionTitle?: string;
  founderVisionQuote: string;
  founderVisionName?: string;
  founderVisionRole?: string;
  ourStorySectionTitle?: string;
  ourStoryBody: string;
  ourStoryHighlightedName?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
  publishedAt?: string;
}
