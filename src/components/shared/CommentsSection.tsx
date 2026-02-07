import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Trash2, Lock } from "lucide-react";

export interface Comment {
  id: number;
  author: string;
  email: string;
  content: string;
  timestamp: Date;
}

// Admin password - change this to your desired password
const ADMIN_PASSWORD = "admin123";

const CommentsSection = ({ articleId }: { articleId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const storageKey = `comments_article_${articleId}`;

  

  const addSampleComments = () => {
    const sampleComments = [
      {
        id: 1,
        author: "Anna Schmidt",
        email: "anna@example.com",
        content: "Sehr interessanter Artikel! Ich finde die Perspektive sehr wertvoll.",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      {
        id: 2,
        author: "Marcus Weber",
        email: "marcus@example.com",
        content: "Danke für diese hilfreiche Information. Das werde ich definitiv umsetzen!",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      },
    ];
    setComments(sampleComments);
    localStorage.setItem(storageKey, JSON.stringify(sampleComments));
  };

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

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(storageKey, JSON.stringify(updatedComments));
    setNewComment({ author: "", email: "", content: "" });
  };

  const handleDeleteComment = (id: number) => {
    if (!isAdmin) {
      setShowAdminPrompt(true);
      return;
    }

    const updatedComments = comments.filter((c) => c.id !== id);
    setComments(updatedComments);
    localStorage.setItem(storageKey, JSON.stringify(updatedComments));
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminPrompt(false);
      setAdminPassword("");
    } else {
      alert("Falsches Passwort");
      setAdminPassword("");
    }
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
  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem(storageKey);
    if (storedComments) {
      try {
        const parsed = JSON.parse(storedComments);
        // Convert timestamp strings back to Date objects
        setComments(
          parsed.map((c: { timestamp: string | number | Date }) => ({
            ...c,
            timestamp: new Date(c.timestamp),
          }))
        );
      } catch (error) {
        console.error("Error loading comments:", error);
        // If no comments exist for this article, add sample comments
        addSampleComments();
      }
    } else {
      // Add sample comments for new articles
      addSampleComments();
    }
  }, [articleId, addSampleComments]);
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
          {isAdmin && (
            <div className="mt-2 flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <Lock className="h-4 w-4" />
              Admin-Modus aktiviert
            </div>
          )}
        </div>

        {/* Admin Login Prompt */}
        {showAdminPrompt && !isAdmin && (
          <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Lock className="h-5 w-5" />
                Admin-Zugriff erforderlich
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label htmlFor="admin-password" className="mb-2 block text-sm font-medium">
                    Admin-Passwort
                  </label>
                  <Input
                    id="admin-password"
                    type="password"
                    placeholder="Passwort eingeben"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" size="sm">
                    Anmelden
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowAdminPrompt(false);
                      setAdminPassword("");
                    }}
                  >
                    Abbrechen
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

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
                        {isAdmin && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-destructive hover:text-destructive"
                            title="Kommentar löschen (nur Admin)"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
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
