import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/common/Section/Section';
import { useAdvisors } from '../../hooks/useApi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const getImageUrl = (url) =>
  url ? (url.startsWith('http') ? url : `${STRAPI_URL}${url}`) : null;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const viewportOpts = { once: true, margin: '-60px' };

const FALLBACK_ADVISORS = [
  {
    id: 1,
    name: 'Dr. Alaruru Olusoji Adeyanju',
    domain: 'Medicine & Public Health',
    image: '/images/advisors/advisor2.jpg',
    bio: `Dr. Alaruru Olusoji Adeyanju is a distinguished medical doctor, administrator, and faith-driven public servant with over three decades of committed service to healthcare and governance in Nigeria. Born on November 13, 1964, in Ogbomoso, he began his academic journey at Saint Ferdinand R.C.M. School and later graduated from Ilorin Grammar School, Ilorin. He proceeded to the University of Ibadan, earning his medical degree in 1990.

After housemanship and national service in Oyo and Bauchi States, respectively, Dr. Adeyanju practiced in several private hospitals before beginning his residency at the University College Hospital, Ibadan, in 1998. He became a Consultant Obstetrician and Gynaecologist in 2005 and was instrumental in the development and accreditation of the OBGYN residency program at Adeoyo Maternity Teaching Hospital (AMTH), Ibadan.

A passionate advocate for public health, Dr. Adeyanju led the expansion of the hospital's HIV program in collaboration with Oyo State and APIN. His administrative acumen earned him appointments as Director of Medical Services in 2019 and Permanent Secretary in the Oyo State Civil Service months later.

He is an active member of several professional bodies, including AMDO, NMA, and SOGON. A devout Christian, Dr. Adeyanju has been a committed member of Oritamefa Baptist Church since 1985. He is happily married to Dorcas Oluwafunmilayo and is blessed with four children.`,
  },
  {
    id: 2,
    name: 'Dr. Mrs. Sarah Alade',
    domain: 'Finance & Economic Policy',
    image: '/images/advisors/advisor1.jpg',
    bio: `Dr. Sarah Alade was former Special Adviser to the President on Finance and Economy under the Buhari Administration. She chaired the Central Working Committee for the actualization of the current National Development Plans (NDP) 2021–2025 and Nigeria Agenda 2050.

She retired from the Central Bank of Nigeria (CBN) as Deputy Governor, Economic Policy in 2017 after 23 years in the apex Bank. She also acted briefly in 2014 as CBN Governor.

Dr. Alade attended the University of Ife, Ile-Ife, where she obtained a BSc (Hons) degree in Economics in 1976, a Master of Commerce degree from the University of Melbourne, Australia in 1983, and a PhD in Management Science (Operations Research) from the University of Ilorin in 1991.

Dr. Alade was Chairman of Financial Market Dealers Quotations (FMDQ) and Chairman of African Finance Corporation. She is currently an Advisory Panel Member – G20 Contact with Africa (CWA). Dr. Alade is blessed with children.`,
  },
  {
    id: 3,
    name: 'Rev. Dr. Adediran Adeleke',
    domain: 'Ministry & Leadership',
    image: '/images/advisors/advisor3.jpg',
    bio: `Rev. Dr. Adediran Adeleke is a seasoned pastor, scholar, music minister, and church administrator with a distinguished record of service in ministry and education. Born on January 16, 1967, he holds a B.Sc. in Agricultural Extension from the University of Ibadan and advanced theological degrees from the Nigerian Baptist Theological Seminary (NBTS), including a Doctor of Ministry in Leadership and Administration.

His conversion experience began in 1991 as an undergraduate, and he answered the call to pastoral ministry during his NYSC service year in Ikorodu, Lagos. He currently serves as the Pastor of Oritamefa Baptist Church, Ibadan.

He is a recipient of numerous academic and ministerial awards for excellence and integrity. Rev. Adeleke is married to Mrs. Abosede Abiodun Adeleke, a French educator and Ph.D. candidate, and their union is blessed with two children.`,
  },
  {
    id: 4,
    name: 'Prof. Segun Segun-Busari',
    domain: 'Medicine & Academia',
    image: '/images/advisors/advisor4.jpg',
    bio: `Prof. Segun Segun-Busari was born on August 28, 1962, in Offa Local Government Area of Kwara State, Nigeria. Between 1979 and 1987, he obtained his M.B;B.S. at the University of Ilorin, Ilorin. He later completed his Residency Post-Graduate Training Programme in April 2001, becoming a Fellow of the West African College of Surgeons.

In June 2002, he was appointed Lecturer 1 in the Department of Otorhinolaryngology of the University of Ilorin. Currently he is a Professor of Otorhinolaryngology at Bowen University, Iwo, Osun State, Nigeria.

Prof. Segun-Busari is a member of many learned and professional societies including the West African College of Surgeons, International College of Surgeons, and the American Academy of Otolaryngology-Head Neck Surgery. Segun-Busari is happily married to Olufunke Segun-Busari and they are blessed with 3 children.`,
  },
  {
    id: 5,
    name: 'Mrs. Felicia Ikeoluwa Abiola-Ige',
    domain: 'Education & Community Development',
    image: '/images/advisors/advisor5.jpg',
    bio: `Mrs. Felicia Ikeoluwa Abiola-Ige is a respected educator, community leader, and humanitarian whose life embodies service, faith, and leadership. With over 35 years of experience in Nigeria's education sector, she has served in various capacities including class teacher, vice principal, and principal across several public schools in Oyo State.

Felicia holds a Nigerian Certificate in Education (NCE) and a degree in Educational Management from the University of Ado-Ekiti. She is a founding member of the Foresight Development Initiative, supporting education and economic empowerment for women, youth, and farmers.

Honored for her contributions with several awards, Felicia remains a beacon of service, humility, and transformation. Married to Baale Olusegun Abiola-Ige, she is a mother to both biological and spiritual children.`,
  },
  {
    id: 6,
    name: 'Mr. Olufemi Tinuoye',
    domain: 'Banking & Executive Leadership',
    image: '/images/advisors/advisor6.jpg',
    bio: `Femi Tinuoye is a seasoned executive with a distinguished 30-year career in the Nigerian banking industry. He has had the privilege of overseeing four out of six geopolitical zones in the country, demonstrating exceptional leadership skills.

Throughout his career, Femi has acquired multiple certifications and honed his skills in management, communication, and stakeholder engagement. He is a results-driven professional with expertise in Turn Around Management, Brain-Based Conversation Skills, and Mindfulness Leadership Training.

Femi's commitment to giving back to the community is evident in his involvement with various charitable initiatives. He is a patron of the Blood Drive Initiative LAUTECH and UCH, which supports blood donation drives for the National Blood Transfusion Service.`,
  },
];

