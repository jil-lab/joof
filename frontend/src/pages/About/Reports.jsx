import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaDownload, FaChevronDown } from 'react-icons/fa';
import Section from '../../components/common/Section/Section';
import { useReports } from '../../hooks/useApi';

const groupReportsByYear = (items) => {
  const map = new Map();
  for (const { year, title, file } of items) {
    if (!map.has(year)) map.set(year, []);
    map.get(year).push({ title, file: file?.url ?? null });
  }
  return Array.from(map.entries()).map(([year, reports]) => ({ year, reports }));
};

const YearAccordion = ({ yearData, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
          isOpen ? 'bg-teal-500 text-white' : 'bg-white text-gray-900 hover:bg-teal-50'
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className={`text-xl font-bold ${isOpen ? 'text-white' : 'text-teal-600'}`}>
            {yearData.year}
          </span>
          <span className={`text-sm font-medium ${isOpen ? 'text-teal-100' : 'text-gray-500'}`}>
            {yearData.reports.length} {yearData.reports.length === 1 ? 'report' : 'reports'}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FaChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-teal-500'}`} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {yearData.reports.map((report, index) => (
                  <motion.a
                    key={index}
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    className="group flex flex-col items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-200">
                      <FaFilePdf className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-sm">{report.title}</p>
                      <p className="text-xs text-gray-400">{yearData.year}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-teal-600 group-hover:text-teal-700">
                      <FaDownload className="w-3 h-3" />
                      Download
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Reports = () => {
  const { data: reportsData, isLoading } = useReports();
  const [openYear, setOpenYear] = useState(null);

  const groupedReports = useMemo(() =>
    reportsData?.data?.length ? groupReportsByYear(reportsData.data) : [],
  [reportsData]);

  useEffect(() => {
    if (groupedReports.length > 0 && openYear === null) {
      setOpenYear(groupedReports[0].year);
    }
  }, [groupedReports]);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
            Transparency & Accountability
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Reports
          </h1>
          <p className="text-xl text-teal-50 leading-relaxed max-w-2xl mx-auto">
            Access our activity and impact reports. We are committed to full
            transparency with our donors, partners, and the communities we serve.
          </p>
        </motion.div>
      </Section>

      {/* Reports Section */}
      <Section className="py-16 md:py-20 bg-white">
        {!isLoading && groupedReports.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reports
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Browse our reports by year. Click on a year to view and download the
              available reports in PDF format.
            </p>
          </motion.div>
        )}

        {/* Loading skeleton */}
        {isLoading && (
          <div className="max-w-4xl mx-auto space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && groupedReports.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <FaFilePdf className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Reports Available Yet</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              Reports will appear here once they have been published. Check back soon.
            </p>
          </motion.div>
        )}

        {/* Accordion */}
        {!isLoading && groupedReports.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-4">
            {groupedReports.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <YearAccordion
                  yearData={yearData}
                  isOpen={openYear === yearData.year}
                  onToggle={() => toggleYear(yearData.year)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="py-16 md:py-20 bg-teal-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have Questions About Our Reports?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We welcome enquiries from partners, donors, and community members. Reach out to
            us for more detailed information about our programs and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Support Us
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Reports;
