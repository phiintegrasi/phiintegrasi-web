<script>
  let { hero, whyChooseUs } = $props();
</script>

<section id="home" class="band-dark">
  <!-- Background Wave Lines matching FigCraft Hero Wave 1..6 -->
  <svg
    class="pointer-events-none absolute inset-x-0 top-24 w-full h-[460px] opacity-25"
    viewBox="0 0 1440 460"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {#each [0, 18, 36, 54, 72, 90] as offset, i}
      <path
        d="M-40 {220 + offset} C 280 {110 + offset}, 520 {330 + offset}, 860 {200 + offset} C 1140 {95 + offset}, 1300 {270 + offset}, 1480 {175 + offset}"
        stroke={i % 2 === 0 ? "#7ed6e8" : "#7d819a"}
        stroke-width="1"
        stroke-opacity={0.45 - i * 0.05}
      />
    {/each}
  </svg>

  <!-- Subtle Radial Ambient Glow -->
  <div
    class="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 w-[820px] h-[520px] rounded-full opacity-25 blur-3xl"
    style="background: radial-gradient(circle, rgba(126,214,232,0.35) 0%, rgba(20,19,38,0) 70%);"
    aria-hidden="true"
  ></div>

  <!-- 3D Floating Spheres & Torus -->
  <div class="fc-sphere hidden md:block" style="width: 20px; height: 20px; top: 36px; right: 20%;" aria-hidden="true"></div>
  <div class="fc-sphere hidden sm:block" style="width: 42px; height: 42px; top: 215px; left: 11%;" aria-hidden="true"></div>
  <div class="fc-torus hidden md:block" style="width: 92px; height: 66px; top: 385px; right: 9%; transform: rotate(-18deg);" aria-hidden="true"></div>
  <div class="fc-sphere hidden md:block" style="width: 22px; height: 22px; top: 535px; left: 26%;" aria-hidden="true"></div>

  <div class="container-fc hero-fc">
    <div data-aos="fade-up" data-aos-duration="700">
      <h1 class="hero-fc-title">
        <span class="hero-fc-title-cyan">MITRA TERBAIK</span>
        <span>
          <em class="hero-fc-title-italic">IT</em><span>ENTERPRISE</span>
        </span>
      </h1>

      <p class="hero-fc-sub">
        {hero.subheadline}
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#layanan" class="btn-fc-outline-dark" style="min-width: 220px; padding: 0.95rem 1.85rem;">
          <span>JELAJAHI SOLUSI</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://github.com/phiintegrasi"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-medium tracking-widest uppercase text-[#7ed6e8] hover:underline px-3 py-2"
        >
          github.com/phiintegrasi ↗
        </a>
      </div>
    </div>

    <!-- Why Choose Us? (4 Columns with Wireframe Geometric Icons) -->
    <div class="mt-28 pt-10" id="keunggulan">
      <div class="max-w-xl" data-aos="fade-up">
        <h2 class="heading-fc-lg text-white">{whyChooseUs.title}</h2>
        <p class="mt-3 text-sm text-[#7d819a]">{whyChooseUs.subtitle}</p>
      </div>

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {#each whyChooseUs.items as item, idx}
          <article class="group" data-aos="fade-up" data-aos-delay={80 * idx}>
            <!-- Wireframe Geometric Vector Icon -->
            <div class="mb-6 h-16 flex items-center text-[#7ed6e8] transition-transform duration-300 group-hover:-translate-y-1">
              {#if idx === 0}
                <!-- Wireframe Torus/Mesh -->
                <svg width="68" height="62" viewBox="0 0 68 62" fill="none" stroke="currentColor" stroke-width="0.9">
                  <ellipse cx="34" cy="31" rx="28" ry="18" stroke-opacity="0.7" />
                  <ellipse cx="34" cy="31" rx="20" ry="25" stroke-opacity="0.55" transform="rotate(25 34 31)" />
                  <ellipse cx="34" cy="31" rx="20" ry="25" stroke-opacity="0.55" transform="rotate(-25 34 31)" />
                  <circle cx="34" cy="31" r="9" stroke-opacity="0.85" />
                </svg>
              {:else if idx === 1}
                <!-- Wireframe Hourglass / Server Stack -->
                <svg width="56" height="62" viewBox="0 0 56 62" fill="none" stroke="currentColor" stroke-width="0.9">
                  <rect x="8" y="6" width="40" height="50" rx="4" stroke-opacity="0.55" />
                  <path d="M12 10 L44 52 M44 10 L12 52" stroke-opacity="0.6" />
                  <ellipse cx="28" cy="18" rx="14" ry="5" stroke-opacity="0.75" />
                  <ellipse cx="28" cy="44" rx="14" ry="5" stroke-opacity="0.75" />
                  <circle cx="28" cy="31" r="6" stroke-opacity="0.9" />
                </svg>
              {:else if idx === 2}
                <!-- Wireframe Ribbon / Wave Architecture -->
                <svg width="74" height="60" viewBox="0 0 74 60" fill="none" stroke="currentColor" stroke-width="0.9">
                  <path d="M6 46 L24 12 L37 32 L50 12 L68 46 Z" stroke-opacity="0.65" />
                  <path d="M12 46 L26 20 L37 37 L48 20 L62 46" stroke-opacity="0.5" />
                  <path d="M18 46 L28 28 L37 42 L46 28 L56 46" stroke-opacity="0.4" />
                  <line x1="6" y1="46" x2="68" y2="46" stroke-opacity="0.8" />
                </svg>
              {:else}
                <!-- Wireframe Crystal / Network Sphere -->
                <svg width="62" height="60" viewBox="0 0 62 60" fill="none" stroke="currentColor" stroke-width="0.9">
                  <circle cx="31" cy="30" r="22" stroke-opacity="0.6" />
                  <ellipse cx="31" cy="30" rx="22" ry="9" stroke-opacity="0.55" />
                  <ellipse cx="31" cy="30" rx="9" ry="22" stroke-opacity="0.55" />
                  <path d="M14 16 L48 44 M48 16 L14 44" stroke-opacity="0.5" />
                </svg>
              {/if}
            </div>
            <h3 class="text-xl font-semibold text-white tracking-tight mb-3">{item.title}</h3>
            <p class="text-sm leading-relaxed text-[#b4b7c9]">{item.desc}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
