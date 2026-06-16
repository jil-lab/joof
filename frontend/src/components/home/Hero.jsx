import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useSiteSettings } from '../../hooks/useApi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const getImageUrl = (url) => {
  if (!url) return null;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const Hero = () => {
  const { data: settingsData } = useSiteSettings();
  const settings = settingsData?.data;

  const headline = settings?.heroHeadline || 'FOR A BRIGHTER FUTURE';
  const subtext =
    settings?.heroSubtext ||
    'Empowering communities through healthcare and education initiatives for sustainable development and lasting impact.';
  const heroImageUrl = settings?.heroImage
    ? getImageUrl(settings.heroImage.url)
    : '/images/hero/main-hero.jpg';

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl}
          alt="JOOF Foundation helping communities"
          className="w-full h-full object-cover"
          fetchPriority="high"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(135deg, #0d9488 0%, #115e59 50%, #042622 100%)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/70 to-teal-950/90" />
      </div>

      {/* Decorative Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-6 lg:px-8 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
          >
            John Oyediran Olabisi Foundation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            {headline.includes('FUTURE') ? (
              <>
                {headline.replace('FOR A BRIGHTER FUTURE', 'FOR A BRIGHTER')}
                <br />
                <span className="text-yellow-400">FUTURE</span>
              </>
            ) : (
              headline
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-100"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/programs">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Discover Our Programs
              </Button>
            </Link>
            <Link to="/donate">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-teal-600"
              >
                Donate Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-200 mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
