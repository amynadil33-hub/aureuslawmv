-- Aureus Law Firm Seed Data
-- Run this AFTER the schema has been created

-- ============================================
-- PRACTICE AREAS
-- ============================================

INSERT INTO practice_areas (name, slug, short_description, full_description, icon_name, common_needs, is_featured, sort_order) VALUES
('Corporate & Commercial Law', 'corporate-commercial', 'Strategic legal support for business formation, transactions, and corporate governance.', 'Our corporate and commercial practice provides comprehensive legal support for businesses at every stage of their journey. From entity formation and shareholder agreements to complex M&A transactions, we help clients navigate the legal landscape with confidence.', 'Building2', ARRAY['Company incorporation', 'Shareholder agreements', 'Joint ventures', 'Corporate restructuring', 'Due diligence'], true, 1),
('Civil Litigation', 'civil-litigation', 'Skilled representation in civil disputes and court proceedings.', 'When disputes arise, our litigation team brings strategic thinking and courtroom experience to protect your interests. We handle matters ranging from contract disputes to property claims, always working toward the most favorable resolution.', 'Scale', ARRAY['Contract disputes', 'Property claims', 'Debt recovery', 'Injunctions', 'Appeals'], true, 2),
('Criminal Defense', 'criminal-defense', 'Vigorous defense of your rights in criminal matters.', 'Every person deserves a strong defense. Our criminal defense team provides confidential, dedicated representation for individuals facing charges, ensuring your rights are protected throughout the legal process.', 'Shield', ARRAY['Investigation stage support', 'Court representation', 'Bail applications', 'Appeals', 'Record expungement'], true, 3),
('Family Law', 'family-law', 'Compassionate guidance through sensitive family matters.', 'Family matters require both legal expertise and emotional sensitivity. We guide clients through divorce, custody, and inheritance issues with discretion and care, always prioritizing the well-being of families.', 'Heart', ARRAY['Divorce proceedings', 'Child custody', 'Maintenance claims', 'Prenuptial agreements', 'Adoption'], true, 4),
('Employment & Labour', 'employment-labour', 'Protecting rights in the workplace for employers and employees.', 'Whether you are an employer establishing workplace policies or an employee facing unfair treatment, our employment practice provides balanced, practical legal guidance aligned with Maldivian labor law.', 'Users', ARRAY['Employment contracts', 'Wrongful termination', 'Workplace policies', 'Discrimination claims', 'Severance negotiations'], false, 5),
('Contract Drafting & Review', 'contracts', 'Precise drafting and review of agreements that protect your interests.', 'Contracts form the foundation of business relationships. Our team drafts, reviews, and negotiates agreements that clearly define obligations, mitigate risks, and stand up to scrutiny.', 'FileText', ARRAY['Commercial agreements', 'Service contracts', 'Lease agreements', 'Licensing deals', 'NDAs'], false, 6),
('Property & Land Matters', 'property-land', 'Expert guidance on property transactions and land disputes.', 'Property matters in the Maldives involve unique considerations. We assist with purchases, leases, development agreements, and dispute resolution, ensuring your property interests are secure.', 'Home', ARRAY['Property purchases', 'Land registration', 'Lease agreements', 'Title disputes', 'Development contracts'], true, 7),
('Dispute Resolution & Arbitration', 'dispute-resolution', 'Alternative pathways to resolve conflicts efficiently.', 'Not every dispute needs to go to court. We offer mediation and arbitration services that can resolve conflicts faster and more cost-effectively while maintaining confidentiality.', 'MessageSquare', ARRAY['Commercial arbitration', 'Mediation services', 'Negotiated settlements', 'International disputes', 'Enforcement of awards'], false, 8),
('Regulatory & Compliance', 'regulatory-compliance', 'Navigating regulatory requirements with confidence.', 'Regulatory compliance is essential for business success. We help clients understand and meet their obligations across various sectors, from financial services to hospitality.', 'ClipboardCheck', ARRAY['Licensing applications', 'Regulatory audits', 'Compliance programs', 'Policy development', 'Government liaison'], false, 9),
('Aviation & Transport Law', 'aviation-transport', 'Specialized counsel for aviation and maritime matters.', 'The Maldives'' unique geography creates specialized legal needs in aviation and maritime transport. Our team understands these industries and provides tailored legal solutions.', 'Plane', ARRAY['Aviation licensing', 'Maritime contracts', 'Transport regulations', 'Accident claims', 'Charter agreements'], false, 10),
('Banking & Finance', 'banking-finance', 'Legal support for financial transactions and institutions.', 'From loan documentation to regulatory compliance, we support banks, financial institutions, and borrowers through complex financial transactions and regulatory matters.', 'Landmark', ARRAY['Loan documentation', 'Security arrangements', 'Financial regulations', 'Banking disputes', 'Islamic finance'], false, 11),
('Immigration & Administrative', 'immigration-administrative', 'Guidance through immigration and government processes.', 'Whether you are relocating for work, investing in the Maldives, or dealing with administrative matters, we guide clients through immigration procedures and government interactions.', 'Globe', ARRAY['Work permits', 'Visa applications', 'Residency matters', 'Administrative appeals', 'Government applications'], false, 12),
('Debt Recovery', 'debt-recovery', 'Effective strategies to recover what you are owed.', 'We help creditors recover outstanding debts through negotiation, mediation, and where necessary, court action. Our approach balances firmness with maintaining business relationships.', 'CircleDollarSign', ARRAY['Demand letters', 'Negotiated settlements', 'Court proceedings', 'Asset tracing', 'Enforcement'], false, 13),
('Inheritance & Estate Matters', 'inheritance-estates', 'Thoughtful planning for wealth transfer and estate administration.', 'Estate planning ensures your wishes are honored and your family is protected. We assist with wills, estate administration, and navigating inheritance under Maldivian law.', 'ScrollText', ARRAY['Will drafting', 'Estate administration', 'Inheritance disputes', 'Asset protection', 'Succession planning'], false, 14),
('White Collar & Investigations', 'white-collar-investigations', 'Discrete handling of complex financial and corporate matters.', 'When allegations arise, swift and discrete action is essential. We assist clients facing investigations, regulatory inquiries, or allegations of financial misconduct.', 'Search', ARRAY['Internal investigations', 'Regulatory inquiries', 'Defense representation', 'Compliance reviews', 'Whistleblower matters'], false, 15),
('General Advisory', 'general-advisory', 'Practical legal counsel for everyday matters.', 'Sometimes you just need straightforward legal advice. Our general advisory practice provides accessible guidance on a wide range of legal questions for individuals and businesses.', 'HelpCircle', ARRAY['Legal consultations', 'Document review', 'Risk assessment', 'Legal opinions', 'General guidance'], false, 16);

