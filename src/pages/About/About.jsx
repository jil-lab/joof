import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { MISSION_VISION } from '../../utils/constants';

// Shared animation variant — simple fade-up, no horizontal shifts
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay },
  }),
};

const viewportOpts = { once: true, margin: '-60px' };

const CORE_VALUES = [
  { title: 'Compassion', desc: 'Treating every individual with dignity, empathy, and care' },
  { title: 'Service',    desc: 'Placing the needs of others above our own' },
  { title: 'Excellence', desc: 'Pursuing the highest standard in all we do' },
  { title: 'Inclusion',  desc: 'Reaching the most vulnerable without discrimination' },
  { title: 'Integrity',  desc: 'Operating with transparency and accountability in all stewardship' },
];

const About = () => {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About JOOF Foundation
          </h1>
          {/* <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            {MISSION_VISION.tagline}
          </p> */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={viewportOpts}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                The John Oyediran Olabisi Foundation (JOOF) is a non-profit organization established in
                honor of the life and legacy of Deacon Dr. John Oyediran Olabisi — surgeon,
                philanthropist, servant-leader, and devoted son of Iganna land. Founded with a singular
                purpose, JOOF exists to carry forward the values that defined Dr. Olabisi's seven decades
                on earth: compassionate healthcare, access to quality education, and the upliftment of
                underserved communities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Born on 2 January 1950 as a prince of the ancient Iganna kingdom in Iwajowa Local
                Government Area of Oyo State, Nigeria, Dr. Olabisi rose from humble beginnings —
                supported by relations and well-wishers — to become one of Nigeria's most distinguished
                Ear, Nose and Throat (ENT) surgeons.
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
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&auto=format&q=75';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Established 2015</p>
                  <p className="text-2xl font-bold">10 Years of Service</p>
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
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  width="800"
                  height="600"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format&q=75';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
              viewport={viewportOpts}
              className="prose prose-lg max-w-none order-1 lg:order-2"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                He trained at the University of Ibadan and went on to obtain his fellowship at the Royal
                College of Surgeons in Glasgow, Scotland. His career spanned distinguished public service
                as Chief Medical Officer in the Oyo State Ministry of Health, the founding of Highland
                Specialist Hospital in Ibadan, and a lifetime of treating patients regardless of their
                ability to pay. His private hospital was known in the community simply as <em>ile aanu</em> — the house of mercy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Olabisi passed to glory on 13 January 2021. In his memory, his family, friends, and
                all who were touched by his generosity came together to establish the Foundation —
                ensuring that his spirit of service would live on, reaching thousands more lives across
                Nigeria and beyond.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {MISSION_VISION.mission}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
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
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.07}
                viewport={viewportOpts}
                className="bg-white rounded-card p-6 shadow-card border-t-4 border-teal-500 flex flex-col gap-3"
              >
                <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder's Vision */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Founder's Vision</h2>
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
                    e.target.src = `https://ui-avatars.com/api/?name=John+Oyediran+Olabisi&size=600&background=0d9488&color=ffffff&bold=true`;
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
                  A Nigeria where no family is turned away from a hospital because of poverty, no child
                  denied an education because of circumstance, and no community left behind because of
                  geography.
                </p>
                <span className="text-6xl font-serif text-teal-400 leading-none block text-right mb-6">"</span>
                <p className="text-gray-900 font-semibold text-lg">— John Oyediran Olabisi</p>
                <p className="text-teal-600 font-medium">Founder &amp; Director</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewportOpts}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-card bg-teal-100 overflow-hidden shadow-card flex items-center justify-center"
              >
                <span className="text-teal-300 text-5xl">📷</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.05}
            viewport={viewportOpts}
            className="bg-white rounded-card p-8 md:p-10 shadow-card border-l-4 border-yellow-400"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              On his 70th birthday in January 2020, Dr. Olabisi dedicated a newly completed hospital
              building in his hometown of Iganna — the{' '}
              <span className="font-semibold text-gray-900">
                Oba Olabisi Alabi Memorial Baptist Specialist Hospital
              </span>{' '}
              — as a gift to over 150,000 people in the catchment area who lacked access to specialist
              medical care. That act of generosity, his last great project, became the seed from which
              the Foundation grew. JOOF was born from the conviction that one person's dream,
              faithfully carried forward by a community, can transform countless lives.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="/programs"
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Explore Our Programs
          </a>
          <a
            href="/donate"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Support Our Mission
          </a>
        </div>
      </Section>

    </div>
  );
};

export default About;
