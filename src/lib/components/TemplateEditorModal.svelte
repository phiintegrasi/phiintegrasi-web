<script>
  import { tick } from 'svelte';

  let { open, siteData, onUpdateSiteData, onClose } = $props();

  let logoPlaceholder = $state('');
  let companyName = $state('');
  let legalEntity = $state('');
  let registrationNumber = $state('');
  let foundedYear = $state('');
  let headline = $state('');
  let email = $state('');
  let phonePlaceholder = $state('');
  let addressPlaceholder = $state('');
  let statusMessage = $state('');
  let dialogEl = $state(null);

  $effect(() => {
    if (open) {
      logoPlaceholder = siteData.brand.logoPlaceholder;
      companyName = siteData.brand.companyName;
      legalEntity = siteData.brand.legalEntity;
      registrationNumber = siteData.brand.registrationNumber;
      foundedYear = siteData.brand.foundedYear;
      headline = siteData.hero.headline;
      email = siteData.contact.email;
      phonePlaceholder = siteData.contact.phonePlaceholder;
      addressPlaceholder = siteData.contact.addressPlaceholder;
      statusMessage = '';
      tick().then(() => {
        if (dialogEl) {
          dialogEl.focus();
        }
      });
    }
  });

  function buildUpdatedData() {
    return {
      ...siteData,
      brand: {
        ...siteData.brand,
        logoPlaceholder: logoPlaceholder.trim() || '[LOGO]',
        companyName: companyName.trim() || 'PT PHI Integrasi',
        legalEntity: legalEntity.trim() || '[REAL DATA]',
        registrationNumber: registrationNumber.trim() || '[REAL DATA]',
        foundedYear: foundedYear.trim() || '[REAL DATA]'
      },
      hero: {
        ...siteData.hero,
        headline: headline.trim() || siteData.hero.headline
      },
      contact: {
        ...siteData.contact,
        email: email.trim() || 'kontak@phiintegrasi.com',
        phonePlaceholder: phonePlaceholder.trim() || '[REAL DATA]',
        addressPlaceholder: addressPlaceholder.trim() || '[REAL DATA]'
      }
    };
  }

  function handleApply(event) {
    event.preventDefault();
    const updated = buildUpdatedData();
    onUpdateSiteData(updated);
    statusMessage = 'Perubahan berhasil diterapkan pada pratinjau halaman.';
  }

  function handleDownload() {
    const updated = buildUpdatedData();
    onUpdateSiteData(updated);
    const content =
      '// Ubah nilai pada objek ini untuk memperbarui seluruh konten company profile phiintegrasi.com.\n' +
      'export const initialSiteData = ' +
      JSON.stringify(updated, null, 2) +
      ';\n';
    const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'siteData.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    statusMessage = 'Berkas siteData.js baru berhasil diunduh.';
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && open) {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal-backdrop"
    id="editor-modal-backdrop"
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div
      class="modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editor-modal-title"
      tabindex="-1"
      id="editor-modal"
      bind:this={dialogEl}
    >
      <div class="modal-header">
        <div>
          <span class="section-code">MODE TEMPLATE SVELTE</span>
          <h3 id="editor-modal-title" style="margin: 0.4rem 0 0; font-size: 1.28rem;">
            Editor Cepat Konten phiintegrasi.com
          </h3>
        </div>
        <button type="button" class="btn btn-compact" id="close-editor-modal-btn" onclick={onClose}>
          Tutup (Esc)
        </button>
      </div>
      <p style="margin-top: 0; font-size: 0.9rem; color: var(--text-secondary);">
        Ubah nilai di bawah ini untuk melihat pratinjau langsung pada halaman, lalu unduh berkas <code>siteData.js</code> baru untuk menyimpannya ke dalam folder <code>src/lib/siteData.js</code>.
      </p>
      <form id="template-editor-form" onsubmit={handleApply}>
        <div class="form-field">
          <label for="edit-logo-text" class="form-label">Teks Penanda Logo</label>
          <input type="text" id="edit-logo-text" class="form-input" bind:value={logoPlaceholder}>
        </div>
        <div class="form-field">
          <label for="edit-company-name" class="form-label">Nama Perusahaan</label>
          <input type="text" id="edit-company-name" class="form-input" bind:value={companyName}>
        </div>
        <div class="form-field">
          <label for="edit-legal-entity" class="form-label">Nama Badan Hukum Resmi</label>
          <input type="text" id="edit-legal-entity" class="form-input" bind:value={legalEntity}>
        </div>
        <div class="form-field">
          <label for="edit-reg-number" class="form-label">Nomor Registrasi / NIB</label>
          <input type="text" id="edit-reg-number" class="form-input" bind:value={registrationNumber}>
        </div>
        <div class="form-field">
          <label for="edit-founded-year" class="form-label">Tahun Berdiri</label>
          <input type="text" id="edit-founded-year" class="form-input" bind:value={foundedYear}>
        </div>
        <div class="form-field">
          <label for="edit-hero-headline" class="form-label">Judul Utama (Hero Headline)</label>
          <input type="text" id="edit-hero-headline" class="form-input" bind:value={headline}>
        </div>
        <div class="form-field">
          <label for="edit-contact-email" class="form-label">Email Kontak Resmi</label>
          <input type="email" id="edit-contact-email" class="form-input" bind:value={email}>
        </div>
        <div class="form-field">
          <label for="edit-contact-phone" class="form-label">Nomor Telepon / WhatsApp Bisnis</label>
          <input type="text" id="edit-contact-phone" class="form-input" bind:value={phonePlaceholder}>
        </div>
        <div class="form-field">
          <label for="edit-contact-address" class="form-label">Alamat Lengkap Kantor</label>
          <textarea id="edit-contact-address" class="form-textarea" style="min-height: 76px;" bind:value={addressPlaceholder}></textarea>
        </div>
        <div class="hero-actions" style="margin-bottom: 0;">
          <button type="submit" class="btn btn-primary" id="apply-editor-btn">Terapkan ke Halaman</button>
          <button type="button" class="btn" id="download-sitedata-btn" onclick={handleDownload}>Unduh siteData.js</button>
        </div>
        {#if statusMessage}
          <p id="editor-status-msg" style="margin: 0.75rem 0 0; font-size: 0.86rem; font-weight: 600; color: var(--accent);">
            {statusMessage}
          </p>
        {/if}
      </form>
    </div>
  </div>
{/if}
