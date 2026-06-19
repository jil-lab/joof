// All seed data derived from the existing hardcoded frontend content.
// Images are intentionally omitted — upload them via the Strapi admin panel.

const p = (text: string) => ({
  type: 'paragraph',
  children: [{ type: 'text', text }],
});

const h2 = (text: string) => ({
  type: 'heading',
  level: 2,
  children: [{ type: 'text', text }],
});

export const categoriesData = [
  { name: 'Healthcare', slug: 'healthcare', color: '#14b8a6', icon: '🏥', order: 1 },
  { name: 'Education', slug: 'education', color: '#3b82f6', icon: '🎓', order: 2 },
  { name: 'Community', slug: 'community', color: '#f59e0b', icon: '🤝', order: 3 },
  { name: 'News', slug: 'news', color: '#6b7280', icon: '📰', order: 4 },
];

export const blogPostsData = [
  {
    title: 'Reaching 1,651 Patients: Our Healthcare Milestone',
    slug: 'reaching-1651-patients-healthcare-milestone',
    excerpt:
      'This year, the JOOF Foundation reached a historic milestone — providing medical care to 1,651 individuals across Iwajowa LGA and surrounding communities.',
    author: 'JOOF Foundation',
    readTime: 5,
    tags: ['healthcare', 'milestone', 'medical outreach'],
    content: [
      p('This year, the JOOF Foundation reached a historic milestone — providing medical care to 1,651 individuals across Iwajowa LGA and surrounding communities. This achievement represents not just a number, but 1,651 lives touched, families strengthened, and a community uplifted.'),
      h2('The Journey to 1,651'),
      p('Since our first medical outreach in 2016, we have grown from serving 200 community members at a single event to running multiple outreach programs across the year. Our team of volunteer doctors, nurses, and healthcare workers have dedicated countless hours to making quality care accessible to those who need it most.'),
      h2('What the Numbers Mean'),
      p('Behind every statistic is a human story. Among the 1,651 patients served this year, we supported 29 safe deliveries for mothers who would otherwise have given birth without skilled medical assistance. We also facilitated 15 life-changing surgical procedures for individuals who could not afford these operations on their own.'),
      h2('Looking Ahead'),
      p('As we celebrate this milestone, we remain focused on the road ahead. Our goal for the coming year is to expand our reach to additional communities and deepen our impact in the areas we already serve. With the support of our donors, partners, and volunteers, we believe this is possible.'),
      p('Thank you to everyone who has made this journey possible. Together, we are building a healthier, more equitable Nigeria.'),
    ],
    order: 1,
  },
  {
    title: 'Scholarships Transform Lives in Iwajowa',
    slug: 'scholarships-transform-lives-iwajowa',
    excerpt:
      'Through our education scholarship program, 25 students from underserved backgrounds have received full support to pursue their academic dreams — many becoming the first in their families to attend university.',
    author: 'JOOF Foundation',
    readTime: 4,
    tags: ['education', 'scholarships', 'youth'],
    content: [
      p('Education is the most powerful tool we can give a child. At the JOOF Foundation, we believe that no young person should be denied an education simply because of the circumstances of their birth. That belief drives our scholarship program, which this year supported 25 students from some of the most underserved communities in Iwajowa Local Government Area.'),
      h2('Stories of Transformation'),
      p('Among this year\'s scholars is Chioma Adeyemi, who grew up in a household where her parents worked as subsistence farmers. Without a scholarship, university would have been an impossible dream. Today, she is studying nursing — a choice she says was inspired by the JOOF Foundation\'s medical outreach programs she witnessed growing up.'),
      h2('More Than Tuition'),
      p('Our scholarship program covers more than just tuition fees. We also provide books, school supplies, and access to our mentorship network — connecting students with professionals in their fields of study. This holistic approach ensures that scholars have every resource they need to thrive.'),
      h2('Partnering with Schools'),
      p('We currently partner with five schools in the region to identify students who demonstrate both academic promise and financial need. Our selection process is rigorous and transparent, ensuring that support reaches those who need it most.'),
      p('To every donor who makes these scholarships possible: you are investing not just in students, but in the future of an entire community. Thank you.'),
    ],
    order: 2,
  },
  {
    title: 'JOOF Foundation Annual Report: A Year of Impact',
    slug: 'joof-foundation-annual-report-year-of-impact',
    excerpt:
      'Our annual review covers the highlights of another remarkable year — from medical outreach across Iwajowa LGA to new education partnerships and the growth of our volunteer network.',
    author: 'JOOF Foundation',
    readTime: 6,
    tags: ['annual report', 'impact', 'community'],
    content: [
      p('As we reflect on the past year at the JOOF Foundation, we are filled with gratitude — for our donors, our volunteers, our partners, and above all, the communities who trust us to serve them. This annual review captures the highlights of a year that exceeded our expectations in almost every measure.'),
      h2('Healthcare Impact'),
      p('Our healthcare programs served 1,651 individuals this year through medical outreach camps, maternal health services, and surgical sponsorships. We recorded 29 safe deliveries and completed 15 surgical procedures. Our health education workshops reached hundreds more, empowering communities with knowledge about disease prevention and healthy living.'),
      h2('Education Impact'),
      p('The education arm of our work supported 25 scholars with full scholarships, provided learning materials to five partner schools, and launched a new mentorship program connecting 40 students with professional mentors. We also renovated two school libraries, creating better learning environments for hundreds of children.'),
      h2('Community Development'),
      p('Our community outreach programs addressed some of the deepest needs in Iwajowa LGA — from clean water access education to economic empowerment workshops for women and youth. We ran three major community programs this year, directly impacting over 300 households.'),
      h2('Financial Transparency'),
      p('We are committed to transparency in all aspects of our operations. Our full audited financial statements are available on request. Every donation made to the JOOF Foundation is directed to our programs, with minimal administrative overhead.'),
      p('We thank all who have partnered with us this year. As we look to the year ahead, our resolve to serve is stronger than ever. Together, we are building a brighter future.'),
    ],
    order: 3,
  },
  {
    title: 'Mobile Clinics Bring Healthcare to Remote African Villages',
    slug: 'mobile-clinics-remote-african-villages',
    excerpt:
      'Across rural sub-Saharan Africa, mobile health clinics are closing the gap between communities and essential medical care — one village visit at a time.',
    author: 'JOOF Foundation',
    readTime: 5,
    tags: ['healthcare', 'africa', 'outreach', 'mobile clinics'],
    categorySlug: 'healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80',
    content: [
      p('In communities where the nearest hospital can be several hours away, a mobile clinic pulling into the village square is often the most significant healthcare event of the year. These rolling health centers — staffed by volunteer doctors, nurses, and community health workers — are transforming access to essential medical services across rural sub-Saharan Africa.'),
      h2('What Mobile Clinics Provide'),
      p('At a typical mobile clinic visit, residents can receive basic health screenings, maternal care consultations, immunizations, and treatment for common conditions like malaria, hypertension, and respiratory infections. Some mobile units are equipped with diagnostic tools including portable ultrasound machines, enabling healthcare workers to conduct prenatal scans in the field.'),
      h2('Reaching the Unreachable'),
      p('The impact of mobile clinic programs is felt most keenly in communities where geography and poverty have long made healthcare inaccessible. Villages in remote inland areas, isolated by poor road infrastructure, often go months without seeing a qualified medical professional. Mobile clinics change this reality.'),
      h2('Community Trust as the Foundation'),
      p('Experienced health workers emphasize that community trust is the bedrock of successful outreach programs. By returning to the same communities consistently and engaging local leaders and traditional healers, mobile clinic teams build the relationships that encourage residents to seek care earlier and follow through on treatment plans.'),
      p('The JOOF Foundation is proud to be part of this growing movement to bring quality healthcare to every corner of Africa. We believe that geography should never be a barrier to healing.'),
    ],
    order: 4,
  },
  {
    title: 'Maternal Health Outreach: Saving Mothers and Babies Across Nigeria',
    slug: 'maternal-health-outreach-saving-mothers-babies-nigeria',
    excerpt:
      'Skilled birth attendance and antenatal care remain out of reach for millions of Nigerian women. Community health visits are changing that — one mother at a time.',
    author: 'JOOF Foundation',
    readTime: 6,
    tags: ['healthcare', 'maternal health', 'nigeria', 'africa'],
    categorySlug: 'healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    content: [
      p('Nigeria accounts for one of the highest maternal mortality rates in the world. Yet the tragedy is largely preventable. The leading causes — postpartum hemorrhage, eclampsia, and obstructed labour — are all conditions that skilled birth attendants and timely antenatal care can detect and manage. The challenge is getting that care to the women who need it most.'),
      h2('The Power of the Health Visit'),
      p('Community health visits — where trained midwives and nurses travel to homes and villages to provide antenatal screening, health education, and delivery support — have proven to be one of the most effective interventions available. These visits meet women where they are, removing transportation costs and cultural barriers that often prevent them from seeking care at formal clinics.'),
      h2('What We See in the Field'),
      p('Through the JOOF Foundation\'s maternal health programs, our healthcare workers have conducted hundreds of antenatal consultations in communities across Iwajowa LGA. In many cases, these visits have identified high-risk pregnancies that were previously undetected, allowing us to refer mothers for specialist care before complications developed. We have supported 29 safe deliveries to date — each one a life that might otherwise have been at grave risk.'),
      h2('Empowering Families with Knowledge'),
      p('Beyond clinical care, our health visits include educational sessions for families on danger signs in pregnancy, the importance of exclusive breastfeeding, and newborn care. When families understand what to look for, they become active participants in maternal health — a shift that makes entire communities safer for mothers and babies.'),
      p('We remain committed to expanding our maternal health reach, because every mother deserves a safe pregnancy and every child deserves a healthy start to life.'),
    ],
    order: 5,
  },
  {
    title: 'Free Eye Care Camps Restore Sight to Hundreds in West Africa',
    slug: 'eye-care-camps-restore-sight-west-africa',
    excerpt:
      'From cataracts to refractive errors, preventable blindness is robbing thousands of people across West Africa of their independence. Volunteer eye care missions are turning the tide.',
    author: 'JOOF Foundation',
    readTime: 4,
    tags: ['healthcare', 'africa', 'eye care', 'outreach'],
    categorySlug: 'healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=80',
    content: [
      p('Across West Africa, an estimated 80% of blindness cases are avoidable or treatable. Cataracts — which can be cured with a simple 20-minute surgical procedure — remain the leading cause of blindness in the region, largely because patients lack access to surgery. Free eye care camps, run by volunteer ophthalmologists and supported by community organizations, are changing this statistic one patient at a time.'),
      h2('A Day at the Eye Camp'),
      p('A typical community eye camp begins before sunrise, with patients often traveling several hours by foot, motorbike, or shared transport to reach the venue. Volunteer surgeons, nurses, and optometrists work in shifts to screen and treat hundreds of patients over two to three days. By the end of the camp, dozens of patients who arrived unable to see clearly are able to read, recognize faces, and reclaim their independence.'),
      h2('Beyond Surgery: Glasses and Follow-Up Care'),
      p('Not every vision problem requires surgery. Refractive errors — nearsightedness, farsightedness, and astigmatism — can often be corrected with the right pair of glasses. Eye care camps typically include a refraction station where patients receive free eyeglass prescriptions and, when available, donated spectacles. The impact on school-age children in particular is profound: a child who could not read the classroom blackboard becomes an engaged learner overnight.'),
      h2('Partnership Is Key'),
      p('Successful eye care camps require coordination between international volunteer organizations, local NGOs, community health workers, and government health authorities. The JOOF Foundation believes in this model of partnership, bringing together resources and expertise to deliver impact that no single organization could achieve alone.'),
      p('Every person who leaves an eye camp with restored sight is a reminder of what is possible when communities commit to health as a human right.'),
    ],
    order: 6,
  },
];


