import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaBaby,
  FaHospital,
  FaHandsHelping,
  FaPeopleArrows,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Section from '../common/Section';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useCountUp from '../../hooks/useCountUp';
import { useImpactStats } from '../../hooks/useApi';
import { IMPACT_STATS } from '../../utils/constants';

const ICON_MAP: IconType[] = [FaUserMd, FaHospital, FaHandsHelping, FaPeopleArrows, FaBaby];

interface StatCardProps {
  icon: IconType;
  number: number;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, number, label, delay = 0 }: StatCardProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  const count = useCountUp(number, 2000, 0, hasIntersected);

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
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
  const { data: statsData } = useImpactStats();

  const stats = statsData?.data?.length
    ? statsData.data.map((stat: { number: number; label: string }, i: number) => ({
        icon: ICON_MAP[i % ICON_MAP.length],
        number: stat.number,
        label: stat.label,
      }))
    : IMPACT_STATS.map((stat, i) => ({
        icon: ICON_MAP[i % ICON_MAP.length],
        number: stat.number,
        label: stat.label,
      }));

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Since its establishment, the John Oyediran Olabisi Foundation has touched thousands of
          lives through consistent, compassionate action. These numbers represent real people —
          mothers, fathers, children, and elders — who received care, support, and hope because
          of the generosity of our donors, volunteers, and partners.
        </p>
      </motion.div>
    </Section>
  );
};

export default ImpactStats;
