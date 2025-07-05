import type { SupportedLanguage } from '../types/i18n';

export const supportedLanguages = [
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

const translations = {
  // Navigation
  home: {
    hr: 'Početna',
    en: 'Home',
    cs: 'Domů',
    sk: 'Domov',
    pl: 'Strona główna',
    fr: 'Accueil',
    it: 'Home',
    de: 'Startseite',
    uk: 'Головна',
    ru: 'Главная'
  },
  apartments: {
    hr: 'Apartmani',
    en: 'Apartments',
    cs: 'Apartmány',
    sk: 'Apartmány',
    pl: 'Apartamenty',
    fr: 'Appartements',
    it: 'Appartamenti',
    de: 'Apartments',
    uk: 'Апартаменти',
    ru: 'Апартаменты'
  },
  amenities: {
    hr: 'Sadržaji',
    en: 'Amenities',
    cs: 'Vybavení',
    sk: 'Vybavenie',
    pl: 'Udogodnienia',
    fr: 'Équipements',
    it: 'Servizi',
    de: 'Ausstattung',
    uk: 'Зручності',
    ru: 'Удобства'
  },
  location: {
    hr: 'Lokacija',
    en: 'Location',
    cs: 'Poloha',
    sk: 'Poloha',
    pl: 'Lokalizacja',
    fr: 'Emplacement',
    it: 'Posizione',
    de: 'Lage',
    uk: 'Розташування',
    ru: 'Расположение'
  },
  contact: {
    hr: 'Kontakt',
    en: 'Contact',
    cs: 'Kontakt',
    sk: 'Kontakt',
    pl: 'Kontakt',
    fr: 'Contact',
    it: 'Contatto',
    de: 'Kontakt',
    uk: 'Контакт',
    ru: 'Контакт'
  },

  // Authentication
  signIn: {
    hr: 'Prijava',
    en: 'Sign In',
    cs: 'Přihlásit se',
    sk: 'Prihlásiť sa',
    pl: 'Zaloguj się',
    fr: 'Se connecter',
    it: 'Accedi',
    de: 'Anmelden',
    uk: 'Увійти',
    ru: 'Войти'
  },
  signUp: {
    hr: 'Registracija',
    en: 'Sign Up',
    cs: 'Registrovat se',
    sk: 'Registrovať sa',
    pl: 'Zarejestruj się',
    fr: "S'inscrire",
    it: 'Registrati',
    de: 'Registrieren',
    uk: 'Зареєструватися',
    ru: 'Регистрация'
  },
  bookNow: {
    hr: 'Rezerviraj sada',
    en: 'Book Now',
    cs: 'Rezervovat nyní',
    sk: 'Rezervovať teraz',
    pl: 'Zarezerwuj teraz',
    fr: 'Réserver maintenant',
    it: 'Prenota ora',
    de: 'Jetzt buchen',
    uk: 'Забронювати зараз',
    ru: 'Забронировать сейчас'
  },

  // Hero Section
  heroTitle: {
    hr: 'Luksuzni apartmani',
    en: 'Luxury Apartments',
    cs: 'Luxusní apartmány',
    sk: 'Luxusné apartmány',
    pl: 'Luksusowe apartamenty',
    fr: 'Appartements de luxe',
    it: 'Appartamenti di lusso',
    de: 'Luxus-Apartments',
    uk: 'Розкішні апартаменти',
    ru: 'Роскошные апартаменты'
  },
  heroSubtitle: {
    hr: 'Doživite savršen spoj udobnosti, elegancije i prekrasnog pogleda na ocean u našim premium apartmanima za odmor.',
    en: 'Experience the perfect blend of comfort, elegance, and breathtaking ocean views in our premium vacation apartments.',
    cs: 'Zažijte dokonalou kombinaci pohodlí, elegance a úchvatných výhledů na oceán v našich prémiových prázdninových apartmánech.',
    sk: 'Zažite dokonalú kombináciu pohodlia, elegancie a úchvatných výhľadov na oceán v našich prémiových prázdninových apartmánoch.',
    pl: 'Doświadcz idealnego połączenia komfortu, elegancji i zapierających dech w piersiach widoków na ocean w naszych luksusowych apartamentach wakacyjnych.',
    fr: "Découvrez le mélange parfait de confort, d'élégance et de vues océaniques à couper le souffle dans nos appartements de vacances haut de gamme.",
    it: 'Vivi la perfetta combinazione di comfort, eleganza e viste mozzafiato sull\'oceano nei nostri appartamenti vacanza premium.',
    de: 'Erleben Sie die perfekte Mischung aus Komfort, Eleganz und atemberaubenden Meerblicken in unseren Premium-Ferienwohnungen.',
    uk: 'Відчуйте ідеальне поєднання комфорту, елегантності та захоплюючих видів на океан у наших преміум-апартаментах для відпочинку.',
    ru: 'Испытайте идеальное сочетание комфорта, элегантности и захватывающих видов на океан в наших премиальных апартаментах для отдыха.'
  },
  exploreApartments: {
    hr: 'Istražite apartmane',
    en: 'Explore Apartments',
    cs: 'Prozkoumat apartmány',
    sk: 'Preskúmať apartmány',
    pl: 'Odkryj apartamenty',
    fr: 'Explorer les appartements',
    it: 'Esplora appartamenti',
    de: 'Apartments erkunden',
    uk: 'Дослідити апартаменти',
    ru: 'Изучить апартаменты'
  },
  bookYourStay: {
    hr: 'Rezerviraj boravak',
    en: 'Book Your Stay',
    cs: 'Rezervovat pobyt',
    sk: 'Rezervovať pobyt',
    pl: 'Zarezerwuj pobyt',
    fr: 'Réserver votre séjour',
    it: 'Prenota il tuo soggiorno',
    de: 'Ihren Aufenthalt buchen',
    uk: 'Забронювати перебування',
    ru: 'Забронировать проживание'
  },

  // Features Section
  whyChoose: {
    hr: 'Zašto odabrati Apartments Delfin?',
    en: 'Why Choose Apartments Delfin?',
    cs: 'Proč si vybrat Apartments Delfin?',
    sk: 'Prečo si vybrať Apartments Delfin?',
    pl: 'Dlaczego wybrać Apartments Delfin?',
    fr: 'Pourquoi choisir Apartments Delfin?',
    it: 'Perché scegliere Apartments Delfin?',
    de: 'Warum Apartments Delfin wählen?',
    uk: 'Чому обрати Apartments Delfin?',
    ru: 'Почему выбрать Apartments Delfin?'
  },
  whyChooseSubtitle: {
    hr: 'Otkrijte savršenu kombinaciju luksuza, udobnosti i praktičnosti koja čini naše apartmane idealnim izborom za vaš odmor.',
    en: 'Discover the perfect combination of luxury, comfort, and convenience that makes our apartments the ideal choice for your vacation.',
    cs: 'Objevte dokonalou kombinaci luxusu, pohodlí a praktičnosti, která činí naše apartmány ideální volbou pro vaši dovolenou.',
    sk: 'Objavte dokonalú kombináciu luxusu, pohodlia a praktičnosti, ktorá robí naše apartmány ideálnou voľbou pre vašu dovolenku.',
    pl: 'Odkryj idealną kombinację luksusu, komfortu i wygody, która czyni nasze apartamenty idealnym wyborem na wakacje.',
    fr: 'Découvrez la combinaison parfaite de luxe, de confort et de commodité qui fait de nos appartements le choix idéal pour vos vacances.',
    it: 'Scopri la perfetta combinazione di lusso, comfort e convenienza che rende i nostri appartamenti la scelta ideale per le tue vacanze.',
    de: 'Entdecken Sie die perfekte Kombination aus Luxus, Komfort und Bequemlichkeit, die unsere Apartments zur idealen Wahl für Ihren Urlaub macht.',
    uk: 'Відкрийте ідеальне поєднання розкоші, комфорту та зручності, що робить наші апартаменти ідеальним вибором для вашої відпустки.',
    ru: 'Откройте для себя идеальное сочетание роскоши, комфорта и удобства, которое делает наши апартаменты идеальным выбором для вашего отдыха.'
  },
  beachfrontLocation: {
    hr: 'Lokacija na plaži',
    en: 'Beachfront Location',
    cs: 'Poloha na pláži',
    sk: 'Poloha na pláži',
    pl: 'Lokalizacja przy plaży',
    fr: 'Emplacement en bord de mer',
    it: 'Posizione fronte mare',
    de: 'Strandlage',
    uk: 'Розташування на березі',
    ru: 'Расположение на берегу'
  },
  beachfrontDesc: {
    hr: 'Direktan pristup prekrasnoj plaži s kristalno čistim morem',
    en: 'Direct access to pristine beach with crystal clear waters',
    cs: 'Přímý přístup k nedotčené pláži s křišťálově čistou vodou',
    sk: 'Priamy prístup k nedotknutej pláži s krištáľovo čistou vodou',
    pl: 'Bezpośredni dostęp do dziewiczej plaży z krystalicznie czystą wodą',
    fr: 'Accès direct à une plage immaculée aux eaux cristallines',
    it: 'Accesso diretto alla spiaggia incontaminata con acque cristalline',
    de: 'Direkter Zugang zum unberührten Strand mit kristallklarem Wasser',
    uk: 'Прямий доступ до незайманого пляжу з кришталево чистою водою',
    ru: 'Прямой доступ к нетронутому пляжу с кристально чистой водой'
  },
  oceanViews: {
    hr: 'Pogled na ocean',
    en: 'Ocean Views',
    cs: 'Výhledy na oceán',
    sk: 'Výhľady na oceán',
    pl: 'Widoki na ocean',
    fr: 'Vues sur l\'océan',
    it: 'Vista oceano',
    de: 'Meerblick',
    uk: 'Вид на океан',
    ru: 'Вид на океан'
  },
  oceanViewsDesc: {
    hr: 'Spektakularni panoramski pogledi na ocean iz svakog apartmana',
    en: 'Spectacular panoramic ocean views from every apartment',
    cs: 'Spektakulární panoramatické výhledy na oceán z každého apartmánu',
    sk: 'Spektakulárne panoramatické výhľady na oceán z každého apartmánu',
    pl: 'Spektakularne panoramiczne widoki na ocean z każdego apartamentu',
    fr: 'Vues panoramiques spectaculaires sur l\'océan depuis chaque appartement',
    it: 'Spettacolari viste panoramiche sull\'oceano da ogni appartamento',
    de: 'Spektakuläre Panoramablicke auf den Ozean von jedem Apartment',
    uk: 'Вражаючі панорамні види на океан з кожного апартаменту',
    ru: 'Захватывающие панорамные виды на океан из каждой квартиры'
  },
  swimmingPool: {
    hr: 'Bazen',
    en: 'Swimming Pool',
    cs: 'Bazén',
    sk: 'Bazén',
    pl: 'Basen',
    fr: 'Piscine',
    it: 'Piscina',
    de: 'Schwimmbad',
    uk: 'Басейн',
    ru: 'Бассейн'
  },
  swimmingPoolDesc: {
    hr: 'Infinity bazen s pogledom na ocean za potpuno opuštanje',
    en: 'Infinity pool with ocean views for ultimate relaxation',
    cs: 'Nekonečný bazén s výhledem na oceán pro dokonalé uvolnění',
    sk: 'Nekonečný bazén s výhľadom na oceán pre dokonalé uvoľnenie',
    pl: 'Basen bez krawędzi z widokiem na ocean dla maksymalnego relaksu',
    fr: 'Piscine à débordement avec vue sur l\'océan pour une détente ultime',
    it: 'Piscina a sfioro con vista oceano per il massimo relax',
    de: 'Infinity-Pool mit Meerblick für ultimative Entspannung',
    uk: 'Безкрайовий басейн з видом на океан для повного розслаблення',
    ru: 'Бесконечный бассейн с видом на океан для максимального расслабления'
  },
  fullKitchen: {
    hr: 'Potpuno opremljena kuhinja',
    en: 'Full Kitchen',
    cs: 'Plně vybavená kuchyň',
    sk: 'Plne vybavená kuchyňa',
    pl: 'W pełni wyposażona kuchnia',
    fr: 'Cuisine complète',
    it: 'Cucina completa',
    de: 'Vollküche',
    uk: 'Повністю обладнана кухня',
    ru: 'Полностью оборудованная кухня'
  },
  fullKitchenDesc: {
    hr: 'Moderne kuhinje s vrhunskim aparatima za sve vaše kulinarske potrebe',
    en: 'Modern kitchens with premium appliances for all your culinary needs',
    cs: 'Moderní kuchyně s prémiovými spotřebiči pro všechny vaše kulinářské potřeby',
    sk: 'Moderné kuchyne s prémiovými spotrebičmi pre všetky vaše kulinárske potreby',
    pl: 'Nowoczesne kuchnie z wysokiej klasy sprzętem do wszystkich potrzeb kulinarnych',
    fr: 'Cuisines modernes avec des appareils haut de gamme pour tous vos besoins culinaires',
    it: 'Cucine moderne con elettrodomestici premium per tutte le vostre esigenze culinarie',
    de: 'Moderne Küchen mit Premium-Geräten für alle Ihre kulinarischen Bedürfnisse',
    uk: 'Сучасні кухні з преміум-технікою для всіх ваших кулінарних потреб',
    ru: 'Современные кухни с премиальной техникой для всех ваших кулинарных потребностей'
  },
  freeWifi: {
    hr: 'Besplatni WiFi',
    en: 'Free WiFi',
    cs: 'Bezplatné WiFi',
    sk: 'Bezplatné WiFi',
    pl: 'Darmowe WiFi',
    fr: 'WiFi gratuit',
    it: 'WiFi gratuito',
    de: 'Kostenloses WLAN',
    uk: 'Безкоштовний WiFi',
    ru: 'Бесплатный WiFi'
  },
  freeWifiDesc: {
    hr: 'Brza internetska veza dostupna u cijelom objektu',
    en: 'High-speed internet connection available throughout the property',
    cs: 'Vysokorychlostní internetové připojení dostupné v celém objektu',
    sk: 'Vysokorýchlostné internetové pripojenie dostupné v celom objekte',
    pl: 'Szybkie połączenie internetowe dostępne w całym obiekcie',
    fr: 'Connexion Internet haut débit disponible dans tout l\'établissement',
    it: 'Connessione Internet ad alta velocità disponibile in tutta la struttura',
    de: 'Hochgeschwindigkeits-Internetverbindung im gesamten Gebäude verfügbar',
    uk: 'Високошвидкісне інтернет-з\'єднання доступне по всій території',
    ru: 'Высокоскоростное интернет-соединение доступно по всей территории'
  },
  freeParking: {
    hr: 'Besplatno parkiranje',
    en: 'Free Parking',
    cs: 'Bezplatné parkování',
    sk: 'Bezplatné parkovanie',
    pl: 'Darmowy parking',
    fr: 'Parking gratuit',
    it: 'Parcheggio gratuito',
    de: 'Kostenlose Parkplätze',
    uk: 'Безкоштовна парковка',
    ru: 'Бесплатная парковка'
  },
  freeParkingDesc: {
    hr: 'Sigurno natkriveno parkiranje za sve goste',
    en: 'Secure covered parking available for all guests',
    cs: 'Bezpečné kryté parkování dostupné pro všechny hosty',
    sk: 'Bezpečné kryté parkovanie dostupné pre všetkých hostí',
    pl: 'Bezpieczny zadaszony parking dostępny dla wszystkich gości',
    fr: 'Parking couvert sécurisé disponible pour tous les clients',
    it: 'Parcheggio coperto sicuro disponibile per tutti gli ospiti',
    de: 'Sichere überdachte Parkplätze für alle Gäste verfügbar',
    uk: 'Безпечна критая парковка доступна для всіх гостей',
    ru: 'Безопасная крытая парковка доступна для всех гостей'
  },

  // Apartments Section
  ourApartments: {
    hr: 'Naša kolekcija apartmana',
    en: 'Our Apartment Collection',
    cs: 'Naše kolekce apartmánů',
    sk: 'Naša kolekcia apartmánov',
    pl: 'Nasza kolekcja apartamentów',
    fr: 'Notre collection d\'appartements',
    it: 'La nostra collezione di appartamenti',
    de: 'Unsere Apartment-Kollektion',
    uk: 'Наша колекція апартаментів',
    ru: 'Наша коллекция апартаментов'
  },
  ourApartmentsSubtitle: {
    hr: 'Odaberite iz naše pažljivo odabrane kolekcije luksuznih apartmana, svaki dizajniran da pruži vrhunsku udobnost i prekrasan pogled na ocean.',
    en: 'Choose from our carefully curated selection of luxury apartments, each designed to provide the ultimate comfort and stunning ocean views.',
    cs: 'Vyberte si z našeho pečlivě vybraného výběru luxusních apartmánů, z nichž každý je navržen tak, aby poskytoval nejvyšší komfort a úžasné výhledy na oceán.',
    sk: 'Vyberte si z našej starostlivo vybranej kolekcie luxusných apartmánov, z ktorých každý je navrhnutý tak, aby poskytoval najvyšší komfort a úžasné výhľady na oceán.',
    pl: 'Wybierz z naszej starannie wyselekcjonowanej kolekcji luksusowych apartamentów, z których każdy został zaprojektowany, aby zapewnić najwyższy komfort i wspaniałe widoki na ocean.',
    fr: 'Choisissez parmi notre sélection soigneusement organisée d\'appartements de luxe, chacun conçu pour offrir un confort ultime et des vues océaniques époustouflantes.',
    it: 'Scegli dalla nostra selezione accuratamente curata di appartamenti di lusso, ognuno progettato per offrire il massimo comfort e splendide viste sull\'oceano.',
    de: 'Wählen Sie aus unserer sorgfältig kuratierten Auswahl an Luxus-Apartments, die alle darauf ausgelegt sind, ultimativen Komfort und atemberaubende Meerblicke zu bieten.',
    uk: 'Оберіть з нашої ретельно підібраної колекції розкішних апартаментів, кожен з яких розроблений для забезпечення найвищого комфорту та приголомшливих видів на океан.',
    ru: 'Выберите из нашей тщательно подобранной коллекции роскошных апартаментов, каждый из которых спроектирован для обеспечения максимального комфорта и потрясающих видов на океан.'
  },
  guests: {
    hr: 'gostiju',
    en: 'Guests',
    cs: 'hostů',
    sk: 'hostí',
    pl: 'gości',
    fr: 'invités',
    it: 'ospiti',
    de: 'Gäste',
    uk: 'гостей',
    ru: 'гостей'
  },
  beds: {
    hr: 'kreveta',
    en: 'Beds',
    cs: 'postelí',
    sk: 'postelí',
    pl: 'łóżek',
    fr: 'lits',
    it: 'letti',
    de: 'Betten',
    uk: 'ліжок',
    ru: 'кроватей'
  },
  bed: {
    hr: 'krevet',
    en: 'Bed',
    cs: 'postel',
    sk: 'posteľ',
    pl: 'łóżko',
    fr: 'lit',
    it: 'letto',
    de: 'Bett',
    uk: 'ліжко',
    ru: 'кровать'
  },
  baths: {
    hr: 'kupaonice',
    en: 'Baths',
    cs: 'koupelny',
    sk: 'kúpeľne',
    pl: 'łazienki',
    fr: 'salles de bain',
    it: 'bagni',
    de: 'Bäder',
    uk: 'ванних',
    ru: 'ванных'
  },
  bath: {
    hr: 'kupaonica',
    en: 'Bath',
    cs: 'koupelna',
    sk: 'kúpeľňa',
    pl: 'łazienka',
    fr: 'salle de bain',
    it: 'bagno',
    de: 'Bad',
    uk: 'ванна',
    ru: 'ванная'
  },
  viewDetailsBook: {
    hr: 'Pogledaj detalje i rezerviraj',
    en: 'View Details & Book',
    cs: 'Zobrazit podrobnosti a rezervovat',
    sk: 'Zobraziť podrobnosti a rezervovať',
    pl: 'Zobacz szczegóły i zarezerwuj',
    fr: 'Voir les détails et réserver',
    it: 'Vedi dettagli e prenota',
    de: 'Details anzeigen & buchen',
    uk: 'Переглянути деталі та забронювати',
    ru: 'Посмотреть детали и забронировать'
  },

  // Common terms
  night: {
    hr: 'noć',
    en: 'night',
    cs: 'noc',
    sk: 'noc',
    pl: 'noc',
    fr: 'nuit',
    it: 'notte',
    de: 'Nacht',
    uk: 'ніч',
    ru: 'ночь'
  },
  photos: {
    hr: 'fotografija',
    en: 'photos',
    cs: 'fotografií',
    sk: 'fotografií',
    pl: 'zdjęć',
    fr: 'photos',
    it: 'foto',
    de: 'Fotos',
    uk: 'фото',
    ru: 'фото'
  },
  more: {
    hr: 'više',
    en: 'more',
    cs: 'více',
    sk: 'viac',
    pl: 'więcej',
    fr: 'plus',
    it: 'altro',
    de: 'mehr',
    uk: 'більше',
    ru: 'больше'
  },
  viewDetails: {
    hr: 'Pogledaj detalje',
    en: 'View Details',
    cs: 'Zobrazit podrobnosti',
    sk: 'Zobraziť podrobnosti',
    pl: 'Zobacz szczegóły',
    fr: 'Voir les détails',
    it: 'Vedi dettagli',
    de: 'Details anzeigen',
    uk: 'Переглянути деталі',
    ru: 'Посмотреть детали'
  },
  description: {
    hr: 'Opis',
    en: 'Description',
    cs: 'Popis',
    sk: 'Popis',
    pl: 'Opis',
    fr: 'Description',
    it: 'Descrizione',
    de: 'Beschreibung',
    uk: 'Опис',
    ru: 'Описание'
  },
  bookThisApartment: {
    hr: 'Rezerviraj ovaj apartman',
    en: 'Book This Apartment',
    cs: 'Rezervovat tento apartmán',
    sk: 'Rezervovať tento apartmán',
    pl: 'Zarezerwuj ten apartament',
    fr: 'Réserver cet appartement',
    it: 'Prenota questo appartamento',
    de: 'Dieses Apartment buchen',
    uk: 'Забронювати цей апартамент',
    ru: 'Забронировать эту квартиру'
  },

  // Footer
  footerDescription: {
    hr: 'Doživite luksuzni život uz ocean s našim premium apartmanima za odmor. Vaš savršeni bijeg vas čeka s prekrasnim pogledima i uslugama svjetske klase.',
    en: 'Experience luxury oceanfront living with our premium vacation apartments. Your perfect getaway awaits with breathtaking views and world-class amenities.',
    cs: 'Zažijte luxusní bydlení u oceánu s našimi prémiovými prázdninovými apartmány. Váš dokonalý únik vás čeká s úchvatnými výhledy a službami světové třídy.',
    sk: 'Zažite luxusné bývanie pri oceáne s našimi prémiovými prázdninovými apartmánmi. Váš dokonalý únik vás čaká s úchvatnými výhľadmi a službami svetovej triedy.',
    pl: 'Doświadcz luksusowego życia nad oceanem z naszymi luksusowymi apartamentami wakacyjnymi. Twój idealny wypoczynek czeka z zapierającymi dech w piersiach widokami i udogodnieniami światowej klasy.',
    fr: 'Découvrez la vie de luxe en bord de mer avec nos appartements de vacances haut de gamme. Votre escapade parfaite vous attend avec des vues à couper le souffle et des équipements de classe mondiale.',
    it: 'Vivi il lusso fronte oceano con i nostri appartamenti vacanza premium. La tua fuga perfetta ti aspetta con viste mozzafiato e servizi di classe mondiale.',
    de: 'Erleben Sie luxuriöses Wohnen am Meer mit unseren Premium-Ferienwohnungen. Ihr perfekter Kurzurlaub wartet mit atemberaubenden Aussichten und Weltklasse-Annehmlichkeiten.',
    uk: 'Відчуйте розкішне життя на березі океану з нашими преміум-апартаментами для відпочинку. Ваша ідеальна відпустка чекає з захоплюючими видами та зручностями світового класу.',
    ru: 'Испытайте роскошную жизнь на берегу океана с нашими премиальными апартаментами для отдыха. Ваш идеальный отдых ждет с захватывающими видами и удобствами мирового класса.'
  },
  quickLinks: {
    hr: 'Brze veze',
    en: 'Quick Links',
    cs: 'Rychlé odkazy',
    sk: 'Rýchle odkazy',
    pl: 'Szybkie linki',
    fr: 'Liens rapides',
    it: 'Link rapidi',
    de: 'Schnelllinks',
    uk: 'Швидкі посилання',
    ru: 'Быстрые ссылки'
  },
  contactInfo: {
    hr: 'Kontakt informacije',
    en: 'Contact Info',
    cs: 'Kontaktní informace',
    sk: 'Kontaktné informácie',
    pl: 'Informacje kontaktowe',
    fr: 'Informations de contact',
    it: 'Informazioni di contatto',
    de: 'Kontaktinformationen',
    uk: 'Контактна інформація',
    ru: 'Контактная информация'
  },
  copyright: {
    hr: '© 2024 Apartments Delfin. Sva prava pridržana.',
    en: '© 2024 Apartments Delfin. All rights reserved.',
    cs: '© 2024 Apartments Delfin. Všechna práva vyhrazena.',
    sk: '© 2024 Apartments Delfin. Všetky práva vyhradené.',
    pl: '© 2024 Apartments Delfin. Wszelkie prawa zastrzeżone.',
    fr: '© 2024 Apartments Delfin. Tous droits réservés.',
    it: '© 2024 Apartments Delfin. Tutti i diritti riservati.',
    de: '© 2024 Apartments Delfin. Alle Rechte vorbehalten.',
    uk: '© 2024 Apartments Delfin. Всі права захищені.',
    ru: '© 2024 Apartments Delfin. Все права защищены.'
  },
  privacyPolicy: {
    hr: 'Pravila privatnosti',
    en: 'Privacy Policy',
    cs: 'Zásady ochrany osobních údajů',
    sk: 'Zásady ochrany osobných údajov',
    pl: 'Polityka prywatności',
    fr: 'Politique de confidentialité',
    it: 'Informativa sulla privacy',
    de: 'Datenschutzrichtlinie',
    uk: 'Політика конфіденційності',
    ru: 'Политика конфиденциальности'
  },
  termsOfService: {
    hr: 'Uvjeti korištenja',
    en: 'Terms of Service',
    cs: 'Podmínky služby',
    sk: 'Podmienky služby',
    pl: 'Warunki korzystania',
    fr: 'Conditions de service',
    it: 'Termini di servizio',
    de: 'Nutzungsbedingungen',
    uk: 'Умови використання',
    ru: 'Условия использования'
  },
  sitemap: {
    hr: 'Mapa stranice',
    en: 'Sitemap',
    cs: 'Mapa stránek',
    sk: 'Mapa stránky',
    pl: 'Mapa strony',
    fr: 'Plan du site',
    it: 'Mappa del sito',
    de: 'Sitemap',
    uk: 'Карта сайту',
    ru: 'Карта сайта'
  },

  // Authentication
  emailAddress: {
    hr: 'Email adresa',
    en: 'Email Address',
    cs: 'E-mailová adresa',
    sk: 'E-mailová adresa',
    pl: 'Adres e-mail',
    fr: 'Adresse e-mail',
    it: 'Indirizzo email',
    de: 'E-Mail-Adresse',
    uk: 'Електронна адреса',
    ru: 'Адрес электронной почты'
  },
  password: {
    hr: 'Lozinka',
    en: 'Password',
    cs: 'Heslo',
    sk: 'Heslo',
    pl: 'Hasło',
    fr: 'Mot de passe',
    it: 'Password',
    de: 'Passwort',
    uk: 'Пароль',
    ru: 'Пароль'
  },
  firstName: {
    hr: 'Ime',
    en: 'First Name',
    cs: 'Jméno',
    sk: 'Meno',
    pl: 'Imię',
    fr: 'Prénom',
    it: 'Nome',
    de: 'Vorname',
    uk: 'Ім\'я',
    ru: 'Имя'
  },
  lastName: {
    hr: 'Prezime',
    en: 'Last Name',
    cs: 'Příjmení',
    sk: 'Priezvisko',
    pl: 'Nazwisko',
    fr: 'Nom de famille',
    it: 'Cognome',
    de: 'Nachname',
    uk: 'Прізвище',
    ru: 'Фамилия'
  },
  phoneNumber: {
    hr: 'Broj telefona',
    en: 'Phone Number',
    cs: 'Telefonní číslo',
    sk: 'Telefónne číslo',
    pl: 'Numer telefonu',
    fr: 'Numéro de téléphone',
    it: 'Numero di telefono',
    de: 'Telefonnummer',
    uk: 'Номер телефону',
    ru: 'Номер телефона'
  },
  optional: {
    hr: 'Opcionalno',
    en: 'Optional',
    cs: 'Volitelné',
    sk: 'Voliteľné',
    pl: 'Opcjonalne',
    fr: 'Optionnel',
    it: 'Opzionale',
    de: 'Optional',
    uk: 'Необов\'язково',
    ru: 'Необязательно'
  },
  confirmPassword: {
    hr: 'Potvrdi lozinku',
    en: 'Confirm Password',
    cs: 'Potvrdit heslo',
    sk: 'Potvrdiť heslo',
    pl: 'Potwierdź hasło',
    fr: 'Confirmer le mot de passe',
    it: 'Conferma password',
    de: 'Passwort bestätigen',
    uk: 'Підтвердити пароль',
    ru: 'Подтвердить пароль'
  },
  rememberMe: {
    hr: 'Zapamti me',
    en: 'Remember me',
    cs: 'Zapamatovat si mě',
    sk: 'Zapamätať si ma',
    pl: 'Zapamiętaj mnie',
    fr: 'Se souvenir de moi',
    it: 'Ricordami',
    de: 'Angemeldet bleiben',
    uk: 'Запам\'ятати мене',
    ru: 'Запомнить меня'
  },
  forgotPassword: {
    hr: 'Zaboravili ste lozinku?',
    en: 'Forgot password?',
    cs: 'Zapomněli jste heslo?',
    sk: 'Zabudli ste heslo?',
    pl: 'Zapomniałeś hasła?',
    fr: 'Mot de passe oublié?',
    it: 'Password dimenticata?',
    de: 'Passwort vergessen?',
    uk: 'Забули пароль?',
    ru: 'Забыли пароль?'
  },
  createAccount: {
    hr: 'Stvori račun',
    en: 'Create Account',
    cs: 'Vytvořit účet',
    sk: 'Vytvoriť účet',
    pl: 'Utwórz konto',
    fr: 'Créer un compte',
    it: 'Crea account',
    de: 'Konto erstellen',
    uk: 'Створити обліковий запис',
    ru: 'Создать аккаунт'
  },
  dontHaveAccount: {
    hr: 'Nemate račun? Registrirajte se',
    en: 'Don\'t have an account? Sign up',
    cs: 'Nemáte účet? Zaregistrujte se',
    sk: 'Nemáte účet? Zaregistrujte sa',
    pl: 'Nie masz konta? Zarejestruj się',
    fr: 'Vous n\'avez pas de compte? Inscrivez-vous',
    it: 'Non hai un account? Registrati',
    de: 'Haben Sie kein Konto? Registrieren',
    uk: 'Немає облікового запису? Зареєструйтеся',
    ru: 'Нет аккаунта? Зарегистрируйтесь'
  },
  alreadyHaveAccount: {
    hr: 'Već imate račun? Prijavite se',
    en: 'Already have an account? Sign in',
    cs: 'Již máte účet? Přihlaste se',
    sk: 'Už máte účet? Prihláste sa',
    pl: 'Masz już konto? Zaloguj się',
    fr: 'Vous avez déjà un compte? Connectez-vous',
    it: 'Hai già un account? Accedi',
    de: 'Haben Sie bereits ein Konto? Anmelden',
    uk: 'Вже маєте обліковий запис? Увійдіть',
    ru: 'Уже есть аккаунт? Войдите'
  },
  agreeTermsText: {
    hr: 'Slažem se s',
    en: 'I agree to the',
    cs: 'Souhlasím s',
    sk: 'Súhlasím s',
    pl: 'Zgadzam się z',
    fr: 'J\'accepte les',
    it: 'Accetto i',
    de: 'Ich stimme den',
    uk: 'Я погоджуюся з',
    ru: 'Я согласен с'
  },
  and: {
    hr: 'i',
    en: 'and',
    cs: 'a',
    sk: 'a',
    pl: 'i',
    fr: 'et',
    it: 'e',
    de: 'und',
    uk: 'та',
    ru: 'и'
  },
  passwordRequirements: {
    hr: 'Lozinka mora imati najmanje 6 znakova',
    en: 'Password must be at least 6 characters',
    cs: 'Heslo musí mít alespoň 6 znaků',
    sk: 'Heslo musí mať aspoň 6 znakov',
    pl: 'Hasło musi mieć co najmniej 6 znaków',
    fr: 'Le mot de passe doit contenir au moins 6 caractères',
    it: 'La password deve contenere almeno 6 caratteri',
    de: 'Das Passwort muss mindestens 6 Zeichen lang sein',
    uk: 'Пароль повинен містити принаймні 6 символів',
    ru: 'Пароль должен содержать не менее 6 символов'
  },

  // Email Confirmation Modal Translations
  checkYourEmail: {
    hr: 'Provjerite svoj email',
    en: 'Check Your Email',
    cs: 'Zkontrolujte svůj e-mail',
    sk: 'Skontrolujte svoj e-mail',
    pl: 'Sprawdź swoją pocztę',
    fr: 'Vérifiez votre e-mail',
    it: 'Controlla la tua email',
    de: 'Überprüfen Sie Ihre E-Mail',
    uk: 'Перевірте свою електронну пошту',
    ru: 'Проверьте свою электронную почту'
  },
  emailConfirmationSent: {
    hr: 'Poslali smo vam link za potvrdu na vašu email adresu. Molimo provjerite svoj email i kliknite na link da potvrdite svoj račun.',
    en: 'We\'ve sent a confirmation link to your email address. Please check your email and click the link to verify your account.',
    cs: 'Poslali jsme vám potvrzovací odkaz na vaši e-mailovou adresu. Zkontrolujte prosím svůj e-mail a klikněte na odkaz pro ověření vašeho účtu.',
    sk: 'Poslali sme vám potvrdzovací odkaz na vašu e-mailovú adresu. Skontrolujte prosím svoj e-mail a kliknite na odkaz pre overenie vášho účtu.',
    pl: 'Wysłaliśmy link potwierdzający na Twój adres e-mail. Sprawdź swoją pocztę i kliknij link, aby zweryfikować swoje konto.',
    fr: 'Nous avons envoyé un lien de confirmation à votre adresse e-mail. Veuillez vérifier votre e-mail et cliquer sur le lien pour vérifier votre compte.',
    it: 'Abbiamo inviato un link di conferma al tuo indirizzo email. Controlla la tua email e clicca sul link per verificare il tuo account.',
    de: 'Wir haben einen Bestätigungslink an Ihre E-Mail-Adresse gesendet. Bitte überprüfen Sie Ihre E-Mail und klicken Sie auf den Link, um Ihr Konto zu verifizieren.',
    uk: 'Ми надіслали посилання для підтвердження на вашу електронну адресу. Будь ласка, перевірте свою електронну пошту та натисніть на посилання для підтвердження вашого облікового запису.',
    ru: 'Мы отправили ссылку для подтверждения на ваш адрес электронной почты. Пожалуйста, проверьте свою электронную почту и нажмите на ссылку для подтверждения вашего аккаунта.'
  },
  emailConfirmationNote: {
    hr: 'Ako ne vidite email, provjerite spam mapu ili pokušajte ponovno.',
    en: 'If you don\'t see the email, check your spam folder or try again.',
    cs: 'Pokud nevidíte e-mail, zkontrolujte složku spam nebo to zkuste znovu.',
    sk: 'Ak nevidíte e-mail, skontrolujte priečinok spam alebo to skúste znovu.',
    pl: 'Jeśli nie widzisz e-maila, sprawdź folder spam lub spróbuj ponownie.',
    fr: 'Si vous ne voyez pas l\'e-mail, vérifiez votre dossier spam ou réessayez.',
    it: 'Se non vedi l\'email, controlla la cartella spam o riprova.',
    de: 'Wenn Sie die E-Mail nicht sehen, überprüfen Sie Ihren Spam-Ordner oder versuchen Sie es erneut.',
    uk: 'Якщо ви не бачите електронний лист, перевірте папку спам або спробуйте ще раз.',
    ru: 'Если вы не видите письмо, проверьте папку спам или попробуйте еще раз.'
  },
  resendConfirmation: {
    hr: 'Pošaljite ponovno email za potvrdu',
    en: 'Resend Confirmation Email',
    cs: 'Znovu odeslat potvrzovací e-mail',
    sk: 'Znovu odoslať potvrdzovací e-mail',
    pl: 'Wyślij ponownie e-mail potwierdzający',
    fr: 'Renvoyer l\'e-mail de confirmation',
    it: 'Invia di nuovo l\'email di conferma',
    de: 'Bestätigungs-E-Mail erneut senden',
    uk: 'Надіслати лист підтвердження повторно',
    ru: 'Отправить письмо подтверждения повторно'
  },
  backToSignIn: {
    hr: 'Natrag na prijavu',
    en: 'Back to Sign In',
    cs: 'Zpět na přihlášení',
    sk: 'Späť na prihlásenie',
    pl: 'Powrót do logowania',
    fr: 'Retour à la connexion',
    it: 'Torna al login',
    de: 'Zurück zur Anmeldung',
    uk: 'Повернутися до входу',
    ru: 'Вернуться к входу'
  },
  resetPassword: {
    hr: 'Resetiraj lozinku',
    en: 'Reset Password',
    cs: 'Resetovat heslo',
    sk: 'Resetovať heslo',
    pl: 'Resetuj hasło',
    fr: 'Réinitialiser le mot de passe',
    it: 'Reimposta password',
    de: 'Passwort zurücksetzen',
    uk: 'Скинути пароль',
    ru: 'Сбросить пароль'
  },
  forgotPasswordDesc: {
    hr: 'Unesite svoju email adresu i poslat ćemo vam link za resetiranje lozinke.',
    en: 'Enter your email address and we\'ll send you a link to reset your password.',
    cs: 'Zadejte svou e-mailovou adresu a pošleme vám odkaz pro resetování hesla.',
    sk: 'Zadajte svoju e-mailovú adresu a pošleme vám odkaz pre resetovanie hesla.',
    pl: 'Wprowadź swój adres e-mail, a wyślemy Ci link do resetowania hasła.',
    fr: 'Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.',
    it: 'Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la password.',
    de: 'Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.',
    uk: 'Введіть свою електронну адресу, і ми надішлемо вам посилання для скидання пароля.',
    ru: 'Введите свой адрес электронной почты, и мы отправим вам ссылку для сброса пароля.'
  },
  sendResetLink: {
    hr: 'Pošaljite link za resetiranje',
    en: 'Send Reset Link',
    cs: 'Odeslat odkaz pro resetování',
    sk: 'Odoslať odkaz pre resetovanie',
    pl: 'Wyślij link resetujący',
    fr: 'Envoyer le lien de réinitialisation',
    it: 'Invia link di reset',
    de: 'Reset-Link senden',
    uk: 'Надіслати посилання для скидання',
    ru: 'Отправить ссылку для сброса'
  },
  processing: {
    hr: 'Obrađuje se...',
    en: 'Processing...',
    cs: 'Zpracovává se...',
    sk: 'Spracováva sa...',
    pl: 'Przetwarzanie...',
    fr: 'Traitement en cours...',
    it: 'Elaborazione...',
    de: 'Verarbeitung...',
    uk: 'Обробка...',
    ru: 'Обработка...'
  },
  adminAccessRequired: {
    hr: 'Potreban je administratorski pristup',
    en: 'Admin Access Required',
    cs: 'Vyžadován přístup administrátora',
    sk: 'Vyžadovaný prístup administrátora',
    pl: 'Wymagany dostęp administratora',
    fr: 'Accès administrateur requis',
    it: 'Accesso amministratore richiesto',
    de: 'Administrator-Zugang erforderlich',
    uk: 'Потрібен доступ адміністратора',
    ru: 'Требуется доступ администратора'
  },
  adminSignInDesc: {
    hr: 'Molimo prijavite se s administratorskim računom za pristup nadzornoj ploči.',
    en: 'Please sign in with an administrator account to access the dashboard.',
    cs: 'Přihlaste se prosím pomocí účtu administrátora pro přístup k řídicímu panelu.',
    sk: 'Prihláste sa prosím pomocou účtu administrátora pre prístup k ovládaciemu panelu.',
    pl: 'Zaloguj się kontem administratora, aby uzyskać dostęp do panelu.',
    fr: 'Veuillez vous connecter avec un compte administrateur pour accéder au tableau de bord.',
    it: 'Accedi con un account amministratore per accedere al dashboard.',
    de: 'Bitte melden Sie sich mit einem Administrator-Konto an, um auf das Dashboard zuzugreifen.',
    uk: 'Будь ласка, увійдіть з обліковим записом адміністратора для доступу до панелі керування.',
    ru: 'Пожалуйста, войдите с учетной записью администратора для доступа к панели управления.'
  },

  // Amenities
  worldClassAmenities: {
    hr: 'Sadržaji svjetske klase',
    en: 'World-Class Amenities',
    cs: 'Vybavení světové třídy',
    sk: 'Vybavenie svetovej triedy',
    pl: 'Udogodnienia światowej klasy',
    fr: 'Équipements de classe mondiale',
    it: 'Servizi di classe mondiale',
    de: 'Weltklasse-Ausstattung',
    uk: 'Зручності світового класу',
    ru: 'Удобства мирового класса'
  },
  worldClassAmenitiesSubtitle: {
    hr: 'Doživite luksuzni život s našom sveobuhvatnom kolekcijom premium sadržaja i personaliziranih usluga dizajniranih da učine vaš boravak nezaboravnim.',
    en: 'Experience luxury living with our comprehensive collection of premium amenities and personalized services designed to make your stay unforgettable.',
    cs: 'Zažijte luxusní bydlení s naší komplexní kolekcí prémiového vybavení a personalizovaných služeb navržených tak, aby váš pobyt byl nezapomenutelný.',
    sk: 'Zažite luxusné bývanie s našou komplexnou kolekciou prémiového vybavenia a personalizovaných služieb navrhnutých tak, aby váš pobyt bol nezabudnuteľný.',
    pl: 'Doświadcz luksusowego życia dzięki naszej kompleksowej kolekcji luksusowych udogodnień i spersonalizowanych usług zaprojektowanych, aby uczynić Twój pobyt niezapomnianym.',
    fr: 'Découvrez la vie de luxe avec notre collection complète d\'équipements haut de gamme et de services personnalisés conçus pour rendre votre séjour inoubliable.',
    it: 'Vivi il lusso con la nostra collezione completa di servizi premium e servizi personalizzati progettati per rendere il tuo soggiorno indimenticabile.',
    de: 'Erleben Sie luxuriöses Wohnen mit unserer umfassenden Sammlung von Premium-Annehmlichkeiten und personalisierten Dienstleistungen, die Ihren Aufenthalt unvergesslich machen.',
    uk: 'Відчуйте розкішне життя з нашою всеосяжною колекцією преміум-зручностей та персоналізованих послуг, розроблених для того, щоб зробити ваше перебування незабутнім.',
    ru: 'Испытайте роскошную жизнь с нашей всеобъемлющей коллекцией премиальных удобств и персонализированных услуг, разработанных для того, чтобы сделать ваше пребывание незабываемым.'
  },
  learnMore: {
    hr: 'Saznaj više',
    en: 'Learn More',
    cs: 'Zjistit více',
    sk: 'Zistiť viac',
    pl: 'Dowiedz się więcej',
    fr: 'En savoir plus',
    it: 'Scopri di più',
    de: 'Mehr erfahren',
    uk: 'Дізнатися більше',
    ru: 'Узнать больше'
  },
  contactForMoreInfo: {
    hr: 'Molimo kontaktirajte nas za više informacija o našim premium uslugama.',
    en: 'Please contact us for more information about our premium services.',
    cs: 'Pro více informací o našich prémiových službách nás prosím kontaktujte.',
    sk: 'Pre viac informácií o našich prémiových službách nás prosím kontaktujte.',
    pl: 'Skontaktuj się z nami, aby uzyskać więcej informacji o naszych usługach premium.',
    fr: 'Veuillez nous contacter pour plus d\'informations sur nos services premium.',
    it: 'Contattaci per maggiori informazioni sui nostri servizi premium.',
    de: 'Bitte kontaktieren Sie uns für weitere Informationen zu unseren Premium-Services.',
    uk: 'Будь ласка, зв\'яжіться з нами для отримання додаткової інформації про наші преміум-послуги.',
    ru: 'Пожалуйста, свяжитесь с нами для получения дополнительной информации о наших премиальных услугах.'
  },

  // Contact
  contactUs: {
    hr: 'Kontaktirajte nas',
    en: 'Contact Us',
    cs: 'Kontaktujte nás',
    sk: 'Kontaktujte nás',
    pl: 'Skontaktuj się z nami',
    fr: 'Contactez-nous',
    it: 'Contattaci',
    de: 'Kontaktieren Sie uns',
    uk: 'Зв\'яжіться з нами',
    ru: 'Свяжитесь с нами'
  },
  contactUsSubtitle: {
    hr: 'Tu smo da pomognemo učiniti vaš boravak savršenim. Obratite nam se bilo kada za rezervacije, pitanja ili pomoć.',
    en: 'We\'re here to help make your stay perfect. Reach out to us anytime for reservations, questions, or assistance.',
    cs: 'Jsme tu, abychom vám pomohli udělat váš pobyt dokonalým. Obraťte se na nás kdykoli pro rezervace, dotazy nebo pomoc.',
    sk: 'Sme tu, aby sme vám pomohli urobiť váš pobyt dokonalým. Obraťte sa na nás kedykoľvek pre rezervácie, otázky alebo pomoc.',
    pl: 'Jesteśmy tutaj, aby pomóc uczynić Twój pobyt idealnym. Skontaktuj się z nami w dowolnym momencie w sprawie rezerwacji, pytań lub pomocy.',
    fr: 'Nous sommes là pour vous aider à rendre votre séjour parfait. Contactez-nous à tout moment pour des réservations, des questions ou de l\'aide.',
    it: 'Siamo qui per aiutarti a rendere perfetto il tuo soggiorno. Contattaci in qualsiasi momento per prenotazioni, domande o assistenza.',
    de: 'Wir sind hier, um Ihren Aufenthalt perfekt zu machen. Wenden Sie sich jederzeit an uns für Reservierungen, Fragen oder Hilfe.',
    uk: 'Ми тут, щоб допомогти зробити ваше перебування ідеальним. Звертайтеся до нас будь-коли з приводу бронювання, питань або допомоги.',
    ru: 'Мы здесь, чтобы помочь сделать ваше пребывание идеальным. Обращайтесь к нам в любое время по поводу бронирования, вопросов или помощи.'
  },
  phone: {
    hr: 'Telefon',
    en: 'Phone',
    cs: 'Telefon',
    sk: 'Telefón',
    pl: 'Telefon',
    fr: 'Téléphone',
    it: 'Telefono',
    de: 'Telefon',
    uk: 'Телефон',
    ru: 'Телефон'
  },
  email: {
    hr: 'Email',
    en: 'Email',
    cs: 'E-mail',
    sk: 'E-mail',
    pl: 'E-mail',
    fr: 'E-mail',
    it: 'Email',
    de: 'E-Mail',
    uk: 'Електронна пошта',
    ru: 'Электронная почта'
  },
  address: {
    hr: 'Adresa',
    en: 'Address',
    cs: 'Adresa',
    sk: 'Adresa',
    pl: 'Adres',
    fr: 'Adresse',
    it: 'Indirizzo',
    de: 'Adresse',
    uk: 'Адреса',
    ru: 'Адрес'
  },
  hours: {
    hr: 'Radno vrijeme',
    en: 'Hours',
    cs: 'Hodiny',
    sk: 'Hodiny',
    pl: 'Godziny',
    fr: 'Heures',
    it: 'Orari',
    de: 'Öffnungszeiten',
    uk: 'Години роботи',
    ru: 'Часы работы'
  },
  sendMessage: {
    hr: 'Pošaljite nam poruku',
    en: 'Send us a Message',
    cs: 'Pošlete nám zprávu',
    sk: 'Pošlite nám správu',
    pl: 'Wyślij nam wiadomość',
    fr: 'Envoyez-nous un message',
    it: 'Inviaci un messaggio',
    de: 'Senden Sie uns eine Nachricht',
    uk: 'Надішліть нам повідомлення',
    ru: 'Отправьте нам сообщение'
  },
  subject: {
    hr: 'Predmet',
    en: 'Subject',
    cs: 'Předmět',
    sk: 'Predmet',
    pl: 'Temat',
    fr: 'Sujet',
    it: 'Oggetto',
    de: 'Betreff',
    uk: 'Тема',
    ru: 'Тема'
  },
  message: {
    hr: 'Poruka',
    en: 'Message',
    cs: 'Zpráva',
    sk: 'Správa',
    pl: 'Wiadomość',
    fr: 'Message',
    it: 'Messaggio',
    de: 'Nachricht',
    uk: 'Повідомлення',
    ru: 'Сообщение'
  },
  sendMessageBtn: {
    hr: 'Pošalji poruku',
    en: 'Send Message',
    cs: 'Odeslat zprávu',
    sk: 'Odoslať správu',
    pl: 'Wyślij wiadomość',
    fr: 'Envoyer le message',
    it: 'Invia messaggio',
    de: 'Nachricht senden',
    uk: 'Надіслати повідомлення',
    ru: 'Отправить сообщение'
  },
  callNow: {
    hr: 'Pozovi sada',
    en: 'Call Now',
    cs: 'Zavolat nyní',
    sk: 'Zavolať teraz',
    pl: 'Zadzwoń teraz',
    fr: 'Appeler maintenant',
    it: 'Chiama ora',
    de: 'Jetzt anrufen',
    uk: 'Подзвонити зараз',
    ru: 'Позвонить сейчас'
  },
  viewApartments: {
    hr: 'Pogledaj apartmane',
    en: 'View Apartments',
    cs: 'Zobrazit apartmány',
    sk: 'Zobraziť apartmány',
    pl: 'Zobacz apartamenty',
    fr: 'Voir les appartements',
    it: 'Vedi appartamenti',
    de: 'Apartments anzeigen',
    uk: 'Переглянути апартаменти',
    ru: 'Посмотреть апартаменты'
  },
  getDirections: {
    hr: 'Dobij upute',
    en: 'Get Directions',
    cs: 'Získat směr',
    sk: 'Získať smer',
    pl: 'Uzyskaj wskazówki',
    fr: 'Obtenir des directions',
    it: 'Ottieni indicazioni',
    de: 'Wegbeschreibung',
    uk: 'Отримати маршрут',
    ru: 'Получить маршрут'
  },

  // Apartments page
  ourLuxuryApartments: {
    hr: 'Naši luksuzni apartmani',
    en: 'Our Luxury Apartments',
    cs: 'Naše luxusní apartmány',
    sk: 'Naše luxusné apartmány',
    pl: 'Nasze luksusowe apartamenty',
    fr: 'Nos appartements de luxe',
    it: 'I nostri appartamenti di lusso',
    de: 'Unsere Luxus-Apartments',
    uk: 'Наші розкішні апартаменти',
    ru: 'Наши роскошные апартаменты'
  },
  ourLuxuryApartmentsSubtitle: {
    hr: 'Odaberite iz naše pažljivo odabrane kolekcije premium apartmana uz ocean, svaki dizajniran da pruži vrhunsku udobnost i prekrasan pogled.',
    en: 'Choose from our carefully curated collection of premium oceanfront apartments, each designed to provide the ultimate comfort and breathtaking views.',
    cs: 'Vyberte si z naší pečlivě vybrané kolekce prémiových apartmánů u oceánu, z nichž každý je navržen tak, aby poskytoval nejvyšší komfort a úchvatné výhledy.',
    sk: 'Vyberte si z našej starostlivo vybranej kolekcie prémiových apartmánov pri oceáne, z ktorých každý je navrhnutý tak, aby poskytoval najvyšší komfort a úchvatné výhľady.',
    pl: 'Wybierz z naszej starannie wyselekcjonowanej kolekcji luksusowych apartamentów nad oceanem, z których każdy został zaprojektowany, aby zapewnić najwyższy komfort i zapierające dech w piersiach widoki.',
    fr: 'Choisissez parmi notre collection soigneusement sélectionnée d\'appartements haut de gamme en bord de mer, chacun conçu pour offrir un confort ultime et des vues à couper le souffle.',
    it: 'Scegli dalla nostra collezione accuratamente curata di appartamenti premium fronte oceano, ognuno progettato per offrire il massimo comfort e viste mozzafiato.',
    de: 'Wählen Sie aus unserer sorgfältig kuratierten Sammlung von Premium-Apartments am Meer, die alle darauf ausgelegt sind, ultimativen Komfort und atemberaubende Aussichten zu bieten.',
    uk: 'Оберіть з нашої ретельно підібраної колекції преміум-апартаментів на березі океану, кожен з яких розроблений для забезпечення найвищого комфорту та захоплюючих видів.',
    ru: 'Выберите из нашей тщательно подобранной коллекции премиальных апартаментов на берегу океана, каждый из которых спроектирован для обеспечения максимального комфорта и захватывающих видов.'
  },
  allApartments: {
    hr: 'Svi apartmani',
    en: 'All Apartments',
    cs: 'Všechny apartmány',
    sk: 'Všetky apartmány',
    pl: 'Wszystkie apartamenty',
    fr: 'Tous les appartements',
    it: 'Tutti gli appartamenti',
    de: 'Alle Apartments',
    uk: 'Всі апартаменти',
    ru: 'Все апартаменты'
  },
  studio: {
    hr: 'Studio',
    en: 'Studio',
    cs: 'Studio',
    sk: 'Studio',
    pl: 'Studio',
    fr: 'Studio',
    it: 'Monolocale',
    de: 'Studio',
    uk: 'Студія',
    ru: 'Студия'
  },
  oneBedroom: {
    hr: '1 spavaća soba',
    en: '1 Bedroom',
    cs: '1 ložnice',
    sk: '1 spálňa',
    pl: '1 sypialnia',
    fr: '1 chambre',
    it: '1 camera da letto',
    de: '1 Schlafzimmer',
    uk: '1 спальня',
    ru: '1 спальня'
  },
  twoPlusBedrooms: {
    hr: '2+ spavaće sobe',
    en: '2+ Bedrooms',
    cs: '2+ ložnice',
    sk: '2+ spálne',
    pl: '2+ sypialnie',
    fr: '2+ chambres',
    it: '2+ camere da letto',
    de: '2+ Schlafzimmer',
    uk: '2+ спальні',
    ru: '2+ спальни'
  },
  anyPrice: {
    hr: 'Bilo koja cijena',
    en: 'Any Price',
    cs: 'Jakákoli cena',
    sk: 'Akákoľvek cena',
    pl: 'Dowolna cena',
    fr: 'Tout prix',
    it: 'Qualsiasi prezzo',
    de: 'Jeder Preis',
    uk: 'Будь-яка ціна',
    ru: 'Любая цена'
  },
  under200: {
    hr: 'Ispod $200',
    en: 'Under $200',
    cs: 'Pod $200',
    sk: 'Pod $200',
    pl: 'Poniżej $200',
    fr: 'Moins de $200',
    it: 'Sotto $200',
    de: 'Unter $200',
    uk: 'Менше $200',
    ru: 'Менее $200'
  },
  price200to300: {
    hr: '$200 - $300',
    en: '$200 - $300',
    cs: '$200 - $300',
    sk: '$200 - $300',
    pl: '$200 - $300',
    fr: '$200 - $300',
    it: '$200 - $300',
    de: '$200 - $300',
    uk: '$200 - $300',
    ru: '$200 - $300'
  },
  price300plus: {
    hr: '$300+',
    en: '$300+',
    cs: '$300+',
    sk: '$300+',
    pl: '$300+',
    fr: '$300+',
    it: '$300+',
    de: '$300+',
    uk: '$300+',
    ru: '$300+'
  },
  anyGuests: {
    hr: 'Bilo koji broj gostiju',
    en: 'Any Guests',
    cs: 'Jakýkoli počet hostů',
    sk: 'Akýkoľvek počet hostí',
    pl: 'Dowolna liczba gości',
    fr: 'Tout nombre d\'invités',
    it: 'Qualsiasi numero di ospiti',
    de: 'Beliebige Anzahl Gäste',
    uk: 'Будь-яка кількість гостей',
    ru: 'Любое количество гостей'
  },
  oneToTwoGuests: {
    hr: '1-2 gosta',
    en: '1-2 Guests',
    cs: '1-2 hosté',
    sk: '1-2 hostia',
    pl: '1-2 gości',
    fr: '1-2 invités',
    it: '1-2 ospiti',
    de: '1-2 Gäste',
    uk: '1-2 гостя',
    ru: '1-2 гостя'
  },
  threeToFourGuests: {
    hr: '3-4 gosta',
    en: '3-4 Guests',
    cs: '3-4 hosté',
    sk: '3-4 hostia',
    pl: '3-4 gości',
    fr: '3-4 invités',
    it: '3-4 ospiti',
    de: '3-4 Gäste',
    uk: '3-4 гостя',
    ru: '3-4 гостя'
  },
  fiveGuests: {
    hr: '5 gostiju',
    en: '5 Guests',
    cs: '5 hostů',
    sk: '5 hostí',
    pl: '5 gości',
    fr: '5 invités',
    it: '5 ospiti',
    de: '5 Gäste',
    uk: '5 гостей',
    ru: '5 гостей'
  },
  showing: {
    hr: 'Prikazuje',
    en: 'Showing',
    cs: 'Zobrazuje se',
    sk: 'Zobrazuje sa',
    pl: 'Pokazuje',
    fr: 'Affichage',
    it: 'Mostrando',
    de: 'Zeige',
    uk: 'Показано',
    ru: 'Показано'
  },
  needHelp: {
    hr: 'Trebate pomoć?',
    en: 'Need Help?',
    cs: 'Potřebujete pomoc?',
    sk: 'Potrebujete pomoc?',
    pl: 'Potrzebujesz pomocy?',
    fr: 'Besoin d\'aide?',
    it: 'Hai bisogno di aiuto?',
    de: 'Brauchen Sie Hilfe?',
    uk: 'Потрібна допомога?',
    ru: 'Нужна помощь?'
  },
  needHelpDesc: {
    hr: 'Naš tim je tu da vam pomogne pronaći savršen apartman za vaš boravak.',
    en: 'Our team is here to help you find the perfect apartment for your stay.',
    cs: 'Náš tým je tu, aby vám pomohl najít dokonalý apartmán pro váš pobyt.',
    sk: 'Náš tím je tu, aby vám pomohol nájsť dokonalý apartmán pre váš pobyt.',
    pl: 'Nasz zespół jest tutaj, aby pomóc Ci znaleźć idealny apartament na pobyt.',
    fr: 'Notre équipe est là pour vous aider à trouver l\'appartement parfait pour votre séjour.',
    it: 'Il nostro team è qui per aiutarti a trovare l\'appartamento perfetto per il tuo soggiorno.',
    de: 'Unser Team ist hier, um Ihnen zu helfen, das perfekte Apartment für Ihren Aufenthalt zu finden.',
    uk: 'Наша команда тут, щоб допомогти вам знайти ідеальний апартамент для вашого перебування.',
    ru: 'Наша команда здесь, чтобы помочь вам найти идеальную квартиру для вашего пребывания.'
  },
  guest: {
    hr: 'gost',
    en: 'guest',
    cs: 'host',
    sk: 'hosť',
    pl: 'gość',
    fr: 'invité',
    it: 'ospite',
    de: 'Gast',
    uk: 'гість',
    ru: 'гость'
  }
};

let currentLanguage: SupportedLanguage = 'en';

export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

export function setLanguage(lang: SupportedLanguage): void {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }
}

export function initializeLanguage(): void {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language') as SupportedLanguage;
    if (savedLanguage && supportedLanguages.some(l => l.code === savedLanguage)) {
      currentLanguage = savedLanguage;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
      if (supportedLanguages.some(l => l.code === browserLang)) {
        currentLanguage = browserLang;
      }
    }
  }
}

export function t(key: string): string {
  const translation = translations[key as keyof typeof translations];
  if (!translation) {
    console.warn(`Translation missing for key: ${key}`);
    return key;
  }
  return translation[currentLanguage] || translation.en || key;
}

// Initialize language on module load
if (typeof window !== 'undefined') {
  initializeLanguage();
}