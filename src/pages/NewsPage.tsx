import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard, { Article } from "@/components/shared/ArticleCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Newspaper } from "lucide-react";

const allArticles: Article[] = [
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
    title: "KI-gestützte Unterrichtsplanung: Praktische Tipps",
    description: "Wie Sie KI nutzen können, um effektiver zu planen ohne die Qualität zu verlieren.",
    category: "Lehrer",
    readTime: "7 Min.",
    date: "9. Jan 2026",
  },
  {
    id: 3,
    title: "Rechtliche Grundlagen: KI und Urheberrecht im Unterricht",
    description: "Was dürfen Lehrer und Schüler? Ein Überblick über die aktuelle Rechtslage in Deutschland.",
    category: "Richtlinien",
    readTime: "6 Min.",
    date: "8. Jan 2026",
  },
  {
    id: 4,
    title: "Hausarbeiten im KI-Zeitalter: Wissenschaftliches Arbeiten neu gedacht",
    description: "Wie du KI ethisch korrekt für akademische Arbeiten einsetzen kannst.",
    category: "Studenten",
    readTime: "8 Min.",
    date: "10. Jan 2026",
  },
  {
    id: 5,
    title: "KI als Lernhilfe richtig nutzen",
    description: "So unterstützt KI beim Lernen, ohne dass du betrugst oder den Lerneffekt verlierst.",
    category: "Schüler",
    readTime: "5 Min.",
    date: "10. Jan 2026",
  },
  {
    id: 6,
    title: "Prüfungsformate im Wandel: Alternativen zur klassischen Hausarbeit",
    description: "Innovative Prüfungskonzepte für eine Welt mit allgegenwärtiger KI.",
    category: "Professoren",
    readTime: "12 Min.",
    date: "7. Jan 2026",
  },
];

const categories = ["Alle", "Allgemein", "Lehrer", "Schüler", "Studenten", "Professoren", "Richtlinien"];

const NewsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Aktuelles & News"
        description="Die neuesten Artikel, Diskussionen und Entwicklungen rund um KI im Bildungswesen."
        icon={<Newspaper className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Alle" className="w-full">
            <TabsList className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-4">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(category === "Alle"
                    ? allArticles
                    : allArticles.filter((a) => a.category === category)
                  ).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