export const siteSettingData = {
  heroHeadline: 'FOR A BRIGHTER FUTURE',
  heroSubtext:
    'Empowering communities through healthcare and education initiatives for sustainable development and lasting impact.',
  missionTitle: 'Building Healthier, Educated Communities',
  missionBody:
    'To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality healthcare, education, and community development for underserved families in Iwajowa Local Government Area and across Nigeria.',
  visionStatement:
    'A Nigeria where every individual, regardless of their background, has access to quality healthcare and education, enabling them to thrive and contribute meaningfully to society.',
  contactEmail: 'joofoundationhub@gmail.com',
  contactPhone: '+234 XXX XXX XXXX',
  contactAddress: 'Lagos, Nigeria',
  instagramUrl: 'https://instagram.com/joofoundation',
  facebookUrl: 'https://facebook.com/joofoundation',
  youtubeUrl: 'https://youtube.com/@joofoundation',
  linkedinUrl: 'https://linkedin.com/company/joofoundation',
};

export const timelineMilestonesData = [
  {
    year: '2015',
    title: 'Foundation Established',
    description:
      'John Oyediran Olabisi founded the JOOF Foundation with a vision to transform lives through healthcare and education.',
    order: 1,
  },
  {
    year: '2016',
    title: 'First Medical Outreach',
    description:
      'Conducted our first medical outreach program, providing free healthcare services to over 200 community members.',
    order: 2,
  },
  {
    year: '2017',
    title: 'Scholarship Program Launch',
    description:
      'Launched our education scholarship program, supporting 25 students from underprivileged backgrounds.',
    order: 3,
  },
  {
    year: '2018',
    title: 'Healthcare Expansion',
    description:
      'Expanded healthcare services to include maternal care, resulting in 15 safe deliveries in the first year.',
    order: 4,
  },
  {
    year: '2019',
    title: 'Community Center Opening',
    description:
      'Opened our first community learning center, providing resources and mentorship to local youth.',
    order: 5,
  },
  {
    year: '2020',
    title: 'COVID-19 Response',
    description:
      'Pivoted to provide critical pandemic support, distributing PPE and conducting health awareness campaigns.',
    order: 6,
  },
  {
    year: '2021',
    title: 'Surgical Program Start',
    description:
      'Launched our surgical intervention program, completing 15 life-changing procedures for those in need.',
    order: 7,
  },
  {
    year: '2022',
    title: 'Registered Charity Status',
    description:
      'Achieved official registered charity status, strengthening our capacity to serve more communities.',
    order: 8,
  },
  {
    year: '2023',
    title: 'Milestone Achievement',
    description:
      'Reached over 1,500 individuals through our combined healthcare and education programs.',
    order: 9,
  },
  {
    year: '2024',
    title: 'Growing Impact',
    description:
      'Continued expanding our reach with 29 safe deliveries, 1,651 medical care services, and ongoing education support.',
    order: 10,
  },
];

