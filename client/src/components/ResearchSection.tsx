import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";

const flagshipProjects = [
  {
    id: "airib",
    title: "AIRib Framework",
    description: "Development of an End-to-End Pipeline for the Automated Detection, Characterisation, Prognostication and Reporting of Traumatic Rib Fractures from CT Scans",
    achievement: "RSNA Trainee Research Prize 2023",
    year: "2023",
    status: "Award Winner",
    tags: ["Computer Vision", "Medical Imaging", "Clinical AI"]
  },
  {
    id: "miccai",
    title: "Fine-Grained Rib Fracture Diagnosis",
    description: "Fine-Grained Rib Fracture Diagnosis with Hyperbolic Embeddings: A Detailed Annotation Framework and Multi-Label Classification Model",
    achievement: "MICCAI 2025 Early Accept (Top 9% globally)",
    year: "2025",
    status: "Early Accept",
    tags: ["Deep Learning", "Hyperbolic Embeddings", "Multi-Label Classification"]
  },
  {
    id: "llm-speech",
    title: "LLM Speech-to-Report Pipelines",
    description: "Optimising Large Language Model (LLM) augmented Speech Recognition for Radiology Reporting: Achieving Near-Zero Error Rates through advanced Prompt Engineering",
    achievement: "RSNA 2023 Cutting-Edge Oral Presentations (2 accepts)",
    year: "2023",
    status: "Published",
    tags: ["LLM", "Speech Recognition", "Radiology Reporting"]
  },
  {
    id: "medversa",
    title: "MedVersa Foundation Model",
    description: "A Generalist Foundation Model for Medical Image Interpretation. Collaborative work with Rajpurkar Lab, Harvard Medical School",
    achievement: "Under Review: NEJM AI",
    year: "2024",
    status: "Under Review",
    tags: ["Foundation Models", "Medical AI", "Harvard Collaboration"]
  }
];

export default function ResearchSection() {
  const handleProjectClick = (projectId: string) => {
    console.log(`Research project ${projectId} clicked`);
    // TODO: Open project details modal or navigate to project page
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Research & Flagship Projects</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Pioneering research at the intersection of AI and healthcare, with recognition from leading international conferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {flagshipProjects.map((project) => (
              <Card
                key={project.id}
                className="hover-elevate cursor-pointer transition-all duration-300"
                onClick={() => handleProjectClick(project.id)}
                data-testid={`project-card-${project.id}`}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-semibold text-xl leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <Badge variant="outline" className="text-xs font-medium">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 bg-primary/5 rounded-lg border-l-2 border-primary">
                      <p className="text-sm font-medium text-primary">
                        {project.achievement}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => console.log('View all research clicked')}
              data-testid="button-view-all-research"
            >
              View All Publications & Research
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}