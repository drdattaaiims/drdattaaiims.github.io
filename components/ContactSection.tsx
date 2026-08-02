import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";
import Section from "@/components/Section";
import {
  EMAIL_PRIMARY,
  EMAIL_SECONDARY,
  LINKEDIN_URL,
  ORCID_URL,
  RESEARCHGATE_URL,
  SCHOLAR_URL,
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
    <Section id="contact" heading="Contact" tone="sunk">
      <p className="max-w-prose text-ink-quiet">
        Open to research collaborations and speaking engagements in AI and
        healthcare. Based in New Delhi, India.
      </p>

      <div className="flex flex-wrap gap-3 mt-5">
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

      <p className="font-sans text-sm text-ink-quiet mt-5">
        <a href={ORCID_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" data-testid="link-orcid">ORCID</a>
        {" · "}
        <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" data-testid="link-scholar">Google Scholar</a>
        {" · "}
        <a href={RESEARCHGATE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline" data-testid="link-researchgate">ResearchGate</a>
      </p>
    </Section>
  );
}
