import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import { MISSION_VISION } from '../../utils/constants';
// import { TIMELINE_MILESTONES } from '../../utils/constants';
// import Timeline from '../../components/about/Timeline';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About JOOF Foundation
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            {MISSION_VISION.tagline}
          </p>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.4 }}
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
                  loading="eager"
                  width="800"
                  height="600"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&auto=format&q=75';
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
                  width="800"
                  height="600"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format&q=75';
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

      {/* Founder's Vision Section */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Founder's Vision
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-card overflow-hidden shadow-card aspect-[4/5] bg-gray-100">
                <img
                  src="/images/team/founder.jpg"
                  alt="John Oyediran Olabisi - Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=John+Oyediran+Olabisi&size=600&background=0d9488&color=ffffff&bold=true`;
                  }}
                />
              </div>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="order-1 md:order-2"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="text-4xl font-serif text-teal-500 float-left mr-2 leading-none mt-1">"</span>
                  In 2015, I witnessed firsthand the devastating impact of inadequate healthcare and
                  limited educational opportunities in underserved communities across Nigeria. Families
                  struggling to access basic medical care. Children with untapped potential unable to
                  pursue their dreams due to lack of resources. It became clear that change was needed
                  — and that it starts with compassionate action.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The John Oyediran Olabisi Foundation was born from a simple but powerful belief:
                  every person deserves the chance to live a healthy life and reach their full
                  potential. What began as a vision has grown into a movement of hope, touching
                  thousands of lives and building pathways to brighter futures.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Today, I am humbled and inspired by the incredible team, partners, and supporters
                  who have joined us on this journey. Together, we continue to expand our reach,
                  deepen our impact, and remain steadfast in our commitment to serve with compassion,
                  integrity, and excellence.
                  <span className="text-4xl font-serif text-teal-500 ml-1">"</span>
                </p>

                <p className="text-gray-900 font-semibold text-lg">
                  — John Oyediran Olabisi
                </p>
                <p className="text-teal-600 font-medium">
                  Founder & Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      {/* <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From our founding in 2015 to today, explore the key milestones that have shaped
            JOOF Foundation and the lives we've touched along the way.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Timeline milestones={TIMELINE_MILESTONES} />
        </div>
      </Section> */}

      {/* Looking Forward Section */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Looking Forward
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-yellow-50 rounded-card p-8 md:p-12 shadow-card">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              As we look to the future, our commitment remains unwavering. We envision expanding our
              healthcare programs to reach even more communities, providing comprehensive medical care
              and support to those who need it most. Our education initiatives will continue to empower
              the next generation through scholarships, mentorship, and learning resources that unlock
              potential and create opportunities.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We are building partnerships, strengthening our programs, and innovating new ways to
              create sustainable, long-term impact. Every step forward is guided by our core values
              and driven by the stories of the individuals and families whose lives have been
              transformed through JOOF Foundation.
            </p>

            <p className="text-gray-900 font-semibold text-xl text-center">
              The journey continues, and we invite you to be part of it.
            </p>
          </div>

          {/* CTA Buttons */}
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
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
