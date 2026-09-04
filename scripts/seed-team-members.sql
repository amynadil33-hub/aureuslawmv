-- =============================================================
-- Aureus Law Firm LLP — Supabase Seed: team_members
-- Run this in your Supabase SQL Editor after running your schema migration.
-- Portrait assets are served locally from /public/images/team.
-- =============================================================

-- Clear existing placeholder data first
TRUNCATE TABLE team_members RESTART IDENTITY CASCADE;

-- Insert real team members
INSERT INTO team_members (
  id,
  profile_id,
  full_name,
  slug,
  role_title,
  email,
  phone,
  bio,
  education,
  admissions,
  languages,
  years_experience,
  photo_url,
  is_partner,
  is_featured,
  is_visible,
  sort_order,
  linkedin_url,
  created_at,
  updated_at
) VALUES

-- 1. Abdul Salaam Arif — Co-Founder & Managing Partner
(
  gen_random_uuid(),
  NULL,
  'Abdul Salaam Arif',
  'abdul-salaam-arif',
  'Co-Founder & Managing Partner',
  'abdulsalaam@aureuslaw.mv',
  NULL,
  'Uz. Abdul Salaam Arif oversees the firm’s operational direction and legal practice development. His experience includes legal advisory, dispute resolution, and regulatory matters within the Maldivian legal landscape.',
  ARRAY[
    'Master of Comparative Laws, International Islamic University Malaysia',
    'Bachelor of Laws (Hons), International Islamic University Malaysia',
    'Diploma in Information Technology'
  ],
  ARRAY['Supreme Court of the Maldives'],
  ARRAY['Dhivehi', 'English'],
  15,
  '/images/team/verified/abdul-salaam-arif.jpeg',
  TRUE,
  TRUE,
  TRUE,
  1,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 2. Hawwa Shahira — Co-Founder & Partner
(
  gen_random_uuid(),
  NULL,
  'Hawwa Shahira',
  'hawwa-shahira',
  'Co-Founder & Partner',
  'hawwashahira@aureuslaw.mv',
  NULL,
  'Uza. Hawwa Shahira has experience working within the Maldivian legal and regulatory sector, including investigative, compliance, and advisory work within government institutions. Her practice focuses on legal research, dispute resolution support, regulatory matters, and client advisory services.',
  ARRAY[
    'Bachelor of Shariah and Law (Hons), Maldives National University'
  ],
  ARRAY['Bar Council of the Maldives (2023)'],
  ARRAY['Dhivehi', 'English'],
  NULL,
  '/images/team/verified/hawwa-shahira.jpeg',
  TRUE,
  TRUE,
  TRUE,
  2,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 3. Samaahath Abdul Latheef — Legal Consultant
(
  gen_random_uuid(),
  NULL,
  'Samaahath Abdul Latheef',
  'samaahath-abdul-latheef',
  'Legal Consultant',
  NULL,
  NULL,
  'Samaahath Abdul Latheef is a Legal Consultant at Aureus Law Firm, contributing a strong foundation in Shari''ah and Law together with practical experience in investigative work, court operations, and institutional legal processes. She earned her Master''s Degree in Shari''ah and Law from Villa College and her Bachelor''s Degree in Shari''ah and Law (Hons) from the Maldives National University.

Samaahath previously served as an Investigator at the Ombudspersons Office for Transitional Justice, working on investigations involving statements, field inquiries, reporting, record management, and institutional accountability. She also served as an Administrative Officer at the Family Court, gaining experience in case administration, hearing preparation, court records, and procedural coordination.

She has further worked with the National Centre for Information Technology, supporting e-government systems, user training, and administrative implementation.',
  ARRAY[
    'Master''s Degree in Shari''ah and Law, Villa College',
    'Bachelor''s Degree in Shari''ah and Law (Hons), Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  NULL,
  '/images/team/verified/samaahath-abdul-latheef.jpeg',
  FALSE,
  TRUE,
  TRUE,
  3,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 4. Minha Abdul Muhsin — Associate
(
  gen_random_uuid(),
  NULL,
  'Minha Abdul Muhsin',
  'minha-abdul-muhsin',
  'Associate',
  NULL,
  NULL,
  'Minha Abdul Muhsin is an Associate at Aureus Law Firm, contributing a strong foundation in legal analysis, legislative review, court procedure, and human rights-informed legal practice. She earned her Master of Laws in International Human Rights Law from the University of Essex and her Bachelor of Shari''ah & Law from the Maldives National University.

Before joining Aureus, Minha served as Deputy Legal Officer at the Legal Affairs Office of the President''s Office, working on legal opinions, legislative bill review, Presidential legal briefs, decrees, MOUs, and court-related matters. She also served as Legal Officer at the Juvenile Court, supporting judicial processes through legal commentary, registrar functions, judicial assistance, training coordination, and legal research.

Minha has further strengthened her practice through specialized training in juvenile justice, legislative drafting, domestic violence awareness, counter-terrorism coordination, and international legal processes. She is also a published contributor in the field of disaster management law in SAARC countries.',
  ARRAY[
    'Master of Laws (International Human Rights Law), University of Essex',
    'Bachelor of Shari''ah & Law, Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  NULL,
  NULL,
  FALSE,
  FALSE,
  TRUE,
  4,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 5. Mohamed Abdul Ghanee — Associate
(
  gen_random_uuid(),
  NULL,
  'Mohamed Abdul Ghanee',
  'mohamed-abdul-ghanee',
  'Associate',
  NULL,
  NULL,
  'Mohamed Abdul Ghanee is an Associate at Aureus Law Firm, contributing a strong background in legislative drafting, regulatory analysis, administrative law processes, and institutional legal advisory work. He earned his Bachelor of Laws from the Faculty of Shariah and Law, Maldives National University.

Before joining Aureus in January 2026, Mohamed served for over a decade at the Ministry of Health, first as Legal Officer and later as Senior Legal Officer, while also acting for extended periods as Head of the Ministry''s Legal Section. He was involved in the drafting and review of bills, regulations, amendments, agreements, and MOUs, and provided legal opinions on a wide range of institutional matters.

He has held leadership roles including Chairperson of the Sexual Harassment Investigation Committee and Chairperson of the Muraajaa Committee under the Right to Information Act. He also served in the country''s COVID-19 emergency response structures within both the National Emergency Operation Centre and the Health Emergency Operation Centre legal clusters.',
  ARRAY[
    'Bachelor of Laws, Faculty of Shariah and Law, Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  10,
  '/images/team/verified/mohamed-abdul-ghanee.jpeg',
  FALSE,
  TRUE,
  TRUE,
  5,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 6. Ahmed Raaiz — Legal Consultant
(
  gen_random_uuid(),
  NULL,
  'Ahmed Raaiz',
  'ahmed-raaiz',
  'Legal Consultant',
  NULL,
  NULL,
  'Ahmed Raaiz is a Legal Consultant at Aureus Law Firm with a strong academic background in Shari''ah and Law and extensive professional experience in legal practice, investigations, and institutional legal affairs. He holds a Bachelor''s Degree in Shari''ah and Law (Hons) from The Maldives National University.

Raaiz has served in several public institutions, gaining experience in investigations, case management, and legal analysis across criminal, civil, family law, and child rights matters. He served as an Investigation Officer at the Maldives Police Service, handling criminal investigations, evidence analysis, witness interviews, and prosecution support.

He also served at the Ombudsperson''s Office for Transitional Justice investigating human rights complaints, at the Children''s Ombudsperson''s Office handling child rights matters, and as Legal Officer at the Local Government Authority providing legal analysis on local governance and decentralization matters.',
  ARRAY[
    'Bachelor''s Degree in Shari''ah and Law (Hons), Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  NULL,
  '/images/team/verified/ahmed-raaiz.jpeg',
  FALSE,
  FALSE,
  TRUE,
  6,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 7. Ibrahim Rasheed — Tax Consultant
(
  gen_random_uuid(),
  NULL,
  'Ibrahim Rasheed',
  'ibrahim-rasheed',
  'Tax Consultant',
  NULL,
  NULL,
  'Ibrahim Rasheed is a Tax Consultant at Aureus Law Firm, contributing a rare blend of legal qualification, tax advisory experience, accounting expertise, and commercial insight. He holds a Master in Comparative Law (MCL) from the Islamic University of Maldives, a Master in Islamic Finance Practice from INCEIF, and a Bachelor of Sharia & Law – LLB (Hons) from the Islamic University of Maldives. He is also a Licensed Attorney of the Bar Council of the Maldives and has pursued additional professional studies through CIMA and ACCA.

Over the course of his career, Ibrahim has held roles across legal, tax, accounting, and financial management functions, including service at the Tax Appeal Tribunal, Maldives Tourism Development Corporation Plc, Wataniya Telecom Maldives Pvt Ltd, and Universal Enterprises Pvt Ltd, as well as in private advisory practice.

His experience includes advising on the legality of tax matters, financial and reporting consequences, budgeting, asset oversight, internal audit, and reporting systems improvement.',
  ARRAY[
    'Master in Comparative Law (MCL), Islamic University of Maldives',
    'Master in Islamic Finance Practice, INCEIF',
    'Bachelor of Sharia & Law – LLB (Hons), Islamic University of Maldives'
  ],
  ARRAY['Bar Council of the Maldives'],
  ARRAY['Dhivehi', 'English'],
  NULL,
  NULL,
  FALSE,
  FALSE,
  TRUE,
  7,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 8. Fathimath Fazuna — Social Inclusion Consultant
(
  gen_random_uuid(),
  NULL,
  'Fathimath Fazuna',
  'fathimath-fazuna',
  'Social Inclusion Consultant',
  NULL,
  NULL,
  'Fathimath Fazuna is the Social Inclusion Consultant at Aureus Law Firm, where she contributes a strong background in human rights, mediation, social development, counselling, and inclusive community engagement. Her role focuses on advancing equality, diversity, and inclusion through internal policy support, culture-building, client service considerations, and community-facing initiatives.

Fazuna holds a Bachelor''s Degree in Sociology and Anthropology from the International Islamic University of Malaysia, a Master''s Degree in Development Studies from the University of Malaya, and a Diploma in Counselling Psychology from the American College of Higher Education, Sri Lanka.

Her career spans over two decades including service as Senior Social Service Worker at the National Drug Agency, Human Rights Officer at the Human Rights Commission of the Maldives, Mediator at the Ombudspersons Office for Transitional Justice, and Gender, Nutrition and Social Inclusion Coordinator at the Maldives Agribusiness Program.',
  ARRAY[
    'Bachelor''s Degree in Sociology and Anthropology, International Islamic University of Malaysia',
    'Master''s Degree in Development Studies, University of Malaya',
    'Diploma in Counselling Psychology, American College of Higher Education, Sri Lanka'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  20,
  NULL,
  FALSE,
  FALSE,
  TRUE,
  8,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 9. Aminath Mohamed — Business Management & Marketing Consultant
(
  gen_random_uuid(),
  NULL,
  'Aminath Mohamed',
  'aminath-mohamed',
  'Business Management & Marketing Consultant',
  NULL,
  NULL,
  'Aminath Mohamed is the Business Management and Marketing Consultant at Aureus Law Firm, contributing experience in business operations, institutional leadership, stakeholder engagement, strategic coordination, and marketing-related organizational support. Her academic background includes a Master''s in Business from the Maldives Business School, a Bachelor''s in Business / Management and Marketing, and a Diploma in Business from the Maldives National University.

Her professional experience spans leadership and administrative roles at the National Centre for the Arts, the Ministry of Youth Empowerment, Information and Arts, the Ombudspersons Office for Transitional Justice, the Department of Judicial Administration – Judicial Academy, STRADA Maldives, and State Trading Organisation Plc.

Across these roles, she has developed practical strengths in management support, finance and procurement administration, case and workflow coordination, reporting, communication, and institutional organization.',
  ARRAY[
    'Master''s in Business, Maldives Business School',
    'Bachelor''s in Business / Management and Marketing, Maldives National University',
    'Diploma in Business, Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  NULL,
  '/images/team/verified/aminath-mohamed.jpeg',
  FALSE,
  FALSE,
  TRUE,
  9,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 10. Moosa Riffath — IT Professional
(
  gen_random_uuid(),
  NULL,
  'Moosa Riffath',
  'moosa-riffath',
  'IT Professional',
  NULL,
  NULL,
  'Moosa Riffath is an IT professional supporting Aureus Law Firm, assisting with technology-related operations, system support, network maintenance, and general IT support. He brings practical IT experience from legal, education, public sector, and corporate environments.

His academic background includes a Bachelor of Information Technology in System Administration from Cyryx College and a Diploma in Information Technology from the same institution. He is currently pursuing an MSc in Information Technology at Villa College, Maldives, affiliated with the University of the West of England.

Moosa''s experience includes his current role as ICT Manager at Road Development Corporation, as well as previous technical roles at the Ombudsperson''s Office for Transitional Justice, Criminal Court, and Majeediyya School. Across these roles, he has developed strengths in IT troubleshooting, network operations, server support, Microsoft administration, hardware and software support, and user-focused technical assistance.',
  ARRAY[
    'Bachelor of Information Technology (System Administration), Cyryx College',
    'Diploma in Information Technology, Cyryx College',
    'MSc in Information Technology (in progress), Villa College / University of the West of England'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  NULL,
  '/images/team/verified/moosa-riffath.jpeg',
  FALSE,
  FALSE,
  TRUE,
  10,
  NULL,
  '2025-12-08',
  '2025-12-08'
),

-- 11. Ismail Iyaadh Shaheed — Junior Legal Associate
(
  gen_random_uuid(),
  NULL,
  'Ismail Iyaadh Shaheed',
  'ismail-iyaadh-shaheed',
  'Junior Legal Associate',
  NULL,
  NULL,
  'Ismail Iyaadh Shaheed is a Junior Legal Associate at Aureus Law Firm LLP with more than seven years of professional experience across government, legal, and institutional settings, with work involving legal support, public administration, governance, regulatory review, legislative processes, and institutional coordination.

At Aureus, Iyaadh assists with legal research, case preparation, document review, contract and agreement review, client correspondence, and matters before courts and tribunals. Before joining the firm, he worked in several areas of the Maldivian public sector, supporting legal affairs, parliamentary and legislative processes, national security work, public administration, and policy-related matters.

His experience includes supporting legislative and regulatory procedures, ratification processes, administrative decisions, right to information procedures, and legal research. He holds a Bachelor of Shari''ah and Law (Honours) from Maldives National University.',
  ARRAY[
    'Bachelor of Shari''ah and Law (Honours), Maldives National University'
  ],
  NULL,
  ARRAY['Dhivehi', 'English'],
  7,
  '/images/team/verified/ismail-iyaadh-shaheed.jpeg',
  FALSE,
  FALSE,
  TRUE,
  11,
  NULL,
  '2025-12-08',
  '2025-12-08'
);

-- Confirm
SELECT id, full_name, role_title, is_partner, is_featured, sort_order
FROM team_members
ORDER BY sort_order;
