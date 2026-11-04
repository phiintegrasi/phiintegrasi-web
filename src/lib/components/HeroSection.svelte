<script>
  import { fly } from 'svelte/transition';

  let { hero } = $props();
  let activeTabId = $state('software-architecture');

  let activeTab = $derived(
    hero.architectureTabs.find((tab) => tab.id === activeTabId) || hero.architectureTabs[0]
  );

  let m0 = $derived(hero.metrics[0] || { label: 'Repositori & Proyek Nyata', value: '55+ Repositori', note: '' });
  let m1 = $derived(hero.metrics[1] || { label: 'HAKI & Riset', value: '3+ HAKI', note: '' });
  let m2 = $derived(hero.metrics[2] || { label: 'Rekam Jejak', value: 'Compnet & Tel-U', note: '' });
</script>

<section id="home" class="hero-section" aria-labelledby="hero-headline">
  <div class="container">
    <div class="hero-center-stage" data-aos="fade-up" data-aos-duration="650">
      <h1 class="hero-title" id="hero-headline">{hero.headline}</h1>
      <p class="hero-subtitle" id="hero-subheadline">{hero.subheadline}</p>
      <div class="hero-actions">
        <a href={hero.secondaryCtaHref} class="btn transition-all duration-300 ease-out hover:-translate-y-0.5" id="hero-secondary-cta">{hero.secondaryCtaText}</a>
        <a href={hero.primaryCtaHref} class="btn btn-primary transition-all duration-300 ease-out hover:-translate-y-0.5" id="hero-primary-cta">{hero.primaryCtaText}</a>
      </div>
    </div>

    <div class="hero-showcase-grid" id="hero-metrics-list">
      <!-- Panel Kiri: Indikator Repositori & Proyek Nyata -->
      <article
        class="showcase-wing-card transition-all duration-300 ease-out hover:-translate-y-1"
        aria-label={m0.label}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="wing-card-top">
          <span class="wing-pill-label">{m0.label}</span>
        </div>
        <div class="wing-ring-visual" aria-hidden="true">
          <svg viewBox="0 0 160 160" class="ring-svg">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent)" />
                <stop offset="100%" stop-color="var(--border-strong)" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="56" fill="none" stroke="var(--border-subtle)" stroke-width="14" />
            <circle
              cx="80"
              cy="80"
              r="56"
              fill="none"
              stroke="url(#ringGrad)"
              stroke-width="14"
              stroke-dasharray="268 352"
              stroke-linecap="round"
              transform="rotate(-90 80 80)"
              class="ring-progress-stroke"
            />
            <circle cx="80" cy="24" r="5" fill="var(--text-primary)" />
          </svg>
          <div class="wing-ring-center">
            <span class="placeholder-tag">{m0.value}</span>
          </div>
        </div>
        <div class="wing-card-footer">
          <p class="metric-note">{m0.note}</p>
        </div>
      </article>

      <!-- Panel Tengah: Kanvas Skema Arsitektur Interaktif -->
      <aside
        class="architecture-dossier transition-all duration-300 ease-out"
        aria-labelledby="dossier-heading"
        data-aos="fade-up"
        data-aos-delay="180"
      >
        <div class="dossier-header">
          <h2 class="dossier-heading" id="dossier-heading">SKEMA ARSITEKTUR SOLUSI IT</h2>
          <span class="placeholder-tag" id="active-arch-code">{activeTab.code}</span>
        </div>
        <div class="arch-tab-list" role="tablist" aria-label="Pilih Skema Arsitektur" id="arch-tablist">
          {#each hero.architectureTabs as tab}
            <button
              type="button"
              class="arch-tab-btn transition-all duration-200 ease-out"
              role="tab"
              id="tab-{tab.id}"
              aria-selected={activeTab.id === tab.id}
              aria-controls="arch-panel"
              onclick={() => (activeTabId = tab.id)}
            >
              {tab.title}
            </button>
          {/each}
        </div>
        <div class="arch-panel-body" id="arch-panel" role="tabpanel" aria-labelledby="tab-{activeTab.id}" aria-live="polite">
          {#key activeTab.id}
            <div in:fly={{ y: 10, duration: 240 }}>
              <h3 class="arch-panel-title">{activeTab.title}</h3>
              <p class="arch-panel-summary">{activeTab.summary}</p>
              <div class="arch-diagram-box">
                <span class="arch-layer-label">LAPISAN KEBUTUHAN, PERANGKAT, &amp; SUMBER DATA</span>
                <div class="arch-nodes-row">
                  {#each activeTab.sourceNodes as nodeText}
                    <div class="arch-node transition-colors duration-200">{nodeText}</div>
                  {/each}
                </div>
                <div class="arch-connector">Perancangan, Pengadaan, &amp; Konfigurasi Best Practice</div>
                <div class="arch-gateway-bar">{activeTab.gatewayLabel}</div>
                <div class="arch-connector">Instalasi, Integrasi, &amp; Operasional Terverifikasi</div>
                <span class="arch-layer-label">LAPISAN HASIL &amp; SISTEM OPERASIONAL</span>
                <div class="arch-nodes-row">
                  {#each activeTab.targetNodes as nodeText}
                    <div class="arch-node transition-colors duration-200">{nodeText}</div>
                  {/each}
                </div>
              </div>
              <p class="arch-deliverable-note">Artefak Keluaran: {activeTab.deliverables}</p>
            </div>
          {/key}
        </div>
      </aside>

      <!-- Panel Kanan: Indikator HAKI & Rekam Jejak Infrastruktur -->
      <article
        class="showcase-wing-card transition-all duration-300 ease-out hover:-translate-y-1"
        aria-label="{m1.label} dan {m2.label}"
        data-aos="fade-up"
        data-aos-delay="260"
      >
        <div class="wing-card-top">
          <span class="wing-card-heading">{m1.label}</span>
          <div style="margin-top: 0.45rem;">
            <span class="placeholder-tag">{m1.value}</span>
          </div>
          <p class="metric-note" style="margin-top: 0.35rem;">{m1.note}</p>
        </div>

        <div class="wing-bars-visual" aria-hidden="true">
          <svg viewBox="0 0 220 120" class="bars-svg">
            <path
              d="M 16 96 C 65 92, 115 58, 186 18"
              fill="none"
              stroke="var(--border-strong)"
              stroke-width="1.5"
              stroke-dasharray="4 4"
            />
            <line x1="186" y1="6" x2="186" y2="112" stroke="var(--border-subtle)" stroke-width="1" />
            <circle cx="186" cy="18" r="3.5" fill="var(--text-primary)" />
            <rect x="22" y="84" width="22" height="28" rx="11" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
            <rect x="58" y="72" width="22" height="40" rx="11" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
            <rect x="94" y="56" width="22" height="56" rx="11" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
            <rect x="130" y="40" width="22" height="72" rx="11" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
            <rect x="166" y="24" width="24" height="88" rx="12" fill="var(--accent)" />
          </svg>
        </div>

        <div class="wing-card-footer wing-badge-row">
          <span class="wing-sub-label">{m2.label}:</span>
          <span class="placeholder-tag">{m2.value}</span>
        </div>
      </article>
    </div>
  </div>
</section>
