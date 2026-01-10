import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, CheckCircle, BookOpen, ArrowRight } from "lucide-react";

const guidelines = [
  {
    icon: Shield,
    title: "Datenschutz beachten",
    description: "Geben Sie niemals persönliche Daten von Schülern oder Studenten in KI-Tools ein.",
  },
  {
    icon: AlertTriangle,
    title: "Quellen prüfen",
    description: "KI kann falsche Informationen generieren. Überprüfen Sie alle Fakten sorgfältig.",
  },
  {
    icon: CheckCircle,
    title: "Transparenz wahren",
    description: "Kennzeichnen Sie KI-unterstützte Arbeiten immer entsprechend der geltenden Regeln.",
  },
  {
    icon: BookOpen,
    title: "Lernprozess priorisieren",
    description: "Nutzen Sie KI als Werkzeug zum Lernen, nicht als Ersatz für eigenes Denken.",
  },
];

const Guidelines = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
              Die wichtigsten Grundregeln
            </h2>
            <p className="text-secondary-foreground/80">
              Vier essenzielle Prinzipien für den verantwortungsvollen Umgang mit KI im Bildungswesen
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg bg-secondary-foreground/10 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-secondary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/richtlinien">
              <Button size="lg" variant="outline" className="gap-2 border-primary/30 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20">
                Vollständige Richtlinien lesen
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
