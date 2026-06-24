import { Helmet } from '@dr.pogodin/react-helmet';

interface ArticleMeta {
  publishedAt?: string;
  author?: string;
  tags?: string[];
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: ArticleMeta | null;
}

const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  article = null,
}: SEOProps) => {
  const siteTitle = 'JOOF Foundation';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const baseUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:5175';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

  // Ensure image URL is absolute
  const absoluteImageUrl = image
    ? (image.startsWith('http') ? image : `${strapiUrl}${image}`)
    : `${baseUrl}/og-image.jpg`; // Default OG image

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={absoluteImageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedAt} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
