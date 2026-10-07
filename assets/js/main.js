/**
 * REKA SAUJANA FALAH - CORPORATE PROFILE & OFFICIAL D-U-N-S DIRECTORY
 * Core Client-side Engine: Bilingual Switcher, Contact Dispatcher & UI Logic
 */

// Comprehensive i18n Translation Dictionary
const translations = {
  id: {
    // Meta & Head
    pageTitle: "Reka Saujana Falah | Studio Pengembangan Game & Rekayasa Perangkat Lunak",
    
    // Header & Navigation
    navAbout: "Tentang Kami",
    navServices: "Layanan & Produk",
    navPrinciples: "Prinsip Kerja",
    navVerification: "Verifikasi Entitas",
    navContact: "Kontak",
    btnHeaderCta: "Hubungi Kami",

    // Hero Section
    heroBadge: "Entitas Terdaftar Resmi • Berdiri 2026 • Jawa Barat, ID",
    heroTitlePrefix: "Membangun Pengalaman Interaktif &",
    heroTitleGradient: "Solusi Perangkat Lunak",
    heroTitleSuffix: "Masa Depan",
    heroSubtitle: "Reka Saujana Falah berfokus pada pengembangan video gim, rekayasa perangkat lunak pendukung alur produksi gim, dan solusi pemrograman komputer terpadu yang efisien, handal, dan berdaya guna.",
    heroCtaPrimary: "Hubungi & Kerjasama",
    heroCtaSecondary: "Pelajari Kapabilitas",

    // Hero Metrics
    metric1Val: "2026",
    metric1Lbl: "Tahun Berdiri",
    metric2Val: "2 LINI",
    metric2Lbl: "Klasifikasi KBLI",
    metric3Val: "JAWA BARAT",
    metric3Lbl: "Wilayah Operasional",
    metric4Val: "MULTI-PLATFORM",
    metric4Lbl: "Ekosistem Solusi",

    // About Section
    aboutTag: "PROFIL KORPORASI",
    aboutTitle: "Dedikasi Teknis & Fondasi Rekayasa Perangkat Lunak",
    aboutDesc: "Ikhtisar resmi perusahaan untuk kepatuhan regulasi, pendaftaran direktori global (D-U-N-S), dan kemitraan strategis.",
    aboutLead: "Reka Saujana Falah adalah entitas teknologi independen yang didirikan pada tahun 2026 di Jawa Barat, Indonesia.",
    aboutBody: "Kami mengintegrasikan keahlian teknis pemrograman tingkat lanjut dengan perancangan arsitektur perangkat lunak yang pragmatis. Fokus utama kami mencakup siklus hidup pengembangan video gim modern serta implementasi solusi komputasi kustom untuk menunjang kebutuhan industri digital tanpa klaim berlebihan dan berpijak pada eksekusi terukur.",
    
    pillar1Title: "Presisi Teknis",
    pillar1Desc: "Menulis kode yang bersih, terdokumentasi, dan arsitektur yang mudah dipelihara.",
    pillar2Title: "Desain Berdaya Guna",
    pillar2Desc: "Mengutamakan efisiensi performa dan pengalaman pengguna yang responsif.",
    pillar3Title: "Kemitraan Terbuka",
    pillar3Desc: "Komunikasi transparan dan pencapaian target yang realistis serta terverifikasi.",

    // D-U-N-S Compliance Card
    verifyCardBadge: "D-U-N-S® COMPLIANCE READY",
    verifyItem1Lbl: "Nama Legal Entitas",
    verifyItem1Val: "Reka Saujana Falah",
    verifyItem2Lbl: "Tahun Pendirian",
    verifyItem2Val: "2026",
    verifyItem3Lbl: "Klasifikasi Baku Lapangan Usaha (KBLI)",
    verifyItem3Val: "62014 (Video Gim) & 62019 (Pemrograman Lainnya)",
    verifyItem4Lbl: "Yurisdiksi & Domisili",
    verifyItem4Val: "Jawa Barat, Indonesia",
    verifyItem5Lbl: "Kanal Komunikasi Resmi",
    verifyItem5Val: "Email & WhatsApp Terverifikasi",
    verifyFooterText: "Data entitas resmi disiapkan untuk audit kelayakan D-U-N-S Dun & Bradstreet.",

    // Services Section
    servicesTag: "PRODUK & KAPABILITAS",
    servicesTitle: "Fokus Solusi & Rekayasa Digital",
    servicesDesc: "Pendekatan modern dan ramping dalam membangun ekosistem gim dan sistem komputasi berkinerja tinggi.",
    
    service1Code: "KBLI 62014",
    service1Title: "Pengembangan Video Gim & Perangkat Lunak Pendukung",
    service1Desc: "Perancangan mekanika interaktif, rekayasa logika gameplay, optimalisasi kinerja multi-platform, dan pembuatan tooling produksi gim yang mempercepat alur kerja.",
    s1Cap1: "Prototipe interaktif & mekanik gameplay berbasis engine modern",
    s1Cap2: "Alat pendukung (tooling), integrasi pipeline aset, & otomasi build",
    s1Cap3: "Optimalisasi performa memori dan rendering (PC & Mobile)",

    service2Code: "KBLI 62019",
    service2Title: "Aktivitas Pemrograman Komputer Lainnya YTDL",
    service2Desc: "Layanan rekayasa perangkat lunak kustom, pengembangan sistem backend, integrasi RESTful/API antarsistem, otomasi data, dan aplikasi komputer fungsional.",
    s2Cap1: "Pengembangan arsitektur backend, RESTful API, & manajemen database",
    s2Cap2: "Aplikasi komputer desktop & web kustom berorientasi utilitas",
    s2Cap3: "Otomasi pemrosesan logika, skrip integrasi, & pemeliharaan sistem",

    // Principles Section
    principlesTag: "STANDAR KERJA",
    principlesTitle: "Prinsip Operasional Kami",
    principlesDesc: "Menjaga kualitas teknis dan reliabilitas sistem dalam setiap inisiatif pengembangan.",
    prin1Title: "Efisiensi & Skalabilitas",
    prin1Desc: "Memilih teknologi yang tepat guna tanpa kompleksitas yang tidak dibutuhkan, memastikan sistem ringan dan mudah dikembangkan.",
    prin2Title: "Keamanan & Stabilitas",
    prin2Desc: "Menerapkan standar keamanan data mendasar, validasi input yang ketat, dan penanganan exception yang menyeluruh.",
    prin3Title: "Penyampaian Tepat Waktu",
    prin3Desc: "Manajemen siklus hidup proyek yang transparan dengan milestone yang terukur serta bebas dari ekspektasi fiktif.",

    // Contact Section
    contactTag: "KOMUNIKASI RESMI",
    contactTitle: "Hubungi & Penjajakan Kerjasama",
    contactDesc: "Semua info lebih lanjut, verifikasi entitas, maupun konsultasi proyek diarahkan langsung ke kanal resmi kami.",
    contactLead: "Kami menyambut baik diskusi seputar proyek pengembangan gim, kemitraan rekayasa perangkat lunak, maupun kebutuhan verifikasi korporasi.",
    
    chanWaLbl: "WhatsApp Resmi",
    chanMailLbl: "Email Resmi",
    chanLocLbl: "Domisili Operasional",
    chanLocVal: "Jawa Barat, Indonesia",

    btnCopy: "Salin",
    btnDirectOpen: "Buka Langsung",

    // Inquiry Helper Card
    inquiryTitle: "Kirim Pesan Penjajakan",
    inquirySubtitle: "Tuliskan kebutuhan Anda, pilih jalur pengiriman cepat via WhatsApp atau Email:",
    lblFormName: "Nama Anda / Entitas:",
    placeholderName: "Contoh: Budi Santoso (PT Mitra Digital)",
    lblFormSubject: "Subjek Diskusi:",
    placeholderSubject: "Contoh: Penjajakan Kolaborasi Game / Perangkat Lunak",
    lblFormMsg: "Pesan Singkat:",
    placeholderMsg: "Jelaskan ringkasan kebutuhan atau hal yang ingin didiskusikan...",
    btnSendWa: "Kirim via WhatsApp",
    btnSendMail: "Kirim via Email",

    // Footer
    footerBrandDesc: "Reka Saujana Falah — Studio pengembangan video gim dan solusi rekayasa perangkat lunak berkedudukan di Jawa Barat, Indonesia. Berdiri tahun 2026.",
    footerNavTitle: "Navigasi Cepat",
    footerLegalTitle: "Kepatuhan & Kontak",
    footerCopyright: "© 2026 Reka Saujana Falah. Hak cipta dilindungi undang-undang.",
    footerPrivacy: "Kebijakan Privasi & Kepatuhan",
    toastCopied: "Teks berhasil disalin ke papan klip!"
  },

  en: {
    // Meta & Head
    pageTitle: "Reka Saujana Falah | Game Development Studio & Custom Software Engineering",

    // Header & Navigation
    navAbout: "About Us",
    navServices: "Services & Products",
    navPrinciples: "Core Principles",
    navVerification: "Entity Verification",
    navContact: "Contact",
    btnHeaderCta: "Get in Touch",

    // Hero Section
    heroBadge: "Officially Registered Entity • Established 2026 • West Java, ID",
    heroTitlePrefix: "Engineering Interactive Experiences &",
    heroTitleGradient: "Future-Ready Software",
    heroTitleSuffix: "Solutions",
    heroSubtitle: "Reka Saujana Falah specializes in video game development, game engine production tooling, and custom computer programming architectures designed for efficiency, resilience, and measurable utility.",
    heroCtaPrimary: "Contact & Inquire",
    heroCtaSecondary: "Explore Capabilities",

    // Hero Metrics
    metric1Val: "2026",
    metric1Lbl: "Year Established",
    metric2Val: "2 SECTORS",
    metric2Lbl: "ISIC/KBLI Classifications",
    metric3Val: "WEST JAVA",
    metric3Lbl: "Operational Base",
    metric4Val: "MULTI-PLATFORM",
    metric4Lbl: "Delivery Capability",

    // About Section
    aboutTag: "CORPORATE OVERVIEW",
    aboutTitle: "Engineering Rigor & Sustainable Software Foundations",
    aboutDesc: "Official corporate summary designed for regulatory compliance, international directory accreditation (D-U-N-S), and strategic partnerships.",
    aboutLead: "Reka Saujana Falah is an independent software and digital technology enterprise established in 2026 in West Java, Indonesia.",
    aboutBody: "We integrate rigorous programming disciplines with pragmatic systems architecture. Our primary operations span the complete modern video game production lifecycle and custom computing solutions for the digital economy—delivered transparently, efficiently, and grounded in verifiable technical execution.",
    
    pillar1Title: "Technical Precision",
    pillar1Desc: "Writing clean, documented, and maintainable production codebases.",
    pillar2Title: "Functional Architecture",
    pillar2Desc: "Prioritizing runtime responsiveness, algorithmic efficiency, and low overhead.",
    pillar3Title: "Transparent Collaboration",
    pillar3Desc: "Open communication with pragmatic, achievable milestones and delivery.",

    // D-U-N-S Compliance Card
    verifyCardBadge: "D-U-N-S® COMPLIANCE READY",
    verifyItem1Lbl: "Legal Business Name",
    verifyItem1Val: "Reka Saujana Falah",
    verifyItem2Lbl: "Year of Establishment",
    verifyItem2Val: "2026",
    verifyItem3Lbl: "Standard Industry Classification (KBLI)",
    verifyItem3Val: "62014 (Video Games) & 62019 (Custom Programming)",
    verifyItem4Lbl: "Jurisdiction & Location",
    verifyItem4Val: "West Java, Indonesia",
    verifyItem5Lbl: "Official Communication Channels",
    verifyItem5Val: "Verified Corporate Email & WhatsApp",
    verifyFooterText: "Corporate records structured for Dun & Bradstreet D-U-N-S validation review.",

    // Services Section
    servicesTag: "CORE CAPABILITIES",
    servicesTitle: "Specialized Engineering Domains",
    servicesDesc: "A modern, focused approach to interactive entertainment and custom software architectures.",
    
    service1Code: "KBLI 62014",
    service1Title: "Video Game Development & Supporting Software",
    service1Desc: "Design of interactive mechanics, gameplay logic runtime programming, multi-platform performance optimization, and specialized developer tooling to accelerate production pipelines.",
    s1Cap1: "Gameplay prototyping & mechanics engineering with modern engines",
    s1Cap2: "Production tooling, pipeline automation, & asset workflow integration",
    s1Cap3: "Multi-platform runtime optimization (PC & Mobile systems)",

    service2Code: "KBLI 62019",
    service2Title: "Other Computer Programming Activities n.e.c.",
    service2Desc: "Custom software engineering, backend API services, systems integration, process automation scripts, and purpose-built computational applications.",
    s2Cap1: "Backend service engineering, RESTful APIs, & database architecture",
    s2Cap2: "Custom desktop & web-based operational software utilities",
    s2Cap3: "Automated business logic, integration scripts, & codebase maintenance",

    // Principles Section
    principlesTag: "STANDARDS",
    principlesTitle: "Our Operational Principles",
    principlesDesc: "Ensuring uncompromising technical quality, system durability, and realistic delivery benchmarks.",
    prin1Title: "Efficiency & Scalability",
    prin1Desc: "Selecting the right tool for the job without unnecessary architectural bloat, ensuring lean and maintainable runtimes.",
    prin2Title: "Robustness & Security",
    prin2Desc: "Applying sound defensive programming practices, strict data validation, and resilient error recovery.",
    prin3Title: "Pragmatic Delivery",
    prin3Desc: "Predictable development lifecycles anchored to realistic deliverables without hype or inflated promises.",

    // Contact Section
    contactTag: "OFFICIAL CHANNELS",
    contactTitle: "Contact & Partnership Inquiries",
    contactDesc: "All business inquiries, enterprise partnerships, and corporate verification checks are routed to our direct official lines.",
    contactLead: "We welcome direct correspondence regarding game production collaborations, specialized software engineering contracts, and business verification inquiries.",
    
    chanWaLbl: "Official WhatsApp",
    chanMailLbl: "Official Email",
    chanLocLbl: "Operational Base",
    chanLocVal: "West Java, Indonesia",

    btnCopy: "Copy",
    btnDirectOpen: "Direct Open",

    // Inquiry Helper Card
    inquiryTitle: "Send a Direct Inquiry",
    inquirySubtitle: "Draft your inquiry below and dispatch directly via WhatsApp or Email:",
    lblFormName: "Your Name / Organization:",
    placeholderName: "e.g. Alex Johnson (Global Tech Ltd)",
    lblFormSubject: "Inquiry Topic:",
    placeholderSubject: "e.g. Game Development Partnership / Software Inquiry",
    lblFormMsg: "Inquiry Details:",
    placeholderMsg: "Describe your project requirements or the nature of your inquiry...",
    btnSendWa: "Dispatch via WhatsApp",
    btnSendMail: "Dispatch via Email",

    // Footer
    footerBrandDesc: "Reka Saujana Falah — Video game development studio and custom software engineering enterprise based in West Java, Indonesia. Founded in 2026.",
    footerNavTitle: "Quick Navigation",
    footerLegalTitle: "Compliance & Inquiries",
    footerCopyright: "© 2026 Reka Saujana Falah. All rights reserved.",
    footerPrivacy: "Privacy Policy & Compliance",
    toastCopied: "Copied to clipboard successfully!"
  }
};

