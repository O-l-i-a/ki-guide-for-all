import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={handleClick}
    >
      <CardHeader>
        <div className="mb-2 flex items-center gap-3">
          <Badge variant="secondary">{article.category}</Badge>
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
  );
};

export default ArticleCard;
