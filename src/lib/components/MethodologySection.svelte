<script>
  import { slide } from "svelte/transition";
  let { methodology, onOpenConsult } = $props();
  let openPhaseIdx = $state(2);
</script>

<section id="metodologi" class="band-dark section-fc border-t border-white/10">
  <div class="container-fc">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <!-- Left Column matching FigCraft FAQ Heading + Sphere + Ask Question button -->
      <div class="lg:col-span-5 relative" data-aos="fade-up">
        <span class="mono-tag text-[#7ed6e8] block mb-2">{methodology.sectionCode} / METODOLOGI &amp; FAQ</span>
        <h2 class="heading-fc-lg text-white">
          Ada
          <br />
          Pertanyaan?
        </h2>
        <p class="mt-4 text-sm text-[#b4b7c9] max-w-sm leading-relaxed">
          {methodology.subtitle}
        </p>

        <div class="fc-sphere hidden sm:block" style="width: 26px; height: 26px; right: 20%; top: 135px;" aria-hidden="true"></div>

        <div class="mt-10">
          <button type="button" class="btn-fc-outline-dark" onclick={onOpenConsult}>
            <span>TANYA ARSITEK</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <!-- Right Column Accordion matching FigCraft FAQ 1..4 -->
      <div class="lg:col-span-7" data-aos="fade-up" data-aos-delay="80">
        {#each methodology.phases as phase, idx}
          {@const isOpen = openPhaseIdx === idx}
          <div class="faq-item-fc">
            <button
              type="button"
              class="faq-btn-fc {isOpen ? 'open' : ''}"
              aria-expanded={isOpen}
              onclick={() => (openPhaseIdx = isOpen ? -1 : idx)}
            >
              <span>
                <span class="mono-tag text-[#7ed6e8] mr-3">{phase.step}</span>
                {phase.name}
              </span>
              <span class="text-2xl font-light shrink-0" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {#if isOpen}
              <div class="mt-3 pr-8 text-sm text-[#b4b7c9] leading-relaxed space-y-2" transition:slide={{ duration: 180 }}>
                <p>{phase.summary}</p>
                <div class="flex flex-wrap gap-4 pt-1 text-xs text-[#7d819a]">
                  <span>Estimasi: <strong class="text-white">{phase.duration}</strong></span>
                  <span>Luaran: <strong class="text-[#7ed6e8]">{phase.deliverable}</strong></span>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
