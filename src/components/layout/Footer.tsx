import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">
                KI im Bildungswesen
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ihr Leitfaden für den verantwortungsvollen Umgang mit KI in Schule und Universität.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Für Schulen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/lehrer" className="transition-colors hover:text-primary">
                  Lehrer
                </Link>
              </li>
              <li>
                <Link to="/schueler" className="transition-colors hover:text-primary">
                  Schüler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Für Universitäten</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/studenten" className="transition-colors hover:text-primary">
                  Studenten
                </Link>
              </li>
              <li>
                <Link to="/professoren" className="transition-colors hover:text-primary">
                  Professoren
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Ressourcen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/news" className="transition-colors hover:text-primary">
                  Aktuelles
                </Link>
              </li>
              <li>
                <Link to="/richtlinien" className="transition-colors hover:text-primary">
                  Richtlinien
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KI im Bildungswesen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