const PhotoPlaceholder = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 gap-3">
    <div className="w-20 h-20 rounded-full bg-teal-200 flex items-center justify-center">
      <svg className="w-11 h-11 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
    <p className="text-teal-500 text-xs font-semibold tracking-wide uppercase">Photo coming soon</p>
  </div>
);

const AdvisorCard = ({ advisor, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isReversed = index % 2 !== 0;
  const paragraphs = (advisor.bio || '').split('\n\n').filter(Boolean);
  const PREVIEW_PARAGRAPHS = 2;
  const hasMore = paragraphs.length > PREVIEW_PARAGRAPHS;
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, PREVIEW_PARAGRAPHS);

  // Normalise: Strapi uses photo.url, fallback uses image
  const imageUrl = advisor.photo ? getImageUrl(advisor.photo.url) : advisor.image;
  // Normalise: Strapi uses domain field, fallback also has domain
  const domain = advisor.domain || advisor.role;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.06}
      viewport={viewportOpts}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="relative md:w-[38%] flex-shrink-0 min-h-[300px] md:min-h-0">
        {imgError || !imageUrl ? (
          <PhotoPlaceholder />
        ) : (
          <img
            src={imageUrl}
            alt={advisor.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
        <span className="absolute bottom-4 left-4 md:hidden inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-teal-700 shadow-sm">
          {domain}
        </span>
      </div>

      <div className="flex-1 flex flex-col p-7 md:p-10 min-w-0">
        <span className="hidden md:inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100 mb-5">
          {domain}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
          {advisor.name}
        </h2>
        <div className="w-12 h-1 bg-teal-500 rounded-full mb-6" />
        <div className="flex-1 space-y-4">
          {visibleParagraphs.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-[0.95rem]">
              {para}
            </p>
          ))}
        </div>
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-200 group"
          >
            <span>{expanded ? 'Show less' : 'Read full biography'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Advisors = () => {
  const { data: advisorsData, isLoading } = useAdvisors();

  const advisors =
    advisorsData?.data?.length > 0 ? advisorsData.data : FALLBACK_ADVISORS;

  return (
    <div className="min-h-screen">
      <Section className="bg-gradient-teal text-white py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
            Leadership & Guidance
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Board of Advisors</h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed">
            Distinguished leaders from medicine, finance, faith, and public service — collectively
            guiding the JOOF Foundation's mission to transform lives across Nigeria and beyond.
          </p>
        </motion.div>
      </Section>

      <Section className="py-14 md:py-16 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wisdom in Service</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Each advisor brings decades of specialised expertise and a shared passion for community
            upliftment. Their counsel shapes our strategy, strengthens our governance, and deepens
            our impact.
          </p>
        </motion.div>
      </Section>

      <Section className="py-10 md:py-16 bg-gray-50">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
            {advisors.map((advisor, index) => (
              <AdvisorCard key={advisor.id} advisor={advisor} index={index} />
            ))}
          </div>
        )}
      </Section>

      <Section className="py-16 md:py-20 bg-teal-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Inspired by our advisors' commitment to service? There are many ways to support the
            JOOF Foundation's work in healthcare, education, and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-7 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Support Our Work
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Advisors;
