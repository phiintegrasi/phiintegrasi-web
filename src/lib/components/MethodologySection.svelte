<script>
  import { slide } from 'svelte/transition';
  let { methodology, onOpenConsult } = $props();
  let openPhaseIdx = $state(0);
</script>

<section id="metodologi" class="border-t border-[#d0d7de] bg-white py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-5">
        <span class="section-label">§ 04 / Metodologi & SLA</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-[#0b1220] sm:text-3xl">
          5 Fase Rekayasa Terukur
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {methodology.subtitle}
        </p>

        <div class="mt-6">
          <button type="button" onclick={onOpenConsult} class="btn-primary px-5 py-2.5 text-sm">
            Konsultasi Kebutuhan Proyek
          </button>
        </div>
      </div>

      <div class="divide-y divide-[#d0d7de] rounded-lg border border-[#d0d7de] bg-white lg:col-span-7">
        {#each methodology.phases as phase, idx}
          {@const isOpen = openPhaseIdx === idx}
          <div>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
              aria-expanded={isOpen}
              onclick={() => (openPhaseIdx = isOpen ? -1 : idx)}
            >
              <span class="text-sm font-bold sm:text-base {isOpen ? 'text-[#1d5bff]' : 'text-[#0b1220]'}">
                <span class="font-mono-tech mr-3 text-xs font-semibold text-[#1d5bff]">{phase.step}</span>
                {phase.name}
              </span>
              <span class="font-mono-tech text-sm font-bold text-slate-500" aria-hidden="true">
                {isOpen ? '[-]' : '[+]'}
              </span>
            </button>

            {#if isOpen}
              <div class="border-t border-slate-200 bg-[#f6f8fa] px-5 py-4 text-sm leading-relaxed text-slate-700" transition:slide={{ duration: 150 }}>
                <p>{phase.summary}</p>
                <div class="mt-3 flex flex-wrap gap-6 font-mono-tech text-xs text-slate-600">
                  <span>Estimasi: <strong class="text-[#0b1220]">{phase.duration}</strong></span>
                  <span>Luaran: <strong class="text-[#1d5bff]">{phase.deliverable}</strong></span>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
