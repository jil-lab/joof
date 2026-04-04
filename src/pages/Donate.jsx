import { motion } from 'framer-motion';

const Donate = () => {
  const stats = [
    { value: '100%', label: 'of donations go directly to programs' },
    { value: '4,000+', label: 'individuals provided with healthcare' },
    { value: '20', label: 'outreaches conducted' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">Support Our Mission</h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              Your contribution helps us bring healthcare and education to communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="py-10 px-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How to Donate</h2>
              <p className="text-gray-500">
                We currently accept donations via bank transfer. Simply use the details below to make your contribution.
              </p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center tracking-wide uppercase text-sm">
                Bank Account Details
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-teal-200">
                  <span className="font-semibold text-gray-700">Bank Name:</span>
                  <span className="text-gray-900 font-medium">[Bank Name]</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-teal-200">
                  <span className="font-semibold text-gray-700">Account Name:</span>
                  <span className="text-gray-900 font-medium">John Oyediran Olabisi Foundation</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-teal-200">
                  <span className="font-semibold text-gray-700">Account Number:</span>
                  <span className="text-gray-900 font-medium text-lg">XXXXXXXXXX</span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Account Type:</span>
                  <span className="text-gray-900 font-medium">Savings</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <p className="text-sm text-gray-600 text-center">
                <strong className="text-gray-900">Note:</strong> After making your donation, please email us at{' '}
                <a href="mailto:joofoundationhub@gmail.com" className="text-teal-600 hover:underline font-medium">
                  joofoundationhub@gmail.com
                </a>{' '}
                with your transfer details so we can acknowledge your generous contribution.
              </p>
            </div>
          </motion.div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Have questions?</h3>
            <p className="text-gray-500 mb-6">Reach out to discuss donations or larger contributions.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
