export type PortfolioCategory = 'website' | 'study-case' | 'seo' | 'ads';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: string;
  client: string;
  description: {
    id: string;
    en: string;
  };
  thumbnail?: string;
  url?: string;
  techStack?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  year?: string;
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  // ==========================================
  // WEBSITE PROJECTS (8 ITEMS)
  // ==========================================
  {
    id: 'web-fashion-ecommerce',
    category: 'website',
    title: 'High-Performance Fashion E-Commerce Platform',
    client: 'UrbanStyle Indonesia',
    description: {
      id: 'Pengembangan platform e-commerce busana modern dengan arsitektur headless yang cepat, integrasi payment gateway otomatis, serta optimasi Core Web Vitals.',
      en: 'Development of a fast headless modern fashion e-commerce platform featuring automated payment gateway integrations and Core Web Vitals optimization.'
    },
    thumbnail: '/images/portfolio/web-fashion.svg',
    url: 'https://urbanstyle.example.id',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Midtrans API'],
    metrics: [
      { label: 'Page Speed', value: '99/100' },
      { label: 'Conversion Rate', value: '+48%' }
    ],
    year: '2024',
    featured: true
  },
  {
    id: 'web-b2b-logistics-portal',
    category: 'website',
    title: 'Enterprise B2B Logistics & Freight Portal',
    client: 'TransNusantara Cargo',
    description: {
      id: 'Portal pelacakan kargo dan sistem pemesanan kontainer terpadu untuk perusahaan logistik nasional dengan dashboard analitik real-time.',
      en: 'Integrated freight tracking and container booking portal for a national logistics provider featuring real-time analytics dashboards.'
    },
    thumbnail: '/images/portfolio/web-logistics.svg',
    url: 'https://transnusantara.example.com',
    techStack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Tracking Speed', value: '<0.4s' },
      { label: 'Quote Requests', value: '+115%' }
    ],
    year: '2023',
    featured: true
  },
  {
    id: 'web-corporate-fintech-landing',
    category: 'website',
    title: 'Fintech Corporate Website & Interactive ROI Calculator',
    client: 'ModalKarya Solusi',
    description: {
      id: 'Pembaruan desain website korporat tekfin dengan kalkulator pinjaman interaktif dan formulir aplikasi multi-langkah berkoneksi API instan.',
      en: 'Fintech corporate website redesign featuring an interactive loan calculator and multi-step lead capture funnel with instant API sync.'
    },
    thumbnail: '/images/portfolio/web-fintech.svg',
    url: 'https://modalkarya.example.com',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Lead Completion', value: '+74%' },
      { label: 'Bounce Rate', value: '-35%' }
    ],
    year: '2024',
    featured: false
  },
  {
    id: 'web-healthcare-telemedicine',
    category: 'website',
    title: 'Healthcare Clinic Booking & Teleconsultation Web App',
    client: 'Klinik Sehat Utama',
    description: {
      id: 'Aplikasi web reservasi janji temu dokter spesialis dan integrasi riwayat konsultasi medis yang aman serta responsif di semua perangkat.',
      en: 'Doctor appointment reservation and medical consultation history web application optimized for security and responsive user experience.'
    },
    thumbnail: '/images/portfolio/web-healthcare.svg',
    url: 'https://kliniksehat.example.id',
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    metrics: [
      { label: 'Online Bookings', value: '+140%' },
      { label: 'Load Time', value: '0.8s' }
    ],
    year: '2023',
    featured: false
  },
  {
    id: 'web-luxury-property-showcase',
    category: 'website',
    title: 'Luxury Real Estate Showcase & Virtual Tour',
    client: 'Puri Kencana Realty',
    description: {
      id: 'Situs web katalog properti mewah dengan tur virtual interaktif 360°, filter pencarian cerdas, dan integrasi WhatsApp CRM instan.',
      en: 'Luxury property portfolio website with 360° interactive virtual tours, smart search filters, and instant WhatsApp CRM routing.'
    },
    thumbnail: '/images/portfolio/web-property.svg',
    url: 'https://purikencana.example.com',
    techStack: ['Astro', 'Tailwind CSS', 'Alpine.js', 'Leaflet.js'],
    metrics: [
      { label: 'Inquiry Rate', value: '+92%' },
      { label: 'Mobile Performance', value: '98/100' }
    ],
    year: '2022',
    featured: false
  },
  {
    id: 'web-saas-marketing-platform',
    category: 'website',
    title: 'SaaS Marketing Automation Platform Website',
    client: 'AutomateFlow',
    description: {
      id: 'Landing page SaaS dengan animasi interaktif halus, perbandingan paket harga dinamis, dan sistem orientasi pendaftaran pengguna baru.',
      en: 'SaaS marketing website featuring smooth micro-animations, dynamic pricing matrix, and seamless user registration onboarding.'
    },
    thumbnail: '/images/portfolio/web-saas.svg',
    url: 'https://automateflow.example.io',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Trial Signups', value: '+62%' }
    ],
    year: '2022',
    featured: false
  },
  {
    id: 'web-edutech-lms-portal',
    category: 'website',
    title: 'EduTech Academy LMS & Course Catalog',
    client: 'KarierDigital Academy',
    description: {
      id: 'Platform pembelajaran digital untuk kursus karir teknologi dengan video player adaptif, kuis interaktif, dan sertifikat otomatis.',
      en: 'Digital learning platform for tech career bootcamps with adaptive video streaming, interactive quizzes, and automated certificate issuance.'
    },
    thumbnail: '/images/portfolio/web-edutech.svg',
    url: 'https://karierdigital.example.id',
    techStack: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
    metrics: [
      { label: 'Course Completion', value: '+45%' },
      { label: 'Active Students', value: '15,000+' }
    ],
    year: '2021',
    featured: false
  },
  {
    id: 'web-culinary-fnb-multistore',
    category: 'website',
    title: 'F&B Multi-Outlet Ordering & Menu Portal',
    client: 'Nusantara Bistro Chain',
    description: {
      id: 'Sistem web pemesanan meja dan menu digital QR-code untuk jaringan restoran dengan 20+ cabang di berbagai kota besar.',
      en: 'Digital QR-code menu and table booking web system engineered for a multi-outlet restaurant chain across 20+ locations.'
    },
    thumbnail: '/images/portfolio/web-fnb.svg',
    url: 'https://nusantarabistro.example.id',
    techStack: ['Vue.js', 'Tailwind CSS', 'Firebase', 'PWA'],
    metrics: [
      { label: 'Order Processing', value: '-30% Wait Time' },
      { label: 'Daily Active Users', value: '8,500+' }
    ],
    year: '2020',
    featured: false
  },

  // ==========================================
  // STUDY CASE PROJECTS (6 ITEMS)
  // ==========================================
  {
    id: 'case-ecommerce-growth-500',
    category: 'study-case',
    title: 'Traffic Growth 500% & Revenue Scaling dalam 6 Bulan',
    client: 'ModaNusa Apparel',
    description: {
      id: 'Transformasi menyeluruh strategi digital marketing yang menggabungkan restrukturisasi SEO teknis, paid funnel optimasi, dan automasi retensi email.',
      en: 'Full-scale digital growth turnaround combining technical SEO restructuring, paid acquisition funnel overhaul, and automated email retention.'
    },
    url: 'https://example.com/case-studies/modanusa',
    techStack: ['Google Analytics 4', 'BigQuery', 'Looker Studio', 'Klaviyo'],
    metrics: [
      { label: 'Organic Traffic', value: '+520%' },
      { label: 'Gross Revenue', value: '+380%' }
    ],
    year: '2024',
    featured: true
  },
  {
    id: 'case-fintech-p2p-turnaround',
    category: 'study-case',
    title: 'Turnaround Digital Acquisition & CAC Reduction Fintech P2P',
    client: 'DanaAmanah P2P Lending',
    description: {
      id: 'Penyelidikan mendalam atribusi saluran berbayar, eliminasi bot click fraud pada Google Ads, dan pembenahan funnel registrasi pinjaman.',
      en: 'In-depth paid channel attribution audit, click-fraud mitigation on Google Ads, and full friction elimination across borrower application funnels.'
    },
    url: 'https://example.com/case-studies/danaamanah',
    techStack: ['Google Ads', 'AppsFlyer', 'Looker Studio', 'Mixpanel'],
    metrics: [
      { label: 'CAC Reduction', value: '-54%' },
      { label: 'Disbursement Volume', value: 'Rp 45 Miliar' }
    ],
    year: '2023',
    featured: true
  },
  {
    id: 'case-ngo-digital-fundraising',
    category: 'study-case',
    title: 'Digital Fundraising Campaign & Community Turnaround NGO',
    client: 'Yayasan Bina Kasih Nusantara',
    description: {
      id: 'Modernisasi kampanye donasi online melalui Google Ad Grants, optimalisasi UX donasi 1-klik, dan storytelling konten multi-kanal.',
      en: 'Modernization of online donor acquisition leveraging Google Ad Grants, 1-click donation UX redesign, and multi-channel impact storytelling.'
    },
    url: 'https://example.com/case-studies/yayasan-bina-kasih',
    techStack: ['Google Ad Grants', 'GA4', 'Meta Ads', 'WordPress'],
    metrics: [
      { label: 'Online Donations', value: '+260%' },
      { label: 'Recurring Donors', value: '+190%' }
    ],
    year: '2022',
    featured: false
  },
  {
    id: 'case-b2b-saas-pipeline-expansion',
    category: 'study-case',
    title: 'B2B SaaS Sales Pipeline Acceleration Strategy',
    client: 'CloudHR Solutions',
    description: {
      id: 'Penyusunan playbook demand generation inbound B2B dengan konten gated bernilai tinggi, LinkedIn Ads targeting berbasis persona, dan scoring lead otomatis.',
      en: 'Development of an inbound B2B demand generation playbook utilizing high-value gated content, persona-driven LinkedIn campaigns, and lead scoring.'
    },
    url: 'https://example.com/case-studies/cloudhr',
    techStack: ['HubSpot CRM', 'LinkedIn Ads', 'SEMrush', 'GA4'],
    metrics: [
      { label: 'Qualified Leads', value: '+210%' },
      { label: 'Pipeline Value', value: '+$1.2M' }
    ],
    year: '2023',
    featured: false
  },
  {
    id: 'case-automotive-dealership-digitalization',
    category: 'study-case',
    title: 'Omnichannel Automotive Test Drive Booking Transformation',
    client: 'Mitra Motor Distribusi',
    description: {
      id: 'Integrasi kampanye iklan berbasis radius geofencing dengan sistem CRM dealer untuk meningkatkan kehadiran test drive showroom mobil.',
      en: 'Integration of hyper-local radius geofencing ads with dealership CRM systems to drive physical showroom visits and verified test drive bookings.'
    },
    url: 'https://example.com/case-studies/mitra-motor',
    techStack: ['Google Ads', 'Meta Ads', 'Salesforce CRM', 'Google Data Studio'],
    metrics: [
      { label: 'Showroom Visits', value: '+175%' },
      { label: 'Cost Per Test Drive', value: '-38%' }
    ],
    year: '2021',
    featured: false
  },
  {
    id: 'case-fmcg-omnichannel-brand-launch',
    category: 'study-case',
    title: 'Direct-to-Consumer FMCG Brand Launch & Scaled Adoption',
    client: 'NutriDaily Organics',
    description: {
      id: 'Peluncuran merek produk kesehatan baru melalui strategi micro-influencer terukur, TikTok challenge, dan retargeting marketplace terintegrasi.',
      en: 'Go-to-market brand launch for an organic FMCG product utilizing performance-driven micro-influencer campaigns and marketplace retargeting.'
    },
    url: 'https://example.com/case-studies/nutridaily',
    techStack: ['TikTok Ads', 'Meta Ads', 'Shopee Ads', 'GA4'],
    metrics: [
      { label: 'Units Sold (Y1)', value: '250,000+' },
      { label: 'Brand Search Volume', value: '+850%' }
    ],
    year: '2020',
    featured: false
  },

  // ==========================================
  // SEO PROJECTS (8 ITEMS)
  // ==========================================
  {
    id: 'seo-enterprise-audit-recovery',
    category: 'seo',
    title: 'Enterprise SEO Audit & Core Algorithm Update Recovery',
    client: 'MediaWarta Portal',
    description: {
      id: 'Audit komprehensif 100.000+ halaman URL, pembersihan canonical loops, optimasi struktur internal linking, dan pemulihan traffic setelah Google Core Update.',
      en: 'Comprehensive audit of 100k+ pages, canonical loops fix, internal architecture restructuring, and full traffic recovery after Google Core Update.'
    },
    url: 'https://example.com/seo/mediawarta',
    techStack: ['Screaming Frog', 'Google Search Console', 'BigQuery', 'Ahrefs'],
    metrics: [
      { label: 'Organic Traffic', value: '+320%' },
      { label: 'Index Efficiency', value: '+94%' }
    ],
    year: '2024',
    featured: true
  },
  {
    id: 'seo-local-domination-strategy',
    category: 'seo',
    title: 'Multi-Location Local SEO Domination Strategy',
    client: 'DentalCare Network Indonesia',
    description: {
      id: 'Optimalisasi Google Business Profile terintegrasi untuk 35 cabang klinik gigi di 5 kota besar, skema local business terstruktur, dan strategi ulasan otomatis.',
      en: 'Multi-location Google Business Profile optimization across 35 dental clinics in 5 major cities with local schema and automated review generation.'
    },
    url: 'https://example.com/seo/dentalcare',
    techStack: ['Google Business Profile', 'Schema.org', 'BrightLocal', 'Google Search Console'],
    metrics: [
      { label: 'Local Map Pack #1', value: '88% Clinics' },
      { label: 'Phone Inquiries', value: '+215%' }
    ],
    year: '2023',
    featured: true
  },
  {
    id: 'seo-ecommerce-faceted-navigation',
    category: 'seo',
    title: 'E-Commerce Faceted Navigation & Crawl Budget Optimization',
    client: 'ElektronikHub Indonesia',
    description: {
      id: 'Pembenahan parameter faceted filter katalog e-commerce untuk menghemat crawl budget bot Google dan meningkatkan peringkat kategori produk unggulan.',
      en: 'Optimization of faceted category navigation filters to conserve search bot crawl budget and elevate product taxonomy ranking authority.'
    },
    url: 'https://example.com/seo/elektronikhub',
    techStack: ['Screaming Frog', 'Google Search Console', 'SEMrush', 'Next.js'],
    metrics: [
      { label: 'Non-Brand Impressions', value: '+410%' },
      { label: 'Crawl Efficiency', value: '+75%' }
    ],
    year: '2024',
    featured: false
  },
  {
    id: 'seo-fintech-content-hub-silo',
    category: 'seo',
    title: 'Fintech Topic Cluster & Semantic Content Hub Silo',
    client: 'InvestPintar Portal',
    description: {
      id: 'Perancangan arsitektur konten semantik seputar instrumen reksa dana, obligasi, dan saham guna mendominasi SERP finansial berbobot tinggi.',
      en: 'Engineering semantic topic clusters and educational content silos regarding mutual funds and stocks to capture high-intent financial keywords.'
    },
    url: 'https://example.com/seo/investpintar',
    techStack: ['SurferSEO', 'Ahrefs', 'Google Search Console', 'WordPress'],
    metrics: [
      { label: 'Top 3 Keyword Ranks', value: '450+ Keywords' },
      { label: 'Monthly Sessions', value: '1.2M+' }
    ],
    year: '2023',
    featured: false
  },
  {
    id: 'seo-international-multilingual-hreflang',
    category: 'seo',
    title: 'International Multilingual SEO & Hreflang Implementation',
    client: 'BaliExotic Luxury Villas',
    description: {
      id: 'Implementasi penandaan hreflang 4 bahasa (EN, ID, FR, RU), penanganan geo-targeting ccTLD, dan optimasi kecepatan server CDN global.',
      en: 'Technical 4-language hreflang implementation, international ccTLD geo-targeting, and global CDN edge optimization for international tourists.'
    },
    url: 'https://example.com/seo/baliexotic',
    techStack: ['Schema.org', 'Cloudflare CDN', 'Google Search Console', 'Ahrefs'],
    metrics: [
      { label: 'International Clicks', value: '+280%' },
      { label: 'Hreflang Errors', value: '0 Errors' }
    ],
    year: '2022',
    featured: false
  },
  {
    id: 'seo-programmatic-travel-directory',
    category: 'seo',
    title: 'Programmatic SEO Directory for Travel & Attractions',
    client: 'JelajahNusantara',
    description: {
      id: 'Pembangunan 5.000+ landing page destinasi wisata otomatis berbasis database dengan template dinamis berkecepatan tinggi dan data schema kaya.',
      en: 'Automated database-driven generation of 5,000+ destination landing pages with fast schema markup and optimized long-tail query targeting.'
    },
    url: 'https://example.com/seo/jelajahnusantara',
    techStack: ['Next.js', 'PostgreSQL', 'Screaming Frog', 'Schema.org'],
    metrics: [
      { label: 'Long-Tail Keywords', value: '12,000+' },
      { label: 'Organic Visits', value: '+650%' }
    ],
    year: '2021',
    featured: false
  },
  {
    id: 'seo-b2b-enterprise-saas-replatform',
    category: 'seo',
    title: 'Enterprise SaaS Site Migration & SEO Replatforming',
    client: 'WorkSuite Enterprise',
    description: {
      id: 'Strategi pemindahan domain dan CMS tanpa kehilangan trafik organik melalui pemetaan redirect 301 presisi dan uji coba staging mendalam.',
      en: 'Zero-downtime, zero-traffic-loss enterprise website migration with 1:1 redirect mapping and staging indexation safeguards.'
    },
    url: 'https://example.com/seo/worksuite',
    techStack: ['Google Search Console', 'Screaming Frog', 'Ahrefs', 'Nginx'],
    metrics: [
      { label: 'Traffic Retained & Grew', value: '108%' },
      { label: '404 Errors', value: '<0.01%' }
    ],
    year: '2020',
    featured: false
  },
  {
    id: 'seo-core-web-vitals-speed',
    category: 'seo',
    title: 'Technical Speed Optimization & Core Web Vitals Remediation',
    client: 'KabarHarian Media',
    description: {
      id: 'Optimasi performa teknis portal berita: pengurangan render-blocking CSS/JS, optimasi font swapping, dan pemenuhan standar LCP, FID, dan CLS.',
      en: 'Technical performance tune-up for a high-traffic news portal: render-blocking scripts elimination, font swapping, and CWV compliance.'
    },
    url: 'https://example.com/seo/kabarharian',
    techStack: ['Google PageSpeed', 'Lighthouse CI', 'Varnish Cache', 'Web Vitals'],
    metrics: [
      { label: 'Mobile CWV Pass Rate', value: '98%' },
      { label: 'Bounce Rate', value: '-28%' }
    ],
    year: '2019',
    featured: false
  },

  // ==========================================
  // ADS PROJECTS (6 ITEMS)
  // ==========================================
  {
    id: 'ads-google-lead-generation',
    category: 'ads',
    title: 'Google Search & PMax High-Intent Lead Generation',
    client: 'SolusiHukum Partners',
    description: {
      id: 'Kampanye Google Search berbasis Intent Tinggi dan Performance Max dengan konfigurasi Offline Conversion Tracking untuk konsultasi hukum premium.',
      en: 'High-intent Google Search and Performance Max campaigns integrated with offline conversion tracking for corporate legal consultations.'
    },
    url: 'https://example.com/ads/solusihukum',
    techStack: ['Google Ads', 'Google Tag Manager', 'HubSpot CRM', 'GA4'],
    metrics: [
      { label: 'CPA Reduction', value: '-58%' },
      { label: 'Qualified Leads', value: '2,800+' }
    ],
    year: '2024',
    featured: true
  },
  {
    id: 'ads-meta-ecommerce-roas-scaling',
    category: 'ads',
    title: 'Meta Ads E-Commerce ROAS Scaling & Creative Testing',
    client: 'GlowSkin Natural Cosmetics',
    description: {
      id: 'Skalasi anggaran iklan Meta Ads hingga ratusan juta rupiah per bulan dengan framework pengujian materi kreatif dinamis dan CBO teroptimasi.',
      en: 'Scaling Meta Ads monthly spend profitably using dynamic creative testing frameworks and conversion API server-side tracking.'
    },
    url: 'https://example.com/ads/glowskin',
    techStack: ['Meta Ads Manager', 'Meta Conversions API', 'Triple Whale', 'Canva'],
    metrics: [
      { label: 'Blended ROAS', value: '8.5x' },
      { label: 'Attributed Sales', value: 'Rp 3.8 Miliar' }
    ],
    year: '2023',
    featured: true
  },
  {
    id: 'ads-app-install-fintech-google-uac',
    category: 'ads',
    title: 'App Install Scaling Campaign via Google App Campaigns (UAC)',
    client: 'DompetCerdas E-Wallet',
    description: {
      id: 'Akuisisi pengguna aplikasi keuangan aktif bernilai tinggi melalui Google App Campaigns dengan optimasi event in-app first deposit.',
      en: 'High-LTV financial app user acquisition via Google App Campaigns optimized for in-app first deposit and KYC completion events.'
    },
    url: 'https://example.com/ads/dompetcerdas',
    techStack: ['Google Ads', 'AppsFlyer', 'Firebase Analytics', 'BigQuery'],
    metrics: [
      { label: 'App Installs', value: '180,000+' },
      { label: 'Cost Per Deposit', value: '-42%' }
    ],
    year: '2023',
    featured: false
  },
  {
    id: 'ads-tiktok-gen-z-acquisition',
    category: 'ads',
    title: 'TikTok Ads Native UGC Campaign for D2C Fashion',
    client: 'StreetVibe Apparel',
    description: {
      id: 'Peluncuran kampanye iklan TikTok native menggunakan konten UGC autentik dan Spark Ads yang menghasilkan viralitas penjualan instan di TikTok Shop.',
      en: 'Native TikTok advertising campaign leveraging authentic creator UGC and Spark Ads driving direct checkouts in TikTok Shop.'
    },
    url: 'https://example.com/ads/streetvibe',
    techStack: ['TikTok Ads Manager', 'CapCut Pro', 'TikTok Events API', 'GA4'],
    metrics: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'CTR', value: '3.8%' }
    ],
    year: '2022',
    featured: false
  },
  {
    id: 'ads-linkedin-b2b-enterprise-abm',
    category: 'ads',
    title: 'LinkedIn Account-Based Marketing (ABM) for Enterprise Cloud',
    client: 'InovasiCloud Solusindo',
    description: {
      id: 'Kampanye ABM presisi menargetkan para CIO dan CTO perusahaan konglomerasi Indonesia dengan konten whitepaper dan lead generation forms native.',
      en: 'Precision Account-Based Marketing campaign targeting enterprise CTOs and CIOs with high-value technical whitepapers and native Lead Gen Forms.'
    },
    url: 'https://example.com/ads/inovasicloud',
    techStack: ['LinkedIn Ads', 'LinkedIn Insight Tag', 'Salesforce CRM', 'Clearbit'],
    metrics: [
      { label: 'Form Fill Rate', value: '14.2%' },
      { label: 'Deals Closed', value: '8 Deals' }
    ],
    year: '2021',
    featured: false
  },
  {
    id: 'ads-retargeting-omnichannel-funnel',
    category: 'ads',
    title: 'Cross-Platform Dynamic Retargeting & Cart Recovery',
    client: 'MegaFurniture Indonesia',
    description: {
      id: 'Penyiapan funnel penargetan ulang multi-saluran terintegrasi (Google Display, Meta Catalog, dan YouTube Video) untuk mengatasi cart abandonment.',
      en: 'Implementation of cross-platform dynamic retargeting across Google Display, Meta Catalog, and YouTube to recover abandoned furniture carts.'
    },
    url: 'https://example.com/ads/megafurniture',
    techStack: ['Google Ads', 'Meta Ads', 'Google Tag Manager', 'Klaviyo'],
    metrics: [
      { label: 'Cart Recovery', value: '+34%' },
      { label: 'Incremental ROAS', value: '9.8x' }
    ],
    year: '2020',
    featured: false
  }
];
