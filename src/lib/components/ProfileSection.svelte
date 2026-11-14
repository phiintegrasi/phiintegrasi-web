<script>
  let { brand, profile } = $props();
  let showLegalDetails = $state(false);
</script>

<section id="tentang-kami" class="bg-white py-20 lg:py-24 border-b border-slate-100">
  <div class="container-wn">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
      <div>
        <div class="eyebrow-wn mb-3">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          <span>KEPEMIMPINAN &amp; REKAM JEJAK</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.15] text-[#0f172a]">
          Dipimpin oleh Arsitek <span class="text-[#1d5bff]">Teknologi</span>
        </h2>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <a
          href={brand.githubOrgUrl || "https://github.com/phiintegrasi"}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light-outline"
          style="padding: 0.65rem 1.15rem; font-size: 0.78rem;"
        >
          github.com/phiintegrasi ↗
        </a>
        <button
          type="button"
          class="btn-blue"
          style="padding: 0.65rem 1.15rem; font-size: 0.78rem;"
          onclick={() => (showLegalDetails = !showLegalDetails)}
        >
          {showLegalDetails ? "Tutup Legalitas & HAKI" : "Lihat Legalitas & HAKI (3+)"}
        </button>
      </div>
    </div>

    <!-- 2 Featured Architect Cards (#F4F7FB + Blue #1D5BFF Avatar) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="80">
      {#each profile.team.slice(0, 2) as member}
        <article class="rounded-2xl bg-[#f4f7fb] p-8 border border-slate-200/70 flex flex-col justify-between">
          <p class="text-sm sm:text-base font-medium text-[#0f172a] leading-relaxed">
            "{member.bio}"
          </p>

          <div class="mt-7 flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full bg-[#1d5bff] text-white font-bold text-sm flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              {member.initials}
            </div>
            <div>
              <div class="text-sm font-bold text-[#0f172a]">{member.name}</div>
              <div class="text-xs text-[#475569] mt-0.5">{member.role}</div>
            </div>
          </div>
        </article>
      {/each}
    </div>

    {#if showLegalDetails}
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
        <div class="rounded-2xl bg-[#f4f7fb] border border-slate-200/80 p-6">
          <h3 class="text-base font-bold text-[#0f172a] mb-4">Identitas Perusahaan &amp; Organisasi</h3>
          <dl class="space-y-3 text-sm">
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-200/80 pb-2">
              <dt class="text-[#64748b]">Entitas</dt>
              <dd class="text-[#0f172a] font-semibold">{brand.companyName} ({brand.domain})</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-200/80 pb-2">
              <dt class="text-[#64748b]">Badan Hukum</dt>
              <dd class="text-[#475569]">{brand.legalEntity}</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-200/80 pb-2">
              <dt class="text-[#64748b]">HAKI &amp; NIB</dt>
              <dd class="text-[#475569]">{brand.registrationNumber}</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-200/80 pb-2">
              <dt class="text-[#64748b]">GitHub Organization</dt>
              <dd>
                <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="text-[#1d5bff] font-semibold underline">
                  github.com/phiintegrasi
                </a>
              </dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt class="text-[#64748b]">Portofolio Arsitek</dt>
              <dd class="text-[#475569]">
                <a href="https://github.com/harrynurbudyana" target="_blank" rel="noopener noreferrer" class="text-[#1d5bff] underline">harrynurbudyana</a>
                &amp;
                <a href="https://github.com/ivantans" target="_blank" rel="noopener noreferrer" class="text-[#1d5bff] underline">ivantans</a>
              </dd>
            </div>
          </dl>
        </div>

        <div class="rounded-2xl bg-[#f4f7fb] border border-slate-200/80 p-6">
          <h3 class="text-base font-bold text-[#0f172a] mb-4">HAKI Terdaftar &amp; Riset Terapan</h3>
          <div class="space-y-4">
            {#each profile.hakiAndResearch as item}
              <div class="border-b border-slate-200/80 last:border-b-0 pb-3 last:pb-0">
                <span class="mono-tag font-bold text-[#1d5bff]">{item.badge}</span>
                <h4 class="text-sm font-bold text-[#0f172a] mt-1">{item.title}</h4>
                <p class="text-xs text-[#475569] mt-0.5">{item.meta}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
