import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: "ashoka",
    title: "Faculty Fellow, Koita Centre for Digital Health",
    organization: "Ashoka University (India)",
    period: "2025 – present",
    description: "Founder and Lab Lead, Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab); Lead Responsible AI efforts, multimodal radiology research, establish India's leading radiology AI and healthcare AI lab",
    tags: ["Leadership", "Research", "AI Ethics"]
  },
  {
    id: "harvard",
    title: "Member, Medical AI Bootcamp",
    organization: "Rajpurkar Lab",
    period: "2024 – present",
    description: "Clinical validation of foundational AI algorithms in Radiology, create SOTA multimodal foundational models",
    tags: ["Research", "Clinical Validation"]
  },
  {
    id: "aiims-resident",
    title: "Senior Resident, Dept. of Radiodiagnosis & IR",
    organization: "AIIMS Delhi",
    period: "2023 – 2024",
    description: "Core clinical work, audited AI-augmented workflows, teaching Junior Resident, part-time AI research (>10k+ Images Annotated)",
    tags: ["Clinical Work", "Teaching", "AI Research"]
  },
  {
    id: "md",
    title: "M.D. (Radiodiagnosis & Interventional Radiology)",
    organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    period: "2020 – 2023",
    description: "Specialized training in advanced diagnostic imaging and interventional procedures with focus on AI applications in radiology",
    tags: ["Medical Training", "Specialization"]
  },
  {
    id: "mbbs",
    title: "M.B.B.S. (Gold Medallist)",
    organization: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry",
    period: "2014 – 2018",
    description: "Bachelor of Medicine and Surgery with Gold Medal distinction, establishing foundation for medical career",
    tags: ["Medical Degree", "Gold Medal", "Excellence"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience Timeline</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey from medical excellence to pioneering AI research in healthcare
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover-elevate cursor-pointer" onClick={() => console.log(`Experience ${exp.id} clicked`)}>
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <Badge variant="outline" className="text-xs">
                              {exp.period}
                            </Badge>
                            <h3 className="font-semibold text-lg leading-tight" data-testid={`experience-title-${exp.id}`}>
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium">
                              {exp.organization}
                            </p>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                                data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}