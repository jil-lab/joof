import { motion } from 'framer-motion';
import Section from '../common/Section';
import { useSiteSettings } from '../../hooks/useApi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const getImageUrl = (url: string | undefined): string | null => {
  if (!url) return null;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const MissionSection = () => {
  const { data: settingsData } = useSiteSettings();
  const settings = settingsData?.data;

  const missionTitle = settings?.missionTitle || 'Building Healthier, Educated Communities';
  const missionBody =
    settings?.missionBody ||
    'To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality healthcare, education, and community development for underserved families in Iwajowa Local Government Area and across Nigeria.';
  const missionImageUrl = settings?.missionImage
    ? getImageUrl(settings.missionImage.url)
    : '/images/mission/home_mission_2.jpg';

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{missionTitle}</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{missionBody}</p>
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
              src={missionImageUrl ?? undefined}
              alt="Community members gathering at JOOF Foundation event"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop';
              }}
            />
            <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4">
              <p className="text-3xl font-bold text-teal-600">5+</p>
              <p className="text-sm text-gray-600">Years of Impact</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 rounded-full opacity-10 -z-10" />
        </motion.div>
      </div>
    </Section>
  );
};

export default MissionSection;
