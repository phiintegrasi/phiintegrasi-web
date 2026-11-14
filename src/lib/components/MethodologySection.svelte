<script>
  import { slide } from "svelte/transition";
  let { methodology, onOpenConsult } = $props();
  let openPhaseIdx = $state(0);
</script>

<section id="metodologi" class="bg-[#f4f7fb] py-20 lg:py-24 border-b border-slate-200/70">
  <div class="container-wn">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-5" data-aos="fade-up">
        <div class="eyebrow-wn mb-3">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          <span>METODOLOGI &amp; SLA</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#0f172a]">
          5 Fase Rekayasa <span class="text-[#1d5bff]">Terukur</span>
        </h2>
        <p class="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          {methodology.subtitle}
        </p>

        <div class="mt-8">
          <button type="button" class="btn-blue" onclick={onOpenConsult}>
            <span>Konsultasi Kebutuhan Proyek</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="lg:col-span-7 space-y-3" data-aos="fade-up" data-aos-delay="80">
        {#each methodology.phases as phase, idx}
          {@const isOpen = openPhaseIdx === idx}
          <div class="rounded-2xl bg-white border {isOpen ? 'border-[#1d5bff]/50 shadow-sm' : 'border-slate-200/80'} overflow-hidden transition-all">
            <button
              type="button"
              class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              aria-expanded={isOpen}
              onclick={() => (openPhaseIdx = isOpen ? -1 : idx)}
            >
              <span class="text-sm sm:text-base font-bold {isOpen ? 'text-[#1d5bff]' : 'text-[#0f172a]'}">
                <span class="mono-tag text-[#1d5bff] mr-3">{phase.step}</span>
                {phase.name}
              </span>
              <span class="text-xl font-bold text-[#1d5bff] shrink-0" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {#if isOpen}
              <div class="px-6 pb-5 text-sm text-[#475569] leading-relaxed space-y-2 border-t border-slate-100 pt-4" transition:slide={{ duration: 180 }}>
                <p>{phase.summary}</p>
                <div class="flex flex-wrap gap-4 pt-1 text-xs text-[#64748b]">
                  <span>Estimasi: <strong class="text-[#0f172a]">{phase.duration}</strong></span>
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
