import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-murinsel";

const campingMurinsel: CampsiteConfig = {
  name: "Camping Murinsel",
  shortName: "Murinsel",
  slug: "camping-murinsel",
  ort: "Großlobming",
  region: "Murtal",
  brandKind: "Camping am Naturteich",
  see: "Naturteich",
  regionLong: "Urlaubsregion Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Naturidyll am Teich im Murtal",
  claimEmphasis: "am Teich",
  emailDetail: "euer Naturteich mit Trinkwasserqualität mitten am Platz",
  intro:
    "Am Rande von Großlobming, eingebettet in die Auenlandschaft der Mur: 80 großzügige Stellplätze auf 5 Hektar, viele direkt am Naturteich mit Trinkwasserqualität — Ruhe, Bergblick und klare Sternenhimmel inklusive.",

  logo: { src: `${IMG}/logo-ee331705d0.png`, alt: "Logo Camping Murinsel" },

  statement: {
    text: "Der 1,5 ha große Naturteich mit Trinkwasserqualität ist das Herzstück deines Urlaubs.",
    emphasis: "das Herzstück",
  },

  pillars: [
    { title: "Der Naturteich", text: "1,5 ha klares Wasser in Trinkwasserqualität, im Sommer bis 25 Grad warm — mitten am Platz.", image: { src: `${IMG}/gallery-151dc66d77.webp`, alt: "Naturteich am Camping Murinsel mit Badesteg" } },
    { title: "Stellplätze am Wasser", text: "Plätze in erster Reihe mit direktem Teichzugang — morgens zuerst der Blick aufs Wasser.", image: { src: `${IMG}/activity-261b0f88f9.webp`, alt: "Wohnmobile an der Uferwiese des Naturteichs der Murinsel" } },
    { title: "Ruhe & Erholung", text: "Viel Freiraum auch in der Hochsaison, wenig Lichteinfluss und entspannte Atmosphäre.", image: { src: `${IMG}/gallery-363d96e4cd.webp`, alt: "Gäste entspannen auf Campingstühlen am Stellplatz neben dem Teich" } },
  ],

  usps: [
    "80 Plätze auf 5 ha",
    "Naturteich am Platz",
    "Hunde willkommen",
    "Barrierefreie Sanitäranlagen",
    "Gratis WLAN",
    "Murstüberl am Platz",
  ],

  trust: {
    heading: "4,9 Sterne aus 1.803 Bewertungen",
    headingEmphasis: "1.803 Bewertungen",
    intro:
      "Auf camping.info mit „Sehr gut“ bewertet und 2026 ausgezeichnet: Gäste schätzen die familiäre, ruhige Atmosphäre, die gepflegten Plätze und die Lage zwischen Teich, Mur und Bergen.",
  },

  awards: [{ label: "camping.info Award 2026" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-8f8603ca41.webp`, alt: "Luftaufnahme Camping Murinsel am Naturteich im Murtal" },
    image: { src: `${IMG}/gallery-784f61bed5.webp`, alt: "Camping Murinsel am Naturteich mit Bergblick im Murtal" },
  },

  breather: {
    image: { src: `${IMG}/gallery-d228ba500c.webp`, alt: "Sonnenblumen vor dem Murstüberl am Camping Murinsel" },
    line: "Wo sich die Bergspitzen der Umgebung im Wasser spiegeln.",
  },

  camping: {
    heading: "Ruhe & Erholung am Naturteich",
    intro:
      "80 durchschnittlich 100 m² große Plätze rund um den Teich, viele mit direktem Wasserzugang — alle mit Wasser-, Strom- und großteils Abwasseranschluss.",
    features: [
      { title: "Komfortstellplätze mit Bergblick", text: "Ebene, befestigte Plätze auf der Wiese oder am Teich — durchschnittlich 100 m² groß, mit Bergblick und PKW direkt am Platz.", image: { src: `${IMG}/gallery-6cb340319e.webp`, alt: "Stellplätze rund um den Teich mit Bergblick" } },
      { title: "Barrierefreie Sanitäranlagen", text: "Zwei moderne, hochwertig ausgestattete Sanitärgebäude mit kostenlosen Warmwasserduschen, Haartrocknern und barrierefreiem Zugang.", image: { src: `${IMG}/amenity-713c21f4c9.webp`, alt: "Helles modernes Sanitärgebäude mit Waschküche am Camping Murinsel" } },
      { title: "Waschküche & Wirtschaftsraum", text: "Abwaschmöglichkeiten, Waschmaschine und Trockner in den Sanitärgebäuden — alles sauber, gepflegt und nah am Platz.", image: { src: `${IMG}/amenity-50c1629fd0.webp`, alt: "Waschküche mit Waschmaschinen am Camping Murinsel" } },
      { title: "Hunde willkommen", text: "Eigener Hundebadebereich am Teich, Hundedusche und eingezäunte Gassiwiese — dein Vierbeiner campt selbstverständlich mit.", image: { src: `${IMG}/amenity-24984838dd.webp`, alt: "Gäste mit Hund auf dem Weg am Camping Murinsel" } },
      { title: "Radfahren am Murradweg", text: "Der Murradweg R2 führt direkt am Platz vorbei — kostenlose Rad- und Wanderkarten gibt es bei deiner Anreise.", image: { src: `${IMG}/gallery-b8c5800557.webp`, alt: "Fahrräder am Camping Murinsel beim Murradweg" } },
      { title: "Murstüberl am Platz", text: "Steirische Schmankerln und internationale Spezialitäten auf der Terrasse — von Mai bis September direkt am Campingplatz.", image: { src: `${IMG}/gallery-aa74b544d5.webp`, alt: "Terrasse des Murstüberl am Camping Murinsel" } },
    ],
  },

  mobilheime: {
    heading: "Mietcaravan „Am Teich“",
    intro:
      "Kein eigenes Wohnmobil? Unser Mietcaravan steht direkt am Badeteich mit eigenem Badezugang — buchbar ab 5 Nächten in der Nebensaison.",
    items: [
      {
        name: "Mietcaravan „Am Teich“",
        kind: "Mietcaravan direkt am Badeteich",
        text: "Direkt am Badeteich mit eigenem Zugang, zwei Einzelbetten, Umbaubett, TV und Kochecke — Bettwäsche gegen Gebühr.",
        image: { src: `${IMG}/activity-cdbfbe942f.webp`, alt: "Innenraum des Mietcaravans Am Teich am Camping Murinsel" },
        priceFrom: 60,
        features: ["2 Einzelbetten", "Sitzecke / Umbaubett", "TV, Radio & Heizung", "Kochecke im Vorzelt", "Direkt am Badeteich"],
      },
    ],
  },

  kinder: {
    heading: "Platz zum Spielen",
    intro:
      "Auf dem kleinen Spielplatz mit Sandkiste und Schaukel sind die jüngsten Gäste bestens aufgehoben — mitten in der Natur und mit Bergblick.",
    features: [
      { title: "Sandkiste & Schaukel", text: "Ein kleiner Spielplatz mit Sandkiste und Schaukel — gleich am Platz, wo Ruhe und Erholung im Vordergrund stehen.", image: { src: `${IMG}/kids-9287aa41f9.webp`, alt: "Kind in der Sandkiste am Spielplatz der Murinsel" } },
      { title: "Spielen mit Bergblick", text: "Hier dürfen Kinder den ganzen Tag draußen sein — mit den Bergen des Murtals im Rücken.", image: { src: `${IMG}/kids-5bb2d1eb19.webp`, alt: "Kinder beim Spielen am Camping Murinsel" } },
    ],
  },

  aktivitaeten: {
    heading: "Direkt vor dem Vorzelt",
    intro:
      "Vom Sprung in den Teich bis zum Waldbaden im angrenzenden Wald — viel passiert direkt am Platz oder gleich nebenan.",
    items: [
      { title: "Baden & SUP am Teich", text: "Der 1,5 ha große Teich wird im Sommer bis zu 25 Grad warm — ideal zum Abkühlen, Schwimmen und Paddeln.", image: { src: `${IMG}/activity-910d847350.webp`, alt: "Person auf SUP-Board mit Hund auf dem Naturteich, Stellplätze am Ufer" } },
      { title: "Waldbaden", text: "Im angrenzenden „Wald der Zukunft“ von Terra Mater erlebst du Waldbaden mit einer Waldgesundheitstrainerin.", image: { src: `${IMG}/activity-c633c3431e.webp`, alt: "Waldbaden im Wald neben dem Camping Murinsel" } },
    ],
  },

  anreise: {
    heading: "Anreise ins Murtal",
    modes: [
      { title: "Mit dem Auto", text: "Über die S36 bis Abfahrt Knittelfeld Ost, dann den Wegweisern nach Großlobming und Camping Murinsel folgen — rund 8 km." },
      { title: "Navi-Hinweis", text: "Bitte bei „Knittelfeld Ost“ abfahren und nicht über Spielberg — dort führt eine enge Straße durch eine Unterführung mit nur 2,8 m Durchfahrtshöhe." },
      { title: "Mit der Bahn", text: "Nächster Bahnhof ist Knittelfeld, rund 5 km entfernt — von dort weiter mit Taxi oder Bus nach Großlobming." },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Murinsel",
    headingEmphasis: "Murinsel",
    intro: "Klares Wasser, gepflegte Plätze und gemütliche Stunden im Murstüberl — ein paar Eindrücke vom Platz.",
    tag: "April bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-7e1d036c10.webp`, alt: "Naturteich der Murinsel mit Kiesstrand im Herbst" },
      { src: `${IMG}/gallery-4287c291a0.webp`, alt: "Gemütliche Stube im Murstüberl" },
      { src: `${IMG}/gallery-807dda0311.webp`, alt: "Gäste entspannen am Stellplatz der Murinsel neben dem Wohnmobil" },
      { src: `${IMG}/gallery-ed89d808ae.webp`, alt: "Naturteich der Murinsel mit Spiegelung und blauem Himmel" },
      { src: `${IMG}/gallery-fcdae92cc1.webp`, alt: "Kleinkind spielt an der Sandkiste am Spielplatz der Murinsel" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Teich",
    headingEmphasis: "am Teich",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit. Fixe Platznummern garantieren wir ab einer Woche Aufenthalt.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Vorsaison · Komfortstellplatz inkl. 2 Personen · zzgl. Ortstaxe, Umweltabgabe & Strom",
    highlight: { title: "Direkt am Wasser", text: "Stellplätze am Teich mit eigenem Badezugang." },
    categories: [
      { id: "wiese", label: "Komfortstellplatz Wiese", perNight: 20, perExtraGuest: 9 },
      { id: "teich", label: "Komfortstellplatz Teich", perNight: 25, perExtraGuest: 9 },
      { id: "mietcaravan", label: "Mietcaravan „Am Teich“", perNight: 60 },
    ],
  },

  kontakt: {
    tel: "+43 664 3045045",
    telHref: "tel:+436643045045",
    mail: "office@camping-murinsel.at",
    facebook: "https://www.facebook.com/murinselcamping/",
    adresse: "Teichweg 1 · 8734 Großlobming · Steiermark",
    coords: { lat: 47.19388, lng: 14.80611 },
  },

  languages: ["DE", "EN", "IT"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
      { label: "Teich", href: "#camping" },
    ]},
    { label: "Mietcaravan", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingMurinsel;
