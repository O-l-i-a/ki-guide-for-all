import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard, { Article } from "@/components/shared/ArticleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle } from "lucide-react";

const articles: Article[] = [
  {
    id: 1,
    title: "KI-gestützte Unterrichtsplanung: Praktische Tipps",
    description: "Wie Sie KI nutzen können, um effektiver zu planen ohne die Qualität zu verlieren.",
    category: "Lehrer",
    readTime: "7 Min.",
    date: "9. Jan 2026",
  },
  {
    id: 2,
    title: "KI-generierte Arbeiten erkennen: Methoden und Tools",
    description: "Praktische Ansätze zur Erkennung von KI-unterstützten Schülerarbeiten.",
    category: "Lehrer",
    readTime: "10 Min.",
    date: "7. Jan 2026",
  },
  {
    id: 3,
    title: "Faire Bewertung im KI-Zeitalter",
    description: "Neue Bewertungsstrategien für eine Welt mit allgegenwärtiger KI.",
    category: "Lehrer",
    readTime: "6 Min.",
    date: "3. Jan 2026",
  },
];

const tips = [
  "Klare Regeln für KI-Nutzung im Unterricht etablieren",
  "Aufgabenstellungen so gestalten, dass reines Kopieren nicht möglich ist",
  "KI als Diskussionsthema in den Unterricht integrieren",
  "Prozessorientierte Bewertung statt reiner Ergebnisbewertung",
  "Regelmäßige Fortbildungen zum Thema KI besuchen",
];

const LehrerPage = () => {
  return (
    <Layout>
      <PageHeader
        title="KI-Leitfaden für Lehrer"
        description="Strategien und praktische Tipps für den Umgang mit Künstlicher Intelligenz im Schulalltag."
        icon={<BookOpen className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Aktuelle Artikel für Lehrer
              </h2>
              <div className="grid gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-serif">Schnell-Tipps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LehrerPage;
