<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { initialSiteData } from './lib/siteData.js';
  import Header from './lib/components/Header.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import ProfileSection from './lib/components/ProfileSection.svelte';
  import CapabilitiesSection from './lib/components/CapabilitiesSection.svelte';
  import CaseStudiesSection from './lib/components/CaseStudiesSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import TemplateEditorModal from './lib/components/TemplateEditorModal.svelte';

  let siteData = $state(structuredClone(initialSiteData));
  let theme = $state('dark');
  let editorOpen = $state(false);
  let lastEditorTrigger = $state(null);

  onMount(() => {
    const savedTheme = localStorage.getItem('phi_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      theme = savedTheme;
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: prefersReducedMotion ? 0 : 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 48,
      disable: prefersReducedMotion
    });
  });

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    theme = next;
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('phi_theme', next);
  }

  function openEditor(event) {
    lastEditorTrigger = event.currentTarget;
    editorOpen = true;
  }

  function closeEditor() {
    editorOpen = false;
    if (lastEditorTrigger) {
      lastEditorTrigger.focus();
    }
  }

  function updateSiteData(nextData) {
    siteData = nextData;
  }
</script>

<Header
  brand={siteData.brand}
  {theme}
  onToggleTheme={toggleTheme}
  onOpenEditor={openEditor}
/>

<main id="konten-utama">
  <HeroSection hero={siteData.hero} />
  <ProfileSection brand={siteData.brand} profile={siteData.profile} />
  <CapabilitiesSection capabilities={siteData.capabilities} methodology={siteData.methodology} />
  <CaseStudiesSection caseStudies={siteData.caseStudies} />
  <ContactSection brand={siteData.brand} contact={siteData.contact} />
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <div>
      <strong id="footer-company-name">{siteData.brand.companyName}</strong>
      <p class="footer-copy">
        Domain Resmi: <span id="footer-domain">{siteData.brand.domain}</span> | Portofolio Rekayasa: <a href={siteData.brand.githubProfileUrl} target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">github.com/harrynurbudyana</a> &amp; <a href={siteData.brand.secondGithubProfileUrl} target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">github.com/ivantans</a>
      </p>
    </div>
    <nav aria-label="Tautan Cepat Footer" class="footer-nav-links">
      <a href="#home" class="nav-link">Home</a>
      <a href="#tentang-kami" class="nav-link">Tentang Kami</a>
      <a href="#layanan" class="nav-link">Layanan</a>
      <a href="#portfolio" class="nav-link">Portfolio</a>
      <a href="#kontak-kami" class="nav-link">Kontak Kami</a>
    </nav>
  </div>
</footer>

<TemplateEditorModal
  open={editorOpen}
  {siteData}
  onUpdateSiteData={updateSiteData}
  onClose={closeEditor}
/>
