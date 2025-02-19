import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { Section1 } from "@/components/section1";
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* You can replace this with your actual logo */}
            <div className="font-bold text-xl text-primary">
              Panoramic Power
            </div>
          </Link>
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
          <Link
            href="/whats-new"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            What's New?
          </Link>
          <Link
            href="/effortless-migration"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Effortless Migration
          </Link>
          <Link
            href="/testimonials"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="/optimize-experience"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Optimize Experience
          </Link>
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
            <Link
              href="/whats-new"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              What's New?
            </Link>
            <Link
              href="/effortless-migration"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Effortless Migration
            </Link>
            <Link
              href="/testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="/optimize-experience"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Optimize Experience
            </Link>
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

const Section = ({
  color,
  children,
}: {
  color: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }}
      className={`min-h-screen ${color} flex items-center justify-center`}
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative" ref={scrollRef}>
      <Header />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 z-[51] right-0 h-0.5 bg-primary"
      />
      <main>
        <Section color="container">
          <Section1 />
        </Section>
        <Section color="bg-green-100">
          <h2 className="text-4xl font-bold">Section 2</h2>
        </Section>
        <Section color="bg-purple-100">
          <h2 className="text-4xl font-bold">Section 3</h2>
        </Section>
      </main>
    </div>
  );
};

export default Index;
