import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Lightbulb, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const professorArticles = articles;

const considerations = [
  {
    title: "Transparente Kommunikation",
    description: "Klare Richtlinien zur KI-Nutzung in Ihren Lehrveranstaltungen kommunizieren.",
  },
  {
    title: "Kompetenzorientierung",
    description: "Prüfungen auf Kompetenzen ausrichten, die nicht durch KI ersetzbar sind.",
  },
  {
    title: "Kritische Reflexion fördern",
    description: "Studierende zur kritischen Auseinandersetzung mit KI-generierten Inhalten anleiten.",
  },
  {
    title: "Vorbildfunktion",
    description: "Eigenen transparenten Umgang mit KI in Forschung und Lehre vorleben.",
  },
];

const ProfessorenPage = () => {
  return (
    <Layout>
      <PageHeader
        title="KI-Leitfaden für Professoren"
        description="Strategische Ansätze für Lehre und Forschung im Zeitalter der Künstlichen Intelligenz."
        icon={<Award className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Artikel für Lehrende an Hochschulen
              </h2>
              <div className="grid gap-6">
                {professorArticles.map((article) => (
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
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Strategische Überlegungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {considerations.map((item, index) => (
                      <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default ProfessorenPage;
