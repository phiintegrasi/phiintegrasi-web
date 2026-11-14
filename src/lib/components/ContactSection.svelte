<script>
  let { brand, contact, methodology, onOpenConsult } = $props();
  const waNumber = $derived(contact.phonePlaceholder.replace(/[^0-9]/g, ''));
</script>

<section id="kontak" class="bg-[#16181d] text-white">
  <div class="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
    <div>
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Ceritakan sistem yang ingin Anda bangun</h2>
      <p class="mt-5 max-w-lg text-[17px] leading-relaxed text-[#c9ccd3]">
        Cukup beberapa kalimat: apa yang ingin dicapai, apa yang sudah ada, dan kapan dibutuhkan. Kami balas dengan
        pertanyaan lanjutan atau perkiraan awal.
      </p>
      <button type="button" onclick={onOpenConsult} class="btn-primary mt-8 px-5 py-3 text-[15px]">
        Tulis ringkasan proyek
      </button>

      <dl class="mt-10 space-y-4 text-[15px]">
        <div>
          <dt class="text-[#9ca1ab]">Email</dt>
          <dd class="mt-0.5"><a href="mailto:{contact.email}" class="font-semibold text-white underline underline-offset-4 hover:text-[#fdba74]">{contact.email}</a></dd>
        </div>
        <div>
          <dt class="text-[#9ca1ab]">WhatsApp</dt>
          <dd class="mt-0.5"><a href="https://wa.me/{waNumber}" target="_blank" rel="noopener noreferrer" class="font-semibold text-white underline underline-offset-4 hover:text-[#fdba74]">{contact.phonePlaceholder}</a></dd>
        </div>
        <div>
          <dt class="text-[#9ca1ab]">Lokasi</dt>
          <dd class="mt-0.5 text-[#e4e6ea]">{contact.addressPlaceholder}</dd>
          <dd class="mt-0.5 text-[#9ca1ab]">{contact.workingHours}</dd>
        </div>
      </dl>
    </div>

    <div class="lg:border-l lg:border-[#33363d] lg:pl-14">
      <h3 class="text-lg font-bold">Setelah Anda menghubungi kami</h3>
      <ol class="mt-6 space-y-6">
        {#each methodology.phases as phase, idx}
          <li class="grid grid-cols-[2rem_1fr] gap-3">
            <span class="text-lg font-bold text-[#9ca1ab]">{idx + 1}</span>
            <div>
              <p class="font-semibold text-white">{phase.name}</p>
              <p class="mt-1 text-sm text-[#9ca1ab]">{phase.duration}</p>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>

<footer class="border-t border-[#33363d] bg-[#16181d] text-[#9ca1ab]">
  <div class="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
    <p>{brand.companyName} · {brand.city}</p>
    <a href={brand.githubOrgUrl} target="_blank" rel="noopener noreferrer" class="hover:text-white">github.com/phiintegrasi</a>
  </div>
</footer>
