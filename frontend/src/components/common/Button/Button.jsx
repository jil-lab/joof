import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
