import { GraduationCap, Calendar, Award, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
}

interface Certification {
  title: string;
  issuer: string;
}

const education: Education[] = [
  {
    institution: "Visvesvaraya Technological University",
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science Engineering",
    duration: "August 2015 - September 2019",
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "PUC (Pre-University Course)",
    field: "Physics, Chemistry, Mathematics, Computer Science",
    duration: "April 2013 - April 2015",
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "SSLC (Secondary School Leaving Certificate)",
    field: "Class X",
    duration: "April 2012 - March 2013",
  },
];

const certifications: Certification[] = [
  { title: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft" },
  { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { title: "Oracle Cloud Infrastructure Foundation 2021 Associate", issuer: "Oracle" },
  { title: "Creating Spring Boot Microservices", issuer: "LinkedIn Learning" },
  { title: "JavaScript, jQuery, and JSON", issuer: "Coursera" },
];

const languages = [
  { name: "Konkani", level: "Native/Bilingual" },
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Professional Working" },
  { name: "Kannada", level: "Elementary" },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-card"
      data-testid="section-education"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            {education.map((edu) => (
              <Card
                key={edu.institution + edu.degree}
                className="hover-elevate"
                data-testid={`card-education-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.field}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.duration}
                  </div>
                </CardContent>
              </Card>
            ))}

            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 pt-4">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Languages
            </h3>
            <Card className="hover-elevate" data-testid="card-languages">
              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang.name} variant="outline" className="py-1.5">
                      {lang.name} - {lang.level}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="hover-elevate"
                  data-testid={`card-certification-${cert.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
                >
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 pt-4">
              <Award className="h-5 w-5 text-primary" />
              Honors & Awards
            </h3>
            <Card className="hover-elevate" data-testid="card-honors">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">
                    Technical Paper Presentation
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Academic Achievement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
