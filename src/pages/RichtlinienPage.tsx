import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Shield, Eye, FileText, AlertTriangle, CheckCircle } from "lucide-react";

const guidelines = [
  {
    icon: Shield,
    title: "Datenschutz & Privatsphäre",
    description: "Grundsätze zum Schutz personenbezogener Daten",
    rules: [
      "Keine personenbezogenen Daten von Schülern oder Studierenden in KI-Tools eingeben",
      "Anonymisierung von Beispielen und Fallstudien vor der KI-Nutzung",
      "Verwendung von DSGVO-konformen KI-Diensten bevorzugen",
      "Regelmäßige Überprüfung der Datenschutzrichtlinien genutzter Tools",
    ],
  },
  {
    icon: FileText,
    title: "Transparenz & Kennzeichnung",
    description: "Offenlegung von KI-Unterstützung",
    rules: [
      "KI-generierte oder KI-unterstützte Inhalte müssen entsprechend gekennzeichnet werden",
      "Art und Umfang der KI-Nutzung sollte dokumentiert werden",
      "Bei akademischen Arbeiten: genaue Angabe des verwendeten Tools und Prompts",
      "Institutionelle Vorgaben zur Kennzeichnung beachten",
    ],
  },
  {
    icon: Eye,
    title: "Kritische Überprüfung",
    description: "Qualitätssicherung von KI-Ausgaben",
    rules: [
      "Alle KI-generierten Fakten und Quellen müssen verifiziert werden",
      "KI-Halluzinationen (erfundene Informationen) sind häufig – immer prüfen",
      "Literaturangaben der KI sind oft fehlerhaft oder erfunden",
      "Fachliche Korrektheit durch eigene Expertise sicherstellen",
    ],
  },
  {
    icon: Scale,
    title: "Rechtliche Aspekte",
    description: "Urheberrecht und akademische Integrität",
    rules: [
      "KI-generierte Texte können urheberrechtlich geschütztes Material enthalten",
      "Plagiatsprüfungen erkennen zunehmend KI-generierte Inhalte",
      "Täuschungsversuche können zu Prüfungsausschluss führen",
      "Im Zweifel immer die zuständige Lehrkraft oder Institution befragen",
    ],
  },
];

const faqs = [
  {
    question: "Darf ich KI für Hausaufgaben verwenden?",
    answer: "Das hängt von den Regeln Ihrer Schule oder Universität ab. Grundsätzlich gilt: KI als Lernhilfe (z.B. zum Verstehen von Konzepten) ist meist erlaubt, das Einreichen von KI-generierten Texten als eigene Arbeit jedoch nicht. Fragen Sie im Zweifel Ihre Lehrkraft.",
  },
  {
    question: "Wie zitiere ich KI-generierte Inhalte?",
    answer: "Viele Institutionen entwickeln derzeit eigene Richtlinien. Eine gängige Praxis ist: Nennung des Tools (z.B. ChatGPT), Datum der Nutzung, und Beschreibung des Prompts. Beispiel: 'OpenAI ChatGPT (Version GPT-4, abgerufen am 10.01.2026) wurde für die initiale Strukturierung verwendet.'",
  },
  {
    question: "Welche KI-Tools sind für den Bildungsbereich empfehlenswert?",
    answer: "Empfehlenswert sind Tools mit transparenten Datenschutzrichtlinien und Bildungsfunktionen. Achten Sie auf DSGVO-Konformität und prüfen Sie, ob Ihre Institution bestimmte Tools empfiehlt oder ausschließt.",
  },
  {
    question: "Wie erkenne ich KI-generierte Fehlinformationen?",
    answer: "Überprüfen Sie alle Fakten mit primären Quellen. Seien Sie besonders skeptisch bei Statistiken, Zitaten und Literaturangaben. KI-Tools neigen dazu, plausibel klingende aber falsche Informationen zu generieren.",
  },
];

const RichtlinienPage = () => {
  return (
    <Layout>
      <PageHeader
        title="KI-Richtlinien"
        description="Umfassende Leitlinien für den verantwortungsvollen Umgang mit Künstlicher Intelligenz im Bildungswesen."
        icon={<Scale className="h-8 w-8" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Warning Banner */}
          <Card className="mb-12 border-destructive/50 bg-destructive/5">
            <CardContent className="flex gap-4 p-6">
              <AlertTriangle className="h-6 w-6 shrink-0 text-destructive" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Wichtiger Hinweis</h3>
                <p className="text-sm text-muted-foreground">
                  Diese Richtlinien dienen als allgemeine Orientierung. Beachten Sie immer die 
                  spezifischen Vorgaben Ihrer Schule, Universität oder Institution, da diese 
                  Vorrang haben.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Main Guidelines */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {guidelines.map((guideline) => (
              <Card key={guideline.title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <guideline.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-serif">{guideline.title}</CardTitle>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guideline.rules.map((rule, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
              Häufig gestellte Fragen
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RichtlinienPage;