// Global App State
let currentLang = localStorage.getItem('rsf_lang') || 'id';

// Initialize DOM Events
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeaderScroll();
  initMobileMenu();
  initCopyButtons();
  initInquiryDispatcher();
});

/**
 * Initialize Language Engine
 */
function initLanguage() {
  setLanguage(currentLang);

  // Bind Switcher Buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}

/**
 * Apply selected language to all data-i18n elements
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'id';
  currentLang = lang;
  localStorage.setItem('rsf_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  // Update Page Title
  if (dict.pageTitle) {
    document.title = dict.pageTitle;
  }

  // Update all text nodes
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update active state of buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Sticky Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const scrollHandler = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler();
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    const isExpanded = drawer.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close on nav link click
  drawer.querySelectorAll('.nav-item-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/**
 * Copy to Clipboard with Toast Notification
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy-target');
      if (targetText) {
        navigator.clipboard.writeText(targetText).then(() => {
          showToast(translations[currentLang].toastCopied);
        }).catch(() => {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = targetText;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showToast(translations[currentLang].toastCopied);
        });
      }
    });
  });
}

/**
 * Toast Feedback Popup
 */
function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Interactive Contact Dispatcher (WhatsApp & Email Direct Generator)
 */
function initInquiryDispatcher() {
  const nameInput = document.getElementById('inquiryName');
  const subjectInput = document.getElementById('inquirySubject');
  const msgInput = document.getElementById('inquiryMessage');
  const btnWa = document.getElementById('btnDispatchWa');
  const btnEmail = document.getElementById('btnDispatchEmail');

  const officialEmail = "golongankuwayuhan@gmail.com";
  const officialPhoneClean = "6289601014132"; // +62 896-0101-4132

  if (btnWa) {
    btnWa.addEventListener('click', (e) => {
      e.preventDefault();
      const sender = nameInput ? nameInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const body = msgInput ? msgInput.value.trim() : "";

      let text = `Halo Reka Saujana Falah,\n\n`;
      if (sender) text += `Nama / Entitas: ${sender}\n`;
      if (subject) text += `Topik: ${subject}\n\n`;
      if (body) {
        text += `Pesan:\n${body}\n\n`;
      } else {
        text += `Saya ingin mengajukan pertanyaan / penjajakan kerjasama.\n\n`;
      }
      text += `Terima kasih.`;

      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/${officialPhoneClean}?text=${encoded}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const sender = nameInput ? nameInput.value.trim() : "";
      const subject = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : "Penjajakan Kerjasama / Inquiry - Reka Saujana Falah";
      const body = msgInput ? msgInput.value.trim() : "";

      let emailBody = `Halo Tim Reka Saujana Falah,\n\n`;
      if (sender) emailBody += `Pengirim: ${sender}\n\n`;
      if (body) {
        emailBody += `Pesan:\n${body}\n\n`;
      } else {
        emailBody += `Saya tertarik untuk melakukan penjajakan kerjasama dengan Reka Saujana Falah.\n\n`;
      }
      emailBody += `Salam,\n${sender || "Rekan Bisnis"}`;

      const mailtoUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    });
  }
}
