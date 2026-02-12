import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const TeamMemberCard = ({ member, index = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle null/undefined member gracefully
  if (!member) {
    return null;
  }

  const BIO_CHAR_LIMIT = 500;
  const shouldTruncate = member.bio && member.bio.length > BIO_CHAR_LIMIT;
  const displayBio = shouldTruncate && !isExpanded
    ? `${member.bio.substring(0, BIO_CHAR_LIMIT)}...`
    : member.bio || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || 'Team Member')}&size=400&background=0d9488&color=ffffff&bold=true`}
          alt={member.name || 'Team Member'}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback for missing images
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || 'Team Member')}&size=400&background=0d9488&color=ffffff&bold=true`;
          }}
        />
        {/* LinkedIn Overlay */}
        {member.linkedin && member.linkedin !== '#' && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-teal-500 hover:text-white"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name || 'Team Member'}
        </h3>
        <p className="text-teal-600 font-medium mb-3">
          {member.role || 'Team Member'}
        </p>
        {displayBio && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {displayBio}
          </p>
        )}
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors duration-200"
          >
            {isExpanded ? 'Show less' : 'Read more...'}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
