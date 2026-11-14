<script>
  import { fade, fly } from "svelte/transition";
  let { capabilities, onOpenConsult } = $props();

  const serviceRows = $derived([
    {
      id: "web-desktop",
      code: capabilities.supporting[0].code,
      title: "Pembuatan Website, Desktop & Mobile",
      headline: capabilities.supporting[0].title,
      desc: capabilities.supporting[0].description,
      tag: "SVELTE 5 · RUST TAURI · FLUTTER",
      metric: "~12 MB RAM & 1-2 MB App",
      badgeLabel: "LINTAS OS",
      cards: [
        { num: "01", title: "Web & Portal Enterprise", desc: "Svelte 5, Next.js, dan backend Rust Axum dengan footprint memori sangat hemat dan cepat." },
        { num: "02", title: "Aplikasi Desktop Native", desc: "Dibangun di atas Rust Tauri dengan installer 1-2 MB untuk macOS, Windows, dan Linux tanpa Electron." },
        { num: "03", title: "Mobile & API Terintegrasi", desc: "Aplikasi Flutter dan REST API terstruktur lengkap dengan hak milik kode sumber untuk klien." }
      ]
    },
    {
      id: "ev-ocpp",
      code: capabilities.supporting[1].code,
      title: "Ekosistem EV Charging (OCPP 1.6/2.0)",
      headline: capabilities.supporting[1].title,
      desc: capabilities.supporting[1].description,
      tag: "OCPP 1.6 JSON · WEBSOCKETS",
      metric: "Real-Time CPO & SPKLU",
      badgeLabel: "SMART EV",
      cards: [
        { num: "01", title: "Central System OCPP", desc: "Manajemen sesi pengisian daya dua arah, otentikasi pengemudi, dan penagihan otomatis." },
        { num: "02", title: "Charge Point Simulator", desc: "Pengujian beban transaksi SPKLU penuh langsung di browser tanpa ketergantungan unit fisik." },
        { num: "03", title: "Azure IoT Edge Module", desc: "Pemrosesan telemetri daya di tingkat edge untuk keandalan koneksi lapangan." }
      ]
    },
    {
      id: "infra-security",
      code: capabilities.flagship.code,
      title: "Jaringan Enterprise, Server HA & Keamanan",
      headline: capabilities.flagship.title,
      desc: capabilities.flagship.description,
      tag: "ZERO-TRUST & HIGH AVAILABILITY",
      metric: "99.98% Uptime & Isolasi",
      badgeLabel: "SOC & HA 24/7",
      cards: [
        { num: "01", title: "Jaringan Cisco & Firewall", desc: "Perancangan routing OSPF/BGP, segmentasi VLAN, dan pengamanan Fortinet/ASA berstandar enterprise." },
        { num: "02", title: "Klaster Database & Dual-Node", desc: "Failover otomatis Patroni PostgreSQL, MongoDB, Oracle DB, serta pemantauan Zabbix & Uptime Kuma." },
        { num: "03", title: "SSO OAuth 2.1 & CI/CD", desc: "Otentikasi PKCE, single-device login, isolasi GitLab Runner, dan optimasi kontainer Docker hingga 87%." }
      ]
    },
    {
      id: "iot-ai",
      code: capabilities.supporting[2].code,
      title: "Hardware IoT, PCB Kustom & AI Lokal",
      headline: capabilities.supporting[2].title,
      desc: capabilities.supporting[2].description,
      tag: "ESP32 · PCB CAD · PADDLEOCR-VL",
      metric: "100% Inferensi On-Premise",
      badgeLabel: "UU PDP SAFE",
      cards: [
        { num: "01", title: "Skematik PCB & Firmware", desc: "Desain PCB berisolasi derau dan firmware C++ untuk sensor pH, load-cell, serta smart locker." },
        { num: "02", title: "KTP OCR On-Premise", desc: "Ekstraksi KTP ke JSON secara lokal dengan validasi silang 16 digit NIK tanpa mengirim data ke cloud." },
        { num: "03", title: "Computer Vision YOLO", desc: "Deteksi objek dan rambu lalu lintas real-time menggunakan Python dan OpenCV." }
      ]
    }
  ]);

  let expandedIndex = $state(2); // Default expand index 2 matching FigCraft Cyber Security showcase
  let detailService = $state(null);
</script>

