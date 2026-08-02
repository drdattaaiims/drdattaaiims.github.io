import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";
import RingMark from "@/components/RingMark";
import { CV_URL, CV_LABEL } from "@/lib/identity";

export default function HeroSection() {
  const handleDownloadCV = () => {
    window.open(CV_URL, "_blank", "noopener,noreferrer");
  };

  const handleViewWork = () => {
    document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-rule px-6 pt-20 pb-14">
      {/* Ring watermark, bleeding off the right edge */}
      <RingMark className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[420px] w-[420px] text-navy opacity-[0.05]" />

      <div className="relative max-w-6xl mx-auto grid sm:grid-cols-[200px_1fr] gap-8 items-start">
        <div className="border-l-2 border-navy pl-4 sm:border-l-0 sm:pl-0">
          <img
            src={profileImage}
            alt="Suvrankar Datta presenting at RSNA 2025"
            className="w-[200px] aspect-[3/4] object-cover border border-navy"
            data-testid="img-profile"
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-ink-faint">
              Physician-scientist &middot; Clinical AI evaluation &middot; Global health
            </p>
            <p className="font-display text-lg font-semibold text-ink-quiet mt-1">
              Suvrankar Datta
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy leading-tight mt-1">
              Clinical AI should know when to answer&mdash;and when to hand over.
            </h1>
          </div>

          <p className="max-w-prose leading-relaxed">
            I am a radiologist and physician-scientist at Ashoka University. I
            lead CRASH Lab, a clinician-led research group that designs
            clinical evaluations, safeguards and research partnerships for
            healthcare AI, with a focus on India and other resource-constrained
            health systems.
          </p>
          <p className="max-w-prose leading-relaxed">
            My work tests accuracy, uncertainty, multilingual performance and
            real-world workflow fit&mdash;and translates model failures into
            deferral rules, human handover and product safeguards.
          </p>

          <p className="font-sans text-sm text-ink-quiet">
            Simons Ashoka Early Career Fellow, Koita Centre for Digital Health
            &middot; Founder and Group Lead, CRASH Lab
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              onClick={handleViewWork}
              className="hover-elevate font-sans"
              data-testid="button-view-work"
            >
              View selected work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadCV}
              className="hover-elevate font-sans"
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4 mr-2" />
              {CV_LABEL}
            </Button>
            <a
              href="https://crashlab.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-navy underline decoration-orange decoration-2 underline-offset-4"
              data-testid="link-crash-lab"
            >
              Visit CRASH Lab &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