-- ============================================
-- SECTORS
-- ============================================

INSERT INTO sectors (name, slug, short_description, full_description, icon_name, is_featured, sort_order) VALUES
('Hospitality & Resorts', 'hospitality-resorts', 'Legal partner to the Maldives'' world-renowned hospitality industry.', 'The hospitality sector is the cornerstone of the Maldivian economy. We provide comprehensive legal support to resorts, hotels, and tourism operators, from development agreements to employment matters and regulatory compliance.', 'Building', true, 1),
('Construction & Real Estate', 'construction-real-estate', 'Building the legal foundation for development projects.', 'We support developers, contractors, and property owners through all phases of construction and real estate projects, from land acquisition to dispute resolution.', 'HardHat', true, 2),
('SMEs & Local Businesses', 'smes-local-businesses', 'Empowering Maldivian entrepreneurs and growing businesses.', 'Small and medium enterprises are the backbone of the local economy. We provide practical, affordable legal support tailored to the needs of growing Maldivian businesses.', 'Store', true, 3),
('Financial Services', 'financial-services', 'Navigating the regulated financial landscape.', 'From banks to insurance companies to fintech startups, we help financial services clients manage regulatory requirements while pursuing growth opportunities.', 'TrendingUp', false, 4),
('Aviation & Transport', 'aviation-transport-sector', 'Keeping the Maldives connected.', 'Aviation and maritime transport are lifelines for the Maldives. We understand the unique legal challenges facing airlines, seaplane operators, and shipping companies.', 'Plane', false, 5),
('Family-Owned Businesses', 'family-businesses', 'Preserving legacies across generations.', 'Family businesses face unique challenges in succession planning, governance, and dispute resolution. We help families protect their enterprises while maintaining family harmony.', 'Users', false, 6),
('International Clients', 'international-clients', 'Your gateway to legal certainty in the Maldives.', 'Foreign investors and international businesses need local expertise. We bridge the gap, providing clear guidance on Maldivian law and facilitating smooth cross-border transactions.', 'Globe', true, 7),
('Employment-Heavy Organizations', 'employment-organizations', 'Managing workforce legal challenges at scale.', 'Organizations with large workforces face complex employment law challenges. We help employers build compliant HR practices and resolve workplace disputes efficiently.', 'Briefcase', false, 8),
('Professional Services', 'professional-services', 'Serving those who serve others.', 'Accountants, consultants, and other professional service providers face unique liability and regulatory considerations. We provide tailored legal support for professional practices.', 'Award', false, 9);

