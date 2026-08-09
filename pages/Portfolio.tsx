import HeroSection from "@/components/HeroSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ClinicalGroundingSection from "@/components/ClinicalGroundingSection";
import EvidenceSection from "@/components/EvidenceSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SelectedPublicationsSection from "@/components/SelectedPublicationsSection";
import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/site/SiteShell";
import type { RouteDefinition } from "@/lib/routes";

export default function Portfolio({ route }: { route: RouteDefinition }) {
  return (
    <SiteShell route={route}>
      <main id="main-content" className="site-main home-main" data-ui="page-shell">
        <HeroSection />
        <SelectedWorkSection />
        <ClinicalGroundingSection />
        <EvidenceSection />
        <SelectedPublicationsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
