export interface ArticleData {
  id: number;
  title: string;
  description: string;
  audiences: string[];
  readTime: string;
  date: string;
  author: string;
  externalUrl?: string;
  content: string;
  sources: string[];
  relatedArticleIds: number[];
}

export const articles: ArticleData[] = [
  {
    id: 1,
    title: "Meinungsbild unter Schülern zur Nutzung von KI im Klassenraum",
    description:
      "Befragungsergebnisse zeigen, wie Schüler:innen KI im Unterricht nutzen und welche Erwartungen sie an die Zukunft haben.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~6 Min.",
    date: "Nicht klar angegeben",
    author: "bildung.digital",
    externalUrl:
      "https://www.bildung.digital/artikel/wie-schuelerinnen-und-schueler-ki-im-unterricht-nutzen",
    content:
      "<p>Der Artikel beschreibt Ergebnisse einer Befragung zur KI-Nutzung im Unterricht: persönliche Lernhilfe, mehr Motivation und der Wunsch nach langfristiger Nutzung.</p>",
    sources: [
      "https://www.bildung.digital/artikel/wie-schuelerinnen-und-schueler-ki-im-unterricht-nutzen",
    ],
    relatedArticleIds: [2, 5, 6],
  },
  {
    id: 2,
    title:
      "Gezielte Nutzung der KI in der Lehre schützt vor fehlerhaftem und unerwünschtem Output",
    description:
      "Wie generative KI Lehrende bei Kursplanung und Lernzielen unterstützt, ohne pädagogische Urteile zu ersetzen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~8-9 Min.",
    date: "05.11.2024",
    author: "Charlotte Pardey (Forschung & Lehre)",
    externalUrl:
      "https://www.forschung-und-lehre.de/lehre/was-kann-ki-fuer-lehrende-tun-6729",
    content:
      "<p>Der Beitrag zeigt konkrete Einsatzfelder generativer KI in der Hochschullehre und betont die Rolle menschlicher pädagogischer Verantwortung.</p>",
    sources: ["https://www.forschung-und-lehre.de/lehre/was-kann-ki-fuer-lehrende-tun-6729"],
    relatedArticleIds: [3, 4, 5],
  },
  {
    id: 3,
    title: "Podcastfolge des Deutschlandfunks zur KI-Nutzung an Hochschulen",
    description:
      "Podcast über Chancen und Risiken von KI auf dem Hochschulcampus in Lehre, Prüfungen und Betreuung.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "35 Min. (Podcast)",
    date: "22.05.2025",
    author: "Deutschlandfunk",
    externalUrl:
      "https://www.deutschlandfunk.de/ki-campus-hochschule-lehre-professor-100.html",
    content:
      "<p>Audio-Beitrag zur praktischen KI-Nutzung an Hochschulen mit Fokus auf Perspektiven von Lehrenden und Studierenden.</p>",
    sources: ["https://www.deutschlandfunk.de/ki-campus-hochschule-lehre-professor-100.html"],
    relatedArticleIds: [2, 4],
  },
  {
    id: 4,
    title: "Aktuelles Übersichtspaper des BMBF zum Stand der KI in Bildung und Lehre",
    description:
      "Wissenschaftlicher Überblick zu KI-Tools, Chancen und Risiken für Lernprozesse in Schule und Hochschule.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~15-20 Min.",
    date: "2025",
    author: "Empirische Bildungsforschung (BMBF/SFJ)",
    externalUrl: "https://www.empirische-bildungsforschung-bmbfsfj.de/img/KI_Review.pdf",
    content:
      "<p>Review-Paper mit aktuellem Forschungsstand zur KI in Bildung und Lehre und Empfehlungen für sinnvolle Anwendung.</p>",
    sources: ["https://www.empirische-bildungsforschung-bmbfsfj.de/img/KI_Review.pdf"],
    relatedArticleIds: [2, 3, 5, 6],
  },
  {
    id: 5,
    title:
      "Artikel zum Konzept einer Einführung von Niveaustufen der Schüler bei der KI-Nutzung",
    description:
      "KI-Kompetenzmodell mit drei Niveaustufen für Schülerinnen, Schüler und Lehrkräfte.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~8 Min.",
    date: "14.03.2025 (akt. 03.09.2025)",
    author: "Joscha Falck (Deutsches Schulportal)",
    externalUrl:
      "https://deutsches-schulportal.de/expertenstimmen/ki-kompetenzen-diese-faehigkeiten-brauchen-lehrkraefte-und-schueler/",
    content:
      "<p>Vorgestellt wird ein Kompetenzmodell für Lernen über, mit und durch KI von Basis- bis Expertenniveau.</p>",
    sources: [
      "https://deutsches-schulportal.de/expertenstimmen/ki-kompetenzen-diese-faehigkeiten-brauchen-lehrkraefte-und-schueler/",
    ],
    relatedArticleIds: [1, 2, 4, 6],
  },
  {
    id: 6,
    title: "Unterrichtseinheit zu ethischen und praktischen Fragen der KI",
    description:
      "Material für den Unterricht zur reflektierten Beurteilung von Chancen und Gefahren von KI.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~10 Min.",
    date: "Nicht klar angegeben",
    author: "Wandelvernetztdenken.ch",
    externalUrl:
      "https://www.wandelvernetztdenken.ch/aktuelle-themen/thema-5-kuenstliche-intelligenz-%e2%80%92-ethische-und-praktische-fragen/",
    content:
      "<p>Die Unterrichtseinheit behandelt ethische und praktische Fragen zu KI und stärkt die Urteilsfähigkeit von Lernenden.</p>",
    sources: [
      "https://www.wandelvernetztdenken.ch/aktuelle-themen/thema-5-kuenstliche-intelligenz-%e2%80%92-ethische-und-praktische-fragen/",
    ],
    relatedArticleIds: [1, 4, 5],
  },
  {
    id: 7,
    title: "Zentrale Informationsseite des Landesbildungsservers (Berlin-Brandenburg)",
    description:
      "Orientierungsseite mit Materialien, Projekten und weiterführenden Links zu digitaler Bildung und KI im schulischen Kontext.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Variabel",
    date: "Laufend aktualisiert",
    author: "Landesbildungsserver Berlin-Brandenburg",
    externalUrl: "https://bildungsserver.berlin-brandenburg.de/jwd/startseite",
    content:
      "<p>Zentrale Einstiegsseite mit Link-Sammlung und Ressourcen für digitale Bildung und KI im Schulbereich.</p>",
    sources: ["https://bildungsserver.berlin-brandenburg.de/jwd/startseite"],
    relatedArticleIds: [8, 12, 25],
  },
  {
    id: 8,
    title: "KI-Campus - offene Online-Kurse (MOOCs)",
    description:
      "Kostenfreie Online-Kurse zu KI-Grundlagen, Anwendungen und gesellschaftlichen Fragen für Bildung und Weiterbildung.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Kursabhängig",
    date: "Laufend erweitert",
    author: "KI-Campus",
    externalUrl: "https://ki-campus.org/",
    content:
      "<p>Offene Lernplattform mit strukturierten KI-Kursen von Grundlagen bis Vertiefung.</p>",
    sources: ["https://ki-campus.org/"],
    relatedArticleIds: [20, 24],
  },
  {
    id: 9,
    title: "Brauchen wir in Zeiten von KI noch Lehrkräfte? (Faktencheck)",
    description:
      "Wissenschaftlich fundierter Beitrag dazu, warum KI Lehrkräfte unterstützt, aber nicht ersetzt.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~7 Min.",
    date: "Nicht klar angegeben",
    author: "Empirische Bildungsforschung (BMBF/SFJ)",
    externalUrl:
      "https://www.empirische-bildungsforschung-bmbfsfj.de/de/Faktencheck-3-Brauchen-wir-in-Zeiten-von-KI-noch-Lehrkrafte-2584.html",
    content:
      "<p>Der Faktencheck zeigt die Grenzen automatisierter Systeme und begründet die zentrale Rolle pädagogischer Professionalität.</p>",
    sources: [
      "https://www.empirische-bildungsforschung-bmbfsfj.de/de/Faktencheck-3-Brauchen-wir-in-Zeiten-von-KI-noch-Lehrkrafte-2584.html",
    ],
    relatedArticleIds: [4, 5, 27],
  },
  {
    id: 10,
    title: "Ideen zur Rolle von KI im Klassenzimmer der Zukunft",
    description:
      "Didaktische Szenarien und Zukunftsideen zur Rolle von KI im Unterricht und zu veränderten Lernrollen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~8 Min.",
    date: "Nicht klar angegeben",
    author: "Bundeszentrale für politische Bildung (bpb)",
    externalUrl:
      "https://www.bpb.de/lernen/digitale-bildung/werkstatt/256629/ideen-zur-rolle-von-kuenstlicher-intelligenz-im-klassenzimmer-der-zukunft/",
    content:
      "<p>Sammlung didaktischer Zukunftsszenarien für den reflektierten KI-Einsatz im Unterricht.</p>",
    sources: [
      "https://www.bpb.de/lernen/digitale-bildung/werkstatt/256629/ideen-zur-rolle-von-kuenstlicher-intelligenz-im-klassenzimmer-der-zukunft/",
    ],
    relatedArticleIds: [22, 27],
  },
  {
    id: 11,
    title: "KI im Bildungssystem - Schlussbericht (Telekom-Stiftung)",
    description:
      "Umfangreiche Studie zu Potenzialen, Grenzen und Handlungsempfehlungen für KI im Bildungssystem.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~20-30 Min.",
    date: "Nicht klar angegeben",
    author: "Deutsche Telekom Stiftung",
    externalUrl:
      "https://www.telekom-stiftung.de/sites/default/files/files/media/publications/KI%20Bildung%20Schlussbericht.pdf",
    content:
      "<p>Der Schlussbericht beleuchtet strategische Entwicklungsfelder für Schule und Bildungspolitik beim KI-Einsatz.</p>",
    sources: [
      "https://www.telekom-stiftung.de/sites/default/files/files/media/publications/KI%20Bildung%20Schlussbericht.pdf",
    ],
    relatedArticleIds: [25, 26],
  },
  {
    id: 12,
    title: "KI in der Schule - Denkimpuls Bildung (Initiative D21)",
    description:
      "Positionspapier zur strategischen Integration von KI in Schulen mit Fokus auf Kompetenzen und Infrastruktur.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~10-12 Min.",
    date: "Nicht klar angegeben",
    author: "Initiative D21",
    externalUrl:
      "https://initiatived21.de/uploads/03_Studien-Publikationen/Denkimpulse-Bildung/01-KI-in-der-Schule/d21denkimpuls-bildung01-schule_ki.pdf",
    content:
      "<p>Denkimpuls mit Empfehlungen zu Rahmenbedingungen, Infrastruktur und Kompetenzaufbau im Schulkontext.</p>",
    sources: [
      "https://initiatived21.de/uploads/03_Studien-Publikationen/Denkimpulse-Bildung/01-KI-in-der-Schule/d21denkimpuls-bildung01-schule_ki.pdf",
    ],
    relatedArticleIds: [11, 26],
  },
  {
    id: 13,
    title: "KI-Area9 - Künstliche Intelligenz im Klassenraum",
    description:
      "Praxisnahes Dossier mit Beispielen, Interviews und Unterrichtsideen zum Einsatz von KI im Schulalltag.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~10 Min.",
    date: "Nicht klar angegeben",
    author: "Deutsches Schulportal",
    externalUrl:
      "https://deutsches-schulportal.de/unterricht/ki-area9-kuenstliche-intelligenz-im-klassenraum/",
    content:
      "<p>Dossier mit erprobten Praxisbeispielen für Lehrkräfte und Schulleitungen.</p>",
    sources: [
      "https://deutsches-schulportal.de/unterricht/ki-area9-kuenstliche-intelligenz-im-klassenraum/",
    ],
    relatedArticleIds: [14, 27],
  },
  {
    id: 14,
    title: "KI als Leistungsbeschleuniger im Bildungsbereich",
    description:
      "Analyse, wie KI Lernprozesse individualisieren und beschleunigen kann, inklusive pädagogischer Chancen und Risiken.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~6-7 Min.",
    date: "Nicht klar angegeben",
    author: "Deutscher Bildungsserver",
    externalUrl:
      "https://www.bildungsserver.de/bildung+innovation/kuenstliche-intelligenz-kann-im-bildungsbereich-als-leistungsbeschleuniger-eingesetzt-werden-1161.html",
    content:
      "<p>Der Beitrag betrachtet Potenziale für adaptive Lernwege und die Grenzen beschleunigter Lernprozesse.</p>",
    sources: [
      "https://www.bildungsserver.de/bildung+innovation/kuenstliche-intelligenz-kann-im-bildungsbereich-als-leistungsbeschleuniger-eingesetzt-werden-1161.html",
    ],
    relatedArticleIds: [15, 27],
  },
  {
    id: 15,
    title: "Künstliche Intelligenz im Klassenzimmer - Überblick",
    description:
      "Übersichtsartikel zu Einsatzmöglichkeiten von KI im Unterricht mit didaktischen Perspektiven und Praxisbeispielen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~7 Min.",
    date: "Nicht klar angegeben",
    author: "Deutscher Bildungsserver",
    externalUrl:
      "https://www.bildungsserver.de/bildung+innovation/kuenstliche-intelligenz-im-klassenzimmer-1149.html",
    content:
      "<p>Ein kompakter Einstieg in pädagogische Chancen, Risiken und Beispiele für den Unterricht.</p>",
    sources: [
      "https://www.bildungsserver.de/bildung+innovation/kuenstliche-intelligenz-im-klassenzimmer-1149.html",
    ],
    relatedArticleIds: [14, 22],
  },
  {
    id: 16,
    title: "Unterrichtseinheit: Wie KI unsere Welt verändert (Mittelstufe)",
    description:
      "Ausgearbeitete Unterrichtseinheit zu gesellschaftlichen, ethischen und technologischen Aspekten von KI.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Mehrere Unterrichtsstunden",
    date: "Nicht klar angegeben",
    author: "SPIEGEL Ed",
    externalUrl:
      "https://ed.spiegel.de/unterrichtsmaterial/unterrichtseinheiten-fuer-die-mittelstufe/wie-kuenstliche-intelligenz-unsere-welt-veraendert",
    content:
      "<p>Didaktisch aufbereitete Unterrichtseinheit mit Aufgaben und Reflexion zur KI im Alltag.</p>",
    sources: [
      "https://ed.spiegel.de/unterrichtsmaterial/unterrichtseinheiten-fuer-die-mittelstufe/wie-kuenstliche-intelligenz-unsere-welt-veraendert",
    ],
    relatedArticleIds: [19, 18],
  },
  {
    id: 17,
    title: "Unterrichtseinheit: Voll smart - meine Zukunft mit KI",
    description:
      "Unterrichtsmodul zur reflektierten Auseinandersetzung mit KI im Alltag mit Fokus auf Medienkompetenz.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Mehrere Unterrichtsstunden",
    date: "Nicht klar angegeben",
    author: "digibits",
    externalUrl:
      "https://www.digibits.de/materialien/digibits-unterrichtseinheit-voll-smart-meine-zukunft-mit-ki/",
    content:
      "<p>Modul für Schule und Projektarbeit zu Zukunftsfragen und KI-Kompetenzen.</p>",
    sources: [
      "https://www.digibits.de/materialien/digibits-unterrichtseinheit-voll-smart-meine-zukunft-mit-ki/",
    ],
    relatedArticleIds: [16, 19],
  },
  {
    id: 18,
    title: "Praxisleitfaden: ChatGPT & textgenerierende KI",
    description:
      "Leitfaden zu Chancen, Risiken, Datenschutz und Missbrauch textgenerierender KI im Bildungsbereich.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~12-15 Min.",
    date: "Nicht klar angegeben",
    author: "klicksafe",
    externalUrl:
      "https://www.klicksafe.de/fileadmin/cms/download/Material/klicksafe_Material-paed-Praxis_ChatGPT.pdf",
    content:
      "<p>Praxisorientierte Hinweise für einen sicheren und reflektierten Einsatz von Text-KI im Unterricht.</p>",
    sources: [
      "https://www.klicksafe.de/fileadmin/cms/download/Material/klicksafe_Material-paed-Praxis_ChatGPT.pdf",
    ],
    relatedArticleIds: [21, 25],
  },
  {
    id: 19,
    title: "Künstliche Intelligenz & ChatGPT - Bildungsmaterialien (Siemens Stiftung)",
    description:
      "Materialien zur Funktionsweise und Einordnung von KI-Systemen für MINT- und fächerübergreifenden Unterricht.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Materialabhängig",
    date: "Nicht klar angegeben",
    author: "Siemens Stiftung",
    externalUrl:
      "https://medienportal.siemens-stiftung.org/de/kuenstliche-intelligenz-chatgpt-114734",
    content:
      "<p>Materialsammlung zur technischen Einordnung von KI und didaktischer Nutzung in verschiedenen Fächern.</p>",
    sources: [
      "https://medienportal.siemens-stiftung.org/de/kuenstliche-intelligenz-chatgpt-114734",
    ],
    relatedArticleIds: [16, 17],
  },
  {
    id: 20,
    title: "Sinnvolle Aufgaben stellen, wenn KI schon alles kann",
    description:
      "Didaktischer Beitrag zur Gestaltung anspruchsvoller Lernaufgaben trotz KI-Tools mit Fokus auf Reflexion.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~7-8 Min.",
    date: "Nicht klar angegeben",
    author: "Deutsches Schulportal",
    externalUrl:
      "https://deutsches-schulportal.de/unterricht/wenn-die-ki-schon-alles-kann-sinnvolle-aufgaben-fuer-den-projektunterricht-stellen/",
    content:
      "<p>Der Beitrag zeigt, wie Lernaufgaben auf Problemlösen, Transfer und Reflexion ausgerichtet werden können.</p>",
    sources: [
      "https://deutsches-schulportal.de/unterricht/wenn-die-ki-schon-alles-kann-sinnvolle-aufgaben-fuer-den-projektunterricht-stellen/",
    ],
    relatedArticleIds: [13, 27],
  },
  {
    id: 21,
    title: "KI-Superkräfte für die Umwelt",
    description:
      "Unterrichtsmaterialien, die KI mit Umwelt- und Nachhaltigkeitsthemen verbinden und reale Problemstellungen aufgreifen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Unterrichtsabhängig",
    date: "Nicht klar angegeben",
    author: "Science on Stage Deutschland",
    externalUrl: "https://www.science-on-stage.de/material/ki-superkraefte-fuer-die-umwelt",
    content:
      "<p>Fachübergreifende Materialien zu KI-Anwendungen im Kontext Umwelt und Nachhaltigkeit.</p>",
    sources: ["https://www.science-on-stage.de/material/ki-superkraefte-fuer-die-umwelt"],
    relatedArticleIds: [16, 19],
  },
  {
    id: 22,
    title: "Fobizz-Materialsammlung: KI im Schulalltag",
    description:
      "Kuratiertes Materialpaket mit Fortbildungen, Tools und Unterrichtsideen für den schulischen Alltag.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Variabel",
    date: "Nicht klar angegeben",
    author: "fobizz",
    externalUrl: "https://app.fobizz.com/collections/9a69f1cf-7385-4f9a-a9dc-f5b3cf445ebf",
    content:
      "<p>Sammlung praxiserprobter Ressourcen für Unterrichtsplanung und professionelle Weiterbildung.</p>",
    sources: ["https://app.fobizz.com/collections/9a69f1cf-7385-4f9a-a9dc-f5b3cf445ebf"],
    relatedArticleIds: [13, 20],
  },
  {
    id: 23,
    title: "Prompt Engineering - Spot if AI",
    description:
      "Einführung in das gezielte Formulieren von Prompts als Schlüsselkompetenz im Umgang mit KI-Systemen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~5-6 Min.",
    date: "Nicht klar angegeben",
    author: "articlett.schule",
    externalUrl: "https://articlett.schule/spot-if-ai-prompt-engineering/",
    content:
      "<p>Praktischer Einstieg in Prompting mit konkreten Regeln und Beispielen für Bildungskontexte.</p>",
    sources: ["https://articlett.schule/spot-if-ai-prompt-engineering/"],
    relatedArticleIds: [18, 19],
  },
  {
    id: 24,
    title: "KI in der Schule diskutieren (OER)",
    description:
      "Open-Source-Materialien zur kritischen Auseinandersetzung mit KI, Ethik und gesellschaftlichen Auswirkungen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Variabel",
    date: "Nicht klar angegeben",
    author: "Jugend hackt",
    externalUrl: "https://jugendhackt.org/oer/projekte/ki-in-der-schule-diskutieren/",
    content:
      "<p>OER-Projektmaterial für Diskussion, Reflexion und partizipative Unterrichtsformate rund um KI.</p>",
    sources: ["https://jugendhackt.org/oer/projekte/ki-in-der-schule-diskutieren/"],
    relatedArticleIds: [16, 17],
  },
  {
    id: 25,
    title: "Unterrichtseinheit: KI, ChatGPT & Co.",
    description:
      "Unterrichtseinheit zur praktischen Nutzung und Reflexion von KI-Tools mit Alltagsbezug.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Mehrere Unterrichtsstunden",
    date: "Nicht klar angegeben",
    author: "Zeit für die Schule",
    externalUrl:
      "https://www.zeitfuerdieschule.de/materialien/unterrichtseinheit/kuenstliche-intelligenz-chatgpt-co/",
    content:
      "<p>Didaktische Einheit zur strukturierten Erprobung und Reflexion von KI-Anwendungen im Unterricht.</p>",
    sources: [
      "https://www.zeitfuerdieschule.de/materialien/unterrichtseinheit/kuenstliche-intelligenz-chatgpt-co/",
    ],
    relatedArticleIds: [16, 17],
  },
  {
    id: 26,
    title: "KI-Kurs - Selbstlernplattform",
    description:
      "Interaktive Selbstlernplattform zu KI-Grundlagen für Schule, Studium und Weiterbildung.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Modulabhängig",
    date: "Nicht klar angegeben",
    author: "KI-Kurs",
    externalUrl: "https://ki-kurs.org/app/entry-page",
    content:
      "<p>Modularer Einstieg in KI-Kompetenzen mit Selbstlernformaten für unterschiedliche Niveaus.</p>",
    sources: ["https://ki-kurs.org/app/entry-page"],
    relatedArticleIds: [8, 24],
  },
  {
    id: 27,
    title: "Hinweise zu textgenerierenden KI-Systemen (Leitfaden)",
    description:
      "Wissenschaftlicher Leitfaden zum didaktischen Umgang mit Text-KI, Prüfungen und akademischer Integrität.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~10-15 Min.",
    date: "Nicht klar angegeben",
    author: "Wissenschaftliche Autor:innengruppe (ResearchGate)",
    externalUrl:
      "https://www.researchgate.net/publication/368033415_Hinweise_zu_textgenerierenden_KI-Systemen_im_Kontext_von_Lehre_und_Lernen",
    content:
      "<p>Leitfaden für Hochschullehre zu Transparenz, Prüfungsdesign und verantwortlicher Nutzung von Text-KI.</p>",
    sources: [
      "https://www.researchgate.net/publication/368033415_Hinweise_zu_textgenerierenden_KI-Systemen_im_Kontext_von_Lehre_und_Lernen",
    ],
    relatedArticleIds: [2, 3, 24],
  },
  {
    id: 28,
    title: "KI in der Schule - APuZ",
    description:
      "Politisch-gesellschaftliche Einordnung von KI im schulischen Kontext mit Fokus auf Bildungsgerechtigkeit.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~8 Min.",
    date: "2023",
    author: "Bundeszentrale für politische Bildung (APuZ)",
    externalUrl:
      "https://www.bpb.de/shop/zeitschriften/apuz/kuenstliche-intelligenz-2023/541500/ki-in-der-schule/",
    content:
      "<p>Der Beitrag ordnet KI in Schule aus demokratie- und bildungspolitischer Perspektive ein.</p>",
    sources: [
      "https://www.bpb.de/shop/zeitschriften/apuz/kuenstliche-intelligenz-2023/541500/ki-in-der-schule/",
    ],
    relatedArticleIds: [10, 26],
  },
  {
    id: 29,
    title: "Video-Reihe: KI einfach erklärt (YouTube)",
    description:
      "Niedrigschwellige Video-Reihe zur Erklärung von KI-Grundlagen und Bildungsbezügen.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Playlistabhängig",
    date: "Nicht klar angegeben",
    author: "YouTube-Kanal",
    externalUrl:
      "https://www.youtube.com/watch?v=gTo52bbMbyw&list=PLLHNRTxnLIPJLHcEK062cQde1ILAxDW3R&index=1",
    content:
      "<p>Video-Playlist mit Basiswissen und anschaulichen Erklärungen zu KI für Lernende.</p>",
    sources: [
      "https://www.youtube.com/watch?v=gTo52bbMbyw&list=PLLHNRTxnLIPJLHcEK062cQde1ILAxDW3R&index=1",
    ],
    relatedArticleIds: [8, 26],
  },
  {
    id: 30,
    title: "unidigital.news - KI & Hochschule",
    description:
      "Nachrichten- und Analyseportal zur Digitalisierung und KI im Hochschulkontext.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "Artikelabhängig",
    date: "Nicht klar angegeben",
    author: "unidigital.news",
    externalUrl: "https://www.unidigital.news/",
    content:
      "<p>Portal mit laufenden Beiträgen zu KI-Entwicklungen in Studium, Lehre und Hochschulorganisation.</p>",
    sources: ["https://www.unidigital.news/"],
    relatedArticleIds: [3, 27],
  },
  {
    id: 31,
    title: "Handlungsempfehlungen: KI in der Bildung (DKJS)",
    description:
      "Praxisorientierte Empfehlungen für verantwortungsvollen und chancengerechten KI-Einsatz im Bildungssystem.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~12 Min.",
    date: "Nicht klar angegeben",
    author: "Deutsche Kinder- und Jugendstiftung",
    externalUrl:
      "https://www.dkjs.de/publikation/handlungsempfehlungen-kuenstliche-intelligenz-in-der-bildung/",
    content:
      "<p>Empfehlungskatalog für Schulen und Bildungsträger mit Fokus auf Fairness, Zugang und Umsetzung.</p>",
    sources: [
      "https://www.dkjs.de/publikation/handlungsempfehlungen-kuenstliche-intelligenz-in-der-bildung/",
    ],
    relatedArticleIds: [25, 26],
  },
  {
    id: 32,
    title: "10 Handlungsempfehlungen - Weizenbaum-Institut",
    description:
      "Wissenschaftlich fundierte Leitlinien für Bildungseinrichtungen mit Fokus auf Ethik, Transparenz und Verantwortung.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~6-7 Min.",
    date: "Nicht klar angegeben",
    author: "Weizenbaum-Institut",
    externalUrl:
      "https://www.weizenbaum-institut.de/news/detail/kuenstliche-intelligenz-in-der-bildung-10-handlungsempfehlungen/",
    content:
      "<p>Die Handlungsempfehlungen formulieren institutionelle Leitplanken für den verantwortlichen KI-Einsatz.</p>",
    sources: [
      "https://www.weizenbaum-institut.de/news/detail/kuenstliche-intelligenz-in-der-bildung-10-handlungsempfehlungen/",
    ],
    relatedArticleIds: [31, 11],
  },
  {
    id: 33,
    title: "KI in der Schule - Forscher fordern Umdenken (MDR)",
    description:
      "Journalistischer Beitrag über Forschungsperspektiven und die Notwendigkeit neuer Lern- und Prüfungsformate.",
    audiences: ["Schüler", "Lehrer", "Allgemein"],
    readTime: "~6-7 Min.",
    date: "Nicht klar angegeben",
    author: "MDR Wissen",
    externalUrl:
      "https://www.mdr.de/wissen/bildung/ki-in-der-schule-forscher-fordern-umdenken-anderes-lernen100.html",
    content:
      "<p>Beitrag zur Debatte über neue Kompetenzprofile und veränderte Prüfungs- und Unterrichtsformen.</p>",
    sources: [
      "https://www.mdr.de/wissen/bildung/ki-in-der-schule-forscher-fordern-umdenken-anderes-lernen100.html",
    ],
    relatedArticleIds: [20, 31],
  },
];

export const getArticleById = (id: number): ArticleData | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (articleIds: number[]): ArticleData[] => {
  return articles.filter((article) => articleIds.includes(article.id));
};
