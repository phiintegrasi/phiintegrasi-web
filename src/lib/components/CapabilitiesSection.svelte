<script>
  import { fade, fly } from "svelte/transition";
  let { capabilities, onOpenConsult } = $props();

  const serviceCards = $derived([
    {
      num: "01",
      featured: true,
      title: "AI Lokal, OCR & Embedded IoT",
      desc: "Integrasi KTP OCR on-premise (PaddleOCR-VL sesuai UU PDP), deteksi objek YOLO, desain PCB bebas derau, serta firmware ESP32.",
      fullTitle: "AI Lokal, Computer Vision & Perangkat Keras IoT",
      fullDesc: capabilities.supporting[2].description,
      pillars: [
        { num: "01", title: "KTP OCR On-Premise", desc: "Ekstraksi dokumen identitas ke JSON di server lokal lengkap dengan validasi silang 16 digit NIK." },
        { num: "02", title: "Computer Vision YOLO", desc: "Inferensi visi komputer real-time untuk deteksi rambu dan pemantauan otomatis berbasis OpenCV." },
        { num: "03", title: "Skematik PCB & ESP32", desc: "Perancangan papan sirkuit kustom berisolasi derau dan telemetri sensor pH/load-cell via WebSockets." }
      ]
    },
    {
      num: "02",
      featured: false,
      title: "Aplikasi Web, Desktop & Mobile",
      desc: "Pengembangan aplikasi web reaktif (Svelte 5, Next.js), backend Rust Axum (~12 MB RAM), desktop Tauri (1-2 MB), dan Flutter.",
      fullTitle: capabilities.supporting[0].title,
      fullDesc: capabilities.supporting[0].description,
      pillars: [
        { num: "01", title: "Web & Portal Enterprise", desc: "E-Office sekretariat dan portal akademik SIMLAB dengan responsivitas tinggi dan biaya server ekstra hemat." },
        { num: "02", title: "Desktop Native Rust Tauri", desc: "Installer lintas OS (macOS, Windows, Linux) berukuran hanya 1-2 MB tanpa bundling Chromium/Electron." },
        { num: "03", title: "Mobile & API Backend", desc: "Aplikasi mobile Flutter dan REST API terstruktur dengan penyerahan penuh hak milik kode sumber." }
      ]
    },
    {
      num: "03",
      featured: false,
      title: "Jaringan Enterprise, Server HA & DevSecOps",
      desc: "Arsitektur jaringan Cisco/Fortinet, failover Patroni PostgreSQL, SSO OAuth 2.1 + PKCE, isolasi GitLab Runner, dan optimasi Docker.",
      fullTitle: capabilities.flagship.title,
      fullDesc: capabilities.flagship.description,
      pillars: [
        { num: "01", title: "Jaringan Cisco & Firewall", desc: "Konfigurasi routing OSPF/BGP, segmentasi VLAN, dan pengamanan perimeter Fortinet/ASA enterprise." },
        { num: "02", title: "Klaster Database HA", desc: "Failover otomatis Patroni PostgreSQL, MongoDB, Oracle DB, serta pemantauan Zabbix & Uptime Kuma." },
        { num: "03", title: "SSO OAuth 2.1 & CI/CD", desc: "Otentikasi PKCE single-device login, isolasi runner CI/CD, dan pemangkasan image ML hingga 87%." }
      ]
    },
    {
      num: "04",
      featured: false,
      title: "Ekosistem EV Charging (OCPP 1.6/2.0)",
      desc: "Pengembangan Central System SPKLU berbasis OCPP 1.6 WebSockets, dashboard operator CPO, dan simulator beban transaksi.",
      fullTitle: capabilities.supporting[1].title,
      fullDesc: capabilities.supporting[1].description,
      pillars: [
        { num: "01", title: "Central System OCPP", desc: "Komunikasi dua arah mesin SPKLU untuk otentikasi pengemudi, reservasi, saldo, dan penagihan." },
        { num: "02", title: "Charge Point Simulator", desc: "Simulasi penuh Remote Start/Stop, Status Notification, dan Meter Values di browser tanpa unit fisik." },
        { num: "03", title: "Azure IoT Edge Module", desc: "Pemrosesan data telemetri daya di tingkat edge untuk keandalan koneksi stasiun pengisian." }
      ]
    }
  ]);

  let detailService = $state(null);
