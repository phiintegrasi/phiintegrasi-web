<script>
  let { brand } = $props();

  const trustCards = [
    {
      val: "55+",
      title: "Modul & Repositori Aktif",
      desc: "Kode teruji dari kolaborasi rekayasa dan riset di ekosistem github.com/phiintegrasi."
    },
    {
      val: "3+ HAKI",
      title: "Terdaftar Kemenkumham RI",
      desc: "Kekayaan intelektual resmi untuk sistem SPKLU KedaiCas & simulator kendaraan listrik."
    },
    {
      val: "~12 MB",
      title: "Konsumsi RAM Backend",
      desc: "Efisiensi server ekstrem dengan Rust Axum, Svelte 5, serta installer desktop Tauri 1-2 MB."
    },
    {
      val: "24/7",
      title: "Pemantauan & Reliabilitas",
      desc: "Klaster database HA Patroni PostgreSQL, isolasi CI/CD, Zabbix & Uptime Kuma."
    }
  ];
</script>

<section id="keunggulan" class="bg-white py-20 lg:py-24">
  <div class="container-wn">
    <div class="max-w-3xl mb-12" data-aos="fade-up">
      <div class="eyebrow-wn mb-3">
        <span class="eyebrow-dot" aria-hidden="true"></span>
        <span>KEUNGGULAN PHI INTEGRASI</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.15] text-[#0f172a]">
        Mengembangkan Masa Depan
        <span class="text-[#1d5bff]">Industri Anda</span>
      </h2>
      <p class="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
        Standar rekayasa perangkat lunak dan infrastruktur enterprise dengan pengalaman nyata di PT Nusantara Compnet Integrator,
        Direktorat PuTI &amp; FIT Telkom University, serta CoE Smart EV.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-delay="80">
      {#each trustCards as card}
        <article class="rounded-2xl bg-[#f4f7fb] p-7 border border-slate-200/60 hover:border-[#1d5bff]/40 transition-colors">
          <div class="text-3xl sm:text-4xl font-bold text-[#1d5bff] tracking-tight">{card.val}</div>
          <h3 class="mt-4 text-base font-bold text-[#0f172a]">{card.title}</h3>
          <p class="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">{card.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
