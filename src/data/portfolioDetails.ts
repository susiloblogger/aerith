export interface ProjectDetailContent {
  overview: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  results: {
    highlight: string;
    description: string;
  }[];
  keyLearnings: string;
}

export interface ProjectDetail {
  id: string;
  role: { id: string; en: string };
  timeline: { id: string; en: string };
  industry: { id: string; en: string };
  content: {
    id: ProjectDetailContent;
    en: ProjectDetailContent;
  };
}

export const portfolioDetails: Record<string, ProjectDetail> = {
  // ==========================================
  // STUDY CASE PROJECTS (6 ITEMS)
  // ==========================================
  'case-ecommerce-growth-500': {
    id: 'case-ecommerce-growth-500',
    role: {
      id: 'Lead Growth Strategist & Full-Funnel Consultant',
      en: 'Lead Growth Strategist & Full-Funnel Consultant'
    },
    timeline: {
      id: '6 Bulan (Januari - Juni 2024)',
      en: '6 Months (January - June 2024)'
    },
    industry: {
      id: 'E-Commerce Fashion & Retail',
      en: 'Fashion & Retail E-Commerce'
    },
    content: {
      id: {
        overview: 'ModaNusa Apparel menghadapi stagnasi pertumbuhan omset pasca-pandemi dan lonjakan biaya iklan di platform berbayar. Kami merancang strategi turnaround holistik yang menyatukan optimasi SEO teknis, restrukturisasi paid funnel berbasis First-Party Data, dan automasi lifecycle email untuk mendongkrak retensi pelanggan.',
        challenge: 'Biaya akuisisi pelanggan (CAC) meningkat sebesar 68% dalam 12 bulan terakhir akibat ketergantungan ekstrem pada platform iklan Meta dan Shopee. Struktur situs e-commerce memiliki ribuan halaman faceted navigation yang memperlambat crawl budget bot Google, sementara customer database tidak dimonetisasi secara otomatis.',
        strategy: [
          'Audit dan eliminasi kanibalisasi kata kunci serta indeksasi filter katalog faceted navigation.',
          'Peralihan dari optimasi belanja tunggal menjadi framework Customer Lifetime Value (LTV) melalui segmentasi RFM.',
          'Konfigurasi integrasi Meta Conversions API (CAPI) server-side untuk memulihkan akurasi sinyal atribusi.',
          'Pembangunan 7 automated email flow (welcome, cart abandonment, browse abandonment, post-purchase winback).'
        ],
        execution: [
          'Memetakan parameter URL katalog dengan rel="canonical" presisi dan robot.txt directive yang menghemat 75% crawl budget Googlebot.',
          'Mengimplementasikan server container Google Tag Manager di Cloud Run untuk pengiriman event server-to-server CAPI.',
          'Membangun dashboard atribusi multi-touch real-time di Looker Studio yang mengombinasikan data GA4, BigQuery, dan Shopify.',
          'Meluncurkan split-test materi iklan dinamis (DCO) dengan 40+ variasi angle konten berbasis creator UGC autentik.'
        ],
        results: [
          {
            highlight: '+520% Organic Traffic',
            description: 'Trafik pencarian organik non-brand melonjak dari 15.000 menjadi lebih dari 93.000 kunjungan bulanan dalam tempo 6 bulan.'
          },
          {
            highlight: '+380% Gross Revenue',
            description: 'Total omset penjualan online bulanan naik hampir 4x lipat dengan kontribusi email marketing mencapai 28% dari total revenue.'
          },
          {
            highlight: '-42% Blended CAC',
            description: 'Efisiensi bauran saluran pemasaran berhasil menekan biaya perolehan pelanggan baru secara signifikan.'
          }
        ],
        keyLearnings: 'Ketergantungan berlebih pada paid ads dapat dimitigasi secara berkelanjutan ketika SEO teknis dan automasi retensi email diintegrasikan ke dalam satu arsitektur funnel pertumbuhan data terpadu.'
      },
      en: {
        overview: 'ModaNusa Apparel faced post-pandemic revenue stagnation and skyrocketing advertising costs across paid channels. We engineered a comprehensive turnaround strategy combining technical SEO restructuring, paid acquisition funnel overhaul, and automated email lifecycle retention.',
        challenge: 'Customer acquisition cost (CAC) surged by 68% year-over-year due to heavy reliance on Meta and marketplace ads. The catalog architecture suffered from severe faceted navigation index bloating that depleted Googlebot crawl budget, while existing customer databases remained unmonetized.',
        strategy: [
          'Audit and resolve keyword cannibalization and faceted navigation catalog index bloat.',
          'Transition from single-purchase ad optimization to an RFM segmentation Customer Lifetime Value (LTV) model.',
          'Implement server-side Meta Conversions API (CAPI) to restore conversion attribution accuracy.',
          'Deploy 7 automated lifecycle email flows (welcome series, cart recovery, browse abandon, post-purchase winback).'
        ],
        execution: [
          'Mapped faceted filter parameters with canonical tags and strict robots directives, conserving 75% of crawl budget.',
          'Configured server-side Google Tag Manager on Cloud Run for reliable server-to-server event telemetry.',
          'Engineered a multi-touch attribution dashboard in Looker Studio integrating GA4, BigQuery, and Shopify webhooks.',
          'Launched dynamic creative optimization (DCO) testing with 40+ UGC creative angles across cold and warm audiences.'
        ],
        results: [
          {
            highlight: '+520% Organic Traffic',
            description: 'Non-brand organic search sessions scaled from 15,000 to over 93,000 monthly visits within 6 months.'
          },
          {
            highlight: '+380% Gross Revenue',
            description: 'Total monthly e-commerce gross sales quadrupled, with email automation contributing 28% of total revenue.'
          },
          {
            highlight: '-42% Blended CAC',
            description: 'Cross-channel efficiency substantially lowered new customer acquisition costs.'
          }
        ],
        keyLearnings: 'Over-reliance on paid acquisition can be sustainably cured when technical search architecture and automated retention workflows are engineered together as a synchronized growth engine.'
      }
    }
  },

  'case-fintech-p2p-turnaround': {
    id: 'case-fintech-p2p-turnaround',
    role: {
      id: 'Growth Marketing Lead & Attribution Architect',
      en: 'Growth Marketing Lead & Attribution Architect'
    },
    timeline: {
      id: '8 Bulan (Mei - Desember 2023)',
      en: '8 Months (May - December 2023)'
    },
    industry: {
      id: 'Fintech P2P Lending & Microfinance',
      en: 'Fintech P2P Lending & Microfinance'
    },
    content: {
      id: {
        overview: 'DanaAmanah adalah platform peer-to-peer lending berizin OJK yang mengalami pembengkakan biaya akuisisi peminjam mikro produktif. Melalui penyelidikan atribusi berbayar mendalam, proteksi bot fraud, dan restrukturisasi funnel aplikasi, kami membalikkan unit ekonomi akuisisi pinjaman.',
        challenge: 'Tingginya angka pengunduh aplikasi yang tidak menyelesaikan proses verifikasi KYC dan tingginya biaya per funded borrower (CAC > Rp 320.000). Selain itu, terdeteksi aktivitas click-fraud pada kampanye Google Search kompetitif dari jaringan bot.',
        strategy: [
          'Pembersihan invalid traffic pada kampanye Google Search melalui integrasi IP blacklisting dan rule bidding ketat.',
          'Pengalihan optimasi Google UAC dari "App Install" murni ke event hilir "KYC Approval & First Disbursement".',
          'Penyederhanaan formulir pengajuan pinjaman dari 6 tahapan panjang menjadi 3 mikro-langkah responsif.',
          'Pengembangan model skor lead prediktif menggunakan webhook CRM untuk menyaring peminjam berkualitas tinggi.'
        ],
        execution: [
          'Memasang software fraud detection dan mengintegrasikannya dengan AppsFlyer Protect360 untuk menyaring klik palsu secara real-time.',
          'Melatih Smart Bidding Google Ads menggunakan Offline Conversion Import (OCI) yang diunggah otomatis setiap malam via Cloud Functions.',
          'Melakukan A/B testing form registrasi berbasis UX mobile-first yang memangkas waktu pengisian sebesar 45%.',
          'Membangun cohort analysis di Mixpanel untuk melacak retensi siklus pinjaman berulang (repeat borrowers).'
        ],
        results: [
          {
            highlight: '-54% CAC Reduction',
            description: 'Biaya akuisisi peminjam terverifikasi turun dari Rp 320.000 menjadi Rp 147.000 per nasabah.'
          },
          {
            highlight: 'Rp 45 Miliar Disbursement',
            description: 'Total volume penyaluran pembiayaan produktif berhasil menembus Rp 45 miliar dalam periode kampanye.'
          },
          {
            highlight: '+82% KYC Completion Rate',
            description: 'Tingkat penyelesaian verifikasi identitas meningkat tajam berkat alur onboarding yang disederhanakan.'
          }
        ],
        keyLearnings: 'Dalam industri fintech dengan regulasi ketat, mengoptimalkan kampanye pada event transaksi akhir (disbursement) jauh lebih efektif dibanding mengejar volume download aplikasi semata.'
      },
      en: {
        overview: 'DanaAmanah, an OJK-licensed peer-to-peer lending platform, suffered from inflated borrower acquisition costs. Through deep attribution forensics, click-fraud mitigation, and applicant onboarding funnel redesign, we restored healthy unit economics.',
        challenge: 'A low KYC verification pass rate and excessive cost per funded borrower (CAC > Rp 320,000) plagued growth. In addition, aggressive click-fraud was detected on competitive Google Search terms from automated scraper bots.',
        strategy: [
          'Eliminate invalid search click traffic via IP exclusion automation and strict negative keyword hygiene.',
          'Pivot Google App Campaigns from top-of-funnel installs to deep in-app events: "KYC Verified & First Loan Disbursed".',
          'Redesign application UX from a tedious 6-screen flow into a streamlined 3-step progressive disclosure model.',
          'Implement predictive credit lead scoring via CRM webhooks to prioritize high-intent borrowers.'
        ],
        execution: [
          'Integrated AppsFlyer Protect360 to filter fraudulent ad traffic in real-time before conversion budgets were drained.',
          'Implemented automated daily Offline Conversion Imports (OCI) into Google Ads via GCP Cloud Functions.',
          'Conducted iterative mobile-first form UX experiments that trimmed onboarding completion time by 45%.',
          'Built cohort retention tracking in Mixpanel to observe repeat loan cycle behaviors and loan book health.'
        ],
        results: [
          {
            highlight: '-54% CAC Reduction',
            description: 'Cost per funded borrower dropped from Rp 320,000 to Rp 147,000 per verified user.'
          },
          {
            highlight: 'Rp 45 Billion Disbursed',
            description: 'Total volume of productive micro-loans disbursed reached Rp 45 billion over the campaign timeframe.'
          },
          {
            highlight: '+82% KYC Completion',
            description: 'Identity verification completion rates rose significantly due to simplified document capture UI.'
          }
        ],
        keyLearnings: 'In regulated financial services, bidding on downstream business events (actual disbursements) rather than top-funnel vanity metrics produces vastly superior capital efficiency.'
      }
    }
  },

  'case-ngo-digital-fundraising': {
    id: 'case-ngo-digital-fundraising',
    role: {
      id: 'Digital Transformation & Ad Grants Strategist',
      en: 'Digital Transformation & Ad Grants Strategist'
    },
    timeline: {
      id: '12 Bulan (Januari - Desember 2022)',
      en: '12 Months (January - December 2022)'
    },
    industry: {
      id: 'Non-Profit & Philanthropic Foundation',
      en: 'Non-Profit & Philanthropic Foundation'
    },
    content: {
      id: {
        overview: 'Yayasan Bina Kasih Nusantara membutuhkan transformasi penggalangan dana digital untuk mengurangi ketergantungan pada donasi tatap muka konvensional. Kami memaksimalkan hibah Google Ad Grants senilai $10.000/bulan dan merombak halaman donasi online.',
        challenge: 'Akun Google Ad Grants sering terkena suspensi kepatuhan (CTR < 5% requirement), halaman donasi lambat dan tidak responsif pada perangkat mobile, serta tidak adanya skema donasi bulanan rutin (recurring donation).',
        strategy: [
          'Audit dan reaktivasi akun Google Ad Grants dengan arsitektur kata kunci high-intent yang mematuhi standar Google for Nonprofits.',
          'Redesain halaman donasi berbasis storytelling visual emosional dan integrasi sistem pembayaran QRIS & Virtual Account instan.',
          'Peluncuran kampanye donor rutin bulanan dengan opsi debet otomatis dan laporan dampak berkala via WhatsApp.',
          'Pengembangan konten artikel edukasi berbasis SEO mengenai program kemanusiaan dan pendidikan anak yatim.'
        ],
        execution: [
          'Menata ulang struktur kampanye Ad Grants dengan 15+ ad group spesifik bertarget CTR > 8.5% untuk menjaga kepatuhan.',
          'Membangun widget donasi 1-klik yang mendukung QRIS dinamis dan verifikasi donasi otomatis tanpa perlu konfirmasi manual.',
          'Mengatur alur automasi pesan terima kasih dan laporan transparansi penyaluran donasi melalui WhatsApp Business API.',
          'Melatih tim internal yayasan dalam penulisan konten SEO dan operasional pelaporan analitik GA4.'
        ],
        results: [
          {
            highlight: '+260% Online Donations',
            description: 'Total perolehan donasi digital meningkat lebih dari 3,5 kali lipat dibanding tahun sebelumnya.'
          },
          {
            highlight: '+190% Recurring Donors',
            description: 'Basis donatur rutin bulanan bertambah dari 240 menjadi lebih dari 700 donatur aktif.'
          },
          {
            highlight: '$120,000/Year Grant Value',
            description: 'Memaksimalkan penyerapan dana hibah Google Ad Grants hingga 94% kapasitas bulanan secara legal dan patuh.'
          }
        ],
        keyLearnings: 'Transparansi instan dan kemudahan pembayaran seluler (QRIS) merupakan dua faktor paling determinan dalam meningkatkan konversi donasi digital organisasi non-profit.'
      },
      en: {
        overview: 'Yayasan Bina Kasih Nusantara required a digital fundraising overhaul to reduce reliance on conventional face-to-face donor drives. We maximized the $10,000/month Google Ad Grants allocation and overhauled their online donation funnel.',
        challenge: 'The organization’s Ad Grants account faced chronic compliance suspensions (due to the sub-5% CTR rule), donation landing pages had severe mobile friction, and no recurring donor retention mechanism existed.',
        strategy: [
          'Audit and rehabilitate Google Ad Grants structure with high-intent keyword groupings complying with Google for Nonprofits rules.',
          'Redesign landing pages emphasizing emotional impact storytelling and frictionless instant QRIS/Virtual Account payments.',
          'Launch a monthly recurring donor program with automated renewal notifications and impact reporting via WhatsApp.',
          'Publish topical SEO-optimized articles addressing educational equity, orphan care, and social humanitarian aid.'
        ],
        execution: [
          'Restructured Ad Grants accounts into 15+ hyper-specific ad groups maintaining an 8.5%+ CTR safety margin.',
          'Engineered a 1-click dynamic QRIS donation module with zero-manual-slip verification.',
          'Integrated WhatsApp Business API webhooks to send automated instant receipts and quarterly photo-documented impact reports.',
          'Trained the internal foundation team in evergreen SEO content writing and GA4 donor analytics interpretation.'
        ],
        results: [
          {
            highlight: '+260% Online Donations',
            description: 'Digital fundraising proceeds grew 3.6x compared to the previous calendar year.'
          },
          {
            highlight: '+190% Recurring Donors',
            description: 'Active recurring donor roster expanded from 240 to over 700 steady donors.'
          },
          {
            highlight: '$120,000/Yr Ad Value',
            description: 'Maintained 94% monthly budget utilization of Google Ad Grants without a single compliance infraction.'
          }
        ],
        keyLearnings: 'Instant financial transparency and frictionless mobile payment rails are the single most influential determinants in scaling philanthropic conversion rates.'
      }
    }
  },

  'case-b2b-saas-pipeline-expansion': {
    id: 'case-b2b-saas-pipeline-expansion',
    role: {
      id: 'B2B Demand Generation & Inbound Lead Architect',
      en: 'B2B Demand Generation & Inbound Lead Architect'
    },
    timeline: {
      id: '9 Bulan (Maret - November 2023)',
      en: '9 Months (March - November 2023)'
    },
    industry: {
      id: 'Enterprise B2B SaaS & HR Tech',
      en: 'Enterprise B2B SaaS & HR Tech'
    },
    content: {
      id: {
        overview: 'CloudHR Solutions adalah platform Human Capital Management (HCM) berbasis cloud untuk korporasi menengah ke atas. Kami membangun mesin demand generation inbound yang memadukan konten gated bernilai tinggi, LinkedIn Ads berbasis peran pengambil keputusan, dan automasi pipeline HubSpot CRM.',
        challenge: 'Siklus penjualan enterprise yang panjang (6-9 bulan) dan rendahnya volume SQL (Sales Qualified Leads). Tim sales menghabiskan terlalu banyak waktu mengejar lead mentah yang tidak memiliki wewenang anggaran belanja IT.',
        strategy: [
          'Penyusunan riset industri eksklusif: "Indonesia HR Benchmark & Payroll Salary Report" sebagai lead magnet utama.',
          'Penargetan LinkedIn Ads presisi pada kriteria: Head of HR, VP People, dan CFO pada perusahaan dengan 200-5.000 karyawan.',
          'Pembuatan matriks penilaian lead (lead scoring model) di HubSpot CRM berbasis demografi dan tingkat keterlibatan konten.',
          'Penyusunan alur email nurturing bertahap yang mendemonstrasikan ROI efisiensi kalkulasi PPh 21 dan absensi multi-cabang.'
        ],
        execution: [
          'Merancang landing page interaktif dengan kalkulator penghematan biaya HR yang menghasilkan tingkat konversi lead 22%.',
          'Menggunakan LinkedIn Sponsored InMail dan Lead Gen Forms yang terhubung langsung dengan webhook HubSpot via Zapier/Make.',
          'Menerapkan alur otomatisasi pengalihan lead dengan skor > 80 langsung ke kalender demo tim Account Executive.',
          'Menganalisis performa pipeline bulanan untuk mengeliminasi friksi drop-off antara tahap demo dan penawaran proposal.'
        ],
        results: [
          {
            highlight: '+210% Qualified Leads',
            description: 'Volume Sales Qualified Leads (SQL) per kuartal meningkat lebih dari 3 kali lipat dengan profil perusahaan terverifikasi.'
          },
          {
            highlight: '+$1.2M Pipeline Value',
            description: 'Menambahkan potensi nilai kontrak tahunan (ARR Pipeline) baru senilai lebih dari $1.200.000 USD.'
          },
          {
            highlight: '-35% Sales Cycle Duration',
            description: 'Durasi rata-rata siklus penutupan kesepakatan enterprise memendek dari 8 bulan menjadi 5,2 bulan.'
          }
        ],
        keyLearnings: 'Pada penjualan software enterprise bernilai tinggi, data riset industri yang orisinal dan kalkulator ROI terbukti jauh lebih kuat memicu demo request daripada sekadar presentasi fitur produk.'
      },
      en: {
        overview: 'CloudHR Solutions is a cloud-native Human Capital Management (HCM) platform catering to mid-market and enterprise employers. We engineered an inbound demand engine integrating proprietary benchmark reports, targeted LinkedIn ABM, and HubSpot pipeline routing.',
        challenge: 'A protracted 6 to 9-month sales cycle and scarcity of sales-qualified leads (SQLs). Account executives squandered significant capacity chasing contacts who lacked IT budgetary authority.',
        strategy: [
          'Author and produce an authoritative industry report: "Indonesia HR Benchmark & Payroll Salary Report" as primary gated asset.',
          'Deploy precision LinkedIn Ads targeting Heads of People, HR Directors, and CFOs at companies with 200–5,000 headcount.',
          'Develop an objective HubSpot lead scoring matrix factoring company size, job seniority, and interaction depth.',
          'Engineer automated email nurturing sequences addressing local tax calculation (PPh 21) compliance and operational ROI.'
        ],
        execution: [
          'Constructed an interactive HR cost savings calculator landing page delivering an exceptional 22% conversion rate.',
          'Integrated LinkedIn Lead Gen Forms directly into HubSpot CRM with real-time enrichment via Clearbit and webhooks.',
          'Configured instant automated calendar scheduling for leads surpassing the 80-point qualification threshold.',
          'Audited monthly sales opportunity stages to identify and resolve negotiation friction points.'
        ],
        results: [
          {
            highlight: '+210% Qualified Leads',
            description: 'Quarterly Sales Qualified Leads (SQL) surged by 210% with verified enterprise credentials.'
          },
          {
            highlight: '+$1.2M Pipeline Added',
            description: 'Generated over $1.2 million in qualified new annual recurring revenue (ARR) pipeline opportunities.'
          },
          {
            highlight: '-35% Deal Velocity',
            description: 'Enterprise closing duration shortened from 8 months down to 5.2 months on average.'
          }
        ],
        keyLearnings: 'In enterprise B2B sales, defensible original data benchmarks and interactive ROI estimators drive qualified pipeline far more effectively than standard product demo collateral.'
      }
    }
  },

  'case-automotive-dealership-digitalization': {
    id: 'case-automotive-dealership-digitalization',
    role: {
      id: 'Omnichannel Growth & Performance Consultant',
      en: 'Omnichannel Growth & Performance Consultant'
    },
    timeline: {
      id: '7 Bulan (Juni - Desember 2021)',
      en: '7 Months (June - December 2021)'
    },
    industry: {
      id: 'Automotive Dealership & Distribution',
      en: 'Automotive Dealership & Distribution'
    },
    content: {
      id: {
        overview: 'Mitra Motor Distribusi mengoperasikan jaringan dealer resmi otomotif di Jabodetabek. Kami mengintegrasikan kampanye iklan digital berbasis radius geofencing dengan sistem CRM penjualan untuk mendorong kunjungan langsung ke showroom dan reservasi test drive terverifikasi.',
        challenge: 'Tingginya kebocoran lead dari iklan online ke showroom fisik, di mana wiraniaga dealer tidak dapat melacak asal mula calon pembeli dan biaya per lead online terus meningkat tanpa kepastian penjualan unit mobil.',
        strategy: [
          'Penerapan radius targeting Google Search & Meta Ads 5-10 km di sekitar 12 lokasi fisik showroom.',
          'Penyediaan formulir reservasi jadwal test drive instan dengan pemilihan unit kendaraan dan dealer terdekat.',
          'Integrasi webhook formulir ke CRM Salesforce dealer dan notifikasi WhatsApp instan ke sales counter jaga.',
          'Implementasi Offline Conversion Tracking untuk mencocokkan data Surat Pemesanan Kendaraan (SPK) dengan klik iklan.'
        ],
        execution: [
          'Membuat kampanye Google Performance Max untuk Local Store Visits dengan aset gambar showroom dan penawaran kredit berkala.',
          'Membangun sistem QR code unik pada saat registrasi test drive di showroom untuk merekonsiliasi data digital ke fisik.',
          'Menyusun insentif internal dan dashboard pemantauan SLA follow-up wiraniaga (< 15 menit setelah formulir dikirim).',
          'Mengoptimalkan Google Business Profile untuk ke-12 showroom dengan info ketersediaan unit test drive terkini.'
        ],
        results: [
          {
            highlight: '+175% Showroom Visits',
            description: 'Kunjungan fisik calon pembeli ke showroom dealer melonjak tajam dengan catatan reservasi digital terverifikasi.'
          },
          {
            highlight: '-38% Cost Per Test Drive',
            description: 'Efisiensi penargetan berbasis geofencing memangkas biaya per reservasi test drive secara nyata.'
          },
          {
            highlight: '142 Unit Mobil Terjual',
            description: 'Penjualan unit mobil berhasil diatribusikan langsung dari kampanye digital selama periode program.'
          }
        ],
        keyLearnings: 'Kunci keberhasilan kampanye retail otomotif terletak pada kecepatan SLA respon sales counter dan rekonsiliasi data konversi offline ke mesin algoritma iklan digital.'
      },
      en: {
        overview: 'Mitra Motor Distribusi operates an authorized automotive dealership network across Greater Jakarta. We unified hyper-local geofenced advertising with dealership CRM workflows to maximize verified showroom test drive appointments.',
        challenge: 'A massive attribution void separated online impressions from physical dealer foot traffic, leading to untracked walk-ins and escalating cost per inquiry without closing validation.',
        strategy: [
          'Deploy tight 5-10 km radius targeting around 12 showroom branches across Google Search and Meta Ads.',
          'Build an online test drive scheduling flow featuring instant vehicle trim and preferred branch selector.',
          'Integrate CRM webhooks with automated WhatsApp alerts dispatched to on-duty sales floor advisors.',
          'Implement Google Ads Offline Conversion Imports matching purchase vehicle order slips (SPK) back to ad clicks.'
        ],
        execution: [
          'Configured Google Performance Max for store goals highlighting current promotional leasing rates.',
          'Introduced custom QR verification upon showroom arrival to cleanly reconcile digital reservations with physical check-ins.',
          'Enforced an internal sales SLA dashboard ensuring inbound leads were contacted within 15 minutes of submission.',
          'Optimized Google Business Profiles across all 12 dealership locations with active vehicle inventory attributes.'
        ],
        results: [
          {
            highlight: '+175% Showroom Visits',
            description: 'Verified physical showroom traffic increased by 175% across the 12 participating locations.'
          },
          {
            highlight: '-38% Cost Per Test Drive',
            description: 'Geofenced precision reduced acquisition expenses per confirmed test drive appointment.'
          },
          {
            highlight: '142 Vehicles Sold',
            description: 'Attributed directly to tracked omnichannel digital campaigns during the 7-month initiative.'
          }
        ],
        keyLearnings: 'The decisive lever in physical retail transformation is sales advisory response velocity (<15 minutes) coupled with closed-loop offline conversion feeding into ad bidding models.'
      }
    }
  },

  'case-fmcg-omnichannel-brand-launch': {
    id: 'case-fmcg-omnichannel-brand-launch',
    role: {
      id: 'Performance Marketing Strategist & Launch Director',
      en: 'Performance Marketing Strategist & Launch Director'
    },
    timeline: {
      id: '6 Bulan (Juli - Desember 2020)',
      en: '6 Months (July - December 2020)'
    },
    industry: {
      id: 'FMCG & Organic Health Nutrition',
      en: 'FMCG & Organic Health Nutrition'
    },
    content: {
      id: {
        overview: 'NutriDaily Organics adalah brand makanan sehat organik yang meluncurkan rangkaian produk sereal dan madu murni. Kami mengeksekusi strategi peluncuran pasar multi-kanal terintegrasi yang menggabungkan influencer UGC, paid media, dan retargeting marketplace.',
        challenge: 'Sebagai brand pendatang baru di pasar yang didominasi oleh pemain FMCG multinasional besar, NutriDaily tidak memiliki pengenalan merek awal dan menghadapi persaingan harga yang ketat di rak marketplace.',
        strategy: [
          'Kolaborasi terarah dengan 120+ micro-influencer gizi dan kebugaran untuk menghasilkan konten testimoni autentik.',
          'Peluncuran kampanye TikTok Ads berbasis konten edukasi sarapan sehat yang diarahkan ke official store marketplace.',
          'Pemanfaatan Shopee Ads dan Tokopedia Ads untuk mendominasi kata kunci pencarian kategori "sarapan sehat" & "madu organik".',
          'Penerapan strategi bundling produk bundling dan voucher gratis ongkir untuk memaksimalkan Average Order Value (AOV).'
        ],
        execution: [
          'Mendistribusikan sampel produk ke influencer dengan panduan konten tanpa skrip kaku guna menghasilkan review organik yang kredibel.',
          'Membuat variasi iklan video TikTok berformat vertikal dengan pengait (hook) 3 detik pertama yang menarik perhatian.',
          'Mengatur penargetan ulang audiens video viewer ke halaman etalase diskon khusus di Shopee dan Tokopedia.',
          'Memantau performa harian inventaris stok produk guna mencegah kekosongan barang saat lonjakan pesanan kilat.'
        ],
        results: [
          {
            highlight: '250,000+ Units Sold',
            description: 'Lebih dari seperempat juta unit produk terjual habis dalam 6 bulan pertama sejak peluncuran merek.'
          },
          {
            highlight: '+850% Brand Search',
            description: 'Volume pencarian nama brand NutriDaily di Google dan Shopee meningkat lebih dari 8,5 kali lipat.'
          },
          {
            highlight: 'Top 3 Category Rank',
            description: 'Berhasil menembus peringkat 3 besar produk terlaris kategori sarapan organik di marketplace nasional.'
          }
        ],
        keyLearnings: 'Kombinasi konten testimoni micro-influencer yang tampak natural dan strategi retargeting promosi marketplace menghasilkan tingkat konversi pembelian produk FMCG baru yang jauh lebih tinggi daripada iklan korporat formal.'
      },
      en: {
        overview: 'NutriDaily Organics is a health-food brand launching a line of organic granolas and pure raw honeys. We executed an integrated multi-channel go-to-market rollout combining authentic creator UGC, paid social acceleration, and marketplace search monetization.',
        challenge: 'Entering a crowded shelf dominated by established multinational FMCG conglomerates, the nascent brand possessed zero consumer awareness and faced steep shelf competition.',
        strategy: [
          'Coordinate seeding campaigns across 120+ vetted fitness and nutrition micro-creators for organic testimonials.',
          'Deploy TikTok Spark Ads spotlighting practical morning breakfast routines linked to marketplace storefronts.',
          'Monopolize high-intent category search terms on Shopee and Tokopedia Ads ("organic breakfast", "raw honey").',
          'Structure introductory product bundles paired with free shipping tiers to maximize Average Order Value (AOV).'
        ],
        execution: [
          'Distributed unscripted product seeding packages encouraging authentic culinary use cases and honest taste reviews.',
          'Produced high-velocity vertical TikTok video assets engineered with potent 3-second narrative hooks.',
          'Retargeted engaged video audiences with tailored marketplace promotion voucher ads.',
          'Synchronized real-time warehouse inventory forecasting to avert stockout penalties during algorithmic demand spikes.'
        ],
        results: [
          {
            highlight: '250,000+ Units Sold',
            description: 'Over a quarter-million product packages sold out within the initial 6 months post-launch.'
          },
          {
            highlight: '+850% Brand Searches',
            description: 'Branded search volume on Google and marketplace search engines surged by 850%.'
          },
          {
            highlight: 'Top 3 Category Rank',
            description: 'Captured a top-3 best-seller ranking in the organic breakfast category across top national marketplaces.'
          }
        ],
        keyLearnings: 'Unfiltered micro-influencer social proof paired with frictionless marketplace retargeting out-converts traditional high-budget corporate FMCG television commercials.'
      }
    }
  },

  // ==========================================
  // SEO PROJECTS (8 ITEMS)
  // ==========================================
  'seo-enterprise-audit-recovery': {
    id: 'seo-enterprise-audit-recovery',
    role: {
      id: 'Principal Technical SEO Architect',
      en: 'Principal Technical SEO Architect'
    },
    timeline: {
      id: '5 Bulan (Februari - Juni 2024)',
      en: '5 Months (February - June 2024)'
    },
    industry: {
      id: 'Digital News Publishing & Media',
      en: 'Digital News Publishing & Media'
    },
    content: {
      id: {
        overview: 'MediaWarta adalah portal berita online nasional dengan ratusan ribu artikel yang mengalami penurunan trafik organik sebesar 45% setelah Google Core Update. Kami melakukan investigasi teknis mendalam dan mengeksekusi pemulihan arsitektur penuh.',
        challenge: 'Struktur CMS warisan (legacy) menghasilkan lebih dari 100.000 URL duplicate, canonical loops tak berujung, paginasi rusak, dan penurunan drastis skor Helpful Content akibat artikel sindikasi massal tanpa nilai tambah.',
        strategy: [
          'Audit menyeluruh 250.000+ URL menggunakan Screaming Frog dan BigQuery untuk mengidentifikasi URL zombie dan error index.',
          'Pembersihan arsitektur internal linking, perbaikan canonical tag, dan de-indeksasi artikel berkualitas rendah (thin content).',
          'Penyusunan panduan editorial EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) dan skema NewsArticle terstruktur.',
          'Optimasi arsitektur tag topik dan sitemap XML berita agar terindeks instan oleh Googlebot News.'
        ],
        execution: [
          'Menghapus 40.000+ URL thin content dan mengarahkan redirect 301 konsisten ke hub kategori utama.',
          'Memperbaiki implementasi penandaan canonical self-referential yang sebelumnya loop dan menyebabkan kebingungan bot.',
          'Menginjeksi schema markup Author, ReviewedBy, dan FactCheck pada seluruh artikel jurnalisme investigatif.',
          'Memantau log server Nginx secara harian untuk memastikan crawl budget Googlebot teralokasi pada konten berita terbaru.'
        ],
        results: [
          {
            highlight: '+320% Organic Traffic',
            description: 'Trafik pencarian organik pulih sepenuhnya bahkan melampaui puncak trafik sebelum update algoritma Google.'
          },
          {
            highlight: '+94% Index Efficiency',
            description: 'Rasio halaman bernilai tinggi yang diindeks Google meningkat dari 48% menjadi 94% dari total crawl.'
          },
          {
            highlight: 'Google News Re-entry',
            description: 'Berhasil mengembalikan visibilitas penuh portal pada Google Top Stories carousel dan Google Discover.'
          }
        ],
        keyLearnings: 'Pada situs penerbitan media skala masif, kebersihan teknis (crawl budget & canonicalization) sama pentingnya dengan kepatuhan editorial terhadap pedoman Helpful Content Google.'
      },
      en: {
        overview: 'MediaWarta is a national online news publication operating hundreds of thousands of editorial articles that endured a 45% organic visibility collapse following a Google Core Update. We led forensic technical remediation and complete architecture recovery.',
        challenge: 'A legacy publishing CMS generated 100k+ duplicate URLs, recursive canonical loops, broken paginations, and Helpful Content score degradation stemming from syndicated thin articles.',
        strategy: [
          'Execute a full crawl audit of 250k+ URLs utilizing Screaming Frog clusters and BigQuery log joins.',
          'Restructure internal link architecture, resolve canonical conflicts, and prune indexation of valueless thin assets.',
          'Institutionalize EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines and NewsArticle schema.',
          'Re-engineer tag taxonomies and Google News XML sitemaps for instantaneous fresh crawl ingestion.'
        ],
        execution: [
          'Pruned and redirected 40,000+ thin zombie URLs to appropriate authoritative topic hub categories.',
          'Repaired self-referential canonical tags across category templates that previously triggered search engine indecision.',
          'Injected granular Author, ReviewedBy, and Publisher organization schema tags across investigative reporting pieces.',
          'Conducted daily Nginx server log analysis ensuring search bot crawls were concentrated on breaking editorial content.'
        ],
        results: [
          {
            highlight: '+320% Traffic Recovery',
            description: 'Organic sessions completely rebounded and surpassed pre-update historic traffic milestones.'
          },
          {
            highlight: '+94% Index Efficiency',
            description: 'Ratio of crawled-to-indexed high-value pages improved from 48% to 94% across Googlebot visits.'
          },
          {
            highlight: 'Top Stories Visibility',
            description: 'Restored prime placement within Google Discover feeds and Top Stories news carousels.'
          }
        ],
        keyLearnings: 'In enterprise editorial publishing, architectural hygiene (crawl budget and canonical precision) is strictly as critical as adhering to Google’s Helpful Content standards.'
      }
    }
  },

  'seo-local-domination-strategy': {
    id: 'seo-local-domination-strategy',
    role: {
      id: 'Local Search Lead & Multi-Location SEO Specialist',
      en: 'Local Search Lead & Multi-Location SEO Specialist'
    },
    timeline: {
      id: '8 Bulan (April - November 2023)',
      en: '8 Months (April - November 2023)'
    },
    industry: {
      id: 'Healthcare, Dental Clinics & Medical Network',
      en: 'Healthcare, Dental Clinics & Medical Network'
    },
    content: {
      id: {
        overview: 'DentalCare Network Indonesia memiliki 35 cabang klinik gigi di 5 kota metropolitan. Kami menyusun strategi Local SEO komprehensif untuk mendominasi peringkat Google Maps 3-Pack dan pencarian kata kunci "klinik gigi terdekat" serta "dokter gigi anak".',
        challenge: 'Data profil Google Business Profile (GBP) tidak terstandarisasi, banyak listing cabang yang duplikat atau tidak terverifikasi, ulasan pasien tidak dikelola secara terpusat, dan halaman lokasi di website klinik tidak memiliki schema markup medis.',
        strategy: [
          'Standardisasi NAP (Name, Address, Phone) terpusat untuk 35 cabang klinik gigi di Google Business Profile dan direktori lokal.',
          'Pembangunan halaman landing cabang lokasi mandiri di website dengan konten dokter spesialis dan foto fasilitas lokal.',
          'Implementasi skema terstruktur MedicalBusiness dan Dentist dengan koordinat geolokasi presisi.',
          'Penyusunan sistem automasi permohonan ulasan ulasan positif pasien via WhatsApp pasca-tindakan medis.'
        ],
        execution: [
          'Mengklaim, memverifikasi, dan menautkan 35 profil GBP ke Google Search Console dengan penamaan kategori medis yang tepat.',
          'Membuat halaman cabang dengan URL struktur terpadu (/lokasi/jakarta-selatan/cabang-senopati) dengan peta interaktif.',
          'Mengintegrasikan API WhatsApp dengan sistem manajemen klinik untuk mengirimkan link review GBP 2 jam setelah pasien pulang.',
          'Membangun 500+ kutipan direktori lokal berkualitas tinggi (YellowPages, IndoNetwork, Yelp, media lokal).'
        ],
        results: [
          {
            highlight: '88% Map Pack #1',
            description: 'Sebanyak 31 dari 35 cabang klinik berhasil menduduki peringkat #1-3 pada Google Maps Local Pack di wilayahnya.'
          },
          {
            highlight: '+215% Phone Inquiries',
            description: 'Panggilan telepon langsung dan permintaan rute Google Maps melonjak lebih dari 3 kali lipat.'
          },
          {
            highlight: '4.9★ Average Rating',
            description: 'Mengumpulkan lebih dari 4.200 ulasan pasien baru dengan kepuasan rata-rata 4.9 dari 5 bintang.'
          }
        ],
        keyLearnings: 'Keberhasilan Local SEO multi-cabang bergantung pada konsistensi data NAP, kecepatan mengumpulkan ulasan pasien pasca-layanan, dan relevansi geolokasi halaman cabang.'
      },
      en: {
        overview: 'DentalCare Network Indonesia operates 35 dental clinic practices across 5 metropolitan regions. We engineered an enterprise Local SEO strategy to capture Google Maps 3-Pack rankings for high-intent search queries ("dentist near me", "pediatric dental clinic").',
        challenge: 'Inconsistent NAP (Name, Address, Phone) citations, scattered duplicate listings, unmanaged patient feedback, and location pages lacking medical schema markup hampered discovery.',
        strategy: [
          'Centralize and harmonize NAP profile data for all 35 practices across Google Business Profiles and tier-1 directories.',
          'Construct dedicated clinic branch landing pages featuring localized practitioner profiles and verified clinic photography.',
          'Inject structured Dentist and MedicalBusiness schema complete with geographic lat/long coordinates.',
          'Deploy post-treatment automated WhatsApp review collection workflows targeting verified clinic patients.'
        ],
        execution: [
          'Reclaimed, cleaned, and verified 35 GBP profiles linking directly to Search Console with curated healthcare taxonomies.',
          'Architected localized clinic landing pages (/locations/jakarta-south/senopati) embedded with interactive route maps.',
          'Integrated clinic ERP webhooks triggering automated personalized review invitations 2 hours post-appointment.',
          'Generated 500+ high-authority localized business citations across reputable regional directories.'
        ],
        results: [
          {
            highlight: '88% Map Pack #1',
            description: '31 out of 35 clinic locations secured top-3 placements within Google Maps Local 3-Packs.'
          },
          {
            highlight: '+215% Phone Calls',
            description: 'Direct click-to-call inquiries and navigation requests surged by 215% year-over-year.'
          },
          {
            highlight: '4.9★ Aggregate Rating',
            description: 'Collected over 4,200 authentic verified patient reviews maintaining a sterling 4.9/5 star satisfaction average.'
          }
        ],
        keyLearnings: 'Multi-location local authority hinges on uncompromising NAP consistency, real-time post-visit review velocity, and dedicated localized location pages.'
      }
    }
  },

  'seo-ecommerce-faceted-navigation': {
    id: 'seo-ecommerce-faceted-navigation',
    role: {
      id: 'E-Commerce Technical SEO Specialist',
      en: 'E-Commerce Technical SEO Specialist'
    },
    timeline: {
      id: '6 Bulan (Januari - Juni 2024)',
      en: '6 Months (January - June 2024)'
    },
    industry: {
      id: 'Consumer Electronics & E-Commerce Retail',
      en: 'Consumer Electronics & E-Commerce Retail'
    },
    content: {
      id: {
        overview: 'ElektronikHub Indonesia adalah e-commerce elektronik terkemuka dengan katalog 50.000+ SKU. Kami membenahi sistem faceted navigation filter untuk mencegah crawl budget spider terbuang pada kombinasi URL tak terbatas dan menaikkan peringkat halaman kategori produk utama.',
        challenge: 'Sistem filter katalog (merek, warna, voltase, rentang harga, ukuran layar) menghasilkan lebih dari 1,2 juta kombinasi URL dinamis yang terindeks Googlebot. Akibatnya, halaman kategori produk unggulan jarang dirayapi bot dan trafik organik stagnan.',
        strategy: [
          'Pemetaan audit kombinasi filter faceted: menentukan parameter mana yang layak diindeks vs mana yang wajib diblokir.',
          'Penerapan AJAX filter sisi klien tanpa mengubah query string URL untuk filter non-indeks (misal: sorting harga, stok).',
          'Penetapan tag canonical relasional yang mengarah ke kategori induk untuk variasi kombinasi filter sekunder.',
          'Penggunaan robots.txt directive dan parameter handling di Google Search Console untuk menghentikan bot merayapi parameter sampah.'
        ],
        execution: [
          'Mengonfigurasi canonical rules presisi pada Next.js router dan middleware backend katalog.',
          'Membuat halaman kategori statis bertarget kata kunci spesifik (misal: "TV OLED 55 Inch 4K") dengan URL bersih dan ramah SEO.',
          'Memperbaiki internal breadcrumb trail menggunakan BreadcrumbList schema markup.',
          'Mengurangi indeksasi URL tak bermakna dari 1,2 juta URL menjadi 38.000 halaman bernilai konversi tinggi.'
        ],
        results: [
          {
            highlight: '+410% Non-Brand Impressions',
            description: 'Impresi pencarian organik untuk kata kunci produk dan kategori non-brand melonjak drastis.'
          },
          {
            highlight: '+75% Crawl Efficiency',
            description: 'Googlebot kini memfokuskan 92% perayapannya pada halaman produk aktif dan kategori utama yang bernilai tinggi.'
          },
          {
            highlight: '+62% Organic Sales',
            description: 'Pertumbuhan transaksi belanja online yang bersumber dari kanal pencarian organik tanpa biaya iklan berbayar.'
          }
        ],
        keyLearnings: 'Mengendalikan filter faceted navigation adalah kunci utama efisiensi SEO e-commerce besar: hanya indeks halaman yang memiliki volume pencarian nyata di Google.'
      },
      en: {
        overview: 'ElektronikHub Indonesia is a prominent consumer electronics online retailer housing 50,000+ SKUs. We overhauled the faceted navigation filter architecture to conserve search crawler budgets and elevate core category authority.',
        challenge: 'Dynamic catalog facets (brand, color, voltage, price ranges, screen size) spawned over 1.2 million indexable URL permutations, wasting Googlebot resources and stranding priority commercial landing pages.',
        strategy: [
          'Audit filter permutations to determine which combinations possess commercial demand vs those requiring noindex/canonicalization.',
          'Implement client-side AJAX filtering for non-index attributes (sorting parameters, in-stock toggles) without dirtying URLs.',
          'Establish canonical rules consolidating secondary facet combinations back to primary category roots.',
          'Deploy robots exclusion rules and parameter controls to halt bot crawl budget exhaustion on worthless URLs.'
        ],
        execution: [
          'Programmed Next.js server-side routing logic enforcing strict canonical header directives.',
          'Created search-optimized static taxonomy landing pages for high-demand queries ("55-inch 4K OLED TVs").',
          'Standardized dynamic structured BreadcrumbList schema across all hierarchy levels.',
          'Pruned total indexed URLs from 1.2 million low-quality permutations down to 38,000 high-converting assets.'
        ],
        results: [
          {
            highlight: '+410% Search Impressions',
            description: 'Non-brand organic impressions across core consumer electronics categories grew dramatically.'
          },
          {
            highlight: '+75% Crawl Efficiency',
            description: 'Googlebot shifted 92% of its crawl frequency onto commercial priority catalog pages.'
          },
          {
            highlight: '+62% Organic Revenue',
            description: 'Direct organic e-commerce transactions expanded significantly without paid acquisition assistance.'
          }
        ],
        keyLearnings: 'Disciplined faceted taxonomy governance is the single most vital technical lever for large-scale e-commerce SEO: index only URLs with proven search query demand.'
      }
    }
  },

  'seo-fintech-content-hub-silo': {
    id: 'seo-fintech-content-hub-silo',
    role: {
      id: 'Content SEO Architect & Semantic Search Strategist',
      en: 'Content SEO Architect & Semantic Search Strategist'
    },
    timeline: {
      id: '10 Bulan (Februari - November 2023)',
      en: '10 Months (February - November 2023)'
    },
    industry: {
      id: 'Financial Services & Investment Education',
      en: 'Financial Services & Investment Education'
    },
    content: {
      id: {
        overview: 'InvestPintar adalah portal edukasi dan aggregator produk investasi terpercaya. Kami merancang arsitektur topic cluster dan semantic content hub silo seputar reksa dana, obligasi negara, saham dividen, dan perencanaan pensiun guna mendominasi SERP finansial berbobot tinggi.',
        challenge: 'Artikel finansial sebelumnya ditulis secara acak tanpa hierarki topik, terjadi kanibalisasi internal yang parah, dan skor E-E-A-T situs rendah untuk topik sensitif kategori YMYL (Your Money Your Life).',
        strategy: [
          'Pemetaan semantik topik finansial: membangun 4 pilar utama (Pillar Pages) yang didukung oleh 80+ artikel klaster spesifik.',
          'Penerapan struktur internal linking piramida tertutup (content silo) agar otoritas halaman pilar meningkat maksimal.',
          'Peningkatan kepatuhan standar YMYL Google dengan menambahkan profil reviewer bersertifikasi CFP (Certified Financial Planner).',
          'Optimasi featured snippet dan FAQ schema pada seluruh konten panduan kalkulasi investasi.'
        ],
        execution: [
          'Menyusun silabus konten komprehensif menggunakan SurferSEO dan semantic NLP entity targeting.',
          'Mengintegrasikan skema Article, Author, dan FinancialProduct dengan kutipan sumber regulasi resmi OJK dan Bank Indonesia.',
          'Membuat kalkulator simulasi investasi interaktif di dalam halaman pilar yang memperpanjang rata-rata waktu interaksi pengguna (dwell time).',
          'Melakukan konsolidasi dan 301 redirect pada 35 artikel lama yang kanibal ke artikel pilar terbaru.'
        ],
        results: [
          {
            highlight: '450+ Keywords in Top 3',
            description: 'Lebih dari 450 kata kunci finansial bervolume tinggi berhasil menembus ranking 1 hingga 3 di Google Indonesia.'
          },
          {
            highlight: '1.2M+ Monthly Sessions',
            description: 'Trafik pengunjung organik bulanan tembus lebih dari 1,2 juta sesi dengan rasio engagement tinggi.'
          },
          {
            highlight: 'Top Organic Authority',
            description: 'Menjadi salah satu portal rujukan edukasi finansial paling terkemuka dengan ribuan backlink editorial alami.'
          }
        ],
        keyLearnings: 'Pada kategori sensitif YMYL, arsitektur topic cluster semantik yang rapi dan validasi kredibilitas ahli keuangan (CFP) adalah kunci utama membangun kepercayaan mesin pencari dan pengguna.'
      },
      en: {
        overview: 'InvestPintar is an investment advisory and education platform. We engineered a semantic topic cluster architecture and content hub silo surrounding mutual funds, government bonds, and retirement planning to dominate high-intent YMYL queries.',
        challenge: 'Articles were produced ad-hoc without topical hierarchy, causing rampant internal keyword cannibalization and low E-E-A-T algorithmic trust under Google’s stringent YMYL (Your Money Your Life) criteria.',
        strategy: [
          'Map a financial entity taxonomy: anchor 4 core Pillar Pages supported by 80+ specialized cluster assets.',
          'Enforce strict topical internal linking silos directing contextual link equity upward to commercial pillars.',
          'Establish robust YMYL trust signals by integrating credentials of Certified Financial Planners (CFP) into editorial bylaws.',
          'Target featured snippet answer boxes and Rich FAQ markup on financial calculation articles.'
        ],
        execution: [
          'Formulated in-depth content briefs using SurferSEO NLP entity scoring and search intent mapping.',
          'Implemented rigorous schema annotations referencing official regulatory citations from OJK and Bank Indonesia.',
          'Embedded responsive client-side financial compounding calculators within pillar pages, drastically boosting dwell time.',
          'Pruned and consolidated 35 cannibalistic legacy articles into authoritative evergreen assets via 301 redirects.'
        ],
        results: [
          {
            highlight: '450+ Top-3 Keywords',
            description: 'Over 450 competitive high-volume financial terms captured rank #1-3 in Google search results.'
          },
          {
            highlight: '1.2M+ Monthly Visits',
            description: 'Organic search volume exceeded 1.2 million monthly sessions with above-benchmark session duration.'
          },
          {
            highlight: 'Recognized YMYL Leader',
            description: 'Solidified market positioning as a trusted financial hub, attracting natural editorial backlinks.'
          }
        ],
        keyLearnings: 'In high-stakes YMYL verticals, cohesive topic cluster silos paired with verifiable certified subject matter expert credentials build unmatched search engine trust.'
      }
    }
  },

  'seo-international-multilingual-hreflang': {
    id: 'seo-international-multilingual-hreflang',
    role: {
      id: 'International SEO Specialist & Infrastructure Consultant',
      en: 'International SEO Specialist & Infrastructure Consultant'
    },
    timeline: {
      id: '6 Bulan (Juli - Desember 2022)',
      en: '6 Months (July - December 2022)'
    },
    industry: {
      id: 'Luxury Hospitality, Villas & Tourism',
      en: 'Luxury Hospitality, Villas & Tourism'
    },
    content: {
      id: {
        overview: 'BaliExotic mengelola portofolio vila mewah dan resor eksklusif di Bali yang menargetkan wisatawan mancanegara. Kami merancang arsitektur SEO internasional multi-bahasa dengan implementasi hreflang presisi, geo-targeting CDN, dan lokalisasi konten budaya dalam 4 bahasa.',
        challenge: 'Situs versi bahasa Inggris, Prancis, Rusia, dan Indonesia saling bersaing dan memicu duplikasi konten internasional. Google sering menampilkan versi bahasa yang salah kepada pengguna luar negeri sehingga tingkat konversi reservasi vila rendah.',
        strategy: [
          'Perancangan struktur URL subfolder bersih (/en/, /fr/, /ru/, /) dengan penandaan hreflang dua arah yang lengkap.',
          'Penerapan x-default hreflang tag untuk mengarahkan pengguna global dari negara tanpa halaman bahasa khusus.',
          'Penerjemahan konten oleh penutur asli (bukan machine translation kaku) dengan penyesuaian istilah pencarian lokal masing-masing negara.',
          'Penyebaran aset melalui jaringan CDN Cloudflare di 200+ kota global untuk memastikan waktu muat < 1 detik di seluruh benua.'
        ],
        execution: [
          'Mengimplementasikan XML sitemap hreflang otomatis yang memvalidasi hubungan timbal-balik (reciprocal links) antar 4 bahasa.',
          'Menonaktifkan auto-redirect IP paksa yang melanggar pedoman Googlebot dan menggantinya dengan banner pilihan bahasa cerdas.',
          'Menyisipkan schema VacationRental dan LodgingBusiness dengan mata uang multi-kurs (USD, AUD, EUR, IDR).',
          'Mengoptimalkan performa server edge caching Cloudflare dengan cache hit ratio mencapai 94%.'
        ],
        results: [
          {
            highlight: '+280% International Clicks',
            description: 'Klik organik dari pasar utama internasional (Australia, Eropa Barat, Amerika Utara) meningkat hampir 3 kali lipat.'
          },
          {
            highlight: '0 Hreflang Errors',
            description: 'Audit Google Search Console mencatat nol error hreflang di seluruh ribuan URL multi-bahasa.'
          },
          {
            highlight: '+145% Direct Bookings',
            description: 'Pemesanan vila langsung bebas komisi OTA melalui website meningkat pesat dari wisatawan mancanegara.'
          }
        ],
        keyLearnings: 'Implementasi hreflang yang benar tanpa auto-redirect paksa memastikan mesin pencari merayapi dan menyajikan versi bahasa yang tepat kepada audiens global target.'
      },
      en: {
        overview: 'BaliExotic operates an exclusive portfolio of luxury private villas across Bali catering to international high-net-worth travelers. We executed an international SEO rollout featuring four-language hreflang tags, global edge caching, and localized cultural search targeting.',
        challenge: 'Language versions (English, French, Russian, Indonesian) cannibalized each other with cross-lingual duplicate content. Google frequently served incorrect languages to foreign visitors, suppressing booking conversion.',
        strategy: [
          'Implement clean subfolder taxonomy (/en/, /fr/, /ru/, /) reinforced by strict bidirectional hreflang mapping.',
          'Deploy x-default hreflang annotations to gracefully handle global searchers outside primary language regions.',
          'Engage native translators for cultural keyword localization rather than crude machine translation.',
          'Accelerate global content delivery across Cloudflare edge CDN POPs ensuring sub-second response times worldwide.'
        ],
        execution: [
          'Generated automated XML hreflang sitemaps enforcing reciprocal cross-language validation across all property listings.',
          'Dismantled intrusive IP auto-redirects (which blind Googlebot) in favor of non-intrusive language recommendation banners.',
          'Integrated VacationRental structured schema supporting multi-currency pricing displays (USD, AUD, EUR, IDR).',
          'Configured Cloudflare edge rules achieving a 94% static and dynamic cache hit ratio globally.'
        ],
        results: [
          {
            highlight: '+280% International Clicks',
            description: 'Organic clicks originating from key feeder markets (Australia, Western Europe, North America) surged 280%.'
          },
          {
            highlight: 'Zero Hreflang Errors',
            description: 'Search Console reported zero hreflang annotation conflicts across thousands of multilingual URLs.'
          },
          {
            highlight: '+145% Direct Bookings',
            description: 'Commission-free direct website reservations from international holidaymakers climbed significantly.'
          }
        ],
        keyLearnings: 'Flawless bidirectional hreflang hygiene combined with natural human localization and zero forced IP redirects ensures global search engines present the correct experience to every international market.'
      }
    }
  },

  'seo-programmatic-travel-directory': {
    id: 'seo-programmatic-travel-directory',
    role: {
      id: 'Programmatic SEO & Data Systems Architect',
      en: 'Programmatic SEO & Data Systems Architect'
    },
    timeline: {
      id: '8 Bulan (Mei - Desember 2021)',
      en: '8 Months (May - December 2021)'
    },
    industry: {
      id: 'Travel, Tourism & Directory Portal',
      en: 'Travel, Tourism & Directory Portal'
    },
    content: {
      id: {
        overview: 'JelajahNusantara adalah portal direktori pariwisata Indonesia. Kami merancang arsitektur Programmatic SEO berbasis database yang menghasilkan lebih dari 5.000 landing page destinasi wisata otomatis dengan template dinamis berkecepatan tinggi dan data schema kaya.',
        challenge: 'Menulis ribuan panduan wisata destinasi secara manual memerlukan waktu bertahun-tahun dan biaya sangat besar. Sementara itu, jutaan pencarian long-tail seperti "tempat wisata ramah anak di [kota]" belum dimanfaatkan.',
        strategy: [
          'Penyusunan dataset pariwisata komprehensif (fasilitas, jam buka, harga tiket, koordinat peta, ulasan pengguna) di PostgreSQL.',
          'Perancangan formula kata kunci long-tail terstruktur: "[kategori wisata] terbaik di [kecamatan/kota]".',
          'Pembangunan template halaman dinamis menggunakan Next.js Static Site Generation (SSG) dengan waktu muat super cepat.',
          'Pencegahan algoritma Google Thin Content dengan menyematkan konten dinamis unik: peta interaktif, tips cuaca, dan ulasan terverifikasi.'
        ],
        execution: [
          'Menulis script ETL Python untuk membersihkan dan menormalisasi dataset 5.000+ destinasi wisata nusantara.',
          'Menggunakan Incremental Static Regeneration (ISR) agar halaman dapat diperbarui secara otomatis tanpa rebuild total situs.',
          'Menghasilkan sitemap XML dinamis berindeks per provinsi dengan pembaruan otomatis setiap ada penambahan data destinasi baru.',
          'Menambahkan TouristAttraction schema markup lengkap dengan rating ulasan dan geo-coordinates.'
        ],
        results: [
          {
            highlight: '12,000+ Long-Tail Keywords',
            description: 'Berhasil menguasai lebih dari 12.000 kata kunci pencarian long-tail wisata di halaman pertama Google.'
          },
          {
            highlight: '+650% Organic Visits',
            description: 'Trafik organik direktori melonjak tajam dari 40.000 menjadi lebih dari 300.000 kunjungan bulanan.'
          },
          {
            highlight: 'Zero Algorithmic Penalties',
            description: 'Situs tetap aman dari penalti thin content berkat kurasi data yang mendalam dan fungsionalitas pengguna yang nyata.'
          }
        ],
        keyLearnings: 'Programmatic SEO sukses membutuhkan kombinasi dataset yang kaya dan bernilai guna tinggi bagi pengunjung, bukan sekadar mengganti nama kota pada template teks yang sama.'
      },
      en: {
        overview: 'JelajahNusantara is a premier Indonesian tourism directory portal. We architected a database-driven Programmatic SEO framework generating 5,000+ localized travel destination landing pages with lightweight dynamic templates and rich schema.',
        challenge: 'Manually authoring thousands of regional attraction guides was cost-prohibitive, while millions of valuable long-tail queries ("family friendly attractions in [district]") remained uncaptured.',
        strategy: [
          'Compile an authoritative PostgreSQL dataset indexing attractions, entry ticket pricing, operating hours, and geo-data.',
          'Formulate modular long-tail query patterns: "best [attraction type] in [district/regency]".',
          'Engineer lightweight Next.js Static Site Generation (SSG) page layouts ensuring sub-second rendering speeds.',
          'Shield against thin-content penalties by integrating proprietary data widgets: interactive maps, weather forecasts, and community reviews.'
        ],
        execution: [
          'Wrote automated Python ETL pipelines to ingest, sanitize, and validate records across 5,000+ Indonesian points of interest.',
          'Implemented Incremental Static Regeneration (ISR) to continuously refresh destination guides without full site rebuilds.',
          'Architected dynamic categorized XML sitemaps organized by province for efficient Googlebot discovery.',
          'Injected TouristAttraction schema complete with aggregate ratings and exact latitude/longitude coordinates.'
        ],
        results: [
          {
            highlight: '12,000+ Long-Tail Ranks',
            description: 'Captured page-1 search dominance across more than 12,000 hyper-local travel intent queries.'
          },
          {
            highlight: '+650% Organic Visits',
            description: 'Organic platform traffic climbed from 40,000 to over 300,000 monthly active travel researchers.'
          },
          {
            highlight: 'Zero Quality Penalties',
            description: 'Maintained pristine search standing through rigorous dataset depth and tangible interactive utility.'
          }
        ],
        keyLearnings: 'Programmatic SEO thrives only when powered by proprietary, functionally useful datasets rather than superficial keyword-stuffed text templates.'
      }
    }
  },

  'seo-b2b-enterprise-saas-replatform': {
    id: 'seo-b2b-enterprise-saas-replatform',
    role: {
      id: 'Site Migration Lead & Enterprise SEO Architect',
      en: 'Site Migration Lead & Enterprise SEO Architect'
    },
    timeline: {
      id: '5 Bulan (Agustus - Desember 2020)',
      en: '5 Months (August - December 2020)'
    },
    industry: {
      id: 'Enterprise Workflow SaaS & Cloud Software',
      en: 'Enterprise Workflow SaaS & Cloud Software'
    },
    content: {
      id: {
        overview: 'WorkSuite Enterprise melakukan perombakan total merek (rebranding), pergantian domain, dan migrasi CMS dari WordPress ke Next.js. Kami merancang strategi migrasi website tanpa downtime dan tanpa kehilangan trafik organik.',
        challenge: 'Pergantian domain dan perubahan struktur permalink pada 2.500+ halaman berisiko menghilangkan 100% otoritas pencarian organik dan backlink bernilai tinggi yang telah dikumpulkan selama 6 tahun.',
        strategy: [
          'Penyusunan peta redirect 301 1:1 presisi tanpa rantai pengalihan (redirect chains) atau loop.',
          'Pengujian pra-peluncuran mendalam di lingkungan staging tertutup dengan simulasi perayapan Googlebot.',
          'Pemberitahuan perubahan alamat resmi via Google Search Console Change of Address Tool.',
          'Pemantauan harian real-time pada log server Nginx selama 30 hari pasca-migrasi untuk menangkap error 404 sedini mungkin.'
        ],
        execution: [
          'Mengekstrak seluruh URL historis dari GA, Search Console, Ahrefs, dan log server untuk pemetaan redirect komprehensif.',
          'Mengonfigurasi aturan rewrite redirect langsung pada layer Nginx edge server demi latensi pengalihan minimal (< 50ms).',
          'Memastikan seluruh meta tag, canonical tag, OpenGraph, dan schema markup cocok secara akurat pada situs baru.',
          'Menghubungi webmaster eksternal yang memberikan backlink bernilai tinggi untuk memperbarui URL link ke domain baru.'
        ],
        results: [
          {
            highlight: '108% Traffic Retained & Grew',
            description: 'Trafik organik tidak hanya bertahan 100%, melainkan tumbuh 8% lebih tinggi dalam waktu 60 hari pasca-migrasi.'
          },
          {
            highlight: '<0.01% 404 Errors',
            description: 'Tingkat error halaman hilang (broken links) nyaris nol berkat pemetaan redirect 1:1 yang sempurna.'
          },
          {
            highlight: 'Zero Downtime',
            description: 'Proses cutover domain diselesaikan secara mulus tanpa gangguan akses layanan pelanggan enterprise.'
          }
        ],
        keyLearnings: 'Migrasi website besar tidak perlu mengorbankan trafik organik jika pemetaan redirect 1:1, pelestarian arsitektur konten, dan pemantauan log server dieksekusi secara disiplin.'
      },
      en: {
        overview: 'WorkSuite Enterprise undertook an enterprise rebranding, domain change, and CMS migration from WordPress to Next.js. We engineered a zero-downtime, zero-traffic-loss migration protocol preserving 6 years of accumulated search authority.',
        challenge: 'A wholesale domain change and permalink restructuration across 2,500+ pages risked obliterating historical organic equity and high-value inbound backlink profiles.',
        strategy: [
          'Engineer a granular 1:1 redirect map eliminating redirect chains and cyclical loops.',
          'Execute pre-launch regression testing in isolated staging environments simulating Googlebot crawl responses.',
          'Submit official migration notifications via Google Search Console Change of Address verification tools.',
          'Monitor Nginx server edge access logs 24/7 for 30 consecutive days post-cutover to catch transient 404 anomalies.'
        ],
        execution: [
          'Harvested every historical URL from GA4, Search Console, Ahrefs, and access logs to construct a master redirection table.',
          'Configured high-performance Nginx map blocks resolving 301 redirects at sub-50ms latency.',
          'Audited identical canonical targets, structured schema, and OpenGraph tags between staging and production.',
          'Reached out to key tier-1 referring domains requesting link updates to point directly to the new corporate domain.'
        ],
        results: [
          {
            highlight: '108% Traffic Retained',
            description: 'Organic sessions not only maintained parity but grew 8% within 60 days following the domain transition.'
          },
          {
            highlight: '<0.01% Broken Links',
            description: 'Recorded virtually non-existent 404 error spikes across the entire 2,500-page legacy footprint.'
          },
          {
            highlight: 'Zero Service Downtime',
            description: 'DNS and routing cutovers executed seamlessly without enterprise client workflow interruptions.'
          }
        ],
        keyLearnings: 'Enterprise site migrations do not inevitably cost traffic: uncompromising 1:1 redirect mapping and relentless server log surveillance safeguard organic search equity.'
      }
    }
  },

  'seo-core-web-vitals-speed': {
    id: 'seo-core-web-vitals-speed',
    role: {
      id: 'Web Performance Engineer & Technical SEO Specialist',
      en: 'Web Performance Engineer & Technical SEO Specialist'
    },
    timeline: {
      id: '4 Bulan (September - Desember 2019)',
      en: '4 Months (September - December 2019)'
    },
    industry: {
      id: 'News Publishing, Digital Media & High-Traffic Portals',
      en: 'News Publishing, Digital Media & High-Traffic Portals'
    },
    content: {
      id: {
        overview: 'KabarHarian adalah portal berita online dengan jutaan pembaca bulanan. Kami melakukan perombakan performa teknis untuk mengatasi lambatnya waktu muat, menghilangkan script pemblokir render (render-blocking), dan memenuhi standar Google Core Web Vitals (LCP, FID, CLS).',
        challenge: 'Skor Google PageSpeed Mobile sangat rendah (24/100), waktu muat Largest Contentful Paint (LCP) mencapai 5,8 detik akibat banner iklan berat dan script analitik pihak ketiga yang menumpuk tanpa optimasi.',
        strategy: [
          'Pembersihan script pihak ketiga yang tidak esensial dan pemuatan asinkron (defer/async) untuk script analitik.',
          'Optimasi font web: penerapan font-display: swap, penataan preload font latin utama, dan self-hosting font lokal.',
          'Optimasi gambar berita otomatis: konversi ke format WebP modern dengan dimensi lebar/tinggi eksplisit untuk mencegah layout shift (CLS).',
          'Penerapan reverse-proxy caching menggunakan Varnish dan Cloudflare CDN untuk melayani halaman cache statis dalam < 200ms.'
        ],
        execution: [
          'Membedah waterfall muat halaman dengan Chrome DevTools dan WebPageTest untuk mendeteksi bottleneck utama.',
          'Membuat lazy-loading cerdas pada unit iklan banner di bawah viewport (below-the-fold ads).',
          'Mengompresi CSS dan JavaScript bundle serta menghapus 120 KB stylesheet yang tidak digunakan (unused CSS).',
          'Menata ulang urutan pemuatan CSS kritis inline pada bagian head dokumen HTML.'
        ],
        results: [
          {
            highlight: '98% Mobile CWV Pass',
            description: 'Lolos uji Core Web Vitals pada 98% URL di Google Search Console dengan skor PageSpeed 92/100.'
          },
          {
            highlight: '-28% Bounce Rate',
            description: 'Tingkat pentalan pembaca mobile menurun drastis karena halaman langsung tampil dalam hitungan detik.'
          },
          {
            highlight: '+42% Pages Per Session',
            description: 'Pembaca membuka lebih banyak halaman berita karena navigasi antar artikel terasa instan.'
          }
        ],
        keyLearnings: 'Kecepatan halaman bukan hanya faktor peringkat SEO teknis, tetapi determinan paling langsung dalam meningkatkan kepuasan pembaca dan pendapatan iklan per impresi media digital.'
      },
      en: {
        overview: 'KabarHarian is an online news publication serving millions of readers monthly. We spearheaded an end-to-end web performance remediation project to eliminate render-blocking assets and achieve green-tier Google Core Web Vitals (LCP, FID, CLS).',
        challenge: 'A dismal Google PageSpeed Mobile score of 24/100 and a 5.8s Largest Contentful Paint (LCP) caused by third-party ad tag bloating and unoptimized fonts.',
        strategy: [
          'Prune non-essential third-party JavaScript trackers and enforce asynchronous (defer/async) execution.',
          'Optimize web typography: enforce font-display: swap, preload critical font subsets, and self-host font files.',
          'Automate next-gen image conversion to WebP with explicit width/height dimensions to eradicate layout shifts (CLS).',
          'Implement edge caching with Varnish reverse proxies and Cloudflare CDN delivering cached HTML in sub-200ms.'
        ],
        execution: [
          'Analyzed network waterfall timings using Chrome DevTools MCP and WebPageTest to isolate main thread blockers.',
          'Engineered intelligent lazy-loading for below-the-fold programmatic ad slots.',
          'Minified CSS/JS bundles, stripping out 120 KB of dead unused CSS from the global bundle.',
          'Inlined critical above-the-fold CSS directly into the HTML document head.'
        ],
        results: [
          {
            highlight: '98% CWV Pass Rate',
            description: 'Achieved a green pass status across 98% of origin URLs with a 92/100 Mobile PageSpeed score.'
          },
          {
            highlight: '-28% Bounce Rate',
            description: 'Mobile reader bounce rates declined sharply as content rendered near-instantaneously.'
          },
          {
            highlight: '+42% Pages / Session',
            description: 'Readers explored more articles per session thanks to frictionless snappy page-to-page navigation.'
          }
        ],
        keyLearnings: 'Page speed is not merely a technical ranking criterion; it directly dictates audience retention and digital media programmatic yield.'
      }
    }
  },

  // ==========================================
  // ADS PROJECTS (6 ITEMS)
  // ==========================================
  'ads-google-lead-generation': {
    id: 'ads-google-lead-generation',
    role: {
      id: 'Lead Generation Strategist & Paid Media Director',
      en: 'Lead Generation Strategist & Paid Media Director'
    },
    timeline: {
      id: '7 Bulan (Januari - Juli 2024)',
      en: '7 Months (January - July 2024)'
    },
    industry: {
      id: 'Corporate Legal & Financial Advisory',
      en: 'Corporate Legal & Financial Advisory'
    },
    content: {
      id: {
        overview: 'SolusiHukum Partners adalah firma konsultan hukum korporat dan litigasi komersial. Kami merancang kampanye Google Search berbasis Intent Tinggi dan Performance Max dengan integrasi Offline Conversion Tracking untuk mendatangkan konsultasi hukum premium dari pemilik bisnis dan direksi perusahaan.',
        challenge: 'Biaya per klik (CPC) pada kata kunci hukum sangat mahal (Rp 35.000 - Rp 85.000 per klik) dengan banyaknya lead spam dari pencari bantuan hukum gratis yang menghabiskan waktu konsultasi partner senior.',
        strategy: [
          'Penyusunan struktur Google Search berbasis kata kunci intensi tinggi: "konsultan hukum merger korporasi", "pengacara sengketa bisnis".',
          'Penerapan daftar kata kunci negatif (Negative Keyword Lists) masif untuk menyaring pencari layanan probono/gratisan.',
          'Penyederhanaan landing page dengan penekanan pada kredibilitas partner hukum, rekam jejak kasus, dan form kualifikasi lead.',
          'Integrasi HubSpot CRM dengan Google Ads via Offline Conversion Import (OCI) untuk hanya mengoptimalkan bidding pada lead yang lolos kualifikasi.'
        ],
        execution: [
          'Membangun landing page khusus corporate litigation dengan pesan terarah dan nomor hotline WhatsApp legal berkecepatan tinggi.',
          'Mengonfigurasi Google Tag Manager server-side untuk mengirimkan nilai deal konsultasi saat tim legal menandatangani retainer.',
          'Menerapkan Smart Bidding Target CPA yang disesuaikan secara dinamis berdasarkan data historis konversi offline.',
          'Membuat ekstensi iklan (Ad Assets) lengkap: sitelinks ke bidang keahlian, callout jaminan kerahasiaan, dan call extensions.'
        ],
        results: [
          {
            highlight: '-58% CPA Reduction',
            description: 'Biaya per lead hukum korporat terverifikasi berhasil ditekan turun lebih dari separuh biaya awal.'
          },
          {
            highlight: '2,800+ Qualified Leads',
            description: 'Mendatangkan lebih dari 2.800 permohonan konsultasi korporat terverifikasi selama 7 bulan kampanye.'
          },
          {
            highlight: '18 Retainer Clients Signed',
            description: 'Firma berhasil mengamankan 18 klien retainer korporasi tahunan bernilai kontrak ratusan juta rupiah.'
          }
        ],
        keyLearnings: 'Pada industri jasa profesional premium dengan CPC tinggi, integrasi Offline Conversion Tracking adalah pembeda mutlak: jangan biarkan algoritma Google mengoptimalkan lead murah yang tidak berujung pada kontrak nyata.'
      },
      en: {
        overview: 'SolusiHukum Partners is a premier commercial litigation and corporate advisory firm. We built high-intent Google Search and Performance Max campaigns integrated with Offline Conversion Tracking to acquire corporate retainers from enterprise directors.',
        challenge: 'Prohibitive legal CPCs (Rp 35,000 to Rp 85,000 per click) combined with low lead quality and spam inquiries for pro-bono assistance squandered senior partner capacity.',
        strategy: [
          'Architect Google Search structure around high-intent commercial terms ("corporate merger legal counsel", "commercial dispute litigation").',
          'Build extensive negative keyword exclusion registries filtering out pro-bono, free advice, and civil small-claims searchers.',
          'Develop dedicated high-converting landing pages emphasizing partner credentials and corporate case precedents.',
          'Integrate HubSpot CRM with Google Ads via Offline Conversion Imports (OCI) to feed verified retainer contract closures into bidding.'
        ],
        execution: [
          'Designed bespoke corporate litigation landing pages featuring direct confidential partner inquiry conduits.',
          'Configured server-side GTM telemetry passing back deal values whenever prospective corporate leads executed retainer agreements.',
          'Transitioned campaigns to Target CPA Smart Bidding fueled exclusively by validated offline sales milestone data.',
          'Maximized Ad Assets utilization: practice area sitelinks, confidentiality callouts, and direct legal hotline extensions.'
        ],
        results: [
          {
            highlight: '-58% CPA Reduction',
            description: 'Acquisition cost per qualified corporate lead dropped by 58% compared to historic benchmarks.'
          },
          {
            highlight: '2,800+ Qualified Leads',
            description: 'Generated over 2,800 validated enterprise legal inquiries during the 7-month campaign duration.'
          },
          {
            highlight: '18 Retainers Signed',
            description: 'Secured 18 high-value corporate annual retainers representing substantial contract revenues.'
          }
        ],
        keyLearnings: 'In high-ticket professional services with premium CPCs, Offline Conversion Tracking is non-negotiable: steer the bidding algorithm toward verified signed contracts rather than raw contact form fills.'
      }
    }
  },

  'ads-meta-ecommerce-roas-scaling': {
    id: 'ads-meta-ecommerce-roas-scaling',
    role: {
      id: 'Performance Marketing Lead & Media Buyer',
      en: 'Performance Marketing Lead & Media Buyer'
    },
    timeline: {
      id: '8 Bulan (Mei - Desember 2023)',
      en: '8 Months (May - December 2023)'
    },
    industry: {
      id: 'Beauty, Skincare & Direct-to-Consumer (D2C)',
      en: 'Beauty, Skincare & Direct-to-Consumer (D2C)'
    },
    content: {
      id: {
        overview: 'GlowSkin Natural Cosmetics adalah brand kecantikan lokal berbahan herbal. Kami mengelola dan menskalakan anggaran iklan Meta Ads (Facebook & Instagram) hingga ratusan juta rupiah per bulan dengan framework Dynamic Creative Testing dan integrasi server-side Conversions API.',
        challenge: 'Kehilangan sinyal atribusi pasca-kebijakan privasi iOS 14.5 yang menyebabkan metrik ROAS menurun drastis, ad fatigue cepat (materi iklan cepat usang dalam 1-2 minggu), dan kesulitan meningkatkan skala anggaran iklan tanpa lonjakan CPA.',
        strategy: [
          'Penerapan framework Dynamic Creative Testing (DCT) 3:2:2 (3 video hook, 2 body copy, 2 call-to-action) setiap minggu.',
          'Konfigurasi Meta Conversions API (CAPI) via server container Cloud Run untuk memulihkan sinyal konversi yang hilang.',
          'Struktur kampanye sederhana (Broad Targeting + Advantage+ Shopping Campaigns) untuk memberi kebebasan algoritma AI Meta.',
          'Penggunaan pelacakan First-Party Data Triple Whale untuk memantau Blended ROAS dan New Customer Acquisition Cost (nCAC).'
        ],
        execution: [
          'Memproduksi 30+ variasi video format vertikal berbasis testimoni UGC autentik dan demonstrasi tekstur produk (ASMR).',
          'Mengelompokkan winning creatives ke dalam kampanye scaling CBO (Campaign Budget Optimization) beranggaran besar.',
          'Merancang landing page penawaran khusus bundling produk (Beli 2 Gratis 1) yang menaikkan AOV sebesar 35%.',
          'Mengatur alur retargeting dinamis katalog produk Meta Catalog Ads untuk menjangkau pengguna yang meninggalkan keranjang belanja.'
        ],
        results: [
          {
            highlight: '8.5x Blended ROAS',
            description: 'Mencapai pengembalian belanja iklan (Return on Ad Spend) konsisten di atas 8.5x sepanjang periode diskon akhir tahun.'
          },
          {
            highlight: 'Rp 3.8 Miliar Sales',
            description: 'Menghasilkan total omset penjualan langsung senilai Rp 3,8 miliar yang diatribusikan ke kampanye Meta Ads.'
          },
          {
            highlight: '5x Spend Scaling',
            description: 'Anggaran belanja iklan bulanan berhasil dinaikkan 5 kali lipat secara menguntungkan tanpa mengalami penurunan profitabilitas.'
          }
        ],
        keyLearnings: 'Pada ekosistem iklan Meta modern, materi kreatif (creative is the new targeting) dan infrastruktur data server-side CAPI adalah dua pilar terpenting untuk menskalakan anggaran belanja iklan e-commerce secara menguntungkan.'
      },
      en: {
        overview: 'GlowSkin Natural Cosmetics is an organic direct-to-consumer beauty brand. We scaled Meta Ads monthly investment profitably utilizing a structured Dynamic Creative Testing framework paired with server-side Conversions API architecture.',
        challenge: 'Attribution degradation from iOS 14.5 privacy policies, severe creative fatigue cycles (ads fatiguing within 10 days), and CPA inflation during budget scaling throttled growth.',
        strategy: [
          'Implement weekly Dynamic Creative Testing (DCT) using the 3:2:2 methodology (3 hooks, 2 primary texts, 2 CTAs).',
          'Deploy server-side Meta Conversions API (CAPI) on Cloud Run restoring signal loss and event matching scores.',
          'Consolidate ad account architecture relying on Broad Targeting and Advantage+ Shopping Campaigns (ASC).',
          'Integrate Triple Whale First-Party Data telemetry to monitor true Blended ROAS and new customer acquisition cost (nCAC).'
        ],
        execution: [
          'Produced 30+ vertical UGC creator videos emphasizing relatable hooks, ingredient transparency, and sensory ASMR textures.',
          'Graduated validated winning creatives into a dedicated high-budget Campaign Budget Optimization (CBO) scaling campaign.',
          'Constructed high-converting bundle offer landing pages ("Buy 2 Get 1") that lifted Average Order Value (AOV) by 35%.',
          'Deployed dynamic Meta Catalog ads capturing high-intent cart abandoners with exclusive incentive coupons.'
        ],
        results: [
          {
            highlight: '8.5x Blended ROAS',
            description: 'Sustained an exceptional 8.5x Return on Ad Spend through aggressive Q4 seasonal holiday volume.'
          },
          {
            highlight: 'Rp 3.8 Billion Sales',
            description: 'Generated over Rp 3.8 billion in direct e-commerce gross merchandise value attributed to Meta campaigns.'
          },
          {
            highlight: '5x Budget Scale',
            description: 'Scaled monthly ad budgets 5-fold profitably without sacrificing bottom-line unit margins.'
          }
        ],
        keyLearnings: 'In contemporary Meta advertising, creative velocity (creative is the new targeting) and server-side CAPI data integrity are the dual pillars required for profitable e-commerce scale.'
      }
    }
  },

  'ads-app-install-fintech-google-uac': {
    id: 'ads-app-install-fintech-google-uac',
    role: {
      id: 'Mobile App Growth & User Acquisition Lead',
      en: 'Mobile App Growth & User Acquisition Lead'
    },
    timeline: {
      id: '9 Bulan (Maret - November 2023)',
      en: '9 Months (March - November 2023)'
    },
    industry: {
      id: 'Fintech, Digital Payments & E-Wallet',
      en: 'Fintech, Digital Payments & E-Wallet'
    },
    content: {
      id: {
        overview: 'DompetCerdas adalah aplikasi dompet digital dan pembayaran tagihan multi-layanan. Kami merancang dan mengoptimalkan kampanye akuisisi pengguna berskala besar melalui Google App Campaigns (Universal App Campaigns - UAC) yang berfokus pada event transaksi pengguna aktif bernilai tinggi.',
        challenge: 'Tingginya angka uninstall aplikasi setelah pengunduhan pertama (> 65%) dan biaya akuisisi per pengguna aktif bernilai tinggi (LTV) yang terus membengkak jika kampanye hanya dioptimalkan pada kuantitas instalasi aplikasi (Cost per Install).',
        strategy: [
          'Pergeseran fokus optimasi dari "App Installs" (tUAC 1.0) menjadi "In-App Actions" (tUAC 2.0) berorientasi pada event setoran saldo pertama (First Deposit).',
          'Penyediaan aset kreatif komprehensif: kombinasi video vertikal, horizontal, square, dan aset HTML5 interaktif yang disukai algoritma Google.',
          'Integrasi atribusi data mendalam menggunakan AppsFlyer dan Google Analytics for Firebase.',
          'Pemberian insentif cashback bersyarat pada transaksi perdana untuk memicu kebiasaan bertransaksi (habitual usage).'
        ],
        execution: [
          'Menghubungkan event in-app "first_deposit_completed" dan "kyc_verified" dari AppsFlyer ke Google Ads sebagai sasaran konversi utama.',
          'Membuat 25 variasi materi video animasi informatif yang menjelaskan kemudahan transfer antar bank gratis biaya admin.',
          'Mengatur alur push notification otomatis di dalam aplikasi bagi pengguna yang belum menyelesaikan transaksi dalam 24 jam pertama.',
          'Menganalisis cohort retensi D1, D7, dan D30 di BigQuery untuk menyaring segmen pengguna dengan frekuensi transaksi tertinggi.'
        ],
        results: [
          {
            highlight: '180,000+ App Installs',
            description: 'Mendatangkan lebih dari 180.000 instalasi aplikasi terverifikasi dengan tingkat retensi D30 di atas 24%.'
          },
          {
            highlight: '-42% Cost Per Deposit',
            description: 'Biaya akuisisi pengguna yang melakukan pengisian saldo pertama turun sebesar 42% dibanding periode sebelumnya.'
          },
          {
            highlight: '+160% Monthly Active Users',
            description: 'Jumlah Pengguna Aktif Bulanan (MAU) melonjak pesat dan menghasilkan perputaran volume transaksi keuangan yang sehat.'
          }
        ],
        keyLearnings: 'Mengejar instalasi aplikasi murah tanpa menghubungkan konversi ke tindakan bernilai bisnis (first deposit) adalah perangkap umum dalam pemasaran aplikasi: selalu optimalkan algoritma pada monetisasi hilir.'
      },
      en: {
        overview: 'DompetCerdas is a multi-feature digital wallet and bill payment mobile platform. We designed and scaled user acquisition campaigns utilizing Google App Campaigns (UAC) engineered to acquire high-LTV transacting users.',
        challenge: 'A brutal post-install churn rate (>65% within 48 hours) and escalating cost per active user when campaigns were previously optimized solely for volume installs (CPI).',
        strategy: [
          'Shift campaign optimization from raw installs (tUAC 1.0) to in-app conversion events (tUAC 2.0) centered on "First Deposit".',
          'Supply the algorithm with diverse creative inventory: vertical, landscape, square video assets and playable HTML5 interactives.',
          'Establish rigorous mobile measurement attribution utilizing AppsFlyer integrated with Firebase Analytics.',
          'Structure targeted onboarding cashback incentives conditional upon first wallet top-up to foster habitual usage.'
        ],
        execution: [
          'Configured postback webhooks forwarding "first_deposit_completed" and "kyc_verified" events from AppsFlyer to Google Ads.',
          'Produced 25 dynamic motion graphic video assets highlighting instant zero-fee interbank transfers.',
          'Orchestrated automated in-app push triggers re-engaging users who installed but hadn’t deposited within 24 hours.',
          'Performed D1, D7, and D30 cohort retention analysis in BigQuery to isolate high-frequency transaction demographics.'
        ],
        results: [
          {
            highlight: '180,000+ Installs',
            description: 'Delivered over 180,000 verified app installs sustaining an above-benchmark 24% D30 retention rate.'
          },
          {
            highlight: '-42% Cost Per Deposit',
            description: 'Acquisition cost per funded wallet user dropped by 42% compared to historical baselines.'
          },
          {
            highlight: '+160% Active Users',
            description: 'Monthly Active User (MAU) volume surged, propelling healthy transaction velocity across utility categories.'
          }
        ],
        keyLearnings: 'Chasing low-cost app downloads without anchoring bidding to bottom-funnel business actions (first deposits) is a common mobile growth pitfall: train algorithms on downstream value.'
      }
    }
  },

  'ads-tiktok-gen-z-acquisition': {
    id: 'ads-tiktok-gen-z-acquisition',
    role: {
      id: 'TikTok Ads Strategist & Creative Content Director',
      en: 'TikTok Ads Strategist & Creative Content Director'
    },
    timeline: {
      id: '6 Bulan (Juli - Desember 2022)',
      en: '6 Months (July - December 2022)'
    },
    industry: {
      id: 'Streetwear Fashion, D2C Apparel & Gen Z Retail',
      en: 'Streetwear Fashion, D2C Apparel & Gen Z Retail'
    },
    content: {
      id: {
        overview: 'StreetVibe Apparel adalah brand fesyen streetwear lokal untuk segmen anak muda (Gen Z). Kami merancang dan mengeksekusi kampanye iklan TikTok native menggunakan konten kreator UGC autentik dan Spark Ads yang memicu viralitas serta transaksi instan di TikTok Shop.',
        challenge: 'Iklan bergaya komersial konvensional berkinerja buruk di TikTok karena penonton mengabaikan materi yang terlihat seperti "iklan". Biaya per view murah namun rasio klik (CTR) dan konversi pembelian sangat rendah.',
        strategy: [
          'Penerapan filosofi: "Don’t Make Ads, Make TikToks" dengan memproduksi video bergaya native (kamera HP tanpa filter berlebih, hook tren musik viral).',
          'Pemanfaatan Spark Ads untuk mempromosikan postingan organik dari akun kreator yang telah terbukti menghasilkan engagement alami tinggi.',
          'Integrasi langsung dengan katalog produk TikTok Shop untuk memfasilitasi checkout instan tanpa keluar dari aplikasi.',
          'Penyusunan jadwal live shopping terjadwal yang didukung oleh iklan pendorong penonton siaran langsung (Live Shopping Ads).'
        ],
        execution: [
          'Bekerja sama dengan 40 kreator konten mikro TikTok untuk membuat video OOTD (Outfit of the Day) dan styling mix-and-match.',
          'Menguji 15 variasi video baru setiap minggu dengan memotong video pada 3 detik pertama menggunakan hook kontroversial atau visual mencolok.',
          'Mengoptimalkan kampanye Live Shopping Ads selama event Flash Sale mingguan yang mendorong 40% dari total omset mingguan.',
          'Menggunakan TikTok Pixel dan Events API untuk melacak data pembeli dan membangun Custom Audiences untuk retargeting.'
        ],
        results: [
          {
            highlight: '6.2x Campaign ROAS',
            description: 'Meraih tingkat pengembalian belanja iklan rata-rata 6.2x sepanjang masa penayangan kampanye.'
          },
          {
            highlight: '3.8% CTR (Click-Through Rate)',
            description: 'Rasio klik ke toko jauh melampaui rata-rata industri fesyen di platform TikTok (rata-rata industri ~1.2%).'
          },
          {
            highlight: '45,000+ Products Sold',
            description: 'Lebih dari 45.000 potong pakaian streetwear terjual secara langsung melalui ekosistem TikTok Shop.'
          }
        ],
        keyLearnings: 'Di TikTok, otentisitas mengalahkan kualitas sinematik: video sederhana buatan kreator nyata dengan gaya storytelling organik menghasilkan konversi penjualan yang jauh lebih masif daripada video studio mahal.'
      },
      en: {
        overview: 'StreetVibe Apparel is a contemporary streetwear brand targeting the Gen-Z demographic. We engineered native TikTok ad campaigns leveraging authentic creator UGC and Spark Ads to catalyze viral momentum and direct TikTok Shop checkouts.',
        challenge: 'Traditional studio-shot commercial advertisements fell flat on TikTok as users instinctively swiped away. While CPMs were low, click-through and purchase conversion metrics were anemic.',
        strategy: [
          'Embrace the platform ethos: "Don’t Make Ads, Make TikToks" with raw, unpolished smartphone footage and viral audio hooks.',
          'Leverage Spark Ads boosting authentic organic creator posts that exhibited proven organic engagement signals.',
          'Integrate frictionless in-app TikTok Shop product catalogs enabling checkout without leaving the app environment.',
          'Coordinate dedicated Live Shopping Ads timed with weekly flash sales to maximize live broadcast attendance and GMV.'
        ],
        execution: [
          'Partnered with 40 micro-creators producing relatable streetwear "outfit of the day" (OOTD) styling transformations.',
          'Tested 15 fresh video iterations weekly, deploying disruptive 3-second visual and audio narrative hooks.',
          'Amplified Live Shopping Ads during weekend Flash Sale windows, generating 40% of weekly gross merchandise volume.',
          'Configured TikTok Pixel alongside Events API to track purchase completions and build high-intent retargeting pools.'
        ],
        results: [
          {
            highlight: '6.2x Blended ROAS',
            description: 'Maintained a strong 6.2x Return on Ad Spend across paid TikTok Shop campaigns.'
          },
          {
            highlight: '3.8% Click-Through Rate',
            description: 'Substantially outpaced retail apparel benchmarks on TikTok (which average approximately 1.2% CTR).'
          },
          {
            highlight: '45,000+ Garments Sold',
            description: 'Transacted over 45,000 streetwear pieces directly within the integrated TikTok Shop ecosystem.'
          }
        ],
        keyLearnings: 'On TikTok, relatable authenticity completely outperforms studio sheen: genuine creator content and conversational storytelling convert at multiples of polished corporate commercials.'
      }
    }
  },

  'ads-linkedin-b2b-enterprise-abm': {
    id: 'ads-linkedin-b2b-enterprise-abm',
    role: {
      id: 'B2B Account-Based Marketing (ABM) Consultant',
      en: 'B2B Account-Based Marketing (ABM) Consultant'
    },
    timeline: {
      id: '8 Bulan (April - November 2021)',
      en: '8 Months (April - November 2021)'
    },
    industry: {
      id: 'Enterprise Cloud Infrastructure & Cybersecurity',
      en: 'Enterprise Cloud Infrastructure & Cybersecurity'
    },
    content: {
      id: {
        overview: 'InovasiCloud Solusindo adalah penyedia infrastruktur cloud hybrid dan solusi keamanan siber untuk sektor perbankan dan telekomunikasi. Kami merancang kampanye Account-Based Marketing (ABM) presisi tinggi melalui LinkedIn Ads yang menargetkan pengambil keputusan level C (CIO, CTO, CISO) pada 200 perusahaan konglomerasi Indonesia.',
        challenge: 'Target audiens sangat kecil namun bernilai kontrak sangat besar (ACV > Rp 1 Miliar). Iklan massal di platform konsumen tidak efektif dan LinkedIn Ads memiliki CPM yang mahal jika tidak ditargetkan secara presisi.',
        strategy: [
          'Penyusunan Target Account List (TAL) yang mencakup 200 korporasi perbankan, finansial, dan manufaktur terbesar di Indonesia.',
          'Penargetan LinkedIn berbasis kombinasi Company List Match + Job Title (CIO, CTO, CISO, Head of IT Infrastructure).',
          'Pembuatan materi konten gated bernilai tinggi: "Indonesia Enterprise Cloud Security & Compliance Whitepaper".',
          'Pemanfaatan LinkedIn Lead Gen Forms native untuk mengurangi friksi pengisian formulir pada perangkat seluler eksekutif.'
        ],
        execution: [
          'Memetakan daftar akun sasaran dan memvalidasi kontak pengambil keputusan menggunakan data Sales Navigator dan CRM Salesforce.',
          'Merancang variasi format iklan: Single Image Ads berwibawa, Thought Leadership Carousel, dan Personalized Message Ads.',
          'Mengintegrasikan form LinkedIn langsung ke CRM dengan notifikasi real-time ke Enterprise Account Directors.',
          'Menyelenggarakan webinar privat eksklusif (Executive Roundtable) hanya untuk para pendaftar whitepaper terverifikasi.'
        ],
        results: [
          {
            highlight: '14.2% Form Fill Rate',
            description: 'Tingkat pengisian LinkedIn Lead Gen Form mencapai 14.2% (rata-rata industri B2B ~3-5%).'
          },
          {
            highlight: '8 Enterprise Deals Closed',
            description: 'Berhasil memfasilitasi penutupan 8 kontrak infrastruktur cloud enterprise bernilai miliaran rupiah.'
          },
          {
            highlight: '74 Target Accounts Engaged',
            description: 'Sebanyak 74 dari 200 perusahaan target enterprise berhasil dijangkau dan masuk ke dalam pipeline negosiasi aktif.'
          }
        ],
        keyLearnings: 'Dalam B2B Account-Based Marketing, biaya per klik mahal di LinkedIn terbukti sangat efisien jika materi konten yang ditawarkan memecahkan masalah strategis dan kepatuhan regulasi tingkat direksi.'
      },
      en: {
        overview: 'InovasiCloud Solusindo provides enterprise hybrid cloud infrastructure and cybersecurity solutions for banking and telecommunication conglomerates. We architected a precision Account-Based Marketing (ABM) LinkedIn campaign targeting CIOs, CTOs, and CISOs across 200 key enterprise accounts in Indonesia.',
        challenge: 'A highly concentrated target addressable market with immense contract values (ACV > Rp 1 Billion). Generic ad platforms yielded zero enterprise traction, while LinkedIn’s premium CPMs demanded zero wasted impressions.',
        strategy: [
          'Curate a strict Target Account List (TAL) encompassing 200 premier financial and telecom institutions.',
          'Target LinkedIn audiences through matched company lists intersected with executive titles (CIO, CTO, CISO, VP Engineering).',
          'Produce an authoritative gated research paper: "Indonesia Enterprise Cloud Security & Compliance Whitepaper".',
          'Deploy native LinkedIn Lead Gen Forms eliminating friction on mobile executive touchpoints.'
        ],
        execution: [
          'Matched enterprise target registries against Salesforce CRM records with verification via Sales Navigator.',
          'Deployed a multi-format ad sequence: Thought Leadership Carousels, InMail invitations, and single-image stat callouts.',
          'Integrated native lead form webhooks instantly notifying designated Enterprise Account Directors within 5 minutes.',
          'Hosted invitation-only executive roundtables exclusively for verified registrants from target accounts.'
        ],
        results: [
          {
            highlight: '14.2% Lead Form Fill Rate',
            description: 'Achieved a 14.2% form completion rate on LinkedIn Lead Gen Forms (industry average is ~3-5%).'
          },
          {
            highlight: '8 Enterprise Deals Won',
            description: 'Directly influenced and enabled 8 enterprise multi-year cloud contracts worth billions of Rupiah.'
          },
          {
            highlight: '74 Target Accounts Engaged',
            description: 'Successfully penetrated and advanced 74 of the 200 target conglomerates into active sales discovery.'
          }
        ],
        keyLearnings: 'In enterprise Account-Based Marketing, premium LinkedIn advertising economics deliver unmatched ROI when collateral directly addresses boardroom compliance and risk mitigation mandates.'
      }
    }
  },

  'ads-retargeting-omnichannel-funnel': {
    id: 'ads-retargeting-omnichannel-funnel',
    role: {
      id: 'Full-Funnel Retargeting & Retention Architect',
      en: 'Full-Funnel Retargeting & Retention Architect'
    },
    timeline: {
      id: '7 Bulan (Juni - Desember 2020)',
      en: '7 Months (June - December 2020)'
    },
    industry: {
      id: 'Home Furniture, Interior Design & E-Commerce',
      en: 'Home Furniture, Interior Design & E-Commerce'
    },
    content: {
      id: {
        overview: 'MegaFurniture Indonesia adalah peritel furnitur dan perabot rumah tangga modern. Kami merancang arsitektur penargetan ulang multi-saluran (Omnichannel Dynamic Retargeting) terintegrasi yang menggabungkan Google Display, Meta Catalog Ads, YouTube Video, dan automasi email Klaviyo untuk memulihkan keranjang belanja yang ditinggalkan (abandoned carts).',
        challenge: 'Siklus pertimbangan pembelian furnitur bernilai tinggi relatif panjang (14-30 hari) dengan tingkat cart abandonment mencapai 78%. Kampanye penargetan ulang sebelumnya dilakukan tanpa segmentasi waktu sehingga mengganggu calon pembeli.',
        strategy: [
          'Segmentasi jendela retargeting dinamis berdasarkan recency: 0-3 hari (urgensi), 4-14 hari (edukasi & testimoni), 15-30 hari (penawaran diskon terbatas).',
          'Pemanfaatan Dynamic Product Ads (DPA) yang secara otomatis menampilkan produk spesifik yang dilihat pengguna di website.',
          'Penyusunan urutan penargetan ulang multi-layar yang konsisten: Meta feed, Google Display Network, dan bumper video YouTube 6 detik.',
          'Sinkronisasi daftar audiens dengan automasi email Klaviyo untuk mencegah pengiriman iklan berbayar jika pelanggan telah menyelesaikan pembelian.'
        ],
        execution: [
          'Memasang Google Tag Manager dan Meta Pixel dengan parameter detail produk (item_id, item_price, category).',
          'Membuat template katalog Meta yang diperkaya dengan badge potongan harga, ulasan bintang 5, dan garansi 2 tahun.',
          'Mengonfigurasi exclusion list dinamis agar pembeli yang sudah checkout otomatis dikeluarkan dari semua audiens retargeting.',
          'Menyiapkan promo ongkos kirim flat rate bersubsidi untuk mengatasi keberatan utama biaya pengiriman barang furnitur besar.'
        ],
        results: [
          {
            highlight: '+34% Cart Recovery',
            description: 'Tingkat pemulihan keranjang belanja berhasil ditingkatkan sebesar 34% dibanding sebelum implementasi sistem.'
          },
          {
            highlight: '9.8x Incremental ROAS',
            description: 'Mencapai pengembalian belanja iklan retargeting inkremental sebesar 9.8x dari anggaran yang dialokasikan.'
          },
          {
            highlight: '-45% Customer Churn',
            description: 'Mempersingkat rata-rata siklus pertimbangan pembelian dari 28 hari menjadi 12 hari.'
          }
        ],
        keyLearnings: 'Penargetan ulang yang efektif bukanlah membombardir pengguna dengan produk yang sama tanpa henti, melainkan menyampaikan pesan yang relevan sesuai tahap keraguan calon pembeli dengan pembatasan frekuensi penayangan (frequency capping) yang ketat.'
      },
      en: {
        overview: 'MegaFurniture Indonesia is a contemporary home furniture retailer. We developed an omnichannel dynamic retargeting matrix spanning Google Display, Meta Catalog Ads, YouTube bumper ads, and Klaviyo email flows to recover abandoned cart revenues.',
        challenge: 'High-ticket furniture purchase decisions involve lengthy 14 to 30-day consideration windows and high cart abandonment (78%). Unsegmented legacy retargeting created ad fatigue and irritated prospective buyers.',
        strategy: [
          'Architect time-decay retargeting cohorts: 0-3 days (urgency), 4-14 days (social proof & reviews), 15-30 days (limited financing incentive).',
          'Deploy Dynamic Product Ads (DPA) reflecting exact SKU variations and complementary catalog pairings.',
          'Sequence cross-channel creative touchpoints across Meta Feeds, Google Display Network, and 6-second YouTube bumper ads.',
          'Synchronize real-time audience exclusion suppression using Klaviyo webhooks to halt paid impressions immediately upon purchase.'
        ],
        execution: [
          'Instrumented Google Tag Manager and Meta Conversions API capturing granular SKU values, categories, and inventory statuses.',
          'Enhanced dynamic product feed catalogs with promotional overlays highlighting 2-year warranty seals and installment options.',
          'Automated real-time audience exclusions eliminating ad spend on customers who completed transactions.',
          'Introduced a flat-rate subsidized delivery promo addressing the primary friction point of bulky furniture freight fees.'
        ],
        results: [
          {
            highlight: '+34% Cart Recovery',
            description: 'Abandoned cart checkout recovery climbed 34% over prior baseline quarters.'
          },
          {
            highlight: '9.8x Incremental ROAS',
            description: 'Delivered an exceptional 9.8x incremental Return on Ad Spend dedicated to retargeting allocations.'
          },
          {
            highlight: '-45% Purchase Latency',
            description: 'Shortened average buying consideration intervals from 28 days down to 12 days.'
          }
        ],
        keyLearnings: 'Effective retargeting is not ceaseless ad bombardment; it is the art of delivering sequential answers to prospective buyer objections regulated by disciplined frequency capping.'
      }
    }
  }
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return portfolioDetails[id];
}
