<script>
  let { capabilities, onOpenConsult } = $props();
</script>

<section id="kapabilitas" class="bg-white py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Header Section tanpa eyebrow dot atau headline dua warna klise -->
    <div class="max-w-3xl">
      <span class="section-label">{capabilities.sectionCode} / Spesifikasi Layanan</span>
      <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0b1220] sm:text-3xl">
        {capabilities.title}
      </h2>
      <p class="mt-3 text-base leading-relaxed text-slate-600">
        {capabilities.subtitle}
      </p>
    </div>

    <!-- CAP-01: Flagship Spec Sheet (2-kolom + Tabel Spesifikasi) -->
    <div class="mt-10 rounded-lg border border-[#d0d7de] bg-[#f6f8fa]">
      <div class="grid lg:grid-cols-12">
        <div class="border-b border-[#d0d7de] p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
          <span class="font-mono-tech text-xs font-semibold uppercase tracking-wide text-[#1d5bff]">
            {capabilities.flagship.code}
          </span>
          <h3 class="mt-2 text-xl font-bold leading-snug text-[#0b1220]">
            {capabilities.flagship.title}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            {capabilities.flagship.description}
          </p>
          <button
            type="button"
            onclick={onOpenConsult}
            class="btn-primary mt-6 px-4 py-2.5 text-sm"
          >
            Konsultasi Infrastruktur & Backend
          </button>
        </div>

        <div class="bg-white lg:col-span-7 lg:rounded-r-lg">
          <div class="border-b border-[#d0d7de] bg-slate-50 px-6 py-3">
            <span class="font-mono-tech text-xs font-semibold uppercase tracking-wider text-slate-600">
              Matriks Stack & Reliabilitas Produksi
            </span>
          </div>
          <dl class="divide-y divide-[#d0d7de]">
            {#each capabilities.flagship.specs as spec}
              <div class="grid gap-1 px-6 py-4 sm:grid-cols-12 sm:gap-4">
                <dt class="font-mono-tech text-xs font-semibold text-[#0b1220] sm:col-span-4">
                  {spec.label}
                </dt>
                <dd class="text-sm leading-relaxed text-slate-700 sm:col-span-8">
                  {spec.value}
                </dd>
              </div>
            {/each}
          </dl>
        </div>
      </div>
    </div>

    <!-- CAP-02 s.d. CAP-04: Ledger Horizontal tanpa Icon Tile Klise -->
    <div class="mt-10 grid divide-y divide-[#d0d7de] rounded-lg border border-[#d0d7de] bg-white lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {#each capabilities.supporting as cap}
        <article class="flex flex-col justify-between p-6 sm:p-7">
          <div>
            <div class="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <span class="font-mono-tech text-xs font-bold text-[#1d5bff]">{cap.code}</span>
              <span class="font-mono-tech text-xs text-slate-500">Produksi</span>
            </div>
            <h3 class="mt-4 text-lg font-bold leading-snug text-[#0b1220]">
              {cap.title}
            </h3>
            <p class="mt-2 font-mono-tech text-xs leading-relaxed text-slate-500">
              {cap.scope}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              {cap.description}
            </p>
          </div>
          <div class="mt-6 border-t border-slate-200 pt-3">
            <span class="block font-mono-tech text-xs font-semibold uppercase text-slate-500">Deliverable</span>
            <p class="mt-1 text-xs font-medium leading-relaxed text-[#0b1220]">
              {cap.output}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
