import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const universityStudentArticles = articles.filter((a) => a.audiences.includes("Studenten"));

const resources = [
  {
    title: "Zitierrichtlinien für KI-generierte Inhalte",
    description: "Aktuelle Empfehlungen der Hochschulrektorenkonferenz",
  },
  {
    title: "KI-Tools für Studierende",
    description: "Übersicht empfohlener und erlaubter Tools",
  },
  {
    title: "Prüfungsrechtliche FAQ",
    description: "Antworten auf häufige Fragen zum Thema KI und Prüfungen",
  },
];

const overviewText =
  "Für Studierende ist KI bereits ein weit verbreitetes Werkzeug zum Recherchieren, Schreiben, Strukturieren und Lernen. Der aktuelle Stand zeigt, dass viele Hochschulen noch dabei sind, verbindliche Regeln und Prüfungsformate zu entwickeln. KI kann das Studium effizienter machen, ersetzt jedoch weder fachliches Verständnis noch wissenschaftliches Denken. Besonders wichtig ist die Fähigkeit, KI-Ergebnisse kritisch zu bewerten und transparent mit ihrer Nutzung umzugehen. Studierende müssen wissen, wann KI erlaubt ist, wie sie korrekt eingesetzt wird und wo ihre Grenzen liegen. KI kann beim Einstieg in komplexe Themen helfen, darf aber keine fertigen wissenschaftlichen Leistungen liefern. Akademische Integrität bleibt zentral, auch im KI-Zeitalter. Gleichzeitig entstehen neue Kompetenzen, etwa im Prompting, im Vergleich von Quellen oder in der Reflexion maschineller Texte. Hochschulen erkennen zunehmend, dass Verbote allein nicht zielführend sind. Stattdessen rückt die Frage in den Fokus, wie Lernen und Prüfen neu gestaltet werden können. Studierende, die KI reflektiert nutzen, verschaffen sich einen Kompetenzvorsprung. KI wird langfristig Teil akademischer Arbeitskultur sein.";

const StudentenPage = () => {
  return (
    <Layout>
      <PageHeader
        title="KI-Leitfaden für Studenten"
        description="Wissenschaftlich korrekt und ethisch verantwortungsvoll: KI im Studium richtig einsetzen."
        icon={<GraduationCap className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="font-serif">Für Studierende</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {overviewText}
                  </CardDescription>
                </CardHeader>
              </Card>

              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Artikel für Studierende
              </h2>
              <div className="grid gap-6">
                {universityStudentArticles.map((article) => (
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

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-serif">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {resources.map((resource, index) => (
                      <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-foreground">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
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

export default StudentenPage;
