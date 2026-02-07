import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Shield, Eye, FileText, AlertTriangle, CheckCircle, Brain, Lightbulb, Gavel, Lock, Zap } from "lucide-react";
interface NestedRule {
  text: string;
  subrules: string[];
}

type Rule = string | NestedRule;

interface Section {
  subtitle: string;
  rules: Rule[];
  conclusion?: string;
}

interface Guideline {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  sections?: Section[];
  rules?: Rule[];
}

interface FAQ {
  question: string;
  answer: string;
}

const guidelines: Guideline[] = [
  {
    icon: Shield,
    title: "Privatsphäre und Daten schützen",
    description: "Verantwortungsvoller Umgang mit persönlichen und sensiblen Informationen",
    sections: [
      {
        subtitle: "Privatsphäre schützen",
        rules: [
          "Gib keine personenbezogenen Daten in KI-Tools ein (z. B. Namen, Adressen, Matrikelnummern, Fotos).",
          {
            text: "Keine sensiblen Daten eingeben – dazu zählen insbesondere:",
            subrules: [
              "Gesundheitsdaten",
              "Religiöse oder politische Überzeugungen",
              "Leistungsbewertungen, Gutachten oder Zeugnisse",
            ],
          },
          "Auch Daten von anderen Personen (Mitschüler:innen, Lehrende, Kolleg:innen) dürfen nicht eingegeben werden.",
        ],
      },
      {
        subtitle: "Eingaben in KI-Systeme sind nicht vollständig kontrollierbar",
        rules: [
          "Inhalte, die in KI-Tools eingegeben werden, verlassen den eigenen geschützten Bereich.",
          "Sie können gespeichert, analysiert oder weiterverarbeitet werden.",
          "Eine vollständige Kontrolle darüber, wie und wofür diese Daten langfristig genutzt werden, besteht nicht.",
        ],
        conclusion: "Alles, was vertraulich, persönlich oder schützenswert ist, gehört nicht in eine KI.",
      },
    ],
  },
  {
    icon: Brain,
    title: "KI verstehen – was sie kann und was nicht",
    description: "Grundlagen und Grenzen von Künstlicher Intelligenz",
    sections: [
      {
        subtitle: "KI ist nicht fehlerfrei",
        rules: [
          "KI erzeugt Antworten auf Basis von Wahrscheinlichkeiten, nicht von echtem Wissen.",
          "Inhalte können falsch (halluziniert), unvollständig, veraltet oder erfunden sein.",
          "Besonders kritisch sind überzeugend klingende Aussagen und scheinbar korrekte Quellen.",
        ],
      },
      {
        subtitle: "Fakten und Quellen überprüfen",
        rules: [
          "Alle von KI generierten Fakten müssen verifiziert werden.",
          {
            text: "Quellen können:",
            subrules: [
              "falsch zugeordnet,",
              "unvollständig",
              "oder nicht existent sein.",
            ],
          },
          "Die Überprüfung sollte über Fachliteratur, Lehrmaterialien, wissenschaftliche Datenbanken oder Rücksprache mit Lehrenden erfolgen.",
        ],
      },
      {
        subtitle: "Fachliche Verantwortung bleibt beim Menschen",
        rules: [
          "Die inhaltliche und fachliche Korrektheit muss durch eigenes Wissen oder Expertise sichergestellt werden.",
          "KI kann unterstützen, ersetzt aber kein kritisches Denken.",
        ],
      },
      {
        subtitle: "Das richtige KI-Tool für den richtigen Zweck",
        rules: [
          "Nicht jedes KI-Tool ist für jede Anwendung geeignet.",
          {
            text: "Beispiele:",
            subrules: [
              "Text-KI: Ideensammlung, Strukturierung, sprachliche Unterstützung",
              "Bild-KI: Visualisierung, Illustrationen",
              "Lern-KI: Erklärungen auf unterschiedlichen Niveaus",
            ],
          },
          "Der Einsatz sollte immer zweckgebunden, reflektiert und angemessen erfolgen.",
        ],
        conclusion: "Je sensibler der Anwendungsbereich, desto vorsichtiger sollte KI eingesetzt werden.",
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "KI fair, transparent und verantwortungsvoll einsetzen",
    description: "Ethische Nutzung und klare Kommunikation",
    sections: [
      {
        subtitle: "KI-Nutzung offenlegen und dokumentieren",
        rules: [
          "Der Einsatz von KI sollte klar und nachvollziehbar gekennzeichnet werden.",
          {
            text: "Dazu gehört:",
            subrules: [
              "welches KI-Tool genutzt wurde,",
              "zu welchem Zweck,",
              "in welchem Umfang der Einsatz erfolgte.",
            ],
          },
          "Bei schulischen und akademischen Arbeiten ist die Dokumentation der KI-Nutzung besonders wichtig.",
          "Es gelten immer die Vorgaben der jeweiligen Schule, Hochschule oder des Instituts.",
        ],
      },
      {
        subtitle: "Keine Täuschung über Eigenleistung",
        rules: [
          "KI darf nicht genutzt werden, um eine eigene Leistung vorzutäuschen.",
          "Nicht offengelegter oder unzulässiger KI-Einsatz kann als Täuschungsversuch gelten.",
          "Plagiats- und Prüfsoftware erkennt KI-generierte Inhalte zunehmend zuverlässig.",
        ],
        conclusion: "Täuschungsversuche können zu schweren Konsequenzen führen, bis hin zum Ausschluss von Prüfungen.",
      },
      {
        subtitle: "Im Zweifel nachfragen",
        rules: [
          "Regelungen zur KI-Nutzung unterscheiden sich je nach Einrichtung und Fach.",
          {
            text: "Bei Unsicherheiten gilt:",
            subrules: [
              "lieber vorab die zuständige Lehrkraft ansprechen",
              "oder die Vorgaben des Instituts bzw. der Prüfungsordnung prüfen.",
            ],
          },
        ],
        conclusion: "Transparenz schützt vor Missverständnissen und Regelverstößen.",
      },
    ],
  },
  {
    icon: Gavel,
    title: "Rechtliche Grundlagen – EU-Recht, kurz und knapp",
    description: "Regulierung von Künstlicher Intelligenz in Europa",
    sections: [
      {
        subtitle: "Der EU AI Act – was ist das?",
        rules: [
          "Die EU hat Regeln für KI eingeführt, um Menschen zu schützen.",
          "KI wird je nach Risiko unterschiedlich streng geregelt.",
        ],
      },
      {
        subtitle: "Verbotene KI",
        rules: [
          {
            text: "KI, die Menschen manipuliert oder überwacht",
            subrules: [
              "Soziales Scoring oder emotionale Bewertung in Schule & Bildung",
            ],
          },
        ],
        conclusion: "Solche Systeme dürfen nicht eingesetzt werden.",
      },
      {
        subtitle: "Hochrisiko-KI",
        rules: [
          {
            text: "KI in sensiblen Bereichen wie:",
            subrules: [
              "Bildung (z. B. automatische Leistungsbewertung)",
              "Gesundheit",
            ],
          },
          {
            text: "Darf nur eingesetzt werden mit:",
            subrules: [
              "menschlicher Kontrolle",
              "Transparenz",
              "klaren Schutzmaßnahmen",
            ],
          },
        ],
        conclusion: "Für Unterricht heißt das: keine automatisierten Entscheidungen über Lernende.",
      },
      {
        subtitle: "Transparenzpflichtige KI",
        rules: [
          "Chatbots & generative KI (Texte, Bilder)",
          {
            text: "Nutzer:innen müssen erkennen können:",
            subrules: [
              "dass es KI ist und wie sie eingesetzt wird",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: Lock,
    title: "Datenschutz gilt immer (DSGVO verständlich gemacht)",
    description: "Datenminimierung und Datensicherheit",
    sections: [
      {
        subtitle: "KI & Datenschutz",
        rules: [
          {
            text: "Auch beim Lernen gilt:",
            subrules: [
              "so wenig Daten wie möglich",
              "nur für einen klaren Zweck",
            ],
          },
          {
            text: "Besonders geschützt sind:",
            subrules: [
              "Gesundheitsdaten",
              "Leistungsbewertungen",
              "persönliche Meinungen",
            ],
          },
        ],
        conclusion: "Deshalb: Lieber anonym formulieren oder Beispiele nutzen.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Gute Praxis für Schule & Studium (konkrete Handlungsanleitung)",
    description: "Praktischer Leitfaden für sinnvolle KI-Nutzung",
    sections: [
      {
        subtitle: "✅ KI sinnvoll nutzen für:",
        rules: [
          "Ideensammlungen",
          "Gliederungen",
          "Erklärungen auf unterschiedlichem Niveau",
          "Sprachliche Unterstützung",
          "Übungsfragen",
        ],
      },
      {
        subtitle: "❌ KI nicht nutzen für:",
        rules: [
          "automatische Leistungsbewertungen",
          "Prüfungsentscheidungen",
          "sensible Fallanalysen mit echten Daten",
          "ungekennzeichnete Abgaben",
        ],
      },
      {
        subtitle: "Merksatz für Lernende & Lehrende",
        rules: [
          "Keine sensiblen Daten. KI kritisch prüfen. Verantwortung behalten. Transparent bleiben.",
        ],
      },
    ],
  },
];

const faqs: FAQ[] = [
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
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <guideline.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="font-serif">{guideline.title}</CardTitle>
                  </div>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {guideline.sections ? (
                    <div className="space-y-6">
                      {guideline.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {section.subtitle && (
                            <h4 className="mb-3 font-semibold text-foreground">{section.subtitle}</h4>
                          )}
                          <ul className="space-y-2">
                            {section.rules.map((rule, index) => (
                              <li key={index}>
                                <div className="flex gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                                  <span className="text-muted-foreground">
                                    {typeof rule === "string" ? rule : rule.text}
                                  </span>
                                </div>
                                {typeof rule !== "string" && rule.subrules && (
                                  <ul className="ml-6 mt-2 space-y-1 border-l border-primary/30 pl-4">
                                    {rule.subrules.map((subrule, subindex) => (
                                      <li key={subindex} className="flex gap-2 text-sm">
                                        <span className="text-primary">•</span>
                                        <span className="text-muted-foreground">{subrule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                          {section.conclusion && (
                            <p className="mt-3 rounded-lg bg-primary/5 p-3 text-sm font-medium text-foreground italic">
                              → {section.conclusion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {guideline.rules && guideline.rules.map((rule, index) => (
                        <li key={index}>
                          <div className="flex gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {typeof rule === "string" ? rule : rule.text}
                            </span>
                          </div>
                          {typeof rule !== "string" && rule.subrules && (
                            <ul className="ml-6 mt-2 space-y-1 border-l border-primary/30 pl-4">
                              {rule.subrules.map((subrule, subindex) => (
                                <li key={subindex} className="flex gap-2 text-sm">
                                  <span className="text-primary">•</span>
                                  <span className="text-muted-foreground">{subrule}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Author & Disclosure Section */}
          <div className="mt-16 border-t pt-8">
            <div className="mx-auto max-w-3xl rounded-lg bg-muted/30 p-6">
              <p className="mb-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Erstellt von Melissa Mewes, am 06.02.2026</span>
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Bei der Erstellung dieser Arbeit wurde KI unterstützend genutzt (zur Ideensammlung und sprachlichen Überarbeitung).
              </p>
              <p className="text-sm text-muted-foreground">
                Die inhaltliche Verantwortung liegt vollständig bei mir.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default RichtlinienPage;
