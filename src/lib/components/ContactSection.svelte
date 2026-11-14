<script>
  let { brand, contact, onOpenConsult } = $props();
  let quickEmail = $state("");

  function handleQuickMail(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Permintaan Konsultasi Arsitektur - PHI Integrasi");
    const body = encodeURIComponent(
      `Halo Tim PT PHI Integrasi,\n\nMohon informasi lebih lanjut mengenai layanan IT & integrasi sistem.\nEmail pengirim: ${quickEmail || "(tidak diisi)"}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
</script>

<!-- Electric Blue CTA Banner inside White Band -->
<section id="kontak" class="bg-white pb-20 pt-4">
  <div class="container-wn">
    <div
      class="relative overflow-hidden rounded-3xl bg-[#1d5bff] p-8 sm:p-14 text-white shadow-xl shadow-blue-600/20"
      data-aos="fade-up"
    >
      <!-- Subtle Decorative Circle matching FigCraft CTA Deco -->
      <div
        class="pointer-events-none absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 max-w-3xl">
        <h2 class="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-tight text-white">
          Siap Mempercepat Transformasi Digital Anda?
        </h2>
        <p class="mt-4 text-sm sm:text-base text-[#eef4ff] leading-relaxed max-w-2xl">
          {contact.subtitle}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            class="px-6 py-3.5 rounded-xl bg-white text-[#0f172a] text-sm font-bold hover:bg-[#eef4ff] transition-colors cursor-pointer"
            onclick={onOpenConsult}
          >
            Jadwalkan Konsultasi →
          </button>
          <a
            href="https://wa.me/6285148443939"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3.5 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            WhatsApp {contact.phonePlaceholder} ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Dark Footer (#071220) matching FigCraft Footer BG -->
<footer class="bg-[#071220] text-white pt-16 pb-10">
  <div class="container-wn">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
      <!-- Brand Column -->
      <div class="lg:col-span-4 space-y-4">
        <div class="inline-flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-lg bg-[#1d5bff] text-white font-bold text-base flex items-center justify-center">
            P
          </span>
          <span class="text-lg font-bold tracking-tight text-white">
            {brand.companyName}
          </span>
        </div>
        <p class="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-sm">
          Mitra pengembangan perangkat lunak, solusi AI lokal, infrastruktur jaringan enterprise,
          dan ekosistem perangkat keras IoT/EV (OCPP) di Indonesia.
        </p>
        <div class="text-xs text-[#94a3b8] space-y-1 pt-1">
          <div>Email: <a href="mailto:{contact.email}" class="text-[#38bdf8] hover:underline">{contact.email}</a></div>
          <div>Lokasi: {brand.city}</div>
        </div>
      </div>

      <!-- Menu Utama -->
      <div class="lg:col-span-2 space-y-3">
        <h3 class="text-sm font-bold text-[#38bdf8]">Menu Utama</h3>
        <ul class="space-y-2.5 text-sm text-[#f8fafc]/90">
          <li><a href="#home" class="hover:text-[#38bdf8]">Beranda</a></li>
          <li><a href="#layanan" class="hover:text-[#38bdf8]">Solusi &amp; Layanan</a></li>
          <li><a href="#portfolio" class="hover:text-[#38bdf8]">Portofolio</a></li>
          <li><a href="#tentang-kami" class="hover:text-[#38bdf8]">Tentang Kami</a></li>
          <li><a href="#wawasan" class="hover:text-[#38bdf8]">Insight &amp; Artikel</a></li>
        </ul>
      </div>

      <!-- Layanan -->
      <div class="lg:col-span-2 space-y-3">
        <h3 class="text-sm font-bold text-[#38bdf8]">Layanan</h3>
        <ul class="space-y-2.5 text-sm text-[#f8fafc]/90">
          <li><a href="#layanan" class="hover:text-[#38bdf8]">AI &amp; OCR Lokal</a></li>
          <li><a href="#layanan" class="hover:text-[#38bdf8]">Web, Desktop &amp; Rust</a></li>
          <li><a href="#layanan" class="hover:text-[#38bdf8]">Jaringan &amp; Server HA</a></li>
          <li><a href="#layanan" class="hover:text-[#38bdf8]">Ekosistem EV (OCPP)</a></li>
        </ul>
      </div>

      <!-- Diskusi Cepat / Newsletter Box matching FigCraft FNL -->
      <div class="lg:col-span-4 space-y-3">
        <h3 class="text-sm font-bold text-[#38bdf8]">Diskusi Cepat</h3>
        <form onsubmit={handleQuickMail} class="space-y-2.5">
          <label for="footer-quick-email" class="sr-only">Masukkan email Anda</label>
          <input
            id="footer-quick-email"
            type="email"
            bind:value={quickEmail}
            required
            placeholder="Masukkan email Anda"
            class="w-full rounded-xl bg-[#122134] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#94a3b8] focus:border-[#1d5bff] focus:outline-none"
          />
          <button
            type="submit"
            class="w-full rounded-xl bg-[#1d5bff] hover:bg-[#1548cc] text-white font-bold text-xs tracking-widest uppercase py-3 transition-colors cursor-pointer"
          >
            KIRIM PERMINTAAN
          </button>
        </form>
        <p class="text-xs text-[#94a3b8] leading-relaxed">
          Terhubung langsung dengan arsitek sistem kami untuk konsultasi dan estimasi teknis.
        </p>
      </div>
    </div>

    <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
      <div>&copy; 2026 {brand.companyName} ({brand.domain}). Seluruh hak cipta dilindungi.</div>
      <div class="flex flex-wrap items-center gap-3">
        <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="text-[#38bdf8] hover:underline">
          github.com/phiintegrasi
        </a>
        <span>•</span>
        <span>{contact.workingHours}</span>
      </div>
    </div>
  </div>
</footer>
