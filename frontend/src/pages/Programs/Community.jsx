import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Button from '../../components/common/Button/Button';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=80';

const INITIATIVES = [
  {
    title: 'Community Health Outreach',
    description:
      'Organising free medical outreach programmes, screenings, and health education workshops in Iganna and surrounding towns.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Healthcare workers conducting a community outreach programme',
  },
  {
    title: 'Youth Development',
    description:
      'Creating opportunities for young students to learn, lead, and contribute meaningfully to their communities.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    alt: 'Young students engaged in a learning session',
  },
  {
    title: 'Infrastructure and Environment',
    description:
      'Partnering with local stakeholders to improve basic community infrastructure and the living environment where possible.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    alt: 'Community infrastructure development project',
  },
];

const Community = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/80" />
        <div className="relative h-full container-custom flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Community
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Community is not a word we use lightly. It is the heartbeat of everything we do.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Community
              </h2>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Dr. John Oyediran Olabisi never forgot where he came from. Despite his
                accomplishments — his fellowships, his hospital, his public service career — he
                remained rooted in Iganna, in his people, and in the belief that a great man's
                first responsibility is to his community. He served as General Secretary of the
                League of Iganna Patriots. He showed up. He gave back. He brought people together.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At the John Oyediran Olabisi Foundation, community is not a word we use lightly.
                It is the heartbeat of everything we do. We recognise that healthcare and education
                do not exist in isolation — they thrive or fail depending on the social, economic,
                and spiritual health of the communities around them. That is why community
                development is one of JOOF's core pillars.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                  alt="Community members gathered together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-card overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
                    alt="Community members working together"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-card overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80"
                    alt="Local community engagement"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach to Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                JOOF takes a holistic approach to community development — working not just to
                address immediate needs, but to build the long-term resilience and wellbeing of
                the communities we serve. We engage community members as active partners, not
                passive recipients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-teal-500 rounded-full flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    We listen before we act, ensuring our programmes reflect genuine community needs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-teal-500 rounded-full flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    We work alongside local leaders, organisations, and families to design and
                    deliver meaningful programmes.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[40px] bg-teal-500 rounded-full flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    We invest in long-term resilience, not just short-term relief.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Key Community Initiatives */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Community Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focused programmes that address the most pressing needs in the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIATIVES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Iganna Community */}
      <Section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Iganna Community
              </h2>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                Iganna holds a special place in JOOF's work. It is the ancestral home of
                Dr. Olabisi, a royal kingdom with a rich heritage and a warm, resilient people.
                It is also a community that has, for too long, been underserved in terms of
                health and economic infrastructure.
              </p>
              <p className="text-lg text-gray-600 mb-5 leading-relaxed">
                JOOF's investment in Iganna is both an act of love and a practical commitment to
                sustainable development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By establishing the specialist hospital in Iganna, JOOF is already reshaping the
                community's access to healthcare. But we do not stop there. We seek to support
                the full flourishing of Iganna — in its schools, its homes, its economic life,
                and its future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-card overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                    alt="Rural community in Nigeria"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[3/4] rounded-card overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
                    alt="Community life and heritage in West Africa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-card opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Partner With Our Community */}
      <Section className="py-16 md:py-20 bg-gradient-to-br from-teal-700 to-teal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner With Our Community
              </h2>
              <p className="text-lg text-gray-100 mb-5 leading-relaxed">
                We warmly invite organisations, diaspora groups, individuals, and faith communities
                to join us in our community work. There is room for everyone at the table —
                whether you want to fund a programme, volunteer your skills, donate supplies, or
                simply raise awareness.
              </p>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                When communities come together, extraordinary things happen.
              </p>
              <blockquote className="border-l-4 border-teal-300 pl-6">
                <p className="text-xl text-white font-medium italic leading-relaxed">
                  "Many drops make an ocean. Whatever you are able to give, it matters — and
                  together, we build something lasting."
                </p>
                <footer className="mt-3 text-teal-200 text-sm">
                  — Founding conviction of JOOF
                </footer>
              </blockquote>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-card overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80"
                  alt="Volunteers and community partners working together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Empower Communities Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your support helps us create sustainable change in communities, providing
              essential services, skills training, and infrastructure development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="primary" size="lg">
                  Support Communities
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg">
                  View All Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Community;
