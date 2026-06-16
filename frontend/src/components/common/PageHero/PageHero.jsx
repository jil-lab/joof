import { motion } from 'framer-motion';
import Section from '../Section/Section';

const PageHero = ({ eyebrow, title, subtitle }) => {
  return (
    <Section className="bg-gradient-teal text-white py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        {eyebrow && (
          <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl text-teal-50 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </Section>
  );
};

export default PageHero;
