import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-background"
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to connecting with fellow technology enthusiasts. 
          Feel free to reach out through email or LinkedIn.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <Card className="hover-elevate" data-testid="card-contact-email">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a
                href="mailto:shenoyapoorva6@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-contact-email"
              >
                shenoyapoorva6@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-contact-linkedin">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/apoorva-shenoy-manel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-contact-linkedin"
              >
                apoorva-shenoy-manel
              </a>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-contact-location">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Karnataka, India
              </p>
            </CardContent>
          </Card>
        </div>

        <Button
          size="lg"
          onClick={() => window.open("mailto:shenoyapoorva6@gmail.com")}
          data-testid="button-send-message"
        >
          <Send className="mr-2 h-4 w-4" />
          Send a Message
        </Button>
      </div>
    </section>
  );
}
