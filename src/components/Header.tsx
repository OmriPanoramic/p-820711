import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection("section1")}
            className="flex items-center space-x-2"
          >
            <div className="font-bold text-xl text-primary">
              Panoramic Power
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("section2")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            What's New?
          </button>
          <button
            onClick={() => scrollToSection("section3")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Effortless Migration
          </button>
          <button
            onClick={() => scrollToSection("section4")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("section5")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Optimize Experience
          </button>
          <button
            onClick={() => scrollToSection("section6")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("section7")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/demo">Book a Demo</Link>
          </Button>
          <Button asChild>
            <Link href="/upgrade">Upgrade Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-background border-b">
            <button
              onClick={() => scrollToSection("section2")}
              className="text-sm text-muted-foreground transition-colors hover:text-primary text-left"
            >
              What's New?
            </button>
            <button
              onClick={() => scrollToSection("section3")}
              className="text-sm text-muted-foreground transition-colors hover:text-primary text-left"
            >
              Effortless Migration
            </button>
            <button
              onClick={() => scrollToSection("section4")}
              className="text-sm text-muted-foreground transition-colors hover:text-primary text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("section5")}
              className="text-sm text-muted-foreground transition-colors hover:text-primary text-left"
            >
              Optimize Experience
            </button>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-4 pt-4">
              <Button variant="ghost" asChild className="w-full">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/upgrade">Upgrade Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
