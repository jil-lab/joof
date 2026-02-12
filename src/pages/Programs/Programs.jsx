import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';
import ProgramCard from '../../components/programs/ProgramCard';
import Section from '../../components/common/Section/Section';
import { PROGRAMS, MISSION_VISION } from '../../utils/constants';
import { usePrograms } from '../../hooks/useApi';
import { getStrapiImageUrl } from '../../utils/formatters';
import { queryKeys } from '../../api/queryKeys';
import { getBlogPosts } from '../../api/services/blog.service';
import { conditionalPrefetch } from '../../utils/prefetchHelpers';

const Programs = () => {
  const queryClient = useQueryClient();
  const { data: strapiData, isLoading } = usePrograms();

  // Prefetch blog posts for users who might navigate to blog
  useEffect(() => {
    conditionalPrefetch(
      queryClient,
      queryKeys.blogPosts.list({ page: 1, pageSize: 6, category: null }),
      () => getBlogPosts({ page: 1, pageSize: 6, category: null }),
      5 * 60 * 1000 // 5 minutes
    );
  }, [queryClient]);

  // Map Strapi data to expected format, fallback to constants
  const programs = strapiData?.data?.length > 0
    ? strapiData.data.map((program, index) => ({
        id: program.id,
        slug: program.type || `program-${index}`,
        title: program.title,
        shortDescription: program.shortDescription || program.description?.substring(0, 150) + '...',
        description: program.description,
        image: program.images?.[0] ? getStrapiImageUrl(program.images[0]) : '/images/programs/default.jpg',
        icon: program.type === 'healthcare' ? '🏥' : program.type === 'education' ? '📚' : '🤝',
      }))
    : PROGRAMS;
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-20 md:py-28 bg-gradient-to-br from-teal-600 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              {MISSION_VISION.tagline} - Through comprehensive healthcare, quality education,
              and community empowerment, we create lasting positive change in underserved communities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}
      <Section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Making an Impact Through Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each program is designed with care and delivered with compassion, ensuring
              sustainable development and empowerment for those we serve.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading programs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
              Your support enables us to expand our reach and deepen our impact.
              Together, we can create brighter futures for more communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Support Our Programs
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Programs;