export const advisorsData = [
  {
    name: 'Dr. Alaruru Olusoji Adeyanju',
    domain: 'Medicine & Public Health',
    bio: `Dr. Alaruru Olusoji Adeyanju is a distinguished medical doctor, administrator, and faith-driven public servant with over three decades of committed service to healthcare and governance in Nigeria. Born on November 13, 1964, in Ogbomoso, he began his academic journey at Saint Ferdinand R.C.M. School and later graduated from Ilorin Grammar School, Ilorin. He proceeded to the University of Ibadan, earning his medical degree in 1990.

After housemanship and national service in Oyo and Bauchi States, respectively, Dr. Adeyanju practiced in several private hospitals before beginning his residency at the University College Hospital, Ibadan, in 1998. He became a Consultant Obstetrician and Gynaecologist in 2005 and was instrumental in the development and accreditation of the OBGYN residency program at Adeoyo Maternity Teaching Hospital (AMTH), Ibadan — a milestone that has since produced several consultants.

A passionate advocate for public health, Dr. Adeyanju led the expansion of the hospital's HIV program in collaboration with Oyo State and APIN, significantly contributing to reduced HIV prevalence in the state. His administrative acumen earned him appointments as Director of Medical Services in 2019 and Permanent Secretary in the Oyo State Civil Service months later, serving across ministries including Health and Special Duties.

He is an active member of several professional bodies, including AMDO, NMA, and SOGON. His work has earned him numerous awards, including recognition from the National Productivity Centre.

A devout Christian, Dr. Adeyanju has been a committed member of Oritamefa Baptist Church since 1985. He is happily married to Dorcas Oluwafunmilayo and is blessed with four children.`,
    order: 1,
  },
  {
    name: 'Dr. Mrs. Sarah Alade',
    domain: 'Finance & Economic Policy',
    bio: `Dr. Sarah Alade was former Special Adviser to the President on Finance and Economy under the Buhari Administration. She chaired the Central Working Committee for the actualization of the current National Development Plans (NDP) 2021–2025 and Nigeria Agenda 2050, focused on developing and implementing policies designed to accelerate sustainable and inclusive economic growth.

She retired from the Central Bank of Nigeria (CBN) as Deputy Governor, Economic Policy in 2017 after 23 years in the apex Bank. She also acted briefly in 2014 as CBN Governor.

Prior to her appointment as Deputy Governor, she gained broad Central Banking and Financial System experience in various roles in the Bank. She joined the Bank as an Assistant Director in the Research Department.

Dr. Alade attended the University of Ife, Ile-Ife, where she obtained a BSc (Hons) degree in Economics in 1976, a Master of Commerce degree from the University of Melbourne, Australia in 1983, and a PhD in Management Science (Operations Research) from the University of Ilorin in 1991.

Dr. Alade was Chairman of Financial Market Dealers Quotations (FMDQ) and Chairman of African Finance Corporation. She is currently an Advisory Panel Member – G20 Contact with Africa (CWA) and a member of the Investment Committee of the United Nations Joint Staff Pension Fund.

Dr. Alade is Chairman of Council, Nigeria Baptist Theological Seminary, Ogbomosho. Dr. Alade is blessed with children.`,
    order: 2,
  },
  {
    name: 'Rev. Dr. Adediran Adeleke',
    domain: 'Ministry & Leadership',
    bio: `Rev. Dr. Adediran Adeleke is a seasoned pastor, scholar, music minister, and church administrator with a distinguished record of service in ministry and education. Born on January 16, 1967, he holds a B.Sc. in Agricultural Extension from the University of Ibadan and advanced theological degrees from the Nigerian Baptist Theological Seminary (NBTS), including a Doctor of Ministry in Leadership and Administration.

His conversion experience began in 1991 as an undergraduate, and he answered the call to pastoral ministry during his NYSC service year in Ikorodu, Lagos. Since then, he has faithfully served across several denominations and ministries, including Liberty Baptist Church, Aba; El-Shaddai Baptist Church, Ibadan; and currently, as the Pastor of Oritamefa Baptist Church, Ibadan.

Dr. Adeleke's ministry spans administrative roles, music direction, and leadership development. He has authored books and scholarly articles, including What Happens To My Prayers in Heaven? and Building and Leading a Dynamic Worship Team.

He is a recipient of numerous academic and ministerial awards for excellence and integrity. Rev. Adeleke is married to Mrs. Abosede Abiodun Adeleke, a French educator and Ph.D. candidate, and their union is blessed with two children.`,
    order: 3,
  },
  {
    name: 'Prof. Segun Segun-Busari',
    domain: 'Medicine & Academia',
    bio: `Prof. Segun Segun-Busari was born on August 28, 1962, in Offa Local Government Area of Kwara State, Nigeria. He had his secondary education at the Government Secondary School, Omu-Aran, Kwara State, and A-Levels at Baptist Academy, Sherpherdhill, Obanikoro, Lagos. Between 1979 and 1987, he obtained his M.B;B.S. at the University of Ilorin, Ilorin. He later completed his Residency Post-Graduate Training Programme in April 2001, becoming a Fellow of the West African College of Surgeons. He is also a Fellow of the International College of Surgeons.

In June 2002, he was appointed Lecturer 1 in the Department of Otorhinolaryngology of the University of Ilorin, and Honorary Consultant at The University of Ilorin Teaching Hospital, Ilorin. Currently he is a Professor of Otorhinolaryngology at Bowen University, Iwo, Osun State, Nigeria.

Prof. Segun-Busari is a member of many learned and professional societies including the West African College of Surgeons, International College of Surgeons, American Academy of Otolaryngology-Head Neck Surgery, Nigeria Medical Association, and the Otorhinolaryngological Society of Nigeria. He has authored and co-authored several articles in reputable local and international outlets.

Segun-Busari is happily married to Olufunke Segun-Busari and they are blessed with 3 children.`,
    order: 4,
  },
  {
    name: 'Mrs. Felicia Ikeoluwa Abiola-Ige',
    domain: 'Education & Community Development',
    bio: `Mrs. Felicia Ikeoluwa Abiola-Ige is a respected educator, community leader, and humanitarian whose life embodies service, faith, and leadership. With over 35 years of experience in Nigeria's education sector, she has served in various capacities including class teacher, vice principal, and principal across several public schools in Oyo State.

Felicia holds a Nigerian Certificate in Education (NCE) and a degree in Educational Management from the University of Ado-Ekiti. Throughout her career, she remained committed to continuous development, participating in national and international workshops. Her professional journey reflects not just longevity but impact — mentoring generations of students and contributing to educational advancement through the Nigerian Union of Teachers, where she served as Deputy Chairman of the Oyo West Chapter (2008–2012).

A devoted Christian, she has served the Nigerian Baptist Convention in various roles including choir leadership, WMU treasurer, and child evangelism. She is a founding member of the Foresight Development Initiative, supporting education and economic empowerment for women, youth, and farmers.

Honored for her contributions with several awards, Felicia remains a beacon of service, humility, and transformation. Married to Baale Olusegun Abiola-Ige, she is a mother to both biological and spiritual children and continues to inspire lives through her faith, philanthropy, and unwavering dedication to the betterment of others.`,
    order: 5,
  },
  {
    name: 'Mr. Olufemi Tinuoye',
    domain: 'Banking & Executive Leadership',
    bio: `Femi Tinuoye is a seasoned executive with a distinguished 30-year career in the Nigerian banking industry. He has had the privilege of overseeing four out of six geopolitical zones in the country, demonstrating exceptional leadership skills.

Throughout his career, Femi has acquired multiple certifications and honed his skills in management, communication, and stakeholder engagement. He is a results-driven professional with expertise in Turn Around Management, Brain-Based Conversation Skills, and Mindfulness Leadership Training.

Femi's commitment to giving back to the community is evident in his involvement with various charitable initiatives. He is a patron of the Blood Drive Initiative LAUTECH and UCH, which supports blood donation drives for the National Blood Transfusion Service. Additionally, he has served on the Church Advisory Committee of Orita-Mefa Baptist Church and as a member of the Armed Forces arm of the National Blood Transfusion Service.

With his impressive track record and dedication to community service, Femi Tinuoye is an inspiration to many.`,
    order: 6,
  },
];

