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
        <div className="max-w-4xl mx-auto text-center font-sans text-sm text-ink-faint">
          <p>© 2026 Suvrankar Datta.</p>
        </div>
      </footer>
    </div>
  );
}
