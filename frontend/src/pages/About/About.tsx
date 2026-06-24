import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { useAboutPage, useCoreValues } from '../../hooks/useApi';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay },
  }),
};

const viewportOpts = { once: true, margin: '-60px' };

const About = () => {
  const { data: aboutData } = useAboutPage();
  const { data: coreValuesData } = useCoreValues();

  const about = aboutData?.data;
  const coreValues = coreValuesData?.data ?? [];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {about?.heroTitle ?? 'About JOOF Foundation'}
          </h1>
        </div>
      </Section>

      {/* Foundation History */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {about?.foundationSectionTitle ?? 'Our Foundation'}
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={viewportOpts}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                {about?.foundationParagraph1 ?? 'The John Oyediran Olabisi Foundation (JOOF) is a non-profit organization established in honor of the life and legacy of Deacon Dr. John Oyediran Olabisi.'}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {about?.foundationParagraph2 ?? 'Born on 2 January 1950 as a prince of the ancient Iganna kingdom in Iwajowa Local Government Area of Oyo State, Nigeria.'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
              viewport={viewportOpts}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/foundation-work.jpg"
                  alt="JOOF Foundation team working with community members"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="eager"
                  width="800"
                  height="600"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/programs/hospital2.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">{about?.foundationBadgeYear ?? 'Established 2015'}</p>
                  <p className="text-2xl font-bold">{about?.foundationBadgeLabel ?? '10 Years of Service'}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={viewportOpts}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/community-impact.jpg"
                  alt="Communities benefiting from JOOF Foundation programs"
                  className="w-full h-full object-cover object-top aspect-[4/3]"
                  loading="lazy"
                  width="800"
                  height="600"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/about/story2.jpg'; }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
              viewport={viewportOpts}
              className="prose prose-lg max-w-none order-1 lg:order-2"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                {about?.foundationParagraph3 ?? 'He trained at the University of Ibadan and went on to obtain his fellowship at the Royal College of Surgeons in Glasgow, Scotland.'}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {about?.foundationParagraph4 ?? 'Dr. Olabisi passed to glory on 13 January 2021. In his memory, his family, friends, and all who were touched by his generosity came together to establish the Foundation.'}
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="bg-teal-50 rounded-card p-8 md:p-10 border-l-4 border-teal-500"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {about?.missionSectionTitle ?? 'Our Mission'}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {about?.missionBody ?? 'To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality healthcare, education, and community development for underserved families.'}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      {coreValues.length > 0 && (
        <Section className="py-16 md:py-20 bg-teal-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={viewportOpts}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value: { id: number; icon?: string; title: string; description?: string }, i: number) => (
                <motion.div
                  key={value.id}
                  variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.07}
                  viewport={viewportOpts}
                  className="bg-white rounded-card p-6 shadow-card border-t-4 border-teal-500 flex flex-col gap-3"
                >
                  {value.icon && <span className="text-3xl">{value.icon}</span>}
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Founder's Vision */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {about?.founderVisionSectionTitle ?? "The Founder's Vision"}
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={viewportOpts}
            >
              <div className="relative rounded-card overflow-hidden shadow-card aspect-[4/5] bg-gray-100">
                <img
                  src="/images/team/founder.jpg"
                  alt="John Oyediran Olabisi - Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="750"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=John+Oyediran+Olabisi&size=600&background=0d9488&color=ffffff&bold=true`;
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
              viewport={viewportOpts}
            >
              <div className="bg-teal-50 rounded-card p-8 border-l-4 border-teal-500">
                <span className="text-6xl font-serif text-teal-400 leading-none block mb-4">"</span>
                <p className="text-gray-700 leading-relaxed text-xl italic mb-6">
                  {about?.founderVisionQuote ?? 'A Nigeria where no family is turned away from a hospital because of poverty, no child denied an education because of circumstance, and no community left behind because of geography.'}
                </p>
                <span className="text-6xl font-serif text-teal-400 leading-none block text-right mb-6">"</span>
                <p className="text-gray-900 font-semibold text-lg">— {about?.founderVisionName ?? 'John Oyediran Olabisi'}</p>
                <p className="text-teal-600 font-medium">{about?.founderVisionRole ?? 'Founder & Director'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {about?.ourStorySectionTitle ?? 'Our Story'}
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden shadow-card bg-teal-50">
              <img
                src="/images/about/story3.jpg"
                alt="Dr. John Oyediran Olabisi in traditional attire"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/about/story3.jpg'; }}
              />
            </div>
            <div className="aspect-[4/3] rounded-card overflow-hidden shadow-card bg-teal-50">
              <img
                src="/images/about/story1.jpg"
                alt="Dr. John Oyediran Olabisi"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/about/story2.jpg'; }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.05}
            viewport={viewportOpts}
            className="bg-white rounded-card p-8 md:p-10 shadow-card border-l-4 border-yellow-400"
          >
            {about?.ourStoryBody ? (
              <p className="text-gray-700 leading-relaxed text-lg">
                {about.ourStoryHighlightedName
                  ? (() => {
                      const parts = about.ourStoryBody.split(about.ourStoryHighlightedName);
                      return parts.map((part: string, i: number) =>
                        i < parts.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="font-semibold text-gray-900">{about.ourStoryHighlightedName}</span>
                          </span>
                        ) : part
                      );
                    })()
                  : about.ourStoryBody}
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed text-lg">
                On his 70th birthday in January 2020, Dr. Olabisi dedicated a newly completed hospital
                building in his hometown of Iganna — the{' '}
                <span className="font-semibold text-gray-900">
                  Oba Olabisi Alabi Memorial Baptist Specialist Hospital
                </span>{' '}
                — as a gift to over 150,000 people in the catchment area who lacked access to specialist
                medical care.
              </p>
            )}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href={about?.ctaPrimaryUrl ?? '/programs'}
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {about?.ctaPrimaryLabel ?? 'Explore Our Programs'}
          </a>
          <a
            href={about?.ctaSecondaryUrl ?? '/donate'}
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {about?.ctaSecondaryLabel ?? 'Support Our Mission'}
          </a>
        </div>
      </Section>

    </div>
  );
};

export default About;