export const teamMembersData = [
  {
    name: 'Deaconess Bolanle Adekunbi Olabisi',
    role: 'Chairperson, Board of Trustees',
    bio: `Deaconess Bolanle Adekunbi Olabisi is the wife of Late Deacon Dr John Oyediran Olabisi and the Chairperson of the Trustees. She was born on May 23, 1952 at Oyo, Oyo State, Nigeria. She attended Oliver Baptist High School, Oyo from 1966 to 1970.

She obtained her B.Sc. Education and M.Sc Adult Education degrees from the University of Ife (now Obafemi Awolowo University) in 1976 and the University of Edinburgh, Scotland in 1983 respectively.

She retired voluntarily as the pioneer Principal of Oritamefa Baptist Model School, Ibadan in 2007. She is currently the Administrator of Highland Specialist Hospital, Yemetu Ibadan.`,
    order: 1,
  },
  {
    name: 'Dr. Mrs. Taiwo Olufunmilola Agbaje',
    role: 'Medical Director & Trustee',
    bio: `Taiwo Oluwafunmilola Agbaje (nee Olabisi) works as a medical practitioner offering clinical and public health services to government and private establishments. Dr Agbaje obtained an MPH (Management & Leadership) from the University of Sheffield, UK and a medical degree (MBBS) from LAUTECH Ogbomoso, Nigeria. She is married with children.`,
    order: 2,
  },
  {
    name: 'Mrs. Adetola Grace Amure',
    role: 'Leadership Coach & Trustee',
    bio: `Mrs Detola Amure is a portfolio entrepreneur and productivity coach with over 20 years of corporate and business experience. As CEO of The Productivity Company, she helps high-achieving professionals, leaders, and organisations overcome hidden productivity barriers, build confidence, and lead with impact.

She is an international speaker and author of four books. Detola also serves as a boardmember of the John Oyediran Olabisi Foundation, supporting access to healthcare and education in rural communities.

She is the Founder and Director of My Little Warrior Child CIC, a not-for-profit supporting bereaved parents through grief education and healing spaces. Detola holds a BSc in Computer Science from the University of Botswana and a Master's in Operational Research from Lancaster University, UK. She is married with children.`,
    order: 3,
  },
  {
    name: 'Dr. Johnson Oladiran Olabisi',
    role: 'Physician & CEO, Highland Specialist Hospital',
    bio: `Dr. Johnson Oladiran Olabisi works as a physician offering clinical and occupational health services to government and private establishments. He also serves as the CEO of Highland Specialist Hospital, Ibadan.

Dr. Olabisi obtained a fellowship in Community Medicine with the West African College of Physicians, a MPH (Health Economics) from the London School of Hygiene and Tropical Medicine (LSHTM), a MSc in Epidemiology & Medical Statistics, and a medical degree (MBBS) — both from the University of Ibadan, Nigeria. He is married with children.`,
    order: 4,
  },
  {
    name: 'Dr. Mrs. Oyebola Okunogbe',
    role: 'Economist & Researcher',
    bio: `Oyebola Okunogbe is the daughter of late Dr John Oyediran Olabisi and Mrs Bolanle Olabisi. She works as an economist in an international organization where she conducts research on public finance, nation building, education, employment, and gender in low and middle income countries.

Oyebola obtained her PhD in Public Policy and MPA in International Development from Harvard University, and her B.A. in Economics from Dartmouth College. She is married with children.`,
    order: 5,
  },
];

