import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaGraduationCap } from 'react-icons/fa';
import Section from '../common/Section';

const DualFocus = () => {
  const focuses = [
    {
      title: 'Healthcare',
      icon: FaHeartbeat,
      description:
        'Providing essential medical services, maternal and child health support, surgical interventions, and preventative care to underserved communities.',
      stats: ['1,651 Medical Care Recipients', '29 Deliveries', '15 Surgeries'],
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
        'Empowering youth through scholarships, learning resources, mentorship programs, and school support to unlock their full potential.',
      stats: [
        'Scholarship Programs',
        'Learning Resources',
        'Mentorship Support',
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {focuses.map((focus, index) => {
          const Icon = focus.icon;
          return (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link to={focus.link} className="block group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform group-hover:-translate-y-2">
                  {/* Image Header with Icon Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={focus.image}
                      alt={`${focus.title} program`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = focus.fallback;
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
                  <div className="p-8">
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
                    <div className="flex items-center text-teal-500 font-semibold group-hover:text-teal-600 transition-colors">
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
    </Section>
  );
};

export default DualFocus;
