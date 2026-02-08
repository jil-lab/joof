import { motion } from 'framer-motion';
import { FaHeart, FaGraduationCap, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';
import Card from '../components/common/Card/Card';

const Donate = () => {
  const impactLevels = [
    {
      amount: '₦5,000',
      title: 'Community Supporter',
      description: 'Provides medical supplies for basic healthcare services',
      icon: FaHandHoldingHeart,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      amount: '₦15,000',
      title: 'Education Champion',
      description: 'Supplies learning materials for students in need',
      icon: FaGraduationCap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      amount: '₦50,000',
      title: 'Healthcare Hero',
      description: 'Funds essential medical procedures and treatments',
      icon: FaHeart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      amount: '₦100,000+',
      title: 'Transformative Partner',
      description: 'Sponsors comprehensive program initiatives',
      icon: FaUsers,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
            <p className="text-lg text-teal-100">
              Your generous contribution helps us bring healthcare and education to those who need it
              most. Together, we're building a brighter future for communities in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Every Donation Makes a Difference
              </h2>
              <p className="text-lg text-gray-600">
                Since our founding, we've provided healthcare to over 1,650 individuals, supported
                education for countless students, and strengthened communities across Nigeria. Your
                support powers this vital work.
              </p>
            </div>

            {/* Impact Levels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {impactLevels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card variant="elevated" className="h-full hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div
                          className={`${level.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                        >
                          <Icon className={`${level.color} text-2xl`} />
                        </div>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-gray-900">{level.amount}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                        <p className="text-gray-600">{level.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">How to Donate</h2>
                <p className="text-gray-600">
                  We currently accept donations via bank transfer. Simply use the details below to
                  make your contribution.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 md:p-8 border-2 border-teal-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Bank Account Details
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Bank Name:</span>
                    <span className="text-gray-900 font-medium">[Bank Name]</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Account Name:</span>
                    <span className="text-gray-900 font-medium">
                      John Oyediran Olabisi Foundation
                    </span>
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

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong className="text-gray-900">Note:</strong> After making your donation, please
                  email us at{' '}
                  <a
                    href="mailto:joofoundationhub@gmail.com"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    joofoundationhub@gmail.com
                  </a>{' '}
                  with your transfer details so we can acknowledge your generous contribution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Plans Notice */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-6 bg-teal-50 rounded-lg border border-teal-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
              <p className="text-gray-700">
                We're working on integrating online payment options to make donations even easier.
                Stay tuned for credit card, debit card, and mobile payment options!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="section bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Your Support Matters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-teal-100">
                    of your donation goes directly to our programs
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">1,650+</div>
                  <div className="text-teal-100">individuals provided with healthcare</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">29</div>
                  <div className="text-teal-100">safe deliveries facilitated</div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-teal-100 mb-6">
                Have questions about donating or want to discuss larger contributions?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
