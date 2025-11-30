import { Monitor, Server, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  icon: typeof Monitor;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      "React.js",
      "Angular",
      ".NET Frontend",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Java Spring Boot",
      "Microservices",
      ".NET Core",
      "REST APIs",
      "Java (WildFly)",
      "SQL",
      "PL/SQL",
      "Snowflake",
      "Python",
      "Django",
      "Flask",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Azure Kubernetes Service (AKS)",
      "Azure App Services",
      "Oracle Cloud Infrastructure",
      "Jenkins CI/CD",
      "Docker",
      "Git",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-background"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover-elevate"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
