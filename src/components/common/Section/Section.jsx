import clsx from 'clsx';

const Section = ({
  children,
  title,
  subtitle,
  backgroundColor = 'white',
  padding = 'normal',
  className = '',
}) => {
  const backgroundColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    teal: 'bg-teal-50',
    dark: 'bg-gray-900 text-white',
  };

  const paddings = {
    none: '',
    small: 'py-section-sm px-4 md:px-6 lg:px-8',
    normal: 'py-section px-4 md:px-6 lg:px-8',
    large: 'py-24 px-4 md:px-6 lg:px-8',
  };

  return (
    <section
      className={clsx(
        backgroundColors[backgroundColor],
        paddings[padding],
        className
      )}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
