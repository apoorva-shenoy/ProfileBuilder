import { MapPin, Calendar, Building2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  logo: string;
  roles: {
    title: string;
    duration: string;
    location: string;
    highlights: string[];
    technologies?: string[];
  }[];
}

const experiences: Experience[] = [
  {
    company: "AT&T",
    logo: "AT",
    roles: [
      {
        title: "Technical Specialist",
        duration: "September 2023 - Present",
        location: "Bengaluru, India",
        highlights: [
          "Developed React JS applications for database operations management in performance-critical environments",
          "Designed and deployed microservices architectures using Java Spring Boot ensuring scalability and fault tolerance",
          "Built and deployed containerized applications on Azure Kubernetes Service (AKS)",
          "Created robust REST APIs using .NET Core with seamless Snowflake data integration",
          "Implemented Jenkins CI/CD pipelines improving delivery speed and consistency",
        ],
        technologies: [
          "React.js",
          "Angular",
          "Spring Boot",
          ".NET Core",
          "Azure AKS",
          "Snowflake",
          "Jenkins",
        ],
      },
    ],
  },
  {
    company: "Accenture",
    logo: "AC",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "April 2022 - August 2023",
        location: "Bengaluru, India",
        highlights: [
          "Led agile teams ensuring timely delivery of high-quality solutions while mentoring junior developers",
          "Oversaw end-to-end SDLC from design to deployment for enterprise applications",
          "Built intuitive Angular user interfaces enhancing user experience and engagement",
          "Developed scalable backend services using .NET Core with RESTful API design",
        ],
        technologies: ["Angular", ".NET Core", "REST APIs", "Agile", "SDLC"],
      },
      {
        title: "Software Engineer",
        duration: "September 2021 - March 2022",
        location: "Bengaluru, India",
        highlights: [
          "Contributed to innovative software solutions collaborating with cross-functional teams",
        ],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    logo: "TCS",
    roles: [
      {
        title: "System Engineer",
        duration: "July 2020 - August 2021",
        location: "Bengaluru, India",
        highlights: [
          "Developed process workflow manager tool for Record to Report (R2R) finance processes",
          "Managed end-to-end Finance and Accounting automation solutions",
        ],
      },
      {
        title: "Assistant System Engineer - Developer",
        duration: "April 2019 - June 2020",
        location: "Bengaluru, India",
        highlights: [
          "Part of Technology and Innovation team for Landmark Group retail client",
          "Worked on API Integration and web services development",
          "Led Software Security Assessment including Fortify Scan and VAPT testing",
          "Prepared High Level and Low Level Design documentation",
        ],
        technologies: ["API Integration", "Web Services", "Security Assessment"],
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-card"
      data-testid="section-experience"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A track record of delivering impactful solutions at leading technology companies
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.company}
              className="hover-elevate overflow-visible"
              data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{exp.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.roles.length > 1 ? `${exp.roles.length} positions` : exp.roles[0].duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 ml-0 md:ml-18">
                  {exp.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={roleIndex > 0 ? "pt-5 border-t border-border" : ""}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {role.title}
                        </h4>
                        <ChevronRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                        <span className="text-sm text-muted-foreground">{role.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3 w-3" />
                        {role.location}
                      </div>

                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        {role.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {role.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {role.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
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
