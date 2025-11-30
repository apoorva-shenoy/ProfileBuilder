import { Briefcase, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Briefcase, value: "6+", label: "Years Experience" },
  { icon: Building2, value: "3", label: "Major Companies" },
  { icon: Award, value: "5+", label: "Certifications" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-center mb-12">
          About Me
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
          <p>
            I am a passionate IT professional and a positive, self-motivated individual 
            with 6+ years of experience in the IT industry. I believe that life is about 
            solving problems, telling stories, and making a difference.
          </p>
          <p>
            Over the past six years, I have refined and strengthened my skills in 
            delivering robust, scalable solutions while adapting to evolving technologies 
            and business needs. My goal is to leverage my technical expertise and business 
            acumen to tackle new and exciting challenges.
          </p>
          <p>
            I strive to blend passion with purpose, transforming ideas into innovative 
            solutions that drive impact and progress. I am committed to continuous 
            learning and innovation, embracing challenges as opportunities to grow.
          </p>
          <p>
            My vision is to create technology that not only drives efficiency and 
            fosters collaboration but also enriches the experiences of the people it serves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover-elevate">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