-- ============================================
-- ARTICLE CATEGORIES
-- ============================================

INSERT INTO article_categories (name, slug, description, sort_order) VALUES
('Legal Updates', 'legal-updates', 'Recent changes in Maldivian law and regulations', 1),
('Business Insights', 'business-insights', 'Practical guidance for businesses operating in the Maldives', 2),
('Industry Focus', 'industry-focus', 'Deep dives into sector-specific legal matters', 3),
('Client Guides', 'client-guides', 'Helpful resources for common legal questions', 4),
('Firm News', 'firm-news', 'Updates and announcements from Aureus Law', 5);

-- ============================================
-- TEAM MEMBERS
-- ============================================

INSERT INTO team_members (full_name, slug, role_title, email, phone, bio, education, admissions, languages, years_experience, is_partner, is_featured, sort_order) VALUES
('Ahmed Rasheed', 'ahmed-rasheed', 'Managing Partner', 'ahmed.rasheed@aureuslaw.mv', '+960 300 1001', 'Ahmed Rasheed is the founding and managing partner of Aureus Law. With over 20 years of experience in Maldivian law, he has advised multinational corporations, government bodies, and high-net-worth individuals on complex legal matters. Ahmed is recognized as one of the leading corporate lawyers in the Maldives.', ARRAY['LLM, University of London', 'LLB (Hons), Maldives National University'], ARRAY['Supreme Court of Maldives', 'High Court of Maldives'], ARRAY['Dhivehi', 'English', 'Arabic'], 20, true, true, 1),
('Fathimath Latheefa', 'fathimath-latheefa', 'Senior Partner', 'fathimath.latheefa@aureuslaw.mv', '+960 300 1002', 'Fathimath Latheefa heads the firm''s litigation and dispute resolution practice. She has represented clients in landmark cases before the Supreme Court and has extensive experience in commercial disputes, arbitration, and family law matters. Fathimath is known for her strategic approach and courtroom presence.', ARRAY['LLM, University of Melbourne', 'LLB, Villa College'], ARRAY['Supreme Court of Maldives', 'High Court of Maldives'], ARRAY['Dhivehi', 'English'], 15, true, true, 2),
('Hassan Waheed', 'hassan-waheed', 'Partner', 'hassan.waheed@aureuslaw.mv', '+960 300 1003', 'Hassan Waheed specializes in property law, banking and finance, and corporate transactions. He has advised on some of the largest resort development projects in the Maldives and regularly assists financial institutions with lending and security documentation.', ARRAY['LLB (Hons), Brunel University London', 'Diploma in Islamic Banking'], ARRAY['Supreme Court of Maldives', 'High Court of Maldives'], ARRAY['Dhivehi', 'English'], 12, true, true, 3),
('Aishath Nahula', 'aishath-nahula', 'Partner', 'aishath.nahula@aureuslaw.mv', '+960 300 1004', 'Aishath Nahula leads the employment and regulatory practice at Aureus Law. She advises both employers and employees on workplace matters and has developed compliance frameworks for numerous organizations in the hospitality and financial services sectors.', ARRAY['LLM, National University of Singapore', 'LLB, Maldives National University'], ARRAY['High Court of Maldives', 'Civil Court of Maldives'], ARRAY['Dhivehi', 'English', 'Hindi'], 10, true, false, 4),
('Mohamed Shareef', 'mohamed-shareef', 'Senior Associate', 'mohamed.shareef@aureuslaw.mv', '+960 300 1005', 'Mohamed Shareef focuses on corporate and commercial law, assisting clients with business formations, contracts, and regulatory matters. He has particular expertise in the hospitality sector and regularly advises resort operators on operational legal matters.', ARRAY['LLB (Hons), University of Wolverhampton', 'Certificate in International Arbitration'], ARRAY['High Court of Maldives', 'Civil Court of Maldives'], ARRAY['Dhivehi', 'English'], 7, false, false, 5),
('Aminath Shifana', 'aminath-shifana', 'Senior Associate', 'aminath.shifana@aureuslaw.mv', '+960 300 1006', 'Aminath Shifana practices in the areas of civil litigation and family law. She is known for her compassionate approach to sensitive family matters and her thorough preparation in court proceedings. Aminath has successfully handled numerous custody and divorce cases.', ARRAY['LLB, Maldives National University', 'Certificate in Mediation'], ARRAY['High Court of Maldives', 'Civil Court of Maldives', 'Family Court'], ARRAY['Dhivehi', 'English'], 6, false, false, 6),
('Ibrahim Nazim', 'ibrahim-nazim', 'Associate', 'ibrahim.nazim@aureuslaw.mv', '+960 300 1007', 'Ibrahim Nazim works across the firm''s practice areas with a focus on property law and contract drafting. He assists clients with property transactions, lease agreements, and commercial contracts, bringing meticulous attention to detail to every matter.', ARRAY['LLB, Villa College'], ARRAY['Civil Court of Maldives', 'Magistrate Courts'], ARRAY['Dhivehi', 'English'], 4, false, false, 7),
('Mariyam Shifa', 'mariyam-shifa', 'Associate', 'mariyam.shifa@aureuslaw.mv', '+960 300 1008', 'Mariyam Shifa specializes in immigration law and administrative matters. She assists both individuals and businesses with visa applications, work permits, and dealings with government authorities. Her practical approach helps clients navigate bureaucratic processes efficiently.', ARRAY['LLB (Hons), University of London International', 'Diploma in Administrative Law'], ARRAY['Civil Court of Maldives'], ARRAY['Dhivehi', 'English', 'Sinhala'], 3, false, false, 8);

