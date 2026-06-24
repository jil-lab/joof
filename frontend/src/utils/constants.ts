// Color Palette
export const COLORS = {
  primary: {
    teal: '#0d9488',
    tealDark: '#0f766e',
    tealDeep: '#115e59',
  },
  secondary: {
    yellow: '#facc15',
    yellowDark: '#eab308',
  },
  neutral: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray600: '#4b5563',
    gray700: '#374151',
    gray900: '#111827',
  },
};

// Contact Information
export const CONTACT_INFO = {
  email: 'joofoundationhub@gmail.com',
  phone: '+234 XXX XXX XXXX',
  address: 'Lagos, Nigeria',
  social: {
    instagram: 'https://instagram.com/joofoundation',
    facebook: 'https://facebook.com/joofoundation',
    youtube: 'https://youtube.com/@joofoundation',
    linkedin: 'https://linkedin.com/company/joofoundation',
  },
};

// Impact Statistics
export const IMPACT_STATS = [
  { id: 1, number: 1651, label: 'Medical Care Services', icon: '🏥' },
  { id: 2, number: 29, label: 'Safe Deliveries', icon: '👶' },
  { id: 3, number: 15, label: 'Surgical Procedures', icon: '⚕️' },
  { id: 4, number: 3, label: 'Community Outreach Programs', icon: '🤲' },
];

// Mission & Vision
export const MISSION_VISION = {
  mission: 'To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality healthcare, education, and community development for underserved families in Iwajowa Local Government Area and across Nigeria.',
  vision: 'A Nigeria where every individual, regardless of their background, has access to quality healthcare and education, enabling them to thrive and contribute meaningfully to society.',
  tagline: 'For a Brighter Future',
};

// Programs Data
export interface ProgramData {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  stats: { number: number; label: string; icon: string }[];
  features: { title: string; description: string; icon: string }[];
  impact: string;
  gallery: string[];
  additionalImages: Record<string, string>;
}

export const PROGRAMS: ProgramData[] = [
  {
    id: 1,
    slug: 'healthcare',
    title: 'Healthcare Programs',
    shortDescription: 'Providing accessible medical care, maternal health services, surgical interventions, and preventative care to underserved communities.',
    description: 'Our healthcare programs are designed to bridge the gap in medical access for underserved communities across Nigeria.',
    image: '/images/programs/care.jpg',
    icon: '🏥',
    stats: [
      { number: 1651, label: 'Medical Care Services Provided', icon: '🏥' },
      { number: 29, label: 'Safe Deliveries Supported', icon: '👶' },
      { number: 15, label: 'Life-Changing Surgeries', icon: '⚕️' },
    ],
    features: [
      { title: 'Medical Outreach', description: 'Regular community health camps providing free medical consultations.', icon: '🩺' },
      { title: 'Maternal & Child Health', description: 'Comprehensive prenatal care, safe delivery services.', icon: '👶' },
      { title: 'Surgical Interventions', description: 'Sponsoring critical surgical procedures.', icon: '⚕️' },
      { title: 'Health Education', description: 'Community awareness programs on hygiene, nutrition.', icon: '📚' },
    ],
    impact: 'Through our healthcare programs, we have touched over 1,600 lives.',
    gallery: [
      '/images/programs/healthcare-1.jpg',
      '/images/programs/healthcare-2.jpg',
      '/images/programs/healthcare-3.jpg',
    ],
    additionalImages: {
      outreach: '/images/programs/healthcare-outreach.jpg',
      maternalHealth: '/images/programs/maternal-health.jpg',
    },
  },
  {
    id: 2,
    slug: 'education',
    title: 'Education Programs',
    shortDescription: 'Empowering young minds through scholarships, learning resources, mentorship programs, and school infrastructure support.',
    description: 'Education is the foundation for breaking the cycle of poverty.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    icon: '📚',
    stats: [
      { number: 150, label: 'Students Supported', icon: '🎓' },
      { number: 25, label: 'Scholarships Awarded', icon: '💰' },
      { number: 5, label: 'Schools Partnered With', icon: '🏫' },
    ],
    features: [
      { title: 'Scholarship Program', description: 'Merit and need-based scholarships.', icon: '🎓' },
      { title: 'Learning Resources', description: 'Providing textbooks and digital learning tools.', icon: '📖' },
      { title: 'Mentorship Program', description: 'Connecting students with professional mentors.', icon: '👥' },
      { title: 'School Support', description: 'Renovating classrooms and improving school infrastructure.', icon: '🏫' },
    ],
    impact: 'Our education initiatives have helped over 150 students continue their education.',
    gallery: [
      '/images/programs/education-1.jpg',
      '/images/programs/education-2.jpg',
      '/images/programs/education-3.jpg',
    ],
    additionalImages: {
      scholarshipStudents: '/images/programs/scholarship-students.jpg',
    },
  },
];
