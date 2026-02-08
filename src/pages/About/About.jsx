import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { MISSION_VISION, CORE_VALUES } from '../../utils/constants';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About JOOF Foundation
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            {MISSION_VISION.tagline}
          </p>
        </motion.div>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-teal-50 rounded-card p-8 md:p-10 border-l-4 border-teal-500"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-4xl mr-3">🎯</span>
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {MISSION_VISION.mission}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-50 rounded-card p-8 md:p-10 border-l-4 border-yellow-400"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-4xl mr-3">🔭</span>
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {MISSION_VISION.vision}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Foundation History with Images */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                The John Oyediran Olabisi Foundation (JOOF) was established in 2015 with a clear vision:
                to transform lives through accessible healthcare and quality education. Founded by John
                Oyediran Olabisi, a visionary leader who witnessed firsthand the challenges faced by
                underserved communities in Nigeria, JOOF has grown from a small initiative into a
                registered charity making significant impact across multiple communities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                What began as a single medical outreach program has evolved into a comprehensive foundation
                addressing critical needs in healthcare, education, and community development. Our work is
                driven by the belief that every individual, regardless of their background or circumstances,
                deserves access to basic healthcare services and educational opportunities that can unlock
                their potential.
              </p>
            </motion.div>

            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/foundation-work.jpg"
                  alt="JOOF Foundation team working with community members"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Established 2015</p>
                  <p className="text-2xl font-bold">10 Years of Service</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/community-impact.jpg"
                  alt="Communities benefiting from JOOF Foundation programs"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop';
                  }}
                />
              </div>
            </motion.div>

            {/* Continued Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none order-1 lg:order-2"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, JOOF has provided medical care to over 1,650 individuals, facilitated 29
                safe deliveries, performed 15 life-changing surgical procedures, and supported countless
                students through our education scholarship and mentorship programs. Our community outreach
                initiatives continue to bring hope, resources, and practical support to those who need it most.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, as a registered charity, JOOF stands as a beacon of hope and a testament to what
                compassionate action can achieve. We continue to expand our reach, deepen our impact, and
                work tirelessly toward our vision of a Nigeria where every person has the opportunity to
                thrive and build a brighter future.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These values guide every decision we make and every action we take as we work
            toward our mission of transforming lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border-t-4 border-teal-500"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Registered Charity Information */}
      <Section className="py-16 md:py-20 bg-teal-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-card shadow-card p-8 md:p-10">
            <div className="flex items-start mb-6">
              <FaCheckCircle className="text-teal-500 text-3xl mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Registered Charity Status
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The John Oyediran Olabisi Foundation is a registered charitable organization
                  committed to operating with the highest standards of transparency, accountability,
                  and ethical conduct. Our registered status ensures that all donations and resources
                  are managed responsibly and directed toward our mission of serving underserved
                  communities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Transparency & Accountability
                </h3>
                <p className="text-gray-600 text-sm">
                  We maintain detailed records of all financial transactions and program outcomes,
                  ensuring donors and stakeholders have full visibility into our operations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tax-Deductible Donations
                </h3>
                <p className="text-gray-600 text-sm">
                  As a registered charity, contributions to JOOF Foundation may be eligible for
                  tax deductions in accordance with applicable regulations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Governance & Oversight
                </h3>
                <p className="text-gray-600 text-sm">
                  Our foundation operates under strong governance structures with regular oversight
                  to ensure we remain true to our mission and values.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Impact Reporting
                </h3>
                <p className="text-gray-600 text-sm">
                  We regularly publish reports documenting our programs, outcomes, and the tangible
                  impact of donor contributions in the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