export const coreValuesData = [
  {
    title: 'Compassion',
    description:
      'We approach every individual with empathy, dignity, and respect, understanding their unique needs and circumstances.',
    icon: '❤️',
    order: 1,
  },
  {
    title: 'Excellence',
    description:
      'We are committed to delivering high-quality programs and services that create meaningful and lasting impact.',
    icon: '⭐',
    order: 2,
  },
  {
    title: 'Integrity',
    description:
      'We operate with transparency, accountability, and honesty in all our relationships and activities.',
    icon: '🤝',
    order: 3,
  },
  {
    title: 'Community',
    description:
      'We believe in the power of community and work collaboratively to uplift and empower those we serve.',
    icon: '🌟',
    order: 4,
  },
  {
    title: 'Innovation',
    description:
      'We embrace creative solutions and adapt our approaches to meet the evolving needs of our communities.',
    icon: '💡',
    order: 5,
  },
  {
    title: 'Sustainability',
    description:
      'We focus on creating long-term, sustainable change that empowers individuals and strengthens communities.',
    icon: '🌱',
    order: 6,
  },
];

export const impactStatsData = [
  { label: 'Medical Care Services', number: 1651, icon: '🏥', order: 1 },
  { label: 'Safe Deliveries', number: 29, icon: '👶', order: 2 },
  { label: 'Surgical Procedures', number: 15, icon: '⚕️', order: 3 },
  { label: 'Community Outreach Programs', number: 3, icon: '🤲', order: 4 },
];

