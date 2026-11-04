// Ubah nilai pada objek ini untuk memperbarui seluruh konten company profile phiintegrasi.com.
// Data portofolio, proyek, HAKI, dan kepemimpinan teknis diintegrasikan dari github.com/harrynurbudyana dan github.com/ivantans (ivantans.id).
export const initialSiteData = {
  brand: {
    logoPlaceholder: "[LOGO: PHI INTEGRASI]",
    companyName: "PT PHI Integrasi",
    domain: "phiintegrasi.com",
    legalEntity: "[REAL DATA: Nama Resmi Badan Hukum PT / HardTech IT Solution]",
    registrationNumber: "3+ HAKI Terdaftar (Kemenkumham RI) | [REAL DATA: Nomor NIB]",
    foundedYear: "2017 - Sekarang (Kolaborasi Rekayasa & Solusi IT)",
    city: "Bandung, Jawa Barat, Indonesia",
    githubProfileUrl: "https://github.com/harrynurbudyana",
    secondGithubProfileUrl: "https://github.com/ivantans",
    secondPortfolioUrl: "https://ivantans.id",
    linkedinProfileUrl: "https://www.linkedin.com/in/harrynurbudyana/"
  },
  hero: {
    headline: "Solusi Arsitektur IT Terpadu: Website & Software, Hardware IoT, dan Infrastruktur Jaringan",
    subheadline: "Kami memberikan solusi menyeluruh terkait arsitektur IT mulai dari pembuatan website, aplikasi, dan software skala kecil hingga skala besar, pengadaan hardware IoT (custom maupun vendor), pengadaan perangkat jaringan skala kecil hingga besar berikut instalasi dan best practice-nya, serta berbagai layanan IT pendukung lainnya.",
    primaryCtaText: "Konsultasikan Kebutuhan IT",
    primaryCtaHref: "#kontak-kami",
    secondaryCtaText: "Lihat Layanan & Portfolio",
    secondaryCtaHref: "#layanan",
    metrics: [
      {
        label: "Repositori & Proyek Nyata",
        value: "55+ Repositori",
        note: "Website, aplikasi skala kecil s.d. enterprise, IoT, & jaringan"
      },
      {
        label: "Hak Kekayaan Intelektual (HAKI)",
        value: "3+ HAKI & Riset",
        note: "Terdaftar resmi di Kemenkumham RI & kolaborasi riset Telkom University"
      },
      {
        label: "Rekam Jejak Infrastruktur",
        value: "Compnet, PuTI & FIT Tel-U",
        note: "Instalasi jaringan best practice, server HA, IoT, & sistem aplikasi"
      }
    ],
    architectureTabs: [
      {
        id: "software-architecture",
        code: "ARC-01",
        title: "Website, Aplikasi, & Software (Skala Kecil s.d. Besar)",
        summary: "Pengembangan website profil/komersial, aplikasi operasional skala kecil-menengah, hingga sistem enterprise microservices, desktop native (Rust Tauri), dan mobile (Flutter).",
        sourceNodes: ["Kebutuhan UMKM, Bisnis, & Korporasi", "SSO OAuth 2.1 + PKCE & Hak Akses", "Integrasi Pembayaran & Sistem Internal"],
        gatewayLabel: "Arsitektur Aplikasi PHI (Svelte 5, Next.js, Rust Axum/Tauri, NestJS + Prisma ORM)",
        targetNodes: ["Website & Portal Aplikasi Web", "Aplikasi Desktop Ringan & Mobile Flutter", "Dashboard Operasional & Laporan"],
        deliverables: "Aplikasi sesuai skala kebutuhan, kode sumber terstruktur, dokumentasi penggunaan, dan dukungan pemeliharaan."
      },
      {
        id: "iot-hardware",
        code: "ARC-02",
        title: "Pengadaan Hardware IoT (Custom & Vendor)",
        summary: "Penyediaan perangkat keras IoT baik melalui desain PCB dan perakitan sensor kustom maupun pengadaan unit IoT/EV siap pakai dari vendor resmi beserta integrasi sistemnya.",
        sourceNodes: ["Desain PCB & Sensor Kustom (ESP32/C++)", "Perangkat IoT Industrial Vendor Resmi", "Mesin SPKLU / EV Charger (OCPP 1.6/2.0)"],
        gatewayLabel: "Integrasi Telemetri & Edge Gateway (MQTT, WebSockets, OCPP, Modbus, AI/OCR Lokal)",
        targetNodes: ["Dashboard Pemantauan Real-Time", "Kontrol Otomasi & Peringatan Dini", "Analitik Data Sensor & Energi"],
        deliverables: "Unit hardware IoT teruji (custom/vendor), firmware terkalibrasi, integrasi dashboard, dan panduan instalasi lapangan."
      },
      {
        id: "network-infrastructure",
        code: "ARC-03",
        title: "Perangkat & Instalasi Jaringan + Best Practice",
        summary: "Pengadaan perangkat jaringan skala kecil (kantor/cabang) hingga skala besar (gedung/kampus/pabrik/data center) berikut instalasi fisik, konfigurasi keamanan, dan penerapan best practice.",
        sourceNodes: ["Pengadaan Router, Switch, AP, & Server", "Instalasi Kabel LAN Cat6 / Fiber Optik", "Firewall & Manajemen Bandwidth (QoS)"],
        gatewayLabel: "Standar Best Practice Jaringan (Cisco/Fortinet/MikroTik, Segmentasi VLAN, Dual-WAN Failover, Server HA)",
        targetNodes: ["Jaringan Kantor, Gedung, & Gudang", "Klaster Server & Database Anti-Downtime", "Monitoring 24/7 (Zabbix & Uptime Kuma)"],
        deliverables: "Perangkat jaringan bergaransi, instalasi kabel rapi berlabel, konfigurasi best practice, dan dokumen topologi jaringan."
      }
    ]
  },
  profile: {
    sectionCode: "§ 01",
    title: "Tentang Kami",
    lead: "PHI Integrasi adalah penyedia solusi arsitektur IT terpadu yang didukung oleh kolaborasi insinyur sistem, pengembang aplikasi full-stack, perancang hardware IoT, dan spesialis infrastruktur jaringan berpengalaman di PT Nusantara Compnet Integrator, Direktorat PuTI & Fakultas Ilmu Terapan Telkom University.",
    body: "Kami melayani kebutuhan teknologi informasi secara menyeluruh dari skala kecil hingga skala besar: mulai dari pembuatan website dan aplikasi perangkat lunak, pengadaan hardware IoT (baik rakitan kustom maupun perangkat vendor), pengadaan perangkat jaringan beserta instalasi dan penerapan best practice-nya, hingga berbagai layanan konsultasi dan pemeliharaan IT lainnya.",
    hakiAndResearch: [
      {
        badge: "HAKI Terdaftar - Kemenkumham RI",
        title: "KedaiCas: Aplikasi Layanan Pengisian Daya Kendaraan Listrik (SPKLU)",
        meta: "Kolaborasi Riset & Rekayasa Backend OCPP | Telkom University (Harry Nurbudyana & Ivan Tanjaya)",
        desc: "Sistem perangkat lunak terintegrasi untuk manajemen stasiun pengisian kendaraan listrik, komunikasi WebSockets OCPP 1.6, reservasi, saldo, dan penagihan otomatis."
      },
      {
        badge: "HAKI Terdaftar - Kemenkumham RI",
        title: "Simulator Operasional Konversi Sepeda Motor Listrik",
        meta: "Inventor / Pemegang Hak Cipta | Fakultas Ilmu Terapan, Telkom University",
        desc: "Perangkat lunak simulasi interaktif untuk menganalisis dan memvalidasi kinerja kelistrikan pada konversi motor konvensional ke motor listrik."
      },
      {
        badge: "Publikasi Ilmiah & Riset Blockchain",
        title: "Desain Purwarupa Smart Contract Blockchain untuk Ketertelusuran Rantai Pasok Teh Putih",
        meta: "Tim Peneliti & Pengembang Smart Contract | Telkom University & LPPM (Harry Nurbudyana & Ivan Tanjaya)",
        desc: "Riset terapan dan pemodelan data smart contract blockchain guna menjamin transparansi, keaslian, dan jejak audit rantai pasok komoditas pertanian."
      }
    ],
    principles: [
      {
        iconType: "vision",
        title: "Solusi Skala Kecil hingga Skala Besar",
        text: "Kami merancang arsitektur IT yang proporsional: siap melayani pembuatan website dan jaringan untuk bisnis rintisan/UMKM maupun sistem terdistribusi untuk institusi dan korporasi besar."
      },
      {
        iconType: "mission",
        title: "Sinergi Software, IoT, & Jaringan",
        text: "Menyatukan pembuatan aplikasi perangkat lunak, pengadaan hardware IoT (custom atau vendor), dan infrastruktur jaringan di bawah satu standar rekayasa yang saling terhubung."
      },
      {
        iconType: "approach",
        title: "Instalasi & Konfigurasi Best Practice",
        text: "Setiap pengadaan dan instalasi jaringan maupun server dikerjakan mengikuti best practice industri: manajemen kabel berlabel, segmentasi VLAN, keamanan berlapis, dan dokumentasi topologi."
      },
      {
        iconType: "scope",
        title: "Layanan IT Menyeluruh & Berkelanjutan",
        text: "Menangani siklus penuh mulai dari konsultasi arsitektur, pengadaan perangkat keras, pengembangan aplikasi, implementasi AI/OCR lokal, hingga pemeliharaan dan dukungan teknis."
      }
    ],
    team: [
      {
        initials: "NHN",
        name: "Nanda Harry Nurbudyana, S.T.",
        role: "Principal Systems Architect | Full-Stack, IoT & Network Engineer",
        bio: "Insinyur Sistem Tertanam (IoT), Pengembang Web Full-Stack (Svelte 5, TypeScript, Rust), dan Spesialis Jaringan & Server. Berpengalaman sebagai Network & Server Engineer di PT Nusantara Compnet Integrator (Compnet) serta Staf Laboratorium & Peneliti di Fakultas Ilmu Terapan, Telkom University (github.com/harrynurbudyana)."
      },
      {
        initials: "ITS",
        name: "Ivan Tanjaya Sutrisna",
        role: "Lead Backend & Microservices Architect | AI & Self-Hosted Infrastructure",
        bio: "Backend Developer di Direktorat Pusat Teknologi Informasi (PuTI) Telkom University dan mantan Backend Developer di CoE Smart EV. Spesialis arsitektur API berskala besar (NestJS, TypeScript, Prisma, Rust Tauri), SSO OAuth 2.1, integrasi OCR/AI lokal, serta pengelolaan klaster server multi-node mandiri (github.com/ivantans | ivantans.id)."
      },
      {
        initials: "OPS",
        name: "Divisi Pengadaan Jaringan, Hardware IoT, & Dukungan IT",
        role: "Network Deployment, Custom/Vendor IoT & Managed IT Services",
        bio: "Fokus pada pengadaan dan instalasi fisik perangkat jaringan (router, switch, access point, rak server) sesuai best practice, perakitan PCB/sensor IoT kustom maupun pengadaan unit vendor, serta pengelolaan database High-Availability."
      }
    ]
  },
  capabilities: {
    sectionCode: "§ 02",
    title: "Layanan Arsitektur & Solusi IT",
    subtitle: "Kami menyediakan solusi arsitektur IT menyeluruh mulai dari pembuatan website dan aplikasi skala kecil hingga besar, pengadaan hardware IoT (custom atau vendor), pengadaan dan instalasi perangkat jaringan berstandar best practice, serta layanan IT pendukung lainnya.",
    flagship: {
      code: "ARSITEKTUR IT TERPADU / END-TO-END",
      title: "Solusi Satu Pintu: Website & Aplikasi, Hardware IoT, Perangkat Jaringan, & Layanan IT",
      description: "Organisasi Anda tidak perlu lagi mengoordinasikan banyak vendor terpisah untuk kebutuhan software, sensor perangkat keras, dan jaringan. Kami merancang arsitektur IT yang tepat guna sesuai skala bisnis Anda, lengkap dengan pengadaan perangkat, instalasi di lokasi, hingga dokumentasi dan pemeliharaan.",
      specs: [
        { label: "Website, Aplikasi & Software", value: "Skala kecil (UMKM/Unit) s.d. skala besar/enterprise (Web, Mobile Flutter, Desktop Tauri, & API Microservices)" },
        { label: "Hardware IoT (Custom & Vendor)", value: "Perancangan PCB & firmware sensor kustom (ESP32/C++) maupun pengadaan perangkat IoT/EV resmi dari vendor" },
        { label: "Perangkat & Instalasi Jaringan", value: "Pengadaan router, switch, AP, firewall, & server skala kecil s.d. besar berikut instalasi kabel & best practice" },
        { label: "Layanan Berkaitan dengan IT", value: "Audit arsitektur IT, klaster server/DB High-Availability, CI/CD DevSecOps, AI/OCR lokal, & kontrak maintenance" }
      ]
    },
    supporting: [
      {
        code: "LAYANAN 01",
        visualType: "trajectory",
        title: "Pembuatan Website, Aplikasi, & Software (Skala Kecil s.d. Skala Besar)",
        scope: "Company Profile, Toko Online/UMKM, E-Office, Portal Akademik, Aplikasi Desktop/Mobile, hingga Sistem Enterprise",
        description: "Melayani pembuatan website, aplikasi mobile/desktop, dan software kustom dari skala kecil yang cepat dan efisien hingga sistem berskala besar dengan beban transaksi tinggi menggunakan Svelte 5, Next.js, NestJS, Rust (Axum/Tauri), dan Flutter.",
        output: "Website/aplikasi siap operasional, kode sumber terstruktur, & panduan pengelolaan."
      },
      {
        code: "LAYANAN 02",
        visualType: "hub",
        title: "Pengadaan Hardware IoT (Desain Kustom maupun Perangkat Vendor)",
        scope: "Desain PCB & Sensor Kustom, Perangkat IoT Pabrikan (Vendor), Sistem Telemetri, & Ekosistem EV Charging (OCPP)",
        description: "Menyediakan pengadaan hardware IoT yang fleksibel: mulai dari perancangan papan sirkuit (PCB) dan mikrokontroler kustom sesuai kebutuhan spesifik lapangan, hingga pengadaan perangkat IoT/SPKLU dari vendor resmi berikut integrasi dashboard pemantauannya.",
        output: "Unit hardware IoT (custom/vendor) teruji, integrasi server/dashboard, & skema instalasi."
      },
      {
        code: "LAYANAN 03",
        visualType: "bars",
        title: "Pengadaan Perangkat Jaringan (Skala Kecil s.d. Besar), Instalasi, & Best Practice",
        scope: "Router, Managed Switch, Access Point, Rak Server, Kabel LAN/Fiber, VLAN, Firewall, & Layanan IT Lainnya",
        description: "Melayani pengadaan perangkat jaringan untuk kantor kecil hingga gedung, kampus, dan pabrik berskala besar. Mencakup instalasi fisik pengabelan rapi berlabel, konfigurasi best practice (VLAN, QoS, Dual-WAN failover, keamanan firewall, server HA), serta layanan dukungan teknis IT lainnya.",
        output: "Perangkat jaringan terpasang rapi, konfigurasi best practice, & dokumen topologi."
      }
    ]
  },
  methodology: {
    sectionCode: "ALUR KERJA",
    title: "Standar Tahapan Implementasi & Best Practice",
    subtitle: "Baik untuk proyek skala kecil maupun skala besar, kami menerapkan lima langkah kerja terukur agar software, perangkat IoT, dan jaringan yang dipasang berjalan stabil.",
    phases: [
      {
        step: "Tahap 01",
        name: "Survei Kebutuhan, Pemetaan Skala, & Audit Lokasi/Sistem",
        duration: "Fleksibel Sesuai Skala Proyek",
        summary: "Mengidentifikasi kebutuhan fungsional aplikasi, titik pemasangan sensor IoT, atau kondisi ruang server dan cakupan area jaringan di lokasi Anda.",
        deliverable: "Rekomendasi Arsitektur IT, Daftar Perangkat (BoQ), & Estimasi Anggaran"
      },
      {
        step: "Tahap 02",
        name: "Perancangan Arsitektur Software, Skematik IoT, & Topologi Jaringan",
        duration: "1 - 3 Minggu",
        summary: "Menyusun desain antarmuka dan basis data aplikasi, spesifikasi hardware IoT (kustom/vendor), serta cetak biru pembagian segmen jaringan (VLAN/IP Plan) sesuai best practice.",
        deliverable: "Desain Teknis, Topologi Jaringan, & Kontrak Spesifikasi"
      },
      {
        step: "Tahap 03",
        name: "Pengembangan Aplikasi, Pengadaan Perangkat, & Instalasi Lapangan",
        duration: "2 - 12 Minggu (Skala Kecil s.d. Besar)",
        summary: "Membangun kode website/software, mengadakan atau merakit unit hardware IoT, serta melakukan penarikan kabel, pemasangan perangkat jaringan, dan konfigurasi keamanan.",
        deliverable: "Aplikasi Terbangun, Perangkat Terpasang Rapi, & Konfigurasi Best Practice"
      },
      {
        step: "Tahap 04",
        name: "Pengujian Koneksi, Uji Beban, & Uji Terima (UAT)",
        duration: "1 - 2 Minggu",
        summary: "Menguji fungsi aplikasi, akurasi pembacaan sensor IoT, stabilitas sinyal dan failover jaringan, serta memastikan tim Anda nyaman mengoperasikan sistem.",
        deliverable: "Berita Acara Uji Terima (UAT) & Laporan Pengujian"
      },
      {
        step: "Tahap 05",
        name: "Serah Terima Dokumentasi, Pelatihan, & Layanan Pemeliharaan IT",
        duration: "Garansi & Dukungan Berkelanjutan",
        summary: "Menyerahkan dokumentasi lengkap (kode sumber, label jalur kabel, kredensial admin), melatih operator, dan menyediakan layanan pemeliharaan serta dukungan IT lanjutan.",
        deliverable: "Dokumentasi Lengkap, Sistem Live, & Dukungan Teknis IT"
      }
    ]
  },
  caseStudies: {
    sectionCode: "§ 03",
    title: "Portfolio Proyek & Cetak Biru Implementasi",
    subtitle: "Katalog 12 proyek nyata dari repositori github.com/harrynurbudyana dan github.com/ivantans (ivantans.id) yang mencakup pengembangan website/aplikasi skala kecil hingga enterprise, hardware IoT, infrastruktur jaringan/server, dan solusi IT.",
    items: [
      {
        id: "cs-ev-dashboard",
        code: "PORT-EV-01",
        sector: "EV & Smart Mobility",
        clientPlaceholder: "CoE Smart EV & FIT Telkom University (HAKI KedaiCas - Harry & Ivan)",
        title: "KedaiCas & Open e-Mobility EV Charging Platform",
        summary: "Platform terintegrasi backend dan dashboard untuk manajemen stasiun pengisian kendaraan listrik (SPKLU), sesi pengisian, saldo, dan penagihan berbasis OCPP 1.6.",
        durationPlaceholder: "Terdaftar Resmi HAKI Kemenkumham RI (2024-2025)",
        impactPlaceholder: "Komunikasi dua arah OCPP real-time antara mesin SPKLU, backend, dan dashboard CPO",
        challenge: "Operator stasiun pengisian kendaraan listrik (CPO) membutuhkan sistem terpadu yang menghubungkan perangkat keras SPKLU dengan manajemen sesi pengisian, saldo pengguna, dan pemantauan daya secara langsung.",
        architectureSolution: "Membangun backend OCPP 1.6 berbasis WebSockets, manajemen transaksi dan pembayaran, serta dashboard pemantauan web terdockerisasi hasil kolaborasi tim rekayasa.",
        techStack: ["TypeScript", "OCPP 1.6 WebSockets", "Node.js / NestJS", "Angular / Web", "Docker"],
        githubUrl: "https://github.com/harrynurbudyana/ev-dashboard"
      },
      {
        id: "cs-sekretariat-rust",
        code: "PORT-WEB-02",
        sector: "Website, Aplikasi & Software",
        clientPlaceholder: "Fakultas Ilmu Terapan (FIT) - Telkom University (Harry Nurbudyana)",
        title: "FIT E-Office: Sistem Layanan Sekretariat (Svelte 5 + Rust Axum)",
        summary: "Aplikasi administrasi penomoran surat dinas otomatis dan alur persetujuan peminjaman ruangan dengan konsumsi memori server ekstra ringan.",
        durationPlaceholder: "Produksi Aktif (Rust Edition 2024 + Svelte 5)",
        impactPlaceholder: "Konsumsi RAM backend hanya ~12-18 MB dengan Single-Process Serving",
        challenge: "Proses penomoran surat keluar lintas unit kerja dan persetujuan peminjaman ruangan membutuhkan sistem terpusat yang cepat, hemat sumber daya VPS, dan terintegrasi dengan notifikasi email otomatis.",
        architectureSolution: "Membangun backend tunggal berbasis Rust (Axum + SQLx async SQLite pool) yang menyajikan REST API sekaligus aset statis Svelte 5, dilengkapi pengirim email SMTP TLS otomatis.",
        techStack: ["Rust (Axum)", "Svelte 5", "SQLx / SQLite", "Tailwind CSS", "SMTP TLS"],
        githubUrl: "https://github.com/harrynurbudyana/layanan-sekretariat-rust"
      },
      {
        id: "cs-claude-md-viewer",
        code: "PORT-DSK-03",
        sector: "Website, Aplikasi & Software",
        clientPlaceholder: "Open-Source Desktop Tool - macOS, Windows, & Linux (Ivan Tanjaya)",
        title: "Claude MD Viewer: Aplikasi Desktop Pembaca Markdown Berbasis Rust Tauri",
        summary: "Aplikasi desktop lintas platform untuk membaca dokumen Markdown dengan antarmuka bersih dan ukuran installer sangat kecil (1-2 MB).",
        durationPlaceholder: "Rilis Open-Source Lintas OS (DMG, EXE, DEB, RPM)",
        impactPlaceholder: "Ukuran installer hanya 1.2 - 1.9 MB (tanpa bundling Chromium/Electron)",
        challenge: "Membaca berkas dokumentasi teknis (README.md, CLAUDE.md, atau catatan arsitektur) sering kali mengharuskan pembukaan kode editor berat atau aplikasi berbasis Electron berukuran ratusan megabita.",
        architectureSolution: "Membangun pembaca dokumen khusus menggunakan Rust dan Tauri yang memanfaatkan webview bawaan sistem operasi, lengkap dengan pipeline rilis lintas platform di GitHub Actions.",
        techStack: ["Rust", "Tauri", "Native OS WebView", "GitHub Actions CI/CD", "Cross-Platform"],
        githubUrl: "https://github.com/ivantans/claude-md-viewer"
      },
      {
        id: "cs-ktp-ocr",
        code: "PORT-AI-04",
        sector: "Hardware IoT & AI Lokal",
        clientPlaceholder: "Riset Ekstraksi Dokumen Lokal & Kepatuhan UU PDP (Ivan Tanjaya)",
        title: "KTP OCR On-Premise dengan PaddleOCR-VL & Validasi Konsistensi NIK",
        summary: "Sistem pembacaan foto KTP otomatis yang dijalankan sepenuhnya di server lokal (on-premise) menggunakan model PaddleOCR-VL disertai validasi silang struktur NIK.",
        durationPlaceholder: "Proof of Concept Terbuka (Apache-2.0)",
        impactPlaceholder: "Ekstraksi field KTP ke JSON secara lokal tanpa mengirim data pribadi ke pihak ketiga",
        challenge: "Sesuai UU No. 27/2022 tentang Pelindungan Data Pribadi, foto identitas warga tidak boleh diunggah sembarangan ke API cloud pihak ketiga, sementara input manual rawan salah ketik.",
        architectureSolution: "Menjalankan model PaddleOCR-VL secara mandiri untuk mengekstrak teks KTP menjadi struktur JSON, lalu memvalidasi kode provinsi dan tanggal lahir pada 16 digit NIK terhadap data tercetak.",
        techStack: ["Python", "PaddleOCR-VL", "Local AI Inference", "JSON Schema", "Validasi NIK"],
        githubUrl: "https://github.com/ivantans/ktp-ocr-poc"
      },
      {
        id: "cs-auth-sso",
        code: "PORT-API-05",
        sector: "Backend API & Microservices",
        clientPlaceholder: "Arsitektur Keamanan & Layanan Akademik (Ivan Tanjaya)",
        title: "SSO OAuth 2.1 + PKCE & Modular NestJS Authorization API",
        summary: "Layanan autentikasi terpusat (Single Sign-On) dan manajemen otorisasi berbasis peran (RBAC) dengan pembatasan login satu perangkat (single-device login).",
        durationPlaceholder: "Implementasi Microservices & Keamanan API",
        impactPlaceholder: "Manajemen Access/Refresh Token JWT, OAuth 2.1 PKCE, dan kontrol sesi terpusat",
        challenge: "Ekosistem dengan banyak aplikasi internal membutuhkan satu pintu autentikasi yang aman dari kebocoran token dan mampu mencegah penyalahgunaan sesi ganda.",
        architectureSolution: "Merancang layanan otorisasi menggunakan NestJS, Passport, dan Prisma ORM yang menerapkan rotasi Refresh Token, kebijakan single-device login, RBAC, serta protokol OAuth 2.1 dengan PKCE.",
        techStack: ["NestJS", "TypeScript", "Prisma ORM", "OAuth 2.1 & PKCE", "Passport JWT"],
        githubUrl: "https://github.com/ivantans/authorization-api"
      },
      {
        id: "cs-infra-devsecops",
        code: "PORT-INF-06",
        sector: "Jaringan, Server & DevSecOps",
        clientPlaceholder: "Infrastruktur Enterprise & Homelab HA (Harry Nurbudyana & Ivan Tanjaya)",
        title: "Jaringan Enterprise, Klaster DB HA, Dual-Node Server, & Optimasi Kontainer",
        summary: "Penerapan best practice jaringan dan server: klaster database High-Availability, isolasi GitLab Runner, pemangkasan kontainer ML, serta pemantauan Uptime Kuma/Zabbix.",
        durationPlaceholder: "Infrastruktur Produksi & Self-Hosted Cluster",
        impactPlaceholder: "Docker image turun 87% (21 GB ke 2.65 GB) & operasi tanpa henti saat satu node mati",
        challenge: "Ukuran kontainer ML yang besar menghambat deployment, sementara layanan produksi membutuhkan arsitektur jaringan, database, dan server fisik yang tetap hidup meskipun salah satu mesin mengalami gangguan.",
        architectureSolution: "Memangkas kontainer menjadi 2.65 GB, memisahkan GitLab Runner dari klaster Kubernetes utama, mengelola failover Patroni PostgreSQL/MongoDB/Oracle DB, serta mengoperasikan klaster dua mini-PC Dell OptiPlex + VPS dengan routing jaringan terstandar.",
        techStack: ["Cisco & Network Best Practice", "Kubernetes & Docker", "GitLab CI/CD", "Patroni PostgreSQL", "Uptime Kuma & Zabbix"],
        githubUrl: "https://github.com/harrynurbudyana/hardtech-web"
      },
      {
        id: "cs-ocpp-simulator",
        code: "PORT-EV-07",
        sector: "EV & Smart Mobility",
        clientPlaceholder: "Kolaborasi Riset CoE Smart EV (Harry Nurbudyana & Ivan Tanjaya)",
        title: "OCPP 1.6 JSON Charge Point Simulator & Azure IoT Edge Module",
        summary: "Perangkat simulasi komunikasi antara mesin Charge Point (CP) dan Central System (CS) menggunakan protokol OCPP 1.6 JSON serta modul edge kontainer.",
        durationPlaceholder: "Modul Pengujian & Edge Computing (2024-2025)",
        impactPlaceholder: "Pengujian siklus transaksi SPKLU penuh di browser tanpa ketergantungan unit fisik",
        challenge: "Pengembangan dan pengujian beban (stress-test) backend SPKLU sulit dilakukan secara berulang jika selalu bergantung pada ketersediaan unit charger fisik di lapangan.",
        architectureSolution: "Membangun simulator interaktif berbasis WebSockets (Remote Start/Stop, Status Notification, Meter Values) serta modul kontainer Azure IoT Edge untuk pemrosesan data di tingkat edge.",
        techStack: ["JavaScript / Node.js", "WebSockets", "OCPP 1.6 JSON", "Azure IoT Edge", "Docker"],
        githubUrl: "https://github.com/ivantans/ocpp16-charge-point-simulator"
      },
      {
        id: "cs-labfit-portal",
        code: "PORT-WEB-08",
        sector: "Website, Aplikasi & Software",
        clientPlaceholder: "Laboratorium Fakultas Ilmu Terapan - Telkom University (Harry Nurbudyana)",
        title: "Portal Akademik & Integrasi SIMLAB Laboratorium FIT",
        summary: "Portal terpusat untuk akses layanan laboratorium, manajemen informasi SIMLAB, inventaris perangkat keras, dan layanan administrasi praktikum.",
        durationPlaceholder: "Digunakan Aktif oleh Dosen, Asisten, & Mahasiswa",
        impactPlaceholder: "Penyatuan akses lintas modul layanan laboratorium dan pemendek tautan internal",
        challenge: "Layanan informasi laboratorium, inventaris alat, dan tautan administrasi sebelumnya tersebar di berbagai kanal sehingga menyulitkan koordinasi harian mahasiswa dan staf.",
        architectureSolution: "Merancang portal web terpadu menggunakan Next.js, React, dan TypeScript yang terhubung langsung dengan modul operasional SIMLAB serta manajemen tautan dinamis.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
        githubUrl: "https://github.com/harrynurbudyana/labfit-portal"
      },
      {
        id: "cs-taartely",
        code: "PORT-WEB-09",
        sector: "Website, Aplikasi & Software",
        clientPlaceholder: "UMKM & Klien Komersial Yogyakarta (Ivan Tanjaya)",
        title: "Taartely: Sistem Kustomisasi Pesanan, API Backend, & Aplikasi Flutter (Skala UMKM/Komersial)",
        summary: "Ekosistem aplikasi pemesanan produk kustom dengan kalkulasi estimasi harga otomatis, REST API backend, antarmuka mobile Flutter, dan integrasi pesanan WhatsApp.",
        durationPlaceholder: "Produksi Live (Web, API, & Flutter UI)",
        impactPlaceholder: "Alur kustomisasi pesanan mandiri oleh pelanggan dengan format order terstruktur",
        challenge: "Pemesanan produk kustom secara manual lewat obrolan sering kali tidak mencantumkan spesifikasi lengkap sehingga memperlambat perhitungan harga oleh tim produksi.",
        architectureSolution: "Membangun aplikasi web interaktif, layanan backend API (PHP/Laravel), serta antarmuka mobile berbasis Dart/Flutter (`taartely_ui` & `taartely_api`) yang menyusun rincian pesanan secara otomatis.",
        techStack: ["Flutter (Dart)", "PHP / Laravel API", "Web App", "Automated Pricing", "WhatsApp Integration"],
        githubUrl: "https://github.com/ivantans/taartely_ui"
      },
      {
        id: "cs-iot-phmeter",
        code: "PORT-IOT-10",
        sector: "Hardware IoT & AI Lokal",
        clientPlaceholder: "Riset Telemetri Sensor & Akuakultur / Laboratorium (Harry Nurbudyana)",
        title: "Hardware IoT Kustom: Telemetri pH-Meter Real-Time & Smart Locker PCB",
        summary: "Solusi pengukuran keasaman (pH) nirkabel real-time dan desain PCB kustom untuk sistem loker otomatis berintegrasi sensor berat (load-cell).",
        durationPlaceholder: "Purwarupa Perangkat Keras & Server Telemetri",
        impactPlaceholder: "Akuisisi data sensor kontinu via C++ firmware dan streaming WebSockets",
        challenge: "Pemantauan kualitas air dan inventaris barang fisik pada loker membutuhkan pembacaan sensor analog yang bebas derau listrik (noise-isolated) serta pengiriman data instan ke server pusat.",
        architectureSolution: "Merancang skematik PCB kustom berisolasi derau, menulis firmware akuisisi kalibrasi dalam C++ (ESP32/Arduino), dan membangun server telemetri JavaScript berbasis WebSockets.",
        techStack: ["Embedded C++", "ESP32 / Arduino", "Custom PCB CAD", "Load-Cell & pH Sensor", "Node.js", "WebSockets"],
        githubUrl: "https://github.com/harrynurbudyana/phmeter"
      },
      {
        id: "cs-yolo-vision",
        code: "PORT-AI-11",
        sector: "Hardware IoT & AI Lokal",
        clientPlaceholder: "Riset Sistem Transportasi Cerdas & Visi Komputer (Harry Nurbudyana)",
        title: "Deteksi Rambu Lalu Lintas Real-Time Menggunakan Arsitektur YOLO",
        summary: "Model visi komputer deep learning berbasis YOLO (You Only Look Once) untuk mendeteksi dan mengklasifikasikan rambu jalan secara langsung dari umpan kamera.",
        durationPlaceholder: "Riset Terapan Computer Vision",
        impactPlaceholder: "Inferensi berkecepatan tinggi pada berbagai kondisi pencahayaan jalan",
        challenge: "Sistem bantuan pengemudi (ADAS) membutuhkan pengenalan rambu lalu lintas yang akurat dalam waktu nyata tanpa jeda komputasi yang tinggi.",
        architectureSolution: "Melatih dan mengoptimalkan model deteksi objek YOLO menggunakan Python dan OpenCV pada dataset standar pengenalan rambu lalu lintas untuk pemrosesan video langsung.",
        techStack: ["Python", "YOLO", "OpenCV", "Deep Learning", "Computer Vision"],
        githubUrl: "https://github.com/harrynurbudyana/traffic-sign-detection-using-yolo"
      },
      {
        id: "cs-api-automation",
        code: "PORT-API-12",
        sector: "Backend API & Microservices",
        clientPlaceholder: "Layanan Otomatisasi API & Utilitas Web (Harry Nurbudyana & Ivan Tanjaya)",
        title: "Layanan URL Shortener (NestJS/TS) & Mesin Otomatisasi Eksekusi API",
        summary: "Pengembangan layanan pemendek tautan berkinerja tinggi dengan NestJS/TypeScript serta mesin otomatisasi eksekusi order API dan bot terintegrasi.",
        durationPlaceholder: "Layanan Produksi & Otomatisasi API",
        impactPlaceholder: "Redireksi tautan berlatensi rendah dan eksekusi aturan API secara real-time",
        challenge: "Organisasi membutuhkan layanan manajemen tautan pendek mandiri yang bebas iklan serta mesin otomatisasi yang patuh terhadap batas laju (rate-limit) API eksternal.",
        architectureSolution: "Membangun layanan URL shortener modular berbasis NestJS dan TypeScript serta layanan otomatisasi Python/Node.js dengan pencatatan jejak transaksi terstruktur.",
        techStack: ["NestJS", "TypeScript", "Python", "REST API", "SQLite / PostgreSQL"],
        githubUrl: "https://github.com/ivantans/url-shortener"
      }
    ]
  },
  contact: {
    sectionCode: "§ 04",
    title: "Kontak Kami",
    subtitle: "Sampaikan kebutuhan pembuatan website/software (skala kecil s.d. besar), pengadaan hardware IoT (custom atau vendor), instalasi perangkat jaringan, maupun layanan IT lainnya. Tim kami siap merancang solusi yang tepat untuk Anda.",
    email: "harrynurbudyana@gmail.com",
    secondaryEmail: "customer@hardtechsolution.com",
    phonePlaceholder: "+62 851-4844-3939",
    addressPlaceholder: "Bandung, Jawa Barat, Indonesia (Mendukung Survei Lokasi, Instalasi On-Site, & Kolaborasi Remote)",
    githubUrl: "https://github.com/harrynurbudyana",
    secondGithubUrl: "https://github.com/ivantans",
    secondPortfolioUrl: "https://ivantans.id",
    linkedinUrl: "https://www.linkedin.com/in/harrynurbudyana/",
    secondLinkedinUrl: "https://www.linkedin.com/in/ivan-tanjaya-sutrisna-79777b273/",
    workingHours: "Senin s.d. Jumat, 09.00 s.d. 17.30 WIB"
  }
};
