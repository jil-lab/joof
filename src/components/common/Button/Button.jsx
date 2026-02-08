import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
