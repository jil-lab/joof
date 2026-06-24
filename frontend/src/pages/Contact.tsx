import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Social {
  name: string;
  icon: IconType;
  url: string;
}

const socials: Social[] = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/jooffoundation' },
];

const Contact = () => {
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
              <form
                action="mailto:joofoundationhub@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
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
                View Our Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
