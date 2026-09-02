import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaBaby,
  FaHospital,
  FaHandsHelping,
  FaPeopleArrows,
  FaAssistiveListeningSystems,
  FaHeadphones,
  FaStethoscope,
  FaProcedures,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Section from '../common/Section';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useCountUp from '../../hooks/useCountUp';
import useImpactFigures from '../../hooks/useImpactFigures';

// Keyed on the stat's `key` so reordering entries in the Strapi admin can't
// scramble which icon belongs to which figure.
const ICON_BY_KEY: Record<string, IconType> = {
  audiology: FaAssistiveListeningSystems,
  'hearing-aids': FaHeadphones,
  'minor-surgeries': FaStethoscope,
  'major-surgeries': FaProcedures,
  'medical-care': FaUserMd,
  'safe-deliveries': FaBaby,
  'outreach-programs': FaHandsHelping,
};

// For any stat whose key isn't in the map above — e.g. a new one added in the
// admin — fall back to cycling through these.
const FALLBACK_ICONS: IconType[] = [FaUserMd, FaHospital, FaHandsHelping, FaPeopleArrows, FaBaby];

interface StatCardProps {
  icon: IconType;
  number: number;
  label: string;
  suffix: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, number, label, suffix, delay = 0 }: StatCardProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  const count = useCountUp(number, 2000, 0, hasIntersected);

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
        <Icon className="w-8 h-8 text-teal-600" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const ImpactStats = () => {
  const { figures } = useImpactFigures();

  const stats = figures.map((figure, i) => ({
    ...figure,
    icon: ICON_BY_KEY[figure.key] ?? FALLBACK_ICONS[i % FALLBACK_ICONS.length],
  }));

  return (
    <Section
      title="Our Impact in Numbers"
      subtitle="Making a Difference"
      backgroundColor="teal"
      padding="normal"
    >
      {/* Flex-wrap rather than a grid so a trailing partial row stays centred. */}
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.key}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
          >
            <StatCard
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          </div>
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