</script>

<section id="layanan" class="bg-[#f4f7fb] py-20 lg:py-24">
  <div class="container-wn">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12" data-aos="fade-up">
      <div class="lg:col-span-6">
        <div class="eyebrow-wn mb-3">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          <span>LAYANAN &amp; SOLUSI KAMI</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.15] text-[#0f172a]">
          Mengubah Ide Bisnis Menjadi
          <span class="text-[#1d5bff]">Sistem Cerdas &amp; Skalabel</span>
        </h2>
      </div>
      <div class="lg:col-span-6 lg:pl-8">
        <p class="text-sm sm:text-base text-[#475569] leading-relaxed">
          {capabilities.subtitle}
        </p>
      </div>
    </div>

    <!-- 2x2 Bento Grid matching FigCraft Services Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="80">
      {#each serviceCards as card}
        <button
          type="button"
          onclick={() => (detailService = card)}
          class="text-left rounded-2xl p-8 transition-all duration-200 cursor-pointer border {card.featured
            ? 'bg-[#1d5bff] border-[#1d5bff] text-white shadow-xl shadow-blue-600/20 hover:-translate-y-1'
            : 'bg-white border-slate-200/80 text-[#0f172a] hover:border-[#1d5bff]/50 hover:shadow-lg hover:-translate-y-1'}"
        >
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold mb-6 {card.featured
              ? 'bg-[#3b72ff] text-white'
              : 'bg-[#eef4ff] text-[#1d5bff]'}"
          >
            {card.num}
          </div>
          <h3 class="text-xl sm:text-2xl font-bold leading-snug {card.featured ? 'text-white' : 'text-[#0f172a]'}">
            {card.title}
          </h3>
          <p class="mt-3 text-sm leading-relaxed {card.featured ? 'text-[#eef4ff]' : 'text-[#475569]'}">
            {card.desc}
          </p>
          <span class="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider {card.featured ? 'text-white' : 'text-[#1d5bff]'}">
            Lihat Spesifikasi <span>→</span>
          </span>
        </button>
      {/each}
    </div>

    <div class="mt-10">
      <button type="button" class="btn-light-outline" onclick={() => (detailService = serviceCards[0])}>
        <span>Jelajahi Detail Semua Layanan</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>
</section>

<!-- Frame 2: 02 - Detail Layanan Modal (White + #F4F7FB cards + #1D5BFF CTA) -->
{#if detailService}
  <div
    class="modal-backdrop-wn"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label={detailService.fullTitle}
    transition:fade={{ duration: 150 }}
    onkeydown={(e) => {
      if (e.key === "Escape") detailService = null;
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) detailService = null;
    }}
  >
    <div
      class="w-full max-w-4xl rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-slate-200"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <div class="flex items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <span class="text-sm font-semibold text-[#0f172a]">
          PHI Integrasi.com <span class="text-slate-400 mx-1">/</span> {detailService.title}
        </span>
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-[#f4f7fb] text-[#0f172a] text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
          onclick={() => (detailService = null)}
        >
          ← Kembali
        </button>
      </div>

      <div class="mt-8">
        <div class="eyebrow-wn mb-3">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          <span>SOLUSI ENTERPRISE</span>
        </div>
        <h3 class="text-2xl sm:text-4xl font-bold text-[#0f172a] leading-tight max-w-2xl">
          {detailService.fullTitle}
        </h3>
        <p class="mt-4 text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
          {detailService.fullDesc}
        </p>
        <div class="mt-7">
          <button
            type="button"
            class="btn-blue"
            onclick={() => {
              detailService = null;
              onOpenConsult();
            }}
          >
            <span>Jadwalkan Demo &amp; Konsultasi</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {#each detailService.pillars as p}
          <div class="rounded-2xl bg-[#f4f7fb] p-6">
            <div class="text-xl font-bold text-[#1d5bff] mb-2">{p.num}</div>
            <h4 class="text-base font-bold text-[#0f172a] mb-2">{p.title}</h4>
            <p class="text-xs sm:text-sm text-[#475569] leading-relaxed">{p.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
