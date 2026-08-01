import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SelectedPublicationsSection from "@/components/SelectedPublicationsSection";
import ResearchThreadsSection from "@/components/ResearchThreadsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TalksSection from "@/components/TalksSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-14">
      <Navigation />

      <main>
        <HeroSection />
        <SelectedPublicationsSection />
        <ResearchThreadsSection />
        <ExperienceTimeline />
        <TalksSection />
        <AwardsSection />
        <ContactSection />
      </main>

      <footer className="py-6 px-6 border-t border-rule">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-1 font-sans text-sm text-ink-faint">
          <span>© 2026 Suvrankar Datta.</span>
          <span>Last updated: 1 Aug 2026</span>
          <a href="/disclosures.html" className="hover:underline">Disclosures</a>
        </div>
      </footer>
    </div>
  );
}
