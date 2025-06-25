export interface Translation {
  // Navigation
  home: string;
  apartments: string;
  amenities: string;
  location: string;
  contact: string;
  bookNow: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  exploreApartments: string;
  bookYourStay: string;
  
  // Features
  whyChoose: string;
  whyChooseSubtitle: string;
  beachfrontLocation: string;
  beachfrontDesc: string;
  oceanViews: string;
  oceanViewsDesc: string;
  swimmingPool: string;
  swimmingPoolDesc: string;
  fullKitchen: string;
  fullKitchenDesc: string;
  freeWifi: string;
  freeWifiDesc: string;
  freeParking: string;
  freeParkingDesc: string;
  
  // Apartments
  ourApartments: string;
  ourApartmentsSubtitle: string;
  guests: string;
  bed: string;
  beds: string;
  bath: string;
  baths: string;
  viewDetails: string;
  viewDetailsBook: string;
  
  // Testimonials
  whatGuestsSay: string;
  whatGuestsSaySubtitle: string;
  
  // Footer
  quickLinks: string;
  contactInfo: string;
  privacyPolicy: string;
  termsOfService: string;
  sitemap: string;
  
  // Contact
  contactUs: string;
  contactSubtitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  sendMessage: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  subject: string;
  selectSubject: string;
  newReservation: string;
  existingReservation: string;
  generalInquiry: string;
  amenitiesServices: string;
  feedback: string;
  other: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfGuests: string;
  selectGuests: string;
  message: string;
  messagePlaceholder: string;
  newsletter: string;
  
  // Booking
  bookYourStayTitle: string;
  apartmentInfo: string;
  stayDetails: string;
  guestInformation: string;
  specialRequests: string;
  specialRequestsPlaceholder: string;
  bookingSummary: string;
  nights: string;
  ratePerNight: string;
  subtotal: string;
  taxesFees: string;
  total: string;
  confirmBooking: string;
  bookingConfirmed: string;
  bookingConfirmedMessage: string;
  close: string;
  
  // Calendar
  selectDates: string;
  checkin: string;
  checkout: string;
  available: string;
  booked: string;
  selected: string;
  
  // Common
  loading: string;
  error: string;
  success: string;
  cancel: string;
  confirm: string;
  required: string;
  optional: string;
  
  // Months
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
  
  // Days
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  
  // Short days
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation
    home: "Home",
    apartments: "Apartments",
    amenities: "Amenities",
    location: "Location",
    contact: "Contact",
    bookNow: "Book Now",
    
    // Hero Section
    heroTitle: "Luxury Apartments by the Ocean",
    heroSubtitle: "Experience the perfect blend of comfort, elegance, and breathtaking ocean views in our premium vacation apartments.",
    exploreApartments: "Explore Apartments",
    bookYourStay: "Book Your Stay",
    
    // Features
    whyChoose: "Why Choose Apartments Delfin?",
    whyChooseSubtitle: "Discover the perfect combination of luxury, comfort, and convenience that makes our apartments the ideal choice for your vacation.",
    beachfrontLocation: "Beachfront Location",
    beachfrontDesc: "Just steps away from pristine sandy beaches and crystal-clear waters.",
    oceanViews: "Ocean Views",
    oceanViewsDesc: "Wake up to breathtaking panoramic views of the ocean from your private balcony.",
    swimmingPool: "Swimming Pool",
    swimmingPoolDesc: "Relax in our infinity pool overlooking the ocean with poolside service.",
    fullKitchen: "Full Kitchen",
    fullKitchenDesc: "Modern, fully equipped kitchens with premium appliances and dining areas.",
    freeWifi: "Free WiFi",
    freeWifiDesc: "Stay connected with complimentary high-speed wireless internet throughout.",
    freeParking: "Free Parking",
    freeParkingDesc: "Secure, covered parking included with every apartment reservation.",
    
    // Apartments
    ourApartments: "Our Apartment Collection",
    ourApartmentsSubtitle: "Choose from our carefully curated selection of luxury apartments, each designed to provide the ultimate comfort and stunning ocean views.",
    guests: "Guests",
    bed: "Bed",
    beds: "Beds",
    bath: "Bath",
    baths: "Baths",
    viewDetails: "View Details",
    viewDetailsBook: "View Details & Book",
    
    // Testimonials
    whatGuestsSay: "What Our Guests Say",
    whatGuestsSaySubtitle: "Don't just take our word for it. Here's what our satisfied guests have to say about their experience at Apartments Delfin.",
    
    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    sitemap: "Sitemap",
    
    // Contact
    contactUs: "Contact Us",
    contactSubtitle: "We're here to help make your stay perfect. Reach out to us anytime for reservations, questions, or assistance.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Hours",
    sendMessage: "Send Message",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    subject: "Subject",
    selectSubject: "Select a subject",
    newReservation: "New Reservation",
    existingReservation: "Existing Reservation",
    generalInquiry: "General Inquiry",
    amenitiesServices: "Amenities & Services",
    feedback: "Feedback",
    other: "Other",
    checkinDate: "Check-in Date",
    checkoutDate: "Check-out Date",
    numberOfGuests: "Number of Guests",
    selectGuests: "Select number of guests",
    message: "Message",
    messagePlaceholder: "Please tell us how we can help you...",
    newsletter: "I would like to receive updates and special offers via email",
    
    // Booking
    bookYourStayTitle: "Book Your Stay",
    apartmentInfo: "Apartment Information",
    stayDetails: "Stay Details",
    guestInformation: "Guest Information",
    specialRequests: "Special Requests",
    specialRequestsPlaceholder: "Any special requests or requirements...",
    bookingSummary: "Booking Summary",
    nights: "Nights",
    ratePerNight: "Rate per night",
    subtotal: "Subtotal",
    taxesFees: "Taxes & Fees",
    total: "Total",
    confirmBooking: "Confirm Booking",
    bookingConfirmed: "Booking Confirmed!",
    bookingConfirmedMessage: "Thank you for your reservation. We'll contact you shortly with confirmation details.",
    close: "Close",
    
    // Calendar
    selectDates: "Select Your Dates",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Available",
    booked: "Booked",
    selected: "Selected",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    required: "Required",
    optional: "Optional",
    
    // Months
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
    
    // Days
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    
    // Short days
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat"
  },
  
  cs: {
    // Navigation
    home: "Domů",
    apartments: "Apartmány",
    amenities: "Vybavení",
    location: "Poloha",
    contact: "Kontakt",
    bookNow: "Rezervovat",
    
    // Hero Section
    heroTitle: "Luxusní apartmány u oceánu",
    heroSubtitle: "Zažijte dokonalou kombinaci pohodlí, elegance a úchvatných výhledů na oceán v našich prémiových prázdninových apartmánech.",
    exploreApartments: "Prozkoumat apartmány",
    bookYourStay: "Rezervovat pobyt",
    
    // Features
    whyChoose: "Proč si vybrat Apartments Delfin?",
    whyChooseSubtitle: "Objevte dokonalou kombinaci luxusu, pohodlí a praktičnosti, která činí naše apartmány ideální volbou pro vaši dovolenou.",
    beachfrontLocation: "Poloha u pláže",
    beachfrontDesc: "Jen pár kroků od nedotčených písečných pláží a křišťálově čistých vod.",
    oceanViews: "Výhledy na oceán",
    oceanViewsDesc: "Probuďte se s úchvatnými panoramatickými výhledy na oceán z vašeho soukromého balkonu.",
    swimmingPool: "Bazén",
    swimmingPoolDesc: "Relaxujte v našem nekonečném bazénu s výhledem na oceán a obsluhou u bazénu.",
    fullKitchen: "Plně vybavená kuchyň",
    fullKitchenDesc: "Moderní, plně vybavené kuchyně s prémiovými spotřebiči a jídelními kouty.",
    freeWifi: "Bezplatné WiFi",
    freeWifiDesc: "Zůstaňte ve spojení s bezplatným vysokorychlostním bezdrátovým internetem.",
    freeParking: "Bezplatné parkování",
    freeParkingDesc: "Zabezpečené, kryté parkování zahrnuto v každé rezervaci apartmánu.",
    
    // Apartments
    ourApartments: "Naše kolekce apartmánů",
    ourApartmentsSubtitle: "Vyberte si z naší pečlivě vybrané kolekce luxusních apartmánů, každý navržený tak, aby poskytoval maximální pohodlí a úžasné výhledy na oceán.",
    guests: "Hosté",
    bed: "Postel",
    beds: "Postele",
    bath: "Koupelna",
    baths: "Koupelny",
    viewDetails: "Zobrazit detaily",
    viewDetailsBook: "Zobrazit detaily a rezervovat",
    
    // Testimonials
    whatGuestsSay: "Co říkají naši hosté",
    whatGuestsSaySubtitle: "Nemusíte nám věřit na slovo. Zde je to, co říkají naši spokojení hosté o svých zkušenostech v Apartments Delfin.",
    
    // Footer
    quickLinks: "Rychlé odkazy",
    contactInfo: "Kontaktní informace",
    privacyPolicy: "Zásady ochrany osobních údajů",
    termsOfService: "Podmínky služby",
    sitemap: "Mapa stránek",
    
    // Contact
    contactUs: "Kontaktujte nás",
    contactSubtitle: "Jsme tu, abychom vám pomohli udělat váš pobyt dokonalým. Kontaktujte nás kdykoli pro rezervace, dotazy nebo pomoc.",
    phone: "Telefon",
    email: "E-mail",
    address: "Adresa",
    hours: "Otevírací doba",
    sendMessage: "Odeslat zprávu",
    firstName: "Jméno",
    lastName: "Příjmení",
    emailAddress: "E-mailová adresa",
    phoneNumber: "Telefonní číslo",
    subject: "Předmět",
    selectSubject: "Vyberte předmět",
    newReservation: "Nová rezervace",
    existingReservation: "Stávající rezervace",
    generalInquiry: "Obecný dotaz",
    amenitiesServices: "Vybavení a služby",
    feedback: "Zpětná vazba",
    other: "Jiné",
    checkinDate: "Datum příjezdu",
    checkoutDate: "Datum odjezdu",
    numberOfGuests: "Počet hostů",
    selectGuests: "Vyberte počet hostů",
    message: "Zpráva",
    messagePlaceholder: "Prosím, řekněte nám, jak vám můžeme pomoci...",
    newsletter: "Chtěl bych dostávat aktualizace a speciální nabídky e-mailem",
    
    // Booking
    bookYourStayTitle: "Rezervovat pobyt",
    apartmentInfo: "Informace o apartmánu",
    stayDetails: "Detaily pobytu",
    guestInformation: "Informace o hostovi",
    specialRequests: "Speciální požadavky",
    specialRequestsPlaceholder: "Jakékoli speciální požadavky nebo potřeby...",
    bookingSummary: "Shrnutí rezervace",
    nights: "Noci",
    ratePerNight: "Cena za noc",
    subtotal: "Mezisoučet",
    taxesFees: "Daně a poplatky",
    total: "Celkem",
    confirmBooking: "Potvrdit rezervaci",
    bookingConfirmed: "Rezervace potvrzena!",
    bookingConfirmedMessage: "Děkujeme za vaši rezervaci. Brzy vás budeme kontaktovat s potvrzovacími detaily.",
    close: "Zavřít",
    
    // Calendar
    selectDates: "Vyberte vaše data",
    checkin: "Příjezd",
    checkout: "Odjezd",
    available: "Dostupné",
    booked: "Rezervováno",
    selected: "Vybráno",
    
    // Common
    loading: "Načítání...",
    error: "Chyba",
    success: "Úspěch",
    cancel: "Zrušit",
    confirm: "Potvrdit",
    required: "Povinné",
    optional: "Volitelné",
    
    // Months
    january: "Leden",
    february: "Únor",
    march: "Březen",
    april: "Duben",
    may: "Květen",
    june: "Červen",
    july: "Červenec",
    august: "Srpen",
    september: "Září",
    october: "Říjen",
    november: "Listopad",
    december: "Prosinec",
    
    // Days
    sunday: "Neděle",
    monday: "Pondělí",
    tuesday: "Úterý",
    wednesday: "Středa",
    thursday: "Čtvrtek",
    friday: "Pátek",
    saturday: "Sobota",
    
    // Short days
    sun: "Ne",
    mon: "Po",
    tue: "Út",
    wed: "St",
    thu: "Čt",
    fri: "Pá",
    sat: "So"
  },
  
  sk: {
    // Navigation
    home: "Domov",
    apartments: "Apartmány",
    amenities: "Vybavenie",
    location: "Poloha",
    contact: "Kontakt",
    bookNow: "Rezervovať",
    
    // Hero Section
    heroTitle: "Luxusné apartmány pri oceáne",
    heroSubtitle: "Zažite dokonalú kombináciu pohodlia, elegancie a úchvatných výhľadov na oceán v našich prémiových prázdninových apartmánoch.",
    exploreApartments: "Preskúmať apartmány",
    bookYourStay: "Rezervovať pobyt",
    
    // Features
    whyChoose: "Prečo si vybrať Apartments Delfin?",
    whyChooseSubtitle: "Objavte dokonalú kombináciu luxusu, pohodlia a praktičnosti, ktorá robí naše apartmány ideálnou voľbou pre vašu dovolenku.",
    beachfrontLocation: "Poloha pri pláži",
    beachfrontDesc: "Len pár krokov od nedotknutých piesočných pláží a krištáľovo čistých vôd.",
    oceanViews: "Výhľady na oceán",
    oceanViewsDesc: "Prebuďte sa s úchvatnými panoramatickými výhľadmi na oceán z vášho súkromného balkóna.",
    swimmingPool: "Bazén",
    swimmingPoolDesc: "Relaxujte v našom nekonečnom bazéne s výhľadom na oceán a obsluhou pri bazéne.",
    fullKitchen: "Plne vybavená kuchyňa",
    fullKitchenDesc: "Moderné, plne vybavené kuchyne s prémiovými spotrebičmi a jedálenskými kútmi.",
    freeWifi: "Bezplatné WiFi",
    freeWifiDesc: "Zostaňte v spojení s bezplatným vysokorýchlostným bezdrôtovým internetom.",
    freeParking: "Bezplatné parkovanie",
    freeParkingDesc: "Zabezpečené, kryté parkovanie zahrnuté v každej rezervácii apartmánu.",
    
    // Apartments
    ourApartments: "Naša kolekcia apartmánov",
    ourApartmentsSubtitle: "Vyberte si z našej starostlivo vybranej kolekcie luxusných apartmánov, každý navrhnutý tak, aby poskytoval maximálne pohodlie a úžasné výhľady na oceán.",
    guests: "Hostia",
    bed: "Posteľ",
    beds: "Postele",
    bath: "Kúpeľňa",
    baths: "Kúpeľne",
    viewDetails: "Zobraziť detaily",
    viewDetailsBook: "Zobraziť detaily a rezervovať",
    
    // Testimonials
    whatGuestsSay: "Čo hovoria naši hostia",
    whatGuestsSaySubtitle: "Nemusíte nám veriť na slovo. Tu je to, čo hovoria naši spokojní hostia o svojich skúsenostiach v Apartments Delfin.",
    
    // Footer
    quickLinks: "Rýchle odkazy",
    contactInfo: "Kontaktné informácie",
    privacyPolicy: "Zásady ochrany osobných údajov",
    termsOfService: "Podmienky služby",
    sitemap: "Mapa stránok",
    
    // Contact
    contactUs: "Kontaktujte nás",
    contactSubtitle: "Sme tu, aby sme vám pomohli urobiť váš pobyt dokonalým. Kontaktujte nás kedykoľvek pre rezervácie, otázky alebo pomoc.",
    phone: "Telefón",
    email: "E-mail",
    address: "Adresa",
    hours: "Otváracie hodiny",
    sendMessage: "Odoslať správu",
    firstName: "Meno",
    lastName: "Priezvisko",
    emailAddress: "E-mailová adresa",
    phoneNumber: "Telefónne číslo",
    subject: "Predmet",
    selectSubject: "Vyberte predmet",
    newReservation: "Nová rezervácia",
    existingReservation: "Existujúca rezervácia",
    generalInquiry: "Všeobecný dotaz",
    amenitiesServices: "Vybavenie a služby",
    feedback: "Spätná väzba",
    other: "Iné",
    checkinDate: "Dátum príchodu",
    checkoutDate: "Dátum odchodu",
    numberOfGuests: "Počet hostí",
    selectGuests: "Vyberte počet hostí",
    message: "Správa",
    messagePlaceholder: "Prosím, povedzte nám, ako vám môžeme pomôcť...",
    newsletter: "Chcel by som dostávať aktualizácie a špeciálne ponuky e-mailom",
    
    // Booking
    bookYourStayTitle: "Rezervovať pobyt",
    apartmentInfo: "Informácie o apartmáne",
    stayDetails: "Detaily pobytu",
    guestInformation: "Informácie o hosťovi",
    specialRequests: "Špeciálne požiadavky",
    specialRequestsPlaceholder: "Akékoľvek špeciálne požiadavky alebo potreby...",
    bookingSummary: "Zhrnutie rezervácie",
    nights: "Noci",
    ratePerNight: "Cena za noc",
    subtotal: "Medzisúčet",
    taxesFees: "Dane a poplatky",
    total: "Celkom",
    confirmBooking: "Potvrdiť rezerváciu",
    bookingConfirmed: "Rezervácia potvrdená!",
    bookingConfirmedMessage: "Ďakujeme za vašu rezerváciu. Čoskoro vás budeme kontaktovať s potvrdzovacie detailmi.",
    close: "Zavrieť",
    
    // Calendar
    selectDates: "Vyberte vaše dátumy",
    checkin: "Príchod",
    checkout: "Odchod",
    available: "Dostupné",
    booked: "Rezervované",
    selected: "Vybrané",
    
    // Common
    loading: "Načítava sa...",
    error: "Chyba",
    success: "Úspech",
    cancel: "Zrušiť",
    confirm: "Potvrdiť",
    required: "Povinné",
    optional: "Voliteľné",
    
    // Months
    january: "Január",
    february: "Február",
    march: "Marec",
    april: "Apríl",
    may: "Máj",
    june: "Jún",
    july: "Júl",
    august: "August",
    september: "September",
    october: "Október",
    november: "November",
    december: "December",
    
    // Days
    sunday: "Nedeľa",
    monday: "Pondelok",
    tuesday: "Utorok",
    wednesday: "Streda",
    thursday: "Štvrtok",
    friday: "Piatok",
    saturday: "Sobota",
    
    // Short days
    sun: "Ne",
    mon: "Po",
    tue: "Ut",
    wed: "St",
    thu: "Št",
    fri: "Pi",
    sat: "So"
  },
  
  pl: {
    // Navigation
    home: "Strona główna",
    apartments: "Apartamenty",
    amenities: "Udogodnienia",
    location: "Lokalizacja",
    contact: "Kontakt",
    bookNow: "Zarezerwuj",
    
    // Hero Section
    heroTitle: "Luksusowe apartamenty nad oceanem",
    heroSubtitle: "Doświadcz idealnego połączenia komfortu, elegancji i zapierających dech w piersiach widoków na ocean w naszych premium apartamentach wakacyjnych.",
    exploreApartments: "Odkryj apartamenty",
    bookYourStay: "Zarezerwuj pobyt",
    
    // Features
    whyChoose: "Dlaczego wybrać Apartments Delfin?",
    whyChooseSubtitle: "Odkryj idealną kombinację luksusu, komfortu i wygody, która czyni nasze apartamenty idealnym wyborem na wakacje.",
    beachfrontLocation: "Lokalizacja przy plaży",
    beachfrontDesc: "Zaledwie kilka kroków od dziewiczych piaszczystych plaż i krystalicznie czystych wód.",
    oceanViews: "Widoki na ocean",
    oceanViewsDesc: "Obudź się z zapierającymi dech w piersiach panoramicznymi widokami na ocean z prywatnego balkonu.",
    swimmingPool: "Basen",
    swimmingPoolDesc: "Zrelaksuj się w naszym basenie bez krawędzi z widokiem na ocean i obsługą przy basenie.",
    fullKitchen: "Pełna kuchnia",
    fullKitchenDesc: "Nowoczesne, w pełni wyposażone kuchnie z premium urządzeniami i jadalnią.",
    freeWifi: "Bezpłatne WiFi",
    freeWifiDesc: "Pozostań w kontakcie dzięki bezpłatnemu szybkiemu internetowi bezprzewodowemu.",
    freeParking: "Bezpłatny parking",
    freeParkingDesc: "Bezpieczny, zadaszony parking wliczony w każdą rezerwację apartamentu.",
    
    // Apartments
    ourApartments: "Nasza kolekcja apartamentów",
    ourApartmentsSubtitle: "Wybierz z naszej starannie wyselekcjonowanej kolekcji luksusowych apartamentów, każdy zaprojektowany aby zapewnić najwyższy komfort i wspaniałe widoki na ocean.",
    guests: "Goście",
    bed: "Łóżko",
    beds: "Łóżka",
    bath: "Łazienka",
    baths: "Łazienki",
    viewDetails: "Zobacz szczegóły",
    viewDetailsBook: "Zobacz szczegóły i zarezerwuj",
    
    // Testimonials
    whatGuestsSay: "Co mówią nasi goście",
    whatGuestsSaySubtitle: "Nie musisz wierzyć nam na słowo. Oto co mówią nasi zadowoleni goście o swoich doświadczeniach w Apartments Delfin.",
    
    // Footer
    quickLinks: "Szybkie linki",
    contactInfo: "Informacje kontaktowe",
    privacyPolicy: "Polityka prywatności",
    termsOfService: "Warunki usługi",
    sitemap: "Mapa strony",
    
    // Contact
    contactUs: "Skontaktuj się z nami",
    contactSubtitle: "Jesteśmy tutaj, aby pomóc uczynić Twój pobyt idealnym. Skontaktuj się z nami w dowolnym momencie w sprawie rezerwacji, pytań lub pomocy.",
    phone: "Telefon",
    email: "E-mail",
    address: "Adres",
    hours: "Godziny",
    sendMessage: "Wyślij wiadomość",
    firstName: "Imię",
    lastName: "Nazwisko",
    emailAddress: "Adres e-mail",
    phoneNumber: "Numer telefonu",
    subject: "Temat",
    selectSubject: "Wybierz temat",
    newReservation: "Nowa rezerwacja",
    existingReservation: "Istniejąca rezerwacja",
    generalInquiry: "Ogólne zapytanie",
    amenitiesServices: "Udogodnienia i usługi",
    feedback: "Opinia",
    other: "Inne",
    checkinDate: "Data zameldowania",
    checkoutDate: "Data wymeldowania",
    numberOfGuests: "Liczba gości",
    selectGuests: "Wybierz liczbę gości",
    message: "Wiadomość",
    messagePlaceholder: "Proszę powiedz nam, jak możemy Ci pomóc...",
    newsletter: "Chciałbym otrzymywać aktualizacje i specjalne oferty e-mailem",
    
    // Booking
    bookYourStayTitle: "Zarezerwuj pobyt",
    apartmentInfo: "Informacje o apartamencie",
    stayDetails: "Szczegóły pobytu",
    guestInformation: "Informacje o gościu",
    specialRequests: "Specjalne życzenia",
    specialRequestsPlaceholder: "Wszelkie specjalne życzenia lub wymagania...",
    bookingSummary: "Podsumowanie rezerwacji",
    nights: "Noce",
    ratePerNight: "Cena za noc",
    subtotal: "Suma częściowa",
    taxesFees: "Podatki i opłaty",
    total: "Razem",
    confirmBooking: "Potwierdź rezerwację",
    bookingConfirmed: "Rezerwacja potwierdzona!",
    bookingConfirmedMessage: "Dziękujemy za rezerwację. Wkrótce skontaktujemy się z Tobą ze szczegółami potwierdzenia.",
    close: "Zamknij",
    
    // Calendar
    selectDates: "Wybierz swoje daty",
    checkin: "Zameldowanie",
    checkout: "Wymeldowanie",
    available: "Dostępne",
    booked: "Zarezerwowane",
    selected: "Wybrane",
    
    // Common
    loading: "Ładowanie...",
    error: "Błąd",
    success: "Sukces",
    cancel: "Anuluj",
    confirm: "Potwierdź",
    required: "Wymagane",
    optional: "Opcjonalne",
    
    // Months
    january: "Styczeń",
    february: "Luty",
    march: "Marzec",
    april: "Kwiecień",
    may: "Maj",
    june: "Czerwiec",
    july: "Lipiec",
    august: "Sierpień",
    september: "Wrzesień",
    october: "Październik",
    november: "Listopad",
    december: "Grudzień",
    
    // Days
    sunday: "Niedziela",
    monday: "Poniedziałek",
    tuesday: "Wtorek",
    wednesday: "Środa",
    thursday: "Czwartek",
    friday: "Piątek",
    saturday: "Sobota",
    
    // Short days
    sun: "Nd",
    mon: "Pn",
    tue: "Wt",
    wed: "Śr",
    thu: "Cz",
    fri: "Pt",
    sat: "So"
  },
  
  fr: {
    // Navigation
    home: "Accueil",
    apartments: "Appartements",
    amenities: "Équipements",
    location: "Emplacement",
    contact: "Contact",
    bookNow: "Réserver",
    
    // Hero Section
    heroTitle: "Appartements de luxe au bord de l'océan",
    heroSubtitle: "Découvrez le mélange parfait de confort, d'élégance et de vues océaniques à couper le souffle dans nos appartements de vacances premium.",
    exploreApartments: "Explorer les appartements",
    bookYourStay: "Réserver votre séjour",
    
    // Features
    whyChoose: "Pourquoi choisir Apartments Delfin?",
    whyChooseSubtitle: "Découvrez la combinaison parfaite de luxe, confort et commodité qui fait de nos appartements le choix idéal pour vos vacances.",
    beachfrontLocation: "Emplacement en bord de mer",
    beachfrontDesc: "À quelques pas seulement des plages de sable vierge et des eaux cristallines.",
    oceanViews: "Vues sur l'océan",
    oceanViewsDesc: "Réveillez-vous avec des vues panoramiques à couper le souffle sur l'océan depuis votre balcon privé.",
    swimmingPool: "Piscine",
    swimmingPoolDesc: "Détendez-vous dans notre piscine à débordement avec vue sur l'océan et service au bord de la piscine.",
    fullKitchen: "Cuisine complète",
    fullKitchenDesc: "Cuisines modernes entièrement équipées avec des appareils premium et espaces repas.",
    freeWifi: "WiFi gratuit",
    freeWifiDesc: "Restez connecté avec l'internet sans fil haut débit gratuit partout.",
    freeParking: "Parking gratuit",
    freeParkingDesc: "Parking sécurisé et couvert inclus avec chaque réservation d'appartement.",
    
    // Apartments
    ourApartments: "Notre collection d'appartements",
    ourApartmentsSubtitle: "Choisissez parmi notre sélection soigneusement organisée d'appartements de luxe, chacun conçu pour offrir le confort ultime et des vues océaniques magnifiques.",
    guests: "Invités",
    bed: "Lit",
    beds: "Lits",
    bath: "Salle de bain",
    baths: "Salles de bain",
    viewDetails: "Voir les détails",
    viewDetailsBook: "Voir les détails et réserver",
    
    // Testimonials
    whatGuestsSay: "Ce que disent nos invités",
    whatGuestsSaySubtitle: "Ne nous croyez pas sur parole. Voici ce que disent nos invités satisfaits de leur expérience aux Apartments Delfin.",
    
    // Footer
    quickLinks: "Liens rapides",
    contactInfo: "Informations de contact",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions de service",
    sitemap: "Plan du site",
    
    // Contact
    contactUs: "Contactez-nous",
    contactSubtitle: "Nous sommes là pour vous aider à rendre votre séjour parfait. Contactez-nous à tout moment pour des réservations, questions ou assistance.",
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    hours: "Heures",
    sendMessage: "Envoyer le message",
    firstName: "Prénom",
    lastName: "Nom de famille",
    emailAddress: "Adresse e-mail",
    phoneNumber: "Numéro de téléphone",
    subject: "Sujet",
    selectSubject: "Sélectionnez un sujet",
    newReservation: "Nouvelle réservation",
    existingReservation: "Réservation existante",
    generalInquiry: "Demande générale",
    amenitiesServices: "Équipements et services",
    feedback: "Commentaires",
    other: "Autre",
    checkinDate: "Date d'arrivée",
    checkoutDate: "Date de départ",
    numberOfGuests: "Nombre d'invités",
    selectGuests: "Sélectionnez le nombre d'invités",
    message: "Message",
    messagePlaceholder: "Veuillez nous dire comment nous pouvons vous aider...",
    newsletter: "Je souhaiterais recevoir des mises à jour et des offres spéciales par e-mail",
    
    // Booking
    bookYourStayTitle: "Réserver votre séjour",
    apartmentInfo: "Informations sur l'appartement",
    stayDetails: "Détails du séjour",
    guestInformation: "Informations sur l'invité",
    specialRequests: "Demandes spéciales",
    specialRequestsPlaceholder: "Toute demande spéciale ou exigence...",
    bookingSummary: "Résumé de la réservation",
    nights: "Nuits",
    ratePerNight: "Tarif par nuit",
    subtotal: "Sous-total",
    taxesFees: "Taxes et frais",
    total: "Total",
    confirmBooking: "Confirmer la réservation",
    bookingConfirmed: "Réservation confirmée!",
    bookingConfirmedMessage: "Merci pour votre réservation. Nous vous contacterons bientôt avec les détails de confirmation.",
    close: "Fermer",
    
    // Calendar
    selectDates: "Sélectionnez vos dates",
    checkin: "Arrivée",
    checkout: "Départ",
    available: "Disponible",
    booked: "Réservé",
    selected: "Sélectionné",
    
    // Common
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    confirm: "Confirmer",
    required: "Requis",
    optional: "Optionnel",
    
    // Months
    january: "Janvier",
    february: "Février",
    march: "Mars",
    april: "Avril",
    may: "Mai",
    june: "Juin",
    july: "Juillet",
    august: "Août",
    september: "Septembre",
    october: "Octobre",
    november: "Novembre",
    december: "Décembre",
    
    // Days
    sunday: "Dimanche",
    monday: "Lundi",
    tuesday: "Mardi",
    wednesday: "Mercredi",
    thursday: "Jeudi",
    friday: "Vendredi",
    saturday: "Samedi",
    
    // Short days
    sun: "Dim",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Jeu",
    fri: "Ven",
    sat: "Sam"
  },
  
  it: {
    // Navigation
    home: "Home",
    apartments: "Appartamenti",
    amenities: "Servizi",
    location: "Posizione",
    contact: "Contatto",
    bookNow: "Prenota ora",
    
    // Hero Section
    heroTitle: "Appartamenti di lusso sull'oceano",
    heroSubtitle: "Vivi la perfetta combinazione di comfort, eleganza e viste mozzafiato sull'oceano nei nostri appartamenti vacanza premium.",
    exploreApartments: "Esplora appartamenti",
    bookYourStay: "Prenota il tuo soggiorno",
    
    // Features
    whyChoose: "Perché scegliere Apartments Delfin?",
    whyChooseSubtitle: "Scopri la perfetta combinazione di lusso, comfort e convenienza che rende i nostri appartamenti la scelta ideale per le tue vacanze.",
    beachfrontLocation: "Posizione fronte mare",
    beachfrontDesc: "A pochi passi da spiagge sabbiose incontaminate e acque cristalline.",
    oceanViews: "Vista oceano",
    oceanViewsDesc: "Svegliati con viste panoramiche mozzafiato sull'oceano dal tuo balcone privato.",
    swimmingPool: "Piscina",
    swimmingPoolDesc: "Rilassati nella nostra piscina a sfioro con vista sull'oceano e servizio a bordo piscina.",
    fullKitchen: "Cucina completa",
    fullKitchenDesc: "Cucine moderne completamente attrezzate con elettrodomestici premium e zone pranzo.",
    freeWifi: "WiFi gratuito",
    freeWifiDesc: "Rimani connesso con internet wireless ad alta velocità gratuito ovunque.",
    freeParking: "Parcheggio gratuito",
    freeParkingDesc: "Parcheggio sicuro e coperto incluso con ogni prenotazione di appartamento.",
    
    // Apartments
    ourApartments: "La nostra collezione di appartamenti",
    ourApartmentsSubtitle: "Scegli dalla nostra selezione accuratamente curata di appartamenti di lusso, ognuno progettato per fornire il massimo comfort e splendide viste sull'oceano.",
    guests: "Ospiti",
    bed: "Letto",
    beds: "Letti",
    bath: "Bagno",
    baths: "Bagni",
    viewDetails: "Vedi dettagli",
    viewDetailsBook: "Vedi dettagli e prenota",
    
    // Testimonials
    whatGuestsSay: "Cosa dicono i nostri ospiti",
    whatGuestsSaySubtitle: "Non devi crederci sulla parola. Ecco cosa dicono i nostri ospiti soddisfatti della loro esperienza agli Apartments Delfin.",
    
    // Footer
    quickLinks: "Link rapidi",
    contactInfo: "Informazioni di contatto",
    privacyPolicy: "Politica sulla privacy",
    termsOfService: "Termini di servizio",
    sitemap: "Mappa del sito",
    
    // Contact
    contactUs: "Contattaci",
    contactSubtitle: "Siamo qui per aiutarti a rendere perfetto il tuo soggiorno. Contattaci in qualsiasi momento per prenotazioni, domande o assistenza.",
    phone: "Telefono",
    email: "E-mail",
    address: "Indirizzo",
    hours: "Orari",
    sendMessage: "Invia messaggio",
    firstName: "Nome",
    lastName: "Cognome",
    emailAddress: "Indirizzo e-mail",
    phoneNumber: "Numero di telefono",
    subject: "Oggetto",
    selectSubject: "Seleziona un oggetto",
    newReservation: "Nuova prenotazione",
    existingReservation: "Prenotazione esistente",
    generalInquiry: "Richiesta generale",
    amenitiesServices: "Servizi e comfort",
    feedback: "Feedback",
    other: "Altro",
    checkinDate: "Data di check-in",
    checkoutDate: "Data di check-out",
    numberOfGuests: "Numero di ospiti",
    selectGuests: "Seleziona numero di ospiti",
    message: "Messaggio",
    messagePlaceholder: "Per favore dicci come possiamo aiutarti...",
    newsletter: "Vorrei ricevere aggiornamenti e offerte speciali via e-mail",
    
    // Booking
    bookYourStayTitle: "Prenota il tuo soggiorno",
    apartmentInfo: "Informazioni appartamento",
    stayDetails: "Dettagli soggiorno",
    guestInformation: "Informazioni ospite",
    specialRequests: "Richieste speciali",
    specialRequestsPlaceholder: "Qualsiasi richiesta speciale o requisito...",
    bookingSummary: "Riepilogo prenotazione",
    nights: "Notti",
    ratePerNight: "Tariffa per notte",
    subtotal: "Subtotale",
    taxesFees: "Tasse e commissioni",
    total: "Totale",
    confirmBooking: "Conferma prenotazione",
    bookingConfirmed: "Prenotazione confermata!",
    bookingConfirmedMessage: "Grazie per la tua prenotazione. Ti contatteremo presto con i dettagli di conferma.",
    close: "Chiudi",
    
    // Calendar
    selectDates: "Seleziona le tue date",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Disponibile",
    booked: "Prenotato",
    selected: "Selezionato",
    
    // Common
    loading: "Caricamento...",
    error: "Errore",
    success: "Successo",
    cancel: "Annulla",
    confirm: "Conferma",
    required: "Richiesto",
    optional: "Opzionale",
    
    // Months
    january: "Gennaio",
    february: "Febbraio",
    march: "Marzo",
    april: "Aprile",
    may: "Maggio",
    june: "Giugno",
    july: "Luglio",
    august: "Agosto",
    september: "Settembre",
    october: "Ottobre",
    november: "Novembre",
    december: "Dicembre",
    
    // Days
    sunday: "Domenica",
    monday: "Lunedì",
    tuesday: "Martedì",
    wednesday: "Mercoledì",
    thursday: "Giovedì",
    friday: "Venerdì",
    saturday: "Sabato",
    
    // Short days
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Gio",
    fri: "Ven",
    sat: "Sab"
  },
  
  de: {
    // Navigation
    home: "Startseite",
    apartments: "Apartments",
    amenities: "Ausstattung",
    location: "Lage",
    contact: "Kontakt",
    bookNow: "Jetzt buchen",
    
    // Hero Section
    heroTitle: "Luxus-Apartments am Meer",
    heroSubtitle: "Erleben Sie die perfekte Mischung aus Komfort, Eleganz und atemberaubenden Meerblicken in unseren Premium-Ferienapartments.",
    exploreApartments: "Apartments erkunden",
    bookYourStay: "Aufenthalt buchen",
    
    // Features
    whyChoose: "Warum Apartments Delfin wählen?",
    whyChooseSubtitle: "Entdecken Sie die perfekte Kombination aus Luxus, Komfort und Bequemlichkeit, die unsere Apartments zur idealen Wahl für Ihren Urlaub macht.",
    beachfrontLocation: "Strandlage",
    beachfrontDesc: "Nur wenige Schritte von unberührten Sandstränden und kristallklarem Wasser entfernt.",
    oceanViews: "Meerblick",
    oceanViewsDesc: "Wachen Sie mit atemberaubenden Panoramablicken auf das Meer von Ihrem privaten Balkon auf.",
    swimmingPool: "Schwimmbad",
    swimmingPoolDesc: "Entspannen Sie in unserem Infinity-Pool mit Meerblick und Poolservice.",
    fullKitchen: "Vollküche",
    fullKitchenDesc: "Moderne, voll ausgestattete Küchen mit Premium-Geräten und Essbereichen.",
    freeWifi: "Kostenloses WLAN",
    freeWifiDesc: "Bleiben Sie mit kostenlosem Hochgeschwindigkeits-WLAN überall verbunden.",
    freeParking: "Kostenlose Parkplätze",
    freeParkingDesc: "Sichere, überdachte Parkplätze bei jeder Apartment-Reservierung inklusive.",
    
    // Apartments
    ourApartments: "Unsere Apartment-Kollektion",
    ourApartmentsSubtitle: "Wählen Sie aus unserer sorgfältig kuratierten Auswahl an Luxus-Apartments, jedes entworfen, um ultimativen Komfort und atemberaubende Meerblicke zu bieten.",
    guests: "Gäste",
    bed: "Bett",
    beds: "Betten",
    bath: "Bad",
    baths: "Bäder",
    viewDetails: "Details anzeigen",
    viewDetailsBook: "Details anzeigen & buchen",
    
    // Testimonials
    whatGuestsSay: "Was unsere Gäste sagen",
    whatGuestsSaySubtitle: "Sie müssen uns nicht beim Wort nehmen. Hier ist, was unsere zufriedenen Gäste über ihre Erfahrungen in den Apartments Delfin sagen.",
    
    // Footer
    quickLinks: "Schnelle Links",
    contactInfo: "Kontaktinformationen",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    sitemap: "Sitemap",
    
    // Contact
    contactUs: "Kontaktieren Sie uns",
    contactSubtitle: "Wir sind hier, um Ihren Aufenthalt perfekt zu machen. Kontaktieren Sie uns jederzeit für Reservierungen, Fragen oder Hilfe.",
    phone: "Telefon",
    email: "E-Mail",
    address: "Adresse",
    hours: "Öffnungszeiten",
    sendMessage: "Nachricht senden",
    firstName: "Vorname",
    lastName: "Nachname",
    emailAddress: "E-Mail-Adresse",
    phoneNumber: "Telefonnummer",
    subject: "Betreff",
    selectSubject: "Betreff auswählen",
    newReservation: "Neue Reservierung",
    existingReservation: "Bestehende Reservierung",
    generalInquiry: "Allgemeine Anfrage",
    amenitiesServices: "Ausstattung & Services",
    feedback: "Feedback",
    other: "Andere",
    checkinDate: "Check-in-Datum",
    checkoutDate: "Check-out-Datum",
    numberOfGuests: "Anzahl der Gäste",
    selectGuests: "Anzahl der Gäste auswählen",
    message: "Nachricht",
    messagePlaceholder: "Bitte teilen Sie uns mit, wie wir Ihnen helfen können...",
    newsletter: "Ich möchte Updates und Sonderangebote per E-Mail erhalten",
    
    // Booking
    bookYourStayTitle: "Aufenthalt buchen",
    apartmentInfo: "Apartment-Informationen",
    stayDetails: "Aufenthaltsdetails",
    guestInformation: "Gästeinformationen",
    specialRequests: "Sonderwünsche",
    specialRequestsPlaceholder: "Alle Sonderwünsche oder Anforderungen...",
    bookingSummary: "Buchungszusammenfassung",
    nights: "Nächte",
    ratePerNight: "Preis pro Nacht",
    subtotal: "Zwischensumme",
    taxesFees: "Steuern & Gebühren",
    total: "Gesamt",
    confirmBooking: "Buchung bestätigen",
    bookingConfirmed: "Buchung bestätigt!",
    bookingConfirmedMessage: "Vielen Dank für Ihre Reservierung. Wir werden Sie bald mit Bestätigungsdetails kontaktieren.",
    close: "Schließen",
    
    // Calendar
    selectDates: "Wählen Sie Ihre Daten",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Verfügbar",
    booked: "Gebucht",
    selected: "Ausgewählt",
    
    // Common
    loading: "Laden...",
    error: "Fehler",
    success: "Erfolg",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    required: "Erforderlich",
    optional: "Optional",
    
    // Months
    january: "Januar",
    february: "Februar",
    march: "März",
    april: "April",
    may: "Mai",
    june: "Juni",
    july: "Juli",
    august: "August",
    september: "September",
    october: "Oktober",
    november: "November",
    december: "Dezember",
    
    // Days
    sunday: "Sonntag",
    monday: "Montag",
    tuesday: "Dienstag",
    wednesday: "Mittwoch",
    thursday: "Donnerstag",
    friday: "Freitag",
    saturday: "Samstag",
    
    // Short days
    sun: "So",
    mon: "Mo",
    tue: "Di",
    wed: "Mi",
    thu: "Do",
    fri: "Fr",
    sat: "Sa"
  },
  
  uk: {
    // Navigation
    home: "Головна",
    apartments: "Апартаменти",
    amenities: "Зручності",
    location: "Розташування",
    contact: "Контакт",
    bookNow: "Забронювати",
    
    // Hero Section
    heroTitle: "Розкішні апартаменти біля океану",
    heroSubtitle: "Відчуйте ідеальне поєднання комфорту, елегантності та захоплюючих видів на океан у наших преміум апартаментах для відпочинку.",
    exploreApartments: "Дослідити апартаменти",
    bookYourStay: "Забронювати проживання",
    
    // Features
    whyChoose: "Чому обрати Apartments Delfin?",
    whyChooseSubtitle: "Відкрийте ідеальну комбінацію розкоші, комфорту та зручності, що робить наші апартаменти ідеальним вибором для вашої відпустки.",
    beachfrontLocation: "Розташування на березі",
    beachfrontDesc: "Лише кілька кроків від недоторканих піщаних пляжів та кришталево чистих вод.",
    oceanViews: "Види на океан",
    oceanViewsDesc: "Прокидайтеся з захоплюючими панорамними видами на океан з вашого приватного балкону.",
    swimmingPool: "Басейн",
    swimmingPoolDesc: "Розслабтеся в нашому безкрайньому басейні з видом на океан та обслуговуванням біля басейну.",
    fullKitchen: "Повна кухня",
    fullKitchenDesc: "Сучасні, повністю обладнані кухні з преміум технікою та обідніми зонами.",
    freeWifi: "Безкоштовний WiFi",
    freeWifiDesc: "Залишайтеся на зв'язку з безкоштовним високошвидкісним бездротовим інтернетом.",
    freeParking: "Безкоштовна парковка",
    freeParkingDesc: "Безпечна, критая парковка включена в кожне бронювання апартаментів.",
    
    // Apartments
    ourApartments: "Наша колекція апартаментів",
    ourApartmentsSubtitle: "Оберіть з нашої ретельно підібраної колекції розкішних апартаментів, кожен розроблений для забезпечення максимального комфорту та приголомшливих видів на океан.",
    guests: "Гості",
    bed: "Ліжко",
    beds: "Ліжка",
    bath: "Ванна",
    baths: "Ванні",
    viewDetails: "Переглянути деталі",
    viewDetailsBook: "Переглянути деталі та забронювати",
    
    // Testimonials
    whatGuestsSay: "Що кажуть наші гості",
    whatGuestsSaySubtitle: "Не треба вірити нам на слово. Ось що кажуть наші задоволені гості про свій досвід в Apartments Delfin.",
    
    // Footer
    quickLinks: "Швидкі посилання",
    contactInfo: "Контактна інформація",
    privacyPolicy: "Політика конфіденційності",
    termsOfService: "Умови обслуговування",
    sitemap: "Карта сайту",
    
    // Contact
    contactUs: "Зв'яжіться з нами",
    contactSubtitle: "Ми тут, щоб допомогти зробити ваше перебування ідеальним. Зв'яжіться з нами в будь-який час для бронювання, питань або допомоги.",
    phone: "Телефон",
    email: "Електронна пошта",
    address: "Адреса",
    hours: "Години роботи",
    sendMessage: "Надіслати повідомлення",
    firstName: "Ім'я",
    lastName: "Прізвище",
    emailAddress: "Адреса електронної пошти",
    phoneNumber: "Номер телефону",
    subject: "Тема",
    selectSubject: "Оберіть тему",
    newReservation: "Нове бронювання",
    existingReservation: "Існуюче бронювання",
    generalInquiry: "Загальний запит",
    amenitiesServices: "Зручності та послуги",
    feedback: "Відгук",
    other: "Інше",
    checkinDate: "Дата заїзду",
    checkoutDate: "Дата виїзду",
    numberOfGuests: "Кількість гостей",
    selectGuests: "Оберіть кількість гостей",
    message: "Повідомлення",
    messagePlaceholder: "Будь ласка, розкажіть нам, як ми можемо вам допомогти...",
    newsletter: "Я хотів би отримувати оновлення та спеціальні пропозиції електронною поштою",
    
    // Booking
    bookYourStayTitle: "Забронювати проживання",
    apartmentInfo: "Інформація про апартаменти",
    stayDetails: "Деталі проживання",
    guestInformation: "Інформація про гостя",
    specialRequests: "Спеціальні запити",
    specialRequestsPlaceholder: "Будь-які спеціальні запити або вимоги...",
    bookingSummary: "Підсумок бронювання",
    nights: "Ночі",
    ratePerNight: "Ціна за ніч",
    subtotal: "Проміжний підсумок",
    taxesFees: "Податки та збори",
    total: "Загалом",
    confirmBooking: "Підтвердити бронювання",
    bookingConfirmed: "Бронювання підтверджено!",
    bookingConfirmedMessage: "Дякуємо за ваше бронювання. Ми незабаром зв'яжемося з вами з деталями підтвердження.",
    close: "Закрити",
    
    // Calendar
    selectDates: "Оберіть ваші дати",
    checkin: "Заїзд",
    checkout: "Виїзд",
    available: "Доступно",
    booked: "Заброньовано",
    selected: "Обрано",
    
    // Common
    loading: "Завантаження...",
    error: "Помилка",
    success: "Успіх",
    cancel: "Скасувати",
    confirm: "Підтвердити",
    required: "Обов'язково",
    optional: "Необов'язково",
    
    // Months
    january: "Січень",
    february: "Лютий",
    march: "Березень",
    april: "Квітень",
    may: "Травень",
    june: "Червень",
    july: "Липень",
    august: "Серпень",
    september: "Вересень",
    october: "Жовтень",
    november: "Листопад",
    december: "Грудень",
    
    // Days
    sunday: "Неділя",
    monday: "Понеділок",
    tuesday: "Вівторок",
    wednesday: "Середа",
    thursday: "Четвер",
    friday: "П'ятниця",
    saturday: "Субота",
    
    // Short days
    sun: "Нд",
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб"
  },
  
  ru: {
    // Navigation
    home: "Главная",
    apartments: "Апартаменты",
    amenities: "Удобства",
    location: "Расположение",
    contact: "Контакт",
    bookNow: "Забронировать",
    
    // Hero Section
    heroTitle: "Роскошные апартаменты у океана",
    heroSubtitle: "Испытайте идеальное сочетание комфорта, элегантности и захватывающих видов на океан в наших премиум апартаментах для отдыха.",
    exploreApartments: "Исследовать апартаменты",
    bookYourStay: "Забронировать проживание",
    
    // Features
    whyChoose: "Почему выбрать Apartments Delfin?",
    whyChooseSubtitle: "Откройте идеальную комбинацию роскоши, комфорта и удобства, которая делает наши апартаменты идеальным выбором для вашего отпуска.",
    beachfrontLocation: "Расположение на берегу",
    beachfrontDesc: "Всего в нескольких шагах от нетронутых песчаных пляжей и кристально чистых вод.",
    oceanViews: "Виды на океан",
    oceanViewsDesc: "Просыпайтесь с захватывающими панорамными видами на океан с вашего частного балкона.",
    swimmingPool: "Бассейн",
    swimmingPoolDesc: "Расслабьтесь в нашем бесконечном бассейне с видом на океан и обслуживанием у бассейна.",
    fullKitchen: "Полная кухня",
    fullKitchenDesc: "Современные, полностью оборудованные кухни с премиум техникой и обеденными зонами.",
    freeWifi: "Бесплатный WiFi",
    freeWifiDesc: "Оставайтесь на связи с бесплатным высокоскоростным беспроводным интернетом.",
    freeParking: "Бесплатная парковка",
    freeParkingDesc: "Безопасная, крытая парковка включена в каждое бронирование апартаментов.",
    
    // Apartments
    ourApartments: "Наша коллекция апартаментов",
    ourApartmentsSubtitle: "Выберите из нашей тщательно подобранной коллекции роскошных апартаментов, каждый разработан для обеспечения максимального комфорта и потрясающих видов на океан.",
    guests: "Гости",
    bed: "Кровать",
    beds: "Кровати",
    bath: "Ванная",
    baths: "Ванные",
    viewDetails: "Посмотреть детали",
    viewDetailsBook: "Посмотреть детали и забронировать",
    
    // Testimonials
    whatGuestsSay: "Что говорят наши гости",
    whatGuestsSaySubtitle: "Не нужно верить нам на слово. Вот что говорят наши довольные гости о своем опыте в Apartments Delfin.",
    
    // Footer
    quickLinks: "Быстрые ссылки",
    contactInfo: "Контактная информация",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия обслуживания",
    sitemap: "Карта сайта",
    
    // Contact
    contactUs: "Свяжитесь с нами",
    contactSubtitle: "Мы здесь, чтобы помочь сделать ваше пребывание идеальным. Свяжитесь с нами в любое время для бронирования, вопросов или помощи.",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",
    hours: "Часы работы",
    sendMessage: "Отправить сообщение",
    firstName: "Имя",
    lastName: "Фамилия",
    emailAddress: "Адрес электронной почты",
    phoneNumber: "Номер телефона",
    subject: "Тема",
    selectSubject: "Выберите тему",
    newReservation: "Новое бронирование",
    existingReservation: "Существующее бронирование",
    generalInquiry: "Общий запрос",
    amenitiesServices: "Удобства и услуги",
    feedback: "Отзыв",
    other: "Другое",
    checkinDate: "Дата заезда",
    checkoutDate: "Дата выезда",
    numberOfGuests: "Количество гостей",
    selectGuests: "Выберите количество гостей",
    message: "Сообщение",
    messagePlaceholder: "Пожалуйста, расскажите нам, как мы можем вам помочь...",
    newsletter: "Я хотел бы получать обновления и специальные предложения по электронной почте",
    
    // Booking
    bookYourStayTitle: "Забронировать проживание",
    apartmentInfo: "Информация об апартаментах",
    stayDetails: "Детали проживания",
    guestInformation: "Информация о госте",
    specialRequests: "Специальные запросы",
    specialRequestsPlaceholder: "Любые специальные запросы или требования...",
    bookingSummary: "Итоги бронирования",
    nights: "Ночи",
    ratePerNight: "Цена за ночь",
    subtotal: "Промежуточный итог",
    taxesFees: "Налоги и сборы",
    total: "Итого",
    confirmBooking: "Подтвердить бронирование",
    bookingConfirmed: "Бронирование подтверждено!",
    bookingConfirmedMessage: "Спасибо за ваше бронирование. Мы скоро свяжемся с вами с деталями подтверждения.",
    close: "Закрыть",
    
    // Calendar
    selectDates: "Выберите ваши даты",
    checkin: "Заезд",
    checkout: "Выезд",
    available: "Доступно",
    booked: "Забронировано",
    selected: "Выбрано",
    
    // Common
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успех",
    cancel: "Отменить",
    confirm: "Подтвердить",
    required: "Обязательно",
    optional: "Необязательно",
    
    // Months
    january: "Январь",
    february: "Февраль",
    march: "Март",
    april: "Апрель",
    may: "Май",
    june: "Июнь",
    july: "Июль",
    august: "Август",
    september: "Сентябрь",
    october: "Октябрь",
    november: "Ноябрь",
    december: "Декабрь",
    
    // Days
    sunday: "Воскресенье",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    
    // Short days
    sun: "Вс",
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб"
  }
};

export const supportedLanguages = [
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

export function getCurrentLanguage(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
}

export function setLanguage(lang: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  }
}

export function t(key: string): string {
  const currentLang = getCurrentLanguage();
  const translation = translations[currentLang];
  
  if (!translation) {
    return translations.en[key as keyof Translation] || key;
  }
  
  return translation[key as keyof Translation] || translations.en[key as keyof Translation] || key;
}

export function formatDate(date: Date, lang: string = getCurrentLanguage()): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const localeMap: Record<string, string> = {
    en: 'en-US',
    cs: 'cs-CZ',
    sk: 'sk-SK',
    pl: 'pl-PL',
    fr: 'fr-FR',
    it: 'it-IT',
    de: 'de-DE',
    uk: 'uk-UA',
    ru: 'ru-RU'
  };
  
  return date.toLocaleDateString(localeMap[lang] || 'en-US', options);
}