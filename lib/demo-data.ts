// Aureus Law - Demo Data for Development
// This data is used when Supabase is not connected

import type {
  TeamMember,
  PracticeArea,
  Sector,
  Article,
  ArticleCategory,
  Testimonial,
  FAQ,
  ContactInfo,
  HeroContent,
  Case,
  Task,
  Appointment,
  Client,
  Notification,
  ConsultationRequest,
} from './types'

export const contactInfo: ContactInfo = {
  phone: '+960 767 3636',
  email: 'hello@aureuslaw.mv',
  address: 'Aureus Law, 4th Floor, Champa Building, Boduthakurufaanu Magu, Malé, Maldives 20026',
  hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM'
}

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/1Dh8eA4aR3/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/aureus.law.mv?stkn=MWx5ZGJwOWQ4bnV1cA==',
  whatsapp: 'https://wa.me/9607673636',
}

// Firm Statistics
export const firmStats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Cases Resolved', value: '2,500+' },
  { label: 'Corporate Clients', value: '300+' },
  { label: 'Legal Professionals', value: '25+' },
]

// Firm Values
export const firmValues = [
  {
    title: 'Integrity',
    description: 'We uphold honesty, professionalism, confidentiality, and ethical legal practice in every matter we handle.',
    icon: 'Shield'
  },
  {
    title: 'Client Commitment',
    description: 'We prioritize responsiveness, transparency, and practical legal guidance tailored to each client\'s needs.',
    icon: 'Users'
  },
  {
    title: 'Excellence & Precision',
    description: 'We approach every matter with diligence, attention to detail, and a commitment to delivering high-quality legal work.',
    icon: 'Award'
  },
  {
    title: 'Accountability',
    description: 'We believe in clear communication, responsible practice, and maintaining trust through consistent professional standards.',
    icon: 'MapPin'
  },
]

