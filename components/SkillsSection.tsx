import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const skills = [
  { name: "Radiology", category: "medical" },
  { name: "Responsible AI", category: "ai" },
  { name: "Multimodal Models", category: "ai" },
  { name: "Clinical Validation", category: "research" },
  { name: "LLM Speech Pipelines", category: "ai" },
  { name: "Interventional Radiology AI", category: "medical" },
  { name: "Fairness & Bias Audits", category: "research" },
  { name: "Medical Imaging", category: "medical" },
  { name: "Healthcare Innovation", category: "research" },
  { name: "Deep Learning", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "Research Leadership", category: "research" },
  { name: "Foundational Models", category: "ai" },
  { name: "Evaluations", category: "research" },
  { name: "Agentic Workflows", category: "ai" },
  { name: "Declarative Frameworks (DSPy, GEPA)", category: "ai" }
];

const categoryColors = {
  medical: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
  ai: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
  research: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800"
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bridging the gap between cutting-edge AI research and clinical healthcare applications
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover-elevate ${
                  categoryColors[skill.category as keyof typeof categoryColors]
                } ${hoveredSkill === skill.name ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => console.log(`${skill.name} skill clicked`)}
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>

          {/* Category Legend */}
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-muted-foreground">Medical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">AI/ML</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-muted-foreground">Research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}