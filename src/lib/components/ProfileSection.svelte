<script>
  let { brand, profile } = $props();
  let showLegal = $state(true);
</script>

<section id="profil" class="border-t border-[#d0d7de] bg-[#f6f8fa] py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-between gap-4 border-b border-[#d0d7de] pb-6 md:flex-row md:items-end">
      <div>
        <span class="section-label">§ 03 / Tim Inti & Legalitas</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0b1220] sm:text-3xl">
          Arsitek Sistem & Rekam Jejak Riset
        </h2>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <a
          href={brand.githubOrgUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-md border border-[#d0d7de] bg-white px-3.5 py-2 font-mono-tech text-xs font-semibold text-[#0b1220] hover:border-slate-400"
        >
          Organisasi: github.com/phiintegrasi -&gt;
        </a>
      </div>
    </div>

    <!-- Roster Tim Inti (bukan kartu kutipan testimoni) -->
    <div class="mt-8 grid divide-y divide-[#d0d7de] rounded-lg border border-[#d0d7de] bg-white lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {#each profile.team as member, idx}
        {@const portfolio = brand.personalPortfolios?.[idx]}
        <article class="flex flex-col justify-between p-6">
          <div>
            <div class="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <span class="font-mono-tech text-xs font-bold text-[#1d5bff]">{member.initials}</span>
              <span class="font-mono-tech text-xs text-slate-500">Principal / Divisi</span>
            </div>
            <h3 class="mt-4 text-lg font-bold text-[#0b1220]">{member.name}</h3>
            <p class="mt-1 font-mono-tech text-xs font-medium text-slate-600">{member.role}</p>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
          </div>

          {#if portfolio}
            <div class="mt-5 flex flex-wrap gap-3 border-t border-slate-200 pt-3">
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono-tech text-xs font-semibold text-[#1d5bff] hover:underline"
              >
                GitHub -&gt;
              </a>
              {#if portfolio.websiteUrl}
                <a
                  href={portfolio.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-mono-tech text-xs font-semibold text-slate-700 hover:underline"
                >
                  {portfolio.websiteUrl.replace('https://', '')} -&gt;
                </a>
              {/if}
            </div>
          {/if}
        </article>
      {/each}
    </div>

    <!-- Ledger HAKI & Riset Terdaftar -->
    <div class="mt-8 rounded-lg border border-[#d0d7de] bg-white">
      <button
        type="button"
        onclick={() => (showLegal = !showLegal)}
        aria-expanded={showLegal}
        class="flex w-full items-center justify-between gap-4 border-b border-[#d0d7de] px-6 py-4 text-left"
      >
        <div>
          <span class="font-mono-tech text-xs font-semibold uppercase text-[#1d5bff]">
            HAKI Terdaftar & Riset Terapan
          </span>
          <span class="mt-0.5 block text-sm font-bold text-[#0b1220]">
            {brand.registrationNumber} · {brand.foundedYear}
          </span>
        </div>
        <span class="font-mono-tech text-xs font-semibold text-slate-600">
          {showLegal ? 'Sembunyikan [-]' : 'Tampilkan [+]'}
        </span>
      </button>

      {#if showLegal}
        <div class="divide-y divide-[#d0d7de]">
          {#each profile.achievements as item}
            <div class="grid gap-3 px-6 py-4 md:grid-cols-12 md:items-start">
              <div class="md:col-span-3">
                <span class="inline-block rounded border border-emerald-300 bg-emerald-50 px-2 py-0.5 font-mono-tech text-xs font-medium text-emerald-800">
                  {item.badge}
                </span>
              </div>
              <div class="md:col-span-9">
                <h4 class="text-sm font-bold text-[#0b1220]">{item.title}</h4>
                <p class="mt-0.5 font-mono-tech text-xs text-slate-500">{item.meta}</p>
                <p class="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>