-- ============================================
-- TESTIMONIALS
-- ============================================

INSERT INTO testimonials (client_name, client_title, company_name, content, rating, is_featured, sort_order) VALUES
('Ibrahim Moosa', 'CEO', 'Island Resorts Group', 'Aureus Law has been our trusted legal partner for over five years. Their understanding of the hospitality industry and proactive approach to legal matters has been invaluable to our expansion across the Maldives.', 5, true, 1),
('Sarah Chen', 'Regional Director', 'Pacific Investments Ltd', 'When we decided to invest in the Maldives, Aureus Law provided clear, practical guidance that made the process smooth. Their team understood our commercial objectives and delivered results.', 5, true, 2),
('Ahmed Saleem', 'Managing Director', 'Coral Construction', 'The property and construction team at Aureus Law helped us navigate complex development agreements and resolve a challenging dispute. Professional, thorough, and always available when needed.', 5, true, 3),
('Fathimath Laila', 'Business Owner', 'Malé Trading Co.', 'As a small business owner, I appreciate that Aureus Law takes the time to explain legal matters in terms I can understand. They have helped me with contracts, employment issues, and general business advice.', 5, false, 4),
('Dr. Hassan Ahmed', 'Private Client', NULL, 'During a difficult family matter, the team at Aureus Law handled everything with discretion and compassion. I felt supported throughout the process and the outcome exceeded my expectations.', 5, false, 5);

