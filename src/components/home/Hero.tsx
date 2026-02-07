import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-30">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Ihr Wegweiser für KI im Bildungsbereich</span>
          </div>
          
          <h1 className="mb-6 font-serif text-base font-bold leading-tight text-secondary-foreground md:text-3xl lg:text-7xl">
            Wie sollst du mit{" "}
            <span className="text-primary">KI</span>{" "}
            umgehen?
          </h1>
          
          <p className="mb-8 text-lg text-secondary-foreground/80 md:text-xl">
            Praktische Richtlinien und aktuelle Informationen für Lehrer, Schüler, 
            Studenten und Professoren zum verantwortungsvollen Einsatz von 
            Künstlicher Intelligenz.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/richtlinien">
              <Button size="lg" className="gap-3 px-8 py-6 text-lg">
                Richtlinien entdecken
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="outline" size="lg" className="gap-3 px-8 py-6 text-lg border-primary/30 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20">
                Aktuelle Artikel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
