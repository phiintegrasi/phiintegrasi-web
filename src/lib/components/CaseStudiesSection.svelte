<script>
  import { fade } from 'svelte/transition';
  let { caseStudies, onOpenConsult } = $props();

  const categories = $derived([
    'Semua',
    ...new Set(caseStudies.items.map((item) => item.sector))
  ]);

  let activeCategory = $state('Semua');
  let searchQuery = $state('');
  let selectedCase = $state(null);

  const featuredPrimary = $derived(caseStudies.items[0]);
  const featuredSecondary = $derived(caseStudies.items[1]);

  const filteredItems = $derived(
    caseStudies.items.filter((item) => {
      const matchCat = activeCategory === 'Semua' || item.sector === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchCat;
      const hay = `${item.title} ${item.summary} ${item.sector} ${item.techStack.join(' ')}`.toLowerCase();
      return matchCat && hay.includes(q);
    })
  );
</script>

<section id="studi-kasus" class="bg-white py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-between gap-4 border-b border-[#d0d7de] pb-6 md:flex-row md:items-end">
      <div class="max-w-2xl">
        <span class="section-label">{caseStudies.sectionCode} / Portofolio & Bukti Kode</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0b1220] sm:text-3xl">
          {caseStudies.title}
        </h2>
      </div>
      <p class="max-w-xl text-sm leading-relaxed text-slate-600">
        {caseStudies.subtitle}
      </p>
    </div>

    <!-- Sorotan Proyek Utama (2-kolom bordered, tanpa rounded-3xl atau gimmick kontras gelap-terang) -->
    {#if featuredPrimary && featuredSecondary}
      <div class="mt-8 grid gap-6 lg:grid-cols-2">
        {#each [featuredPrimary, featuredSecondary] as feat}
          <article class="flex flex-col justify-between rounded-lg border border-[#d0d7de] bg-[#f6f8fa] p-6 sm:p-7">
            <div>
              <div class="flex items-center justify-between gap-3">
                <span class="font-mono-tech text-xs font-semibold text-[#1d5bff]">
                  {feat.code} · {feat.sector}
                </span>
                <span class="rounded border border-emerald-300 bg-emerald-50 px-2 py-0.5 font-mono-tech text-xs font-medium text-emerald-800">
                  Unggulan
                </span>
              </div>
              <h3 class="mt-3 text-xl font-bold leading-snug text-[#0b1220]">
                {feat.title}
              </h3>
              <p class="mt-2.5 text-sm leading-relaxed text-slate-600">
                {feat.summary}
              </p>
            </div>

            <div class="mt-6 space-y-4">
              <div class="rounded-md border border-[#d0d7de] bg-white px-4 py-3">
                <span class="block font-mono-tech text-xs font-semibold uppercase text-slate-500">Dampak / Hasil</span>
                <span class="mt-1 block text-sm font-semibold text-[#0b1220]">{feat.impactPlaceholder}</span>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onclick={() => (selectedCase = feat)}
                  class="btn-primary px-4 py-2 text-xs sm:text-sm"
                >
                  Baca Spesifikasi
                </button>
                <a
                  href={feat.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-mono-tech text-xs font-semibold text-[#1d5bff] hover:underline"
                >
                  Repositori GitHub -&gt;
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}

    <!-- Filter Kategori & Pencarian -->
    <div class="mt-10 flex flex-col justify-between gap-4 border-y border-[#d0d7de] py-4 lg:flex-row lg:items-center">
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter sektor portofolio">
        {#each categories as cat}
          <button
            type="button"
            onclick={() => (activeCategory = cat)}
            class="rounded-md border px-3 py-1.5 text-xs font-semibold transition {activeCategory === cat
              ? 'border-[#0b1220] bg-[#0b1220] text-white'
              : 'border-[#d0d7de] bg-white text-slate-700 hover:bg-slate-50'}"
          >
            {cat}
          </button>
        {/each}
      </div>

      <div class="w-full lg:w-72">
        <label for="case-search" class="sr-only">Cari proyek atau teknologi</label>
        <input
          id="case-search"
          type="search"
          bind:value={searchQuery}
          placeholder="Cari stack (mis. Rust, OCPP, Svelte)..."
          class="w-full rounded-md border border-[#d0d7de] bg-white px-3.5 py-2 text-sm text-[#0b1220] placeholder:text-slate-400 focus:border-[#1d5bff] focus:outline-none"
        />
      </div>
    </div>

    <!-- Ledger Portofolio -->
    {#if filteredItems.length === 0}
      <div class="mt-8 rounded-lg border border-[#d0d7de] bg-[#f6f8fa] p-8 text-center">
        <p class="text-sm text-slate-600">Tidak ada studi kasus yang cocok dengan filter saat ini.</p>
        <button
          type="button"
          onclick={() => {
            activeCategory = 'Semua';
            searchQuery = '';
          }}
          class="mt-3 font-mono-tech text-xs font-semibold text-[#1d5bff] hover:underline"
        >
          Reset filter
        </button>
      </div>
    {:else}
      <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredItems as item}
          <article class="flex flex-col justify-between rounded-lg border border-[#d0d7de] bg-white p-5 transition hover:border-slate-400">
            <div>
              <div class="flex items-center justify-between gap-2">
                <span class="font-mono-tech text-xs font-semibold text-[#1d5bff]">{item.code}</span>
                <span class="font-mono-tech text-xs text-slate-500">{item.sector}</span>
              </div>
              <h3 class="mt-2.5 text-base font-bold leading-snug text-[#0b1220]">
                {item.title}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                {item.summary}
              </p>

              <div class="mt-4 flex flex-wrap gap-1.5">
                {#each item.techStack.slice(0, 4) as tech}
                  <span class="rounded border border-[#d0d7de] bg-[#f6f8fa] px-2 py-0.5 font-mono-tech text-xs text-slate-700">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>

            <div class="mt-5 flex items-center justify-between border-t border-slate-200 pt-3.5">
              <button
                type="button"
                onclick={() => (selectedCase = item)}
                class="text-xs font-bold text-[#0b1220] hover:text-[#1d5bff]"
              >
                Rincian -&gt;
              </button>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono-tech text-xs font-semibold text-[#1d5bff] hover:underline"
              >
                GitHub
              </a>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- Modal Detail Studi Kasus -->
{#if selectedCase}
  <div
    class="modal-backdrop-solid fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label={selectedCase.title}
    transition:fade={{ duration: 120 }}
    onkeydown={(e) => {
      if (e.key === 'Escape') selectedCase = null;
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) selectedCase = null;
    }}
  >
    <div class="w-full max-w-3xl overflow-hidden rounded-lg border border-[#d0d7de] bg-white text-[#0b1220] shadow-xl">
      <div class="border-b border-slate-800 bg-[#0b1220] p-6 text-white sm:p-8">
        <div class="flex items-center justify-between gap-4">
          <span class="font-mono-tech text-xs font-semibold text-[#60a5fa]">
            {selectedCase.code} · {selectedCase.sector}
          </span>
          <button
            type="button"
            onclick={() => (selectedCase = null)}
            class="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono-tech text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            Tutup [Esc]
          </button>
        </div>
        <h3 class="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
          {selectedCase.title}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-300">
          {selectedCase.summary}
        </p>
      </div>

      <div class="space-y-5 p-6 sm:p-8">
        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-md border border-[#d0d7de] bg-[#f6f8fa] p-4">
            <div class="font-mono-tech text-xs font-semibold uppercase text-slate-500">Dampak</div>
            <div class="mt-1.5 text-sm font-bold text-[#0b1220]">{selectedCase.impactPlaceholder}</div>
          </div>
          <div class="rounded-md border border-[#d0d7de] bg-[#f6f8fa] p-4">
            <div class="font-mono-tech text-xs font-semibold uppercase text-slate-500">Periode</div>
            <div class="mt-1.5 text-sm font-bold text-[#0b1220]">{selectedCase.durationPlaceholder}</div>
          </div>
          <div class="rounded-md border border-[#d0d7de] bg-[#f6f8fa] p-4">
            <div class="font-mono-tech text-xs font-semibold uppercase text-slate-500">Stack</div>
            <div class="mt-1.5 font-mono-tech text-xs font-medium text-[#0b1220]">{selectedCase.techStack.join(', ')}</div>
          </div>
        </div>

        <div class="grid gap-6 border-t border-[#d0d7de] pt-5 sm:grid-cols-2">
          <div>
            <h4 class="font-mono-tech text-xs font-semibold uppercase text-slate-500">Tantangan Teknis</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-700">{selectedCase.challenge}</p>
          </div>
          <div>
            <h4 class="font-mono-tech text-xs font-semibold uppercase text-slate-500">Solusi Arsitektur</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-700">{selectedCase.architectureSolution}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 border-t border-[#d0d7de] pt-5">
          <a
            href={selectedCase.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md border border-[#d0d7de] bg-white px-4 py-2 font-mono-tech text-xs font-semibold text-[#0b1220] hover:bg-slate-50"
          >
            Buka Repositori GitHub -&gt;
          </a>
          <button
            type="button"
            onclick={() => {
              selectedCase = null;
              onOpenConsult();
            }}
            class="btn-primary px-4 py-2 text-xs sm:text-sm"
          >
            Diskusikan Proyek Serupa
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