-- ============================================
-- FAQS
-- ============================================

INSERT INTO faqs (question, answer, category, sort_order) VALUES
('How do I schedule a consultation with Aureus Law?', 'You can schedule a consultation by filling out our online booking form, calling our office at +960 300 1000, or sending an email to contact@aureuslaw.mv. We typically respond within one business day and will arrange a time that suits your schedule.', 'General', 1),
('What are your fees and billing practices?', 'Our fees vary depending on the nature and complexity of the matter. We offer fixed-fee arrangements for routine matters and hourly billing for more complex work. During your initial consultation, we will provide a clear estimate of costs and explain our billing practices.', 'General', 2),
('Do you offer services in languages other than English and Dhivehi?', 'Yes, several of our lawyers are fluent in additional languages including Arabic, Hindi, and Sinhala. Please let us know your language preference when scheduling your consultation.', 'General', 3),
('Can you represent clients in other countries?', 'While we are qualified to practice Maldivian law, we work with a network of trusted law firms across the region and can coordinate with international counsel when matters have cross-border elements.', 'General', 4),
('How do I incorporate a company in the Maldives?', 'Company incorporation involves registering with the Ministry of Economic Development, obtaining necessary licenses, and preparing constitutional documents. Our corporate team can guide you through the entire process, from choosing the right business structure to completing registration.', 'Business', 5),
('What should I do if I receive a legal notice?', 'Do not ignore any legal notice. Contact a lawyer promptly to understand your rights and obligations. Time limits often apply to legal responses, so early advice is essential.', 'Disputes', 6),
('How long does a typical court case take in the Maldives?', 'Case duration varies significantly depending on the court, complexity, and nature of the dispute. Simple matters may resolve in months, while complex litigation can take several years. We can provide more specific guidance based on your circumstances.', 'Disputes', 7),
('Do you handle matters outside of Malé?', 'Yes, we represent clients throughout the Maldives. While our office is in Malé, we regularly handle matters involving other islands and atolls. Remote consultations via video call are also available.', 'General', 8);

-- ============================================
-- ARTICLES (Sample)
-- ============================================

INSERT INTO articles (title, slug, excerpt, content, status, is_featured, read_time_minutes, tags, published_at) 
SELECT 
  'Understanding Employment Law Changes in 2024',
  'employment-law-changes-2024',
  'Recent amendments to the Employment Act bring significant changes for employers and employees. Here is what you need to know.',
  '<p>The Maldivian Employment Act has undergone several important amendments that affect both employers and employees operating in the country. These changes aim to modernize workplace regulations and provide greater protections for workers while maintaining flexibility for businesses.</p><h2>Key Changes for Employers</h2><p>Employers must now provide written employment contracts within 14 days of employment commencement. The contracts must include specific terms regarding leave entitlements, notice periods, and disciplinary procedures.</p><h2>Enhanced Leave Provisions</h2><p>Annual leave entitlements have been clarified, with employees now entitled to a minimum of 30 days paid leave after one year of service. Sick leave provisions have also been strengthened.</p><h2>What This Means for Your Business</h2><p>We recommend all employers review their current employment contracts and HR policies to ensure compliance with the new requirements. Our employment team is available to assist with policy reviews and contract updates.</p>',
  'published',
  true,
  5,
  ARRAY['employment law', 'HR', 'compliance'],
  NOW() - INTERVAL '7 days'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'employment-law-changes-2024');

