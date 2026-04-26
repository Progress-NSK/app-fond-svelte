<script>
  import SiteHeader from './components/SiteHeader.svelte';
  import HeroSection from './components/HeroSection.svelte';
  import CasesSection from './components/CasesSection.svelte';
  import ProgramsSection from './components/ProgramsSection.svelte';
  import StatsSection from './components/StatsSection.svelte';
  import NewsSection from './components/NewsSection.svelte';
  import SiteFooter from './components/SiteFooter.svelte';

  import { menu, urgentCases, programs, stats, news } from './data/content.js';
</script>

<a class="skip-link" href="#main-content">Перейти к содержимому</a>

<div class="page">
  <SiteHeader {menu} />

  <main id="main-content">
    <HeroSection />
    <CasesSection items={urgentCases} />
    <ProgramsSection items={programs} />
    <StatsSection items={stats} />
    <NewsSection items={news} />
  </main>

  <SiteFooter />
</div>
