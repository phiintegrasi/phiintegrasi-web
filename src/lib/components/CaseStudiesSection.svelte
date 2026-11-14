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

  const featuredDark = $derived(caseStudies.items[0]);
  const featuredWhite = $derived(caseStudies.items[1]);

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

<section id="portfolio" class="bg-[#f4f7fb] py-20 lg:py-24">
  <div class="container-wn">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12" data-aos="fade-up">
      <div class="lg:col-span-6">
        <div class="eyebrow-wn mb-3">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          <span>SOROTAN PORTOFOLIO</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.15] text-[#0f172a]">
          Inovasi dalam <span class="text-[#1d5bff]">Aksi Nyata</span>
        </h2>
      </div>
      <div class="lg:col-span-6 lg:pl-8">
        <p class="text-sm sm:text-base text-[#475569] leading-relaxed">
          {caseStudies.subtitle}
        </p>
      </div>
    </div>

    <!-- 2 Featured Side-by-Side Showcase Cards (Dark #071822 + White #FFFFFF) -->
    {#if featuredDark && featuredWhite}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14" data-aos="fade-up" data-aos-delay="80">
        <!-- Card 1: Dark #071822 -->
        <article class="rounded-3xl bg-[#071822] p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl">
          <div>
            <span class="inline-block px-3.5 py-1.5 rounded-full bg-[#1d5bff] text-white mono-tag font-bold text-[11px]">
              EV &amp; SMART MOBILITY
            </span>
            <h3 class="mt-6 text-2xl sm:text-3xl font-bold leading-snug text-white">
              {featuredDark.title}
            </h3>
            <p class="mt-3 text-sm text-[#94a3b8] leading-relaxed">
              {featuredDark.summary}
            </p>
          </div>

          <div class="mt-8 space-y-6">
            <div class="rounded-2xl bg-[#0e222e] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div class="text-xl font-bold text-[#10b981]">OCPP 1.6 JSON</div>
                <div class="text-xs text-[#94a3b8] mt-1">WebSockets 2-Arah Real-Time</div>
              </div>
              <div>
                <div class="text-xl font-bold text-white">HAKI Resmi</div>
                <div class="text-xs text-[#94a3b8] mt-1">Kemenkumham RI (2024-2025)</div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <button
                type="button"
                class="px-5 py-3 rounded-xl bg-white text-[#0f172a] text-xs font-bold hover:bg-[#eef4ff] transition-colors cursor-pointer"
                onclick={() => (selectedCase = featuredDark)}
              >
                Pelajari Studi Kasus →
              </button>
              <a
                href={featuredDark.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-[#38bdf8] hover:underline"
              >
                Repositori GitHub ↗
              </a>
            </div>
          </div>
        </article>

        <!-- Card 2: White #FFFFFF -->
        <article class="rounded-3xl bg-white p-8 sm:p-10 text-[#0f172a] border border-slate-200/80 flex flex-col justify-between shadow-sm">
          <div>
            <span class="inline-block px-3.5 py-1.5 rounded-full bg-[#eef4ff] text-[#1d5bff] mono-tag font-bold text-[11px]">
              WEB &amp; RUST BACKEND
            </span>
            <h3 class="mt-6 text-2xl sm:text-3xl font-bold leading-snug text-[#0f172a]">
              {featuredWhite.title}
            </h3>
            <p class="mt-3 text-sm text-[#475569] leading-relaxed">
              {featuredWhite.summary}
            </p>
          </div>

          <div class="mt-8 space-y-6">
            <div class="rounded-2xl bg-[#f4f7fb] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div class="text-xl font-bold text-[#1d5bff]">~12-18 MB RAM</div>
                <div class="text-xs text-[#475569] mt-1">Single-Process Rust Serving</div>
              </div>
              <div>
                <div class="text-xl font-bold text-[#0f172a]">Svelte 5 + SQLx</div>
                <div class="text-xs text-[#475569] mt-1">Notifikasi SMTP TLS Otomatis</div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <button
                type="button"
                class="btn-blue"
                onclick={() => (selectedCase = featuredWhite)}
              >
                Pelajari Studi Kasus →
              </button>
              <a
                href={featuredWhite.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-[#1d5bff] hover:underline"
              >
                Repositori GitHub ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    {/if}

    <!-- Filter Pills & Live Search for All 12 Active GitHub Projects -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-8 border-t border-slate-200">
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter Kategori Portofolio">
        {#each categories as cat}
          <button
            type="button"
            class="px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border {activeCategory === cat
              ? 'bg-[#1d5bff] text-white border-[#1d5bff]'
              : 'bg-white text-[#475569] border-slate-200 hover:border-[#1d5bff] hover:text-[#1d5bff]'}"
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
          class="w-full rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-sm text-[#0f172a] placeholder-[#64748b] focus:border-[#1d5bff] focus:outline-none"
        />
      </div>
    </div>

    <!-- 12 Real Projects Grid -->
    {#if filteredItems.length === 0}
      <div class="rounded-2xl bg-white border border-slate-200 p-10 text-center">
        <p class="text-[#0f172a] font-semibold">Tidak ada proyek yang cocok dengan pencarian "{searchQuery}".</p>
        <button
          type="button"
          class="mt-4 btn-light-outline"
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
          <article class="rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between hover:border-[#1d5bff]/50 hover:shadow-md transition-all">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="mono-tag font-bold text-[#1d5bff]">{item.code}</span>
                <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#eef4ff] text-[#1d5bff]">
                  {item.sector}
                </span>
              </div>
              <h3 class="text-lg font-bold text-[#0f172a] leading-snug">{item.title}</h3>
              <p class="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                {item.summary}
              </p>

              <div class="mt-4 flex flex-wrap gap-1.5">
                {#each item.techStack.slice(0, 4) as tech}
                  <span class="text-[11px] px-2 py-0.5 rounded bg-[#f4f7fb] text-[#475569] border border-slate-200/80">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                type="button"
                class="text-xs font-bold text-[#0f172a] hover:text-[#1d5bff] transition-colors cursor-pointer"
                onclick={() => (selectedCase = item)}
              >
                Rincian Studi Kasus →
              </button>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-bold text-[#1d5bff] hover:underline"
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

<!-- Frame 3: 03 - Studi Kasus Modal (#071822 Header + #F4F7FB Body + White Metric Cards + #10B981 CTA) -->
{#if selectedCase}
  <div
    class="modal-backdrop-wn"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label={selectedCase.title}
    transition:fade={{ duration: 150 }}
    onkeydown={(e) => {
      if (e.key === "Escape") selectedCase = null;
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) selectedCase = null;
    }}
  >
    <div
      class="w-full max-w-4xl rounded-3xl overflow-hidden bg-[#f4f7fb] text-[#0f172a] shadow-2xl border border-slate-200"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <!-- Dark Hero Header (#071822) -->
      <div class="bg-[#071822] p-6 sm:p-10 text-white">
        <div class="flex items-center justify-between gap-4">
          <span class="mono-tag font-bold text-[#10b981]">STUDI KASUS PHI INTEGRASI · {selectedCase.code}</span>
          <button
            type="button"
            class="px-4 py-2 rounded-lg bg-[#0e222e] text-white text-xs font-bold hover:bg-[#1d5bff] transition-colors cursor-pointer"
            onclick={() => (selectedCase = null)}
          >
            ← Tutup
          </button>
        </div>

        <h3 class="mt-6 text-2xl sm:text-4xl font-bold text-white leading-tight">
          {selectedCase.title}
        </h3>
        <p class="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-2xl leading-relaxed">
          {selectedCase.summary}
        </p>
      </div>

      <!-- Body (#F4F7FB) with 3 White Metric Cards (#1D5BFF values) -->
      <div class="p-6 sm:p-10 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white p-5 border border-slate-200/70">
            <div class="text-xs font-bold uppercase tracking-wider text-[#475569]">Dampak Terukur</div>
            <div class="mt-2 text-base font-bold text-[#1d5bff] leading-snug">{selectedCase.impactPlaceholder}</div>
          </div>
          <div class="rounded-2xl bg-white p-5 border border-slate-200/70">
            <div class="text-xs font-bold uppercase tracking-wider text-[#475569]">Status &amp; Periode</div>
            <div class="mt-2 text-base font-bold text-[#1d5bff] leading-snug">{selectedCase.durationPlaceholder}</div>
          </div>
          <div class="rounded-2xl bg-white p-5 border border-slate-200/70">
            <div class="text-xs font-bold uppercase tracking-wider text-[#475569]">Teknologi Inti</div>
            <div class="mt-2 text-sm font-bold text-[#0f172a] leading-snug">{selectedCase.techStack.join(", ")}</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 border border-slate-200/70">
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Tantangan Teknis</h4>
            <p class="text-sm text-[#0f172a] leading-relaxed">{selectedCase.challenge}</p>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Solusi Arsitektur</h4>
            <p class="text-sm text-[#0f172a] leading-relaxed">{selectedCase.architectureSolution}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
          <a
            href={selectedCase.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-light-outline"
          >
            Buka Repositori GitHub ↗
          </a>
          <button
            type="button"
            class="btn-emerald"
            onclick={() => {
              selectedCase = null;
              onOpenConsult();
            }}
          >
            <span>Diskusikan Proyek Serupa</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
