<script>
  let { brand, contact, onOpenConsult } = $props();
</script>

<section id="kontak" class="border-t border-slate-800 bg-[#0b1220] bg-tech-grid py-16 text-white sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid items-start gap-10 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <span class="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">
          {contact.sectionCode} / Konsultasi Arsitektur
        </span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {contact.title}
        </h2>
        <p class="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {contact.subtitle}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <button type="button" onclick={onOpenConsult} class="btn-primary px-5 py-3 text-sm">
            Kirim Ringkasan Proyek
          </button>
          <a
            href={contact.githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary-dark px-5 py-3 text-sm"
          >
            github.com/phiintegrasi -&gt;
          </a>
        </div>
      </div>

      <!-- Spesifikasi Kontak Langsung -->
      <div class="rounded-lg border border-slate-700 bg-[#0f172a] p-6 lg:col-span-5">
        <h3 class="font-mono-tech text-xs font-semibold uppercase tracking-wider text-slate-400">
          Kanal Resmi
        </h3>
        <dl class="mt-4 space-y-4 text-sm">
          <div>
            <dt class="font-mono-tech text-xs text-slate-400">Email Teknis</dt>
            <dd class="mt-0.5 font-medium text-white">
              <a href="mailto:{contact.email}" class="hover:text-[#60a5fa] hover:underline">{contact.email}</a>
              <span class="mx-2 text-slate-600">/</span>
              <a href="mailto:{contact.secondaryEmail}" class="hover:text-[#60a5fa] hover:underline">{contact.secondaryEmail}</a>
            </dd>
          </div>
          <div>
            <dt class="font-mono-tech text-xs text-slate-400">Telepon / WhatsApp</dt>
            <dd class="mt-0.5 font-mono-tech font-medium text-white">{contact.phonePlaceholder}</dd>
          </div>
          <div>
            <dt class="font-mono-tech text-xs text-slate-400">Lokasi & Jam Operasional</dt>
            <dd class="mt-0.5 text-slate-300">{contact.addressPlaceholder}</dd>
            <dd class="mt-0.5 font-mono-tech text-xs text-slate-400">{contact.workingHours}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>

<footer class="border-t border-slate-800 bg-[#080d18] py-10 text-slate-400">
  <div class="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
    <div class="max-w-md space-y-2">
      <div class="flex items-center gap-2 text-white">
        <span class="flex h-6 w-6 items-center justify-center rounded bg-[#1d5bff] font-mono-tech text-xs font-bold text-white">
          PHI
        </span>
        <span class="text-sm font-bold">{brand.companyName} ({brand.domain})</span>
      </div>
      <p class="text-xs leading-relaxed text-slate-400">
        {brand.registrationNumber} · {brand.city}
      </p>
    </div>

    <div class="flex flex-wrap gap-x-8 gap-y-3 text-xs">
      <a href="#kapabilitas" class="hover:text-white">Kapabilitas</a>
      <a href="#tolok-ukur" class="hover:text-white">Tolok Ukur</a>
      <a href="#studi-kasus" class="hover:text-white">Portofolio</a>
      <a href="#profil" class="hover:text-white">Profil & HAKI</a>
      <a href="#repositori" class="hover:text-white">Repositori</a>
      <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="font-mono-tech text-[#60a5fa] hover:underline">
        GitHub Org
      </a>
    </div>
  </div>
</footer>
