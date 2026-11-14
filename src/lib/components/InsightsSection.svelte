<script>
  let { insights } = $props();

  const cards = $derived([
    {
      tag: insights.left.tag,
      title: insights.left.title,
      meta: "12 Nov 2026  ·  Rust & Svelte 5",
      url: insights.left.repoUrl
    },
    {
      tag: insights.featured.tag,
      title: insights.featured.title,
      meta: "05 Nov 2026  ·  PaddleOCR-VL",
      url: insights.featured.repoUrl
    },
    {
      tag: insights.right.tag,
      title: insights.right.title,
      meta: "28 Okt 2026  ·  OCPP 1.6 JSON",
      url: insights.right.repoUrl
    }
  ]);
</script>

<section id="wawasan" class="bg-white py-20 lg:py-24">
  <div class="container-wn">
    <div class="max-w-2xl mb-12" data-aos="fade-up">
      <div class="eyebrow-wn mb-3">
        <span class="eyebrow-dot" aria-hidden="true"></span>
        <span>INSIGHT &amp; ARTIKEL</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#0f172a]">
        Wawasan Terbaru Seputar <span class="text-[#1d5bff]">AI &amp; Cloud</span>
      </h2>
      <p class="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
        {insights.subtitle}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="80">
      {#each cards as c}
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group rounded-2xl bg-white border border-slate-200/80 p-7 flex flex-col justify-between hover:border-[#1d5bff]/50 hover:shadow-md transition-all min-h-[215px]"
        >
          <div>
            <span class="mono-tag font-bold text-[#1d5bff]">{c.tag}</span>
            <h3 class="mt-3 text-lg font-bold text-[#0f172a] leading-snug group-hover:text-[#1d5bff] transition-colors">
              {c.title}
            </h3>
          </div>
          <div class="mt-6 flex items-center justify-between text-xs text-[#475569]">
            <span>{c.meta}</span>
            <span class="font-bold text-[#1d5bff]">Buka Repo ↗</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
