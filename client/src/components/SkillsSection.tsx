import { Monitor, Server, Cloud, Database, Code2, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  icon: typeof Monitor;
  color: string;
  skills: { name: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-blue-500",
    skills: [
      { name: "React.js" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: ".NET Frontend" },
      { name: "HTML5/CSS3" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    skills: [
      { name: "Java Spring Boot" },
      { name: "Microservices" },
      { name: ".NET Core" },
      { name: "REST APIs" },
      { name: "Python" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-500",
    skills: [
      { name: "Azure AKS" },
      { name: "Azure App Services" },
      { name: "Jenkins CI/CD" },
      { name: "Docker" },
      { name: "Oracle Cloud" },
      { name: "Git" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-orange-500",
    skills: [
      { name: "SQL" },
      { name: "PL/SQL" },
      { name: "Snowflake" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Architecture",
    icon: Code2,
    color: "text-purple-500",
    skills: [
      { name: "Microservices" },
      { name: "RESTful Design" },
      { name: "System Design" },
      { name: "API Integration" },
    ],
  },
  {
    title: "Methodologies",
    icon: Settings,
    color: "text-pink-500",
    skills: [
      { name: "Agile/Scrum" },
      { name: "SDLC" },
      { name: "CI/CD" },
      { name: "TDD" },
    ],
  },
];

const getCategoryColor = (categoryColor: string) => {
  switch (categoryColor) {
    case "text-blue-500":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "text-green-500":
      return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    case "text-cyan-500":
      return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
    case "text-orange-500":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
    case "text-purple-500":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    case "text-pink-500":
      return "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20";
    default:
      return "";
  }
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-background"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-4">
          Technical Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive skill set spanning frontend, backend, cloud, and DevOps technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover-elevate overflow-visible"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-md bg-muted`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={getCategoryColor(category.color)}
                    >
                      {skill.name}
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
