import { motion } from 'framer-motion';

interface ProgramHeroProps {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

const ProgramHero = ({ title, description, image, icon }: ProgramHeroProps) => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/80" />
        </>
      )}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-7xl mb-6"
            >
              {icon}
            </motion.div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgramHero;
