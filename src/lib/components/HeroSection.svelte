<script>
  let { hero, onOpenConsult } = $props();
  let activeTabIndex = $state(0);

  let activeArch = $derived(hero.architectureTabs?.[activeTabIndex] ?? hero.architectureTabs?.[0]);
</script>

<section id="top" class="bg-[#0b1220] bg-tech-grid border-b border-slate-800 text-white">
  <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
    <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
      <!-- Kolom Kiri: Posisi Teknis & Bukti Nyata -->
      <div class="lg:col-span-6">
        <p class="font-mono-tech text-xs font-semibold uppercase tracking-wider text-slate-400">
          PT PHI Integrasi / Bandung, Indonesia
        </p>

        <h1 class="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.14]">
          {hero.headline}
        </h1>

        <p class="mt-5 text-base leading-relaxed text-slate-300">
          {hero.subheadline}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onclick={onOpenConsult}
            class="btn-primary px-5 py-3 text-sm"
          >
            {hero.primaryCtaText}
          </button>
          <a
            href="https://github.com/phiintegrasi"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary-dark px-5 py-3 text-sm"
          >
            github.com/phiintegrasi
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Fakta Terverifikasi (tanpa kartu mengambang) -->
        <dl class="mt-10 grid grid-cols-1 gap-4 border-t border-slate-800 pt-7 sm:grid-cols-3">
          {#each hero.metrics as metric}
            <div>
              <dt class="font-mono-tech text-xs font-medium text-slate-400">{metric.label}</dt>
              <dd class="mt-1 text-base font-bold text-white">{metric.value}</dd>
              <dd class="mt-1 text-xs leading-snug text-slate-400">{metric.note}</dd>
            </div>
          {/each}
        </dl>
      </div>

      <!-- Kolom Kanan: Interactive Architecture Spec Explorer (menggantikan fake dashboard) -->
      {#if activeArch}
        <div class="lg:col-span-6">
          <div class="rounded-lg border border-slate-700 bg-[#0f172a]">
            <!-- Tab Switcher Spesifikasi -->
            <div class="flex flex-wrap border-b border-slate-700 bg-[#0d1424]" role="tablist" aria-label="Spesifikasi Arsitektur Sistem">
              {#each hero.architectureTabs as tab, idx}
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTabIndex === idx}
                  onclick={() => (activeTabIndex = idx)}
                  class="flex-1 border-r border-slate-800 px-4 py-3 text-left transition last:border-r-0 {activeTabIndex === idx
                    ? 'bg-[#172542] text-white border-b-2 border-b-[#1d5bff]'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}"
                >
                  <span class="block font-mono-tech text-xs font-semibold text-[#60a5fa]">{tab.code}</span>
                  <span class="mt-0.5 block text-xs font-medium leading-snug">{tab.title.split('(')[0].trim()}</span>
                </button>
              {/each}
            </div>

            <!-- Konten Blueprint Arsitektur -->
            <div class="p-5 sm:p-6">
              <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span class="font-mono-tech text-xs font-semibold text-[#60a5fa]">{activeArch.code} / BLUEPRINT</span>
                  <h2 class="mt-1 text-lg font-bold text-white">{activeArch.title}</h2>
                </div>
              </div>

              <p class="mt-4 text-sm leading-relaxed text-slate-300">
                {activeArch.summary}
              </p>

              <!-- Alur Sistem Nyata -->
              <div class="mt-5 space-y-3">
                <div class="rounded-md border border-slate-800 bg-[#0b1220] p-3.5">
                  <div class="font-mono-tech text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Input / Perangkat / Sumber
                  </div>
                  <div class="mt-2 flex flex-wrap gap-2">
                    {#each activeArch.sourceNodes as node}
                      <span class="rounded border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono-tech text-xs text-slate-200">
                        {node}
                      </span>
                    {/each}
                  </div>
                </div>

                <div class="flex items-center gap-2 pl-2 font-mono-tech text-xs text-[#60a5fa]">
                  <span>v</span>
                  <span>Lapisan Integrasi & Pemrosesan</span>
                </div>

                <div class="rounded-md border border-[#1d5bff]/60 bg-[#132244] p-3.5">
                  <div class="text-sm font-semibold text-white">
                    {activeArch.gatewayLabel}
                  </div>
                </div>

                <div class="flex items-center gap-2 pl-2 font-mono-tech text-xs text-[#34d399]">
                  <span>v</span>
                  <span>Output Produksi</span>
                </div>

                <div class="rounded-md border border-slate-800 bg-[#0b1220] p-3.5">
                  <div class="flex flex-wrap gap-2">
                    {#each activeArch.targetNodes as target}
                      <span class="rounded border border-emerald-800/70 bg-emerald-950/60 px-2.5 py-1 font-mono-tech text-xs text-emerald-300">
                        {target}
                      </span>
                    {/each}
                  </div>
                </div>
              </div>

              <div class="mt-5 border-t border-slate-800 pt-4">
                <span class="font-mono-tech text-xs font-semibold uppercase text-slate-400">Deliverables: </span>
                <span class="text-xs leading-relaxed text-slate-300">{activeArch.deliverables}</span>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
