import { Button } from "@/components/ui/button";
import { Download, ArrowRight, ExternalLink } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";
import RingMark from "@/components/RingMark";
import { CV_URL, CV_LABEL, CRASH_LAB_URL } from "@/lib/identity";

const MEDVERSA_DOI = "https://doi.org/10.1056/AIoa2500595";
const RADLE1_ARXIV = "https://arxiv.org/abs/2509.25559";
const RADLE2_REPORT = "https://crashlab.in/radle-technicalreport";
const RADLE2_LEADERBOARD = "https://crashlab.in/radle/2/leaderboard";

// Inline links in the narrative share a persistent underline, Rajpurkar-style.
const link =
  "text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy transition-colors";

export default function HeroSection() {
  const handleDownloadCV = () => window.open(CV_URL, "_blank", "noopener,noreferrer");
  const handleViewWork = () =>
    document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });
  const handleVisitLab = () => window.open(CRASH_LAB_URL, "_blank", "noopener,noreferrer");

  return (
    <section id="hero" className="relative overflow-hidden border-b border-rule px-6 pt-20 pb-14">
      {/* Ring watermark, bleeding off the right edge */}
      <RingMark className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[420px] w-[420px] text-navy opacity-[0.05]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[300px_minmax(0,1fr)] gap-10 items-start">
        {/* Left: photo + key-achievements caption */}
        <div>
          <img
            src={profileImage}
            alt="Suvrankar Datta presenting at RSNA 2025"
            className="w-full max-w-[300px] aspect-[3/4] object-cover border border-navy"
            data-testid="img-profile"
          />
          <p className="font-sans text-xs leading-relaxed text-ink-quiet mt-3 max-w-[300px]">
            MD Radiodiagnosis &amp; IR, AIIMS New Delhi &middot; MBBS Gold
            Medallist, JIPMER &middot; RSNA Trainee Research Prize 2023 &middot;
            MICCAI 2025 &middot; Published in NEJM AI
          </p>
        </div>

        {/* Right: name, role, mission, narrative, actions, recent */}
        <div className="space-y-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-ink-faint">
              Physician-scientist &middot; Clinical AI evaluation &middot; Global health
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-navy leading-tight mt-1">
              Suvrankar Datta
            </h1>
            <p className="font-sans text-sm text-ink-quiet mt-2 leading-relaxed">
              Founder and Group Lead of{" "}
              <a href={CRASH_LAB_URL} target="_blank" rel="noopener noreferrer" className="text-navy underline decoration-orange decoration-2 underline-offset-4">
                CRASH Lab
              </a>{" "}
              &middot; Simons Ashoka Early Career Fellow, Koita Centre for
              Digital Health, Ashoka University
            </p>
          </div>

          <p className="font-serif text-lg text-navy font-semibold max-w-prose">
            Clinical AI should know when to answer&mdash;and when to hand over.
          </p>

          <p className="max-w-prose leading-relaxed">
            I trained in radiology at AIIMS New Delhi after an MBBS at JIPMER,
            and spent years in high-volume public-sector and rural clinical
            practice before moving full-time into research. I now lead{" "}
            <a href={CRASH_LAB_URL} target="_blank" rel="noopener noreferrer" className={link}>CRASH Lab</a>{" "}
            at Ashoka University, where we focus on the clinical evaluation of
            medical AI &mdash; finding where these systems fail before they reach
            patients. That work runs from{" "}
            <a href="/publications.html" className={link}>evaluating foundation models for radiology</a>{" "}
            such as{" "}
            <a href={MEDVERSA_DOI} target="_blank" rel="noopener noreferrer" className={link}>MedVersa</a>,
            a generalist model published in NEJM AI; to benchmarking generalist
            medical AI against expert radiologists with{" "}
            <a href={RADLE1_ARXIV} target="_blank" rel="noopener noreferrer" className={link}>RadLE 1.0</a>;
            to asking how to measure the safety and autonomy-readiness a model
            needs before it can be trusted with a diagnosis, with{" "}
            <a href={RADLE2_REPORT} target="_blank" rel="noopener noreferrer" className={link}>RadLE 2.0</a>.
            Many of these programmes &mdash; across healthcare, global health and
            evaluation &mdash; are{" "}
            <a href="/grants.html" className={link}>now competitively funded</a>,
            including two Gates Foundation&ndash;supported programmes and a
            DST&ndash;A*STAR India&ndash;Singapore collaboration. My earlier work
            on automated rib-fracture detection (AIRib) received the RSNA Trainee
            Research Prize in 2023. See my{" "}
            <a href="/research.html" className={link}>projects</a> and{" "}
            <a href="/publications.html" className={link}>publications</a>.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button onClick={handleViewWork} className="hover-elevate font-sans" data-testid="button-view-work">
              View selected work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={handleDownloadCV} className="hover-elevate font-sans" data-testid="button-download-cv">
              <Download className="w-4 h-4 mr-2" />
              {CV_LABEL}
            </Button>
            <Button variant="outline" onClick={handleVisitLab} className="hover-elevate font-sans" data-testid="button-visit-lab">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit CRASH Lab
            </Button>
          </div>

          <p className="font-serif italic text-ink-quiet max-w-prose pt-1">
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
            is live &mdash; ranking frontier AI on readiness for autonomous radiology.
          </p>
        </div>
      </div>
    </section>
  );
}
