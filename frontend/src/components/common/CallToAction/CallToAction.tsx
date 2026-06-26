import { motion } from 'framer-motion';
import Section from '../Section/Section';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CallToAction = ({
  title = 'Join Us in Making a Difference',
  description = 'Your support enables us to expand our reach and deepen our impact. Together, we can create brighter futures for more communities.',
  primaryLabel = 'Support Our Programmes',
  primaryHref = '/donate',
  secondaryLabel = 'Get Involved',
  secondaryHref = '/contact',
}: CallToActionProps) => {
  return (
    <Section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {secondaryLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default CallToAction;
