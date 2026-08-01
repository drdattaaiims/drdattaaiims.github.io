import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";
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
    <section id="hero" className="px-6 pt-20 pb-12 border-b border-rule">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-[180px_1fr] gap-8 items-start">
        <img
          src={profileImage}
          alt="Suvrankar Datta"
          className="w-[180px] h-[180px] object-cover rounded-sm border border-rule"
          data-testid="img-profile"
        />

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold leading-tight">
              Suvrankar Datta
            </h1>
            <p className="font-sans text-sm text-ink-quiet mt-1">
              Radiologist and health-AI researcher &middot; Faculty Fellow, Koita Centre
              for Digital Health, Ashoka University &middot; Lab Lead, CRASH Lab
              &middot; Visiting Researcher, Rajpurkar Lab, Harvard Medical School
            </p>
          </div>

          <p className="max-w-prose leading-relaxed">
            I work on agentic and multimodal AI systems for radiology — where they
            fail under distribution shift, and how to build evaluation and
            governance around them before deployment. My MICCAI 2025 paper on
            rib-fracture diagnosis won the RSNA Trainee Research Prize 2023, the
            only such award to an Indian resident that year, and I am a co-author
            on MedVersa, a generalist foundation model for medical image
            interpretation, with the Rajpurkar Lab at Harvard Medical School.
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
