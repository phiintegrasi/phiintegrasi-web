<script>
  let { caseStudies } = $props();

  const byCode = (code) => caseStudies.items.find((item) => item.code === code);
  const ev = $derived(byCode('PORT-EV-01'));
  const eoffice = $derived(byCode('PORT-WEB-02'));
  const ocr = $derived(byCode('PORT-AI-04'));

  const featuredCodes = ['PORT-EV-01', 'PORT-WEB-02', 'PORT-AI-04'];
  const others = $derived(caseStudies.items.filter((item) => !featuredCodes.includes(item.code)));

  const repoName = (url) => url.replace('https://github.com/', '');
</script>

<section id="proyek" class="border-t border-[#dcd8cf] bg-white">
  <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
    <h2 class="max-w-2xl text-3xl font-bold tracking-tight text-[#16181d] sm:text-4xl">
      Proyek yang sudah jalan
    </h2>

    <!-- 1. SPKLU & KedaiCas: foto besar di kiri, fakta di kanan -->
    {#if ev}
      <article class="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div class="grid grid-cols-2 gap-3">
          <img
            src="/images/spklu-kirim.webp"
            alt="Unit SPKLU diturunkan dari mobil bak terbuka untuk dipasang"
            width="1000"
            height="590"
            loading="lazy"
            class="col-span-2 aspect-[1000/590] w-full rounded-md object-cover"
          />
          <img
            src="/images/spklu-panel.webp"
            alt="Teknisi merapikan kabel di panel listrik SPKLU"
            width="1000"
            height="594"
            loading="lazy"
            class="aspect-[1000/594] w-full rounded-md object-cover"
          />
          <img
            src="/images/spklu-unit.webp"
            alt="Unit SPKLU merah dengan kabel type-2 terpasang"
            width="1000"
            height="591"
            loading="lazy"
            class="aspect-[1000/591] w-full rounded-md object-cover"
          />
          <p class="col-span-2 text-sm text-[#6b7080]">Foto: Torsi EV / CoE Smart EV Telkom University.</p>
        </div>

        <div>
          <p class="text-sm font-semibold text-[#4a4f59]">Software + hardware</p>
          <h3 class="mt-1 text-2xl font-bold leading-snug text-[#16181d]">SPKLU type-2 dan aplikasi KedaiCas</h3>
          <p class="mt-4 text-base leading-relaxed text-[#4a4f59]">
            Stasiun pengisian 11 kW dan 22 kW dari hibah Kedaireka, dikerjakan bersama CoE Smart EV Telkom University.
            Unit 22 kW melayani publik di Telkom University Landmark Tower. Bagian kami: Central System OCPP 1.6 lewat
            WebSocket, otentikasi pengemudi, saldo, penagihan, dan dashboard operator.
          </p>
          <dl class="mt-6 divide-y divide-[#dcd8cf] border-y border-[#dcd8cf] text-[15px]">
            <div class="flex justify-between gap-4 py-3">
              <dt class="text-[#4a4f59]">Protokol</dt>
              <dd class="font-semibold text-[#16181d]">OCPP 1.6 JSON</dd>
            </div>
            <div class="flex justify-between gap-4 py-3">
              <dt class="text-[#4a4f59]">Daya</dt>
              <dd class="font-semibold text-[#16181d]">11 kW dan 22 kW, type-2</dd>
            </div>
            <div class="flex justify-between gap-4 py-3">
              <dt class="text-[#4a4f59]">Legalitas</dt>
              <dd class="text-right font-semibold text-[#16181d]">HAKI terdaftar, Kemenkumham RI</dd>
            </div>
          </dl>
          <div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <a href={ev.githubUrl} target="_blank" rel="noopener noreferrer" class="link-action">Kode di GitHub</a>
            <a href="https://torsiev.com/services#charging" target="_blank" rel="noopener noreferrer" class="link-action">Profil proyek di torsiev.com</a>
          </div>
        </div>
      </article>
    {/if}

    <!-- 2. PCB: teks di kiri, dua render papan bertumpuk di kanan -->
    <article class="mt-20 grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
      <div class="lg:order-1">
        <p class="text-sm font-semibold text-[#4a4f59]">Hardware</p>
        <h3 class="mt-1 text-2xl font-bold leading-snug text-[#16181d]">Papan kontrol ESP32-S3 untuk loker dan timbangan</h3>
        <p class="mt-4 text-base leading-relaxed text-[#4a4f59]">
          Dua papan yang kami rancang dari skematik sampai layout di Eagle. Yang pertama memakai dua multiplexer untuk
          mengendalikan banyak solenoid pada loker otomatis. Yang kedua membaca sensor berat lewat HX711 untuk sistem
          timbang. Keduanya menerima catu 7 sampai 30 V.
        </p>
        <p class="mt-4 text-sm text-[#4a4f59]">
          File produksi (Gerber, BOM) kami serahkan ke klien bersama firmware-nya.
        </p>
      </div>
      <div class="space-y-6 lg:order-2">
        <figure>
          <img
            src="/images/pcb-loker-multiplexer.webp"
            alt="Render sisi atas PCB hijau dengan modul ESP32-S3 dan dua blok header multiplexer"
            width="1197"
            height="529"
            loading="lazy"
            class="w-full rounded-md border border-[#dcd8cf]"
          />
          <figcaption class="mt-2 text-sm text-[#4a4f59]">Papan loker: ESP32-S3 dan dua multiplexer.</figcaption>
        </figure>
        <figure>
          <img
            src="/images/pcb-timbang-hx711.webp"
            alt="Render sisi atas PCB hijau dengan modul ESP32-S3 dan konektor HX711 untuk load-cell"
            width="1065"
            height="354"
            loading="lazy"
            class="w-full rounded-md border border-[#dcd8cf]"
          />
          <figcaption class="mt-2 text-sm text-[#4a4f59]">Papan timbang: ESP32-S3 dan HX711.</figcaption>
        </figure>
      </div>
    </article>

    <!-- 3. Software & AI: dua kolom teks, dipisah garis -->
    {#if eoffice && ocr}
      <div class="mt-20 grid border-t border-[#16181d] md:grid-cols-2">
        <article class="border-b border-[#dcd8cf] py-8 md:border-b-0 md:border-r md:pr-10">
          <p class="text-sm font-semibold text-[#4a4f59]">Software</p>
          <h3 class="mt-1 text-xl font-bold text-[#16181d]">E-Office FIT Telkom University</h3>
          <p class="mt-3 text-base leading-relaxed text-[#4a4f59]">
            Penomoran surat dinas dan persetujuan peminjaman ruangan untuk fakultas. Backend Rust (Axum) dengan
            antarmuka Svelte 5, berjalan dengan RAM sekitar 12 sampai 18 MB.
          </p>
          <a href={eoffice.githubUrl} target="_blank" rel="noopener noreferrer" class="link-action mt-4 inline-block text-[15px]">Kode di GitHub</a>
        </article>
        <article class="py-8 md:pl-10">
          <p class="text-sm font-semibold text-[#4a4f59]">Integrasi AI</p>
          <h3 class="mt-1 text-xl font-bold text-[#16181d]">KTP OCR on-premise</h3>
          <p class="mt-3 text-base leading-relaxed text-[#4a4f59]">
            Foto KTP diubah menjadi JSON terstruktur dengan PaddleOCR-VL, lalu NIK divalidasi silang dengan field lain.
            Semua proses berjalan di server lokal, tidak ada data pribadi yang keluar.
          </p>
          <a href={ocr.githubUrl} target="_blank" rel="noopener noreferrer" class="link-action mt-4 inline-block text-[15px]">Kode di GitHub</a>
        </article>
      </div>
    {/if}

    <!-- 4. Proyek lain: tabel ringkas -->
    <div class="mt-16">
      <h3 class="text-lg font-bold text-[#16181d]">Proyek lain</h3>
      <div class="mt-4 overflow-x-auto">
        <table class="w-full min-w-[640px] border-collapse text-left text-[15px]">
          <thead>
            <tr class="border-b border-[#16181d] text-sm text-[#4a4f59]">
              <th scope="col" class="py-3 pr-6 font-semibold">Proyek</th>
              <th scope="col" class="py-3 pr-6 font-semibold">Stack</th>
              <th scope="col" class="py-3 font-semibold">Repositori</th>
            </tr>
          </thead>
          <tbody>
            {#each others as item}
              <tr class="border-b border-[#dcd8cf] align-top">
                <td class="py-4 pr-6">
                  <span class="font-semibold text-[#16181d]">{item.title}</span>
                  <span class="mt-1 block text-sm leading-snug text-[#4a4f59]">{item.summary}</span>
                </td>
                <td class="py-4 pr-6 font-mono-tech text-[13px] leading-relaxed text-[#4a4f59]">
                  {item.techStack.slice(0, 3).join(', ')}
                </td>
                <td class="py-4">
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" class="link-action font-mono-tech text-[13px] font-medium">
                    {repoName(item.githubUrl)}
                  </a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
