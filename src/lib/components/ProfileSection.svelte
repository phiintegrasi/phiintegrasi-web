<script>
  let { brand, profile } = $props();
  let showLegalDetails = $state(false);
</script>

<section id="tentang-kami" class="band-dark section-fc">
  <div class="container-fc">
    <div class="flex items-center justify-between gap-4 mb-12" data-aos="fade-up">
      <div>
        <span class="mono-tag text-[#7ed6e8] block mb-2">{profile.sectionCode} / IDENTITAS &amp; REKAM JEJAK</span>
        <h2 class="heading-fc-lg text-white">Rekam Jejak &amp; Kepemimpinan</h2>
      </div>
      <a
        href="#portfolio"
        class="text-3xl text-white hover:text-[#7ed6e8] transition-colors"
        aria-label="Lihat Portfolio Proyek"
      >
        →
      </a>
    </div>

    <!-- 2-Column Highlighted Leadership / Track Record (Matching FigCraft Client Stories layout) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-white/10">
      {#each profile.team.slice(0, 2) as member, idx}
        <article
          class="flex flex-col justify-between {idx === 0 ? 'lg:pr-8 lg:border-r lg:border-white/10' : 'lg:pl-4'}"
          data-aos="fade-up"
          data-aos-delay={80 * idx}
        >
          <div>
            <h3 class="text-2xl font-semibold text-[#7ed6e8] mb-4">
              {idx === 0 ? "Infrastruktur, IoT, & Full-Stack!" : "Microservices, SSO, & AI Lokal!"}
            </h3>
            <p class="text-sm sm:text-base leading-relaxed text-[#b4b7c9]">
              "{member.bio}"
            </p>
          </div>

          <div class="mt-8 flex items-center justify-end gap-4 text-right">
            <div>
              <div class="text-sm font-semibold text-white">{member.name}</div>
              <div class="text-xs text-[#7d819a] mt-0.5">{member.role}</div>
            </div>
            <div
              class="w-14 h-14 rounded-full bg-[#2a294a] border border-[#7ed6e8]/30 flex items-center justify-center text-sm font-bold text-[#7ed6e8] shrink-0"
              aria-hidden="true"
            >
              {member.initials}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <!-- Ecosystem / Institutions Strip (Matching Partner Logo Strip) -->
    <div
      class="py-10 flex flex-wrap items-center justify-between gap-8 text-[#7d819a] border-b border-white/10"
      data-aos="fade-up"
    >
      <span class="text-lg font-bold tracking-widest uppercase hover:text-white transition-colors">TELKOM UNIV</span>
      <span class="text-lg font-semibold tracking-tight hover:text-white transition-colors">CoE Smart EV</span>
      <span class="text-lg font-medium lowercase tracking-wide hover:text-white transition-colors">compnet</span>
      <span class="text-lg font-semibold tracking-wide hover:text-white transition-colors">PuTI Core</span>
      <span class="text-lg font-bold tracking-widest uppercase hover:text-white transition-colors">HARDTECH</span>
    </div>

    <!-- Compact HAKI & Legalitas Summary Bar + Toggle -->
    <div class="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6" data-aos="fade-up">
      <div class="max-w-2xl">
        <p class="text-sm text-[#b4b7c9] leading-relaxed">
          {profile.lead}
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3 shrink-0">
        <a
          href={brand.githubOrgUrl || "https://github.com/phiintegrasi"}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-fc-outline-dark"
          style="padding: 0.7rem 1.2rem; font-size: 0.72rem;"
        >
          github.com/phiintegrasi ↗
        </a>
        <button
          type="button"
          class="btn-fc-solid-cyan"
          style="padding: 0.7rem 1.2rem; font-size: 0.72rem;"
          onclick={() => (showLegalDetails = !showLegalDetails)}
        >
          {showLegalDetails ? "Tutup Legalitas & HAKI" : "Lihat Legalitas & HAKI (3+)"}
        </button>
      </div>
    </div>

    {#if showLegalDetails}
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8 border-t border-white/10">
        <!-- Legalitas Table -->
        <div class="rounded-2xl bg-[#1b1a32] border border-white/10 p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Identitas &amp; Organisasi</h3>
          <dl class="space-y-3 text-sm">
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2">
              <dt class="text-[#7d819a]">Nama Perusahaan</dt>
              <dd class="text-white font-medium">{brand.companyName} ({brand.domain})</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2">
              <dt class="text-[#7d819a]">Badan Hukum</dt>
              <dd class="text-[#b4b7c9]">{brand.legalEntity}</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2">
              <dt class="text-[#7d819a]">HAKI &amp; NIB</dt>
              <dd class="text-[#b4b7c9]">{brand.registrationNumber}</dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2">
              <dt class="text-[#7d819a]">GitHub Organization</dt>
              <dd>
                <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="text-[#7ed6e8] underline">
                  github.com/phiintegrasi
                </a>
              </dd>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt class="text-[#7d819a]">Portofolio Arsitek</dt>
              <dd class="text-[#b4b7c9]">
                <a href="https://github.com/harrynurbudyana" target="_blank" rel="noopener noreferrer" class="text-[#7ed6e8] underline">harrynurbudyana</a>
                &amp;
                <a href="https://github.com/ivantans" target="_blank" rel="noopener noreferrer" class="text-[#7ed6e8] underline">ivantans</a>
              </dd>
            </div>
          </dl>
        </div>

        <!-- HAKI & Riset List -->
        <div class="rounded-2xl bg-[#1b1a32] border border-white/10 p-6">
          <h3 class="text-lg font-semibold text-white mb-4">HAKI Terdaftar &amp; Riset Terapan</h3>
          <div class="space-y-4">
            {#each profile.hakiAndResearch as item}
              <div class="border-b border-white/10 last:border-b-0 pb-3 last:pb-0">
                <span class="mono-tag text-[#7ed6e8]">{item.badge}</span>
                <h4 class="text-sm font-semibold text-white mt-1">{item.title}</h4>
                <p class="text-xs text-[#7d819a] mt-0.5">{item.meta}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
