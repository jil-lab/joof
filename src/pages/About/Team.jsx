import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import TeamGrid from '../../components/about/TeamGrid';
import { useTeamMembers } from '../../hooks/useApi';
import { getStrapiImageUrl } from '../../utils/formatters';

const Team = () => {
  const { data, isLoading, error } = useTeamMembers();

  // Extract and format team members data from Strapi
  const teamMembers = data?.data?.map(member => ({
    id: member.id,
    name: member.name || 'Unknown',
    role: member.role || 'Team Member',
    bio: member.bio || '',
    linkedin: member.linkedin || '#',
    image: member.photo ? getStrapiImageUrl(member.photo) : null,
  })) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Dedicated individuals working together to transform lives and build brighter futures
          </p>
        </motion.div>
      </Section>

      {/* Team Introduction */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Heart of JOOF Foundation
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our team brings together diverse expertise, shared values, and unwavering commitment
            to our mission. Each member plays a vital role in ensuring that we deliver impactful
            programs and services to the communities we serve. Together, we work tirelessly to
            make a lasting difference in the lives of those who need it most.
          </p>
        </motion.div>

        {/* Team Grid */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading team members...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading team members. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && teamMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No team members found. Please add team members in Strapi.</p>
          </div>
        )}

        {!isLoading && !error && teamMembers.length > 0 && (
          <TeamGrid members={teamMembers} />
        )}
      </Section>

      {/* Join Our Team CTA */}
      <Section className="py-16 md:py-20 bg-teal-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Join Our Mission?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We're always looking for passionate individuals who share our vision of transforming
            lives through healthcare and education. Whether as a team member, volunteer, or partner,
            there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Support Our Work
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Team;
