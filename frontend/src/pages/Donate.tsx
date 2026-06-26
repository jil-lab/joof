import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import PageHero from '../components/common/PageHero/PageHero';

const PAYSTACK_LINK = import.meta.env.VITE_PAYSTACK_LINK;

const Donate = () => {
  const stats = [
    { value: '100%', label: 'of donations go directly to programmes' },
    { value: '1,651+', label: 'medical care services delivered' },
    { value: '3', label: 'community outreach programmes' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Support Our Mission"
        subtitle="Your contribution helps us bring healthcare and education to communities across Nigeria."
      />

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
                We are grateful for your willingness to give. Choose how you'd like to make your donation below.
              </p>
            </div>

            {/* Online Giving */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-4">
              {/* Header bar */}
              <div className="bg-teal-700 px-8 py-4 flex items-center justify-between">
                <span className="text-white font-bold text-base tracking-wide">Make Online Donations</span>
                <span className="flex items-center gap-1.5 text-teal-200 text-xs font-medium">
                  <FaLock className="w-3 h-3" />
                  Secured by Paystack
                </span>
              </div>

              <div className="px-8 py-7 text-center">
                <p className="text-gray-500 text-sm mb-6">
                  Give securely using your debit/credit card or bank transfer. All transactions are encrypted and processed by Paystack.
                </p>

                {/* Accepted payment methods */}
                <div className="flex items-center justify-center gap-2 mb-7 flex-wrap">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-200 rounded bg-gray-50">
                    <img src="/images/payment/visa.svg" alt="Visa" className="h-5 w-auto" />
                    <span className="text-[11px] font-bold text-blue-700 tracking-widest">VISA</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-200 rounded bg-gray-50">
                    <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-5 w-auto" />
                    <span className="text-[11px] font-bold text-red-600 tracking-wide">Mastercard</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-200 rounded bg-gray-50">
                    <img src="/images/payment/verve.svg" alt="Verve" className="h-5 w-auto" />
                    <span className="text-[11px] font-bold text-green-700 tracking-wide">Verve</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-200 rounded bg-gray-50">
                    <img src="/images/payment/bank-transfer.svg" alt="Bank Transfer" className="h-5 w-auto" />
                    <span className="text-[11px] font-bold text-gray-600 tracking-wide">Bank Transfer</span>
                  </span>
                </div>

                {PAYSTACK_LINK ? (
                  <a
                    href={PAYSTACK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200"
                  >
                    <FaLock className="w-3.5 h-3.5" />
                    Donate Securely via Paystack
                  </a>
                ) : (
                  <div>
                    <button
                      disabled
                      className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-gray-100 text-gray-400 font-semibold rounded-lg cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                    <p className="text-gray-400 text-xs mt-3">Online giving will be available shortly.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-gray-400 text-sm font-medium">or make a bank transfer</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <div className="space-y-6">
              {/* Account 1 */}
              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-6 text-center tracking-wide uppercase">
                  Naira Account
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Bank Name:</span>
                    <span className="text-gray-900 font-medium">Zenith Bank</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Account Name:</span>
                    <span className="text-gray-900 font-medium">JOO Foundation</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Account Number:</span>
                    <span className="text-gray-900 font-medium text-lg">1223812375</span>
                  </div>
                </div>
              </div>

              {/* Account 2 */}
              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-6 text-center tracking-wide uppercase">
                  US Dollar Account
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Bank Name:</span>
                    <span className="text-gray-900 font-medium">Zenith Bank</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-teal-200">
                    <span className="font-semibold text-gray-700">Account Name:</span>
                    <span className="text-gray-900 font-medium">JOO Foundation</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Account Number:</span>
                    <span className="text-gray-900 font-medium text-lg">5072576039</span>
                  </div>
                </div>
              </div>
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
