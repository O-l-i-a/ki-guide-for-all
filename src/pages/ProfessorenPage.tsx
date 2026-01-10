import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard, { Article } from "@/components/shared/ArticleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Lightbulb } from "lucide-react";

const articles: Article[] = [
  {
    id: 1,
    title: "KI in der Hochschullehre: Didaktische Perspektiven",
    description: "Wie Sie KI sinnvoll in Vorlesungen und Seminare integrieren können.",
    category: "Professoren",
    readTime: "10 Min.",
    date: "9. Jan 2026",
  },
  {
    id: 2,
    title: "Prüfungsformate im Wandel: Alternativen zur klassischen Hausarbeit",
    description: "Innovative Prüfungskonzepte für eine Welt mit allgegenwärtiger KI.",
    category: "Professoren",
    readTime: "12 Min.",
    date: "7. Jan 2026",
  },
  {
    id: 3,
    title: "KI in der Forschung: Ethische Leitlinien und Best Practices",
    description: "Empfehlungen für den verantwortungsvollen Einsatz von KI in wissenschaftlicher Arbeit.",
    category: "Professoren",
    readTime: "9 Min.",
    date: "3. Jan 2026",
  },
];

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
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
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
