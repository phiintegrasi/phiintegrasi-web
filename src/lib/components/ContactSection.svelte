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

<section id="kontak" class="band-dark">
  <!-- Floating 3D Spheres matching FigCraft CTA -->
  <div class="fc-sphere hidden sm:block" style="width: 18px; height: 18px; top: 80px; right: 32%;" aria-hidden="true"></div>
  <div class="fc-sphere hidden sm:block" style="width: 42px; height: 42px; top: 270px; left: 18%;" aria-hidden="true"></div>

  <!-- Final CTA Block -->
  <div class="container-fc py-28 text-center" data-aos="fade-up">
    <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
      Butuh Solusi IT?
      <br />
      <span>Mari </span><em class="font-light italic">mulai sekarang.</em>
    </h2>
    <p class="mt-5 mx-auto max-w-xl text-sm sm:text-base text-[#b4b7c9] leading-relaxed">
      {contact.subtitle}
    </p>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
      <button type="button" class="btn-fc-outline-dark" style="padding: 0.95rem 1.85rem;" onclick={onOpenConsult}>
        <span>KONSULTASI GRATIS</span>
        <span aria-hidden="true">→</span>
      </button>
      <a
        href="https://wa.me/6285148443939"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-fc-solid-cyan"
        style="padding: 0.95rem 1.5rem;"
      >
        WhatsApp Bisnis ↗
      </a>
    </div>
  </div>

  <!-- Structural Footer matching FigCraft Footer -->
  <footer class="container-fc border-t border-white/15 pt-14 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
      <!-- Brand + Social Icons -->
      <div class="lg:col-span-4 space-y-6">
        <div class="brand-wordmark text-2xl">
          <span class="brand-wordmark-accent">PHI</span><span class="brand-wordmark-base">INTEGRASI</span>
        </div>
        <p class="text-xs text-[#7d819a] max-w-xs leading-relaxed">
          {brand.companyName} ({brand.domain}) · {brand.city}
        </p>
        <div class="flex items-center gap-3">
          <a
            href={brand.githubOrgUrl || "https://github.com/phiintegrasi"}
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded bg-white text-[#141326] text-xs font-bold flex items-center justify-center hover:bg-[#7ed6e8] transition-colors"
            title="GitHub Organization"
          >
            GH
          </a>
          <a
            href="https://wa.me/6285148443939"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded bg-white text-[#141326] text-xs font-bold flex items-center justify-center hover:bg-[#7ed6e8] transition-colors"
            title="WhatsApp Bisnis"
          >
            WA
          </a>
          <a
            href="mailto:{contact.email}"
            class="w-8 h-8 rounded bg-white text-[#141326] text-xs font-bold flex items-center justify-center hover:bg-[#7ed6e8] transition-colors"
            title="Email"
          >
            EM
          </a>
        </div>
      </div>

      <!-- Explore Column -->
      <div class="lg:col-span-2 space-y-3">
        <h3 class="text-sm font-semibold text-white">Jelajahi</h3>
        <ul class="space-y-2.5 text-xs text-[#b4b7c9]">
          <li><a href="#tentang-kami" class="hover:text-[#7ed6e8]">Tentang Kami</a></li>
          <li><a href="#layanan" class="hover:text-[#7ed6e8]">Layanan</a></li>
          <li><a href="#portfolio" class="hover:text-[#7ed6e8]">Portfolio</a></li>
          <li><a href="#metodologi" class="hover:text-[#7ed6e8]">Metodologi</a></li>
          <li><a href="#wawasan" class="hover:text-[#7ed6e8]">Wawasan Teknis</a></li>
        </ul>
      </div>

      <!-- Contact Column -->
      <div class="lg:col-span-3 space-y-3">
        <h3 class="text-sm font-semibold text-white">Kontak</h3>
        <ul class="space-y-2.5 text-xs text-[#b4b7c9]">
          <li>
            <a href="mailto:{contact.email}" class="hover:text-[#7ed6e8]">{contact.email}</a>
          </li>
          <li>
            <a href="https://wa.me/6285148443939" target="_blank" rel="noopener noreferrer" class="hover:text-[#7ed6e8]">
              {contact.phonePlaceholder}
            </a>
          </li>
          <li class="text-[#7d819a]">{brand.city}</li>
          <li>
            <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="text-[#7ed6e8] hover:underline">
              github.com/phiintegrasi ↗
            </a>
          </li>
        </ul>
      </div>

      <!-- Quick Inquiry / Newsletter Box matching FigCraft Newsletter Input -->
      <div class="lg:col-span-3 space-y-3">
        <h3 class="text-sm font-semibold text-white">Diskusi Cepat</h3>
        <p class="text-xs text-[#b4b7c9] leading-relaxed">
          Masukkan alamat email kerja Anda untuk terhubung langsung dengan arsitek solusi kami.
        </p>
        <form onsubmit={handleQuickMail} class="relative mt-3">
          <label for="footer-quick-email" class="sr-only">Alamat Email Kerja</label>
          <input
            id="footer-quick-email"
            type="email"
            bind:value={quickEmail}
            required
            placeholder="Masukkan Email Anda ..."
            class="w-full rounded-lg bg-[#1b1a32] border border-white/15 pl-4 pr-11 py-3 text-xs text-white placeholder-[#7d819a] focus:border-[#7ed6e8] focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Kirim Email"
            class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white hover:text-[#7ed6e8] cursor-pointer"
          >
            →
          </button>
        </form>
      </div>
    </div>

    <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7d819a]">
      <div>Copyright &copy; 2026 {brand.companyName} ({brand.domain}). All rights reserved.</div>
      <div class="flex items-center gap-4">
        <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="hover:text-[#7ed6e8]">
          github.com/phiintegrasi
        </a>
        <span>|</span>
        <span>{contact.workingHours}</span>
      </div>
    </div>
  </footer>
</section>
