<script>
  import { fade, fly } from "svelte/transition";
  let { caseStudies, onOpenConsult } = $props();

  const categories = $derived([
    "Semua",
    ...new Set(caseStudies.items.map((item) => item.sector))
  ]);

  let activeCategory = $state("Semua");
  let searchQuery = $state("");
  let selectedCase = $state(null);

  const featuredLight = $derived(caseStudies.items[0]);
  const featuredCyan = $derived(caseStudies.items[1]);

  const filteredItems = $derived(
    caseStudies.items.filter((item) => {
      const matchCat = activeCategory === "Semua" || item.sector === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchCat;
      const hay = `${item.title} ${item.summary} ${item.sector} ${item.techStack.join(" ")}`.toLowerCase();
      return matchCat && hay.includes(q);
    })
  );
</script>

<section id="portfolio" class="band-dark section-fc">
  <div class="container-fc">
    <!-- Split Header matching FigCraft Projects -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12" data-aos="fade-up">
      <div class="lg:col-span-5">
        <span class="mono-tag text-[#7ed6e8] block mb-2">{caseStudies.sectionCode} / KATALOG REPOSITORI NYATA</span>
        <h2 class="heading-fc-lg text-white">Portfolio</h2>
      </div>
      <div class="lg:col-span-7">
        <p class="text-sm sm:text-base text-[#b4b7c9] leading-relaxed">
          {caseStudies.subtitle}
        </p>
      </div>
    </div>

    <!-- 2 Featured Showcase Cards matching FigCraft (Light Card + Cyan Card) -->
    {#if featuredLight && featuredCyan}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14" data-aos="fade-up" data-aos-delay="80">
        <!-- Left Light Card (#F3F5FA) -->
        <article class="project-card-light">
          <div class="rounded-xl bg-[#1e2033] p-6 text-center text-white mb-6 relative overflow-hidden">
            <span class="mono-tag text-[#7ed6e8] block mb-2">OCPP 1.6 WEBSOCKETS</span>
            <div class="text-4xl sm:text-5xl font-bold tracking-tight">SPKLU</div>
            <div class="text-xs text-[#b4b7c9] mt-2">Real-Time Central System &amp; CPO Dashboard</div>
          </div>

          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span class="text-xs font-semibold text-[#4a4d65]">2024 - 2025 · HAKI Kemenkumham</span>
              <h3 class="text-2xl font-bold text-[#141326] mt-1">{featuredLight.title}</h3>
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="btn-fc-solid-dark"
                style="padding: 0.6rem 1.1rem; font-size: 0.72rem;"
                onclick={() => (selectedCase = featuredLight)}
              >
                Detail
              </button>
              <a
                href={featuredLight.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-[#141326] underline px-2 py-1"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </article>

        <!-- Right Cyan Card (#95DCEB) -->
        <article class="project-card-cyan text-center items-center justify-center">
          <span class="mono-tag text-[#141326] font-semibold">APLIKASI WEB &amp; RUST BACKEND</span>
          <h3 class="text-3xl sm:text-4xl font-bold text-[#141326] mt-3 leading-tight max-w-md">
            FIT E-Office (Rust Axum)
          </h3>
          <p class="mt-3 text-sm text-[#141326]/85 max-w-md leading-relaxed">
            {featuredCyan.summary}
          </p>
          <div class="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              class="rounded-lg bg-white text-[#141326] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#141326] hover:text-white transition-colors cursor-pointer"
              onclick={() => (selectedCase = featuredCyan)}
            >
              BACA SELENGKAPNYA
            </button>
            <a
              href={featuredCyan.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-lg border border-[#141326]/40 text-[#141326] px-4 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#141326]/10 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </article>
      </div>
    {/if}

    <!-- Filter & Search Bar for All 12 Active GitHub Projects -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-6 border-t border-white/10">
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter Kategori Portfolio">
        {#each categories as cat}
          <button
            type="button"
            class="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer border {activeCategory === cat
              ? 'bg-[#7ed6e8] text-[#141326] border-[#7ed6e8]'
              : 'bg-transparent text-[#b4b7c9] border-white/15 hover:border-[#7ed6e8] hover:text-white'}"
            onclick={() => (activeCategory = cat)}
          >
            {cat}
          </button>
        {/each}
      </div>

      <div class="w-full md:w-72">
        <label for="portfolio-search" class="sr-only">Cari proyek atau teknologi</label>
        <input
          id="portfolio-search"
          type="search"
          bind:value={searchQuery}
          placeholder="Cari teknologi (Rust, OCPP, YOLO...)"
          class="w-full rounded-lg bg-[#1b1a32] border border-white/15 px-4 py-2.5 text-sm text-white placeholder-[#7d819a] focus:border-[#7ed6e8] focus:outline-none"
        />
      </div>
    </div>

    <!-- 12 Real Projects Grid -->
    {#if filteredItems.length === 0}
      <div class="rounded-2xl bg-[#1b1a32] border border-white/10 p-10 text-center">
        <p class="text-white font-semibold">Tidak ada proyek yang cocok dengan pencarian "{searchQuery}".</p>
        <button
          type="button"
          class="mt-4 btn-fc-outline-dark"
          onclick={() => {
            activeCategory = "Semua";
            searchQuery = "";
          }}
        >
          Reset Filter
        </button>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {#each filteredItems as item (item.id)}
          <article class="project-card-dark">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="mono-tag text-[#7ed6e8]">{item.code}</span>
                <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-[#b4b7c9] border border-white/10">
                  {item.sector}
                </span>
              </div>
              <h3 class="text-lg font-semibold text-white leading-snug">{item.title}</h3>
              <p class="mt-2.5 text-xs sm:text-sm text-[#b4b7c9] leading-relaxed line-clamp-3">
                {item.summary}
              </p>

              <div class="mt-4 flex flex-wrap gap-1.5">
                {#each item.techStack.slice(0, 4) as tech}
                  <span class="text-[11px] px-2 py-0.5 rounded bg-[#141326] text-[#7d819a] border border-white/10">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                type="button"
                class="text-xs font-semibold uppercase tracking-wider text-white hover:text-[#7ed6e8] transition-colors cursor-pointer"
                onclick={() => (selectedCase = item)}
              >
                Rincian Arsitektur →
              </button>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-[#7ed6e8] hover:underline"
              >
                Kode GitHub ↗
              </a>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- Frame 3: Case Study Detail Modal matching FigCraft 03 - Case Study -->
{#if selectedCase}
  <div
    class="modal-backdrop-fc"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label={selectedCase.title}
    transition:fade={{ duration: 160 }}
    onkeydown={(e) => {
      if (e.key === "Escape") selectedCase = null;
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) selectedCase = null;
    }}
  >
    <div
      class="w-full max-w-4xl rounded-3xl overflow-hidden bg-[#dfe2ee] text-[#141326] shadow-2xl"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <!-- Cyan Header matching Case Header BG #95dceb -->
      <div class="bg-[#95dceb] p-6 sm:p-10">
        <div class="flex items-center justify-between gap-4">
          <span class="mono-tag font-bold text-[#141326]">PHI INTEGRASI CASE STUDY · {selectedCase.code}</span>
          <button
            type="button"
            class="rounded-lg bg-white text-[#141326] px-4 py-2 text-xs font-bold tracking-wider uppercase hover:bg-[#141326] hover:text-white transition-colors cursor-pointer"
            onclick={() => (selectedCase = null)}
          >
            ← TUTUP
          </button>
        </div>

        <div class="mt-6">
          <span class="mono-tag font-semibold text-[#141326]/80">{selectedCase.sector.toUpperCase()} · {selectedCase.clientPlaceholder}</span>
          <h3 class="mt-2 text-2xl sm:text-4xl font-bold text-[#141326] leading-tight">
            {selectedCase.title}
          </h3>
          <p class="mt-3 text-sm sm:text-base text-[#141326]/90 max-w-2xl leading-relaxed">
            {selectedCase.summary}
          </p>
        </div>
      </div>

      <!-- Ice Mist Body matching #dfe2ee with White Metric Cards -->
      <div class="p-6 sm:p-10 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white p-5">
            <div class="text-xs font-bold uppercase tracking-wider text-[#4a4d65]">Dampak Terukur</div>
            <div class="mt-2 text-sm font-bold text-[#141326] leading-snug">{selectedCase.impactPlaceholder}</div>
          </div>
          <div class="rounded-2xl bg-white p-5">
            <div class="text-xs font-bold uppercase tracking-wider text-[#4a4d65]">Status &amp; Periode</div>
            <div class="mt-2 text-sm font-bold text-[#141326] leading-snug">{selectedCase.durationPlaceholder}</div>
          </div>
          <div class="rounded-2xl bg-white p-5">
            <div class="text-xs font-bold uppercase tracking-wider text-[#4a4d65]">Teknologi Inti</div>
            <div class="mt-2 text-sm font-bold text-[#141326] leading-snug">{selectedCase.techStack.join(", ")}</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl p-6">
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#4a4d65] mb-2">Tantangan Teknis</h4>
            <p class="text-sm text-[#141326] leading-relaxed">{selectedCase.challenge}</p>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#4a4d65] mb-2">Solusi Arsitektur</h4>
            <p class="text-sm text-[#141326] leading-relaxed">{selectedCase.architectureSolution}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
          <a
            href={selectedCase.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-fc-outline-light"
          >
            Buka Repositori GitHub ↗
          </a>
          <button
            type="button"
            class="btn-fc-solid-dark"
            onclick={() => {
              selectedCase = null;
              onOpenConsult();
            }}
          >
            <span>MULAI PROYEK SERUPA</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
