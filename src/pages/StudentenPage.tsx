import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard, { Article } from "@/components/shared/ArticleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const articles: Article[] = [
  {
    id: 1,
    title: "Hausarbeiten im KI-Zeitalter: Wissenschaftliches Arbeiten neu gedacht",
    description: "Wie du KI ethisch korrekt für akademische Arbeiten einsetzen kannst.",
    category: "Studenten",
    readTime: "8 Min.",
    date: "10. Jan 2026",
  },
  {
    id: 2,
    title: "KI und Plagiat: Was die Prüfungsordnungen sagen",
    description: "Ein Überblick über die rechtlichen Rahmenbedingungen an deutschen Hochschulen.",
    category: "Studenten",
    readTime: "7 Min.",
    date: "8. Jan 2026",
  },
  {
    id: 3,
    title: "Literaturrecherche mit KI: Chancen und Grenzen",
    description: "So nutzt du KI für effektive Recherche ohne auf Fake-Quellen hereinzufallen.",
    category: "Studenten",
    readTime: "6 Min.",
    date: "4. Jan 2026",
  },
];

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
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Artikel für Studierende
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
