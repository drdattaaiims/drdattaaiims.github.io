import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Users } from "lucide-react";

const awards = [
  {
    id: "rsna-2023",
    title: "RSNA Trainee Research Prize 2023",
    organization: "Radiological Society of North America",
    year: "2023",
    description: "Only award to an Indian Resident for AIRib Framework research",
    category: "Research Excellence",
    icon: Trophy
  },
  {
    id: "young-achiever-2024",
    title: "Young Achiever in Radiology 2024",
    organization: "National Diagnostic Summit",
    year: "2024",
    description: "Recognition for outstanding contributions to radiology and AI",
    category: "Professional Recognition",
    icon: Star
  },
  {
    id: "gaims-2022",
    title: "Global Healthcare Achievers' Award",
    organization: "GAIMS",
    year: "2022",
    description: "Exceptional Leadership in the field of Medicine and Healthcare",
    category: "Leadership",
    icon: Award
  },
  {
    id: "mbbs-gold",
    title: "Gold Medal - M.B.B.S.",
    organization: "JIPMER, Puducherry",
    year: "2018",
    description: "Academic excellence in Bachelor of Medicine and Surgery",
    category: "Academic Excellence",
    icon: Trophy
  }
];

const leadership = [
  {
    id: "faima-president",
    title: "President",
    organization: "Federation of All India Medical Associations (FAIMA)",
    period: "Current",
    description: "Leading national medical association representing healthcare professionals across India"
  },
  {
    id: "rda-vp",
    title: "Vice President",
    organization: "Resident Doctors Association (RDA), AIIMS Delhi",
    period: "Previous",
    description: "Advocated for resident doctors' rights and healthcare improvements"
  },
  {
    id: "naford-vp",
    title: "Vice President",
    organization: "NAFORD (AIIMS and INIs)",
    period: "Previous",
    description: "Represented interests of medical professionals in national institutes"
  }
];

export default function AwardsSection() {
  const handleAwardClick = (awardId: string) => {
    console.log(`Award ${awardId} clicked`);
    // TODO: Show award details modal
  };

  const handleLeadershipClick = (roleId: string) => {
    console.log(`Leadership role ${roleId} clicked`);
    // TODO: Show role details modal
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Awards Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Leadership & Awards</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Recognition for research excellence, clinical leadership, and contributions to healthcare innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award) => {
                const IconComponent = award.icon;
                return (
                  <Card
                    key={award.id}
                    className="hover-elevate cursor-pointer transition-all duration-300"
                    onClick={() => handleAwardClick(award.id)}
                    data-testid={`award-card-${award.id}`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-semibold text-lg leading-tight">
                                {award.title}
                              </h3>
                              <p className="text-primary font-medium text-sm">
                                {award.organization}
                              </p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {award.year}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {award.description}
                          </p>

                          <Badge variant="secondary" className="text-xs w-fit">
                            {award.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">Organizational Leadership</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Active leadership roles in medical associations and professional organizations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {leadership.map((role) => (
                <Card
                  key={role.id}
                  className="hover-elevate cursor-pointer transition-all duration-300"
                  onClick={() => handleLeadershipClick(role.id)}
                  data-testid={`leadership-card-${role.id}`}
                >
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {role.period}
                      </Badge>
                      <h4 className="font-semibold text-lg">
                        {role.title}
                      </h4>
                      <p className="text-primary font-medium text-sm">
                        {role.organization}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}