<script>
  let { brand, onOpenConsult, onOpenEditor } = $props();
  let mobileMenuOpen = $state(false);
  // Editor hanya untuk pengelola: aktif di mode dev atau dengan ?edit di URL.
  const editorEnabled =
    import.meta.env.DEV ||
    (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('edit'));

  const navLinks = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#proyek', label: 'Proyek' },
    { href: '#tim', label: 'Tim' },
    { href: '#kontak', label: 'Kontak' }
  ];
</script>

<header class="sticky top-0 z-40 border-b border-[#dcd8cf] bg-white">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
    <a href="#top" class="text-[17px] font-bold tracking-tight text-[#16181d]">
      PHI Integrasi
    </a>

    <nav aria-label="Navigasi utama" class="hidden items-center gap-8 md:flex">
      {#each navLinks as link}
        <a href={link.href} class="text-[15px] text-[#4a4f59] transition hover:text-[#16181d]">
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      {#if editorEnabled}
        <button
          type="button"
          onclick={onOpenEditor}
          class="hidden rounded-md border border-[#dcd8cf] px-3 py-1.5 text-sm text-[#4a4f59] hover:bg-[#f5f3ee] sm:inline-flex"
        >
          Editor
        </button>
      {/if}
      <button type="button" onclick={onOpenConsult} class="btn-primary px-4 py-2 text-sm">
        Hubungi kami
      </button>
      <button
        type="button"
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={mobileMenuOpen}
        class="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#16181d] md:hidden"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <nav class="border-t border-[#dcd8cf] bg-white px-5 py-2 md:hidden">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => (mobileMenuOpen = false)}
          class="block py-3 text-base text-[#16181d]"
        >
          {link.label}
        </a>
      {/each}
      {#if editorEnabled}
        <button
          type="button"
          onclick={() => {
            mobileMenuOpen = false;
            onOpenEditor();
          }}
          class="block py-3 text-left text-base text-[#4a4f59]"
        >
          Editor
        </button>
      {/if}
    </nav>
  {/if}
</header>
