import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import { PROGRAMS } from '../../utils/constants';
import { useProgramsByType } from '../../hooks/useApi';
import { getStrapiImageUrl } from '../../utils/formatters';

const Healthcare = () => {
  const { data: strapiData, isLoading } = useProgramsByType('healthcare');

  // Get program from Strapi or fallback to constants
  const defaultProgram = PROGRAMS.find(p => p.slug === 'healthcare');
  const strapiProgram = strapiData?.data?.[0];

  const program = strapiProgram
    ? {
        ...defaultProgram, // Keep structure from constants
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
              Our Healthcare Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real numbers, real lives changed
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

      {/* Medical Outreach - Image + Text */}
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
                  🩺
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Medical Outreach</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our medical outreach programs bring essential healthcare directly to underserved communities.
                Through regular health camps, we provide free medical consultations, basic diagnostics, and
                distribute essential medications to those who need them most.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Free medical consultations with qualified doctors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Basic health screenings and diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Distribution of essential medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span>Health education and disease prevention awareness</span>
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
                  src="/images/programs/healthcare-outreach.jpg"
                  alt="Medical outreach team providing healthcare"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Maternal & Child Health - Image + Text (Reversed) */}
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
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="/images/programs/maternal-health.jpg"
                  alt="Maternal and child healthcare services"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-card opacity-20 -z-10" />
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
                  👶
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Maternal & Child Health</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to ensuring safe pregnancies and healthy childhoods. Our comprehensive
                maternal and child health program provides prenatal care, supports safe deliveries, and
                continues with postnatal care and child immunization programs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-1">29</div>
                  <div className="text-sm text-gray-600">Safe Deliveries</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Prenatal Visits</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Every mother deserves quality healthcare, and every child deserves a healthy start to life."
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Surgical Interventions - Image + Text */}
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
                  ⚕️
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Surgical Interventions</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For many in underserved communities, access to surgical care is beyond reach. We bridge
                this gap by sponsoring critical surgical procedures that save lives and restore hope. From
                emergency operations to life-improving surgeries, we ensure no one is left behind.
              </p>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">💝</span>
                  <h4 className="font-bold text-gray-900">15 Lives Transformed</h4>
                </div>
                <p className="text-gray-700">
                  We've successfully sponsored 15 life-changing surgical procedures, giving individuals
                  a second chance at life and the ability to provide for their families.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-card overflow-hidden shadow-lg">
                  <img
                    src="/images/programs/surgery-1.jpg"
                    alt="Surgical intervention program"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-card overflow-hidden shadow-lg">
                  <img
                    src="/images/programs/surgery-2.jpg"
                    alt="Post-surgery patient care"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Health Education - Full Width Image Section */}
      <Section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/programs/health-education-bg.jpg"
            alt="Health education session"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/90" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Health Education & Prevention
              </h3>
              <p className="text-xl leading-relaxed mb-8">
                Prevention is better than cure. We conduct comprehensive health education programs
                covering hygiene practices, nutrition, disease prevention, and healthy living.
                Empowering communities with knowledge creates lasting impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-3">🧼</div>
                  <h4 className="font-bold mb-2">Hygiene Practices</h4>
                  <p className="text-sm text-gray-200">Teaching proper sanitation and hygiene to prevent diseases</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-3">🥗</div>
                  <h4 className="font-bold mb-2">Nutrition Education</h4>
                  <p className="text-sm text-gray-200">Promoting balanced diets and proper nutrition</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="font-bold mb-2">Disease Prevention</h4>
                  <p className="text-sm text-gray-200">Awareness on preventable diseases and early detection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the transformation and impact of our healthcare programs through the lives we touch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-[4/3] rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
              >
                <img
                  src={image}
                  alt={`Healthcare program impact ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Statement */}
      <Section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">💚</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 italic leading-relaxed">
              "{program.impact}"
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Help Us Save Lives
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your donation directly supports our healthcare programs, providing medical care,
              surgical interventions, and maternal health services to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="primary" size="lg">
                  Donate Now
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

export default Healthcare;
