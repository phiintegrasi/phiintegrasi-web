<script>
  let { brand, theme, onToggleTheme, onOpenEditor } = $props();
  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && mobileMenuOpen) {
      mobileMenuOpen = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<a href="#home" class="skip-link">Lewati ke konten utama</a>

<div class="template-banner" role="region" aria-label="Panduan Template">
  <div class="container template-banner-inner">
    <p class="template-banner-text">
      Mode Template Svelte Aktif: Seluruh penanda <code>[LOGO]</code> dan <code>[REAL DATA]</code> dapat diubah langsung melalui tombol Editor atau berkas <code>src/lib/siteData.js</code>.
    </p>
    <button type="button" class="btn btn-compact" id="open-editor-btn" aria-haspopup="dialog" onclick={onOpenEditor}>
      Buka Editor Template
    </button>
  </div>
</div>

<header class="site-header">
  <div class="container header-inner">
    <a href="#home" class="brand-identity" aria-label="Beranda {brand.companyName}">
      <span class="brand-logo-mark" id="brand-logo-mark">{brand.logoPlaceholder}</span>
      <span class="brand-name" id="brand-company-name">{brand.companyName}</span>
    </a>

    <nav class="primary-nav" aria-label="Navigasi Utama">
      <ul class="nav-list">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#tentang-kami" class="nav-link">Tentang Kami</a></li>
        <li><a href="#layanan" class="nav-link">Layanan</a></li>
        <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
        <li><a href="#kontak-kami" class="nav-link">Kontak Kami</a></li>
      </ul>
    </nav>

    <div class="nav-controls">
      <button
        type="button"
        class="btn btn-compact"
        id="theme-toggle-btn"
        aria-pressed={theme === 'dark'}
        onclick={onToggleTheme}
      >
        {theme === 'dark' ? 'Tema: Gelap' : 'Tema: Terang'}
      </button>
      <a href="#kontak-kami" class="btn btn-primary btn-compact header-cta-desktop">
        Konsultasi IT
      </a>
      <button
        type="button"
        class="btn btn-compact mobile-menu-toggle"
        id="mobile-menu-btn"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu-panel"
        onclick={toggleMobileMenu}
      >
        {mobileMenuOpen ? 'Tutup' : 'Menu'}
      </button>
    </div>
  </div>

  <nav id="mobile-menu-panel" class="mobile-menu-panel" class:is-open={mobileMenuOpen} aria-label="Navigasi Seluler">
    <ul class="mobile-nav-list">
      <li><a href="#home" class="nav-link mobile-nav-link" onclick={closeMobileMenu}>Home</a></li>
      <li><a href="#tentang-kami" class="nav-link mobile-nav-link" onclick={closeMobileMenu}>§ 01 Tentang Kami</a></li>
      <li><a href="#layanan" class="nav-link mobile-nav-link" onclick={closeMobileMenu}>§ 02 Layanan</a></li>
      <li><a href="#portfolio" class="nav-link mobile-nav-link" onclick={closeMobileMenu}>§ 03 Portfolio</a></li>
      <li><a href="#kontak-kami" class="nav-link mobile-nav-link" onclick={closeMobileMenu}>§ 04 Kontak Kami</a></li>
    </ul>
  </nav>
</header>
