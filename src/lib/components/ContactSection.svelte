<script>
  let { brand, contact } = $props();

  let senderName = $state('');
  let senderEmail = $state('');
  let senderCompany = $state('');
  let projectScope = $state('');
  let projectScale = $state('');
  let projectNotes = $state('');

  let errors = $state({
    senderName: '',
    senderEmail: '',
    senderCompany: '',
    projectScope: '',
    projectScale: '',
    projectNotes: ''
  });

  let formStatus = $state(null);
  let mailtoHref = $state('');

  function validateForm() {
    const nextErrors = {
      senderName:
        senderName.trim().length >= 3
          ? ''
          : '[Perhatian] Mohon isi nama lengkap dan jabatan Anda (minimal 3 karakter).',
      senderEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim())
        ? ''
        : '[Perhatian] Masukkan alamat email aktif yang valid (contoh: nama@perusahaan.co.id).',
      senderCompany:
        senderCompany.trim().length >= 2
          ? ''
          : '[Perhatian] Mohon cantumkan nama bisnis, perusahaan, atau instansi Anda.',
      projectScope:
        projectScope.trim() !== ''
          ? ''
          : '[Perhatian] Pilih salah satu kategori layanan IT yang dibutuhkan.',
      projectScale:
        projectScale.trim() !== ''
          ? ''
          : '[Perhatian] Pilih estimasi skala kebutuhan proyek Anda.',
      projectNotes:
        projectNotes.trim().length >= 15
          ? ''
          : '[Perhatian] Jelaskan gambaran website/aplikasi, hardware IoT, atau jaringan Anda secara singkat (minimal 15 karakter).'
    };
    errors = nextErrors;
    return Object.values(nextErrors).every((msg) => msg === '');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      formStatus = 'error';
      return;
    }

    const subject = encodeURIComponent(
      `[Konsultasi IT PHI Integrasi] ${projectScope.trim()} (${projectScale.trim()}) - ${senderCompany.trim()}`
    );
    const bodyText = [
      `Halo Tim Arsitektur ${brand.companyName},`,
      '',
      'Berikut ringkasan kebutuhan solusi IT dari organisasi kami:',
      `- Nama & Jabatan: ${senderName.trim()}`,
      `- Email: ${senderEmail.trim()}`,
      `- Perusahaan / Bisnis / Instansi: ${senderCompany.trim()}`,
      `- Kategori Layanan: ${projectScope.trim()}`,
      `- Skala Kebutuhan: ${projectScale.trim()}`,
      `- Deskripsi Sistem & Target: ${projectNotes.trim()}`
    ].join('\n');

    mailtoHref = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    formStatus = 'success';
  }

  function handleReset() {
    senderName = '';
    senderEmail = '';
    senderCompany = '';
    projectScope = '';
    projectScale = '';
    projectNotes = '';
    errors = {
      senderName: '',
      senderEmail: '',
      senderCompany: '',
      projectScope: '',
      projectScale: '',
      projectNotes: ''
    };
    formStatus = null;
    mailtoHref = '';
  }

  function handlePrint() {
    window.print();
  }
</script>

