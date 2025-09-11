import { useState } from "react";

const partners = [
  {
    id: "ashoka",
    name: "Ashoka University",
    logo: "AU",
    description: "Faculty Fellow, KCDH-A"
  },
  {
    id: "harvard",
    name: "Harvard Medical School",
    logo: "HMS",
    description: "Rajpurkar Lab"
  },
  {
    id: "aiims",
    name: "AIIMS Delhi",
    logo: "AIIMS",
    description: "Senior Resident"
  },
  {
    id: "jipmer",
    name: "JIPMER",
    logo: "JIPMER",
    description: "Gold Medallist"
  },
  {
    id: "kmc",
    name: "KMC Manipal",
    logo: "KMC",
    description: "Medical College"
  },
  {
    id: "iit-jodhpur",
    name: "IIT Jodhpur",
    logo: "IITJ",
    description: "Technology Institute"
  },
  {
    id: "nus",
    name: "NUS Singapore",
    logo: "NUS",
    description: "Research Collaboration"
  }
];

export default function PartnerLogos() {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 border-t bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Affiliations and Collaborators spanning across</h2>
            <p className="text-muted-foreground text-sm">
              Collaborating with leading academic institutions and professional organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`group relative flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 cursor-pointer hover-elevate ${
                  hoveredPartner === partner.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                onClick={() => console.log(`Partner ${partner.id} clicked`)}
                data-testid={`partner-${partner.id}`}
              >
                {/* Logo placeholder - using text initials for this prototype */}
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  hoveredPartner === partner.id
                    ? 'border-primary bg-primary/10'
                    : 'border-muted-foreground/20 bg-background'
                }`}>
                  {partner.logo}
                </div>

                {/* Name and description */}
                <div className="mt-2 text-center space-y-1">
                  <p className="text-xs font-medium leading-tight">
                    {partner.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {partner.description}
                  </p>
                </div>

                {/* Tooltip on hover */}
                {hoveredPartner === partner.id && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    {partner.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}