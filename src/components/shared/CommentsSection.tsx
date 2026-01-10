import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Trash2 } from "lucide-react";

export interface Comment {
  id: number;
  author: string;
  email: string;
  content: string;
  timestamp: Date;
}

const CommentsSection = ({ articleId }: { articleId: number }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Anna Schmidt",
      email: "anna@example.com",
      content: "Sehr interessanter Artikel! Ich nutze ChatGPT bereits im Unterricht und kann den Vergleich zu Claude nur bestätigen.",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      author: "Marcus Weber",
      email: "marcus@example.com",
      content: "Die Tipps zur Unterrichtsplanung sind wirklich praktisch. Ich werde diese ausprobieren!",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
  ]);

  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: "",
  });

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.author.trim() || !newComment.email.trim() || !newComment.content.trim()) {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    }

    const comment: Comment = {
      id: Math.max(...comments.map((c) => c.id), 0) + 1,
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      timestamp: new Date(),
    };

    setComments([comment, ...comments]);
    setNewComment({ author: "", email: "", content: "" });
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      return `vor ${hours} Stunden`;
    } else if (days === 1) {
      return "vor 1 Tag";
    } else if (days < 7) {
      return `vor ${days} Tagen`;
    } else {
      return date.toLocaleDateString("de-DE");
    }
  };

  return (
    <section className="py-12">
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 flex items-center gap-2 font-serif text-2xl font-bold">
            <MessageCircle className="h-6 w-6" />
            Kommentare ({comments.length})
          </h2>
          <p className="text-muted-foreground">
            Teilen Sie Ihre Gedanken und erfahren Sie, was andere Leser denken.
          </p>
        </div>

        {/* Add Comment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Neuen Kommentar hinzufügen</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="author" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="author"
                    placeholder="Ihr Name"
                    value={newComment.author}
                    onChange={(e) =>
                      setNewComment({ ...newComment, author: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email (wird nicht veröffentlicht)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ihre Email"
                    value={newComment.email}
                    onChange={(e) =>
                      setNewComment({ ...newComment, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label htmlFor="content" className="mb-2 block text-sm font-medium">
                  Kommentar
                </label>
                <Textarea
                  id="content"
                  placeholder="Ihr Kommentar..."
                  rows={4}
                  value={newComment.content}
                  onChange={(e) =>
                    setNewComment({ ...newComment, content: e.target.value })
                  }
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Kommentar veröffentlichen
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Noch keine Kommentare. Seien Sie der Erste!
            </p>
          ) : (
            comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.email}`}
                      />
                      <AvatarFallback>{getInitials(comment.author)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold">{comment.author}</p>
                          <CardDescription>{formatDate(comment.timestamp)}</CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteComment(comment.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="mt-2 text-sm">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
