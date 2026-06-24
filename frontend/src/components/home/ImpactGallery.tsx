import { motion } from 'framer-motion';
import Section from '../common/Section';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  fallback: string;
}

const ImpactGallery = () => {
  const impactImages: GalleryItem[] = [
    {
      id: 1,
      image: '/images/gallery/healthcare-delivery.jpg',
      title: 'Healthcare Delivery',
      description: 'Providing essential medical services to underserved communities',
      fallback: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      image: '/images/gallery/education-program.jpg',
      title: 'Education Programs',
      description: 'Empowering students through scholarships and mentorship',
      fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      image: '/images/gallery/community-outreach.jpg',
      title: 'Community Outreach',
      description: 'Building stronger communities through engagement and support',
      fallback: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      image: '/images/gallery/maternal-care.jpg',
      title: 'Maternal Care',
      description: 'Supporting mothers and newborns with quality healthcare',
      fallback: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      image: '/images/gallery/youth-mentoring.jpg',
      title: 'Youth Mentoring',
      description: 'Guiding the next generation toward successful futures',
      fallback: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      image: '/images/gallery/medical-camp.jpg',
      title: 'Medical Camps',
      description: 'Free health screenings and treatments for communities in need',
      fallback: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',
    },
  ];

  return (
    <Section backgroundColor="gray" padding="large">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-3">
          Our Impact in Action
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See the Difference We're Making
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From healthcare delivery to education support, witness the real-world impact
          of JOOF Foundation across communities.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impactImages.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-card shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.fallback;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
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

export default ImpactGallery;
