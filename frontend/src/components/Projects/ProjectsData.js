const projects = [
  {
    name: "Agentur Website",
    techUsed: ["React", "Typescript"],
    description:
      "Umsetzung einer hochmodernen Website für das Inbound-Marketing-Startup meines Bruders. Das Design der Website ist sehr anspruchsvoll und beinhaltet viele Animationen sowie stilistische Finessen, was sie zu einer besonderen Herausforderung in der Umsetzung macht.",
    features: [
      {
        key: "Custome Animationen",
        description:
          "Die stilistischen Finessen und Animationen machen die Umsetzung der Website zu einer besonderen Herausforderung.",
      },
      {
        key: "Responsives Design",
        description:
          "Die Website ist für verschiedene Geräte optimiert, einschließlich Desktop, Tablet und Mobilgeräte.",
      },
      {
        key: "SEO-Optimierung",
        description:
          "Die Website ist für Suchmaschinen optimiert, um eine hohe Sichtbarkeit und Auffindbarkeit zu gewährleisten.",
      },
      {
        key: "Lead-Generierung",
        description:
          "Integrierte Funktionen zur Lead-Generierung, einschließlich Kontaktformulare, Newsletter-Anmeldungen und Call-to-Action-Buttons.",
      },
      {
        key: "Social Media Integration",
        description:
          "Nahtlose Integration von Social-Media-Plattformen zur Förderung der Online-Präsenz und des Engagements.",
      },
      {
        key: "Analyse-Tools",
        description:
          "Eingebaute Analyse-Tools zur Überwachung und Analyse des Website-Traffics und des Benutzerverhaltens.",
      },
    ],
    liveSite: false,
    gitHub: false,
    gallery: [
      "/img/teamraygun1.png",
      "/img/teamraygun2.png",
      "/img/teamraygun3.png",
    ],
    color: {
      bg: "#0D0E1D",
      text: "#E7EFEF",
      highlight: "#5B61F0",
      block: "#1D1E2B",
    },
  },
  {
    name: "Fullstack Team Projekt",
    techUsed: ["React", "Node JS", "Express JS", "Mongoose", "MongoDB"],
    description:
      "Finstagram ist ein responsiver Instagram-Klon, der eine breite Palette an Social-Media-Funktionalitäten bietet. Er wurde mit React für das Frontend und Mongoose sowie Express.js für das Backend entwickelt. Benutzer können anderen folgen, nach Personen und Hashtags suchen, Bilder mit Filtern posten, Beiträge liken, speichern und kommentieren und vieles mehr.",
    features: [
      {
        key: "Benutzerregistrierung und -authentifizierung",
        description:
          "Registriere ein neues Konto, verifiziere deine E-Mail und logge dich ein. Bleibe mit Hilfe von Refresh-Tokens eingeloggt.",
      },
      {
        key: "Benutzerverwaltung",
        description:
          "Folge und entfolge Benutzern, bearbeite Profile und füge Profilbilder hinzu.",
      },
      {
        key: "Bilder posten",
        description:
          "Lade Bilder hoch, nachdem du verschiedene Filter angewendet hast.",
      },
      {
        key: "Hashtags",
        description:
          "Füge Posts Hashtags hinzu, suche nach Hashtags und sieh dir alle Beiträge mit bestimmten Hashtags an.",
      },
      {
        key: "Engagement",
        description:
          "Like, speichere und kommentiere Beiträge. Kommentiere Kommentare. Sieh dir alle geliketen und gespeicherten Beiträge an.",
      },
      {
        key: "Dunkelmodus",
        description:
          "Ein optisch ansprechender Dunkelmodus für eine bessere Benutzererfahrung.",
      },
      {
        key: "Bildzuschnitt",
        description:
          "Hochgeladene Bilder werden vor dem Speichern zugeschnitten, um den Speicherplatz der Datenbank zu optimieren.",
      },
      {
        key: "Chat-Funktionalität",
        description: "Chatte mit Personen, denen du folgst.",
      },
      {
        key: "Posteingang",
        description:
          "Sieh Benachrichtigungen für Likes und Kommentare zu deinen Beiträgen und Kommentaren.",
      },
      {
        key: "Entdecken/Suchseite",
        description:
          "Erkunde Beiträge von Benutzern, denen du nicht folgst. Suche nach Benutzern und Hashtags.",
      },
    ],
    liveSite: "https://www.mern-stack.de/",
    gitHub: "https://github.com/MichaelGee76/finstergram",
    gallery: [
      "/img/finsta_light.png",
      "/img/finsta_dark.png",
      "/img/fints_bright1.png",
      "/img/fints_bright2.png",
      "/img/fints_bright3.png",
      "/img/fints_bright4.png",
      "/img/fints_bright5.png",
      "/img/fints_bright6.png",
      "/img/finsta_dark1.png",
      "/img/finsta_dark2.png",
      "/img/finsta_dark3.png",
      "/img/finsta_dark4.png",
      "/img/finsta_dark5.png",
      "/img/finsta_dark6.png",
      "/img/finsta_dark7.png",
    ],
    color: {
      bg: "#FFE6EA",
      text: "#212121",
      highlight: "#FF4D67",
      block: "#FDFDFD",
    },
  },
  {
    name: "Fullstack Twitter Klon",
    techUsed: ["React", "Node JS", "Express JS", "Mongoose", "MongoDB"],
    description:
      "Tweety ist ein voll funktionsfähiger Twitter-Klon, der mit modernen Webentwicklungstechnologien erstellt wurde. Dieses Projekt zeigt die Implementierung einer Social-Media-Plattform mit dem MERN-Stack (MongoDB, Express.js, React, Node.js). Die Design-Inspiration stammt von einem Dribbble-Konzept, und das Projekt wurde als Desktop-Anwendung entwickelt. Eine der wichtigsten Erkenntnisse in diesem Projekt war die Implementierung einer 'Login mit Google'-Authentifizierungsfunktion.",
    features: [
      {
        key: "Benutzerauthentifizierung",
        description: "Registrierungs-, Anmelde- und Abmeldefunktionen.",
      },
      {
        key: "Login mit Google",
        description: "Benutzer können sich mit ihrem Google-Konto anmelden.",
      },
      {
        key: "Tweet-Verwaltung",
        description:
          "Benutzer können Tweets posten, löschen und liken, einschließlich der Möglichkeit, Bilder zu tweeten.",
      },
      {
        key: "Profilseiten",
        description:
          "Benutzer haben individuelle Profilseiten, auf denen ihre Tweets und persönlichen Informationen angezeigt werden.",
      },
      {
        key: "Folge-System",
        description: "Benutzer können sich gegenseitig folgen und entfolgen.",
      },
      {
        key: "Entdecken-Feed",
        description: "Eine Seite, die angesagte Tweets anzeigt.",
      },
      {
        key: "Responsives Design",
        description: "Optimiert für die Desktop-Ansicht.",
      },
    ],
    liveSite: false,
    gitHub: "https://github.com/fredwardp/tweety",
    gallery: [
      "/img/tweety_home.png",
      "/img/tweety_profile.png",
      "/img/tweety_comments.png",
      "/img/tweety_editprofile.png",
      "/img/tweety_login.png",
      "/img/tweety_register.png",
    ],
    color: {
      bg: "#0E1D27",
      text: "#D9D9D9",
      highlight: "#4A99E9",
      block: "#1D272F",
    },
  },
  {
    name: "Sport Database",
    techUsed: ["React", "Sports API"],
    description:
      "SportsDB ist ein kollaboratives Projekt, das von einem Team aus vier Personen entwickelt wurde und detaillierte Informationen zu Vereinen, Ligen und Spielern in verschiedenen beliebten Sportarten bietet. Diese Anwendung wurde mit React erstellt und nutzt eine Sport-API, um aktuelle Daten abzurufen. Benutzer können Sportligen nach Land und/oder spezifischer Sportart filtern, was es einfach macht, relevante Informationen zu finden.",
    features: [
      {
        key: "Umfangreiche Daten",
        description:
          "Zugriff auf Informationen zu Vereinen, Ligen und Spielern in verschiedenen beliebten Sportarten.",
      },
      {
        key: "Multicolor Mode",
        description:
          "Sie können zwischen mehreren verschiedenen Farbschemata wählen, die zu Ihrem Lieblingsteam passen.",
      },
      {
        key: "Filterfunktionen",
        description:
          "Filtern Sie Sportligen nach Land und spezifischer Sportart.",
      },
      {
        key: "Aktuelle Informationen",
        description:
          "Daten werden in Echtzeit von einer zuverlässigen Sport-API abgerufen.",
      },
      {
        key: "Custome Scrollleisten",
        description:
          "Custome designte Scrollleisten, die zum Seitendesign passen.",
      },
      {
        key: "Benutzerfreundliche Oberfläche",
        description:
          "Intuitives Design für nahtlose Navigation und Informationsabfrage.",
      },
      {
        key: "Custome Animationen",
        description:
          "Für die ganze Website wurden Animationen entworfen, um die Userexperience zu verbessern.",
      },
    ],
    liveSite: "https://sports-db-eta.vercel.app/",
    gitHub: "https://github.com/fredwardp/SportsDB",
    gallery: [
      "/img/sportsdb_allcolors.png",
      "/img/sportsdb2.png",
      "/img/sportsdb3.png",
      "/img/sportsdb4.png",
      "/img/sportsdb5.png",
      "/img/sportsdb6.png",
      "/img/sportsdb7.png",
      "/img/sportsdb8.png",
    ],

    color: {
      bg: "#171717",
      text: "#FFFFFF",
      highlight: "#E83539",
      block: "#1D1D1D",
    },
  },
];

export default projects;
