import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Calendar, MapPin, Download } from "lucide-react";
import cvFile from "@assets/suvrankar_cv.pdf";

const talks = [
  {
    id: "aocr-2025",
    title: "Asia Oceania Congress of Radiology (AOCR)",
    type: "Keynote",
    date: "Jan 2025",
    location: "Asia Pacific",
    topic: "AI in Radiology: Future Perspectives",
    status: "Completed"
  },
  {
    id: "nasscom-2024",
    title: "NASSCOM Future Forge Healthtech Roundtable",
    type: "Keynote",
    date: "Oct 2024",
    location: "Bangalore, India",
    topic: "Healthcare AI Innovation",
    status: "Completed"
  },
  {
    id: "ficci-2024",
    title: "FICCI Heal",
    type: "Panel",
    date: "Nov 2024",
    location: "New Delhi, India",
    topic: "Digital Health Transformation",
    status: "Completed"
  },
  {
    id: "ltmmc-2024",
    title: "Multimodal AI Symposium",
    type: "Keynote",
    date: "Sept 2024",
    location: "LTMMC & Sion Hospital, Mumbai",
    topic: "Multimodal AI in Healthcare",
    status: "Completed"
  },
  {
    id: "gapio-2023",
    title: "GAPIO 2023",
    type: "Guest Speaker",
    date: "2023",
    location: "Ahmedabad, India",
    topic: "India's Digital Healthcare Transformation",
    status: "Completed"
  },
  {
    id: "iit-jodhpur",
    title: "IIT Jodhpur Industry Day",
    type: "Panel",
    date: "2021",
    location: "Jodhpur, India",
    topic: "Industry-Academia Collaboration",
    status: "Completed"
  }
];

const typeColors = {
  Keynote: "bg-primary text-primary-foreground",
  Panel: "bg-secondary text-secondary-foreground",
  "Guest Speaker": "bg-accent text-accent-foreground"
};

export default function TalksSection() {
  const handleTalkClick = (talkId: string) => {
    console.log(`Talk ${talkId} clicked`);
    // TODO: Open talk details or external link
  };

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Talks & Panels</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing insights on AI, healthcare innovation, and responsible technology deployment across global forums
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talks.map((talk) => (
              <Card
                key={talk.id}
                className="hover-elevate cursor-pointer transition-all duration-300"
                onClick={() => handleTalkClick(talk.id)}
                data-testid={`talk-card-${talk.id}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <Badge
                      className={typeColors[talk.type as keyof typeof typeColors]}
                    >
                      <Mic className="w-3 h-3 mr-1" />
                      {talk.type}
                    </Badge>
                    <Badge
                      variant={talk.status === 'Upcoming' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {talk.status}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg leading-tight">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {talk.topic}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {talk.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {talk.location}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Download className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => {
                const link = document.createElement('a');
                link.href = cvFile;
                link.download = 'Suvrankar_Datta_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              data-testid="button-check-other-talks"
            >
              Check other
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}