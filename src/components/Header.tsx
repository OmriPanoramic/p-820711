import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      const headerOffset = 100; // 16 * 4 = 64px (h-16 class)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDemoModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("section1")}
              className="flex items-center space-x-2"
            >
              <div className="text-xl font-bold text-primary">
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
          <nav className="hidden items-center gap-6 lg:flex">
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
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost" asChild>
              <a onClick={handleDemoClick} href="#">
                Book a Demo
              </a>
            </Button>
            <Button asChild>
              <Link to="/upgrade">Upgrade Now</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col space-y-4 border-b bg-background px-4 py-6">
              <button
                onClick={() => scrollToSection("section2")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                What's New?
              </button>
              <button
                onClick={() => scrollToSection("section3")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Effortless Migration
              </button>
              <button
                onClick={() => scrollToSection("section4")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("section5")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
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
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="ghost" asChild className="w-full">
                  <a onClick={handleDemoClick} href="#">
                    Book a Demo
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/upgrade">Upgrade Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};
