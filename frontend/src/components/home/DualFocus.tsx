import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaGraduationCap } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Section from '../common/Section';

interface FocusItem {
  title: string;
  icon: IconType;
  description: string;
  stats: string[];
  link: string;
  color: string;
  gradient: string;
  image: string;
  fallback: string;
}

const DualFocus = () => {
  const focuses: FocusItem[] = [
    {
      title: 'Healthcare',
      icon: FaHeartbeat,
      description:
        "Good health should never be a privilege. We carry forward Dr. Olabisi's lifelong mission of mercy by supporting specialist hospital care in Iganna, bringing skilled medical services, maternal care, and surgical support to communities that have gone without for too long.",
      stats: [
        'General & Specialist Outpatient Care',
        'Maternal Health & Safe Deliveries',
        'Surgical Procedures & Emergency Care',
      ],
      link: '/programs/healthcare',
      color: 'teal',
      gradient: 'from-teal-600 via-teal-700 to-teal-800',
      image: '/images/programs/healthcare-hero.jpg',
      fallback: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    },
    {
      title: 'Education',
      icon: FaGraduationCap,
      description:
        'Every child deserves the chance to learn, grow, and become. We open doors for young people across Oyo State, providing scholarships, emergency grants, and mentorship so that financial hardship never has the final say over a bright future.',
      stats: [
        'Scholarship Support for secondary & tertiary students',
        'Bursary Grants for students at risk of dropping out',
        'Mentorship Programmes with accomplished professionals',
      ],
      link: '/programs/education',
      color: 'yellow',
      gradient: 'from-yellow-400 to-yellow-500',
      image: '/images/programs/education-hero.jpg',
      fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    },
  ];

  return (
    <Section
      title="Our Focus Areas"
      subtitle="What We Do"
      backgroundColor="gray"
      padding="normal"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {focuses.map((focus, index) => {
          const Icon = focus.icon;
          return (
            <motion.div
              key={focus.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link to={focus.link} className="block group h-full">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2 flex flex-col">
                  {/* Image Header with Icon Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={focus.image}
                      alt={`${focus.title} program`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = focus.fallback;
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${focus.gradient} opacity-80`}></div>

                    {/* Icon and Title Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                      <Icon className="w-16 h-16 mb-4" />
                      <h3 className="text-3xl font-bold">{focus.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {focus.description}
                    </p>

                    {/* Stats/Highlights */}
                    <div className="space-y-3 mb-6">
                      {focus.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className={`w-5 h-5 mr-3 text-${focus.color}-500 flex-shrink-0`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-auto flex items-center text-teal-500 font-semibold group-hover:text-teal-600 transition-colors">
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="/programs"
          className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Explore All Our Programs
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
};

export default DualFocus;
