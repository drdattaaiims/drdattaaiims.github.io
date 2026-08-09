import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";
import RingMark from "@/components/RingMark";
import {
  CRASH_LAB_URL,
  CV_URL,
  EMAIL_PRIMARY,
  LINKEDIN_URL,
  SCHOLAR_URL,
} from "@/lib/identity";

const RADLE2_LEADERBOARD = "https://crashlab.in/radle/2/leaderboard";

const textLink =
  "text-navy underline decoration-navy/30 underline-offset-2 transition-colors hover:decoration-navy";

export default function HeroSection() {
  const handleDownloadCV = () => window.open(CV_URL, "_blank", "noopener,noreferrer");
  const handleViewWork = () =>
    document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-rule px-6 pb-8 pt-8 min-[900px]:pb-14 min-[900px]:pt-16 min-[1280px]:pt-20"
    >
      <RingMark className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-navy min-[900px]:block min-[900px]:opacity-[0.018] min-[1100px]:opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-[1120px] items-start gap-6 min-[900px]:grid-cols-[260px_minmax(0,1fr)] min-[900px]:gap-8 min-[1100px]:grid-cols-[300px_minmax(0,1fr)] min-[1100px]:gap-10">
        <div className="order-1 space-y-3 min-[900px]:order-2 min-[900px]:space-y-5">
          <div>
            <p className="hidden font-sans text-xs uppercase tracking-[0.12em] text-ink-faint min-[900px]:block">
              Physician-scientist &middot; Clinical AI evaluation &middot; Global health
            </p>
            <h1 data-ui="page-title" className="mt-1 font-display text-4xl font-bold leading-tight tracking-tight text-navy min-[900px]:text-5xl">
              Suvrankar Datta
            </h1>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-quiet">
              Founder and Group Lead,{" "}
              <a
                href={CRASH_LAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline decoration-orange decoration-2 underline-offset-4"
              >
                CRASH Lab
              </a>{" "}
              &middot; Simons Ashoka Early Career Fellow
            </p>
          </div>

          <p className="max-w-prose font-serif text-lg font-semibold text-navy">
            Clinical AI should know when to answer&mdash;and when to hand over.
          </p>

          <p className="max-w-prose leading-relaxed">
            I am a radiologist and physician-scientist evaluating when medical
            AI can be trusted, when it should defer, and whether it holds up in
            Indian clinical workflows. My work spans RadLE, MedVersa, equitable
            radiology models and AI scribes.{" "}
            <a href="/research.html" className={textLink}>Explore the research</a>.
          </p>

          <div className="flex flex-wrap gap-2 pt-1 min-[900px]:gap-3">
            <Button
              onClick={handleViewWork}
              className="min-h-11 px-3 font-sans min-[900px]:px-4"
              data-testid="button-view-work"
            >
              Selected work
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadCV}
              className="min-h-11 px-3 font-sans min-[900px]:px-4"
              data-testid="button-download-cv"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          <p className="font-sans text-xs text-ink-quiet min-[900px]:text-sm">
            <a href={"mailto:" + EMAIL_PRIMARY} className="hover:text-navy hover:underline">Email</a>
            {" · "}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-navy hover:underline">LinkedIn</a>
            {" · "}
            <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-navy hover:underline">Google Scholar</a>
          </p>

          <p className="hidden max-w-prose font-serif italic text-ink-quiet min-[900px]:block">
            Recent: the{" "}
            <a
              href={RADLE2_LEADERBOARD}
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4"
              data-testid="link-radle2-leaderboard"
            >
              RadLE 2.0 leaderboard
            </a>{" "}
            ranks frontier AI on readiness for autonomous radiology.
          </p>
        </div>

        <div className="order-2 flex flex-col items-center min-[900px]:order-1 min-[900px]:items-start">
          <img
            src={profileImage}
            alt="Suvrankar Datta presenting at RSNA 2025"
            className="aspect-[16/10] w-full max-w-[320px] border border-navy object-cover object-[center_28%] min-[900px]:aspect-[3/4] min-[900px]:max-w-[260px] min-[900px]:object-center min-[1100px]:max-w-[300px]"
            data-testid="img-profile"
          />
          <p className="mt-3 hidden max-w-[300px] font-sans text-xs leading-relaxed text-ink-quiet min-[900px]:block">
            MD Radiodiagnosis &amp; IR, AIIMS New Delhi &middot; MBBS Gold
            Medallist, JIPMER &middot; RSNA Trainee Research Prize 2023 &middot;
            MICCAI 2025 &middot; Published in NEJM AI
          </p>
        </div>
      </div>
    </section>
  );
}
