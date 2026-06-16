import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Card = ({
  image,
  title,
  description,
  link,
  linkText = 'Learn More',
  variant = 'elevated',
  className = '',
  children,
}) => {
  const baseStyles = 'bg-white rounded-card overflow-hidden transition-all duration-300';

  const variants = {
    elevated: 'shadow-card hover:shadow-card-hover',
    flat: 'shadow-none border border-gray-200',
    bordered: 'border-2 border-teal-500 shadow-sm hover:shadow-md',
  };

  const CardContent = () => (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        )}
        {children}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium transition-colors"
          >
            {linkText}
            <svg
              className="w-4 h-4 ml-2"
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
          </Link>
        )}
      </div>
    </>
  );

  return (
    <div className={clsx(baseStyles, variants[variant], className)}>
      <CardContent />
    </div>
  );
};

export default Card;
