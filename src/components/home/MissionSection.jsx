import { motion } from 'framer-motion';
import Section from '../common/Section';

const MissionSection = () => {
  return (
    <Section backgroundColor="white" padding="normal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Building Healthier, Educated Communities
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The John Oyediran Olabisi Foundation is dedicated to transforming
            lives through comprehensive healthcare services and quality
            education programs. We believe that access to healthcare and
            education are fundamental rights that pave the way for sustainable
            community development.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through our targeted interventions, we work tirelessly to create
            lasting positive change, empowering individuals and communities to
            reach their full potential and build a brighter future for
            generations to come.
          </p>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl overflow-hidden shadow-xl">
            {/* Placeholder for image - replace with actual image */}
            <div className="w-full h-full flex items-center justify-center bg-teal-500/10">
              <div className="text-center p-8">
                <svg
                  className="w-32 h-32 mx-auto text-teal-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p className="text-gray-600 italic">
                  Mission image will be placed here
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default MissionSection;
