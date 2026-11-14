<script>
  let { hero, onOpenConsult } = $props();
</script>

<section id="top" class="bg-white">
  <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-20">
    <div>
      <h1 class="max-w-xl text-[2.15rem] font-bold leading-[1.12] tracking-[-0.015em] text-[#16181d] sm:text-5xl sm:leading-[1.08]">
        {hero.headline}
      </h1>
      <p class="mt-6 max-w-xl text-[17px] leading-relaxed text-[#4a4f59]">
        {hero.subheadline}
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <button type="button" onclick={onOpenConsult} class="btn-primary px-5 py-3 text-[15px]">
          {hero.primaryCtaText}
        </button>
        <a href="#proyek" class="link-action text-[15px]">Lihat proyek yang sudah jalan</a>
      </div>
    </div>

    <figure>
      <img
        src="/images/spklu-uji.webp"
        alt="Tim menguji konektor type-2 pada unit SPKLU berwarna merah di Telkom University"
        width="1400"
        height="824"
        class="aspect-[1400/824] w-full rounded-md object-cover"
        fetchpriority="high"
      />
      <figcaption class="mt-3 text-sm leading-snug text-[#4a4f59]">
        Uji SPKLU type-2 di Telkom University. Backend OCPP dan aplikasi KedaiCas-nya dikerjakan tim kami.
        <span class="text-[#6b7080]">Foto: Torsi EV.</span>
      </figcaption>
    </figure>
  </div>
</section>
