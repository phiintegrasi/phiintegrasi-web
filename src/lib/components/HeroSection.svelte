<script>
  let { hero, onOpenConsult } = $props();
</script>

<section id="home" class="relative overflow-hidden bg-[#071822] text-white py-16 lg:py-20">
  <!-- Ambient Blue & Emerald Glows matching FigCraft Hero Glow 1 & 2 -->
  <div
    class="pointer-events-none absolute -top-24 left-1/4 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl"
    style="background: #1d5bff;"
    aria-hidden="true"
  ></div>
  <div
    class="pointer-events-none absolute -bottom-24 right-1/4 w-[340px] h-[340px] rounded-full opacity-15 blur-3xl"
    style="background: #10b981;"
    aria-hidden="true"
  ></div>

  <div class="container-wn">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Copy, CTAs, 4 Inline Stats -->
      <div class="lg:col-span-6" data-aos="fade-up">
        <span class="mono-tag font-bold text-[#10b981] tracking-widest block mb-4">
          PT PHI INTEGRASI INDONESIA
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight leading-[1.1] text-white">
          Mitra Solusi AI, Cloud, IoT &amp; Aplikasi Enterprise
        </h1>
        <p class="mt-5 text-base text-[#94a3b8] leading-relaxed max-w-xl">
          {hero.subheadline}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3.5">
          <button type="button" class="btn-emerald px-6 py-3.5" onclick={onOpenConsult}>
            <span>Jadwalkan Konsultasi</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#portfolio" class="btn-dark-outline px-6 py-3.5">
            Lihat Portofolio
          </a>
        </div>

        <!-- 4 Hero Stats -->
        <div class="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div class="text-3xl font-bold text-white tracking-tight">8+</div>
            <div class="text-xs text-[#94a3b8] mt-1">Tahun Kolaborasi</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white tracking-tight">55+</div>
            <div class="text-xs text-[#94a3b8] mt-1">Modul &amp; Repo</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white tracking-tight">3+</div>
            <div class="text-xs text-[#94a3b8] mt-1">HAKI Kemenkumham</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white tracking-tight">99.9%</div>
            <div class="text-xs text-[#94a3b8] mt-1">Target SLA</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Dark Dashboard Mockup Card matching FigCraft Hero Card Outer -->
      <div class="lg:col-span-6" data-aos="fade-up" data-aos-delay="120">
        <div class="rounded-3xl bg-[#0e222e] border border-white/10 p-5 sm:p-6 shadow-2xl">
          <!-- Window Top Bar (#112a38) -->
          <div class="rounded-xl bg-[#112a38] px-4 py-3 flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            </div>
            <span class="text-xs font-medium text-[#94a3b8]">PHI Integrasi Enterprise Platform</span>
            <span class="w-8"></span>
          </div>

          <!-- 2 KPI Metric Boxes -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div class="rounded-2xl bg-[#0b1e29] border border-white/5 p-5">
              <span class="mono-tag font-semibold text-[#10b981] text-[10px]">EFISIENSI BACKEND</span>
              <div class="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">~12 MB</div>
              <div class="mt-1.5 text-xs text-[#94a3b8]">RAM Rust Axum &amp; Svelte 5</div>
            </div>
            <div class="rounded-2xl bg-[#1d5bff] p-5 shadow-lg">
              <span class="mono-tag font-semibold text-[#eef4ff] text-[10px]">UPTIME KLASTER</span>
              <div class="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">99.99%</div>
              <div class="mt-1.5 text-xs text-[#eef4ff]">Arsitektur High-Availability</div>
            </div>
          </div>

          <!-- Integrated Systems Pipeline Box (#0b1e29) -->
          <div class="rounded-2xl bg-[#0b1e29] border border-white/5 p-5 space-y-4">
            <span class="mono-tag font-bold text-[#38bdf8] text-[11px] block">SISTEM TERINTEGRASI</span>

            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-white">EV Charging (OCPP 1.6) &amp; IoT</span>
                <span class="font-semibold text-[#10b981]">Aktif</span>
              </div>
              <div class="h-1.5 w-full rounded-full bg-[#16303f] overflow-hidden">
                <div class="h-full w-[82%] rounded-full bg-[#10b981]"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-white">SSO OAuth 2.1 + PKCE &amp; Microservices</span>
                <span class="font-semibold text-[#10b981]">Optimal</span>
              </div>
              <div class="h-1.5 w-full rounded-full bg-[#16303f] overflow-hidden">
                <div class="h-full w-[90%] rounded-full bg-[#1d5bff]"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-white">KTP OCR On-Premise &amp; AI Lokal</span>
                <span class="font-semibold text-[#10b981]">UU PDP Safe</span>
              </div>
              <div class="h-1.5 w-full rounded-full bg-[#16303f] overflow-hidden">
                <div class="h-full w-[86%] rounded-full bg-[#10b981]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Client & Ecosystem Trust Strip (#FFFFFF) -->
<div class="bg-white border-b border-slate-200/80 py-9">
  <div class="container-wn">
    <p class="text-center text-[11px] font-bold tracking-[0.14em] uppercase text-[#475569] mb-6">
      DIPERCAYA &amp; BERKOLABORASI DALAM EKOSISTEM TEKNOLOGI INDONESIA
    </p>
    <div class="flex flex-wrap items-center justify-center sm:justify-between gap-8 text-[#64748b]">
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">TELKOM UNIVERSITY</span>
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">CoE SMART EV</span>
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">PT COMPNET</span>
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">PuTI CORE</span>
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">FIT TEL-U</span>
      <span class="text-sm sm:text-base font-bold tracking-wider uppercase">HARDTECH</span>
    </div>
  </div>
</div>
