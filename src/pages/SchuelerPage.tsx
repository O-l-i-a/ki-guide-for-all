import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard, { Article } from "@/components/shared/ArticleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertCircle, CheckCircle } from "lucide-react";

const articles: Article[] = [
  {
    id: 1,
    title: "KI als Lernhilfe richtig nutzen",
    description: "So unterstützt KI beim Lernen, ohne dass du betrugsst oder den Lerneffekt verlierst.",
    category: "Schüler",
    readTime: "5 Min.",
    date: "10. Jan 2026",
  },
  {
    id: 2,
    title: "Was darf ich, was nicht? KI-Regeln an Schulen",
    description: "Ein Überblick über typische Schulregeln zum Einsatz von KI bei Hausaufgaben und Prüfungen.",
    category: "Schüler",
    readTime: "4 Min.",
    date: "6. Jan 2026",
  },
  {
    id: 3,
    title: "Referate mit KI-Unterstützung: So geht's richtig",
    description: "Wie du KI für Recherche nutzt und trotzdem dein eigenes Referat erstellst.",
    category: "Schüler",
    readTime: "6 Min.",
    date: "2. Jan 2026",
  },
];

const dos = [
  "KI zum Verstehen schwieriger Konzepte nutzen",
  "Eigene Ideen von der KI überprüfen lassen",
  "KI als Brainstorming-Partner verwenden",
  "Lehrer fragen, wenn du unsicher bist",
];

const donts = [
  "Texte komplett von KI schreiben lassen",
  "KI-Antworten ohne Prüfung übernehmen",
  "Bei Prüfungen heimlich KI nutzen",
  "Persönliche Daten in KI-Tools eingeben",
];

const SchuelerPage = () => {
  return (
    <Layout>
      <PageHeader
        title="KI-Leitfaden für Schüler"
        description="Lerne, wie du KI-Tools clever und fair für die Schule nutzen kannst."
        icon={<Users className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Artikel für Schüler
              </h2>
              <div className="grid gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif text-primary">
                    <CheckCircle className="h-5 w-5" />
                    Das darfst du
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dos.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    Das solltest du vermeiden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {donts.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive">✗</span>
                        {item}
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

export default SchuelerPage;
