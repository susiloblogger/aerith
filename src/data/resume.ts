export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'growth' | 'tech' | 'consulting' | 'academic';
  featured?: boolean;
  responsibilities: string[];
  skills?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: 'analytics' | 'ads' | 'cloud' | 'development';
}

export interface EducationItem {
  institution: string;
  degree: string;
  major?: string;
  period: string;
  gpa?: string;
  details?: string;
}

export const resumeData = {
  personal: {
    fullName: "Susilo Widakdo, ST.",
    roleTitle: "Growth Lead & Full-Stack Technologist",
    tagline: "Bridging the gap between high-ROI Digital Growth strategies and Scalable Modern Web Architecture.",
    location: "Jakarta Utara, Indonesia",
    email: "susiloblogger@gmail.com",
    phone: "+62 877 8551 1995",
    whatsappUrl: "https://wa.me/6287785511995?text=Halo%20Pak%20Susilo,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek/peluang%20kerjasama",
    avatarUrl: "/avatar.jpg",
    nationality: "Indonesia",
    educationLevel: "Bachelor Degree in Information Technology",
    availability: "Available for Strategic Leadership & High-Impact Consulting"
  },

  summary: `Digital marketing professional with 10+ years’ experience who is agile to evolving strategies for maintaining a brand’s online presence and sales by working on various marketing campaigns both ATL and BTL. Able to think strategically as a sales and marketing growth lead and driven by data to understand the long-term impact on the business.

Also, a programmer with advanced knowledge of the modern web and technology to support product development with great UI/UX.`,

  metrics: [
    { value: "10+", label: "Years Experience", description: "In Digital Growth & Tech" },
    { value: "12+", label: "Strategic Roles", description: "Across Scaleups & Enterprises" },
    { value: "18+", label: "Certifications", description: "Google, Cloud & BigQuery" },
    { value: "100%", label: "Data-Driven", description: "ROI & Performance Mindset" }
  ],

  coreProficiencies: [
    { title: "Digital Data Integration", desc: "Connecting silos, end-to-end attribution, and BigQuery data pipeline modeling." },
    { title: "SEO & Search Engine Marketing", desc: "Technical SEO audits, high-intent keyword strategies, scalable SERP dominance." },
    { title: "Data Analytics & Reporting", desc: "Google Analytics 4, Mixpanel, Amplitude, cohort retention, and BI dashboards." },
    { title: "Full-Stack Website Development", desc: "Modern frontend & backend architectures (Astro, React, Vue, PHP, Laravel, APIs)." },
    { title: "UI/UX & User Psychology", desc: "Crafting frictionless conversion funnels and high-retention digital experiences." },
    { title: "Conversion Rate Optimization (CRO)", desc: "Hypothesis-driven A/B testing, heatmaps, and landing page performance." },
    { title: "Social Ads & Growth Hacking", desc: "Multi-channel paid acquisition across Google Ads, Meta Ads, LinkedIn Ads." },
    { title: "CRM & Customer Retention", desc: "Automated lifecycle funnels with HubSpot, Intercom, Salesforce & email nurturing." }
  ],

  toolStack: {
    seo: ["SEMrush", "Ahrefs", "MOZ", "Deepcrawl", "Majestic", "Google Search Console"],
    analytics: ["Google Analytics 4", "Google Tag Manager", "BigQuery", "Mixpanel", "Amplitude", "Matomo"],
    ads: ["Google Ads (Search/Display/App)", "Meta Ads Manager", "LinkedIn Ads", "TikTok Ads"],
    automation: ["HubSpot", "Salesforce", "Intercom", "Infusionsoft", "Zapier"],
    development: ["JavaScript / TypeScript", "PHP", "Laravel", "Vue.js", "React", "Astro", "Tailwind CSS", "MySQL", "Git", "REST APIs"],
    workflow: ["Jira", "Asana", "Trello", "Notion", "Figma"]
  },

  experiences: [
    {
      id: "gama-abyakta",
      role: "Digital Marketing Lead",
      company: "PT Gama Abyakta Sejahtera",
      period: "June 2025 – July 2026",
      type: "growth",
      featured: true,
      skills: ["SEO", "Google Ads", "Technical Strategy", "Attribution Systems", "Lead Gen"],
      responsibilities: [
        "Develop and execute a comprehensive technical strategy aligned with business goals, ensuring platform scalability and security.",
        "Managed and maintained company web properties, executing landing page experiments and technical improvements to maximize CRO.",
        "Planned and executed SEO strategies (technical audits, on-page optimization, keyword architecture) boosting organic reach.",
        "Increased qualified B2B/B2C lead generation through strategic SEO and Google Ads campaign optimization.",
        "Enhanced lead tracking accuracy by implementing conversion tracking and marketing attribution systems.",
        "Managed omnichannel customer inquiries (WhatsApp, web forms, inbound calls) and unified CRM handoffs."
      ]
    },
    {
      id: "sabili-id",
      role: "Technology Officer",
      company: "Sabili.id",
      period: "February 2023 – May 2025",
      type: "tech",
      featured: true,
      skills: ["System Architecture", "Scalability", "Data Privacy", "Product Roadmap", "Tech Budgeting"],
      responsibilities: [
        "Led end-to-end technical strategy and platform architecture designed for massive user spikes and ultra-fast page delivery.",
        "Oversaw the end-to-end product development lifecycle from concept to production, maintaining rigorous UI/UX standards.",
        "Designed and enforced strict data security and compliance protocols.",
        "Collaborated across product management, engineering, and digital growth departments to align tech features with market demand.",
        "Managed engineering budgets, optimizing infrastructure costs while boosting platform reliability."
      ]
    },
    {
      id: "ngo-consultant",
      role: "Digital Marketing Consultant",
      company: "2 NGO Institutions",
      period: "December 2022 – Present",
      type: "consulting",
      featured: true,
      skills: ["Omnichannel Strategy", "Team Mentorship", "Data Analytics", "Budget Optimization"],
      responsibilities: [
        "Lead the overarching digital strategy to drive community growth, donor acquisition, and multi-channel engagement.",
        "Supervise and mentor digital staff, content creators, and social media associates.",
        "Engineered standardized data dashboards delivering actionable insights to executive leadership on campaign performance.",
        "Orchestrated high-impact paid and organic social campaigns, maximizing campaign ROAS and philanthropic reach."
      ]
    },
    {
      id: "bunitop",
      role: "Head of Online Marketing",
      company: "PT. Bunitop Indonesia",
      period: "August 2022 – November 2022",
      type: "growth",
      skills: ["E-Commerce", "Influencer Marketing", "Budget Allocation", "Live Shopping"],
      responsibilities: [
        "Orchestrated holistic digital marketing operations across paid ads, influencer partnerships, and marketplace channels.",
        "Managed and deployed performance marketing budgets with tight CAC and ROAS accountability.",
        "Spearheaded creative direction for e-commerce live shopping feeds, social media creatives, and product launch catalogs.",
        "Presented monthly executive growth reports on campaign performance and budget realization to the Brand Director."
      ]
    },
    {
      id: "reactive-global",
      role: "Head of Growth",
      company: "PT. Reactive Teknologi Global",
      period: "December 2018 – July 2022",
      type: "growth",
      featured: true,
      skills: ["Growth Hacking", "A/B Testing", "LTV / CAC Modeling", "MarTech Stack", "Data Inspection"],
      responsibilities: [
        "Spearheaded cross-functional growth strategies across SEO, SEM, performance ads, and lifecycle communications.",
        "Built and cultivated a rigorous culture of experimentation and data inspection across marketing and engineering teams.",
        "Designed revenue and spend models (LTV, CAC, payback periods, ROI) to dynamically allocate budgets across channels.",
        "Owned client A/B testing roadmaps to continuously elevate customer journeys and conversion rates.",
        "Selected, integrated, and scaled the company's full MarTech stack to eliminate data discrepancies."
      ]
    },
    {
      id: "hijup",
      role: "Head of Digital Marketing",
      company: "PT. HIJUP.com",
      period: "September 2018 – November 2018",
      type: "growth",
      skills: ["E-Commerce Scale", "Retention Marketing", "Partner Management", "Ad Agencies"],
      responsibilities: [
        "Structured multi-channel digital acquisition and brand activation across premier fashion e-commerce platforms.",
        "Paced advertising budgets in close coordination with Finance and Sales Ops to ensure aggressive CAC and CPL targets.",
        "Partnered with Analytics and Product Teams to measure incremental lift from growth initiatives and reduce churn."
      ]
    },
    {
      id: "urban-teknologi",
      role: "Digital Marketing Manager",
      company: "PT. Urban Teknologi Indonesia",
      period: "August 2017 – August 2018",
      type: "growth",
      skills: ["Marketing Automation", "Funnel Optimization", "Lead Nurturing", "SEM / SEO"],
      responsibilities: [
        "Planned and executed full-funnel digital campaigns across search, display, social, email, and programmatic channels.",
        "Built automated lead nurturing workflows that reduced sales cycle friction and increased inbound lead close rates.",
        "Conducted multivariate landing page tests in tight alignment with internal development and design teams."
      ]
    },
    {
      id: "printerous",
      role: "SEO Manager",
      company: "PT. Printerous Global",
      period: "January 2016 – October 2016",
      type: "growth",
      skills: ["Technical SEO", "Conversion Pixels", "CRO Tactics", "Competitor Analysis"],
      responsibilities: [
        "Partnered with the CEO to architect and execute the brand's long-term organic search and technical SEO roadmap.",
        "Conducted deep technical site audits for desktop and mobile apps, authoring implementation specs for the engineering team.",
        "Implemented conversion tracking pixels, custom events, and analytics funnels to diagnose and optimize drop-off points."
      ]
    },
    {
      id: "inzpire",
      role: "SEO + SEM Executive",
      company: "PT. Inzpire Technology",
      period: "July 2014 – December 2015",
      type: "growth",
      skills: ["PPC Optimization", "Search Ads", "Ad Copywriting", "Keyword Research"],
      responsibilities: [
        "Managed daily bidding, keyword expansion, and negative keyword filtering for high-volume PPC campaigns.",
        "Formulated keyword-rich content strategies and on-page technical updates to enhance domain authority."
      ]
    },
    {
      id: "wego",
      role: "Web Content Associate",
      company: "PT. Wego Indonesia",
      period: "March 2013 – April 2014",
      type: "growth",
      skills: ["Content Strategy", "Link Building", "SEO Writing", "Travel Tech"],
      responsibilities: [
        "Optimized digital travel editorial and landing pages for organic search visibility and user engagement.",
        "Built authoritative backlink profiles and executed content syndication campaigns."
      ]
    },
    {
      id: "freelance-it",
      role: "Freelance IT Consultant & Systems Architect",
      company: "Independent Practice",
      period: "April 2006 – April 2014",
      type: "tech",
      skills: ["System Design", "Client Advisory", "Network Infrastructure", "Software Delivery"],
      responsibilities: [
        "Analyzed business workflows to architect custom information systems and database structures.",
        "Advised corporate clients on technology roadmaps, hardware deployments, and security precautions."
      ]
    },
    {
      id: "lecturer",
      role: "Lecturer in Computer Science",
      company: "Universitas Bhayangkara Jakarta Raya",
      period: "January 2010 – March 2013",
      type: "academic",
      skills: ["Computer Science", "Higher Education", "Research & Academic Publishing", "Mentoring"],
      responsibilities: [
        "Taught undergraduate computer science courses, algorithms, and practical programming labs.",
        "Published research papers and guided students in software engineering theses."
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    { name: "Google Analytics Individual Qualification (GAIQ)", issuer: "Google Inc.", category: "analytics" },
    { name: "Advanced Google Analytics", issuer: "Google Inc.", category: "analytics" },
    { name: "Google Tag Manager Fundamentals", issuer: "Google Inc.", category: "analytics" },
    { name: "E-commerce Analytics: From Data to Decisions", issuer: "Google Inc.", category: "analytics" },
    { name: "Mobile App Analytics Fundamentals", issuer: "Google Inc.", category: "analytics" },
    { name: "Digital Analytics Fundamentals", issuer: "Google Inc.", category: "analytics" },
    { name: "Google Ads Search Certification", issuer: "Google Inc.", category: "ads" },
    { name: "Google Ads Display Certification", issuer: "Google Inc.", category: "ads" },
    { name: "Google Ads Apps Certification", issuer: "Google Inc.", category: "ads" },
    { name: "Introduction to Universal App Campaigns", issuer: "Google Inc.", category: "ads" },
    { name: "Menjadi Google Cloud Engineer", issuer: "Dicoding Indonesia", category: "cloud" },
    { name: "Belajar Dasar Google Cloud", issuer: "Dicoding Indonesia", category: "cloud" },
    { name: "Data Science on the Google Cloud Platform", issuer: "Qwiklabs Inc.", category: "cloud" },
    { name: "Data Engineering", issuer: "Qwiklabs Inc.", category: "cloud" },
    { name: "BigQuery For Marketing Analysis", issuer: "Qwiklabs Inc.", category: "analytics" },
    { name: "BigQuery For Data Analysis", issuer: "Qwiklabs Inc.", category: "analytics" },
    { name: "BigQuery Basics for Data Analysts", issuer: "Qwiklabs Inc.", category: "analytics" },
    { name: "Belajar Dasar-dasar HTML dan CSS", issuer: "CodePolitan", category: "development" }
  ] as CertificationItem[],

  education: [
    {
      institution: "Universitas Bhayangkara Jakarta Raya",
      degree: "Bachelor Degree (S.T.)",
      major: "Information Technology",
      period: "2004 – 2009",
      gpa: "3.17 / 4.00",
      details: "Comprehensive foundation in computer systems, algorithms, databases, and software architecture."
    },
    {
      institution: "SMK Bina Teknologi Purwokerto",
      degree: "Vocational High School",
      major: "Mechanical Engineering",
      period: "2000 – 2003",
      details: "Strong mechanical reasoning, precision engineering, and analytical problem-solving foundation."
    }
  ] as EducationItem[],

  organizations: [
    {
      role: "Volunteer – Database & Computerization Officer",
      org: "Sejuta Buku Untuk Anak Indonesia",
      year: "2010"
    },
    {
      role: "Chief of Student Gathering",
      org: "Majors Student Gathering of Information Technology, Univ. Bhayangkara",
      year: "2005 – 2006"
    },
    {
      role: "General Secretary",
      org: "Student Gathering of Technical Faculty, Univ. Bhayangkara",
      year: "2005 – 2006"
    }
  ]
};
