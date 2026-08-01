import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";
import {
  EMAIL_PRIMARY,
  EMAIL_SECONDARY,
  LINKEDIN_URL,
  ORCID_URL,
  RESEARCHGATE_URL,
  CV_URL,
  CV_LABEL,
} from "@/lib/identity";

export default function ContactSection() {
  const handleEmail = () => {
    const subject = encodeURIComponent("Collaboration / speaking inquiry");
    window.location.href = `mailto:${EMAIL_PRIMARY}?cc=${EMAIL_SECONDARY}&subject=${subject}`;
  };

  const handleLinkedIn = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  const handleCV = () => {
    window.open(CV_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-12 px-6 bg-paper-sunk">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Contact</h2>
        <p className="max-w-prose text-ink-quiet">
          Open to research collaborations and speaking engagements in AI and
          healthcare. Based in New Delhi, India.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleEmail} variant="outline" className="hover-elevate font-sans" data-testid="button-contact-email">
            <Mail className="w-4 h-4 mr-2" />
            {EMAIL_PRIMARY}
          </Button>
          <Button onClick={handleLinkedIn} variant="outline" className="hover-elevate font-sans" data-testid="button-contact-linkedin">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button onClick={handleCV} variant="outline" className="hover-elevate font-sans" data-testid="button-contact-cv">
            <Download className="w-4 h-4 mr-2" />
            {CV_LABEL}
          </Button>
        </div>

        <p className="font-sans text-sm text-ink-quiet">
          <a href={ORCID_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" data-testid="link-orcid">ORCID</a>
          {" · "}
          <a href={RESEARCHGATE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" data-testid="link-researchgate">ResearchGate</a>
        </p>
      </div>
    </section>
  );
}
