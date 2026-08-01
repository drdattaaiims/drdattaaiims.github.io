import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";
import RingMark from "@/components/RingMark";
import { EMAIL_PRIMARY, EMAIL_SECONDARY, LINKEDIN_URL, CV_URL, CV_LABEL } from "@/lib/identity";

export default function HeroSection() {
  const handleDownloadCV = () => {
    window.open(CV_URL, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Collaboration / speaking inquiry");
    window.location.href = `mailto:${EMAIL_PRIMARY}?cc=${EMAIL_SECONDARY}&subject=${subject}`;
  };

  const handleLinkedIn = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-rule px-6 pt-20 pb-14">
      {/* Ring watermark, bleeding off the right edge */}
      <RingMark className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[420px] w-[420px] text-navy opacity-[0.05]" />

      <div className="relative max-w-4xl mx-auto grid sm:grid-cols-[180px_1fr] gap-8 items-start">
        <div className="border-l-2 border-navy pl-4 sm:border-l-0 sm:pl-0">
          <img
            src={profileImage}
            alt="Suvrankar Datta"
            className="w-[180px] h-[180px] object-cover border border-navy"
            data-testid="img-profile"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy">
              Suvrankar Datta
            </h1>
            <p className="font-sans text-sm text-ink-quiet mt-2 leading-relaxed">
              Radiologist and health-AI researcher &middot; Simons Ashoka Early
              Career Fellow, Koita Centre for Digital Health, Ashoka University
              &middot; Founder and Group Lead,{" "}
              <a
                href="https://crashlab.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline decoration-orange decoration-2 underline-offset-4"
              >
                CRASH Lab
              </a>
            </p>
          </div>

          <p className="max-w-prose leading-relaxed">
            I lead CRASH Lab, a clinician-led research group at Ashoka University
            that builds benchmarks and evaluation frameworks for clinical AI. Our
            Radiology's Last Exam (RadLE) project, which I co-led, tests frontier
            multimodal models against board-certified radiologists on
            reliability, safety, and readiness for autonomous use. My work on
            automated rib-fracture detection and characterisation on CT (AIRib)
            received the RSNA Trainee Research Prize in 2023, and related work on
            fine-grained rib-fracture diagnosis was accepted at MICCAI 2025. I am
            also a co-author on MedVersa, a generalist foundation model for
            medical image interpretation, published in NEJM AI.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              onClick={handleDownloadCV}
              className="hover-elevate font-sans"
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4 mr-2" />
              {CV_LABEL}
            </Button>
            <Button
              variant="outline"
              onClick={handleEmail}
              className="hover-elevate font-sans"
              data-testid="button-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              onClick={handleLinkedIn}
              className="hover-elevate font-sans"
              data-testid="button-linkedin"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
