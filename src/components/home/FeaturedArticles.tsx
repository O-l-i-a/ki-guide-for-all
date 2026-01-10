import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "ChatGPT, Claude & Co: Ein Vergleich für den Bildungsbereich",
    description: "Welche KI-Tools eignen sich am besten für Schule und Universität? Wir vergleichen Stärken und Schwächen.",
    category: "Allgemein",
    readTime: "8 Min.",
    date: "10. Jan 2026",
  },
  {
    id: 2,
    title: "Rechtliche Grundlagen: KI und Urheberrecht im Unterricht",
    description: "Was dürfen Lehrer und Schüler? Ein Überblick über die aktuelle Rechtslage in Deutschland.",
    category: "Richtlinien",
    readTime: "6 Min.",
    date: "8. Jan 2026",
  },
  {
    id: 3,
    title: "KI-gestützte Hausaufgaben: Betrug oder Lernhilfe?",
    description: "Wo verläuft die Grenze zwischen legitimer Hilfe und unerlaubter Unterstützung?",
    category: "Schüler",
    readTime: "5 Min.",
    date: "5. Jan 2026",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Aktuelle Artikel
            </h2>
            <p className="text-muted-foreground">
              Die neuesten Beiträge und Diskussionen
            </p>
          </div>
          <Link to="/news" className="hidden md:block">
            <Button variant="outline" className="gap-2">
              Alle Artikel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="font-serif transition-colors group-hover:text-primary">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/news">
            <Button variant="outline" className="gap-2">
              Alle Artikel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
