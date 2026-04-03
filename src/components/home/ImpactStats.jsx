import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaBaby,
  FaHospital,
  FaHandsHelping,
} from 'react-icons/fa';
import Section from '../common/Section';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useCountUp from '../../hooks/useCountUp';

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  const count = useCountUp(number, 2000, 0, hasIntersected);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
        <Icon className="w-8 h-8 text-teal-600" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}
        {number > 999 && '+'}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      icon: FaUserMd,
      number: 1651,
      label: 'Medical Care Recipients',
    },
    {
      icon: FaBaby,
      number: 29,
      label: 'Deliveries',
    },
    {
      icon: FaHospital,
      number: 15,
      label: 'Surgical Interventions',
    },
    {
      icon: FaHandsHelping,
      number: 3,
      label: 'Outreach Programs',
    },
  ];

  return (
    <Section
      title="Our Impact in Numbers"
      subtitle="Making a Difference"
      backgroundColor="teal"
      padding="normal"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Additional Context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          These numbers represent real lives transformed through our dedicated
          programs. Every statistic tells a story of hope, healing, and
          empowerment in communities we serve.
        </p>
      </motion.div>
    </Section>
  );
};

export default ImpactStats;
