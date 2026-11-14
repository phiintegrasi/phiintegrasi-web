<script>
  import { initialSiteData } from './lib/siteData.js';
  import Header from './lib/components/Header.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import ServicesSection from './lib/components/ServicesSection.svelte';
  import WorkSection from './lib/components/WorkSection.svelte';
  import ProfileSection from './lib/components/ProfileSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import ConsultationModal from './lib/components/ConsultationModal.svelte';
  import TemplateEditorModal from './lib/components/TemplateEditorModal.svelte';

  let siteData = $state(structuredClone(initialSiteData));
  let editorOpen = $state(false);
  let consultOpen = $state(false);
  let lastEditorTrigger = $state(null);

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
  <ServicesSection services={siteData.services} />
  <WorkSection caseStudies={siteData.caseStudies} />
  <ProfileSection brand={siteData.brand} profile={siteData.profile} />
  <ContactSection
    brand={siteData.brand}
    contact={siteData.contact}
    methodology={siteData.methodology}
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
