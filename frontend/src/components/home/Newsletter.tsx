import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import Button from '../common/Button';
import Input from '../common/Input';

type Status = 'idle' | 'loading' | 'success' | 'error';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call (will be replaced with Strapi integration)
    setTimeout(() => {
      // For now, just show success
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950 py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/50 via-transparent to-teal-600/30"></div>
      <div className="relative z-10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Programmes
            </h2>
            <p className="text-lg text-teal-100 mb-8">
              Subscribe to our newsletter to receive updates on our programmes,
              impact stories, and ways you can get involved.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder-teal-200"
                  disabled={status === 'loading'}
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                disabled={status === 'loading'}
                className="sm:w-auto"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white/10 border border-white/30 rounded-lg p-4 flex items-center justify-center text-white"
              >
                <FaCheckCircle className="w-5 h-5 mr-2 text-yellow-400" />
                <span>{message}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-red-500/20 border border-red-400/50 rounded-lg p-4 text-white"
              >
                {message}
              </motion.div>
            )}

            <p className="text-sm text-teal-200 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Newsletter;
