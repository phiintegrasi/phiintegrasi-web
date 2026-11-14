<script>
  let { services } = $props();
</script>

<section id="layanan" class="border-t border-[#dcd8cf] bg-[#f5f3ee]">
  <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
    <h2 class="max-w-2xl text-3xl font-bold tracking-tight text-[#16181d] sm:text-4xl">
      Empat bidang yang kami kerjakan sendiri
    </h2>

    <div class="mt-12 border-t border-[#16181d]">
      {#each services as service}
        <div class="grid gap-3 border-b border-[#dcd8cf] py-8 md:grid-cols-[14rem_1fr] md:gap-10">
          <h3 class="text-xl font-bold text-[#16181d]">{service.name}</h3>
          <div class="max-w-2xl">
            <p class="text-lg font-semibold text-[#16181d]">{service.lead}</p>
            <p class="mt-2 text-base leading-relaxed text-[#4a4f59]">{service.detail}</p>
            <p class="mt-3 text-sm text-[#4a4f59]">
              <span class="font-semibold text-[#16181d]">Contoh:</span> {service.examples}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
