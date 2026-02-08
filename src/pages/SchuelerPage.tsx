import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const studentArticles = articles.filter((a) => a.audiences.includes("Schüler"));

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
                {studentArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.externalUrl ?? `/article/${article.id}`}
                    target={article.externalUrl ? "_blank" : undefined}
                    rel={article.externalUrl ? "noopener noreferrer" : undefined}
                  >
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {article.audiences.map((audience) => (
                              <Badge key={audience} variant="secondary">
                                {audience}
                              </Badge>
                            ))}
                          </div>
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
                  </a>
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
