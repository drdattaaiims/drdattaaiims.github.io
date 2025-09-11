const partners = [
  "Ashoka University",
  "Harvard Medical School",
  "AIIMS Delhi",
  "JIPMER",
  "KMC Manipal",
  "IIT Jodhpur",
  "NUS Singapore"
];

export default function PartnerLogos() {
  // Create a doubled array for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-16 px-6 border-t bg-muted/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Affiliations and Collaborators spanning across</h2>
            <p className="text-muted-foreground text-sm">
              Collaborating with leading academic institutions and professional organizations worldwide
            </p>
          </div>

          {/* Scrolling partners */}
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap">
              {scrollingPartners.map((partner, index) => (
                <span
                  key={index}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors duration-300 mx-8 select-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                  data-testid={`partner-${index}`}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}