import { Mail, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import heroBackground from "@assets/generated_images/professional_tech_hero_background.png";
import profilePhoto from "@assets/profilePhoto2025_1764534670669.jpeg";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white/20 shadow-xl">
          <AvatarImage src={profilePhoto} alt="Apoorva Shenoy" className="object-cover" />
          <AvatarFallback className="text-4xl font-serif bg-primary text-primary-foreground">
            AS
          </AvatarFallback>
        </Avatar>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Apoorva Shenoy
        </h1>

        <p className="text-xl sm:text-2xl text-blue-200 font-medium mb-4">
          Technical Specialist @ AT&T
        </p>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate IT professional with 6+ years of experience delivering robust, 
          scalable solutions. Blending technical expertise with business acumen to 
          transform ideas into innovative solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection("#experience")}
            className="bg-primary text-primary-foreground border border-primary-border"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:shenoyapoorva6@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm">shenoyapoorva6@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/apoorva-shenoy-manel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
