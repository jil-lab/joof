import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/common/Section/Section';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

const viewportOpts = { once: true, margin: '-60px' };

const ADVISORS = [
  {
    id: 1,
    name: 'Dr. Alaruru Olusoji Adeyanju',
    image: '/images/advisors/advisor2.jpg',
    bio: `Dr. Alaruru Olusoji Adeyanju is a distinguished medical doctor, administrator, and faith-driven public servant with over three decades of committed service to healthcare and governance in Nigeria. Born on November 13, 1964, in Ogbomoso, he began his academic journey at Saint Ferdinand R.C.M. School and later graduated from Ilorin Grammar School, Ilorin. He proceeded to the University of Ibadan, earning his medical degree in 1990.

After housemanship and national service in Oyo and Bauchi States, respectively, Dr. Adeyanju practiced in several private hospitals before beginning his residency at the University College Hospital, Ibadan, in 1998. He became a Consultant Obstetrician and Gynaecologist in 2005 and was instrumental in the development and accreditation of the OBGYN residency program at Adeoyo Maternity Teaching Hospital (AMTH), Ibadan — a milestone that has since produced several consultants.

A passionate advocate for public health, Dr. Adeyanju led the expansion of the hospital's HIV program in collaboration with Oyo State and APIN, significantly contributing to reduced HIV prevalence in the state. His administrative acumen earned him appointments as Director of Medical Services in 2019 and Permanent Secretary in the Oyo State Civil Service months later, serving across ministries including Health and Special Duties.

He is an active member of several professional bodies, including AMDO, NMA, and SOGON. His work has earned him numerous awards, including recognition from the National Productivity Centre.

A devout Christian, Dr. Adeyanju has been a committed member of Oritamefa Baptist Church since 1985. He is happily married to Dorcas Oluwafunmilayo and is blessed with four children.`,
  },
  {
    id: 2,
    name: 'Dr. Mrs. Sarah Alade',
    image: '/images/advisors/advisor1.jpg',
    bio: `Dr. Sarah Alade was former Special Adviser to the President on Finance and Economy under the Buhari Administration. She chaired the Central Working Committee for the actualization of the current National Development Plans (NDP) 2021–2025 and Nigeria Agenda 2050, focused on developing and implementing policies designed to accelerate sustainable and inclusive economic growth.

She retired from the Central Bank of Nigeria (CBN) as Deputy Governor, Economic Policy in 2017 after 23 years in the apex Bank. She also acted briefly in 2014 as CBN Governor.

Prior to her appointment as Deputy Governor, she gained broad Central Banking and Financial System experience in various roles in the Bank. She joined the Bank as an Assistant Director in the Research Department, where she served as head of the State Government Finance Office, head of the Federal Government Office, and head of the Fiscal Analysis Division at various times before her appointment as Director, Banking Operations Department in 2004.

Dr. Alade attended the University of Ife, Ile-Ife, where she obtained a BSc (Hons) degree in Economics in 1976, a Master of Commerce degree from the University of Melbourne, Australia in 1983, and a PhD in Management Science (Operations Research) from the University of Ilorin in 1991.

Dr. Alade was Chairman of Financial Market Dealers Quotations (FMDQ) and Chairman of African Finance Corporation. She is currently an Advisory Panel Member – G20 Contact with Africa (CWA) and a member of the Investment Committee of the United Nations Joint Staff Pension Fund.

Dr. Alade is Chairman of Council, Nigeria Baptist Theological Seminary, Ogbomosho, and former president of Offa Metropolitan Club, a socio-developmental club with the sole aim of contributing to the development of Offa Community. Dr. Alade is blessed with children.`,
  },
  {
    id: 3,
    name: 'Rev. Dr. Adediran Adeleke',
    image: '/images/advisors/advisor3.jpg',
    bio: `Rev. Dr. Adediran Adeleke is a seasoned pastor, scholar, music minister, and church administrator with a distinguished record of service in ministry and education. Born on January 16, 1967, he holds a B.Sc. in Agricultural Extension from the University of Ibadan and advanced theological degrees from the Nigerian Baptist Theological Seminary (NBTS), including a Doctor of Ministry in Leadership and Administration.

His conversion experience began in 1991 as an undergraduate, and he answered the call to pastoral ministry during his NYSC service year in Ikorodu, Lagos. Since then, he has faithfully served across several denominations and ministries, including Liberty Baptist Church, Aba; El-Shaddai Baptist Church, Ibadan; and currently, as the Pastor of Oritamefa Baptist Church, Ibadan.

Dr. Adeleke's ministry spans administrative roles, music direction, and leadership development. He has ministered both locally and internationally, combining a strong academic background with practical pastoral work. He has authored books and scholarly articles, including What Happens To My Prayers in Heaven? and Building and Leading a Dynamic Worship Team.

He is a recipient of numerous academic and ministerial awards for excellence and integrity, including the James Christopher Pool Award and the Joseph Akinlabi Ojewole Award for Ministerial Ethics.

Rev. Adeleke is married to Mrs. Abosede Abiodun Adeleke, a French educator and Ph.D. candidate, and their union is blessed with two children. With over two decades of impactful ministry, Rev. Dr. Adeleke remains a model of faithful service, spiritual discipline, and leadership within the Nigerian Baptist Convention and the wider Christian community.`,
  },
  {
    id: 4,
    name: 'Prof. Segun Segun-Busari',
    image: '/images/advisors/advisor4.jpg',
    bio: `Prof. Segun Segun-Busari was born on August 28, 1962, in Offa Local Government Area of Kwara State, Nigeria. He had his secondary education from 1973–1977 at the Government Secondary School, Omu-Aran, Kwara State, and A-Levels at Baptist Academy, Sherpherdhill, Obanikoro, Lagos (1978–1979). Between 1979 and 1987, he obtained his M.B;B.S. at the University of Ilorin, Ilorin. He later completed his Residency Post-Graduate Training Programme in April 2001, becoming a Fellow of the West African College of Surgeons. He is also a Fellow of the International College of Surgeons.

In June 2002, he was appointed Lecturer 1 in the Department of Otorhinolaryngology of the University of Ilorin, and Honorary Consultant at The University of Ilorin Teaching Hospital, Ilorin. Currently he is a Professor of Otorhinolaryngology at Bowen University, Iwo, Osun State, Nigeria.

Prof. Segun-Busari has attended several training programmes across the nation and internationally. He is a member of many learned and professional societies including the West African College of Surgeons, International College of Surgeons, American Academy of Otolaryngology-Head Neck Surgery, Nigeria Medical Association, Medical and Dental Council of Nigeria, and the Otorhinolaryngological Society of Nigeria, among several others. He has authored and co-authored several articles in reputable local and international outlets.

Segun-Busari is happily married to Olufunke Segun-Busari and they are blessed with 3 children.`,
  },
  {
    id: 5,
    name: 'Mrs. Felicia Ikeoluwa Abiola-Ige',
    image: '/images/advisors/advisor5.jpg',
    bio: `Mrs. Felicia Ikeoluwa Abiola-Ige is a respected educator, community leader, and humanitarian whose life embodies service, faith, and leadership. With over 35 years of experience in Nigeria's education sector, she has served in various capacities including class teacher, vice principal, and principal across several public schools in Oyo State.

Felicia holds a Nigerian Certificate in Education (NCE) and a degree in Educational Management from the University of Ado-Ekiti. Throughout her career, she remained committed to continuous development, participating in national and international workshops. Her professional journey reflects not just longevity but impact — mentoring generations of students and contributing to educational advancement through the Nigerian Union of Teachers, where she served as Deputy Chairman of the Oyo West Chapter (2008–2012).

A devoted Christian, she has served the Nigerian Baptist Convention in various roles including choir leadership, WMU treasurer, and child evangelism. She is a founding member of the Foresight Development Initiative, supporting education and economic empowerment for women, youth, and farmers.

Honored for her contributions with several awards, Felicia remains a beacon of service, humility, and transformation. Married to Baale Olusegun Abiola-Ige, she is a mother to both biological and spiritual children and continues to inspire lives through her faith, philanthropy, and unwavering dedication to the betterment of others.`,
  },
  {
    id: 6,
    name: 'Mr. Olufemi Tinuoye',
    image: '/images/advisors/advisor6.jpg',
    bio: `Femi Tinuoye is a seasoned executive with a distinguished 30-year career in the Nigerian banking industry. He has had the privilege of overseeing four out of six geopolitical zones in the country, demonstrating exceptional leadership skills.

Throughout his career, Femi has acquired multiple certifications and honed his skills in management, communication, and stakeholder engagement. He is a results-driven professional with expertise in Turn Around Management, Brain-Based Conversation Skills, and Mindfulness Leadership Training.

Femi's commitment to giving back to the community is evident in his involvement with various charitable initiatives. He is a patron of the Blood Drive Initiative LAUTECH and UCH, which supports blood donation drives for the National Blood Transfusion Service. Additionally, he has served on the Church Advisory Committee of Orita-Mefa Baptist Church and as a member of the Armed Forces arm of the National Blood Transfusion Service.

With his impressive track record and dedication to community service, Femi Tinuoye is an inspiration to many.`,
  },
];

