import { Mail, Linkedin, ChevronDown, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@assets/generated_images/professional_tech_hero_background.png";
import profilePhoto from "@assets/profilePhoto2025_1764534670669.jpeg";

const highlights = [
  "6+ Years Experience",
  "Full-Stack Development",
  "Cloud & DevOps",
  "Microservices Architecture",
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-900/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 p-1 shadow-2xl shadow-blue-500/30">
            <div className="w-full h-full rounded-full bg-white p-1">
              <Avatar className="w-full h-full">
                <AvatarImage src={profilePhoto} alt="Apoorva Shenoy" className="object-cover object-top" />
                <AvatarFallback className="text-4xl font-serif bg-primary text-primary-foreground">
                  AS
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 tracking-tight">
          Apoorva Shenoy
        </h1>

        <p className="text-xl sm:text-2xl text-blue-300 font-semibold mb-2">
          Technical Specialist @ AT&T
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Bengaluru, Karnataka, India</span>
        </div>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          IT professional with expertise in building enterprise-grade applications. 
          Specialized in React, Angular, Spring Boot microservices, and Azure cloud services.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {highlights.map((highlight) => (
            <Badge
              key={highlight}
              variant="secondary"
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm py-1.5 px-3"
            >
              {highlight}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button
            size="lg"
            onClick={() => scrollToSection("#experience")}
            className="shadow-lg shadow-primary/30"
            data-testid="button-view-work"
          >
            View Experience
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-contact-me"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:shenoyapoorva6@gmail.com"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            data-testid="link-email"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <Mail className="h-4 w-4" />
            </div>
            <span className="text-sm">shenoyapoorva6@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/apoorva-shenoy-manel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            data-testid="link-linkedin"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <Linkedin className="h-4 w-4" />
            </div>
            <span className="text-sm">LinkedIn Profile</span>
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
