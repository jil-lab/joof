import { motion } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TimelineItem = ({ milestone, index, isLeft }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center mb-12 md:mb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
          {/* Image */}
          {milestone.image && (
            <div className="w-full h-48 overflow-hidden bg-gray-100">
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Hide image container if image fails to load
                  e.target.parentElement.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <div className="inline-block bg-teal-500 text-white font-bold text-sm px-3 py-1 rounded-full mb-3">
              {milestone.year}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </div>

      {/* Center Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md z-10"></div>

      {/* Spacer for alignment */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

const Timeline = ({ milestones }) => {
  if (!milestones || milestones.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No timeline milestones to display.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical Line (Desktop only) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700"></div>

      {/* Mobile Left Line */}
      <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700"></div>

      {/* Timeline Items */}
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Mobile Timeline Dot */}
            <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md z-10"></div>

            {/* Mobile Content with Left Padding */}
            <div className="md:hidden pl-12 pr-4">
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden mb-8">
                {milestone.image && (
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="inline-block bg-teal-500 text-white font-bold text-sm px-3 py-1 rounded-full mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Timeline Item */}
            <div className="hidden md:block">
              <TimelineItem
                milestone={milestone}
                index={index}
                isLeft={index % 2 === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
