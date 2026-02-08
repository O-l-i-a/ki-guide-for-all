import { Card, CardContent } from "@/components/ui/card";

const WhyAI = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Title as a Question */}
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-6xl">
            Werte und KI 
            <br></br> Warum das zusammenhängt?
          </h2>

          {/* Main Content */}
          <div className="space-y-8 text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Künstliche Intelligenz (KI) ist längst Teil unseres Alltags – in Bildung, Medizin, Wirtschaft und Kommunikation. KI und Werte beeinflussen sich gegenseitig, denn <span className="font-semibold">KI ist nicht neutral</span>. Werte bestimmen, wie KI eingesetzt wird – und KI beeinflusst, welche Werte unsere Gesellschaft prägen wird.
            </p>

            {/* Cards Grid - 2 columns */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-foreground">Werte in der Entwicklung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bei der Entwicklung von KI-Systemen spielen Werte eine zentrale Rolle: Welche Daten werden verwendet? Welche Ziele werden verfolgt? Welche Werte wurden bei der Entwicklung priorisiert? Wird Effizienz höher bewertet als Fairness oder Transparenz? Diese Entscheidungen bestimmen, wie KI arbeitet: ob KI diskriminiert, unterstützt oder gerecht eingesetzt werden kann.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-foreground">Werte in der Nutzung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Auch die Nutzung von KI spiegelt Werte wider. KI kann Menschen entlasten und Entscheidungen unterstützen – oder sie ersetzen und kontrollieren. Welche Werte verfolgen Menschen, indem sie KI im Alltag einsetzen? Wird KI als Hilfsmittel eingesetzt oder als autoritäres Entscheidungssystem? Welchen Stellenwert haben Autonomie, Verantwortung und Menschenwürde in der Nutzung von KI?
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Third Card and Conclusion - 2 columns */}
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-foreground">Die Rückwirkung von KI auf Werte</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gleichzeitig wirkt KI auf unsere Werte zurück, indem Werte wiedergespiegelt und reproduziert werden. Sie verändert, wie wir Leistung, Wissen, Kreativität oder Verantwortung wahrnehmen. Wenn Maschinen Texte schreiben, Diagnosen stellen oder Verhalten bewerten, stellt sich neu die Frage: <span className="italic">Was bleibt menschlich – und was wollen wir delegieren?</span>
                  </p>
                </CardContent>
              </Card>

              {/* Conclusion - Prominent */}
              <div className="rounded-xl border-0 border-primary bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-10 flex flex-col">
                <p className="text-base text-muted-foreground leading-relaxed mb-6 font-semibold">
                  Ein verantwortungsvoller Umgang mit KI erfordert daher klare Werte:
                </p>
                <p className="text-base text-foreground font-bold leading-relaxed mb-4">
                  Gerechtigkeit, Transparenz, Datenschutz, Verantwortung und menschliche Entscheidungshoheit.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed italic">
                  KI ist ein Werkzeug – doch welche Wirkung sie entfaltet, entscheidet letztlich unsere Haltung.
                </p>
              </div>
            </div>

            {/* Attribution */}
            <p className="text-xs text-muted-foreground italic mt-8">
              Geschrieben von Simona mit Hilfe von ChatGPT am 19.01.2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;
