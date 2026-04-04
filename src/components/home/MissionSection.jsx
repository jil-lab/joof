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
          To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality
          healthcare, education, and community development for underserved families in Iwajowa
          Local Government Area and across Nigeria.
          </p>
          {/* <p className="text-gray-700 text-lg leading-relaxed">
            Through our targeted interventions, we work tirelessly to create
            lasting positive change, empowering individuals and communities to
            reach their full potential and build a brighter future for
            generations to come.
          </p> */}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/mission/community-gathering.jpg"
              alt="Community members gathering at JOOF Foundation event"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              onError={(e) => {
                // Fallback to placeholder
                e.target.src = 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop';
              }}
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4">
              <p className="text-3xl font-bold text-teal-600">10+</p>
              <p className="text-sm text-gray-600">Years of Impact</p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 rounded-full opacity-10 -z-10"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default MissionSection;