INSERT INTO articles (title, slug, excerpt, content, status, is_featured, read_time_minutes, tags, published_at)
SELECT
  'Guide to Property Purchases in the Maldives',
  'property-purchases-guide-maldives',
  'A comprehensive guide to buying property in the Maldives, including foreign ownership rules and due diligence requirements.',
  '<p>Property ownership in the Maldives involves unique considerations that both local and foreign buyers must understand. This guide covers the essential legal aspects of property transactions in our jurisdiction.</p><h2>Foreign Ownership Rules</h2><p>Foreign nationals and companies can own property in the Maldives under specific conditions, primarily through long-term lease arrangements rather than freehold ownership. Understanding these distinctions is crucial for international investors.</p><h2>Due Diligence Requirements</h2><p>Before completing any property transaction, thorough due diligence is essential. This includes title searches, verification of ownership rights, review of any encumbrances, and confirmation of necessary permits.</p><h2>The Transaction Process</h2><p>Property transactions typically involve negotiation, preliminary agreements, due diligence, final documentation, and registration. Each stage requires careful attention to legal requirements.</p><p>Contact our property team for personalized guidance on your property transaction.</p>',
  'published',
  true,
  7,
  ARRAY['property law', 'real estate', 'foreign investment'],
  NOW() - INTERVAL '14 days'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'property-purchases-guide-maldives');

INSERT INTO articles (title, slug, excerpt, content, status, is_featured, read_time_minutes, tags, published_at)
SELECT
  'Corporate Governance Best Practices for Maldivian Companies',
  'corporate-governance-best-practices',
  'Strong corporate governance builds investor confidence and regulatory compliance. Learn the essentials for Maldivian businesses.',
  '<p>Good corporate governance is the foundation of sustainable business success. For companies operating in the Maldives, implementing robust governance practices is not just about compliance—it is about building trust with investors, partners, and regulators.</p><h2>Board Structure and Composition</h2><p>An effective board should include a mix of executive and non-executive directors with diverse skills and experience. Clear delineation of roles between the board and management is essential.</p><h2>Shareholder Rights</h2><p>Protecting shareholder rights through proper meeting procedures, voting mechanisms, and information disclosure builds confidence among investors and facilitates capital raising.</p><h2>Compliance and Risk Management</h2><p>Establishing clear compliance frameworks and risk management processes helps companies identify and address potential issues before they become problems.</p><p>Our corporate team can assist with governance reviews and implementation of best practices.</p>',
  'published',
  false,
  6,
  ARRAY['corporate law', 'governance', 'compliance'],
  NOW() - INTERVAL '21 days'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'corporate-governance-best-practices');

-- ============================================
-- SITE SETTINGS
-- ============================================

INSERT INTO site_settings (key, value) VALUES
('contact_info', '{"phone": "+960 300 1000", "email": "contact@aureuslaw.mv", "address": "Aureus Law, 4th Floor, Champa Building, Boduthakurufaanu Magu, Malé, Maldives 20026", "hours": "Sunday - Thursday: 8:00 AM - 5:00 PM"}'),
('social_links', '{"linkedin": "https://linkedin.com/company/aureuslaw", "twitter": "https://twitter.com/aureuslaw"}'),
('hero_content', '{"headline": "Strategic Legal Counsel for the Maldives", "subheadline": "Trusted guidance for individuals, businesses, and institutions across every legal challenge.", "cta_text": "Book a Consultation", "cta_link": "/contact/book-consultation"}'),
('about_intro', '{"title": "A Different Kind of Law Firm", "content": "Aureus Law combines deep expertise in Maldivian law with a modern, client-focused approach. We understand that legal matters can be complex and stressful—our role is to provide clarity, confidence, and results."}')
ON CONFLICT (key) DO NOTHING;
