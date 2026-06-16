import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { contactFormSchema, contactFormDefaults } from '../../utils/validation';
import { useContactForm } from '../../hooks/useApi';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
  });

  // Use React Query mutation for contact form submission
  const { mutate, isPending, isSuccess, isError } = useContactForm();

  const onSubmit = async (data) => {
    mutate(data, {
      onSuccess: () => {
        // Clear form on success
        reset();

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          // The success state will be managed by React Query
        }, 5000);
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Name"
          type="text"
          placeholder="Your full name"
          required
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Subject"
          type="text"
          placeholder="What is this regarding?"
          required
          error={errors.subject?.message}
          {...register('subject')}
        />

        <Input
          label="Message"
          type="textarea"
          placeholder="Tell us how we can help..."
          required
          error={errors.message?.message}
          {...register('message')}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {/* Success Message */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-green-800">Message sent successfully!</h3>
              <p className="text-sm text-green-700 mt-1">
                Thank you for contacting us. We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {isError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-red-800">Failed to send message</h3>
              <p className="text-sm text-red-700 mt-1">
                Something went wrong. Please try again or contact us directly via email.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
