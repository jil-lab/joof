import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import { PROGRAMS } from '../../utils/constants';
import { useProgramsByType } from '../../hooks/useApi';
import { getStrapiImageUrl } from '../../utils/formatters';

const Community = () => {
  const { data: strapiData, isLoading } = useProgramsByType('community');

  // Get program from Strapi or fallback to constants
  const defaultProgram = PROGRAMS.find(p => p.slug === 'community');
  const strapiProgram = strapiData?.data?.[0];

  const program = strapiProgram
    ? {
        ...defaultProgram,
        title: strapiProgram.title,
        description: strapiProgram.description,
        shortDescription: strapiProgram.shortDescription,
        image: strapiProgram.images?.[0] ? getStrapiImageUrl(strapiProgram.images[0]) : defaultProgram.image,
      }
    : defaultProgram;

  if (!program) return null;

  return (
    <div>
      {/* Hero Section */}
      <ProgramHero
        title={program.title}
        description={program.description}
        image={program.image}
        icon={program.icon}
      />

      {/* Impact Stats */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Community Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building stronger, more resilient communities together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {program.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number.toLocaleString()}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Outreach - Image + Text */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-2xl">
                  🤝
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Community Outreach</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in meeting communities where they are. Our regular outreach programs bring
                essential services, support, and hope directly to rural and underserved areas. We listen,
                understand, and respond to the unique needs of each community.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Regular visits to 8 communities across Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Distribution of essential supplies and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Needs assessment and community engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Partnerships with local leaders and organizations</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="/images/programs/community-outreach.jpg"
                  alt="Community outreach program in action"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Development - Image + Text (Reversed) */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-card overflow-hidden shadow-lg">
                  <img
                    src="/images/programs/skills-training-1.jpg"
                    alt="Vocational skills training session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-card overflow-hidden shadow-lg mt-8">
                  <img
                    src="/images/programs/skills-training-2.jpg"
                    alt="Community members learning new skills"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-2xl">
                  🛠️
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Skills Development</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Economic empowerment starts with marketable skills. We provide vocational training programs
                that equip community members with practical skills to start businesses, secure employment,
                and achieve financial independence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✂️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tailoring & Fashion Design</h4>
                    <p className="text-gray-600 text-sm">Training in garment making and fashion entrepreneurship</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💇</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Beauty & Cosmetology</h4>
                    <p className="text-gray-600 text-sm">Professional beauty skills and salon management</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Technical & Repair Skills</h4>
                    <p className="text-gray-600 text-sm">Electronics repair, carpentry, and other technical trades</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Food Security - Image + Text */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-2xl">
                  🌾
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Food Security</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                No one should go hungry. Our food security programs provide immediate relief through
                emergency food distribution while promoting long-term sustainability through agricultural
                support, training, and resources to help communities become self-sufficient.
              </p>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-teal-700 mb-1">500+</div>
                    <div className="text-sm text-gray-700">Families Fed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-700 mb-1">50</div>
                    <div className="text-sm text-gray-700">Farmers Trained</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-teal-600">🍚</span>
                  <span>Emergency food relief distribution</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-teal-600">🌱</span>
                  <span>Agricultural training and resources</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-teal-600">🚜</span>
                  <span>Farming equipment and seedlings</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="/images/programs/food-security.jpg"
                  alt="Food distribution and agricultural support"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Infrastructure Projects - Full Width Section */}
      <Section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/programs/infrastructure-bg.jpg"
            alt="Community infrastructure development"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 to-teal-800/90" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center text-2xl">
                🏗️
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Infrastructure Development</h3>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Building the foundations for thriving communities through essential infrastructure projects
              that improve quality of life and create opportunities for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                <img
                  src="/images/programs/water-project.jpg"
                  alt="Water well construction project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-4xl mb-4">💧</div>
              <h4 className="text-xl font-bold text-white mb-3">Clean Water Access</h4>
              <p className="text-gray-200">
                Building wells and water systems to provide clean, safe drinking water to communities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                <img
                  src="/images/programs/community-center.jpg"
                  alt="Community center construction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-4xl mb-4">🏘️</div>
              <h4 className="text-xl font-bold text-white mb-3">Community Centers</h4>
              <p className="text-gray-200">
                Creating gathering spaces for education, training, and community activities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                <img
                  src="/images/programs/sanitation-project.jpg"
                  alt="Sanitation facility improvement"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-4xl mb-4">🚿</div>
              <h4 className="text-xl font-bold text-white mb-3">Sanitation Facilities</h4>
              <p className="text-gray-200">
                Improving hygiene and health through proper sanitation infrastructure
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Community Testimonial */}
      <Section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌟</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Community Voice
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[3/4] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="/images/testimonials/samuel.jpg"
                  alt="Elder Samuel Okafor - Community Leader"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 md:p-10 border border-white/20">
                <blockquote className="text-xl md:text-2xl text-white mb-6 italic leading-relaxed">
                  "The community outreach programs brought hope and practical support to our village. JOOF Foundation truly cares about making a difference."
                </blockquote>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-bold text-white text-xl mb-1">Elder Samuel Okafor</p>
                  <p className="text-gray-200 mb-4">Community Leader • Village Elder</p>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <span>🤝</span>
                    <span className="text-sm font-medium">Partnership since 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Impact Statement */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🌍</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
              {program.impact}
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of our community programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-video rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <img
                  src={image}
                  alt={`Community program ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Empower Communities Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your support helps us create sustainable change in communities, providing
              essential services, skills training, and infrastructure development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="primary" size="lg">
                  Support Communities
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg">
                  View All Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Community;
