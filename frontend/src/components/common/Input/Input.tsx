import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'>;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      type = 'text',
      placeholder,
      error,
      required = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputStyles = clsx(
      'w-full px-4 py-3 border rounded-lg transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent',
      error
        ? 'border-red-500 focus:ring-red-500'
        : 'border-gray-300 hover:border-gray-400',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            placeholder={placeholder}
            className={inputStyles}
            rows={4}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            className={inputStyles}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
