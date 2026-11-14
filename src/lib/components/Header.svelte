<script>
  let { brand, onOpenConsult, onOpenEditor } = $props();
  let mobileMenuOpen = $state(false);

  const navLinks = [
    { href: "#layanan", label: "Solusi" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#portfolio", label: "Portofolio" },
    { href: "#tentang-kami", label: "Tentang" },
    { href: "#wawasan", label: "Insight" }
  ];
</script>

<!-- Top Utility Bar (#051118) -->
<div class="bg-[#051118] text-xs py-2 border-b border-white/5">
  <div class="container-wn flex flex-wrap items-center justify-between gap-2">
    <span class="text-[#94a3b8]">
      Mitra Transformasi Digital, IoT/EV &amp; Pengembangan Software Enterprise
    </span>
    <div class="flex items-center gap-4">
      <a
        href={brand.githubOrgUrl || "https://github.com/phiintegrasi"}
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#94a3b8] hover:text-white transition-colors hidden sm:inline"
      >
        github.com/phiintegrasi ↗
      </a>
      <span class="font-semibold text-[#10b981]">3+ HAKI Kemenkumham RI</span>
    </div>
  </div>
</div>

<!-- White Sticky Navbar (#FFFFFF) -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
  <div class="container-wn flex items-center justify-between gap-4 min-h-[74px]">
    <a href="#home" class="inline-flex items-center gap-2.5" aria-label={brand.companyName}>
      <span class="w-8 h-8 rounded-lg bg-[#1d5bff] text-white font-bold text-base flex items-center justify-center shadow-sm">
        P
      </span>
      <span class="text-lg font-bold tracking-tight text-[#0f172a]">
        PHI Integrasi<span class="text-[#1d5bff]">.com</span>
      </span>
    </a>

    <nav aria-label="Navigasi Utama" class="hidden lg:block">
      <ul class="flex items-center gap-8 list-none m-0 p-0">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="text-sm font-medium text-[#475569] hover:text-[#1d5bff] transition-colors"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="flex items-center gap-2.5">
      <button
        type="button"
        class="hidden sm:inline-flex items-center justify-center px-3.5 h-[42px] rounded-[10px] bg-[#eef4ff] text-[#1d5bff] text-xs font-bold hover:bg-[#1d5bff] hover:text-white transition-colors cursor-pointer"
        onclick={onOpenEditor}
        title="Buka Editor Data Situs"
      >
        Editor
      </button>
      <button type="button" class="btn-emerald" onclick={onOpenConsult}>
        Konsultasi Gratis
      </button>
      <button
        type="button"
        class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-[#0f172a]"
        aria-label="Menu Navigasi"
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          {#if mobileMenuOpen}
            <path d="M18 6 6 18M6 6l12 12" />
          {:else}
            <path d="M4 7h16M4 12h16M4 17h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div class="lg:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-2">
      {#each navLinks as link}
        <a
          href={link.href}
          class="block py-2 text-sm font-medium text-[#475569] hover:text-[#1d5bff]"
          onclick={() => (mobileMenuOpen = false)}
        >
          {link.label}
        </a>
      {/each}
      <button
        type="button"
        class="w-full mt-2 px-4 py-2.5 rounded-lg bg-[#eef4ff] text-[#1d5bff] text-xs font-bold"
        onclick={() => {
          mobileMenuOpen = false;
          onOpenEditor();
        }}
      >
        Buka Editor Data
      </button>
    </div>
  {/if}
</header>
