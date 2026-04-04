import { motion } from 'framer-motion';
import Section from '../../components/common/Section/Section';
import TeamGrid from '../../components/about/TeamGrid';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Deaconess Bolanle Adekunbi Olabisi',
    role: 'Chairperson',
    bio: 'Deaconess Bolanle Adekunbi Olabisi is the wife of Late Deacon Dr John Oyediran Olabisi and the Chairperson of the Trustees. She was born on May  23, 1952 at Oyo, Oyo State, Nigeria. She attended Oliver Baptist High School, Oyo from 1966 to 1970. She obtained her B. Sc. Education and M.Sc  Adult Education degrees from the University of Ife( now Obafemi Awolowo University)in 1976 and the University of Edinburgh, Scotland in 1983 respectively. She retired voluntarily as the pioneer Principal of Oritamefa Baptist Model School, Ibadan in 2007. She is currently the Administrator of Highland Specialist Hospital, Yemetu Ibadan.',
    linkedin: '#',
    image: '/images/team/member1.png',
  },
  {
    id: 2,
    name: 'DR. Mrs. Taiwo Olufunmilola Agbaje',
    role: '',
    bio: 'Taiwo Oluwafunmilola Agbaje (nee Olabisi) works as a medical practitioner offering clinical and public health services to government and private establishments. She also serves as the Medical Director (Admin) of Highland Specialist Hospital, Ibadan. Dr. Agbaje obtained a MPH (Management & Leadership) from the University OF Sheffield, UK and a medical degree (MBBS) from LAUTECH Ogbomoso, Nigeria.  She is married with children.',
    linkedin: '#',
    image: '/images/team/member2.png',
  },
  {
    id: 3,
    name: 'Mrs. Adetola Grace Amure',
    role: '',
    bio: 'Detola Amure is a dynamic leader who combines over 20 years of corporate and business experience with her expertise in leadership, productivity, and emotional well-being to drive transformative results. \n As the CEO of The Productivity Company, she helps teams and organisations unlock productivity, confidence, and leadership by overcoming hidden emotional and mindset barriers. She is also the Founder of Super Working Mum (SWM), a faith-based organization that equips working mothers with the tools to maximize their time and achieve their biggest dreams. \n A Certified Maxwell Leadership Coach, Speaker & Trainer, and Certified Maxwell DISC Behavioral Consultant, Detola is passionate about fostering thriving cultures and impactful leadership. She also serves as a Certified Grief Specialist, offering invaluable support to individuals navigating the complexities of grief. \n Her commitment to service extends beyond coaching and leadership. She believes that true impact comes from bridging the gap between vision and action, and she is committed to helping drive meaningful change. \n Detola is also an international speaker, co-host of the When Life Stops podcast, and the author of four books, making her a sought-after voice for inspiration and transformation. Additionally, she is the compassionate Founder and Director of the My Little Warrior Child Foundation, which provides support to bereaved parents. \n She lives in the UK with her husband and children.',
    linkedin: '#',
    image: '/images/team/member4.png',
  },
  {
    id: 4,
    name: 'Dr. Johnson Oladiran Olabisi',
    role: '',
    bio: 'Dr. Johnson Oladiran Olabisi works as a physician offering clinical & occupational health services to government and private establishments. He also serves as the CEO of Highland Specialist Hospital, Ibadan. Dr Olabisi obtained a fellowship in Community Medicine with the West African College of Physicians, a MPH (Health Economics) from the LSHTM, a MSc in Epidemiology & medical statistics and a medical degree (MBBS) both from the University of Ibadan, Nigeria. He is married with children.',
    linkedin: '#',
    image: '/images/team/member3.png',
  },
  {
    id: 5,
    name: 'Dr. Mrs. Oyebola Okunogbe',
    role: '',
    bio: 'Oyebola Okunogbe is the daughter of late Dr John Oyediran Olabisi and Mrs Bolanle Olabisi. She works as an economist in an international organization where she conducts research on public finance, nation building, education, employment and gender in low and middle income countries.  Oyebola obtained her PhD in Public Policy and MPA in International Development from Harvard University, and her B.A. in Economics from Dartmouth College. She is married with children.',
    linkedin: '#',
    image: '/images/team/member5.png',
  },
];

const Team = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          {/* <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            Dedicated individuals working together to transform lives and build brighter futures
          </p> */}
        </motion.div>
      </Section>

      {/* Team Introduction */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Heart of JOOF Foundation
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our team brings together diverse expertise, shared values, and unwavering commitment
            to our mission. Each member plays a vital role in ensuring that we deliver impactful
            programs and services to the communities we serve. Together, we work tirelessly to
            make a lasting difference in the lives of those who need it most.
          </p>
        </motion.div>

        <TeamGrid members={TEAM_MEMBERS} />
      </Section>

      {/* Join Our Team CTA */}
      <Section className="py-16 md:py-20 bg-teal-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Join Our Mission?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We're always looking for passionate individuals who share our vision of transforming
            lives through healthcare and education. Whether as a team member, volunteer, or partner,
            there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Support Our Work
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Team;
