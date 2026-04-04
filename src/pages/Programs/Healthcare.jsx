import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import CallToAction from '../../components/common/CallToAction/CallToAction';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80';
const LEGACY_IMAGE = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80';
const HOSPITAL_IMAGE = 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80';
const PARTNERSHIP_IMAGE = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80';
const WHY_BG_IMAGE = 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=80';

const SURGICAL_SERVICES = [
  'Ear, Nose and Throat (ENT)',
  'Orthopedics',
  'Urology',
  'Gynaecology',
];

const MEDICAL_SERVICES = [
  'Cardiology',
  'Gastroenterology',
  'Dermatology',
  'Referral and Emergency Care',
];

const Healthcare = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/80" />
        <div className="relative h-full container-custom flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Healthcare
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Continuing a lifetime of service, bringing specialist medical care to the communities
              Dr. John Oyediran Olabisi devoted his life to serving.
            </p>
          </motion.div>
        </div>
      </div>

      {/* A Legacy of Mercy */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Mercy
              </h2>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Healthcare was not merely a profession for Dr. John Oyediran Olabisi, it was his
                calling, his ministry, and his life's most consistent act of love. For over four
                decades, he served patients across Oyo State, often without payment, often going the
                extra mile to ensure that no one who walked through his door left without care.
              </p>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                His hospital was called <span className="italic font-medium text-gray-800">Ile aanu</span>, the house of mercy, and that name tells you everything.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The John Oyediran Olabisi Foundation continues that mission through its flagship
                healthcare project: the operational launch and ongoing support of the Oba Olabisi
                Alabi Memorial Baptist Specialist Hospital in Iganna, Oyo State.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src={LEGACY_IMAGE}
                  alt="Doctor providing care to a patient"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Hospital */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src={HOSPITAL_IMAGE}
                  alt="Oba Olabisi Alabi Memorial Baptist Specialist Hospital"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The <span className="bg-yellow-200 text-gray-900 px-1 rounded">Oba Olabisi Alabi</span> Memorial Baptist Specialist Hospital
              </h2>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Dedicated by Dr. Olabisi on his 70th birthday in January 2020, the hospital stands as
                a monument to his love for his people and his hometown. Located in Iganna, Iwajowa
                Local Government Area, it was designed to function as a secondary referral health
                centre for surrounding communities.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                  Catchment Population
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-1">150,000+</p>
                <p className="text-gray-600">
                  individuals across Iwajowa Local Government Area and surrounding communities stand
                  to benefit directly from this hospital.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Planned Specialist Services */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planned Specialist Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Once fully operational, the hospital will provide a comprehensive range of surgical
              and medical specialty services.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-card p-8 shadow-card border-t-4 border-teal-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-5">Surgical Services</h3>
              <ul className="space-y-3">
                {SURGICAL_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 w-4 h-4 rounded-full bg-teal-100 border-2 border-teal-500 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-card p-8 shadow-card border-t-4 border-teal-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-5">Medical Specialty Services</h3>
              <ul className="space-y-3">
                {MEDICAL_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 w-4 h-4 rounded-full bg-teal-100 border-2 border-teal-500 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Partnership with the NBC */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/partners/nbc-logo.png"
                  alt="Nigerian Baptist Convention logo"
                  className="w-40 h-40 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Partnership with the <span className="bg-yellow-200 text-gray-900 px-1 rounded">Nigerian Baptist Convention</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                To ensure the highest standards of operation, JOOF is collaborating with the{' '}
                Nigerian Baptist Convention (NBC) to manage the hospital's day-to-day operations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The NBC brings a proven track record of successfully running hospitals across Nigeria, 
                making this partnership a strong foundation for sustainable, quality healthcare
                delivery in Iganna.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="aspect-[4/3] w-full rounded-card overflow-hidden shadow-2xl">
                <img
                  src={PARTNERSHIP_IMAGE}
                  alt="Medical professionals collaborating"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={WHY_BG_IMAGE}
            alt="Rural community in Nigeria"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/90" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why This Matters
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-100">
              In many parts of rural Oyo State, accessing specialist healthcare means travelling
              hours and spending money many families do not have. The consequences are devastating
             , treatable conditions go untreated, preventable deaths occur, and communities suffer.
            </p>
            <p className="text-xl leading-relaxed text-gray-100">
              The Oba Olabisi Alabi Memorial Baptist Specialist Hospital is our answer to that
              suffering. By making this hospital fully operational, JOOF will help bring
              world-class specialist care to the doorstep of one of Nigeria's underserved
              communities, fulfilling the final dream of a man who spent his life making
              medicine accessible to all.
            </p>
            <br />
            <p className="text-xl leading-relaxed text-gray-100">
            Every contribution brings us closer to opening these doors and delivering the care our
            communities desperately need. Whether through financial donations, medical equipment,
            professional volunteering, or partnership, your support is the difference between a
            building and a living, breathing hospital. Join us in completing Dr. Olabisi's dream.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Involved
            </a>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Healthcare;
