// Ubah nilai pada objek ini untuk memperbarui seluruh konten company profile phiintegrasi.com.
// Profil perusahaan, kontak, dan footer dipusatkan di GitHub Organization: github.com/phiintegrasi,
// sementara tombol repositori proyek mengarah ke repositori aktif saat ini (harrynurbudyana/... & ivantans/...).
export const initialSiteData = {
  brand: {
    logoPlaceholder: "[LOGO: PHI INTEGRASI]",
    companyName: "PT PHI Integrasi",
    domain: "phiintegrasi.com",
    legalEntity: "[REAL DATA: Nama Resmi Badan Hukum PT / HardTech IT Solution]",
    registrationNumber: "3+ HAKI Terdaftar (Kemenkumham RI) | [REAL DATA: Nomor NIB]",
    foundedYear: "2017 - Sekarang (Kolaborasi Rekayasa & Open-Source)",
    city: "Bandung, Jawa Barat, Indonesia",
    githubOrgUrl: "https://github.com/phiintegrasi",
    githubProfileUrl: "https://github.com/phiintegrasi",
    personalPortfolios: [
      { name: "Nanda Harry Nurbudyana, S.T.", githubUrl: "https://github.com/harrynurbudyana" },
      { name: "Ivan Tanjaya Sutrisna", githubUrl: "https://github.com/ivantans", websiteUrl: "https://ivantans.id" }
    ]
  },
  hero: {
    headline: "Arsitektur Integrasi Sistem, Backend Microservices, dan Ekosistem IoT/EV Enterprise",
    subheadline: "Kami menjembatani perangkat keras fisik, infrastruktur server & jaringan berkinerja tinggi, serta arsitektur backend & aplikasi lintas platform (Rust, Svelte 5, NestJS, Tauri, dan protokol OCPP) untuk operasional korporat dan institusi.",
    primaryCtaText: "Jadwalkan Diskusi Arsitektur",
    primaryCtaHref: "#kontak",
    secondaryCtaText: "Jelajahi Organisasi GitHub",
    secondaryCtaHref: "#studi-kasus",
    metrics: [
      {
        label: "Repositori Organisasi",
        value: "55+ Modul & Repositori",
        note: "Tersentralisasi di GitHub Organization resmi github.com/phiintegrasi"
      },
      {
        label: "Hak Kekayaan Intelektual (HAKI)",
        value: "3+ HAKI & Riset",
        note: "Terdaftar resmi di Kemenkumham RI & kolaborasi riset Telkom University"
      },
      {
        label: "Rekam Jejak Infrastruktur",
        value: "Compnet, PuTI & FIT Tel-U",
        note: "Jaringan enterprise, API akademik, Homelab HA, & sistem laboratorium"
      }
    ],
    architectureTabs: [
      {
        id: "middleware",
        code: "ARC-01",
        title: "Ekosistem EV Charging (OCPP 1.6/2.0)",
        summary: "Menghubungkan stasiun pengisian kendaraan listrik (SPKLU/EVSE) dengan Central System (CS) dan dashboard operator melalui protokol OCPP 1.6 JSON berkecepatan tinggi.",
        sourceNodes: ["Mesin SPKLU / Charge Point", "OCPP 1.6 Simulator & Edge", "Sensor Arus & Tegangan Seri"],
        gatewayLabel: "Central System OCPP PHI (WebSockets, Otentikasi Pengemudi, Telemetry & Billing)",
        targetNodes: ["KedaiCas EV Dashboard (CPO)", "Azure IoT Edge Runtime", "Analitik Konsumsi Energi"],
        deliverables: "Server OCPP dua arah (Go/Node.js/NestJS), dashboard operator real-time, dan simulator pengujian beban tanpa perangkat fisik."
      },
      {
        id: "custom-software",
        code: "ARC-02",
        title: "Aplikasi Web, Desktop, & API (Rust, Svelte 5, NestJS)",
        summary: "Pengembangan portal akademik, layanan sekretariat, microservices API, hingga aplikasi desktop native ringan dengan Rust (Axum/Tauri), Svelte 5, dan NestJS.",
        sourceNodes: ["Layanan Akademik & E-Office", "SSO OAuth 2.1 + PKCE & RBAC", "Dokumen Markdown & E-Commerce"],
        gatewayLabel: "High-Efficiency Application Engine (Rust Axum/Tauri, NestJS + Prisma ORM, Svelte 5)",
        targetNodes: ["Web Reaktif (~12-18 MB RAM)", "Aplikasi Desktop Native (1-2 MB)", "Aplikasi Mobile Flutter & Web"],
        deliverables: "Binary backend hemat sumber daya, installer desktop lintas OS 1-2 MB, dokumentasi API, dan manajemen otorisasi JWT/OAuth."
      },
      {
        id: "legacy-modernization",
        code: "ARC-03",
        title: "Infrastruktur HA, DevSecOps, AI OCR, & IoT",
        summary: "Pengelolaan klaster server/database High-Availability, pipeline CI/CD terisolasi, ekstraksi dokumen AI lokal (OCR), serta telemetri perangkat keras PCB kustom.",
        sourceNodes: ["Mikrokontroler ESP32 & PCB Kustom", "Klaster Patroni PostgreSQL & Homelab", "Kamera Visi & Dokumen Identitas"],
        gatewayLabel: "Lapisan DevSecOps, AI Lokal, & Telemetri (GitLab Runner, PaddleOCR-VL/YOLO, MQTT/WS)",
        targetNodes: ["Monitoring Zabbix & Uptime Kuma", "Ekstraksi JSON KTP OCR & ADAS", "Infrastruktur Cloud & Bare-Metal"],
        deliverables: "Optimasi kontainer ML (21GB ke 2.65GB), klaster server multi-node anti-downtime, mesin OCR on-premise, dan skematik PCB."
      }
    ]
  },
  capabilities: {
    sectionCode: "§ 01",
    title: "Kapabilitas Rekayasa & Layanan Inti",
    subtitle: "Berdasarkan portofolio implementasi nyata tim kami di bidang jaringan enterprise, arsitektur backend microservices, mobilitas listrik (EV), aplikasi web/desktop, dan perangkat keras tertanam (embedded systems).",
    flagship: {
      code: "LAYANAN UTAMA / CAP-01",
      title: "Infrastruktur Jaringan Enterprise, Server High-Availability, & Arsitektur Backend API",
      description: "Menggabungkan keahlian infrastruktur jaringan enterprise (Cisco Routing/Switching, Fortinet/ASA Firewall, klaster database HA) dengan rekayasa backend microservices modern (NestJS, Rust Axum, SSO OAuth 2.1/JWT) untuk menjamin sistem inti organisasi Anda berjalan stabil dari bare-metal hingga cloud.",
      specs: [
        { label: "Jaringan & Server HA", value: "Cisco (OSPF, BGP, VLAN), Fortinet, VMware/Proxmox, Dual-Node Homelab & VPS Cluster" },
        { label: "Arsitektur Backend & SSO", value: "Rust (Axum/SQLx), NestJS, Prisma ORM, OAuth 2.1 + PKCE, JWT Refresh Token & RBAC" },
        { label: "Database & DevSecOps", value: "Patroni PostgreSQL, MongoDB, Oracle DB Failover, Isolated GitLab CI/CD, Optimasi Docker" },
        { label: "Pemantauan & Reliabilitas", value: "Zabbix, SNMP, Uptime Kuma Status Monitoring, Wireshark Packet Inspection" }
      ]
    },
    supporting: [
      {
        code: "CAP-02",
        visualType: "trajectory",
        title: "Aplikasi Web, Desktop & Mobile (Svelte 5, Tauri, Next.js, Flutter)",
        scope: "E-Office Sekretariat, Portal Akademik, Aplikasi Desktop 1-2 MB (Tauri), E-Commerce & Flutter UI",
        description: "Membangun aplikasi web reaktif (Svelte 5, Next.js), aplikasi desktop lintas platform super ringan berbasis Rust Tauri (installer 1-2 MB tanpa beban Electron), serta antarmuka mobile Flutter.",
        output: "Aplikasi produksi lintas platform + hak milik kode sumber (IP) diserahkan ke klien."
      },
      {
        code: "CAP-03",
        visualType: "bars",
        title: "Ekosistem Smart Mobility & EV Charging (OCPP 1.6/2.0)",
        scope: "OCPP Central System, Backend & Dashboard SPKLU (KedaiCas), Charge Point Simulator",
        description: "Kolaborasi rekayasa penuh protokol standar Open Charge Point Protocol (OCPP) melalui WebSockets untuk manajemen stasiun, sesi pengisian, saldo, penagihan, dan simulasi beban tanpa alat fisik.",
        output: "Platform manajemen SPKLU (KedaiCas) & simulator pengujian transaksi pengisian daya."
      },
      {
        code: "CAP-04",
        visualType: "hub",
        title: "Perangkat Keras IoT, Computer Vision, & Integrasi AI Lokal",
        scope: "Desain PCB & Firmware ESP32, PaddleOCR-VL (KTP OCR), Deteksi YOLO, & AI Gateway/Bot",
        description: "Merancang papan sirkuit tercetak (PCB) bebas derau dan telemetri sensor industri, sekaligus membangun pemrosesan visi komputer lokal (KTP OCR sesuai UU PDP, deteksi objek YOLO) serta integrasi bot/agen AI.",
        output: "Purwarupa perangkat keras, model OCR/Vision on-premise, & otomasi bot terintegrasi."
      }
    ]
  },
  caseStudies: {
    sectionCode: "§ 02",
    title: "Portofolio Proyek & Cetak Biru Implementasi",
    subtitle: "Katalog 12 proyek nyata dari repositori aktif github.com/harrynurbudyana dan github.com/ivantans (ivantans.id) yang dipersiapkan untuk ekosistem organisasi github.com/phiintegrasi. Gunakan filter kategori atau kolom pencarian untuk meninjau spesifikasi arsitektur dan membuka repositori sumber.",
    items: [
      {
        id: "cs-ev-dashboard",
        code: "PORT-EV-01",
        sector: "EV & Smart Mobility",
        clientPlaceholder: "CoE Smart EV & FIT Telkom University (HAKI KedaiCas - Tim PHI Integrasi)",
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
        sector: "Aplikasi Web, Desktop & Mobile",
        clientPlaceholder: "Fakultas Ilmu Terapan (FIT) - Telkom University",
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
        sector: "Aplikasi Web, Desktop & Mobile",
        clientPlaceholder: "Open-Source Desktop Tool - macOS, Windows, & Linux",
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
        sector: "Embedded IoT & AI",
        clientPlaceholder: "Riset Ekstraksi Dokumen Lokal & Kepatuhan UU PDP",
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
        clientPlaceholder: "Arsitektur Keamanan & Layanan Akademik",
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
        sector: "Infrastruktur & DevSecOps",
        clientPlaceholder: "Infrastruktur Enterprise & Homelab HA",
        title: "Optimasi Kontainer ML, CI/CD Terisolasi, Klaster DB HA, & Dual-Node Server",
        summary: "Pemangkasan ukuran kontainer machine learning, isolasi GitLab Runner, manajemen failover database enterprise, serta klaster server dua node dengan pemantauan Uptime Kuma.",
        durationPlaceholder: "Infrastruktur Produksi & Self-Hosted Cluster",
        impactPlaceholder: "Docker image turun 87% (21 GB ke 2.65 GB) & operasi tanpa henti saat satu node mati",
        challenge: "Ukuran kontainer ML yang besar menghambat deployment, sementara layanan produksi membutuhkan arsitektur database dan server fisik yang tetap hidup meskipun salah satu mesin mengalami gangguan.",
        architectureSolution: "Memangkas kontainer menjadi 2.65 GB, memisahkan GitLab Runner dari klaster Kubernetes utama, mengelola failover Patroni PostgreSQL/MongoDB/Oracle DB, serta mengoperasikan klaster dua mini-PC Dell OptiPlex + VPS.",
        techStack: ["Kubernetes & Docker", "GitLab CI/CD", "Patroni PostgreSQL", "Cisco Networking", "Uptime Kuma"],
        githubUrl: "https://github.com/harrynurbudyana/hardtech-web"
      },
      {
        id: "cs-ocpp-simulator",
        code: "PORT-EV-07",
        sector: "EV & Smart Mobility",
        clientPlaceholder: "Kolaborasi Riset CoE Smart EV",
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
        sector: "Aplikasi Web, Desktop & Mobile",
        clientPlaceholder: "Laboratorium Fakultas Ilmu Terapan - Telkom University",
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
        sector: "Aplikasi Web, Desktop & Mobile",
        clientPlaceholder: "UMKM & Klien Komersial Yogyakarta",
        title: "Taartely: Sistem Kustomisasi Pesanan, API Backend, & Aplikasi Flutter",
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
        sector: "Embedded IoT & AI",
        clientPlaceholder: "Riset Telemetri Sensor & Akuakultur / Laboratorium",
        title: "Sistem Telemetri pH-Meter Real-Time & Smart Locker PCB",
        summary: "Solusi pengukuran keasaman (pH) nirkabel real-time dan desain PCB kustom untuk sistem loker otomatis berintegrasi sensor berat (load-cell).",
        durationPlaceholder: "Purwarupa Perangkat Keras & Server Telemetri",
        impactPlaceholder: "Akuisisi data sensor kontinu via C++ firmware dan streaming WebSockets",
        challenge: "Pemantauan kualitas air dan inventaris barang fisik pada loker membutuhkan pembacaan sensor analog yang bebas derau listrik (noise-isolated) serta pengiriman data instan ke server pusat.",
        architectureSolution: "Merancang skematik PCB kustom berisolasi derau, menulis firmware akuisisi kalibrasi dalam C++ (ESP32/Arduino), dan membangun server telemetri JavaScript berbasis WebSockets.",
        techStack: ["Embedded C++", "ESP32 / Arduino", "PCB CAD", "Load-Cell & pH Sensor", "Node.js", "WebSockets"],
        githubUrl: "https://github.com/harrynurbudyana/phmeter"
      },
      {
        id: "cs-yolo-vision",
        code: "PORT-AI-11",
        sector: "Embedded IoT & AI",
        clientPlaceholder: "Riset Sistem Transportasi Cerdas & Visi Komputer",
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
        clientPlaceholder: "Layanan Otomatisasi API & Utilitas Web",
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
  methodology: {
    sectionCode: "§ 03",
    title: "Metodologi Rekayasa & Siklus Implementasi",
    subtitle: "Setiap proyek perangkat lunak, microservices API, jaringan, maupun perangkat keras IoT dikerjakan melalui lima tahapan terukur agar sistem aman diuji sebelum memasuki lingkungan produksi.",
    phases: [
      {
        step: "Fase 01",
        name: "Pemetaan Arsitektur, Jaringan, & Audit Sistem Eksisting",
        duration: "1 - 2 Minggu (Bergantung Skala Infrastruktur)",
        summary: "Menginventarisasi topologi jaringan (VLAN/Routing), kebutuhan microservices API, protokol perangkat keras (OCPP/Modbus/Serial), serta batasan sumber daya server klien.",
        deliverable: "Dokumen Spesifikasi Kebutuhan Teknis & Diagram Topologi Awal"
      },
      {
        step: "Fase 02",
        name: "Desain Kontrak API, Skema Database (Prisma/SQLx), & Skematik PCB",
        duration: "2 - 3 Minggu",
        summary: "Menyepakati struktur payload REST/WebSockets, skema tabel Prisma/SQLx, alur autentikasi OAuth 2.1/JWT, atau desain skematik PCB sebelum penulisan kode dimulai.",
        deliverable: "Spesifikasi Kontrak API, Skema Database, & Rencana Pengujian"
      },
      {
        step: "Fase 03",
        name: "Pengembangan Modular, Simulasi Beban, & CI/CD Terisolasi",
        duration: "4 - 12 Minggu",
        summary: "Membangun layanan backend (Rust Axum/NestJS/Go), antarmuka (Svelte 5/Next.js/Tauri/Flutter), serta menguji komunikasi protokol menggunakan simulator pada pipeline CI/CD terisolasi.",
        deliverable: "Rilis Staging Teruji, Kontainer Docker Ramping, & Laporan Uji Integrasi"
      },
      {
        step: "Fase 04",
        name: "Uji Terima Pengguna (UAT) & Parallel Run",
        duration: "2 - 4 Minggu",
        summary: "Menjalankan sistem baru secara berdampingan dengan operasional eksisting untuk memverifikasi akurasi telemetri sensor, kestabilan API, dan kesiapan operator.",
        deliverable: "Berita Acara UAT, Kalibrasi Perangkat, & Skrip Rekonsiliasi"
      },
      {
        step: "Fase 05",
        name: "Rilis Produksi, Serah Terima Kode Sumber, & Pemantauan",
        duration: "Sesuai Kesepakatan SLA Pemeliharaan",
        summary: "Peralihan penuh ke server produksi (on-premise, VPS, atau klaster multi-node) disertai konfigurasi pemantauan (Zabbix/Uptime Kuma), pelatihan tim internal, dan penyerahan dokumentasi.",
        deliverable: "Repositori Kode Penuh, Buku Panduan Insiden (Runbook), & Dukungan Teknis"
      }
    ]
  },
  profile: {
    sectionCode: "§ 04",
    title: "Profil Perusahaan, HAKI, & Kepemimpinan Teknis",
    lead: "PHI Integrasi dipimpin oleh kolaborasi insinyur sistem, arsitek microservices, dan spesialis infrastruktur yang berpengalaman di PT Nusantara Compnet Integrator, Direktorat Pusat Teknologi Informasi (PuTI) & Fakultas Ilmu Terapan Telkom University, dengan ekosistem repositori terpusat pada organisasi github.com/phiintegrasi.",
    body: "Kami mengerjakan solusi dari rancangan arsitektur hingga beroperasi penuh di server produksi: mulai dari papan sirkuit perangkat keras (IoT/EV), jaringan enterprise dan klaster server ketersediaan tinggi, hingga API microservices dan aplikasi lintas platform yang ringan dan mudah dipelihara.",
    hakiAndResearch: [
      {
        badge: "HAKI Terdaftar - Kemenkumham RI",
        title: "KedaiCas: Aplikasi Layanan Pengisian Daya Kendaraan Listrik (SPKLU)",
        meta: "Kolaborasi Riset & Rekayasa Backend OCPP | Telkom University (Tim PHI Integrasi)",
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
        meta: "Tim Peneliti & Pengembang Smart Contract | Telkom University & LPPM",
        desc: "Riset terapan dan pemodelan data smart contract blockchain guna menjamin transparansi, keaslian, dan jejak audit rantai pasok komoditas pertanian."
      }
    ],
    principles: [
      {
        iconType: "vision",
        title: "Visi Sinergi Perangkat Keras & Lunak",
        text: "Menjadi mitra transformasi digital di Indonesia yang menyatukan keandalan perangkat keras IoT/EV, infrastruktur jaringan enterprise, dan rekayasa backend modern tanpa ketergantungan vendor tertutup."
      },
      {
        iconType: "mission",
        title: "Misi Efisiensi & Standar Terbuka",
        text: "Menghadirkan perangkat lunak yang sangat hemat sumber daya (seperti backend Rust ~12 MB RAM dan aplikasi desktop Tauri 1-2 MB) serta mematuhi protokol terbuka (OCPP 1.6/2.0, OAuth 2.1, REST, MQTT)."
      },
      {
        iconType: "approach",
        title: "Pendekatan Berbasis Bukti & Riset",
        text: "Setiap keputusan teknis dilandasi oleh pengujian beban nyata, pemrosesan AI/OCR lokal yang menghormati privasi data (UU PDP), serta riset terapan yang telah terdaftar secara resmi."
      },
      {
        iconType: "scope",
        title: "Tuntas dari Kode hingga Server",
        text: "Menangani siklus penuh mulai dari perancangan skematik PCB, penulisan API microservices, hingga deployment otomatis, pencadangan data, dan pemantauan klaster server 24/7."
      }
    ],
    team: [
      {
        initials: "NHN",
        name: "Nanda Harry Nurbudyana, S.T.",
        role: "Principal Systems Architect | Full-Stack, IoT & Network Engineer",
        bio: "Insinyur Sistem Tertanam (IoT), Pengembang Web Full-Stack (Svelte 5, TypeScript, Rust), dan Spesialis Jaringan & Server. Berpengalaman sebagai Network & Server Engineer di PT Nusantara Compnet Integrator (Compnet) serta Staf Laboratorium & Peneliti di Fakultas Ilmu Terapan, Telkom University."
      },
      {
        initials: "ITS",
        name: "Ivan Tanjaya Sutrisna",
        role: "Lead Backend & Microservices Architect | AI & Self-Hosted Infrastructure",
        bio: "Backend Developer di Direktorat Pusat Teknologi Informasi (PuTI) Telkom University dan mantan Backend Developer di CoE Smart EV. Spesialis arsitektur API berskala besar (NestJS, TypeScript, Prisma, Rust Tauri), SSO OAuth 2.1, integrasi OCR/AI lokal, serta pengelolaan klaster server multi-node mandiri."
      },
      {
        initials: "OPS",
        name: "Divisi DevSecOps, Database HA, & Embedded Hardware",
        role: "Infrastructure Reliability, High-Availability DB & Custom PCB",
        bio: "Fokus pada pengelolaan klaster database ketersediaan tinggi (Patroni PostgreSQL, MongoDB, Oracle DB), isolasi pipeline CI/CD GitLab Runner, optimasi kontainer ML, serta desain skematik PCB berisolasi derau dan firmware ESP32/C++."
      }
    ]
  },
  contact: {
    sectionCode: "§ 05",
    title: "Diskusi Arsitektur & Konsultasi Proyek",
    subtitle: "Sampaikan gambaran sistem, backend API, jaringan, atau perangkat IoT/EV yang ingin Anda integrasikan. Tim arsitek teknis kami siap meninjau kebutuhan Anda dan mengirimkan estimasi teknis.",
    email: "harrynurbudyana@gmail.com",
    secondaryEmail: "customer@hardtechsolution.com",
    phonePlaceholder: "+62 851-4844-3939",
    addressPlaceholder: "Bandung, Jawa Barat, Indonesia (Mendukung Kolaborasi On-Site & Remote)",
    githubUrl: "https://github.com/phiintegrasi",
    githubOrgUrl: "https://github.com/phiintegrasi",
    workingHours: "Senin s.d. Jumat, 09.00 s.d. 17.30 WIB"
  }
};
