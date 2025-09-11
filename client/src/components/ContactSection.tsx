import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Download, MessageSquare, Users } from "lucide-react";

const contactMethods = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    primary: "suvrankar@gmail.com",
    secondary: "suvrankar.datta@ashoka.edu.in",
    action: "Send Email"
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    primary: "linkedin.com/in/suvrankardatta",
    secondary: "Professional Network",
    action: "Connect"
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    primary: "+91 76399 86241",
    secondary: "India (IST)",
    action: "Call"
  }
];

const ctaButtons = [
  {
    id: "cv",
    icon: Download,
    label: "Download CV",
    variant: "default" as const,
    description: "Complete academic & professional portfolio"
  },
  {
    id: "speak",
    icon: MessageSquare,
    label: "Invite to Speak",
    variant: "outline" as const,
    description: "Keynotes, panels, and conferences"
  },
  {
    id: "collaborate",
    icon: Users,
    label: "Collaborate",
    variant: "outline" as const,
    description: "Research partnerships & consulting"
  }
];

export default function ContactSection() {
  const handleContactMethod = (method: string) => {
    console.log(`Contact method ${method} clicked`);
    // TODO: Implement contact method handlers
  };

  const handleCTA = (action: string) => {
    console.log(`CTA ${action} clicked`);
    // TODO: Implement CTA handlers (modals, forms, downloads)
  };

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Contact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open to collaborations, speaking engagements, and research partnerships in AI and healthcare
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <Card className="hover-elevate">
              <CardHeader>
                <h3 className="text-xl font-semibold">Get In Touch</h3>
                <p className="text-muted-foreground text-sm">
                  Reach out for professional inquiries and collaborations
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors hover-elevate"
                      onClick={() => handleContactMethod(method.id)}
                      data-testid={`contact-method-${method.id}`}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">{method.label}</p>
                          <Badge variant="outline" className="text-xs">
                            {method.action}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-mono">
                          {method.primary}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.secondary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover-elevate">
              <CardHeader>
                <h3 className="text-xl font-semibold">Quick Actions</h3>
                <p className="text-muted-foreground text-sm">
                  Professional services and collaboration opportunities
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {ctaButtons.map((cta) => {
                  const IconComponent = cta.icon;
                  return (
                    <div key={cta.id} className="space-y-2">
                      <Button
                        variant={cta.variant}
                        onClick={() => handleCTA(cta.id)}
                        className="w-full justify-start hover-elevate"
                        data-testid={`cta-${cta.id}`}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {cta.label}
                      </Button>
                      <p className="text-xs text-muted-foreground pl-6">
                        {cta.description}
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="text-center p-6 bg-card/50 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              Currently based in{" "}
              <span className="text-foreground font-medium">New Delhi, India</span>{" "}
              • Available for{" "}
              <span className="text-foreground font-medium">remote collaborations</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">international speaking engagements</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}