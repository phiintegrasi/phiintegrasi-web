<script>
  let { insights } = $props();
</script>

<section id="wawasan" class="band-light section-fc">
  <div class="container-fc">
    <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
      <h2 class="heading-fc-lg text-[#141326]">{insights.title}</h2>
      <p class="mt-4 text-sm sm:text-base text-[#4a4d65] leading-relaxed">
        {insights.subtitle}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center" data-aos="fade-up" data-aos-delay="80">
      <!-- Left Bordered Card -->
      <a
        href={insights.left.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="insight-side-card group"
      >
        <div>
          <span class="mono-tag text-[#4a4d65]">{insights.left.tag}</span>
          <h3 class="mt-4 text-2xl font-semibold text-[#141326] leading-snug group-hover:underline">
            {insights.left.title}
          </h3>
        </div>
        <div class="mt-8 flex items-center justify-between">
          <span class="text-2xl font-bold text-[#141326]">{insights.left.date}</span>
          <span class="text-xs font-semibold uppercase tracking-widest text-[#4a4d65] group-hover:text-[#141326]">
            Repo ↗
          </span>
        </div>
      </a>

      <!-- Center Dark Featured Card -->
      <article class="insight-center-card text-center items-center">
        <span class="mono-tag text-[#b4b7c9]">{insights.featured.tag}</span>
        <h3 class="mt-3 text-xl sm:text-2xl font-bold text-white leading-snug">
          {insights.featured.title}
        </h3>
        <p class="mt-3 text-xs text-[#7d819a]">
          {insights.featured.meta}
        </p>
        <div class="mt-7">
          <a
            href={insights.featured.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-fc-solid-cyan"
            style="padding: 0.7rem 1.4rem; font-size: 0.72rem;"
          >
            {insights.featured.ctaText}
          </a>
        </div>
      </article>

      <!-- Right Bordered Card -->
      <a
        href={insights.right.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="insight-side-card group"
      >
        <div>
          <span class="mono-tag text-[#4a4d65]">{insights.right.tag}</span>
          <h3 class="mt-4 text-2xl font-semibold text-[#141326] leading-snug group-hover:underline">
            {insights.right.title}
          </h3>
        </div>
        <div class="mt-8 flex items-center justify-between">
          <span class="text-2xl font-bold text-[#141326]">{insights.right.date}</span>
          <span class="text-xs font-semibold uppercase tracking-widest text-[#4a4d65] group-hover:text-[#141326]">
            Repo ↗
          </span>
        </div>
      </a>
    </div>

    <div class="mt-14 text-center">
      <a
        href="https://github.com/phiintegrasi"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-fc-outline-light"
      >
        <span>JELAJAHI GITHUB ORGANISASI</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>
