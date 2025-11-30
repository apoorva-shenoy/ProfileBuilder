import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
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
    roles: [
      {
        title: "Technical Specialist",
        duration: "September 2023 - Present (2+ years)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Developed React JS application for database operations management in performance-critical environments",
          "Created dynamic, responsive user interfaces using Angular",
          "Built and maintained frontend components using .NET technologies",
          "Designed and deployed microservices-based architectures using Java Spring Boot",
          "Developed seamless Snowflake data integration solutions",
          "Created robust and scalable REST APIs using .NET Core",
          "Deployed containerized applications on Azure Kubernetes Service (AKS)",
          "Deployed and managed applications using Azure App Services",
          "Utilized Jenkins for CI/CD pipeline automation",
        ],
        technologies: [
          "React.js",
          "Angular",
          ".NET",
          "Spring Boot",
          "Snowflake",
          "Azure AKS",
          "Jenkins",
          "SQL",
        ],
      },
    ],
  },
  {
    company: "Accenture",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "April 2022 - August 2023 (1 year 5 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Led agile teams, ensuring timely delivery of high-quality solutions",
          "Oversaw end-to-end software development lifecycle from design to deployment",
          "Built intuitive user interfaces using Angular",
          "Created RESTful APIs for seamless frontend-backend communication",
          "Developed scalable backend services using .NET Core",
        ],
        technologies: ["Angular", ".NET Core", "REST APIs", "Agile"],
      },
      {
        title: "Software Engineer",
        duration: "September 2021 - March 2022 (7 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Contributed to innovative software solutions with cross-functional teams",
        ],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    roles: [
      {
        title: "System Engineer",
        duration: "July 2020 - August 2021 (1 year 2 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Worked on developing process workflow manager tool for R2R (Record to Report)",
          "Handled Finance and Accounting end-to-end processes",
        ],
      },
      {
        title: "Assistant System Engineer - Developer",
        duration: "April 2019 - June 2020 (1 year 3 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Part of Technology and Innovation development team for Landmark Group",
          "Worked on API Integration and web services",
          "Participated in Project Planning and Implementing Use-case scenarios",
          "Part of Software Security Assessment (SSA) including Fortify Scan, Web Inspect, and VAPT",
          "Prepared High Level Design (HDD) and Low Level Design (LDD) documents",
        ],
        technologies: ["API Integration", "Web Services", "Security Assessment"],
      },
      {
        title: "Assistant Systems Engineer",
        duration: "June 2019 - April 2020 (11 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Developer role in retail project for Landmark Group",
          "Participated in project planning and requirement gathering",
          "Part of sentinel data migration activity",
        ],
      },
    ],
  },
  {
    company: "Fiabilite Network Solutions",
    roles: [
      {
        title: "Internship Trainee",
        duration: "July 2017 - August 2017 (2 months)",
        location: "Bengaluru, Karnataka, India",
        highlights: [
          "Utilized NumPy, Pandas, and Matplotlib for data analysis and visualization",
          "Contributed to scalable web solutions using Django and Flask",
          "Worked collaboratively in cross-functional teams",
        ],
        technologies: ["Python", "NumPy", "Pandas", "Django", "Flask"],
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, expIndex) => (
              <div key={exp.company} className="relative">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10" />

                <div
                  className={`ml-10 md:ml-0 ${
                    expIndex % 2 === 0
                      ? "md:pr-[52%]"
                      : "md:pl-[52%]"
                  }`}
                >
                  <Card className="hover-elevate" data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-serif text-xl">
                        {exp.company}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {exp.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className={roleIndex > 0 ? "pt-4 border-t border-border" : ""}
                        >
                          <h4 className="font-semibold text-foreground mb-1">
                            {role.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {role.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {role.location}
                            </span>
                          </div>
                          <ul className="space-y-1.5 text-sm text-muted-foreground mb-3">
                            {role.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">-</span>
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
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