export const testimonialsData = [
  {
    quote:
      'The JOOF Foundation changed our lives forever. When we had nowhere else to turn, they provided the medical care that saved my wife and our newborn baby. We are eternally grateful.',
    author: 'Omoboye Family',
    location: 'Lagos, Nigeria',
    order: 1,
  },
  {
    quote:
      'Thanks to the scholarship program, I was able to complete my education and now I am giving back to my community. JOOF Foundation invests in futures.',
    author: 'Chioma Adeyemi',
    location: 'Student Beneficiary',
    order: 2,
  },
  {
    quote:
      'The community outreach programs brought hope and practical support to our village. JOOF Foundation truly cares about making a difference.',
    author: 'Elder Samuel Okafor',
    location: 'Community Leader',
    order: 3,
  },
];

export const programsData = [
  {
    title: 'Healthcare Programs',
    type: 'healthcare',
    shortDescription:
      'Providing accessible medical care, maternal health services, surgical interventions, and preventative care to underserved communities.',
    features: [
      {
        title: 'Medical Outreach',
        description:
          'Regular community health camps providing free medical consultations, basic diagnostics, and essential medications.',
        icon: '🩺',
      },
      {
        title: 'Maternal & Child Health',
        description:
          'Comprehensive prenatal care, safe delivery services, postnatal support, and child immunization programs.',
        icon: '👶',
      },
      {
        title: 'Surgical Interventions',
        description:
          'Sponsoring critical surgical procedures for individuals who cannot afford life-saving operations.',
        icon: '⚕️',
      },
      {
        title: 'Health Education',
        description:
          'Community awareness programs on hygiene, nutrition, disease prevention, and healthy living practices.',
        icon: '📚',
      },
    ],
    impactStats: [
      { number: 1651, label: 'Medical Care Services Provided', icon: '🏥' },
      { number: 29, label: 'Safe Deliveries Supported', icon: '👶' },
      { number: 15, label: 'Life-Changing Surgeries', icon: '⚕️' },
    ],
    order: 1,
  },
  {
    title: 'Education Programs',
    type: 'education',
    shortDescription:
      'Empowering young minds through scholarships, learning resources, mentorship programs, and school infrastructure support.',
    features: [
      {
        title: 'Scholarship Program',
        description:
          'Merit and need-based scholarships covering tuition, books, and supplies for underprivileged students.',
        icon: '🎓',
      },
      {
        title: 'Learning Resources',
        description:
          'Providing textbooks, digital learning tools, and educational materials to schools in underserved areas.',
        icon: '📖',
      },
      {
        title: 'Mentorship Program',
        description:
          'Connecting students with professional mentors for guidance, career counseling, and personal development.',
        icon: '👥',
      },
      {
        title: 'School Support',
        description:
          'Renovating classrooms, building libraries, and improving school infrastructure for better learning environments.',
        icon: '🏫',
      },
    ],
    impactStats: [
      { number: 150, label: 'Students Supported', icon: '🎓' },
      { number: 25, label: 'Scholarships Awarded', icon: '💰' },
      { number: 5, label: 'Schools Partnered With', icon: '🏫' },
    ],
    order: 2,
  },
];

