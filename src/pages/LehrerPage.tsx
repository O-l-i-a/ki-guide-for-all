import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const teacherArticles = articles.filter((a) => a.audiences.includes("Lehrer"));

const tips = [
  "Klare Regeln für KI-Nutzung im Unterricht etablieren",
  "Aufgabenstellungen so gestalten, dass reines Kopieren nicht möglich ist",
  "KI als Diskussionsthema in den Unterricht integrieren",
  "Prozessorientierte Bewertung statt reiner Ergebnisbewertung",
  "Regelmäßige Fortbildungen zum Thema KI besuchen",
];

const overviewText =
  "Künstliche Intelligenz verändert den Unterricht nicht grundlegend, aber sie verändert, wie Lehrkräfte unterrichten, planen und bewerten. Aktuell wird KI vor allem zur Unterrichtsvorbereitung, zur Differenzierung von Lernmaterialien und zur Unterstützung bei Feedback und Diagnose eingesetzt. Zentrale Aufgabe von Lehrkräften bleibt dabei die pädagogische Steuerung: KI liefert Vorschläge, trifft aber keine didaktischen Entscheidungen. Besonders wichtig ist ein bewusster Umgang mit Transparenz, Datenschutz und der Frage, wann KI sinnvoll ist und wann nicht. Lehrkräfte stehen vor der Herausforderung, neue Prüfungsformate zu entwickeln, die eigenständiges Denken und Reflexion fördern. Gleichzeitig wächst die Rolle der Lehrperson als Lernbegleiter, Moderator und Wertevermittler. KI kann helfen, Lernprozesse zu individualisieren, darf aber keine soziale Beziehung ersetzen. Der aktuelle Stand zeigt große Unterschiede zwischen Schulen, abhängig von Ausstattung, Fortbildung und Offenheit. Entscheidend ist weniger technisches Detailwissen als ein grundlegendes Verständnis von Funktionsweise und Grenzen. Lehrkräfte müssen KI nicht perfekt beherrschen, aber reflektiert einsetzen und mit Lernenden offen thematisieren. Langfristig wird KI Teil professioneller Unterrichtspraxis sein, ähnlich wie digitale Medien heute.";

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
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="font-serif">Für Lehrerinnen und Lehrer</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {overviewText}
                  </CardDescription>
                </CardHeader>
              </Card>

              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Aktuelle Artikel für Lehrer
              </h2>
              <div className="grid gap-6">
                {teacherArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.externalUrl ?? `#/article/${article.id}`}
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