<section id="layanan" class="band-light section-fc">
  <div class="container-fc">
    <div class="text-center mb-14" data-aos="fade-up">
      <span class="mono-tag text-[#4a4d65] block mb-2">{capabilities.sectionCode} / LAYANAN UTAMA</span>
      <h2 class="heading-fc-lg text-[#141326]">Layanan</h2>
    </div>

    <div class="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="80">
      {#each serviceRows as svc, idx}
        {@const isOpen = expandedIndex === idx}
        <div class="service-row-fc">
          <button
            type="button"
            class="service-row-trigger"
            aria-expanded={isOpen}
            onclick={() => (expandedIndex = isOpen ? -1 : idx)}
          >
            <span class="service-row-title {isOpen ? 'active' : ''}">{svc.title}</span>
            <span class="text-2xl text-[#141326] shrink-0 transition-transform duration-200 {isOpen ? 'rotate-90' : ''}" aria-hidden="true">
              →
            </span>
          </button>

          {#if isOpen}
            <div
              class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              transition:fly={{ y: 10, duration: 220 }}
            >
              <div class="lg:col-span-6 space-y-5">
                <p class="text-sm sm:text-base leading-relaxed text-[#4a4d65]">
                  {svc.desc}
                </p>
                <div class="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    class="btn-fc-solid-dark"
                    onclick={() => (detailService = svc)}
                  >
                    <span>DETAIL LAYANAN</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  <button
                    type="button"
                    class="text-xs font-semibold uppercase tracking-widest text-[#141326] hover:underline"
                    onclick={onOpenConsult}
                  >
                    Minta Estimasi ↗
                  </button>
                </div>
              </div>

              <!-- Right Dark Preview Card matching FigCraft Svc Cyber Preview -->
              <div class="lg:col-span-6">
                <div class="rounded-2xl bg-[#22253a] p-5 flex flex-col sm:flex-row items-stretch gap-4 shadow-xl">
                  <div class="flex-1 rounded-xl bg-[#141326] p-5 flex flex-col justify-between">
                    <div>
                      <span class="mono-tag text-[#7ed6e8]">{svc.tag}</span>
                      <div class="mt-2 text-lg font-bold text-white">{svc.metric}</div>
                    </div>
                    <div class="mt-5 space-y-2.5">
                      <div class="h-2.5 w-4/5 rounded-full bg-[#7ed6e8]"></div>
                      <div class="h-2.5 w-3/5 rounded-full bg-[#495378]"></div>
                    </div>
                  </div>
                  <div class="sm:w-36 rounded-xl bg-[#2e3350] p-4 flex flex-col items-center justify-center text-center border border-white/10">
                    <div class="w-10 h-10 rounded-full border border-[#7ed6e8]/50 flex items-center justify-center text-[#7ed6e8] mb-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2 4 6v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V6l-8-4Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <span class="mono-tag text-[#7ed6e8] font-semibold">{svc.badgeLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Frame 2: Service Detail Modal matching FigCraft 02 - Service Detail -->
{#if detailService}
  <div
    class="modal-backdrop-fc"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label={detailService.headline}
    transition:fade={{ duration: 160 }}
    onkeydown={(e) => {
      if (e.key === "Escape") detailService = null;
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) detailService = null;
    }}
  >
    <div
      class="w-full max-w-4xl rounded-3xl bg-[#141326] border border-white/15 p-6 sm:p-10 text-white shadow-2xl"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <div class="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div class="brand-wordmark text-lg">
          <span class="brand-wordmark-accent">PHI</span><span class="brand-wordmark-base">INTEGRASI</span>
        </div>
        <button
          type="button"
          class="btn-fc-outline-dark"
          style="padding: 0.55rem 1rem; font-size: 0.72rem;"
          onclick={() => (detailService = null)}
        >
          ← TUTUP DETAIL
        </button>
      </div>

      <div class="mt-8">
        <span class="mono-tag text-[#7ed6e8]">LAYANAN / {detailService.title.toUpperCase()}</span>
        <h3 class="mt-3 text-2xl sm:text-4xl font-bold leading-tight text-white max-w-2xl">
          {detailService.headline}
        </h3>
        <p class="mt-4 text-sm sm:text-base text-[#b4b7c9] max-w-2xl leading-relaxed">
          {detailService.desc}
        </p>
        <div class="mt-7">
          <button
            type="button"
            class="btn-fc-solid-cyan"
            onclick={() => {
              detailService = null;
              onOpenConsult();
            }}
          >
            <span>AJUKAN DISKUSI ARSITEKTUR</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {#each detailService.cards as card}
          <div class="rounded-2xl bg-[#1b1a32] border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div class="text-2xl font-bold text-[#7ed6e8] mb-3">{card.num}</div>
              <h4 class="text-lg font-semibold text-white mb-2">{card.title}</h4>
              <p class="text-xs sm:text-sm text-[#b4b7c9] leading-relaxed">{card.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
