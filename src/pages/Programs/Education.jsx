import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';
import { PROGRAMS } from '../../utils/constants';

const Education = () => {
  const program = PROGRAMS.find(p => p.slug === 'education');

  if (!program) return null;

  return (
    <div>
      {/* Hero Section */}
      <ProgramHero
        title={program.title}
        description={program.description}
        image={program.image}
        icon={program.icon}
      />

      {/* Impact Stats */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Education Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Investing in futures, one student at a time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {program.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number.toLocaleString()}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Program Features */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive education support designed to unlock potential
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {program.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-3xl shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Scholarship Program - Image + Text */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                  🎓
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Scholarship Program</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Financial barriers should never stand between a bright student and their dreams. Our
                scholarship program provides full tuition coverage, books, supplies, and ongoing support
                to deserving students from underprivileged backgrounds.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span>Full tuition and examination fees coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span>School supplies, textbooks, and uniforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span>Academic monitoring and mentorship</span>
                </li>
              </ul>
              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
                <p className="text-gray-800 font-medium">
                  <span className="text-yellow-600">25 scholarships</span> awarded, transforming 25 futures
                </p>
              </div>
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
                  src="/images/programs/scholarship-students.jpg"
                  alt="Scholarship program beneficiaries"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Learning Resources - Image + Text (Reversed) */}
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-card overflow-hidden shadow-lg">
                  <img
                    src="/images/programs/learning-resources-1.jpg"
                    alt="Educational materials distribution"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-card overflow-hidden shadow-lg mt-8">
                  <img
                    src="/images/programs/learning-resources-2.jpg"
                    alt="Students with new learning materials"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                  📖
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Learning Resources</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Access to quality learning materials shouldn't be a luxury. We supply schools in
                underserved areas with textbooks, digital learning tools, library books, and
                educational equipment to create conducive learning environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Textbooks & Materials</h4>
                    <p className="text-gray-600 text-sm">Distributing over 500 textbooks across 5 partner schools</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Digital Learning Tools</h4>
                    <p className="text-gray-600 text-sm">Tablets and educational software for modern learning</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mentorship Program - Full Width Image Section */}
      <Section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/programs/mentorship-bg.jpg"
            alt="Mentorship session"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <h3 className="text-3xl font-bold">Mentorship Program</h3>
                </div>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Beyond academics, students need guidance to navigate their career paths. We connect
                  students with experienced professionals who provide mentorship, career counseling,
                  and real-world insights to help them make informed decisions about their futures.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-4xl mb-3">🌟</div>
                  <p className="text-gray-200 leading-relaxed">
                    "Having a mentor changed my perspective on what was possible. I'm now pursuing
                    engineering, something I never thought I could achieve."
                  </p>
                  <p className="text-yellow-400 font-semibold mt-3">- Mentorship Program Participant</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="text-3xl mb-2">💼</div>
                    <h4 className="text-white font-bold mb-2">Career Guidance</h4>
                    <p className="text-gray-300 text-sm">Professional mentors share industry insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="text-white font-bold mb-2">Goal Setting</h4>
                    <p className="text-gray-300 text-sm">Setting and achieving academic milestones</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="text-white font-bold mb-2">Personal Development</h4>
                    <p className="text-gray-300 text-sm">Building confidence and life skills</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="text-white font-bold mb-2">Progress Tracking</h4>
                    <p className="text-gray-300 text-sm">Regular check-ins and support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* School Support - Image + Text */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                  🏫
                </div>
                <h3 className="text-3xl font-bold text-gray-900">School Infrastructure Support</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A conducive learning environment is crucial for effective education. We partner with
                schools to renovate classrooms, build libraries, improve sanitation facilities, and
                create spaces where students can thrive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-lg">
                  <div className="text-3xl mb-2">🏗️</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
                  <div className="text-sm text-gray-700">Schools Renovated</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-lg">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
                  <div className="text-sm text-gray-700">Libraries Built</div>
                </div>
              </div>
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
                  src="/images/programs/school-infrastructure.jpg"
                  alt="Renovated school classroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-500 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Success Story */}
      <Section className="py-16 md:py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Story
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[3/4] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="/images/testimonials/chioma.jpg"
                  alt="Chioma Adeyemi - Scholarship Beneficiary"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-card p-8 md:p-10 shadow-xl">
                <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 italic leading-relaxed">
                  "Thanks to the scholarship program, I was able to complete my education and now I am giving back to my community. JOOF Foundation invests in futures."
                </blockquote>
                <div className="border-t border-gray-300 pt-6">
                  <p className="font-bold text-gray-900 text-xl mb-1">Chioma Adeyemi</p>
                  <p className="text-gray-600 mb-4">Student Beneficiary • University Graduate</p>
                  <div className="flex items-center gap-2 text-yellow-600">
                    <span>✨</span>
                    <span className="text-sm font-medium">Now working as a community health educator</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Impact Statement */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">📖</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
              {program.impact}
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of our education programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-video rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <img
                  src={image}
                  alt={`Education program ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Invest in Tomorrow's Leaders
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your support helps us provide scholarships, learning resources, and mentorship
              to students who dream of a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="primary" size="lg">
                  Support Education
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg">
                  View All Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Education;
