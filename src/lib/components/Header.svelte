<script>
  let { brand, onOpenConsult, onOpenEditor } = $props();
  let mobileMenuOpen = $state(false);
  // Editor hanya untuk pengelola: aktif di mode dev atau dengan ?edit di URL.
  const editorEnabled =
    import.meta.env.DEV ||
    (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('edit'));

  const navLinks = [
    { href: '#kapabilitas', label: 'Kapabilitas' },
    { href: '#tolok-ukur', label: 'Tolok Ukur' },
    { href: '#studi-kasus', label: 'Portofolio' },
    { href: '#profil', label: 'Profil & HAKI' },
    { href: '#metodologi', label: 'Metodologi' },
    { href: '#repositori', label: 'Repositori' }
  ];

  function closeMobile() {
    mobileMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-40 border-b border-[#d0d7de] bg-white">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    <a href="#top" class="flex items-center gap-2.5 text-[#0b1220] transition hover:opacity-85">
      <span class="flex h-8 w-8 items-center justify-center rounded-md bg-[#0b1220] font-mono-tech text-xs font-bold tracking-tight text-white">
        PHI
      </span>
      <div class="leading-none">
        <span class="block text-sm font-bold tracking-tight text-[#0b1220]">
          {brand.companyName}
        </span>
        <span class="block font-mono-tech text-[11px] text-slate-500">
          {brand.domain}
        </span>
      </div>
    </a>

    <nav aria-label="Navigasi utama" class="hidden items-center gap-6 lg:flex">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium text-slate-700 transition hover:text-[#1d5bff]"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2.5">
      {#if editorEnabled}
      <button
        type="button"
        onclick={onOpenEditor}
        class="hidden rounded-md border border-[#d0d7de] bg-white px-3 py-1.5 font-mono-tech text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
      >
        Editor Data
      </button>
      {/if}
      <button
        type="button"
        onclick={onOpenConsult}
        class="btn-primary px-4 py-2 text-xs sm:text-sm"
      >
        Diskusi Teknis
      </button>
      <button
        type="button"
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={mobileMenuOpen}
        class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] text-slate-700 lg:hidden"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div class="border-t border-[#d0d7de] bg-white px-4 py-3 lg:hidden">
      <nav class="flex flex-col gap-1.5">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={closeMobile}
            class="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            {link.label}
          </a>
        {/each}
        {#if editorEnabled}
        <button
          type="button"
          onclick={() => {
            closeMobile();
            onOpenEditor();
          }}
          class="mt-1 rounded-md border border-[#d0d7de] px-3 py-2 text-left font-mono-tech text-xs font-medium text-slate-700"
        >
          Editor Data
        </button>
        {/if}
      </nav>
    </div>
  {/if}
</header>
