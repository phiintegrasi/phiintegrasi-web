<script>
  let { brand } = $props();

  const benchmarks = [
    {
      code: 'BENCH-01',
      metric: '~12 MB',
      label: 'Jejak Memori Runtime Rust (Axum)',
      detail: 'Efisiensi server layanan sekretariat & API dibanding implementasi runtime berat.'
    },
    {
      code: 'BENCH-02',
      metric: '1-2 MB',
      label: 'Ukuran Installer Desktop Tauri',
      detail: 'Aplikasi desktop lintas OS berbasis Rust + Svelte 5 tanpa beban Chromium bundel.'
    },
    {
      code: 'BENCH-03',
      metric: '87% Lebih Ramping',
      label: 'Optimasi Image Kontainer ML',
      detail: 'Pemangkasan ukuran image produksi AI/OCR dari 21 GB menjadi 2,65 GB.'
    },
    {
      code: 'BENCH-04',
      metric: '3+ HAKI',
      label: 'Hak Cipta Terdaftar Kemenkumham RI',
      detail: 'Sistem SPKLU/OCPP, simulator konversi EV, dan aplikasi manajemen arsip.'
    }
  ];
</script>

<section id="tolok-ukur" class="border-y border-[#d0d7de] bg-[#f6f8fa] py-12 sm:py-14">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-between gap-4 border-b border-[#d0d7de] pb-6 md:flex-row md:items-end">
      <div>
        <span class="section-label">Tolok Ukur Terukur</span>
        <h2 class="mt-1.5 text-xl font-bold tracking-tight text-[#0b1220] sm:text-2xl">
          Angka Rekayasa Nyata, Bukan Klaim Kosong
        </h2>
      </div>
      <p class="max-w-xl text-sm text-slate-600">
        Ringkasan efisiensi sistem dari repositori produksi dan riset terapan {brand.companyName}.
      </p>
    </div>

    <div class="grid divide-y divide-[#d0d7de] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
      {#each benchmarks as item}
        <div class="py-6 sm:px-6 lg:first:pl-0 lg:last:pr-0">
          <span class="font-mono-tech text-xs font-semibold text-slate-500">{item.code}</span>
          <div class="mt-2 font-mono-tech text-2xl font-bold tracking-tight text-[#1d5bff] sm:text-3xl">
            {item.metric}
          </div>
          <div class="mt-1.5 text-sm font-bold text-[#0b1220]">
            {item.label}
          </div>
          <p class="mt-1.5 text-xs leading-relaxed text-slate-600">
            {item.detail}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
