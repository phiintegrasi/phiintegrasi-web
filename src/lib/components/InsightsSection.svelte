<script>
  let { insights } = $props();

  let entries = $derived([
    insights.left,
    insights.featured,
    insights.right
  ].filter(Boolean));
</script>

<section id="repositori" class="border-t border-[#d0d7de] bg-[#f6f8fa] py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-between gap-4 border-b border-[#d0d7de] pb-6 md:flex-row md:items-end">
      <div>
        <span class="section-label">§ 05 / Artefak & Repositori Open-Source</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0b1220] sm:text-3xl">
          Implementasi Kode & Catatan Teknis
        </h2>
      </div>
      <p class="max-w-xl text-sm leading-relaxed text-slate-600">
        {insights.subtitle}
      </p>
    </div>

    <!-- Tabel / Ledger Repositori Nyata (tanpa tanggal blog fiktif) -->
    <div class="mt-8 divide-y divide-[#d0d7de] rounded-lg border border-[#d0d7de] bg-white">
      {#each entries as item}
        <article class="grid items-center gap-4 px-6 py-5 transition hover:bg-slate-50 md:grid-cols-12">
          <div class="md:col-span-2">
            <span class="inline-block rounded border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 font-mono-tech text-xs font-semibold text-[#1d5bff]">
              {item.tag}
            </span>
          </div>
          <div class="md:col-span-7">
            <h3 class="text-base font-bold leading-snug text-[#0b1220]">
              {item.title}
            </h3>
            <p class="mt-1 font-mono-tech text-xs text-slate-500">
              {item.repoUrl.replace('https://', '')}
            </p>
          </div>
          <div class="md:col-span-3 md:text-right">
            <a
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-md border border-[#d0d7de] bg-white px-3.5 py-2 font-mono-tech text-xs font-semibold text-[#0b1220] transition hover:border-[#1d5bff] hover:text-[#1d5bff]"
            >
              Lihat Repositori -&gt;
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
