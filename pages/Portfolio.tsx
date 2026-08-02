import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ClinicalGroundingSection from "@/components/ClinicalGroundingSection";
import EvidenceSection from "@/components/EvidenceSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SelectedPublicationsSection from "@/components/SelectedPublicationsSection";
import BiographySection from "@/components/BiographySection";
import ContactSection from "@/components/ContactSection";
import RingMark from "@/components/RingMark";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-14">
      <Navigation />

      <main>
        <HeroSection />
        <SelectedWorkSection />
        <ClinicalGroundingSection />
        <EvidenceSection />
        <ExperienceTimeline />
        <SelectedPublicationsSection />
        <BiographySection />
        <ContactSection />
      </main>

      <footer className="bg-navy py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-white/60">
          <RingMark className="w-5 h-5 text-white/50" />
          <span>© 2026 Suvrankar Datta.</span>
          <span>Last updated: 1 Aug 2026</span>
          <a href="/talks.html" className="text-white/60 no-underline hover:text-white hover:underline underline-offset-4">
            Talks
          </a>
          <a href="/awards.html" className="text-white/60 no-underline hover:text-white hover:underline underline-offset-4">
            Awards
          </a>
          <a href="/disclosures.html" className="text-white/60 no-underline hover:text-white hover:underline underline-offset-4">
            Disclosures
          </a>
          <a
            href="https://crashlab.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 no-underline hover:text-white hover:underline underline-offset-4"
          >
            CRASH Lab ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
