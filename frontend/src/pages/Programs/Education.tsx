import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';

interface WhatWeDoItem {
  title: string;
  description: string;
}

const WHAT_WE_DO: WhatWeDoItem[] = [
  {
    title: 'Scholarship Support',
    description:
      'Financial assistance to academically deserving students from indigent families at the Primary, Secondary, and Tertiary level.',
  },
  {
    title: 'Bursary Grants',
    description:
      'Emergency bursaries for students at risk of dropping out due to sudden financial hardship, ensuring no bright mind is lost to circumstance.',
  },
  {
    title: 'Mentorship Programmes',
    description:
      'Connecting young people with accomplished professionals who can guide them toward fulfilling careers and help them navigate the path ahead.',
  },
];

const Education = () => {
  return (
    <div>
      {/* Hero Section */}
      <ProgramHero
        title="Education"
        description="Dr. Olabisi knew from personal experience that education transforms lives. The Foundation he inspired continues that work, building pathways to quality education for those who need it most."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Story Section */}
      <Section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                A Legacy Born from Experience
              </h2>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Dr. John Oyediran Olabisi knew the power of education from personal
                experience. Despite the hardships of his early years, moving between
                relatives and depending on the kindness of strangers to fund his
                schooling, he pressed on, eventually becoming one of Nigeria's most
                accomplished medical professionals. That journey never left him.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The John Oyediran Olabisi Foundation honours that commitment by building
                pathways to quality education for young people in Iwajowa Local
                Government Area and across Oyo State.
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
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80"
                  alt="Students in a classroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed to keep promising students on the path
              to fulfilment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WHAT_WE_DO.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-1 bg-yellow-400 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Education — full-width image background */}
      <Section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80"
            alt="Mentor and student"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Education?
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Education is the single most reliable path out of poverty and into
                opportunity. In Iwajowa LGA and its surrounding communities, too many
                bright children are forced to abandon their studies, not because of
                lack of ability, but because of lack of resources.
              </p>
              <blockquote className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20 text-left">
                <p className="text-xl text-gray-100 italic leading-relaxed mb-4">
                  "Every child who succeeds is a community transformed."
                </p>
                <footer className="text-yellow-400 font-semibold">
                  — Dr. John Oyediran Olabisi
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Impact Statement */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=800&q=80"
                  alt="Graduation ceremony"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-500 rounded-card opacity-20 -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                One Scholarship at a Time
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through JOOF's education programmes, we aim to interrupt the cycle of
                disadvantage, one scholarship, one student, one family at a time.
              </p>
            </motion.div>
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
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get Involved
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
