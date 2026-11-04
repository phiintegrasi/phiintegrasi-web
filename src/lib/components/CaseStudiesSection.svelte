<script>
  import { tick } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let { caseStudies } = $props();

  let activeSector = $state('Semua Kategori');
  let searchQuery = $state('');
  let viewState = $state('normal');
  let selectedItem = $state(null);
  let lastTriggerEl = $state(null);
  let modalDialogEl = $state(null);

  let sectors = $derived([
    'Semua Kategori',
    ...Array.from(new Set(caseStudies.items.map((item) => item.sector)))
  ]);

  let filteredItems = $derived.by(() => {
    if (viewState === 'empty') {
      return [];
    }
    const q = searchQuery.trim().toLowerCase();
    return caseStudies.items.filter((item) => {
      const matchSector = activeSector === 'Semua Kategori' || item.sector === activeSector;
      if (!q) {
        return matchSector;
      }
      const haystack = [
        item.code,
        item.sector,
        item.title,
        item.summary,
        item.clientPlaceholder,
        item.techStack.join(' ')
      ]
        .join(' ')
        .toLowerCase();
      return matchSector && haystack.includes(q);
    });
  });

  function selectSector(sector) {
    activeSector = sector;
    viewState = 'normal';
  }

  function handleSearchInput(event) {
    searchQuery = event.currentTarget.value;
    if (viewState !== 'normal') {
      viewState = 'normal';
    }
  }

  function resetFilters() {
    activeSector = 'Semua Kategori';
    searchQuery = '';
    viewState = 'normal';
  }

  async function openDetailModal(item, event) {
    lastTriggerEl = event.currentTarget;
    selectedItem = item;
    await tick();
    if (modalDialogEl) {
      modalDialogEl.focus();
    }
  }

  function closeDetailModal() {
    selectedItem = null;
    if (lastTriggerEl) {
      lastTriggerEl.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && selectedItem) {
      closeDetailModal();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<section id="portfolio" class="section-block section-block-alt" aria-labelledby="portfolio-title">
  <div class="container">
    <div class="section-index-row" data-aos="fade-up">
      <span class="section-code">{caseStudies.sectionCode}</span>
      <h2 class="section-title" id="portfolio-title">{caseStudies.title}</h2>
    </div>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="60">{caseStudies.subtitle}</p>

    <div
      class="explorer-toolbar"
      role="search"
      aria-label="Filter dan Pencarian Portfolio Proyek"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="toolbar-top-row">
        <div class="filter-group" role="group" aria-label="Filter Kategori Rekayasa">
          {#each sectors as sector}
            <button
              type="button"
              class="filter-btn transition-all duration-200 ease-out"
              aria-pressed={activeSector === sector}
              onclick={() => selectSector(sector)}
            >
              {sector}
            </button>
          {/each}
        </div>
        <div class="search-box-wrap">
          <label for="case-study-search" class="skip-link">Cari proyek atau teknologi</label>
          <input
            type="search"
            id="case-study-search"
            class="search-input transition-colors duration-200"
            value={searchQuery}
            oninput={handleSearchInput}
            placeholder="Cari proyek atau stack (mis. OCPP, Rust, Svelte, YOLO, PCB, Cisco)..."
          >
        </div>
      </div>

      <div class="state-simulator-bar">
        <span>Pratinjau Status Tampilan Data (Kepatuhan UI States):</span>
        <div class="state-btn-group" role="group" aria-label="Simulasi Status Data">
          <button
            type="button"
            class="state-sim-btn transition-colors duration-150"
            aria-pressed={viewState === 'normal'}
            onclick={() => (viewState = 'normal')}
          >
            Data Normal
          </button>
          <button
            type="button"
            class="state-sim-btn transition-colors duration-150"
            aria-pressed={viewState === 'loading'}
            onclick={() => (viewState = 'loading')}
          >
            Status Memuat (Loading)
          </button>
          <button
            type="button"
            class="state-sim-btn transition-colors duration-150"
            aria-pressed={viewState === 'empty'}
            onclick={() => (viewState = 'empty')}
          >
            Status Kosong (Empty)
          </button>
          <button
            type="button"
            class="state-sim-btn transition-colors duration-150"
            aria-pressed={viewState === 'error'}
            onclick={() => (viewState = 'error')}
          >
            Status Gangguan (Error)
          </button>
        </div>
      </div>
    </div>

    <div id="case-study-container" aria-live="polite">
      {#if viewState === 'loading'}
        <div class="data-state-box" in:fade={{ duration: 180 }}>
          <p class="data-state-title">Memuat Katalog Portfolio &amp; Repositori GitHub...</p>
          <p class="data-state-desc">
            Sistem sedang mengambil daftar proyek implementasi, arsitektur sistem, dan tautan repositori dari penyimpanan data.
          </p>
          <button type="button" class="btn" onclick={() => (viewState = 'normal')}>
            Tampilkan Data Sekarang
          </button>
        </div>
      {:else if viewState === 'error'}
        <div class="data-state-box is-error" in:fade={{ duration: 180 }}>
          <p class="data-state-title">[Gangguan Koneksi Data] Gagal Memuat Daftar Portfolio</p>
          <p class="data-state-desc">
            Permintaan pembacaan katalog proyek mengalami batas waktu tunggu (timeout). Periksa koneksi jaringan Anda atau muat ulang daftar lokal.
          </p>
          <button type="button" class="btn btn-primary" onclick={() => (viewState = 'normal')}>
            Muat Ulang Data Portfolio
          </button>
        </div>
      {:else if filteredItems.length === 0}
        <div class="data-state-box" in:fade={{ duration: 180 }}>
          <p class="data-state-title">Tidak Ada Proyek yang Sesuai Kriteria</p>
          <p class="data-state-desc">
            Filter kategori atau kata kunci pencarian yang Anda masukkan belum memiliki kecocokan di katalog. Atur ulang filter untuk menampilkan seluruh cetak biru proyek.
          </p>
          <button type="button" class="btn btn-primary" onclick={resetFilters}>
            Reset Pencarian &amp; Filter
          </button>
        </div>
      {:else}
        <div class="case-study-ledger">
          {#each filteredItems as item, idx (item.id)}
            <article
              class="case-study-item transition-all duration-300 ease-out hover:-translate-y-1"
              in:fly={{ y: 12, duration: 240, delay: idx * 35 }}
            >
              <div>
                <div class="cs-meta-top">
                  <span class="cs-sector-tag">{item.sector}</span>
                  <span class="placeholder-tag">{item.code}</span>
                </div>
                <h3 class="cs-title">{item.title}</h3>
                <p class="supporting-scope" style="margin-bottom: 0.6rem;">
                  Institusi / Konteks: <span class="placeholder-tag">{item.clientPlaceholder}</span>
                </p>
                <p class="cs-summary">{item.summary}</p>
                <div class="cs-metrics-row">
                  <div>
                    <strong>Status: </strong>
                    <span class="placeholder-tag">{item.durationPlaceholder}</span>
                  </div>
                  <div>
                    <strong>Capaian: </strong>
                    <span class="placeholder-tag">{item.impactPlaceholder}</span>
                  </div>
                </div>
              </div>
              <div class="cs-footer">
                <ul class="cs-stack-list">
                  {#each item.techStack.slice(0, 4) as tech}
                    <li class="cs-stack-chip">{tech}</li>
                  {/each}
                </ul>
                <div class="cs-action-group">
                  {#if item.githubUrl}
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-compact transition-all duration-200"
                    >
                      Kode GitHub
                    </a>
                  {/if}
                  <button
                    type="button"
                    class="btn btn-primary btn-compact transition-all duration-200"
                    onclick={(e) => openDetailModal(item, e)}
                  >
                    Buka Detail Arsitektur
                  </button>
                </div>
              </div>
            </article>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

{#if selectedItem}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal-backdrop"
    id="case-study-modal-backdrop"
    transition:fade={{ duration: 160 }}
    onclick={(e) => {
      if (e.target === e.currentTarget) closeDetailModal();
    }}
  >
    <div
      class="modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cs-title"
      tabindex="-1"
      bind:this={modalDialogEl}
      in:fly={{ y: 18, duration: 220 }}
    >
      <div class="modal-header">
        <div>
          <span class="placeholder-tag">{selectedItem.code} | {selectedItem.sector}</span>
          <h3 id="modal-cs-title" style="margin: 0.4rem 0 0; font-size: 1.3rem;">{selectedItem.title}</h3>
        </div>
        <button type="button" class="btn btn-compact" id="close-cs-modal-btn" onclick={closeDetailModal}>
          Tutup (Esc)
        </button>
      </div>
      <div>
        <div class="modal-section">
          <h4>INSTITUSI &amp; STATUS IMPLEMENTASI</h4>
          <p>
            <span class="placeholder-tag">{selectedItem.clientPlaceholder}</span> |
            <span class="placeholder-tag">{selectedItem.durationPlaceholder}</span>
          </p>
        </div>
        <div class="modal-section">
          <h4>TANTANGAN TEKNIS &amp; OPERASIONAL</h4>
          <p>{selectedItem.challenge}</p>
        </div>
        <div class="modal-section">
          <h4>ARSITEKTUR &amp; SOLUSI REKAYASA</h4>
          <p>{selectedItem.architectureSolution}</p>
        </div>
        <div class="modal-section">
          <h4>METRIK CAPAIAN</h4>
          <p><span class="placeholder-tag">{selectedItem.impactPlaceholder}</span></p>
        </div>
        <div class="modal-section">
          <h4>KOMPONEN TEKNOLOGI YANG DIGUNAKAN</h4>
          <ul class="cs-stack-list">
            {#each selectedItem.techStack as tech}
              <li class="cs-stack-chip">{tech}</li>
            {/each}
          </ul>
        </div>
        {#if selectedItem.githubUrl}
          <div class="modal-section" style="padding-top: 0.5rem;">
            <a
              href={selectedItem.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-compact"
            >
              Buka Repositori di GitHub
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
