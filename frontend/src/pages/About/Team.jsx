import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/common/Section/Section';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const viewportOpts = { once: true, margin: '-60px' };

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Deaconess Bolanle Adekunbi Olabisi',
    role: 'Chairperson, Board of Trustees',
    image: '/images/team/member1.png',
    bio: `Deaconess Bolanle Adekunbi Olabisi is the wife of Late Deacon Dr John Oyediran Olabisi and the Chairperson of the Trustees. She was born on May 23, 1952 at Oyo, Oyo State, Nigeria. She attended Oliver Baptist High School, Oyo from 1966 to 1970.

She obtained her B.Sc. Education and M.Sc Adult Education degrees from the University of Ife (now Obafemi Awolowo University) in 1976 and the University of Edinburgh, Scotland in 1983 respectively.

She retired voluntarily as the pioneer Principal of Oritamefa Baptist Model School, Ibadan in 2007. She is currently the Administrator of Highland Specialist Hospital, Yemetu Ibadan.`,
  },
  {
    id: 2,
    name: 'Dr. Mrs. Taiwo Olufunmilola Agbaje',
    role: 'Medical Director & Trustee',
    image: '/images/team/member2.png',
    bio: `Taiwo Oluwafunmilola Agbaje (nee Olabisi) works as a medical practitioner offering clinical and
public health services to government and private establishments. Dr Agbaje obtained an MPH
(Management & Leadership) from the University of Sheffield, UK and a medical degree (MBBS)
from LAUTECH Ogbomoso, Nigeria. She is married with children.`,
  },
  {
    id: 3,
    name: 'Mrs. Adetola Grace Amure',
    role: 'Leadership Coach & Trustee',
    image: '/images/team/member4.png',
    bio: `Mrs Detola Amure is a portfolio entrepreneur and productivity coach with over 20 years of
corporate and business experience. As CEO of The Productivity Company, she helps
high-achieving professionals, leaders, and organisations overcome hidden productivity barriers,
build confidence, and lead with impact.
She is an international speaker and author of four books. 

Detola also serves as a boardmember of the John Oyediran Olabisi Foundation, supporting access to healthcare and
education in rural communities.She is the Founder and Director of My Little Warrior Child CIC, a not-for-profit supporting
bereaved parents through grief education and healing spaces. Detola holds a BSc in Computer Science from the University of Botswana and a Master’s in
Operational Research from Lancaster University, UK. She is married with children.`,
  },
  {
    id: 4,
    name:   'Dr. Johnson Oladiran Olabisi',
    role: 'Physician & CEO, Highland Specialist Hospital',
    image: '/images/team/member3.png',
    bio: `Dr. Johnson Oladiran Olabisi works as a physician offering clinical and occupational health services to government and private establishments. He also serves as the CEO of Highland Specialist Hospital, Ibadan.

Dr. Olabisi obtained a fellowship in Community Medicine with the West African College of Physicians, a MPH (Health Economics) from the London School of Hygiene and Tropical Medicine (LSHTM), a MSc in Epidemiology & Medical Statistics, and a medical degree (MBBS) — both from the University of Ibadan, Nigeria. He is married with children.`,
  },
  {
    id: 5,
    name: 'Dr. Mrs. Oyebola Okunogbe',
    role: 'Economist & Researcher',
    image: '/images/team/member5.png',
    bio: `Oyebola Okunogbe is the daughter of late Dr John Oyediran Olabisi and Mrs Bolanle Olabisi. She works as an economist in an international organization where she conducts research on public finance, nation building, education, employment, and gender in low and middle income countries.

Oyebola obtained her PhD in Public Policy and MPA in International Development from Harvard University, and her B.A. in Economics from Dartmouth College. She is married with children.`,
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

const MemberCard = ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isReversed = index % 2 !== 0;
  const paragraphs = member.bio.split('\n\n').filter(Boolean);
  const PREVIEW_PARAGRAPHS = 2;
  const hasMore = paragraphs.length > PREVIEW_PARAGRAPHS;
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, PREVIEW_PARAGRAPHS);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.06}
      viewport={viewportOpts}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* ── Photo column ── */}
      <div className="relative md:w-[38%] flex-shrink-0 min-h-[300px] md:min-h-0">
        {imgError ? (
          <PhotoPlaceholder />
        ) : (
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        {/* Mobile gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
        {/* Role badge on photo — mobile only */}
        <span className="absolute bottom-4 left-4 md:hidden inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-teal-700 shadow-sm">
          {member.role}
        </span>
      </div>

      {/* ── Content column ── */}
      <div className="flex-1 flex flex-col p-7 md:p-10 min-w-0">

        {/* Role badge — desktop only */}
        <span className="hidden md:inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100 mb-5">
          {member.role}
        </span>

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
          {member.name}
        </h2>

        {/* Teal rule */}
        <div className="w-12 h-1 bg-teal-500 rounded-full mb-6" />

        {/* Bio */}
        <div className="flex-1 space-y-4">
          {visibleParagraphs.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-[0.95rem]">
              {para}
            </p>
          ))}
        </div>

        {/* Read more toggle */}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-200 group"
          >
            <span>{expanded ? 'Show less' : 'Read full biography'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Team = () => (
  <div className="min-h-screen">

    {/* ── Hero ── */}
    <Section className="bg-gradient-teal text-white py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
          The People Behind the Mission
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Meet Our Team</h1>
        <p className="text-teal-100 text-lg md:text-xl leading-relaxed">
          Dedicated individuals united by a shared commitment to compassionate healthcare,
          quality education, and the upliftment of underserved communities.
        </p>
      </motion.div>
    </Section>

    {/* ── Intro ── */}
    <Section className="py-14 md:py-16 bg-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          The Heart of JOOF Foundation
        </h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-600 leading-relaxed text-lg">
          Our team brings together diverse expertise and unwavering commitment to our mission.
          Each member plays a vital role in ensuring that we deliver impactful programs and
          services to the communities we serve.
        </p>
      </motion.div>
    </Section>

    {/* ── Team cards ── */}
    <Section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
        {TEAM_MEMBERS.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </Section>

    {/* ── CTA ── */}
    <Section className="py-16 md:py-20 bg-teal-50">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Join Our Mission?</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          We are always looking for passionate individuals who share our vision of transforming
          lives through healthcare and education. Whether as a team member, volunteer, or partner,
          there are many ways to contribute.
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

export default Team;
