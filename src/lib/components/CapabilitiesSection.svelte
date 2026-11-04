<script>
  let { capabilities, methodology } = $props();
  let expandedMap = $state({ 0: true });

  function togglePhase(idx) {
    expandedMap[idx] = !expandedMap[idx];
  }

  function setAllExpanded(open) {
    const next = {};
    if (methodology && methodology.phases) {
      methodology.phases.forEach((_, idx) => {
        next[idx] = open;
      });
    }
    expandedMap = next;
  }
</script>

<section id="layanan" class="section-block" aria-labelledby="layanan-title">
  <div class="container">
    <div class="section-index-row" data-aos="fade-up">
      <span class="section-code">{capabilities.sectionCode}</span>
      <h2 class="section-title" id="layanan-title">{capabilities.title}</h2>
    </div>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="60">{capabilities.subtitle}</p>

    <article
      class="flagship-capability transition-all duration-300 ease-out hover:-translate-y-0.5"
      aria-labelledby="flagship-title"
      data-aos="fade-up"
      data-aos-delay="120"
    >
      <div class="flagship-top">
        <div>
          <span class="capability-code">{capabilities.flagship.code}</span>
          <h3 class="flagship-title" id="flagship-title">{capabilities.flagship.title}</h3>
        </div>
        <p class="flagship-desc">{capabilities.flagship.description}</p>
      </div>
      <dl class="flagship-specs-grid">
        {#each capabilities.flagship.specs as spec}
          <div class="spec-cell transition-colors duration-200">
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        {/each}
      </dl>
    </article>

    <div class="blueprint-cards-stagger" aria-label="Pilar Layanan IT">
      {#each capabilities.supporting as item, idx}
        <article
          class="blueprint-card blueprint-card-{idx + 1} transition-all duration-300 ease-out hover:-translate-y-1.5"
          data-aos="fade-up"
          data-aos-delay={140 + idx * 110}
        >
          <div class="blueprint-card-header">
            <span class="capability-code">{item.code}</span>
            <h3 class="blueprint-card-title">{item.title}</h3>
            <p class="blueprint-card-desc">{item.description}</p>
            <p class="supporting-scope">Cakupan: {item.scope}</p>
          </div>

          <div class="blueprint-visual-stage" aria-hidden="true">
            {#if idx === 0}
              <!-- Visual 1: Pembuatan Website, Aplikasi, & Software (Skala Kecil s.d. Besar) -->
              <svg viewBox="0 0 320 185" class="blueprint-svg">
                <defs>
                  <linearGradient id="trajGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.32" />
                    <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 24 168 Q 270 112 260 66 Q 250 28 36 32 L 36 168 Z"
                  fill="url(#trajGlow)"
                />
                <path
                  d="M 24 168 Q 270 112 260 66 Q 250 28 36 32"
                  fill="none"
                  stroke="var(--accent)"
                  stroke-width="2"
                />
                <line x1="88" y1="95" x2="88" y2="165" stroke="var(--border-subtle)" stroke-width="1" />
                <circle cx="88" cy="142" r="3.5" fill="var(--text-primary)" />
                <text x="82" y="122" fill="var(--text-secondary)" font-size="10" text-anchor="end">Skala Kecil/Web</text>

                <line x1="252" y1="45" x2="252" y2="145" stroke="var(--border-subtle)" stroke-width="1" />
                <circle cx="252" cy="78" r="3.5" fill="var(--text-primary)" />
                <text x="242" y="68" fill="var(--text-secondary)" font-size="10" text-anchor="end">Mobile &amp; Desktop</text>

                <line x1="132" y1="12" x2="132" y2="90" stroke="var(--border-subtle)" stroke-width="1" />
                <circle cx="132" cy="34" r="4" fill="var(--text-primary)" />
                <text x="140" y="28" fill="var(--text-primary)" font-size="10" font-weight="600">Skala Enterprise</text>
              </svg>
            {:else if idx === 1}
              <!-- Visual 2: Pengadaan Hardware IoT (Custom PCB & Vendor Resmi) -->
              <svg viewBox="0 0 320 185" class="blueprint-svg">
                <rect x="16" y="14" width="76" height="44" rx="10" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="228" y="14" width="76" height="44" rx="10" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="16" y="74" width="64" height="44" rx="10" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="240" y="74" width="64" height="44" rx="10" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="88" y="136" width="144" height="36" rx="10" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />

                <line x1="80" y1="96" x2="124" y2="96" stroke="var(--border-strong)" stroke-width="1.2" />
                <line x1="196" y1="96" x2="240" y2="96" stroke="var(--border-strong)" stroke-width="1.2" />
                <line x1="160" y1="128" x2="160" y2="136" stroke="var(--border-strong)" stroke-width="1.2" />
                <path d="M 92 36 L 128 36 L 128 60" fill="none" stroke="var(--border-strong)" stroke-width="1.2" stroke-dasharray="3 3" />
                <path d="M 228 36 L 192 36 L 192 60" fill="none" stroke="var(--border-strong)" stroke-width="1.2" stroke-dasharray="3 3" />

                <rect x="124" y="60" width="72" height="68" rx="16" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
                <circle cx="160" cy="82" r="3.5" fill="var(--text-primary)" />
                <circle cx="147" cy="104" r="3.5" fill="var(--text-primary)" />
                <circle cx="173" cy="104" r="3.5" fill="var(--text-primary)" />
                <path d="M 152 86 A 14 14 0 0 0 146 98" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />
                <path d="M 168 86 A 14 14 0 0 1 174 98" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />
                <path d="M 153 107 A 14 14 0 0 0 167 107" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />
              </svg>
            {:else}
              <!-- Visual 3: Pengadaan Perangkat Jaringan Skala Kecil s.d. Besar + Best Practice -->
              <svg viewBox="0 0 320 185" class="blueprint-svg">
                <path
                  d="M 28 148 C 110 142, 165 55, 250 34 L 304 34"
                  fill="none"
                  stroke="var(--border-strong)"
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                />
                <line x1="78" y1="88" x2="78" y2="164" stroke="var(--border-subtle)" stroke-width="1" />
                <circle cx="78" cy="128" r="3" fill="var(--text-secondary)" />

                <line x1="250" y1="14" x2="250" y2="164" stroke="var(--border-subtle)" stroke-width="1" />
                <circle cx="250" cy="34" r="4" fill="var(--text-primary)" />

                <rect x="64" y="138" width="28" height="28" rx="14" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="106" y="120" width="28" height="46" rx="14" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="148" y="96" width="28" height="70" rx="14" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="190" y="70" width="28" height="96" rx="14" fill="var(--bg-elevated)" stroke="var(--border-subtle)" />
                <rect x="234" y="44" width="32" height="122" rx="16" fill="var(--accent)" />
              </svg>
            {/if}
            <p class="blueprint-output-bar">Hasil Kerja: {item.output}</p>
          </div>
        </article>
      {/each}
    </div>

    {#if methodology && methodology.phases}
      <div class="methodology-layout" style="margin-top: 3.5rem; padding-top: 2.75rem; border-top: 1px solid var(--border-subtle);">
        <div data-aos="fade-up">
          <div class="section-index-row">
            <span class="section-code">{methodology.sectionCode}</span>
            <h3 class="section-title" style="font-size: clamp(1.35rem, 1.15rem + 0.9vw, 1.85rem);">{methodology.title}</h3>
          </div>
          <p class="section-subtitle">{methodology.subtitle}</p>
          <div class="hero-actions">
            <button type="button" class="btn btn-compact" id="expand-all-phases-btn" onclick={() => setAllExpanded(true)}>
              Buka Semua Tahapan
            </button>
            <button type="button" class="btn btn-compact" id="collapse-all-phases-btn" onclick={() => setAllExpanded(false)}>
              Tutup Semua Tahapan
            </button>
          </div>
        </div>

        <div class="methodology-phases" data-aos="fade-up" data-aos-delay="100">
          {#each methodology.phases as phase, idx}
            {@const isOpen = !!expandedMap[idx]}
            <div class="phase-row">
              <button
                type="button"
                class="phase-trigger"
                aria-expanded={isOpen}
                aria-controls="phase-content-{idx}"
                onclick={() => togglePhase(idx)}
              >
                <span class="phase-trigger-left">
                  <span class="phase-step-code">{phase.step}</span>
                  <span class="phase-name">{phase.name}</span>
                </span>
                <span class="phase-toggle-indicator">
                  {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                </span>
              </button>
              <div class="phase-content" id="phase-content-{idx}" hidden={!isOpen}>
                <p class="phase-summary">{phase.summary}</p>
                <div class="phase-meta-grid">
                  <div class="phase-meta-box">
                    <strong>Estimasi Durasi: </strong>
                    <span class="placeholder-tag">{phase.duration}</span>
                  </div>
                  <div class="phase-meta-box">
                    <strong>Keluaran Tahap: </strong>
                    {phase.deliverable}
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>
