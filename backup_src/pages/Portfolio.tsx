import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ResearchSection from "@/components/ResearchSection";
import TalksSection from "@/components/TalksSection";
import AwardsSection from "@/components/AwardsSection";
import PartnerLogos from "@/components/PartnerLogos";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="experience">
          <ExperienceTimeline />
        </section>

        <section id="research">
          <ResearchSection />
        </section>

        <section id="talks">
          <TalksSection />
        </section>

        <section id="awards">
          <AwardsSection />
        </section>

        <section id="partners">
          <PartnerLogos />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            © 2025 Dr. Suvrankar Datta. Building responsible AI for healthcare innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}