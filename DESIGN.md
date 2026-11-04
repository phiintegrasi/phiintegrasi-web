# DESIGN.md: Arah Desain phiintegrasi.com

## 1. Identitas & Karakter Produk
- **Nama Entitas**: PT PHI Integrasi (`phiintegrasi.com`)
- **Kategori**: Perusahaan Solusi IT Enterprise, Infrastruktur Jaringan & Server, Ekosistem EV/IoT (OCPP), & Pengembangan Perangkat Lunak Kustom (B2B)
- **Rekam Jejak & Portofolio Nyata**: Terhubung langsung dengan portofolio rekayasa **Nanda Harry Nurbudyana, S.T.** (`github.com/harrynurbudyana`) dan **Ivan Tanjaya Sutrisna** (`github.com/ivantans` | `ivantans.id`), mencakup 55+ repositori publik gabungan, 3+ Hak Kekayaan Intelektual (HAKI Kemenkumham) & kolaborasi riset di Telkom University, serta pengalaman infrastruktur enterprise bersama **PT Nusantara Compnet Integrator (Compnet)**, **Direktorat Pusat Teknologi Informasi (PuTI) Telkom University**, **CoE Smart EV**, dan inisiatif **HardTech IT Solution**.
- **Audiens Utama**: Direktur IT (CIO/CTO), Kepala Divisi Operasional, Manajer Proyek TI, dan Tim Pengadaan Enterprise
- **Karakter Visual**: Tegas, modern, dan terstruktur layaknya platform produk digital berskala enterprise (mengadaptasi arahan visual referensi *Artspire Social Impact Platform* pada Dribbble #27351948). Menggabungkan permukaan gelap pekat (`#050606`), tipografi neo-grotesque **Helvetica Neue** yang tajam, pencahayaan atmosferik *deep ocean teal* pada titik fokus utama, serta kartu cetak biru arsitektur bervisualisasi metrik dan topologi.

## 2. Design Read & Liveliness Dials
Reading this as: B2B Enterprise IT, Smart Mobility (OCPP), & Custom Software company profile (`phiintegrasi.com`) backed by real GitHub portfolio data (`github.com/harrynurbudyana`), in a dark atmospheric Helvetica Neue product-architecture language, dial ENERGY 2 / RHYTHM 3 / MOTION 2.

- **ENERGY: 2 (Balanced)**: Tegas melalui tajuk **Helvetica Neue** berukuran proporsional, kontras tinggi tombol utama putih bersih (`#F8FAFA`) di atas kanvas gelap (`#050606`), dan diagram visualisasi sistem yang terukur.
- **RHYTHM: 3 (Varied / Asymmetric)**: Setiap bagian memiliki komposisi berbeda sesuai fungsi kontennya:
  - **Home (`#home`)**: Tata letak terpusat (centered) untuk proposisi nilai & tombol aksi diikuti kanvas visual 3-panel (*Stage Readiness Ring*, *Interactive Architecture Blueprint*, dan *Throughput & SLA Trajectory*).
  - **§ 01 Tentang Kami (`#tentang-kami`)**: Narasi perusahaan, tabel legalitas & HAKI terdaftar, grid 2x2 dengan lencana ikon berbingkai terukur (*Solusi Skala Kecil s.d. Besar, Sinergi Software-IoT-Jaringan, Instalasi Best Practice, dan Layanan IT Menyeluruh*), serta profil nyata **Nanda Harry Nurbudyana, S.T.** dan **Ivan Tanjaya Sutrisna** beserta tim rekayasa.
  - **§ 02 Layanan (`#layanan`)**: Panel arsitektur IT terpadu lebar penuh diikuti 3 kartu cetak biru bertingkat (*staggered blueprint cards*) untuk (1) Pembuatan Website, Aplikasi, & Software skala kecil s.d. besar, (2) Pengadaan Hardware IoT custom maupun vendor, dan (3) Pengadaan Perangkat Jaringan skala kecil s.d. besar berikut instalasi & best practice serta layanan IT lainnya, dilengkapi akordeon 5 tahapan standar implementasi.
  - **§ 03 Portfolio (`#portfolio`)**: Katalog eksplorasi interaktif berisi 12 proyek nyata dari `github.com/harrynurbudyana` dan `github.com/ivantans` (`ivantans.id`) dengan filter kategori, pencarian langsung, tautan repositori GitHub, dan simulasi status UI (*Normal, Loading, Empty, Error*).
  - **§ 04 Kontak Kami (`#kontak-kami`)**: Panel saluran komunikasi langsung (termasuk tautan GitHub, LinkedIn, Email, dan Telepon/WhatsApp) bersanding dengan formulir konsultasi & permintaan penawaran IT tervalidasi.
  - **Footer**: Footer struktural dua bagian dengan identitas domain resmi dan tautan navigasi cepat (`Home, Tentang Kami, Layanan, Portfolio, Kontak Kami`).
- **MOTION: 2 (Scroll-Reveal & Choreographed Transitions)**: Menggunakan plugin JavaScript **AOS (Animate On Scroll)**, transisi bawaan Svelte (`fly`, `fade`), serta utilitas transisi **Tailwind CSS** untuk memandu fokus baca saat pengguna menggulir halaman, mengganti tab skema arsitektur, menyaring studi kasus, dan membuka modal detail. Mendukung penuh `prefers-reduced-motion: reduce`.

## 3. Palet Warna & Kontras (Maksimal 2 Warna Inti + 1 Aksen, plus Netral)

### Mode Gelap (Default: Obsidian Slate & Atmospheric Teal - Sesuai Referensi Dribbble)
- **Permukaan Utama (Neutral Base)**: Obsidian Black (`#050606`)
- **Permukaan Kartu / Sekunder (Core 1)**: Deep Abyssal Slate (`#0D1214`) dan Elevated Slate (`#131A1D`)
- **Tinta Utama / Teks Primer (Core 2)**: Crisp Ice White (`#F8FAFA`). Rasio kontras di atas `#050606`: **19.37:1** (Lulus WCAG AAA)
- **Teks Sekunder**: Muted Glacier Grey (`#9EACAF`). Rasio kontras di atas `#050606`: **8.67:1**, di atas `#0D1214`: **8.06:1**, di atas `#131A1D`: **7.52:1** (Lulus WCAG AAA)
- **Aksen Tunggal (Accent)**: Luminous Teal (`#38B29A`), dengan atmosferik dasar (`#18363B` / `#2E484D`). Rasio `#38B29A` di atas `#050606`: **7.73:1**, di atas `#0D1214`: **7.19:1**, dengan teks gelap `#050606`: **7.73:1** (Lulus WCAG AAA)
- **Garis Batas Komponen Interaktif**: Steel Slate (`#6D8488`). Rasio kontras di atas `#050606`: **5.13:1**, di atas `#0D1214`: **4.76:1** (Lulus WCAG 1.4.11 Non-Text Contrast >= 3:1)

### Mode Terang (Crisp Ice White & Deep Ocean Teal)
- **Permukaan Utama (Neutral Base)**: Crisp Ice White (`#F8FAFA`)
- **Permukaan Kartu / Sekunder (Core 1)**: Cool Alabaster (`#EEF2F3`) dan Pure White (`#FFFFFF`)
- **Tinta Utama / Teks Primer (Core 2)**: Deep Obsidian (`#0B1112`). Rasio kontras di atas `#F8FAFA`: **18.17:1** (Lulus WCAG AAA)
- **Teks Sekunder**: Deep Slate (`#394B4E`). Rasio kontras di atas `#F8FAFA`: **8.75:1**, di atas `#EEF2F3`: **8.13:1** (Lulus WCAG AAA)
- **Aksen Tunggal (Accent)**: Deep Ocean Teal (`#0D6859`), Hover (`#094F43`). Rasio kontras di atas `#F8FAFA`: **6.38:1**, dengan teks putih `#FFFFFF`: **6.68:1** (Lulus WCAG AA)
- **Garis Batas Komponen Interaktif**: Structural Slate (`#587075`). Rasio kontras di atas `#F8FAFA`: **5.02:1** (Lulus WCAG 1.4.11 Non-Text Contrast >= 3:1)

## 4. Tipografi & Motif Identitas
- **Font Utama (Heading, UI, & Body)**: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Dipilih sesuai permintaan pengguna dan referensi desain untuk menghasilkan kesan korporat neo-grotesque yang bersih, otoritatif, dan memiliki keseimbangan ruang negatif yang kuat pada tajuk maupun teks narasi.
- **Font Teknis (Metadata & Kode Referensi)**: `IBM Plex Mono`. Digunakan khusus pada ukuran kecil (`0.76rem` hingga `0.84rem`) untuk penomoran indeks dokumen (`§ 01`), kode arsitektur (`ARC-01`), dan penanda placeholder (`[LOGO]`, `[REAL DATA]`). Tidak pernah digunakan sebagai tajuk besar.
- **Motif Identitas (Identity Motif)**: Penomoran bab teknis (`§ 01` sampai `§ 05`), kartu cetak biru gelap berbingkai halus dengan diagram vektor teknis, serta kontras tombol aksi *pill* putih bersih terhadap permukaan gelap.

## 5. Catatan Resolusi Konflik Arah Desain (Aturan R-37)
- Pengguna secara eksplisit memilih **Opsi A** untuk mempertahankan karakteristik visual dari referensi Dribbble #27351948 dan meminta penambahan animasi menggunakan plugin JS (`aos`) serta `Tailwind CSS`:
  1. **R-01 & R-13 (Gradien Atmosferik & Glow Terukur)**: Gradien radial *deep teal* digunakan khusus pada kanvas atas Hero untuk memisahkan panggung utama dari bagian konten di bawahnya, serta pendaran halus (*focus glow* maksimal 2 titik fokus: bingkai ikon prinsip arsitektur dan simpul tengah diagram kapabilitas).
  2. **R-11 (Hierarki Radius & Tombol Pill)**: Tombol aksi (CTA) dan tombol filter menggunakan bentuk *pill* (`9999px`) sesuai referensi untuk membedakan elemen pemicu aksi dari wadah konten (kartu menggunakan radius `16px`, panel dalam `10px`, dan kolom input formulir `8px`).
  3. **R-19 (Animasi Scroll-Reveal & Transisi Terarah - Dial MOTION 2)**: Animasi masuk (*scroll-reveal* via plugin `aos` sekali jalan `once: true`, transisi pergantian tab/modal Svelte `fly`/`fade`, dan *micro-interaction* Tailwind CSS) digunakan untuk memandu fokus baca antar bab dan memberi umpan balik visual yang responsif tanpa animasi berulang tanpa henti (*no endless pulse/loop*).
  4. **R-21 & R-34 (Tema Gelap Default + Toggle Penuh)**: Tema gelap (`#050606`) menjadi tampilan awal sesuai referensi, dilengkapi tombol pengalih Tema Gelap/Terang di bilah navigasi yang telah diverifikasi kontrasnya di kedua mode.

## 6. Alasan Satu Baris untuk Setiap Keputusan Utama (Aturan R-31)
- **Warna**: Kombinasi Obsidian Black (`#050606`), Steel Slate (`#6D8488`), dan Luminous Teal (`#38B29A`) dari palet referensi Dribbble memberikan kedalaman ruang teknis sekaligus memenuhi rasio kontras WCAG AA/AAA.
- **Tata Letak (Layout)**: Urutan halaman mengikuti alur evaluasi pengadaan B2B dengan variasi komposisi di setiap bab (Hero terpusat + showcase 3-panel, kartu cetak biru bertingkat pada Kapabilitas, katalog portofolio GitHub interaktif pada Studi Kasus, akordeon 2 kolom pada Metodologi, dan grid prinsip 2x2 pada Profil) sesuai dial RHYTHM 3.
- **Tipografi**: `Helvetica Neue` memberikan struktur neo-grotesque yang presisi dan berwibawa untuk tajuk serta narasi korporat, sedangkan `IBM Plex Mono` membedakan kode indeks dan penanda placeholder (`[REAL DATA]`).
- **Spasi (Spacing)**: Skala spasi vertikal berjenjang memisahkan setiap bab informasi secara tegas dan menyusut secara proporsional pada layar ponsel agar tidak menyisakan ruang kosong berlebihan.
- **Variasi Komponen**: Kapabilitas utama disajikan sebagai panel spesifikasi lebar penuh, sementara tiga kapabilitas pendukung disajikan sebagai kartu cetak biru bertingkat (*staggered blueprint cards*) dengan ilustrasi diagram vektor yang berbeda sesuai fungsi masing-masing layanan.
- **Ikon & Visual**: Setiap diagram SVG pada Hero dan Kartu Kapabilitas memvisualisasikan konsep nyata (kesiapan tahapan, kurva pertumbuhan throughput, dan topologi integrasi simpul), serta ikon 4 prinsip arsitektur relevan langsung dengan topik masing-masing.
- **Animasi (Motion)**: Plugin `aos` (`fade-up`, `zoom-in-up` dengan `once: true`), transisi Svelte (`fly`, `fade`), dan transisi Tailwind CSS memandu perhatian pengguna saat menjelajahi bab teknis dan berinteraksi dengan tab/filter tanpa menimbulkan distraksi berulang.
- **Sudut Membulat (Border Radius)**: Hierarki radius dibedakan secara sengaja (`9999px` khusus tombol aksi, `16px` untuk kartu cetak biru, `8px` untuk input formulir, dan `4px` untuk label placeholder teknis) agar fungsi setiap komponen langsung dikenali.
- **Bayangan (Shadow)**: Bayangan elevasi hanya diterapkan pada dialog modal dan kartu saat di-hover untuk memisahkannya dari bidang halaman utama.
- **Tema Gelap/Terang**: Tampilan awal menggunakan Mode Gelap sesuai arahan visual referensi, disertai pengalih ke Mode Terang yang tetap menjaga keterbacaan di lingkungan kerja terang.
- **Data Portofolio Nyata & Placeholder Jujur**: Seluruh proyek studi kasus, HAKI, dan profil pimpinan teknis diambil dari repositori nyata `github.com/harrynurbudyana`, sedangkan data administrasi badan hukum yang belum dipublikasikan tetap menggunakan penanda eksplisit `[LOGO]` dan `[REAL DATA]`.
