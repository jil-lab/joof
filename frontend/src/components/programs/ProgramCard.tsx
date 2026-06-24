import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Program {
  slug: string;
  image: string;
  title: string;
  shortDescription: string;
}

interface ProgramCardProps {
  program: Program;
  index?: number;
}

const ProgramCard = ({ program, index = 0 }: ProgramCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <Link to={`/programs/${program.slug}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent z-10" />
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-2">
              {program.title}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            {program.shortDescription}
          </p>
          <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
            Learn More
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;
