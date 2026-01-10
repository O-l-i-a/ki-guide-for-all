import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ArticleCard from "@/components/shared/ArticleCard";
import CommentsSection from "@/components/shared/CommentsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticleById, getRelatedArticles, articles } from "@/data/articles";
import { Clock, Calendar, User, BookOpen, ArrowLeft, LinkIcon } from "lucide-react";
import { type Article } from "@/components/shared/ArticleCard";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const articleId = parseInt(id || "0", 10);
  const article = getArticleById(articleId);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <Layout>
        <PageHeader
          title="Artikel nicht gefunden"
          description="Der angeforderte Artikel konnte nicht gefunden werden."
          icon={<BookOpen className="h-8 w-8" />}
        />
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-6 text-muted-foreground">
              Entschuldigung, der Artikel konnte nicht gefunden werden.
            </p>
            <Button onClick={() => navigate("/news")}>Zu allen Artikeln</Button>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedArticles = getRelatedArticles(article.relatedArticleIds);

  return (
    <Layout>
      {/* Back Button */}
      <div className="bg-background py-4">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/news")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu Artikeln
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex gap-2">
            <Badge>{article.category}</Badge>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            {article.title}
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">{article.description}</p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} Lesedauer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Main Content */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <div
              className="mb-12 space-y-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <Separator className="my-12" />

          {/* Sources Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Quellen
              </CardTitle>
              <CardDescription>
                Dieser Artikel basiert auf den folgenden Quellen und Referenzen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {article.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{source}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-8 font-serif text-2xl font-bold">Ähnliche Artikel</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    onClick={() => navigate(`/article/${relatedArticle.id}`)}
                  >
                    <ArticleCard article={relatedArticle as Article} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-12" />

          {/* Comments Section */}
          <CommentsSection articleId={articleId} />
        </div>
      </section>
    </Layout>
  );
};

export default ArticlePage;
