import { Briefcase, Building2, Award, Target, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Briefcase, value: "6+", label: "Years Experience" },
  { icon: Building2, value: "3", label: "Fortune 500 Companies" },
  { icon: Award, value: "5+", label: "Certifications" },
];

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering measurable results and business value",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Embracing new technologies to solve complex challenges",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach with strong leadership skills",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building scalable solutions that drive business impact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I am a passionate IT professional with over six years of experience 
              in the technology industry. Currently serving as a <span className="text-foreground font-medium">Technical Specialist at AT&T</span>, 
              I specialize in full-stack development, microservices architecture, and cloud technologies.
            </p>
            <p>
              My journey has taken me through leading organizations including <span className="text-foreground font-medium">Accenture</span> and 
              <span className="text-foreground font-medium"> Tata Consultancy Services</span>, where I've honed my skills 
              in delivering enterprise-grade solutions that meet demanding business requirements.
            </p>
            <p>
              I believe in continuous learning and innovation. My technical expertise spans 
              React.js, Angular, Spring Boot, .NET Core, and Azure cloud services. I am 
              committed to creating technology that drives efficiency and enriches user experiences.
            </p>
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <Card key={value.title} className="hover-elevate">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2.5 rounded-md bg-primary/10 shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover-elevate bg-primary/5 border-primary/10">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