export const aboutPageData = {
  heroTitle: 'About JOOF Foundation',

  foundationSectionTitle: 'Our Foundation',
  foundationParagraph1:
    'The John Oyediran Olabisi Foundation (JOOF) is a non-profit organization established in honor of the life and legacy of Deacon Dr. John Oyediran Olabisi — surgeon, philanthropist, servant-leader, and devoted son of Iganna land. Founded with a singular purpose, JOOF exists to carry forward the values that defined Dr. Olabisi\'s seven decades on earth: compassionate healthcare, access to quality education, and the upliftment of underserved communities.',
  foundationParagraph2:
    'Born on 2 January 1950 as a prince of the ancient Iganna kingdom in Iwajowa Local Government Area of Oyo State, Nigeria, Dr. Olabisi rose from humble beginnings — supported by relations and well-wishers — to become one of Nigeria\'s most distinguished Ear, Nose and Throat (ENT) surgeons.',
  foundationBadgeYear: 'Established 2015',
  foundationBadgeLabel: '10 Years of Service',
  foundationParagraph3:
    'He trained at the University of Ibadan and went on to obtain his fellowship at the Royal College of Surgeons in Glasgow, Scotland. His career spanned distinguished public service as Chief Medical Officer in the Oyo State Ministry of Health, the founding of Highland Specialist Hospital in Ibadan, and a lifetime of treating patients regardless of their ability to pay. His private hospital was known in the community simply as ile aanu — the house of mercy.',
  foundationParagraph4:
    'Dr. Olabisi passed to glory on 13 January 2021. In his memory, his family, friends, and all who were touched by his generosity came together to establish the Foundation — ensuring that his spirit of service would live on, reaching thousands more lives across Nigeria and beyond.',

  missionSectionTitle: 'Our Mission',
  missionBody:
    'To honour the legacy of Dr. John Oyediran Olabisi by expanding access to quality healthcare, education, and community development for underserved families in Iwajowa Local Government Area and across Nigeria.',

  founderVisionSectionTitle: "The Founder's Vision",
  founderVisionQuote:
    'A Nigeria where no family is turned away from a hospital because of poverty, no child denied an education because of circumstance, and no community left behind because of geography.',
  founderVisionName: 'John Oyediran Olabisi',
  founderVisionRole: 'Founder & Director',

  ourStorySectionTitle: 'Our Story',
  ourStoryBody:
    'On his 70th birthday in January 2020, Dr. Olabisi dedicated a newly completed hospital building in his hometown of Iganna — the Oba Olabisi Alabi Memorial Baptist Specialist Hospital — as a gift to over 150,000 people in the catchment area who lacked access to specialist medical care. That act of generosity, his last great project, became the seed from which the Foundation grew. JOOF was born from the conviction that one person\'s dream, faithfully carried forward by a community, can transform countless lives.',
  ourStoryHighlightedName: 'Oba Olabisi Alabi Memorial Baptist Specialist Hospital',

  ctaPrimaryLabel: 'Explore Our Programs',
  ctaPrimaryUrl: '/programs',
  ctaSecondaryLabel: 'Support Our Mission',
  ctaSecondaryUrl: '/donate',
};