const PhotoPlaceholder = ({ name }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 gap-3">
    <div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center">
      <svg className="w-9 h-9 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
    <p className="text-teal-500 text-xs font-medium text-center px-2">Photo coming soon</p>
  </div>
);

const AdvisorCard = ({ advisor, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const paragraphs = advisor.bio.split('\n\n').filter(Boolean);
  const PREVIEW_PARAGRAPHS = 2;
  const hasMore = paragraphs.length > PREVIEW_PARAGRAPHS;
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, PREVIEW_PARAGRAPHS);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.05}
      viewport={viewportOpts}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row"
    >
        {/* Photo — relative column, image fills full card height */}
        <div className="relative sm:w-64 md:w-72 flex-shrink-0 min-h-[260px] sm:min-h-0 bg-teal-50">
          {imgError ? (
            <div className="absolute inset-0">
              <PhotoPlaceholder name={advisor.name} />
            </div>
          ) : (
            <img
              src={advisor.image}
              alt={advisor.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          {/* Vertical teal accent on right edge (desktop) */}
          <div className="hidden sm:block absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 md:p-8 min-w-0">
          {/* Name */}
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {advisor.name}
            </h2>
            <div className="w-10 h-0.5 bg-teal-500 mt-2" />
          </div>

          {/* Bio paragraphs */}
          <div className="flex-1 space-y-3">
            {visibleParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-[0.95rem]">
                {para}
              </p>
            ))}
          </div>

          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm font-semibold transition-colors duration-200"
            >
              {expanded ? 'Show less' : 'Read more'}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Section className="bg-gradient-teal text-white py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Board of Advisors</h1>
          <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto">
            Distinguished leaders guiding the JOOF Foundation's mission of service and impact.
          </p>
        </motion.div>
      </Section>

      {/* Advisors */}
      <Section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-20">
          {ADVISORS.map((advisor, index) => (
            <AdvisorCard key={advisor.id} advisor={advisor} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Advisors;
