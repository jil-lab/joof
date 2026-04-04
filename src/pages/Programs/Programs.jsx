import { motion } from 'framer-motion';
import ProgramCard from '../../components/programs/ProgramCard';
import Section from '../../components/common/Section/Section';
import CallToAction from '../../components/common/CallToAction/CallToAction';
import { PROGRAMS, MISSION_VISION } from '../../utils/constants';

const Programs = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </Section>

      <CallToAction />
    </div>
  );
};

export default Programs;
