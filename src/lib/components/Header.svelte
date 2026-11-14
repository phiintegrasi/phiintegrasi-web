<script>
  let { brand, onOpenConsult, onOpenEditor } = $props();
  let mobileMenuOpen = $state(false);

  const navLinks = [
    { href: "#tentang-kami", label: "Tentang Kami" },
    { href: "#layanan", label: "Layanan" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#metodologi", label: "Metodologi" },
    { href: "#kontak", label: "Kontak" }
  ];
</script>

<header class="site-header">
  <div class="container-fc header-inner">
    <a href="#home" class="brand-wordmark" aria-label={brand.companyName}>
      <span class="brand-wordmark-accent">PHI</span><span class="brand-wordmark-base">INTEGRASI</span>
    </a>

    <nav aria-label="Navigasi Utama">
      <ul class="nav-list">
        {#each navLinks as link}
          <li>
            <a href={link.href} class="nav-link-fc">{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="header-actions">
      <button
        type="button"
        class="btn-fc-outline-dark hidden sm:inline-flex"
        style="padding: 0.55rem 0.95rem; font-size: 0.7rem;"
        onclick={onOpenEditor}
        title="Buka Editor Template Data"
      >
        Editor Data
      </button>
      <button
        type="button"
        class="btn-fc-outline-dark"
        style="padding: 0.6rem 1.25rem;"
        onclick={onOpenConsult}
      >
        Konsultasi
      </button>
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white"
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
    <div class="md:hidden border-t border-white/10 bg-[#141326] px-6 py-4 space-y-3">
      {#each navLinks as link}
        <a
          href={link.href}
          class="block py-2 text-xs font-medium tracking-widest uppercase text-[#b4b7c9] hover:text-[#7ed6e8]"
          onclick={() => (mobileMenuOpen = false)}
        >
          {link.label}
        </a>
      {/each}
      <button
        type="button"
        class="w-full btn-fc-outline-dark mt-2"
        onclick={() => {
          mobileMenuOpen = false;
          onOpenEditor();
        }}
      >
        Editor Data
      </button>
    </div>
  {/if}
</header>
