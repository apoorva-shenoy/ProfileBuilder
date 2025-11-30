import { Monitor, Server, Cloud, Database, Code2, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  icon: typeof Monitor;
  color: string;
  skills: { name: string; level?: "Expert" | "Advanced" | "Proficient" }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-blue-500",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Angular", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: ".NET Frontend", level: "Advanced" },
      { name: "HTML5/CSS3", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    skills: [
      { name: "Java Spring Boot", level: "Expert" },
      { name: "Microservices", level: "Expert" },
      { name: ".NET Core", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Python", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-500",
    skills: [
      { name: "Azure AKS", level: "Advanced" },
      { name: "Azure App Services", level: "Advanced" },
      { name: "Jenkins CI/CD", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Oracle Cloud", level: "Proficient" },
      { name: "Git", level: "Expert" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-orange-500",
    skills: [
      { name: "SQL", level: "Expert" },
      { name: "PL/SQL", level: "Advanced" },
      { name: "Snowflake", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
    ],
  },
  {
    title: "Architecture",
    icon: Code2,
    color: "text-purple-500",
    skills: [
      { name: "Microservices", level: "Expert" },
      { name: "RESTful Design", level: "Expert" },
      { name: "System Design", level: "Advanced" },
      { name: "API Integration", level: "Expert" },
    ],
  },
  {
    title: "Methodologies",
    icon: Settings,
    color: "text-pink-500",
    skills: [
      { name: "Agile/Scrum", level: "Expert" },
      { name: "SDLC", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "TDD", level: "Proficient" },
    ],
  },
];

const getLevelColor = (level?: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    case "Advanced":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "Proficient":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
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
                      className={`${skill.level ? getLevelColor(skill.level) : ""}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
            Expert
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/30" />
            Advanced
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500/20 border border-orange-500/30" />
            Proficient
          </div>
        </div>
      </div>
    </section>
  );
}
