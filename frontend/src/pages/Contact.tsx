import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { submitContactForm } from '../api/services/contact.service';

interface Social {
  name: string;
  icon: IconType;
  url: string;
}

const socials: Social[] = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/joolabisifoundation' },
];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition';
const errorClass = 'mt-1 text-sm text-red-600';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      await submitContactForm(data);
      setSubmitted(true);
      reset();
    } catch {
      setServerError('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">Get in Touch</h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              We welcome any questions, partnership, or enquiries. Please, don't hesitate to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">Email</p>
                  <a
                    href="mailto:joofoundationhub@gmail.com"
                    className="text-lg text-gray-900 hover:text-teal-700 transition-colors font-medium"
                  >
                    joofoundationhub@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">Phone</p>
                  <a
                    href="tel:+2349115268054"
                    className="text-lg text-gray-900 hover:text-teal-700 transition-colors font-medium"
                  >
                    +234 911 526 8054
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">Address</p>
                  <p className="text-lg text-gray-900 font-medium">12, Adeagbo Odeniyi Avenue, Idi-Ape, Ibadan</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">Office Hours</p>
                  <p className="text-gray-700">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Follow Us</p>
                <div className="flex space-x-5">
                  {socials.map(({ name, icon: Icon, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
                    <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Message Sent</h3>
                  <p className="text-gray-500 max-w-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      {...register('name')}
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email')}
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="What is this regarding?"
                      {...register('subject')}
                      className={inputClass}
                    />
                    {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      {...register('message')}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  {serverError && (
                    <p className="text-sm text-red-600">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Want to Make a Difference?</h2>
            <p className="text-gray-500 mb-6">
              Your support helps us provide essential healthcare and education to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200"
              >
                Donate Now
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View Our Programmes
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
