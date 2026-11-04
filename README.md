# PT PHI Integrasi (`phiintegrasi.com`)

Aplikasi web profil perusahaan (*company profile*) dan katalog arsitektur rekayasa untuk **PT PHI Integrasi (`phiintegrasi.com`)**. Dibangun menggunakan **Svelte 5**, **Vite 6**, **Tailwind CSS v4**, dan **AOS (Animate On Scroll)** dengan tipografi **Helvetica Neue** serta dukungan penuh Mode Gelap (*Obsidian & Atmospheric Teal*) dan Mode Terang.

Situs ini mengintegrasikan portofolio rekayasa nyata, Hak Kekayaan Intelektual (HAKI), dan rekam jejak implementasi dari:
- **Nanda Harry Nurbudyana, S.T.** ([github.com/harrynurbudyana](https://github.com/harrynurbudyana))
- **Ivan Tanjaya Sutrisna** ([github.com/ivantans](https://github.com/ivantans) | [ivantans.id](https://ivantans.id))

---

## Fitur Utama

1. **Panggung Hero & Kanvas Arsitektur Interaktif (`HeroSection.svelte`)**
   - Menampilkan indikator repositori terbuka (`55+ Repositori`), HAKI terdaftar (`3+ HAKI & Riset`), dan rekam jejak infrastruktur (`Compnet, PuTI & FIT Tel-U`).
   - Dilengkapi 3 tab skema arsitektur interaktif: *Ekosistem EV Charging (OCPP 1.6/2.0)*, *Aplikasi Web, Desktop, & API (Rust, Svelte 5, NestJS)*, serta *Infrastruktur HA, DevSecOps, AI OCR, & IoT*.
2. **Kapabilitas Rekayasa & Cetak Biru Bertingkat (`CapabilitiesSection.svelte`)**
   - Satu panel spesifikasi layanan utama lebar penuh (*Infrastruktur Jaringan Enterprise, Server HA, & Backend API*) diikuti tiga kartu cetak biru bertingkat (*staggered blueprint cards*) dengan diagram teknis SVG.
3. **Katalog 12 Portofolio Proyek & Simulasi UI States (`CaseStudiesSection.svelte`)**
   - Menyajikan 12 proyek nyata dari GitHub (`ev-dashboard`, `layanan-sekretariat-rust`, `claude-md-viewer`, `ktp-ocr-poc`, `authorization-api`, `hardtech-web`, `ocpp16-charge-point-simulator`, `labfit-portal`, `taartely_ui`, `phmeter`, `traffic-sign-detection-using-yolo`, dan `url-shortener`).
   - Dilengkapi filter kategori rekayasa, pencarian kata kunci secara langsung, tautan ke repositori GitHub, modal rincian arsitektur, serta simulator status tampilan data (*Data Normal*, *Status Memuat*, *Status Kosong*, dan *Status Gangguan*).
4. **Metodologi Rekayasa 5 Fase (`MethodologySection.svelte`)**
   - Komponen akordeon interaktif yang merinci tahapan kerja mulai dari pemetaan arsitektur hingga serah terima kode sumber dan SLA.
5. **Profil Perusahaan, HAKI, & Kepemimpinan Teknis (`ProfileSection.svelte`)**
   - Menampilkan tabel identitas perusahaan, matriks 2x2 prinsip rekayasa, daftar HAKI Kemenkumham RI & riset terapan, serta profil arsitek utama.
6. **Diskusi Teknis & Editor Template Langsung (`ContactSection.svelte` & `TemplateEditorModal.svelte`)**
   - Formulir ringkasan kebutuhan teknis dengan validasi input di sisi klien dan pembuatan draf `mailto:` terstruktur.
   - Modal **Editor Template** yang memungkinkan perubahan data perusahaan/placeholder secara langsung di peramban dan pengunduhan berkas `siteData.js` baru.

---

## Struktur Proyek

```text
phiintegrasi/
├── DESIGN.md                              # Dokumen arah desain, palet warna, kontras WCAG, & alasan keputusan UI
├── index.html                             # Kerangka utama HTML (default data-theme="dark")
├── package.json                           # Konfigurasi paket & skrip npm
├── svelte.config.js                       # Konfigurasi compiler Svelte 5
├── vite.config.js                         # Konfigurasi Vite 6 & plugin Tailwind CSS v4
└── src/
    ├── main.js                            # Titik masuk aplikasi Svelte
    ├── app.css                            # Variabel tema, aturan tipografi Helvetica Neue, & tata letak responsif
    ├── App.svelte                         # Komponen induk, inisialisasi AOS, & pengelola state tema/data
    └── lib/
        ├── siteData.js                    # Sumber data terpusat (mudah diedit untuk memperbarui seluruh isi situs)
        └── components/
            ├── Header.svelte              # Navigasi utama, pengalih Tema Gelap/Terang, & pemicu Editor Template
            ├── HeroSection.svelte         # Hero terpusat & 3-panel showcase skema arsitektur
            ├── CapabilitiesSection.svelte # Panel layanan utama & 3 kartu cetak biru bertingkat
            ├── CaseStudiesSection.svelte  # Katalog filter 12 portofolio GitHub, simulator UI state, & modal detail
            ├── MethodologySection.svelte  # Akordeon 5 fase metodologi implementasi
            ├── ProfileSection.svelte      # Tabel legalitas, grid 2x2 prinsip, HAKI, & profil tim
            ├── ContactSection.svelte      # Kontak langsung, fitur cetak PDF, & formulir konsultasi tervalidasi
            └── TemplateEditorModal.svelte # Dialog editor konten langsung & pengekspor berkas siteData.js
```

---

## Cara Menjalankan Proyek

Pastikan **Node.js** (versi 18 atau 20 LTS ke atas) dan **npm** telah terpasang di perangkat Anda.

1. **Pasang dependensi paket:**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan lokal (Development):**
   ```bash
   npm run dev
   ```

3. **Bangun bundel produksi (Production Build):**
   ```bash
   npm run build
   ```
   Hasil kompilasi statis akan tersimpan di dalam folder `dist/`.

4. **Tinjau hasil kompilasi produksi secara lokal:**
   ```bash
   npm run preview
   ```

---

## Cara Mengubah Data Konten & Placeholder

Seluruh teks, daftar proyek portofolio, daftar HAKI, informasi kontak, serta penanda `[LOGO]` dan `[REAL DATA]` disimpan secara terpusat di dalam berkas:

- `src/lib/siteData.js`

Anda dapat mengubah berkas tersebut secara langsung melalui kode editor, atau menekan tombol **Buka Editor Template** di bilah atas halaman web untuk memperbarui data secara visual dan mengunduh berkas `siteData.js` yang baru.

