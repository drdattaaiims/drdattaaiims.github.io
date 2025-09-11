import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MessageSquare, Users } from "lucide-react";
import profileImage from "@assets/suvrankar_profile.jpg";

export default function HeroSection() {
  const handleDownloadCV = () => {
    console.log('Download CV triggered');
    // TODO: Implement actual CV download functionality
  };

  const handleInviteToSpeak = () => {
    console.log('Invite to speak triggered');
    // TODO: Implement contact form modal
  };

  const handleCollaborate = () => {
    console.log('Collaborate triggered');
    // TODO: Implement collaboration form modal
  };

  const handleRSNA2025 = () => {
    console.log('RSNA 2025 meet clicked');
    // TODO: Implement RSNA 2025 meetup form
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Faculty Fellow • Ashoka University
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Radiologist{" "}
              <span className="text-primary">×</span>{" "}
              AI Researcher
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Faculty Fellow at Ashoka University (KCDH-A); Lead, Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab).
            </p>
            
            <p className="text-lg text-foreground font-medium">
              Building responsible, agentic AI workflows for radiology and healthcare.
            </p>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 font-mono text-sm">
            <div className="text-primary">RSNA Trainee Research Prize 2023</div>
            <div className="text-primary">•</div>
            <div className="text-primary">MICCAI 2025 Early Accept</div>
            <div className="text-primary">•</div>
            <div className="text-primary">10 RSNA 2025 Acceptances</div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleDownloadCV}
              className="hover-elevate"
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleInviteToSpeak}
              className="hover-elevate"
              data-testid="button-invite-speak"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Invite to Speak
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleCollaborate}
              className="hover-elevate"
              data-testid="button-collaborate"
            >
              <Users className="w-4 h-4 mr-2" />
              Collaborate
            </Button>
            
            <Button 
              onClick={handleRSNA2025}
              className="hover-elevate bg-primary text-primary-foreground"
              data-testid="button-rsna-2025"
            >
              Let's meet at RSNA 2025
            </Button>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 lg:w-96 lg:h-[30rem] rounded-2xl overflow-hidden bg-black border">
              <img
                src={profileImage}
                alt="Dr. Suvrankar Datta"
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
            {/* Glassmorphism accent */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}