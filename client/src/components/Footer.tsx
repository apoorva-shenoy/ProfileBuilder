import { Heart } from "lucide-react";
import { SiReact } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 bg-card border-t border-border"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {currentYear} Apoorva Shenoy. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Created using 
            <SiReact className="h-4 w-4 text-[#61DAFB] mx-1" /> React JS
          </p>
        </div>
      </div>
    </footer>
  );
}