export const heroContent: HeroContent = {
  headline: 'Independent Counsel Driven by Justice',
  subheadline: 'Principled, practical, and client-focused legal services for individuals, businesses, and institutions across the Maldives.',
  cta_text: 'Book a Consultation',
  cta_link: '/contact/book-consultation'
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    name: 'Corporate & Commercial Law',
    slug: 'corporate-commercial',
    short_description: 'Strategic legal support for business formation, transactions, and corporate governance.',
    full_description: 'Our corporate and commercial practice provides comprehensive legal support for businesses at every stage of their journey. From entity formation and shareholder agreements to complex M&A transactions, we help clients navigate the legal landscape with confidence.',
    icon_name: 'Building2',
    cover_image_url: null,
    common_needs: ['Company incorporation', 'Shareholder agreements', 'Joint ventures', 'Corporate restructuring', 'Due diligence'],
    related_services: ['Contract Drafting', 'Regulatory Compliance', 'Banking & Finance'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 1,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    short_description: 'Skilled representation in civil disputes and court proceedings.',
    full_description: 'When disputes arise, our litigation team brings strategic thinking and courtroom experience to protect your interests. We handle matters ranging from contract disputes to property claims, always working toward the most favorable resolution.',
    icon_name: 'Scale',
    cover_image_url: null,
    common_needs: ['Contract disputes', 'Property claims', 'Debt recovery', 'Injunctions', 'Appeals'],
    related_services: ['Dispute Resolution', 'Debt Recovery'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 2,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    name: 'Criminal Defense',
    slug: 'criminal-defense',
    short_description: 'Vigorous defense of your rights in criminal matters.',
    full_description: 'Every person deserves a strong defense. Our criminal defense team provides confidential, dedicated representation for individuals facing charges, ensuring your rights are protected throughout the legal process.',
    icon_name: 'Shield',
    cover_image_url: null,
    common_needs: ['Investigation stage support', 'Court representation', 'Bail applications', 'Appeals', 'Record expungement'],
    related_services: ['White Collar Investigations'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 3,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '4',
    name: 'Family Law',
    slug: 'family-law',
    short_description: 'Compassionate guidance through sensitive family matters.',
    full_description: 'Family matters require both legal expertise and emotional sensitivity. We guide clients through divorce, custody, and inheritance issues with discretion and care, always prioritizing the well-being of families.',
    icon_name: 'Heart',
    cover_image_url: null,
    common_needs: ['Divorce proceedings', 'Child custody', 'Maintenance claims', 'Prenuptial agreements', 'Adoption'],
    related_services: ['Inheritance & Estates'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 4,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '5',
    name: 'Employment & Labour',
    slug: 'employment-labour',
    short_description: 'Protecting rights in the workplace for employers and employees.',
    full_description: 'Whether you are an employer establishing workplace policies or an employee facing unfair treatment, our employment practice provides balanced, practical legal guidance aligned with Maldivian labor law.',
    icon_name: 'Users',
    cover_image_url: null,
    common_needs: ['Employment contracts', 'Wrongful termination', 'Workplace policies', 'Discrimination claims', 'Severance negotiations'],
    related_services: ['Regulatory Compliance', 'Civil Litigation'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 5,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '6',
    name: 'Property & Land Matters',
    slug: 'property-land',
    short_description: 'Expert guidance on property transactions and land disputes.',
    full_description: 'Property matters in the Maldives involve unique considerations. We assist with purchases, leases, development agreements, and dispute resolution, ensuring your property interests are secure.',
    icon_name: 'Home',
    cover_image_url: null,
    common_needs: ['Property purchases', 'Land registration', 'Lease agreements', 'Title disputes', 'Development contracts'],
    related_services: ['Construction Law', 'Civil Litigation'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 6,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '7',
    name: 'Banking & Finance',
    slug: 'banking-finance',
    short_description: 'Legal support for financial transactions and institutions.',
    full_description: 'From loan documentation to regulatory compliance, we support banks, financial institutions, and borrowers through complex financial transactions and regulatory matters.',
    icon_name: 'Landmark',
    cover_image_url: null,
    common_needs: ['Loan documentation', 'Security arrangements', 'Financial regulations', 'Banking disputes', 'Islamic finance'],
    related_services: ['Corporate Law', 'Regulatory Compliance'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: false,
    is_visible: true,
    sort_order: 7,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '8',
    name: 'Dispute Resolution & Arbitration',
    slug: 'dispute-resolution',
    short_description: 'Alternative pathways to resolve conflicts efficiently.',
    full_description: 'Not every dispute needs to go to court. We offer mediation and arbitration services that can resolve conflicts faster and more cost-effectively while maintaining confidentiality.',
    icon_name: 'MessageSquare',
    cover_image_url: null,
    common_needs: ['Commercial arbitration', 'Mediation services', 'Negotiated settlements', 'International disputes', 'Enforcement of awards'],
    related_services: ['Civil Litigation', 'Corporate Law'],
    process_steps: null,
    meta_title: null,
    meta_description: null,
    is_featured: false,
    is_visible: true,
    sort_order: 8,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  }
]

export const sectors: Sector[] = [
  {
    id: '1',
    name: 'Hospitality & Resorts',
    slug: 'hospitality-resorts',
    short_description: 'Legal partner to the Maldives\' world-renowned hospitality industry.',
    full_description: 'The hospitality sector is the cornerstone of the Maldivian economy. We provide comprehensive legal support to resorts, hotels, and tourism operators, from development agreements to employment matters and regulatory compliance.',
    icon_name: 'Building',
    cover_image_url: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 1,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    name: 'Construction & Real Estate',
    slug: 'construction-real-estate',
    short_description: 'Building the legal foundation for development projects.',
    full_description: 'We support developers, contractors, and property owners through all phases of construction and real estate projects, from land acquisition to dispute resolution.',
    icon_name: 'HardHat',
    cover_image_url: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 2,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    name: 'SMEs & Local Businesses',
    slug: 'smes-local-businesses',
    short_description: 'Empowering Maldivian entrepreneurs and growing businesses.',
    full_description: 'Small and medium enterprises are the backbone of the local economy. We provide practical, affordable legal support tailored to the needs of growing Maldivian businesses.',
    icon_name: 'Store',
    cover_image_url: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 3,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '4',
    name: 'Financial Services',
    slug: 'financial-services',
    short_description: 'Navigating the regulated financial landscape.',
    full_description: 'From banks to insurance companies to fintech startups, we help financial services clients manage regulatory requirements while pursuing growth opportunities.',
    icon_name: 'TrendingUp',
    cover_image_url: null,
    meta_title: null,
    meta_description: null,
    is_featured: false,
    is_visible: true,
    sort_order: 4,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '5',
    name: 'International Clients',
    slug: 'international-clients',
    short_description: 'Your gateway to legal certainty in the Maldives.',
    full_description: 'Foreign investors and international businesses need local expertise. We bridge the gap, providing clear guidance on Maldivian law and facilitating smooth cross-border transactions.',
    icon_name: 'Globe',
    cover_image_url: null,
    meta_title: null,
    meta_description: null,
    is_featured: true,
    is_visible: true,
    sort_order: 5,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    profile_id: null,
    full_name: 'Abdul Salaam Arif',
    slug: 'abdul-salaam-arif',
    role_title: 'Co-Founder & Managing Partner',
    email: 'abdulsalaam@aureuslaw.mv',
    phone: null,
    bio: 'Uz. Abdul Salaam Arif oversees the firm’s operational direction and legal practice development. His experience includes legal advisory, dispute resolution, and regulatory matters within the Maldivian legal landscape.',
    education: [
      'Master of Comparative Laws, International Islamic University Malaysia',
      'Bachelor of Laws (Hons), International Islamic University Malaysia',
      'Diploma in Information Technology',
    ],
    admissions: ['Supreme Court of the Maldives'],
    languages: ['Dhivehi', 'English'],
    years_experience: 15,
    photo_url: '/images/team/updated-2026/abdul-salaam-arif.jpg',
    is_partner: true,
    is_featured: true,
    is_visible: true,
    sort_order: 1,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '2',
    profile_id: null,
    full_name: 'Hawwa Shahira',
    slug: 'hawwa-shahira',
    role_title: 'Co-Founder & Partner',
    email: 'hawwashahira@aureuslaw.mv',
    phone: null,
    bio: 'Uza. Hawwa Shahira has experience working within the Maldivian legal and regulatory sector, including investigative, compliance, and advisory work within government institutions. Her practice focuses on legal research, dispute resolution support, regulatory matters, and client advisory services.',
    education: [
      'Bachelor of Shariah and Law (Hons), Maldives National University',
    ],
    admissions: ['Bar Council of the Maldives (2023)'],
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/corporate-corrected/hawwa-shahira.png',
    is_partner: true,
    is_featured: true,
    is_visible: true,
    sort_order: 2,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '3',
    profile_id: null,
    full_name: 'Samaahath Abdul Latheef',
    slug: 'samaahath-abdul-latheef',
    role_title: 'Legal Consultant',
    email: null,
    phone: null,
    bio: "Samaahath Abdul Latheef is a Legal Consultant at Aureus Law Firm, contributing a strong foundation in Shari'ah and Law together with practical experience in investigative work, court operations, and institutional legal processes. She earned her Master's Degree in Shari'ah and Law from Villa College and her Bachelor's Degree in Shari'ah and Law (Hons) from the Maldives National University.\n\nSamaahath previously served as an Investigator at the Ombudspersons Office for Transitional Justice, working on investigations involving statements, field inquiries, reporting, record management, institutional accountability, and referral processes. She also served as an Administrative Officer at the Family Court, gaining experience in case administration, hearing preparation, court records, and procedural coordination.\n\nShe has further worked with the National Centre for Information Technology, supporting e-government systems, user training, and administrative implementation. Across these roles, she has developed strengths in regulatory compliance, documentation, crisis management, collaboration, and stakeholder engagement.",
    education: [
      "Master's Degree in Shari'ah and Law, Villa College",
      "Bachelor's Degree in Shari'ah and Law (Hons), Maldives National University",
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/updated-2026/samaahath-abdul-latheef.jpg',
    is_partner: false,
    is_featured: true,
    is_visible: true,
    sort_order: 3,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '4',
    profile_id: null,
    full_name: 'Minha Abdul Muhsin',
    slug: 'minha-abdul-muhsin',
    role_title: 'Associate',
    email: null,
    phone: null,
    bio: "Minha Abdul Muhsin is an Associate at Aureus Law Firm, contributing a strong foundation in legal analysis, legislative review, court procedure, and human rights-informed legal practice. She earned her Master of Laws in International Human Rights Law from the University of Essex and her Bachelor of Shari'ah & Law from the Maldives National University.\n\nBefore joining Aureus, Minha served as Deputy Legal Officer at the Legal Affairs Office of the President's Office, working on legal opinions, legislative bill review, Presidential legal briefs, decrees, MOUs, and court-related matters. She also served as Legal Officer at the Juvenile Court, supporting judicial processes through legal commentary, registrar functions, judicial assistance, training coordination, and legal research.\n\nMinha has further strengthened her practice through specialized training in juvenile justice, legislative drafting, domestic violence awareness, counter-terrorism coordination, and international legal processes. She is also a published contributor in the field of disaster management law in SAARC countries.",
    education: [
      'Master of Laws (International Human Rights Law), University of Essex',
      "Bachelor of Shari'ah & Law, Maldives National University",
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/placeholders/minha-abdul-muhsin-silhouette.png',
    is_partner: false,
    is_featured: false,
    is_visible: false,
    sort_order: 4,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '5',
    profile_id: null,
    full_name: 'Mohamed Abdul Ghanee',
    slug: 'mohamed-abdul-ghanee',
    role_title: 'Associate',
    email: null,
    phone: null,
    bio: "Mohamed Abdul Ghanee is an Associate at Aureus Law Firm, contributing a strong background in legislative drafting, regulatory analysis, administrative law processes, and institutional legal advisory work. He earned his Bachelor of Laws from the Faculty of Shariah and Law, Maldives National University.\n\nBefore joining Aureus in January 2026, Mohamed served for over a decade at the Ministry of Health, first as Legal Officer and later as Senior Legal Officer, while also acting for extended periods as Head of the Ministry's Legal Section. In these roles, he was involved in the drafting and review of bills, regulations, amendments, agreements, and MOUs, and provided legal opinions on a wide range of institutional matters.\n\nHe has held leadership roles including Chairperson of the Sexual Harassment Investigation Committee and Chairperson of the Muraajaa Committee under the Right to Information Act. He also served in the country's COVID-19 emergency response structures within both the National Emergency Operation Centre and the Health Emergency Operation Centre legal clusters.",
    education: [
      'Bachelor of Laws, Faculty of Shariah and Law, Maldives National University',
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: 10,
    photo_url: '/images/team/updated-2026/mohamed-abdul-ghanee.jpg',
    is_partner: false,
    is_featured: true,
    is_visible: true,
    sort_order: 5,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '6',
    profile_id: null,
    full_name: 'Ahmed Raaiz',
    slug: 'ahmed-raaiz',
    role_title: 'Legal Consultant',
    email: null,
    phone: null,
    bio: "Ahmed Raaiz is a Legal Consultant at Aureus Law Firm with a strong academic background in Shari'ah and Law and extensive professional experience in legal practice, investigations, and institutional legal affairs. He holds a Bachelor's Degree in Shari'ah and Law (Hons) from The Maldives National University.\n\nRaaiz has served in several public institutions, gaining experience in investigations, case management, and legal analysis across criminal, civil, family law, and child rights matters. He served as an Investigation Officer at the Maldives Police Service, handling criminal investigations, evidence analysis, witness interviews, and prosecution support.\n\nHe also served at the Ombudsperson's Office for Transitional Justice investigating human rights complaints, at the Children's Ombudsperson's Office handling child rights matters, and as Legal Officer at the Local Government Authority providing legal analysis on local governance and decentralization matters.",
    education: [
      "Bachelor's Degree in Shari'ah and Law (Hons), Maldives National University",
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/updated-2026/ahmed-raaiz.jpg',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 6,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '7',
    profile_id: null,
    full_name: 'Ibrahim Rasheed',
    slug: 'ibrahim-rasheed',
    role_title: 'Tax Consultant',
    email: null,
    phone: null,
    bio: 'Ibrahim Rasheed is a Tax Consultant at Aureus Law Firm, contributing a rare blend of legal qualification, tax advisory experience, accounting expertise, and commercial insight. He holds a Master in Comparative Law (MCL) from the Islamic University of Maldives, a Master in Islamic Finance Practice from INCEIF, and a Bachelor of Sharia & Law – LLB (Hons) from the Islamic University of Maldives. He is also a Licensed Attorney of the Bar Council of the Maldives and has pursued additional professional studies through CIMA and ACCA.\n\nOver the course of his career, Ibrahim has held roles across legal, tax, accounting, and financial management functions, including service at the Tax Appeal Tribunal, Maldives Tourism Development Corporation Plc, Wataniya Telecom Maldives Pvt Ltd, and Universal Enterprises Pvt Ltd, as well as in private advisory practice.\n\nHis experience includes advising on the legality of tax matters, financial and reporting consequences, budgeting, asset oversight, internal audit, and reporting systems improvement. At Aureus Law Firm, he brings a disciplined and commercially practical perspective to tax consultancy.',
    education: [
      'Master in Comparative Law (MCL), Islamic University of Maldives',
      'Master in Islamic Finance Practice, INCEIF',
      'Bachelor of Sharia & Law – LLB (Hons), Islamic University of Maldives',
    ],
    admissions: ['Bar Council of the Maldives'],
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/placeholders/ibrahim-rasheed-silhouette.png',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 7,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '8',
    profile_id: null,
    full_name: 'Fathimath Fazuna',
    slug: 'fathimath-fazuna',
    role_title: 'Social Inclusion Consultant',
    email: null,
    phone: null,
    bio: 'Fathimath Fazuna is the Social Inclusion Consultant at Aureus Law Firm, where she contributes a strong background in human rights, mediation, social development, counselling, and inclusive community engagement. Her role focuses on advancing equality, diversity, and inclusion through internal policy support, culture-building, client service considerations, and community-facing initiatives.\n\nFazuna holds a Bachelor\'s Degree in Sociology and Anthropology from the International Islamic University of Malaysia, a Master\'s Degree in Development Studies from the University of Malaya, and a Diploma in Counselling Psychology from the American College of Higher Education, Sri Lanka.\n\nHer career spans over two decades including service as Senior Social Service Worker at the National Drug Agency, Human Rights Officer at the Human Rights Commission of the Maldives, Mediator at the Ombudspersons Office for Transitional Justice, and Gender, Nutrition and Social Inclusion Coordinator at the Maldives Agribusiness Program.',
    education: [
      "Bachelor's Degree in Sociology and Anthropology, International Islamic University of Malaysia",
      "Master's Degree in Development Studies, University of Malaya",
      'Diploma in Counselling Psychology, American College of Higher Education, Sri Lanka',
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: 20,
    photo_url: '/images/team/placeholders/fathimath-fazuna-silhouette.png',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 8,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '9',
    profile_id: null,
    full_name: 'Aminath Mohamed',
    slug: 'aminath-mohamed',
    role_title: 'Business Management & Marketing Consultant',
    email: null,
    phone: null,
    bio: "Aminath Mohamed is the Business Management and Marketing Consultant at Aureus Law Firm, contributing experience in business operations, institutional leadership, stakeholder engagement, strategic coordination, and marketing-related organizational support. Her academic background includes a Master's in Business from the Maldives Business School, a Bachelor's in Business / Management and Marketing, and a Diploma in Business from the Maldives National University.\n\nHer professional experience spans leadership and administrative roles at the National Centre for the Arts, the Ministry of Youth Empowerment, Information and Arts, the Ombudspersons Office for Transitional Justice, the Department of Judicial Administration – Judicial Academy, STRADA Maldives, and State Trading Organisation Plc.\n\nAcross these roles, she has developed practical strengths in management support, finance and procurement administration, case and workflow coordination, reporting, communication, and institutional organization.",
    education: [
      "Master's in Business, Maldives Business School",
      "Bachelor's in Business / Management and Marketing, Maldives National University",
      'Diploma in Business, Maldives National University',
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/updated-2026/aminath-mohamed.jpg',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 9,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '10',
    profile_id: null,
    full_name: 'Moosa Riffath',
    slug: 'moosa-riffath',
    role_title: 'IT Professional',
    email: null,
    phone: null,
    bio: 'Moosa Riffath is an IT professional supporting Aureus Law Firm, where he assists with technology-related operations, system support, user support, network maintenance, and general IT support. He brings practical experience from legal, education, public sector, and corporate environments, with exposure to servers, user systems, Microsoft administration, network devices, backup systems, access control, CCTV, and web-related technologies.\n\nHis academic background includes a Master of Science in Information Technology from the University of the West of England, Bristol. The programme covered areas including Big Data, Cloud Computing, Social Media and Web Science, Digital Design and Development, Information Security, IT Project Management, Strategy and Governance in IT, and a Master\'s Project. He also holds a Bachelor of Information Technology in System Administration and a Diploma in Information Technology from Cyryx College.\n\nRiffath\'s IT experience includes his current role as ICT Manager at Road Development Corporation, as well as previous technical roles at the Ombudsperson\'s Office for Transitional Justice, Criminal Court, and Majeediyya School. Across these roles, he has developed practical strengths in IT troubleshooting, network operations, server support, Microsoft user and mail management, hardware and software support, infrastructure administration, and user-focused technical assistance.\n\nAt Aureus Law Firm, Moosa brings a reliable, disciplined, and continuous-improvement-oriented approach to supporting the firm\'s IT needs. His contribution supports smooth digital operations, dependable technology assistance, secure and efficient IT systems, and the ongoing development of the firm\'s technology environment.',
    education: [
      'Bachelor of Information Technology (System Administration), Cyryx College',
      'Diploma in Information Technology, Cyryx College',
      'Master of Science in Information Technology, University of the West of England, Bristol',
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: null,
    photo_url: '/images/team/corporate-corrected/moosa-riffath.png',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 10,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '11',
    profile_id: null,
    full_name: 'Ismail Iyaadh Shaheed',
    slug: 'ismail-iyaadh-shaheed',
    role_title: 'Junior Legal Associate',
    email: null,
    phone: null,
    bio: "Ismail Iyaadh Shaheed is a Junior Legal Associate at Aureus Law Firm LLP with more than seven years of professional experience across government, legal, and institutional settings, with work involving legal support, public administration, governance, regulatory review, legislative processes, and institutional coordination.\n\nAt Aureus, Iyaadh assists with legal research, case preparation, document review, contract and agreement review, client correspondence, and matters before courts and tribunals. Before joining the firm, he worked in several areas of the Maldivian public sector, supporting legal affairs, parliamentary and legislative processes, national security work, public administration, and policy-related matters.\n\nHis experience includes supporting legislative and regulatory procedures, ratification processes, administrative decisions, right to information procedures, and legal research. His areas of interest include public law, employment law, commercial and contractual matters, governance, regulatory compliance, human rights, and national security. He holds a Bachelor of Shari'ah and Law (Honours) from Maldives National University.",
    education: [
      "Bachelor of Shari'ah and Law (Honours), Maldives National University",
    ],
    admissions: null,
    languages: ['Dhivehi', 'English'],
    years_experience: 7,
    photo_url: '/images/team/updated-2026/ismail-iyaadh-shaheed.jpg',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 11,
    linkedin_url: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
  },
  {
    id: '12',
    profile_id: null,
    full_name: 'Mariyam Nashath',
    slug: 'mariyam-nashath',
    role_title: 'Paralegal',
    email: null,
    phone: null,
    bio: `Mariyam Nashath is a Paralegal at Aureus Law Firm and a final year Shari'ah and Law (Honours) student at the Maldives National University. She has developed experience in legal research, drafting, corporate governance, regulatory compliance, and commercial legal practice through her academic and professional work.

Prior to joining Aureus Law Firm, Nashath worked as a Paralegal at Business Center Corporation, where she assisted with the drafting and review of commercial agreements, sponsorship agreements, payment agreements, and internal policies. She also supported legal compliance and corporate governance matters, including work relating to company registration and regulatory requirements.

Nashath previously interned at the Ombudsperson's Office for Transitional Justice, where she assisted with legal research, mediation processes, statement taking, report drafting, and the review of legal documentation relating to complaints and investigations. Through this role, she developed strong research, analytical, and case assessment skills while gaining exposure to human rights and transitional justice issues. Her academic and legislative research experience includes work relating to the Company Act, Intellectual Property Office Act, and Trademark legislation.

Nashath has actively participated in international moot court competitions, representing the Maldives National University at the Willem C. Vis (East) International Commercial Arbitration Moot and related pre-moot competitions. Her team was awarded Third Place for Best Memorandum for Respondent. She later coached the Maldives National University team for the Foreign Direct Investment International Arbitration Moot, further developing her advocacy, research, and mentoring skills.

At Aureus Law Firm, Nashath supports the firm's legal practice through legal research, drafting, document review, and client-related legal work. She is committed to delivering high-quality legal support with professionalism, diligence, and attention to detail while continuing to develop her expertise in corporate, commercial, and public law.`,
    education: [
      "Final year Shari'ah and Law (Honours), Maldives National University",
    ],
    admissions: null,
    languages: null,
    years_experience: null,
    photo_url: '/images/team/corporate-corrected/mariyam-nashath.jpg',
    is_partner: false,
    is_featured: false,
    is_visible: true,
    sort_order: 12,
    linkedin_url: null,
    created_at: '2026-09-16',
    updated_at: '2026-09-16',
  },
]

export const articleCategories: ArticleCategory[] = [
  { id: '1', name: 'Legal Updates', slug: 'legal-updates', description: 'Recent changes in Maldivian law and regulations', sort_order: 1, created_at: '2025-12-08' },
  { id: '2', name: 'Business Insights', slug: 'business-insights', description: 'Practical guidance for businesses operating in the Maldives', sort_order: 2, created_at: '2025-12-08' },
  { id: '3', name: 'Industry Focus', slug: 'industry-focus', description: 'Deep dives into sector-specific legal matters', sort_order: 3, created_at: '2025-12-08' },
  { id: '4', name: 'Client Guides', slug: 'client-guides', description: 'Helpful resources for common legal questions', sort_order: 4, created_at: '2025-12-08' },
  { id: '5', name: 'Firm News', slug: 'firm-news', description: 'Updates and announcements from Aureus Law', sort_order: 5, created_at: '2025-12-08' }
]

export const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding the Credibility, Tendency and Coincidence Rules under the Maldives Evidence Act',
    slug: 'credibility-tendency-coincidence-rules-maldives-evidence-act',
    excerpt: 'A practical overview of three important exclusionary rules governing the admissibility of evidence under the Maldives Evidence Act.',
    content: `<p>The Evidence Act (Law No. 11/2022) introduced a rules-based framework for determining whether evidence may be admitted in legal proceedings in the Maldives. Within that framework, credibility, tendency and coincidence rules operate as exclusionary rules: they generally prevent certain evidence from being used unless the Act's requirements or an applicable exception is satisfied.</p>
<p>These rules serve an important purpose. Relevant evidence can still be unfair, distracting or unduly prejudicial. By controlling how particular kinds of evidence are introduced, the rules help courts focus on reliable material and reduce the risk of decisions being influenced by improper reasoning.</p>
<h2>The Credibility Rule</h2>
<p lang="dv">(އިތުބާރުގެ އުސޫލު)</p>
<p>The credibility rule is concerned with whether a witness is reliable and should be believed. As a general principle, it excludes evidence that is relevant only to a witness's credibility rather than to a fact in issue in the case.</p>
<p>This restriction is intended to prevent proceedings from being diverted into collateral disputes about a witness's character or past conduct. Such disputes may consume time without materially assisting the court in deciding the central issues.</p>
<p>However, the rule is not absolute. Evidence that challenges or supports a witness's credibility may be admissible in circumstances recognized by the Act, including during cross-examination or where the evidence has substantial probative value in assessing whether the witness should be believed.</p>
<h2>The Tendency Rule</h2>
<p lang="dv">(އިޙްތިމާލުގެ އުސޫލު)</p>
<p>The tendency rule applies to evidence about a person's character, reputation or conduct when it is used to argue that the person has a tendency to act in a particular way or to possess a particular state of mind.</p>
<p>Its purpose is to guard against propensity reasoning, for example, the assumption that because a person acted improperly in the past, they are more likely to have committed the act currently alleged. That form of reasoning can be highly prejudicial if the earlier conduct has limited value in proving the present case.</p>
<p>Under the framework described in the Act, tendency evidence may be admitted where reasonable notice has been given to the other party, and the court is satisfied that the evidence has significant probative value.</p>
<h2>The Coincidence Rule</h2>
<p lang="dv">(ނާދިރުވުމުގެ އުސޫލު)</p>
<p>The coincidence rule concerns evidence of two or more events that are said to be related. It restricts the use of those events to prove that a person did a particular act or had a particular state of mind on the basis that the similarities are unlikely to be coincidental.</p>
<p>Like the tendency rule, the coincidence rule protects against unfair reliance on “similar fact” evidence. Multiple events should not be treated as proof merely because they share common features; the similarities must be sufficiently meaningful to give the evidence significant probative value.</p>
<p>Coincidence evidence may be admitted where reasonable notice has been provided, and the court determines that the evidence has significant probative value.</p>
<h2>How the Three Rules Differ</h2>
<table><thead><tr><th>Rule</th><th>Primary focus</th><th>Question the court considers</th></tr></thead><tbody><tr><td>Credibility</td><td>The reliability of a witness</td><td>Does the evidence properly assist in deciding whether the witness should be believed?</td></tr><tr><td>Tendency</td><td>A person's character, conduct or state of mind</td><td>Does the evidence have significant probative value in establishing a relevant tendency?</td></tr><tr><td>Coincidence</td><td>The relationship between multiple events</td><td>Are the similarities sufficiently significant to make coincidence improbable?</td></tr></tbody></table>
<h2>Why These Rules Matter in Practice</h2>
<p>The tendency and coincidence rules are closely related and are often associated with what older common-law authorities describe as similar fact evidence. The credibility rule is distinct: it focuses on the weight that may properly be given to a particular witness's testimony.</p>
<p>In each context, admissibility depends on the purpose for which the evidence is offered, the strength of its connection to the issues in dispute, compliance with procedural requirements and the court's assessment under the Act. Parties should therefore identify potential credibility, tendency or coincidence evidence early and consider notice requirements before trial.</p>
<h2>Conclusion</h2>
<p>The credibility, tendency and coincidence rules reflect a central objective of the Evidence Act: evidence must be assessed not only for relevance, but also for reliability, fairness and the risk of undue prejudice. Understanding the distinction between the rules is essential when preparing evidence, conducting cross-examinations and responding to material introduced by another party.</p>
<p><em>This article is provided for general information only and does not constitute legal advice. The application of the Evidence Act depends on the facts and circumstances of each matter. Specific legal advice should be obtained where required.</em></p>`,
    cover_image_url: null,
    category_id: '1',
    author_id: '2',
    status: 'published',
    is_featured: true,
    read_time_minutes: 6,
    tags: ['evidence law', 'litigation', 'admissibility'],
    attachment_url: null,
    meta_title: 'Credibility, Tendency and Coincidence Rules | Aureus Law',
    meta_description: 'A practical overview of the credibility, tendency and coincidence rules under the Maldives Evidence Act.',
    published_at: '2026-11-23',
    created_at: '2026-11-23',
    updated_at: '2026-11-23',
    category: articleCategories[0],
    author: teamMembers[1]
  },
  {
    id: '2',
    title: 'Treasure Biz International Pvt Ltd v State (Ministry of Fisheries and Agriculture)',
    slug: 'treasure-biz-international-v-state-conditional-acceptance',
    excerpt: 'A case analysis of conditional acceptance and contract formation in the Supreme Court decision [2019/SC-A/81].',
    content: `<p><strong>Case No. [2019/SC-A/81]</strong></p>
<p><strong>Topic: Conditional Acceptance and Formation of Contract</strong></p>
<h2>Facts</h2>
<p>Gurab Investment Maldives Pvt Ltd (Company Registration No. C-03/1994) was originally owned by Fuad Zahir of GA. Kolamaafushi, Mariyamage. On 24 June 2015, the Ministry of Fisheries and Agriculture issued a promotional letter stating that the island R. Thaavatha would be leased for 21 years to the successful bidder for purposes including fisheries research, fuel supply to vessels, ice production for fishermen, mineral water production, and related economic activities.</p>
<p>Subsequently, on 27 August 2015, the Ministry issued an Award Letter to Gurab Investment Maldives Pvt Ltd, confirming the decision to lease the island. The Award Letter expressly required that a security deposit of MVR 100,000 be paid to the Maldives Inland Revenue Authority (MIRA) within seven days of receipt. The letter further stated that failure to pay within this period would result in automatic termination of the award.</p>
<p>On the same date, ownership of Gurab Investment Maldives Pvt Ltd was transferred to Treasure Biz International Pvt Ltd. However, this change of ownership was not immediately notified to the Ministry.</p>
<p>When Treasure Biz International Pvt Ltd attempted to pay the security deposit to MIRA within the stipulated period, MIRA refused to accept the payment, stating that the Ministry had not instructed it to accept payment from Treasure Biz International and that the award remained in the name of Fuad Zahir / Gurab Investment Maldives. On 31 August 2015, Gurab Investment Maldives wrote to the Ministry seeking clarification on how the seven-day period should be calculated.</p>
<p>As the security deposit was not received within the required time, the Ministry terminated the Award Letter. Treasure Biz International then filed a case in the Civil Court, seeking an order compelling the Ministry to accept the deposit and to execute the lease agreement.</p>
<h2>Issues</h2>
<ul><li>Whether a legally binding agreement was formed between the Ministry and Gurab Investment Maldives / Treasure Biz International.</li><li>Whether the Award Letter constituted unconditional acceptance or merely conditional acceptance.</li><li>Whether the Ministry could lawfully terminate the award due to non-payment of the security deposit within seven days.</li></ul>
<h2>Civil Court Judgment</h2>
<p>The Civil Court held that a binding agreement had been formed between the parties and that the Ministry's termination of the Award Letter was contrary to law and procedure.</p>
<p>The Court ordered the Ministry to arrange payment of the security deposit within seven days from 29 March 2016 and to sign the written lease agreement within 15 days of payment with Gurab Investment Maldives / Treasure Biz International.</p>
<p>The Civil Court reasoned that Gurab Investment Maldives had accepted the Award Letter, that the failure to pay the deposit resulted from the Ministry's failure to notify MIRA, and that evidence from MIRA showed the claimant had acted in accordance with applicable rules and procedures.</p>
<h2>High Court Judgment</h2>
<p>On appeal by the Ministry, the High Court reversed the Civil Court decision in Case No. 2016/HC-A/295 and set aside Case No. 2320/Cv-C/2015.</p>
<p>The High Court held that no agreement had been formed. The Award Letter expressly stated that it would be void if the deposit was not paid within seven days, and the deposit was never accepted by MIRA on a legally valid basis. Although Article 4 of the Contract Act (Law No. 04/91) provides that agreements need not be in a specific form unless required by law, Article 14 of the Uninhabited Island Act (Law No. 20/98) requires a formal agreement signed by both parties for the lease of an uninhabited island. No such agreement was signed.</p>
<p>The Ministry also had not been informed in time of the transfer of ownership from Fuad Zahir to Treasure Biz International. The High Court therefore concluded that the conditions attached to the award were not fulfilled and no binding contract came into existence.</p>
<h2>Supreme Court Judgment</h2>
<p>Treasure Biz International appealed, arguing that the failure to accept payment was caused by the Ministry's negligence and that the High Court erred in finding that no agreement existed. The Supreme Court dismissed the appeal and affirmed the High Court's decision.</p>
<p>Under Article 8(b) of the Contract Act, an acceptance must be absolute and unconditional. Acceptance subject to conditions amounts to a counteroffer rather than valid acceptance. The Ministry's Award Letter was a conditional acceptance because it required payment of the security deposit within seven days. Since the condition was not fulfilled, acceptance was incomplete and no agreement came into force.</p>
<p>The Supreme Court also found that MIRA lawfully refused payment because the award was issued to Gurab Investment Maldives while it was owned by Fuad Zahir, and the Ministry was not informed within the stipulated time about the transfer of ownership to Treasure Biz International. The failure to form a contract was therefore attributable to the claimant's failure to fulfil the conditions and provide timely notice.</p>
<h2>Conclusion</h2>
<p>The Supreme Court held that no contract was formed because acceptance was conditional and the conditions were not fulfilled. Consequently, the Ministry lawfully terminated the Award Letter, and Treasure Biz International was not entitled to enforcement of the lease.</p>`,
    cover_image_url: null,
    category_id: '1',
    author_id: '12',
    status: 'published',
    is_featured: false,
    read_time_minutes: 8,
    tags: ['contract law', 'case analysis', 'conditional acceptance'],
    attachment_url: null,
    meta_title: 'Treasure Biz International v State | Aureus Law',
    meta_description: 'Case analysis of conditional acceptance and contract formation in Treasure Biz International Pvt Ltd v State.',
    published_at: '2026-11-23',
    created_at: '2026-11-23',
    updated_at: '2026-11-23',
    category: articleCategories[0],
    author: teamMembers[11]
  },
  {
    id: '3',
    title: 'ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ސާފްކުރުން',
    slug: 'juvenile-record-clearance-maldives',
    excerpt: 'An analysis of juvenile record clearance, confidentiality and expungement in the Maldives.',
    content: `<div lang="dv" dir="rtl">
<h2>ތަޢާރަފް</h2>
<p>ކުށުގެ ރެކޯޑް ސާފްކުރުމުގައި ބޮޑެތި މީހުންނާއި ކުޑަކުދިންގެ ތަފާތުތަކެއް ދުނިޔޭގެ ހުރިހާ ޢަދުލުގެ ނިޒާމުގައި ހިމެނިފައިވެއެވެ. މި ތަފާތުތައް ހުރިކަމުގައިވިޔަސް، ބޮޑެތި މީހުންގެ ކުށުގެ ރެކޯޑް ސާފުކޮށްދިނުމުގެ ސަބަބުން ދިމާވާ މައްސަލަތަކާ ގުޅޭ ގޮތުން އެކި ފޯރަމްތަކުގަޔާއި، އެކި ލެވެލްތަކުގައި ޤާނޫނީ ޢިލްމުގެ ބޭފުޅުންނާއި، ސިޔާސީ ބޭފުޅުން، އަދި ޤާނޫނުހަދާ މަޖިލިސްގެ މެމްބަރުންނާއި، ޢަދުލުގެ ނިޒާމުގައި މަސައްކަތްކުރައްވާ ފަރާތްތަކުން ބަހުސްކުރައްވާފައިވެއެވެ. މި ބަހުސްތަކުގެ ތެރެއިންވެސް ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ސާފުކޮށްދިނުމުގެ ސަބަބުން ނުކުމެދާނެ، ނޭދެވޭ ނަތީޖާއާމެދު އަޅާލެވިފައިވާ މިންވަރު ކުޑައެވެ. ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑަކީ ވަކި ހިފެހެއްޓުންތަކެއް ބެހެއްޓުމާއެކީ ވަކި ޚާއްސަ ބަޔަކަށް ފެންނަންޖެހޭ ރެކޯޑްތަކަށްވުން ލާޒިމްއެވެ. އެހެން ނަމަވެސް ދައުލަތުން މި ސިއްރު ހިފެހެއްޓުމުގައި ގެންގުޅޭ އުސޫލުތަކަކީ ޒަމާނާ އެންމެ އެކަށޭނެ އުސޫލުތަކަށްނުވެ ހިނގައިދާނެއެވެ. ކުޑަކުދިންގެ ރެކޯޑްތައް ޢާންމު މުވައްޒަފުންނަށް ފެނުމަކީ މިހާރުގެ ނިޒާމުގައި ވަރަށް ޢާއްމު ކަމެއްކަން ފާހަގަކުރެވެއެވެ.</p>
<p>ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ހާމަނުކުރުމުގެ އެންމެ ބޮޑު އެއް ބޭނުމަކީ ކުއްޖާ މުޖުތަމަޢުއަށް އަނބުރާ އައުމަށްޓަކައި އެކުއްޖާއަށް ލިބޭ ރިހެބިލިޓޭޝަން ފުރުޞަތުގައި ކުއްޖާގެ އުޅުން އިސްލާޙްކޮށް އައިސްފިނަމަ، އެކުއްޖާއަކީ މުޖުތަމަޢުގެ އެހެންވެސް ކުށްނުކުރާ ފަރުދެއް ގޮތުގައި ބަލައިގަތުމެވެ. އަދި އޭނާ އަނބުރާ މުޖުތަމަޢުއަށް އައުމަށްކުރި މަސައްކަތްތަކަށް ތަރުހީބުދީ، އޭނާގެ ހަޔާތުގައި ބާކީހުރި ދުވަސްތަކުގައި ކުށްނުކުރާ މީހެއްގެ އިޙްޞާޞްކޮށްދީ މުޖުތަމަޢުން ފުރިހަމައަށް ބަލައިގަތްކަން ފާހަގަކުރުމެވެ. ކުޑަކުދިންގެ ޢަދުލުގެ ނިޒާމުގެ ބޭނުމަކީވެސް އަދި އެންމެ މުހިންމު މަޤްޞަދަކީވެސް ކުއްޖާ އަނބުރާ މުޖުތަމަޢުއަށް އައިސް މުޖުތަމަޢުގައި ބިނާކުރަނިވި ދައުރެއް އަދާކުރުމަށް މަގުފަހިކޮށްދިނުމެވެ. ކުޑަކުދިންނަށް ކުރެވޭ ކުށްތަކަށް ޢަދަބުދިނުމަކީ ކުޑަކުދިން ޢަދުލުގެ ނިޒާމު ތަރުހީބުދޭ ނުވަތަ އެއްބާރުލުންދޭ ނަޒަރިއްޔާއެއްނޫނެވެ.</p>
<h2>ކޯޓުން ނިންމާ މައްސަލަތަކުގެ ކުށުގެ ރެކޯޑް ސާފްކުރުން</h2>
<p>ޖިނާއީ އިޖުރާއަތު ޤާނޫނުގެ 159 ވަނަ މާއްދާގައި ބަޔާންކުރާ ގޮތުން މަރުކަޒީކޮށް ކުށުގެ ރެކޯޑް ބެލެހެއްޓުމުގެ ޒިންމާއަކީ ޑިޕާޓްމަންޓް އޮފް ޖުޑީޝަލް އެޑްމިނިސްޓްރޭޝަންގެ ޒިންމާއެކެވެ. އެމާއްދާގައި ބަޔާންކުރާ ގޮތުގައި ކޯޓުގައި ހިނގަމުންދާ މައްސަލައެއް ޙުކުމްކުރުމަށްފަހު 159 (ނ) ގައި ފާހަގަކޮށްފައިވާ މަޢުލޫމާތުތަކާއެކީ ކޯޓުން ޑިޕާޓްމަންޓް އޮފް ޖުޑީޝަލް އެޑްމިނިސްޓްރޭޝަންއަށް ލިޔެކިޔުންތައް ފޮނުވަން ޖެހެއެވެ.</p>
<p>ޖިނާއީ އިޖުރާއަތުގެ 160 ވަނަ މާއްދާގެ (ނ) ގައި ބަޔާންކޮށްފައިވަނީ ކުށުގެ ރެކޯޑް ސާފުކުރެވޭ ފަރާތަކީ އުމުރުން 18(އަށާރ) އަހަރުނުވާ ކުއްޖަކުނަމަ ނުވަތަ އަމިއްލަ ދިރިއުޅުމުގައި ޒިންމާ ނެގުމުގެ އިޙްތިޔާރު ލިބިފައިނުވާ މީހަކުނަމަ، ރެކޯޑް ސާފްކުރުމަށް އެދޭނީ، އެކުއްޖެއްގެ ނުވަތަ އެމީހެއްގެ މަންމަ ނުވަތަ ބައްޕަ ނުވަތަ ޒިންމާދާރު ބަލަދުވެރިއަކު ނުވަތަ އެނޫންވެސް އެފަދަ ކުއްޖަކު ނުވަތަ މީހަކު ބެލެހެއްޓުމާއި ޙަވާލުވެހުރި ފަރާތަކުންކަމަށެވެ. ނަމަވެސް އުފެދޭ ސުވާލަކީ ކުޑަކުއްޖެއްގެ ކުށުގެ ރެކޯޑް ސާފުކުރުމަށްޓަކައި ސަރުކާރު މުއައްސަސާއަކަށް، ނުވަތަ ޕްރައިވެޓް މުއައްސަސާއަކަށް އެދުމުގެ ފުރުޞަތު އޮންނާނެތޯއެވެ. އަދި އެކަމަށް ފުރުޞަތު އެބައޮތްތޯއެވެ. ނުވަތަ އެފުރުޞަތު އޮތްނަމަ އެ ފުރުޞަތު އޮތީ ކީއްވެގެންތޯއެވެ.</p>
<p>ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑަކީ 3 ވަނަ ފަރާތަކަށް ހާމަކުރާ މަޢުލޫމާތަކަށްނުވާ ހިނދު އެފަދަ މަޢުލޫމާތެއް ހޯދުމަށް އެހެން ފަރާތްތަކަށް ފުރުޞަތު ދިނުން، ނުވަތަ އެފަދަ ފުރުޞަތެއް ނިޒާމުގެ ތެރެއިން ޤާއިމްވެފައި ހުރުން އެއީ ބަލައިގަނެވޭނެ ފަދަކަމެއް ނޫނެވެ. ދިވެހިރާއްޖެ ބައިވެރިވެފައިވާ މުއާހަދާތަކާއި، އަދި ދުނިޔޭގެ ބެސްޓް ޕްރެކްޓިސްގައިވެސް ކުށްކުރާ ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ސާފުކުރުމުގެ ފުރުޞަތު ލިބިފައި އޮތީ ވަކި ދައުލަތުގެ މުއައްސަސާތަކަކަށެވެ. އަދި އެފުރުޞަތަކީ ވިހާވެސް ހަނިކޮށް ލިބިފައި އޮންނަ ފުރުޞަތެކެވެ.</p>
<p>ޤާނޫނު ނަންބަރު:2019/18 (ކުޑަކުދިންގެ ޢަދުލުގެ ޤާނޫނު) ގެ 112 ވަނަ މާއްދާގައި ބަޔާންކޮށްފައިވާ ގޮތުން ކުއްޖާގެ ރެކޯޑްތައް ބަހައްޓަންވާނީ ސިއްރު ގޮތުގައި އަދި ތިންވަނަ ފަރާތަކަށް ނުލިބޭ ގޮތަށް، އަދި އެފަދަ ރެކޯޑުތަކަށް ވާޞިލުވެވޭނީ ކޯޓު އަމުރަކުން ހުއްދަ ލިބިގެން، ކުއްޖާގެ މައްސަލަބަލާ ފަރާތަށާއި ކަނޑައެޅިގެން އެކަމަށް ހުއްދަކުރެވޭ އެހެން ފަރާތްތަކަށްކަމަށެވެ.</p>
<p>އެހެންކަމުން ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑްތަކަށް ވާޞިލްވުމުގެ މަގު ކުޑަކުދިންގެ ޢަދުލުގެ ޤާނޫނުން ހަނިކޮށްފައިވާކަން ފާހަގަކުރެވެއެވެ.</p>
<h2>ކުށްކުރާ ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ސާފްކުރުން ހުއްޓުވަންވީ ސަބަބުތައް</h2>
<p>ޖިނާއީ ޢަދުލުގެ ޢާންމު ނިޒާމުން ބޭރުން ކުށްކުރާ ކުޑަކުދިންގެ މައްސަލަތައް ބެލުމަށް ޚާއްސަ ނިޒާމެއް އޮންނަންވާނެކަމަށް ޤާނޫނު ނަންބަރު 2014/9 (ދިވެހިރާއްޖޭގެ ޤާނޫނުލްޢުޤޫބާތު) ގެ 53 ވަނަ މާއްދާގެ (ރ) ގައި ބަޔާންކޮށްފައިވެއެވެ. ކުޑަކުދިންގެ މައްސަލަ ބެލުމުގެ އިޙްތިޞާޞް ޖުވެނައިލް ކޯޓަށް ލިބިގެންވާއިރު ކޯޓުގައި ހިނގާ މައްސަލަތައް ދާނެގޮތުގެ މިސާލަކަށް ބައްލަވާލައްވަމާތޯއެވެ. މިސާލު: މަރިޔަމް، ފިހާރައަކުން އެއްޗެއް ވަގަށް ނެގުމުގެ ސަބަބުން އޭނާގެ މައްޗަށް ވައްކަމުގެ ދަޢުވާއެއްކުރެވުނު. އެ މައްސަލައަކީ ކުޑަ ވައްކަމުގެ މައްސަލައަކަށްވާތީވެ، އަދި އޭނާއަށް ކުށެއްކުރެވުނު ފުރަތަމަ ފަހަރުކަމަށްވާތީ، ކޯޓުން އޭނާއަށް 6 މަސްދުވަހުގެ ޕްރޮބޭޝަންއަކަށް ދިއުމުގެ ފުރުޞަތު ދިން. ޕްރޮބޭޝަންގެ ދަށުން، މުޖުތަމަޢުއަށް ޚިދުމަތްކުރަން 20 ގަޑިއިރު ކަނޑައެޅުމާއި، ވަގަށް އެއްޗެހި ނެގި ފިހާރައަށް 6 މަސްދުވަސްވަންދެން ނުވަނުމަށްވެސް ޝަރުޠުކުރެވިފައިވޭ. މަރިޔަމްގެ މައްޗަށް ކަނޑައެޅި ޕްރޮބޭޝަންގެ ހުރިހާކަމެއް އޭނާ ފުރިހަމަކޮށްފައިވާތީ، އޭނާގެ މައްޗަށް ހުށަހެޅިފައިވާ މައްސަލައިގައި އެހެން އެއްވެސް އަދަބެއް ދިނުމުގެ ބަދަލުގައ އޭނާ މުޖުތަމަޢުއަށް އަނބުރާ ރުޖޫޢަވެވޭނެ ގޮތަށް ނިންމާ ޖުވެނައިލް ކޯޓުން މައްސަލަ ފައިލްކުރި.</p>
<p>ބޮޑެތި މީހުންގެ ކުށުގެ ރެކޯޑް ދާއިމީ އެއްޗެއް ގޮތުގައި ދެމިއޮތަސް، ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑަކީ ދާއިމީ އެއްޗެއްނޫންކަން މަތީގައި ބަޔާންވެފައިވާ މިސާލުން އެނގިގެންދެއެވެ. ޖުވެނައިލް ކޯޓަކީ ހަޤީޤަތުގައި ކްރިމިނަލް ކޯޓެއް ނޫންމެއެވެ. ޙަޤީޤަތުގައި ޖުވެނައިލް ކޯޓަކީ ކުށްކުރާ ކުޑަކުދިން ޤާނޫނީ އިމުގެ ތެރެއަށް ވައްދާ، ޑިސިޕްލިންކުރުމަށްޓަކައި ބެލެނިވެރިއެއްގެ ރޯލުއަދާކުރާ ކޯޓެކެވެ. ޖުވެނައިލް ކޯޓުގެ މަސައްކަތަކީ ކުށްކުރާ ކުޑަކުދިންނަށް އަދަބު ދިނުމެއްނޫނެވެ. އިސްލާޙްކުރުމެވެ. އަދަބުތައް އަންގައިދިނުމެވެ.</p>
<p>ކުށުގެ ރެކޯޑް ފޮހެލުން ނުވަތަ (EXPUNGMENT) އަކީ މީހެއް ހައްޔަރުކުރިކަމުގެ ރެކޯޑް ނުވަތަ ދަޢުވާކުރެވިފައިވާ މައްސަލައެއްގެ ރެކޯޑެއް ކޯޓު އަމުރެއްގެ ދަށުން ފޮހެލުން ނުވަތަ ބަންދުކޮށްލުމެވެ. ބައެއްފަހަރު، މައްސަލަ ފައިލްކޮށްލުމަށްވެސް މިހެންކިޔައި އުޅެއެވެ. ދުނިޔޭގެ އެކި ޤައުމުތަކުގައި ކުށުގެ ރެކޯޑް "އެކްސްޕަންޖް" ކުރެވޭނެ ޙާލަތްތަކާ، ޝަރުޠުތައް ތަފާތެވެ. އެހެން ނަމަވެސް ކުށްކުރާ ކުޑަކުދިންގެ މައްސަލަތަކަކީ ހުރިހާ ޙާލަތެއްގައިވެސް "އެކްސްޕަންޖް" ކުރެވިފައިވާ ރެކޯޑްތަކެކެވެ. ކުށުގެ ރެކޯޑް މި ދެންނެވި ގޮތަށް ޤާނޫނުގެ ކުރިމަތީގައި ފޮހެލެވިއްޖެނަމަ، ކުށުގެ ރެކޯޑް ހޯދުމަށް ހުށަހަޅާއިރު އެބައިތަކެއް ހިމެނިފައިނުވާނެއެވެ.</p>
<p>ދިވެހިރާއްޖޭގެ އެކި މުއައްސަސާތަކުން ކުށުގެ ރެކޯޑް ސާފުކޮށްދިނުން އެދުމަށް ހުށަހަޅާ ފޯމުގައި ޖުވެނައިލް ކޯޓުންވެސް ކުށުގެ ރެކޯޑް ސާފުކުރަން އޮތުމާއި، އަދި ބައެއްފަހަރު، ވަޒީފާއަށް ކުށުގެ ރެކޯޑް ސާފްކުރާއިރުގައްޔާއި، ސްކޮލާޝިޕްތަކަށް ކުރިމަތިލާއިރު ރެކޯޑް ސާފްކުރާ ފޯމުގައި ޖުވެނައިލް ކޯޓު އޮތުމުގެ ސަބަބުން ގިނަ ގުނަ ގޮންޖެހުންތަކެއް ކުދިންނަށް ކުރިމަތިވާކަން ފާހަގަކުރެވެއެވެ. ކުއްޖާ ކުށުގެ މާޙައުލާ ދުރުވެ މުޖުތަމަޢުގައި ބޭނުންތެރި ފަރުދަކަށްވާން މަސައްކަތްކުރާ ކޮންމެ ފަހަރަކު އޭނާގެ މާޒީގައި ކުރެވިފައިވާ އެންމެ ކުށެއްގެ ސަބަބުން އޭނައަށް ލިބެން ހުރި އެތަށް ފުރުޞަތުތަކުން މަޙްރޫމްވެގެންދެއެވެ. ޖުވެނައިލް ކޯޓުން ކުށުގެ ރެކޯޑް ފުރިހަމަނުކޮށްދޭއިރު، ބައެއް މުއައްސަސާތަކުން ކުދިންގެ ކުށުގެ ރެކޯޑް ސާފުކޮށްދޭކަން މަދުމަދުން ނަމަވެސް ފާހަގަކުރެވިފައިވެއެވެ.</p>
<h2>ކުށުގެ ރެކޯޑް ސާފްކުރުން ހުއްޓުވާނެ ގޮތްތައް</h2>
<p>ދުނިޔޭގެ ކުރިއަރާފައިވާ ޤައުމުތަކުގައި ކުށްކުރާ ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ރައްކާތެރިކުރުމަށްޓަކައި މައިގަނޑު ގޮތެއްގައި 3 ނިޒާމެއް ތަޢާރަފްކޮށް ކުރިއަރުވާފައިވެއެވެ. ފުރަތަމަ ގޮތަކީ (CONFIDENTIALITY STATUTES) ސިއްރު ހިފެހެއްޓުމުގެ ނިޒާމެވެ. މި ޤާނޫނުގެ ދަށުން ކުޑަކުދިންގެ ކުށްކުރުމުގެ މަޢުލޫމާތުތައް، ހޯދައި ބެލޭ މުއައްސަސާތަކާ ފަރާތްތަކުގެ ޢަދަދު މަދުކުރެވެއެވެ. ދެވަނަ ގޮތަކީ (EXTINGUISHING STATUTES) ކުށްކުރާ ކުޑަކުދިންގެ މަޢުލޫމާތު ޤާނޫނުގެ ކުރިމަތީގައި ފޮހެލުން ނުވަތަ "އެކްސްޕަންޖް" ކުރުމެވެ. މައިގަނޑު ގޮތެއްގައި މިކަންތައް ފުރިހަމަކުރާނީ މައްސަލަ ޖުވެނައިލް ކޯޓުން ނިންމާއިރުއެވެ. މުސްތަޤްބަލުގައި އެ މައްސަލައިގެ މަޢުލޫމާތު އެހެން ފަރާތަކަށް ނުފެންނަ ގޮތަށް ހެދުމެވެ. ތިންވަނަ ގޮތަކީ (NON-DISCLOSURE STATUTES) މަޢުލޫމާތު ހާމަނުކުރުމެވެ. މީގެ މިސާލަކީ ކުއްޖަކަށް އޭނާއަކީ މާޒިގައި ކުށުގެ ރެކޯޑެއް ނެތް މީހެއްކަމުގައި ބުނުމުގެ ފުރުޞަތު ދިނުމެވެ. މާނައަކީ ވަޒިފާއަކަށް ކުރިމަތިލާއިރު، އޭނާއަށް އެފަދަ ސުވާލެއް މީހަކު ކުރިމަތިކޮށްފިނަމަ ކުށެއްނުކުރާކަމަށް ބުނުމުގެ ފުރުޞަތު ލިބުމެވެ. މި ތިން ގޮތަކީ އެއްހަމައެއްގައި އެއްވަރަކަށް މަސައްކަތްކުރެވޭނެ ގޮތަށް ރޭވިފައި ހުންނަންޖެހޭނެ ފަދަ ނިޒާމަކަށްވާންވާނެއެވެ. އެއީ ކޮންމެ ނިޒާމެއްގައިވެސް "ލިމިޓޭޝަންތަކެއް" ހުރުމުގެ ސަބަބުން އެކަތި އަނެކައްޗާ ގުޅުވާލުމުން ހުރިހާ ނިޒާމެއް ގުޅިގެންދާނެތީއެވެ. އަދި "ލިމިޓޭޝަންތައް" މަދުކުރެވިގެންދާނެތީއެވެ.</p>
<p>ދިވެހިރާއްޖޭގައި ޕްރެކްޓިސްކުރެވެމުންދާ ގޮތްތަކަށް ބަލާއިރު، ސިއްރު ހިފެހެއްޓުމުގެ ނިޒާމު ހަރުދަނާކަން ފާހަގަކުރެވެއެވެ. ސަބަބަކީ ކުށްކުރާ ކުދިންގެ މަޢުލޫމާތުތަކުގެ ލިޔެކިޔުންތައް ހޯދައި، ބެލޭ މުއައްސަސާތަކުގެ ޢަދަދު ނިޞްބަތުން މަދުވުމެވެ. އަދި ކުޑަކުދިންގެ މަޢުލޫމާތުތަކަކީ ބައެއް ޤައުމުތަކުގައިވާ ގޮތަށް ޕަބްލިކް ރެކޯޑްސް ގޮތުގައި ޝާޢިއުކުރެވިފައިވާ ތަކެއްޗަށް ނުވާތީވެސްމެއެވެ. ނަމަވެސް ކުށްކުރާ ކުޑަކުދިންގެ މަޢުލޫމާތު ފޮހެލުމުގެ ނިޒާމުގައި އަދިވެސް ގޮންޖެހުންތައް ހުރިކަން ފާހަގަކުރެވެއެވެ. މީގެ ސަބަބަކީ ފަހަރުގައި މުއައްސަސާތަކުގެ ޕޮލިސީގައި ހުރި ތަފާތުތަކެއްގެ ސަބަބުން ދިމާވާކަމެއް ކަމުގައިވެސް ވެދާނެއެވެ. މަތީގައި ދެންނެވިފައިވާ ތިން ނިޒާމުގެ ތެރެއިން ދައުލަތުން އެންމެ ބޮޑު ހިއްސާއެއްވާންޖެހޭ އަދި އެކަމަކަށް އެންމެ އަހައްމިއްޔަތުކަމެއްދޭންޖެހޭ ދެ ނިޒާމަކީ ސިއްރު ހިފެހެއްޓުމުގެ ނިޒާމާ، ކުށުގެ ރެކޯޑް ފޮހެލުމުގެ ނިޒާމެވެ. ތިންވަނަ ނިޒާމަކީ ކޮންމެ މީހެއްގެވެސް ޙައްޤާ ގުޅިފައިވާކަމަކަށްވާތީ، އެ ޙައްޤު ދޫކޮށްލުން ނުވަތަ އެ ޙައްޤުގެ ބޭނުންކުރުމުގެ ޒިންމާ އުފުލާނީ އެމީހެކެވެ.</p>
<p>ކުށްކުރާ ކުޑަކުދިންގެ ކުށުގެ ރެކޯޑް ސާފްކުރުމާ ގުޅޭ ކަންތައްތަކުގައި "އެކްސްޕަންޖް" ކުރުމުގެ އިޙްތިޔާރު ލިބިގެންވާއިރު، ކުށުގެ ރެކޯޑް ސާފްކުރާ ފޯމްތަކުގެ "ޓެމްޕްލޭޓްތައް" އާ ކުރުން މުހިންމުކަން ފާހަގަކުރެވެއެވެ. ދައުލަތުގެ މުއައްސަސާއެއްގެ ކުށުގެ ރެކޯޑް ސާފްކުރާ ފޯމެއްގައިނަމަ ކުޑަކުދިންގެ މައްސަލަތަކުގެ ކުށުގެ ރެކޯޑް ސާފުނުކޮށްދެވޭނެކަމަށް ބަޔާންކުރެވިފައި އޮތުމާއި، ޖުވެނައިލް ކޯޓުން ނުވަތަ މެޖިސްޓްރޭޓް ކޯޓަކުންވެސް ކުޑަކުއްޖެއްގެ ކުށުގެ ރެކޯޑް ސާފުކޮށްނުދެވޭނެ ގޮތް ހެދުން ލާޒިމްކުރުން މުހިންމެވެ. އަދި އެއްވެސް ޙާލަތެއްގައި ކުޑަކުއްޖެއްގެ މާޒީގައި ކުރެވިފައިވާ ކުށަކާ ގުޅިގެން އޭނާއަށް ސުވާލުނުކުރުންފަދަ ކަންތައްތައްވެސް ހިމެނެއެވެ.</p>
</div>`,
    cover_image_url: null,
    category_id: '1',
    author_id: '4',
    status: 'published',
    is_featured: false,
    read_time_minutes: 12,
    tags: ['juvenile justice', 'record clearance', 'expungement'],
    attachment_url: null,
    meta_title: 'Juvenile Record Clearance in the Maldives | Aureus Law',
    meta_description: 'An analysis of juvenile record clearance, confidentiality and expungement in the Maldives.',
    published_at: '2026-11-24',
    created_at: '2026-11-24',
    updated_at: '2026-11-24',
    category: articleCategories[0],
    author: teamMembers[3]
  },
  {
    id: '4',
    title: 'Understanding Employment Law in the Maldives',
    slug: 'understanding-employment-law-maldives',
    excerpt: 'A practical guide to employment rights, obligations, and compliance for businesses and workers in the Maldives.',
    content: '<p>Maldivian employment law governs the rights and obligations of employers and employees operating in the country. Understanding these rules is essential for businesses to remain compliant and for workers to know their rights.</p><h2>Key Employer Obligations</h2><p>Employers must provide written employment contracts, ensure safe working conditions, pay wages on time, and comply with leave entitlements as prescribed under Maldivian labor regulations.</p><h2>Employee Rights</h2><p>Employees are entitled to annual leave, sick leave, and other protections. Unfair dismissal is prohibited and may lead to claims before the Employment Tribunal.</p><h2>How We Can Help</h2><p>Our employment practice provides advice on contracts, disciplinary procedures, regulatory compliance, and representation in disputes. Contact Aureus Law Firm LLP for tailored employment law support.</p>',
    cover_image_url: null,
    category_id: '1',
    author_id: '2',
    status: 'published',
    is_featured: false,
    read_time_minutes: 5,
    tags: ['employment law', 'HR', 'compliance'],
    attachment_url: null,
    meta_title: null,
    meta_description: null,
    published_at: '2025-12-08',
    created_at: '2025-12-08',
    updated_at: '2025-12-08',
    category: articleCategories[0],
    author: teamMembers[1]
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'Mihammed Aslam Haasan',
    client_title: 'Managing Director',
    company_name: 'PROPERTYER Pvt Ltd',
    content: 'Aureus Law has been our trusted legal partner. Their understanding of the Maldivian legal landscape and proactive approach to legal matters has been invaluable to our business.',
    rating: 5,
    practice_area_id: '1',
    is_featured: true,
    is_visible: true,
    sort_order: 1,
    created_at: '2025-12-08'
  },
  {
    id: '2',
    client_name: 'Ihusaan',
    client_title: 'Managing Director',
    company_name: 'Beach Marine Pvt Ltd',
    content: 'When we decided to invest in the Maldives, Aureus Law provided clear, practical guidance that made the process smooth. Their team understood our commercial objectives and delivered results.',
    rating: 5,
    practice_area_id: '1',
    is_featured: true,
    is_visible: true,
    sort_order: 2,
    created_at: '2025-12-08'
  }
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I schedule a consultation with Aureus Law?',
    answer: 'You can schedule a consultation by filling out our online booking form, calling our office at +960 767 3636, or sending an email to hello@aureuslaw.mv. We typically respond within one business day and will arrange a time that suits your schedule.',
    category: 'General',
    practice_area_id: null,
    sort_order: 1,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    question: 'What are your fees and billing practices?',
    answer: 'Our fees vary depending on the nature and complexity of the matter. We offer fixed-fee arrangements for routine matters and hourly billing for more complex work. During your initial consultation, we will provide a clear estimate of costs and explain our billing practices.',
    category: 'General',
    practice_area_id: null,
    sort_order: 2,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    question: 'Do you offer services in languages other than English and Dhivehi?',
    answer: 'Yes, our team members are fluent in both Dhivehi and English. Please let us know your language preference when scheduling your consultation.',
    category: 'General',
    practice_area_id: null,
    sort_order: 3,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '4',
    question: 'How do I incorporate a company in the Maldives?',
    answer: 'Company incorporation involves registering with the Ministry of Economic Development, obtaining necessary licenses, and preparing constitutional documents. Our team can guide you through the entire process, from choosing the right business structure to completing registration.',
    category: 'Business',
    practice_area_id: '1',
    sort_order: 4,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '5',
    question: 'What should I do if I receive a legal notice?',
    answer: 'Do not ignore any legal notice. Contact a lawyer promptly to understand your rights and obligations. Time limits often apply to legal responses, so early advice is essential.',
    category: 'Disputes',
    practice_area_id: '2',
    sort_order: 5,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '6',
    question: 'How long does a typical court case take in the Maldives?',
    answer: 'Case duration varies significantly depending on the court, complexity, and nature of the dispute. Simple matters may resolve in months, while complex litigation can take several years. We can provide more specific guidance based on your circumstances.',
    category: 'Disputes',
    practice_area_id: '2',
    sort_order: 6,
    is_visible: true,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  }
]

// Portal Demo Data
export const demoClients: Client[] = [
  {
    id: '1',
    name: 'Island Resorts Group',
    client_type: 'business',
    email: 'legal@islandresorts.mv',
    phone: '+960 400 1000',
    address: 'Tower 1, Hulhumalé Business Park',
    company_name: 'Island Resorts Group Pvt Ltd',
    contact_person: 'Ibrahim Moosa',
    notes: 'Major hospitality client.',
    is_active: true,
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    name: 'Mohamed Rashid',
    client_type: 'individual',
    email: 'mrashid@gmail.com',
    phone: '+960 777 1234',
    address: 'H. Sunrise, Malé',
    company_name: null,
    contact_person: null,
    notes: 'Family law matter - divorce proceedings.',
    is_active: true,
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    name: 'Coral Construction Pvt Ltd',
    client_type: 'business',
    email: 'info@coralconstruction.mv',
    phone: '+960 400 2000',
    address: 'Industrial Zone, Thilafushi',
    company_name: 'Coral Construction Pvt Ltd',
    contact_person: 'Ahmed Saleem',
    notes: 'Construction and development client.',
    is_active: true,
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  }
]

export const demoCases: Case[] = [
  {
    id: '1',
    case_number: 'AL-2025-00001',
    title: 'Island Resorts Group - Employment Dispute',
    description: 'Wrongful termination claim by former employee. Client is defendant.',
    client_id: '1',
    practice_area_id: '5',
    status: 'active',
    priority: 'high',
    court_name: 'Employment Tribunal',
    court_case_number: 'ET-2025-0123',
    next_hearing_date: '2025-03-15T10:00:00Z',
    deadline: '2025-03-10T17:00:00Z',
    notes: 'Key witness interview scheduled for next week.',
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    case_number: 'AL-2025-00002',
    title: 'Rashid Divorce Proceedings',
    description: 'Contested divorce with child custody dispute.',
    client_id: '2',
    practice_area_id: '4',
    status: 'active',
    priority: 'medium',
    court_name: 'Family Court',
    court_case_number: 'FC-2025-0456',
    next_hearing_date: '2025-03-20T09:00:00Z',
    deadline: null,
    notes: 'Mediation attempt scheduled before hearing.',
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    case_number: 'AL-2025-00003',
    title: 'Coral Construction - Contract Review',
    description: 'Review and negotiation of major development contract for new resort project.',
    client_id: '3',
    practice_area_id: '1',
    status: 'active',
    priority: 'high',
    court_name: null,
    court_case_number: null,
    next_hearing_date: null,
    deadline: '2025-02-28T17:00:00Z',
    notes: 'Client meeting next week to discuss revised terms.',
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
]

export const demoTasks: Task[] = [
  {
    id: '1',
    title: 'Prepare witness statements',
    description: 'Draft witness statements for employment tribunal hearing.',
    case_id: '1',
    assigned_to: null,
    assigned_by: null,
    priority: 'high',
    status: 'in_progress',
    due_date: '2025-03-08T17:00:00Z',
    completed_at: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    title: 'Review contract draft',
    description: 'Review latest draft of development contract and prepare markup.',
    case_id: '3',
    assigned_to: null,
    assigned_by: null,
    priority: 'high',
    status: 'pending',
    due_date: '2025-02-25T17:00:00Z',
    completed_at: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '3',
    title: 'File mediation request',
    description: 'Submit mediation request to Family Court for Rashid matter.',
    case_id: '2',
    assigned_to: null,
    assigned_by: null,
    priority: 'medium',
    status: 'completed',
    due_date: '2025-01-15T17:00:00Z',
    completed_at: '2025-01-14T14:30:00Z',
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
]

export const demoAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Island Resorts Group - Case Strategy Meeting',
    description: 'Discuss strategy for upcoming tribunal hearing.',
    client_id: '1',
    case_id: '1',
    consultation_request_id: null,
    assigned_to: null,
    location: 'Aureus Law Firm Office',
    start_time: '2025-02-20T10:00:00Z',
    end_time: '2025-02-20T11:30:00Z',
    status: 'confirmed',
    notes: 'Ibrahim Moosa and HR Director attending.',
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
  {
    id: '2',
    title: 'Coral Construction - Contract Negotiation',
    description: 'Review revised contract terms with client.',
    client_id: '3',
    case_id: '3',
    consultation_request_id: null,
    assigned_to: null,
    location: 'Client Office',
    start_time: '2025-02-25T14:00:00Z',
    end_time: '2025-02-25T16:00:00Z',
    status: 'pending',
    notes: 'Bring printed copies of contract comparison.',
    created_by: null,
    created_at: '2025-12-08',
    updated_at: '2025-12-08'
  },
]

export const demoNotifications: Notification[] = [
  {
    id: '1',
    profile_id: '',
    title: 'New task assigned',
    message: 'You have been assigned to review contract draft for Coral Construction.',
    type: 'task',
    link: '/portal/tasks',
    is_read: false,
    created_at: '2025-12-15T09:00:00Z'
  },
  {
    id: '2',
    profile_id: '',
    title: 'Hearing reminder',
    message: 'Employment Tribunal hearing for Island Resorts Group in 3 days.',
    type: 'reminder',
    link: '/portal/cases/1',
    is_read: false,
    created_at: '2025-12-12T08:00:00Z'
  },
  {
    id: '3',
    profile_id: '',
    title: 'Document uploaded',
    message: 'New document uploaded to Rashid Divorce Proceedings case.',
    type: 'document',
    link: '/portal/cases/2',
    is_read: true,
    created_at: '2025-12-10T14:30:00Z'
  }
]

export const demoConsultationRequests: ConsultationRequest[] = [
  {
    id: '1',
    full_name: 'Ali Hassan',
    email: 'ali.hassan@example.com',
    phone: '+960 777 5555',
    client_type: 'individual',
    company_name: null,
    practice_area_id: '4',
    preferred_date: '2025-03-25',
    preferred_time: 'morning',
    message: 'I need advice regarding a family matter involving child custody.',
    status: 'new',
    internal_notes: null,
    assigned_to: null,
    created_at: '2025-12-18T10:00:00Z',
    updated_at: '2025-12-18T10:00:00Z'
  },
  {
    id: '2',
    full_name: 'Fatima Ahmed',
    email: 'fatima@oceanventures.mv',
    phone: '+960 400 8888',
    client_type: 'business',
    company_name: 'Ocean Ventures Pvt Ltd',
    practice_area_id: '1',
    preferred_date: '2025-03-27',
    preferred_time: 'afternoon',
    message: 'Looking for legal support for a new joint venture agreement.',
    status: 'reviewed',
    internal_notes: 'Potential high-value client. To follow up.',
    assigned_to: null,
    created_at: '2025-12-16T14:00:00Z',
    updated_at: '2025-12-17T09:00:00Z'
  }
]

// Job Openings
export const jobOpenings = [
  {
    id: '1',
    title: 'Associate Attorney – Litigation',
    type: 'Full-time',
    location: 'Malé, Maldives',
    description: 'We are seeking a motivated Associate Attorney to join our Litigation & Dispute Resolution practice. The ideal candidate will assist in court proceedings, legal research, case preparation, and client advisory.',
    requirements: [
      'Bachelor of Laws or Bachelor of Shariah & Law from a recognized university',
      '1-3 years of relevant experience',
      'Strong research and drafting skills',
      'Fluency in English and Dhivehi',
      'Admission or eligibility for admission to the Bar Council of Maldives'
    ],
    posted_date: '2025-12-08',
  },
  {
    id: '2',
    title: 'Legal Associate – Corporate & Regulatory',
    type: 'Full-time',
    location: 'Malé, Maldives',
    description: 'Join our Corporate, Regulatory & Advisory team to support clients with business formation, contracts, compliance, and regulatory matters.',
    requirements: [
      'Bachelor of Laws or Bachelor of Shariah & Law from a recognized university',
      'Strong drafting and advisory skills',
      'Fluency in English and Dhivehi',
      'Attention to detail and client focus'
    ],
    posted_date: '2025-12-08',
  },
  {
    id: '3',
    title: 'Paralegal / Legal Support Officer',
    type: 'Full-time',
    location: 'Malé, Maldives',
    description: 'Support our legal team with document preparation, research, court filings, and administrative tasks. An excellent opportunity for those looking to build a career in law.',
    requirements: [
      'Degree in Law or related field',
      'Strong organizational skills',
      'Proficiency in Microsoft Office',
      'Fluency in English and Dhivehi',
      'Attention to detail'
    ],
    posted_date: '2025-12-08',
  }
]

// Alias exports for portal compatibility
export const matters = demoCases.map((c, idx) => ({
  ...c,
  title: c.title,
  matter_number: c.case_number,
  assigned_lawyers: idx < 2 ? ['lawyer-1', 'lawyer-2'] : ['lawyer-1'],
  lead_lawyer_id: 'lawyer-1',
  priority: c.priority || 'medium',
}))

export const clients = demoClients

export const timeEntries = [
  {
    id: 'te-1',
    lawyer_id: 'lawyer-1',
    matter_id: 'case-1',
    date: '2025-12-18',
    hours: 2.5,
    description: 'Contract review and markup',
    billable: true,
    rate: 350,
  },
  {
    id: 'te-2',
    lawyer_id: 'lawyer-1',
    matter_id: 'case-2',
    date: '2025-12-18',
    hours: 1.5,
    description: 'Client meeting - due diligence discussion',
    billable: true,
    rate: 350,
  },
  {
    id: 'te-3',
    lawyer_id: 'lawyer-1',
    matter_id: 'case-3',
    date: '2025-12-18',
    hours: 3.0,
    description: 'Court filing preparation',
    billable: true,
    rate: 350,
  },
]
