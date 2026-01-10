import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Lehrer", href: "/lehrer" },
  { label: "Schüler", href: "/schueler" },
  { label: "Studenten", href: "/studenten" },
  { label: "Professoren", href: "/professoren" },
  { label: "News", href: "/news" },
  { label: "Richtlinien", href: "/richtlinien" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span className="font-serif text-xl font-semibold text-foreground">
            KI im Bildungswesen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Button
                variant={location.pathname === link.href ? "secondary" : "ghost"}
                size="sm"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-card p-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={location.pathname === link.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
