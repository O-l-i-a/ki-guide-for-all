export interface ArticleData {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string;
  sources: string[];
  relatedArticleIds: number[];
}

export const articles: ArticleData[] = [
  {
    id: 1,
    title: "ChatGPT, Claude & Co: Ein Vergleich für den Bildungsbereich",
    description: "Welche KI-Tools eignen sich am besten für Schule und Universität? Wir vergleichen Stärken und Schwächen.",
    category: "Allgemein",
    readTime: "8 Min.",
    date: "10. Jan 2026",
    author: "Dr. Sarah Mueller",
    content: `
      <h2>Einführung</h2>
      <p>Künstliche Intelligenz hat die Bildungslandschaft grundlegend verändert. Mit einer Fülle von KI-Tools wie ChatGPT, Claude und anderen Plattformen können Lehrer, Schüler und Studenten ihre Arbeitsabläufe optimieren. Doch welche Tools sind wirklich für den Bildungsbereich geeignet? In diesem Artikel vergleichen wir die wichtigsten KI-Assistenten anhand ihrer Stärken, Schwächen und Eignung für den Bildungsbereich.</p>

      <h2>Vergleichsübersicht</h2>
      <table>
        <thead>
          <tr>
            <th>Kriterium</th>
            <th>ChatGPT</th>
            <th>Claude</th>
            <th>Gemini</th>
            <th>Copilot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Anbieter</strong></td>
            <td>OpenAI</td>
            <td>Anthropic</td>
            <td>Google</td>
            <td>Microsoft</td>
          </tr>
          <tr>
            <td><strong>Kostenlose Version</strong></td>
            <td>✅ Ja</td>
            <td>✅ Ja</td>
            <td>✅ Ja</td>
            <td>✅ Ja</td>
          </tr>
          <tr>
            <td><strong>Texterstellung</strong></td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td><strong>Quellenangaben</strong></td>
            <td>⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td><strong>Datenschutz</strong></td>
            <td>⭐⭐⭐</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td><strong>Bildungseignung</strong></td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>🤖 ChatGPT — Der Alleskönner</h2>
      <p>ChatGPT von OpenAI ist wahrscheinlich das bekannteste KI-Tool. Mit seiner umfassenden Trainingsdatenbank kann es eine Vielzahl von Aufgaben bewältigen – von der Erklärung komplexer Konzepte bis zur Unterstützung bei der Hausaufgabenvorbereitung.</p>

      <h3>✅ Vorteile</h3>
      <ul>
        <li><strong>Vielseitigkeit:</strong> Beherrscht Texterstellung, Zusammenfassungen, Übersetzungen und kreatives Schreiben</li>
        <li><strong>Lange Texte:</strong> Generiert ausführliche und gut strukturierte Antworten</li>
        <li><strong>Plugins & GPTs:</strong> Erweiterbar durch spezialisierte Mini-Anwendungen (z.B. Mathe-Tutor, Sprachtrainer)</li>
        <li><strong>Große Community:</strong> Umfangreiche Ressourcen und Tutorials verfügbar</li>
      </ul>

      <h3>❌ Nachteile</h3>
      <ul>
        <li><strong>Halluzinationen:</strong> Kann überzeugend klingende, aber faktisch falsche Informationen liefern</li>
        <li><strong>Keine Quellenangaben:</strong> In der kostenlosen Version fehlen Quellenverweise</li>
        <li><strong>Datenschutzbedenken:</strong> Daten können für das Training verwendet werden (opt-out möglich)</li>
        <li><strong>Aktualität:</strong> Wissen kann veraltet sein, außer bei der kostenpflichtigen Version mit Websuche</li>
      </ul>

      <blockquote>
        <p><strong>💡 Tipp für Lehrkräfte:</strong> ChatGPT eignet sich hervorragend zur schnellen Erstellung von Arbeitsblättern und differenzierten Übungsmaterialien. Ergebnisse sollten jedoch immer auf Richtigkeit geprüft werden.</p>
      </blockquote>

      <hr />

      <h2>🧠 Claude — Der Nachdenker</h2>
      <p>Claude von Anthropic zeichnet sich durch einen besonders nuancierten und sicherheitsbewussten Ansatz aus. Das Tool legt großen Wert auf ethische Überlegungen und ist für akademische Zwecke besonders wertvoll.</p>

      <h3>✅ Vorteile</h3>
      <ul>
        <li><strong>Analytische Tiefe:</strong> Durchdenkt komplexe Argumentationen und liefert differenzierte Antworten</li>
        <li><strong>Sicherheitsfokus:</strong> Besonders vorsichtig bei sensiblen oder kontroversen Themen</li>
        <li><strong>Langes Kontextfenster:</strong> Kann sehr umfangreiche Dokumente auf einmal verarbeiten</li>
        <li><strong>Datenschutz:</strong> Nutzt standardmäßig keine Gespräche für das Training</li>
      </ul>

      <h3>❌ Nachteile</h3>
      <ul>
        <li><strong>Übervorsichtigkeit:</strong> Verweigert manchmal harmlose Anfragen aus Sicherheitsgründen</li>
        <li><strong>Geringere Bekanntheit:</strong> Weniger Tutorials und Community-Ressourcen verfügbar</li>
        <li><strong>Keine Bildgenerierung:</strong> Kann im Gegensatz zu ChatGPT keine Bilder erstellen</li>
      </ul>

      <blockquote>
        <p><strong>💡 Tipp für Studierende:</strong> Claude eignet sich besonders gut für die kritische Analyse von Texten und die Überprüfung akademischer Argumentationen – ideal für die Vorbereitung von Hausarbeiten.</p>
      </blockquote>

      <hr />

      <h2>🔍 Gemini — Der Rechercheur</h2>
      <p>Gemini von Google kombiniert KI-Fähigkeiten mit der Google-Suchinfrastruktur und bietet damit einen einzigartigen Zugang zu aktuellen Informationen.</p>

      <h3>✅ Vorteile</h3>
      <ul>
        <li><strong>Aktuelle Informationen:</strong> Direkter Zugriff auf aktuelle Webinhalte über Google-Suche</li>
        <li><strong>Quellenangaben:</strong> Liefert automatisch Links zu den verwendeten Quellen</li>
        <li><strong>Integration:</strong> Nahtlose Verbindung mit Google Workspace (Docs, Sheets, Slides)</li>
        <li><strong>Multimodal:</strong> Kann Bilder, Videos und Text verarbeiten</li>
      </ul>

      <h3>❌ Nachteile</h3>
      <ul>
        <li><strong>Datenschutz:</strong> Enge Verknüpfung mit dem Google-Konto und Google-Diensten</li>
        <li><strong>Texterstellung:</strong> Bei längeren kreativen Texten nicht so stark wie ChatGPT oder Claude</li>
        <li><strong>Verfügbarkeit:</strong> Einige Funktionen sind regional oder durch Google-Konto eingeschränkt</li>
      </ul>

      <blockquote>
        <p><strong>💡 Tipp für Schüler:</strong> Gemini ist ideal für Rechercheaufgaben, da es automatisch Quellen angibt – perfekt für Referate und Präsentationen.</p>
      </blockquote>

      <hr />

      <h2>💼 Copilot — Der Assistent</h2>
      <p>Microsoft Copilot (ehemals Bing Chat) ist tief in das Microsoft-Ökosystem integriert und bietet für Schulen und Universitäten mit Microsoft 365 besondere Vorteile.</p>

      <h3>✅ Vorteile</h3>
      <ul>
        <li><strong>Office-Integration:</strong> Direkt in Word, PowerPoint, Excel und Teams verfügbar</li>
        <li><strong>Quellenangaben:</strong> Zeigt automatisch Quellen und Links an</li>
        <li><strong>Bildungsprogramme:</strong> Spezielle EDU-Lizenzen für Schulen und Hochschulen</li>
        <li><strong>Websuche:</strong> Zugriff auf aktuelle Informationen über Bing</li>
      </ul>

      <h3>❌ Nachteile</h3>
      <ul>
        <li><strong>Microsoft-Bindung:</strong> Volle Funktionalität nur im Microsoft-Ökosystem</li>
        <li><strong>Kreativität:</strong> Bei freien Textaufgaben weniger überzeugend als ChatGPT</li>
        <li><strong>Gespräche:</strong> Konversationen können in der kostenlosen Version begrenzt sein</li>
      </ul>

      <blockquote>
        <p><strong>💡 Tipp für Institutionen:</strong> Für Schulen, die bereits Microsoft 365 nutzen, bietet Copilot den einfachsten Einstieg in KI-gestütztes Arbeiten mit bekannten Tools.</p>
      </blockquote>

      <hr />

      <h2>Empfehlung nach Zielgruppe</h2>
      <table>
        <thead>
          <tr>
            <th>Zielgruppe</th>
            <th>Empfohlenes Tool</th>
            <th>Begründung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Schüler</strong></td>
            <td>Gemini / ChatGPT</td>
            <td>Einfacher Einstieg, Quellenangaben, kostenlos nutzbar</td>
          </tr>
          <tr>
            <td><strong>Studenten</strong></td>
            <td>Claude / ChatGPT</td>
            <td>Analytische Tiefe, akademische Qualität, lange Texte</td>
          </tr>
          <tr>
            <td><strong>Lehrer</strong></td>
            <td>ChatGPT / Copilot</td>
            <td>Materialgenerierung, Office-Integration, vielseitig einsetzbar</td>
          </tr>
          <tr>
            <td><strong>Professoren</strong></td>
            <td>Claude / Gemini</td>
            <td>Wissenschaftliche Analyse, Quellenarbeit, Datenschutz</td>
          </tr>
        </tbody>
      </table>

      <h2>Fazit</h2>
      <p>Es gibt nicht <em>das eine</em> perfekte KI-Tool für den Bildungsbereich. Die Wahl hängt von den spezifischen Anforderungen, dem Einsatzgebiet und den vorhandenen Infrastrukturen ab. Am wichtigsten ist, dass alle Beteiligten – Schüler, Studenten, Lehrer und Professoren – diese Tools <strong>verantwortungsvoll</strong> einsetzen, ihre Grenzen verstehen und die Ergebnisse stets kritisch hinterfragen.</p>
      <p>Unser Tipp: Probieren Sie mehrere Tools aus und finden Sie heraus, welches am besten zu Ihrem Arbeitsablauf passt. Kombinieren Sie die Stärken verschiedener Assistenten für optimale Ergebnisse.</p>
    `,
    sources: [
      "OpenAI ChatGPT Documentation (2025)",
      "Anthropic Claude Safety Research (2025)",
      "UNESCO KI und Bildung Bericht (2024)",
      "Journal of Educational Technology & Society (2025)",
    ],
    relatedArticleIds: [2, 4, 5],
  },
  {
    id: 2,
    title: "KI-gestützte Unterrichtsplanung: Praktische Tipps",
    description: "Wie Sie KI nutzen können, um effektiver zu planen ohne die Qualität zu verlieren.",
    category: "Lehrer",
    readTime: "7 Min.",
    date: "9. Jan 2026",
    author: "Prof. Michael Hoffmann",
    content: `
      <h2>Warum KI für Lehrkräfte wichtig ist</h2>
      <p>Die Unterrichtsplanung ist zeitaufwändig. Lehrkräfte investieren Stunden in die Vorbereitung von Materialien, Tests und Lektionsplänen. KI-Tools können diesen Prozess erheblich vereinfachen und mehr Zeit für das Wesentliche - die Schüler - freigeben.</p>
      
      <h2>Praktische Anwendungen</h2>
      <h3>1. Materialien erstellen</h3>
      <p>KI kann helfen, Arbeitsblätter, Tests und Übungsmaterialien zu erstellen. Durch die Angabe von Lernzielen und Themen können Lehrkräfte schnell professionelle Materialien generieren.</p>
      
      <h3>2. Lektionspläne entwickeln</h3>
      <p>Nutzen Sie KI, um strukturierte Lektionspläne zu erstellen, die verschiedene Lernstile berücksichtigen. Das Tool kann Aktivitäten vorschlagen, die Schüler engagieren und Konzepte verdeutlichen.</p>
      
      <h3>3. Differenzierung unterstützen</h3>
      <p>KI kann Materialien auf verschiedene Leistungsstufen anpassen. Dies hilft Lehrkräften, alle Schüler zu erreichen, unabhängig von ihrem derzeitigen Leistungsniveau.</p>
      
      <h2>Best Practices</h2>
      <p>Beginnen Sie mit kleinen Aufgaben und bauen Sie Ihre Vertrautheit mit KI-Tools schrittweise auf. Prüfen Sie immer die generierten Materialien auf Genauigkeit und Angemessenheit vor der Verwendung im Klassenzimmer.</p>
    `,
    sources: [
      "Ministry of Education AI Guidelines (2025)",
      "Teachers' Digital Literacy Report (2024)",
      "Educational Technology Today (2025)",
    ],
    relatedArticleIds: [1, 6],
  },
  {
    id: 3,
    title: "Rechtliche Grundlagen: KI und Urheberrecht im Unterricht",
    description: "Was dürfen Lehrer und Schüler? Ein Überblick über die aktuelle Rechtslage in Deutschland.",
    category: "Richtlinien",
    readTime: "6 Min.",
    date: "8. Jan 2026",
    author: "Dr. Jürgen Schneider",
    content: `
      <h2>Das deutsche Urheberrecht im KI-Zeitalter</h2>
      <p>Das deutsche Urheberrecht befindet sich in einer wichtigen Übergangsphase. Mit der zunehmenden Nutzung von KI-Tools stellen sich neue Fragen darüber, was erlaubt ist und was nicht.</p>
      
      <h2>KI-generierte Inhalte</h2>
      <h3>Urheberschaft von KI-Inhalten</h3>
      <p>In Deutschland werden KI-generierte Inhalte grundsätzlich nicht als geschützt betrachtet, wenn sie vollständig von einer KI erstellt wurden. Der Mensch, der die KI bedient hat, erhält automatisch keine Urheberrechte.</p>
      
      <h3>Nutzung von KI-Inhalten in der Schule</h3>
      <p>Lehrkräfte und Schüler dürfen KI nutzen, um Materialien zu erstellen, solange sie keine bestehenden Urheberrechte verletzen. Allerdings sollte transparent kommuniziert werden, dass KI bei der Erstellung beteiligt war.</p>
      
      <h2>Datenschutz und KI</h2>
      <p>Beim Einsatz von KI-Tools müssen Datenschutzbestimmungen beachtet werden. Personenbezogene Daten von Schülern sollten nicht in externe KI-Systeme eingegeben werden, ohne entsprechende Zustimmung.</p>
      
      <h2>Empfehlungen für Schulen</h2>
      <p>Schulen sollten klare Richtlinien für die Nutzung von KI etablieren, die sowohl Chancen als auch Risiken adressieren.</p>
    `,
    sources: [
      "Deutsches Urheberrechtsgesetz (UrhG) 2024",
      "GDPR und Schulen Leitfaden",
      "Bundeszentrale für politische Bildung (2025)",
      "Legal Tech Review (2025)",
    ],
    relatedArticleIds: [1, 5],
  },
  {
    id: 4,
    title: "Hausarbeiten im KI-Zeitalter: Wissenschaftliches Arbeiten neu gedacht",
    description: "Wie du KI ethisch korrekt für akademische Arbeiten einsetzen kannst.",
    category: "Studenten",
    readTime: "8 Min.",
    date: "10. Jan 2026",
    author: "Prof. Dr. Anna Richter",
    content: `
      <h2>Die Herausforderung</h2>
      <p>Studenten stehen vor einer beispiellosen Herausforderung: Wie können sie KI nutzen, ohne ihre akademische Integrität zu kompromittieren? Die Antwort ist nicht so einfach wie ein pauschales "Ja" oder "Nein".</p>
      
      <h2>Ethische Nutzung von KI</h2>
      <h3>Was ist erlaubt?</h3>
      <p>KI kann ein wertvolles Werkzeug sein für:</p>
      <p>- Brainstorming und Ideenentwicklung<br>
      - Literaturrecherche und Zusammenfassungen<br>
      - Überprüfung von Strukturen und Argumentationen<br>
      - Sprachkorrektionen und Stilverbesserungen</p>
      
      <h3>Was ist nicht erlaubt?</h3>
      <p>KI sollte nicht verwendet werden für:</p>
      <p>- Komplettes Schreiben der Arbeit<br>
      - Verbergen von KI-Nutzung<br>
      - Plagiat ohne Zitierung</p>
      
      <h2>Best Practices</h2>
      <p>Dokumentieren Sie Ihre KI-Nutzung transparent. Viele Universitäten erfordern mittlerweile eine Offenlegung, wenn KI bei der Erstellung von Arbeiten verwendet wurde. Dies ist nicht automatisch negativ - es zeigt Bewusstsein und Verantwortung.</p>
      
      <h2>Die Zukunft akademischer Arbeiten</h2>
      <p>Mit der Zeit werden sich auch die Universitätsrichtlinien weiter entwickeln. Der Fokus wird sich wahrscheinlich von der bloßen Beschränkung der KI-Nutzung zu deren ethisch verantwortungsvollen Einsatz verschieben.</p>
    `,
    sources: [
      "Council of Canadian Academies (2025)",
      "Academic Integrity in the Age of AI (2025)",
      "International Journal of Academic Research (2025)",
    ],
    relatedArticleIds: [1, 3, 5],
  },
  {
    id: 5,
    title: "KI als Lernhilfe richtig nutzen",
    description: "So unterstützt KI beim Lernen, ohne dass du betrugst oder den Lerneffekt verlierst.",
    category: "Schüler",
    readTime: "5 Min.",
    date: "10. Jan 2026",
    author: "Tom Wagner",
    content: `
      <h2>KI als dein persönlicher Tutor</h2>
      <p>KI-Tools können wie ein persönlicher Nachhilfelehrer funktionieren - immer verfügbar, nie ungeduldig. Aber nur wenn du sie richtig nutzt!</p>
      
      <h2>Smarte Wege, KI zu nutzen</h2>
      <h3>1. Konzepte erklären lassen</h3>
      <p>Wenn du etwas nicht verstehst, frage die KI danach. Sie kann Konzepte aus verschiedenen Blickwinkeln erklären, bis es "klick" macht.</p>
      
      <h3>2. Fragen zum Lernen generieren</h3>
      <p>Bitte die KI, Testfragen zu generieren. Dies hilft dir, dein Verständnis zu überprüfen, ohne die Antworten einfach abzuschreiben.</p>
      
      <h3>3. Deine Antworten überprüfen</h3>
      <p>Nachdem du eine Aufgabe gelöst hast, kann die KI dir helfen, deine Logik zu überprüfen. So lernst du von deinen Fehlern.</p>
      
      <h2>Fallen, die du vermeiden solltest</h2>
      <p>Lass die KI nicht einfach deine Hausaufgaben machen. Das mag kurzfristig einfacher sein, aber du verpasst das Lernen. Die echten Probleme entstehen beim Examen, wenn du auf die KI nicht zurückgreifen kannst.</p>
      
      <h2>Die goldene Regel</h2>
      <p>Nutze KI, um dein Verständnis zu vertiefen, nicht um es zu umgehen. Der wahre Wert liegt darin, dass du mehr lernst, nicht weniger arbeitest.</p>
    `,
    sources: [
      "Learning Science Review (2025)",
      "Cognitive Psychology and Education (2024)",
      "Student Success Center Study (2025)",
    ],
    relatedArticleIds: [1, 3, 4],
  },
  {
    id: 6,
    title: "Prüfungsformate im Wandel: Alternativen zur klassischen Hausarbeit",
    description: "Innovative Prüfungskonzepte für eine Welt mit allgegenwärtiger KI.",
    category: "Professoren",
    readTime: "12 Min.",
    date: "7. Jan 2026",
    author: "Prof. Dr. Reinhardt Beck",
    content: `
      <h2>Die traditionelle Hausarbeit unter Druck</h2>
      <p>Mit der allgegenwärtigen Verfügbarkeit von KI-Tools wird die traditionelle Hausarbeit als Evaluierungsmittel zunehmend in Frage gestellt. Es ist an der Zeit, innovative Prüfungsformate zu erkunden.</p>
      
      <h2>Neue Prüfungsformate</h2>
      <h3>1. Mündliche Prüfungen und Verteidigungen</h3>
      <p>Eine Rückkehr zu mündlichen Examen und Verteidigungen von Arbeiten kann sicherstellen, dass Studenten wirklich verstehen, worüber sie schreiben.</p>
      
      <h3>2. Projektbasierte Bewertungen</h3>
      <p>Praktische Projekte, die in der realen Welt anwendbar sind, können besser bewerten, ob Studenten Konzepte wirklich verstanden haben.</p>
      
      <h3>3. Prozessbasierte Bewertung</h3>
      <p>Die Bewertung des Prozesses, nicht nur des Endprodukts. Dies bedeutet, den Weg zu bewerten, den der Student gegangen ist, einschließlich Recherche, Überarbeitungen und Überlegungen.</p>
      
      <h3>4. Prüfung mit offenen Materialien</h3>
      <p>Examen, bei denen Studenten ihre Notizen, Bücher und sogar KI-Tools verwenden dürfen, fordern sie auf, wirklich kritisch zu denken, anstatt Wissen auswendig zu lernen.</p>
      
      <h2>Chancen und Herausforderungen</h2>
      <p>Diese neuen Formate erfordern mehr Zeit für Dozenten, bieten aber ein gerechteres und authentischeres Bild der Fähigkeiten der Studenten.</p>
      
      <h2>Implementierung</h2>
      <p>Eine schrittweise Einführung dieser Formate, gepaart mit klarer Kommunikation zu den Studenten über die Gründe für diese Änderungen, wird den Übergang erleichtern.</p>
    `,
    sources: [
      "Assessment in Higher Education Journal (2025)",
      "The Chronicle of Higher Education (2025)",
      "Innovative Assessment Practices (2024)",
      "Professional Development Quarterly (2025)",
    ],
    relatedArticleIds: [2, 3, 4],
  },
];

export const getArticleById = (id: number): ArticleData | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (articleIds: number[]): ArticleData[] => {
  return articles.filter((article) => articleIds.includes(article.id));
};
