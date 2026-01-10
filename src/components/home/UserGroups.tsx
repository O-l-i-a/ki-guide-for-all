import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";

const groups = [
  {
    icon: BookOpen,
    title: "Lehrer",
    description: "Erfahren Sie, wie Sie KI sinnvoll in Ihren Unterricht integrieren und Schülerarbeiten fair bewerten können.",
    href: "/lehrer",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Schüler",
    description: "Lernen Sie, wie Sie KI als Lernhilfe nutzen können, ohne gegen Schulregeln zu verstoßen.",
    href: "/schueler",
    color: "text-chart-2",
  },
  {
    icon: GraduationCap,
    title: "Studenten",
    description: "Tipps für den akademischen Umgang mit KI – von Hausarbeiten bis zur Prüfungsvorbereitung.",
    href: "/studenten",
    color: "text-chart-1",
  },
  {
    icon: Award,
    title: "Professoren",
    description: "Strategien für Lehre und Forschung im Zeitalter der Künstlichen Intelligenz.",
    href: "/professoren",
    color: "text-chart-5",
  },
];

const UserGroups = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Für wen ist dieser Blog?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Wählen Sie Ihre Zielgruppe und finden Sie maßgeschneiderte Informationen 
            zum Umgang mit KI in Ihrem Bildungskontext.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <Card key={group.title} className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className={`mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent ${group.color}`}>
                  <group.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-serif">{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={group.href}>
                  <Button variant="ghost" className="group/btn gap-2 p-0 text-primary hover:bg-transparent">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGroups;
