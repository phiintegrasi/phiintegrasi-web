<script>
  let { brand, profile } = $props();
  const founders = $derived(profile.team.slice(0, 2));
</script>

<section id="tim" class="border-t border-[#dcd8cf] bg-[#f5f3ee]">
  <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
    <h2 class="max-w-2xl text-3xl font-bold tracking-tight text-[#16181d] sm:text-4xl">
      Yang mengerjakan proyek Anda
    </h2>

    <div class="mt-12 grid gap-12 md:grid-cols-2">
      {#each founders as member, idx}
        {@const portfolio = brand.personalPortfolios?.[idx]}
        <div>
          <h3 class="text-xl font-bold text-[#16181d]">{member.name}</h3>
          <p class="mt-1 text-[15px] font-semibold text-[#4a4f59]">{member.role}</p>
          <p class="mt-4 text-base leading-relaxed text-[#4a4f59]">{member.bio}</p>
          {#if portfolio}
            <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer" class="link-action">GitHub</a>
              {#if portfolio.websiteUrl}
                <a href={portfolio.websiteUrl} target="_blank" rel="noopener noreferrer" class="link-action">
                  {portfolio.websiteUrl.replace('https://', '')}
                </a>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="mt-16 grid gap-8 border-t border-[#16181d] pt-8 lg:grid-cols-[14rem_1fr] lg:gap-10">
      <h3 class="text-xl font-bold text-[#16181d]">HAKI dan riset</h3>
      <ul class="divide-y divide-[#dcd8cf]">
        {#each profile.hakiAndResearch ?? [] as item}
          <li class="py-5 first:pt-0">
            <p class="text-sm font-semibold text-[#4a4f59]">{item.badge}</p>
            <p class="mt-1 text-lg font-semibold leading-snug text-[#16181d]">{item.title}</p>
            <p class="mt-1.5 text-base leading-relaxed text-[#4a4f59]">{item.desc}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
