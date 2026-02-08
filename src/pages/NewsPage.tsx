import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Newspaper } from "lucide-react";
import { articles, type ArticleData } from "@/data/articles";

const categories = ["Alle", "Schüler", "Lehrer", "Studenten", "Professoren", "Allgemein"];

const NewsPage = () => {
  const renderArticleCard = (article: ArticleData) => (
    <a
      key={article.id}
      href={article.externalUrl ?? `/article/${article.id}`}
      target={article.externalUrl ? "_blank" : undefined}
      rel={article.externalUrl ? "noopener noreferrer" : undefined}
    >
      <Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
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
  );

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
                    ? articles
                    : articles.filter((a) => a.audiences.includes(category))
                  ).map((article) => renderArticleCard(article))}
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