<section id="kontak-kami" class="section-block" aria-labelledby="kontak-title">
  <div class="container">
    <div class="section-index-row" data-aos="fade-up">
      <span class="section-code">{contact.sectionCode}</span>
      <h2 class="section-title" id="kontak-title">{contact.title}</h2>
    </div>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="60">{contact.subtitle}</p>

    <div class="contact-grid">
      <div class="contact-direct-card" data-aos="fade-up" data-aos-delay="100">
        <h3 style="margin-top: 0; font-size: 1.18rem;">Saluran Komunikasi Langsung</h3>
        <dl class="contact-detail-list">
          <div class="contact-detail-item">
            <dt>SURAT ELEKTRONIK UTAMA</dt>
            <dd>
              <a href="mailto:{contact.email}" id="contact-email-link">{contact.email}</a>
              {#if contact.secondaryEmail}
                <br>
                <a href="mailto:{contact.secondaryEmail}" style="font-size: 0.88rem;">{contact.secondaryEmail}</a>
              {/if}
            </dd>
          </div>
          <div class="contact-detail-item">
            <dt>TELEPON / WHATSAPP BISNIS</dt>
            <dd>
              <a href="https://wa.me/6285148443939" target="_blank" rel="noopener noreferrer">
                {contact.phonePlaceholder}
              </a>
            </dd>
          </div>
          <div class="contact-detail-item">
            <dt>PORTOFOLIO REKAYASA &amp; REPOSITORI</dt>
            <dd>
              {#if contact.githubUrl}
                <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">github.com/harrynurbudyana</a>
              {/if}
              {#if contact.secondGithubUrl}
                <span> | </span>
                <a href={contact.secondGithubUrl} target="_blank" rel="noopener noreferrer">github.com/ivantans</a>
              {/if}
              {#if contact.secondPortfolioUrl}
                <span> | </span>
                <a href={contact.secondPortfolioUrl} target="_blank" rel="noopener noreferrer">ivantans.id</a>
              {/if}
            </dd>
          </div>
          <div class="contact-detail-item">
            <dt>LOKASI OPERASIONAL</dt>
            <dd>{contact.addressPlaceholder}</dd>
          </div>
          <div class="contact-detail-item">
            <dt>JAM OPERASIONAL KONSULTASI</dt>
            <dd>{contact.workingHours}</dd>
          </div>
        </dl>
        <button type="button" class="btn transition-all duration-200 hover:-translate-y-0.5" id="print-profile-btn" onclick={handlePrint}>
          Cetak / Simpan PDF Ringkasan Profil
        </button>
      </div>

      <div class="contact-form-panel" data-aos="fade-up" data-aos-delay="160">
        <h3 style="margin-top: 0; font-size: 1.18rem;">Formulir Konsultasi &amp; Permintaan Penawaran IT</h3>
        <form id="consultation-form" novalidate onsubmit={handleSubmit} onreset={handleReset}>
          <div class="form-field">
            <label for="sender-name" class="form-label">Nama Lengkap &amp; Jabatan *</label>
            <input
              type="text"
              id="sender-name"
              name="senderName"
              class="form-input transition-colors duration-200"
              bind:value={senderName}
              placeholder="Nama Lengkap Anda (mis. Pemilik Usaha / Kepala Divisi TI)"
              required
              aria-invalid={errors.senderName !== ''}
              aria-describedby="sender-name-error"
            >
            {#if errors.senderName}
              <p id="sender-name-error" class="field-error-msg">{errors.senderName}</p>
            {/if}
          </div>

          <div class="form-field">
            <label for="sender-email" class="form-label">Alamat Email *</label>
            <input
              type="email"
              id="sender-email"
              name="senderEmail"
              class="form-input transition-colors duration-200"
              bind:value={senderEmail}
              placeholder="nama@perusahaan.co.id"
              required
              aria-invalid={errors.senderEmail !== ''}
              aria-describedby="sender-email-error"
            >
            {#if errors.senderEmail}
              <p id="sender-email-error" class="field-error-msg">{errors.senderEmail}</p>
            {/if}
          </div>

          <div class="form-field">
            <label for="sender-company" class="form-label">Nama Bisnis / Perusahaan / Instansi *</label>
            <input
              type="text"
              id="sender-company"
              name="senderCompany"
              class="form-input transition-colors duration-200"
              bind:value={senderCompany}
              placeholder="Nama Bisnis, Perusahaan, atau Instansi Anda"
              required
              aria-invalid={errors.senderCompany !== ''}
              aria-describedby="sender-company-error"
            >
            {#if errors.senderCompany}
              <p id="sender-company-error" class="field-error-msg">{errors.senderCompany}</p>
            {/if}
          </div>

          <div class="form-field">
            <label for="project-scope" class="form-label">Kategori Layanan IT yang Dibutuhkan *</label>
            <select
              id="project-scope"
              name="projectScope"
              class="form-select transition-colors duration-200"
              bind:value={projectScope}
              required
              aria-invalid={errors.projectScope !== ''}
              aria-describedby="project-scope-error"
            >
              <option value="">Pilih kategori layanan...</option>
              <option value="Pembuatan Website, Aplikasi, & Software (Skala Kecil s.d. Besar)">Pembuatan Website, Aplikasi, &amp; Software (Skala Kecil s.d. Besar)</option>
              <option value="Pengadaan Hardware IoT (Custom PCB / Perangkat Vendor)">Pengadaan Hardware IoT (Custom PCB / Perangkat Vendor)</option>
              <option value="Pengadaan & Instalasi Perangkat Jaringan + Best Practice">Pengadaan &amp; Instalasi Perangkat Jaringan + Best Practice</option>
              <option value="Konsultasi Arsitektur, Server HA, AI Lokal, & Layanan IT Lainnya">Konsultasi Arsitektur, Server HA, AI Lokal, &amp; Layanan IT Lainnya</option>
            </select>
            {#if errors.projectScope}
              <p id="project-scope-error" class="field-error-msg">{errors.projectScope}</p>
            {/if}
          </div>

          <div class="form-field">
            <label for="project-scale" class="form-label">Estimasi Skala Kebutuhan *</label>
            <select
              id="project-scale"
              name="projectScale"
              class="form-select transition-colors duration-200"
              bind:value={projectScale}
              required
              aria-invalid={errors.projectScale !== ''}
              aria-describedby="project-scale-error"
            >
              <option value="">Pilih estimasi skala...</option>
              <option value="Skala Kecil (UMKM / Kantor Cabang / Proyek Awal)">Skala Kecil (UMKM / Kantor Cabang / Proyek Awal)</option>
              <option value="Skala Menengah (Gedung Kantor / Gudang / Multi-Divisi)">Skala Menengah (Gedung Kantor / Gudang / Multi-Divisi)</option>
              <option value="Skala Besar (Enterprise / Kampus / Pabrik / Multi-Lokasi)">Skala Besar (Enterprise / Kampus / Pabrik / Multi-Lokasi)</option>
            </select>
            {#if errors.projectScale}
              <p id="project-scale-error" class="field-error-msg">{errors.projectScale}</p>
            {/if}
          </div>

          <div class="form-field">
            <label for="project-notes" class="form-label">Deskripsi Kebutuhan &amp; Target Waktu Implementasi *</label>
            <textarea
              id="project-notes"
              name="projectNotes"
              class="form-textarea transition-colors duration-200"
              bind:value={projectNotes}
              placeholder="Tuliskan kebutuhan website/aplikasi, spesifikasi hardware IoT, atau jumlah titik perangkat jaringan beserta lokasi instalasinya..."
              required
              aria-invalid={errors.projectNotes !== ''}
              aria-describedby="project-notes-error"
            ></textarea>
            {#if errors.projectNotes}
              <p id="project-notes-error" class="field-error-msg">{errors.projectNotes}</p>
            {/if}
          </div>

          <div class="hero-actions" style="margin-bottom: 0;">
            <button type="submit" class="btn btn-primary transition-all duration-200 hover:-translate-y-0.5" id="submit-consultation-btn">
              Kirim Ringkasan Kebutuhan
            </button>
            <button type="reset" class="btn transition-all duration-200 hover:-translate-y-0.5" id="reset-consultation-btn">
              Kosongkan Formulir
            </button>
          </div>

          {#if formStatus === 'error'}
            <div id="form-feedback-box" class="form-feedback-banner is-error" role="status" aria-live="polite">
              Formulir belum lengkap. Silakan periksa kolom yang ditandai pesan kesalahan di atas.
            </div>
          {:else if formStatus === 'success'}
            <div id="form-feedback-box" class="form-feedback-banner" role="status" aria-live="polite">
              <p style="margin: 0 0 0.75rem;">
                [Terverifikasi] Ringkasan kebutuhan teknis untuk {senderCompany.trim()} siap dikirimkan.
              </p>
              <div class="hero-actions" style="margin-bottom: 0;">
                <a href={mailtoHref} class="btn btn-primary">Buka Aplikasi Email &amp; Kirim</a>
              </div>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>
