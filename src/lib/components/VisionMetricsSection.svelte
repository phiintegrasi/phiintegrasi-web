<script>
  let { hero } = $props();
</script>

<section class="band-light section-fc" aria-label="Visi dan Metrik Utama">
  <!-- Subtle Diagonal Architectural Stripes matching FigCraft Vision BG -->
  <svg
    class="pointer-events-none absolute inset-0 w-full h-full opacity-20"
    viewBox="0 0 1440 780"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {#each [-200, 0, 200, 400, 600, 800, 1000, 1200] as xPos}
      <line x1={xPos} y1="780" x2={xPos + 520} y2="0" stroke="#ffffff" stroke-width="40" stroke-opacity="0.38" />
    {/each}
  </svg>

  <!-- Floating Torus -->
  <div
    class="fc-torus hidden sm:block"
    style="width: 68px; height: 48px; top: 48px; left: 50%; transform: translateX(-50%) rotate(12deg); border-width: 11px;"
    aria-hidden="true"
  ></div>

  <div class="container-fc pt-10 pb-6" data-aos="fade-up">
    <h2 class="vision-statement">
      <span>Kami percaya bahwa </span>
      <em class="vision-italic">teknologi</em>
      <br class="hidden sm:inline" />
      <span>dapat </span>
      <span class="vision-outline">mengubah</span>
      <span> operasional Anda.</span>
    </h2>

    <p class="mt-8 mx-auto max-w-2xl text-center text-sm sm:text-base leading-relaxed text-[#4a4d65]">
      Itulah mengapa kami berkomitmen menghadirkan rekayasa sistem terintegrasi dari level perangkat keras IoT/EV,
      jaringan enterprise, hingga arsitektur perangkat lunak modern yang efisien dan terukur bagi institusi serta korporasi.
    </p>

    <div class="stats-fc-grid">
      <div class="stat-fc-item" data-aos="fade-up" data-aos-delay="50">
        <div class="stat-fc-val">55+</div>
        <div class="stat-fc-label">Repositori &amp; Modul Aktif</div>
      </div>
      <div class="stat-fc-item" data-aos="fade-up" data-aos-delay="120">
        <div class="stat-fc-val">3+</div>
        <div class="stat-fc-label">HAKI Terdaftar Kemenkumham</div>
      </div>
      <div class="stat-fc-item" data-aos="fade-up" data-aos-delay="190">
        <div class="stat-fc-val">99.9%</div>
        <div class="stat-fc-label">Target SLA &amp; Uptime Klaster</div>
      </div>
    </div>
  </div>
</section>
