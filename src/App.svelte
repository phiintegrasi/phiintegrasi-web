<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { initialSiteData } from './lib/siteData.js';
  import Header from './lib/components/Header.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import CapabilitiesSection from './lib/components/CapabilitiesSection.svelte';
  import VisionMetricsSection from './lib/components/VisionMetricsSection.svelte';
  import CaseStudiesSection from './lib/components/CaseStudiesSection.svelte';
  import ProfileSection from './lib/components/ProfileSection.svelte';
  import MethodologySection from './lib/components/MethodologySection.svelte';
  import InsightsSection from './lib/components/InsightsSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import ConsultationModal from './lib/components/ConsultationModal.svelte';
  import TemplateEditorModal from './lib/components/TemplateEditorModal.svelte';

  let siteData = $state(structuredClone(initialSiteData));
  let editorOpen = $state(false);
  let consultOpen = $state(false);
  let lastEditorTrigger = $state(null);

  onMount(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: prefersReducedMotion ? 0 : 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 48,
      disable: prefersReducedMotion
    });
  });

  function openEditor(event) {
    lastEditorTrigger = event?.currentTarget ?? null;
    editorOpen = true;
  }

  function closeEditor() {
    editorOpen = false;
    lastEditorTrigger?.focus?.();
  }

  function handleSaveSiteData(updated) {
    siteData = updated;
    editorOpen = false;
  }

  function handleResetSiteData() {
    siteData = structuredClone(initialSiteData);
  }
</script>

<Header
  brand={siteData.brand}
  onOpenConsult={() => (consultOpen = true)}
  onOpenEditor={openEditor}
/>

<main id="main-content">
  <HeroSection hero={siteData.hero} onOpenConsult={() => (consultOpen = true)} />
  <CapabilitiesSection capabilities={siteData.capabilities} onOpenConsult={() => (consultOpen = true)} />
  <VisionMetricsSection brand={siteData.brand} />
  <CaseStudiesSection caseStudies={siteData.caseStudies} onOpenConsult={() => (consultOpen = true)} />
  <ProfileSection brand={siteData.brand} profile={siteData.profile} />
  <MethodologySection methodology={siteData.methodology} onOpenConsult={() => (consultOpen = true)} />
  <InsightsSection insights={siteData.insights} />
  <ContactSection
    brand={siteData.brand}
    contact={siteData.contact}
    onOpenConsult={() => (consultOpen = true)}
  />
</main>

<ConsultationModal
  isOpen={consultOpen}
  contact={siteData.contact}
  onClose={() => (consultOpen = false)}
/>

<TemplateEditorModal
  isOpen={editorOpen}
  {siteData}
  onClose={closeEditor}
  onSave={handleSaveSiteData}
  onReset={handleResetSiteData}
/>
