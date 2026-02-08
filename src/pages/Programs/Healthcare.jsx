import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import { PROGRAMS } from '../../utils/constants';

const Healthcare = () => {
  const program = PROGRAMS.find(p => p.slug === 'healthcare');

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

      {/* Program Features */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet diverse community needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {program.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-3xl shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 italic">
              "{program.impact}"
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of our healthcare programs
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
                  alt={`Healthcare program ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
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
