// Internationalization (i18n) system for Apartments Delfin
// Supports 10 languages with comprehensive translations

export interface Translation {
  // Navigation & Header
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
  
  // Features Section
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
  
  // Apartments Section
  ourApartments: string;
  ourApartmentsSubtitle: string;
  guests: string;
  guest: string;
  beds: string;
  bed: string;
  baths: string;
  bath: string;
  viewDetailsBook: string;
  
  // Calendar
  selectDates: string;
  checkin: string;
  checkout: string;
  available: string;
  booked: string;
  selected: string;
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
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  
  // Booking Modal
  bookYourStayTitle: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfGuests: string;
  selectGuests: string;
  guestInformation: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  specialRequests: string;
  optional: string;
  specialRequestsPlaceholder: string;
  bookingSummary: string;
  nights: string;
  ratePerNight: string;
  subtotal: string;
  taxesFees: string;
  total: string;
  confirmBooking: string;
  loading: string;
  bookingConfirmed: string;
  bookingConfirmedMessage: string;
  close: string;
  
  // Contact Page
  contactUs: string;
  contactUsSubtitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  sendMessage: string;
  sendMessageSubtitle: string;
  subject: string;
  selectSubject: string;
  newReservation: string;
  existingReservation: string;
  generalInquiry: string;
  amenitiesServices: string;
  feedback: string;
  other: string;
  message: string;
  messagePlaceholder: string;
  newsletter: string;
  sendMessageBtn: string;
  
  // Amenities Page
  worldClassAmenities: string;
  worldClassAmenitiesSubtitle: string;
  accommodationFeatures: string;
  recreationWellness: string;
  diningEntertainment: string;
  servicesConvenience: string;
  familyBusiness: string;
  premiumServices: string;
  premiumServicesSubtitle: string;
  experienceFacilities: string;
  experienceFacilitiesSubtitle: string;
  readyExperienceLuxury: string;
  readyExperienceLuxurySubtitle: string;
  viewApartments: string;
  
  // Location Page
  primeBeachfrontLocation: string;
  primeLocationSubtitle: string;
  perfectCoastalGetaway: string;
  perfectCoastalGetawayDesc1: string;
  perfectCoastalGetawayDesc2: string;
  toBeach: string;
  toMarina: string;
  toDowntown: string;
  toAirport: string;
  exploreArea: string;
  exploreAreaSubtitle: string;
  nearbyAttractions: string;
  nearbyAttractionsSubtitle: string;
  diningRestaurants: string;
  diningRestaurantsSubtitle: string;
  transportationAccess: string;
  transportationAccessSubtitle: string;
  experiencePerfectLocation: string;
  experiencePerfectLocationSubtitle: string;
  getDirections: string;
  
  // Dashboard
  myBookings: string;
  myBookingsSubtitle: string;
  totalBookings: string;
  confirmed: string;
  upcoming: string;
  totalSpent: string;
  yourBookings: string;
  newBooking: string;
  noBookingsFound: string;
  makeFirstBooking: string;
  bookingDetails: string;
  stayDetails: string;
  guestInfo: string;
  paymentSummary: string;
  totalAmount: string;
  status: string;
  paid: string;
  viewDetails: string;
  cancel: string;
  
  // Common
  learnMore: string;
  readMore: string;
  showMore: string;
  showLess: string;
  previous: string;
  next: string;
  save: string;
  edit: string;
  delete: string;
  confirm: string;
  yes: string;
  no: string;
  ok: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}

const translations: Record<string, Translation> = {
  // Croatian (hr)
  hr: {
    // Navigation & Header
    home: "Početna",
    apartments: "Apartmani",
    amenities: "Sadržaji",
    location: "Lokacija",
    contact: "Kontakt",
    bookNow: "Rezerviraj sada",
    
    // Hero Section
    heroTitle: "Luksuzni apartmani",
    heroSubtitle: "Doživite savršen spoj udobnosti, elegancije i prekrasnog pogleda na ocean u našim premium apartmanima za odmor.",
    exploreApartments: "Istražite apartmane",
    bookYourStay: "Rezervirajte boravak",
    
    // Features Section
    whyChoose: "Zašto odabrati Apartments Delfin?",
    whyChooseSubtitle: "Otkrijte savršenu kombinaciju luksuza, udobnosti i praktičnosti koja naše apartmane čini idealnim izborom za vaš odmor.",
    beachfrontLocation: "Lokacija na plaži",
    beachfrontDesc: "Direktan pristup prekrasnoj plaži s kristalno čistim morem",
    oceanViews: "Pogled na ocean",
    oceanViewsDesc: "Panoramski pogledi na ocean iz svih apartmana",
    swimmingPool: "Bazen",
    swimmingPoolDesc: "Infinity bazen s pogledom na ocean",
    fullKitchen: "Potpuno opremljena kuhinja",
    fullKitchenDesc: "Moderne kuhinje s premium aparatima",
    freeWifi: "Besplatni WiFi",
    freeWifiDesc: "Brzi bežični internet u cijelom objektu",
    freeParking: "Besplatno parkiranje",
    freeParkingDesc: "Sigurno natkriveno parkiranje za sve goste",
    
    // Apartments Section
    ourApartments: "Naša kolekcija apartmana",
    ourApartmentsSubtitle: "Odaberite iz naše pažljivo odabrane kolekcije luksuznih apartmana, svaki dizajniran za pružanje vrhunske udobnosti i prekrasnog pogleda na ocean.",
    guests: "Gosti",
    guest: "Gost",
    beds: "Kreveti",
    bed: "Krevet",
    baths: "Kupaonice",
    bath: "Kupaonica",
    viewDetailsBook: "Pogledaj detalje i rezerviraj",
    
    // Calendar
    selectDates: "Odaberite datume",
    checkin: "Dolazak",
    checkout: "Odlazak",
    available: "Dostupno",
    booked: "Rezervirano",
    selected: "Odabrano",
    january: "Siječanj",
    february: "Veljača",
    march: "Ožujak",
    april: "Travanj",
    may: "Svibanj",
    june: "Lipanj",
    july: "Srpanj",
    august: "Kolovoz",
    september: "Rujan",
    october: "Listopad",
    november: "Studeni",
    december: "Prosinac",
    sun: "Ned",
    mon: "Pon",
    tue: "Uto",
    wed: "Sri",
    thu: "Čet",
    fri: "Pet",
    sat: "Sub",
    
    // Booking Modal
    bookYourStayTitle: "Rezervirajte boravak",
    checkinDate: "Datum dolaska",
    checkoutDate: "Datum odlaska",
    numberOfGuests: "Broj gostiju",
    selectGuests: "Odaberite broj gostiju",
    guestInformation: "Informacije o gostu",
    firstName: "Ime",
    lastName: "Prezime",
    emailAddress: "Email adresa",
    phoneNumber: "Broj telefona",
    specialRequests: "Posebni zahtjevi",
    optional: "Neobavezno",
    specialRequestsPlaceholder: "Bilo koji posebni zahtjevi ili potrebe...",
    bookingSummary: "Sažetak rezervacije",
    nights: "Noći",
    ratePerNight: "Cijena po noći",
    subtotal: "Međuzbroj",
    taxesFees: "Porezi i naknade",
    total: "Ukupno",
    confirmBooking: "Potvrdi rezervaciju",
    loading: "Obrađujemo vašu rezervaciju...",
    bookingConfirmed: "Rezervacija potvrđena!",
    bookingConfirmedMessage: "Hvala vam na rezervaciji. Uskoro ćemo vas kontaktirati s detaljima potvrde.",
    close: "Zatvori",
    
    // Contact Page
    contactUs: "Kontaktirajte nas",
    contactUsSubtitle: "Tu smo da pomognemo učiniti vaš boravak savršenim. Kontaktirajte nas bilo kada za rezervacije, pitanja ili pomoć.",
    phone: "Telefon",
    email: "Email",
    address: "Adresa",
    hours: "Radno vrijeme",
    sendMessage: "Pošaljite nam poruku",
    sendMessageSubtitle: "Ispunite formu ispod i javit ćemo vam se što prije.",
    subject: "Predmet",
    selectSubject: "Odaberite predmet",
    newReservation: "Nova rezervacija",
    existingReservation: "Postojeća rezervacija",
    generalInquiry: "Opći upit",
    amenitiesServices: "Sadržaji i usluge",
    feedback: "Povratne informacije",
    other: "Ostalo",
    message: "Poruka",
    messagePlaceholder: "Molimo recite nam kako vam možemo pomoći...",
    newsletter: "Želim primati ažuriranja i posebne ponude putem emaila",
    sendMessageBtn: "Pošalji poruku",
    
    // Amenities Page
    worldClassAmenities: "Sadržaji svjetske klase",
    worldClassAmenitiesSubtitle: "Doživite luksuzni život s našom sveobuhvatnom kolekcijom premium sadržaja i personaliziranih usluga dizajniranih da vaš boravak učine nezaboravnim.",
    accommodationFeatures: "Značajke smještaja",
    recreationWellness: "Rekreacija i wellness",
    diningEntertainment: "Hrana i zabava",
    servicesConvenience: "Usluge i praktičnost",
    familyBusiness: "Obitelj i posao",
    premiumServices: "Premium usluge",
    premiumServicesSubtitle: "Podignite svoje iskustvo s našim ekskluzivnim premium uslugama, dizajniranima za goste koji traže vrhunac luksuza i praktičnosti.",
    experienceFacilities: "Doživite naše objekte",
    experienceFacilitiesSubtitle: "Idite na vizualnu turu naših prekrasnih sadržaja i objekata koji Apartments Delfin čine savršenim izborom za vaš odmor.",
    readyExperienceLuxury: "Spremni za doživljaj luksuza?",
    readyExperienceLuxurySubtitle: "Rezervirajte boravak danas i uživajte u pristupu svim našim sadržajima svjetske klase i premium uslugama.",
    viewApartments: "Pogledaj apartmane",
    
    // Location Page
    primeBeachfrontLocation: "Vrhunska lokacija na plaži",
    primeLocationSubtitle: "Savršeno pozicionirani na prekrasnoj obali s lakim pristupom plažama, restoranima, atrakcijama i svemu najboljem što područje nudi.",
    perfectCoastalGetaway: "Savršeni obalni bijeg",
    perfectCoastalGetawayDesc1: "Apartments Delfin strateški je smješten na netaknutoj obali, nudeći gostima savršen spoj mirnog života na plaži i praktičnog pristupa lokalnim atrakcijama, restoranima i zabavi.",
    perfectCoastalGetawayDesc2: "Naša vrhunska lokacija znači da ste samo nekoliko koraka od kristalno čistih voda, zlatnih pješčanih plaža i živahne obalne zajednice koja nudi nešto za svakoga.",
    toBeach: "do plaže",
    toMarina: "do marine",
    toDowntown: "do centra",
    toAirport: "do zračne luke",
    exploreArea: "Istražite područje",
    exploreAreaSubtitle: "Otkrijte obližnje atrakcije, restorane i zanimljive točke oko Apartments Delfin.",
    nearbyAttractions: "Obližnje atrakcije",
    nearbyAttractionsSubtitle: "Od netaknutih plaža do kulturnih atrakcija, otkrijte najbolje što naše područje nudi.",
    diningRestaurants: "Hrana i restorani",
    diningRestaurantsSubtitle: "Uživajte u iznimnoj kuhinji u obližnjim restoranima, od ležernog objedovanja na plaži do fine dining iskustava.",
    transportationAccess: "Prijevoz i pristup",
    transportationAccessSubtitle: "Lako dostupno različitim načinima prijevoza, čineći vaše putovanje do i od Apartments Delfin praktičnim i bez stresa.",
    experiencePerfectLocation: "Doživite našu savršenu lokaciju",
    experiencePerfectLocationSubtitle: "Rezervirajte boravak u Apartments Delfin i otkrijte zašto je naša lokacija na plaži savršena baza za vaš obalni odmor.",
    getDirections: "Dobijte upute",
    
    // Dashboard
    myBookings: "Moje rezervacije",
    myBookingsSubtitle: "Pregledajte i upravljajte rezervacijama apartmana",
    totalBookings: "Ukupno rezervacija",
    confirmed: "Potvrđeno",
    upcoming: "Nadolazeće",
    totalSpent: "Ukupno potrošeno",
    yourBookings: "Vaše rezervacije",
    newBooking: "Nova rezervacija",
    noBookingsFound: "Nema pronađenih rezervacija",
    makeFirstBooking: "Napravite prvu rezervaciju",
    bookingDetails: "Detalji rezervacije",
    stayDetails: "Detalji boravka",
    guestInfo: "Informacije o gostu",
    paymentSummary: "Sažetak plaćanja",
    totalAmount: "Ukupan iznos",
    status: "Status",
    paid: "Plaćeno",
    viewDetails: "Pogledaj detalje",
    cancel: "Otkaži",
    
    // Common
    learnMore: "Saznaj više",
    readMore: "Čitaj više",
    showMore: "Prikaži više",
    showLess: "Prikaži manje",
    previous: "Prethodno",
    next: "Sljedeće",
    save: "Spremi",
    edit: "Uredi",
    delete: "Obriši",
    confirm: "Potvrdi",
    yes: "Da",
    no: "Ne",
    ok: "U redu",
    error: "Greška",
    success: "Uspjeh",
    warning: "Upozorenje",
    info: "Informacija"
  },

  // English (en)
  en: {
    // Navigation & Header
    home: "Home",
    apartments: "Apartments",
    amenities: "Amenities",
    location: "Location",
    contact: "Contact",
    bookNow: "Book Now",
    
    // Hero Section
    heroTitle: "Luxury Apartments",
    heroSubtitle: "Experience the perfect blend of comfort, elegance, and breathtaking ocean views in our premium vacation apartments.",
    exploreApartments: "Explore Apartments",
    bookYourStay: "Book Your Stay",
    
    // Features Section
    whyChoose: "Why Choose Apartments Delfin?",
    whyChooseSubtitle: "Discover the perfect combination of luxury, comfort, and convenience that makes our apartments the ideal choice for your vacation.",
    beachfrontLocation: "Beachfront Location",
    beachfrontDesc: "Direct access to pristine beach with crystal clear waters",
    oceanViews: "Ocean Views",
    oceanViewsDesc: "Panoramic ocean views from every apartment",
    swimmingPool: "Swimming Pool",
    swimmingPoolDesc: "Infinity pool overlooking the ocean",
    fullKitchen: "Full Kitchen",
    fullKitchenDesc: "Modern kitchens with premium appliances",
    freeWifi: "Free WiFi",
    freeWifiDesc: "High-speed wireless internet throughout the property",
    freeParking: "Free Parking",
    freeParkingDesc: "Secure covered parking for all guests",
    
    // Apartments Section
    ourApartments: "Our Apartment Collection",
    ourApartmentsSubtitle: "Choose from our carefully curated selection of luxury apartments, each designed to provide the ultimate comfort and stunning ocean views.",
    guests: "Guests",
    guest: "Guest",
    beds: "Beds",
    bed: "Bed",
    baths: "Baths",
    bath: "Bath",
    viewDetailsBook: "View Details & Book",
    
    // Calendar
    selectDates: "Select Your Dates",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Available",
    booked: "Booked",
    selected: "Selected",
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
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    
    // Booking Modal
    bookYourStayTitle: "Book Your Stay",
    checkinDate: "Check-in Date",
    checkoutDate: "Check-out Date",
    numberOfGuests: "Number of Guests",
    selectGuests: "Select number of guests",
    guestInformation: "Guest Information",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    specialRequests: "Special Requests",
    optional: "Optional",
    specialRequestsPlaceholder: "Any special requests or requirements...",
    bookingSummary: "Booking Summary",
    nights: "Nights",
    ratePerNight: "Rate per night",
    subtotal: "Subtotal",
    taxesFees: "Taxes & Fees",
    total: "Total",
    confirmBooking: "Confirm Booking",
    loading: "Processing your booking...",
    bookingConfirmed: "Booking Confirmed!",
    bookingConfirmedMessage: "Thank you for your reservation. We'll contact you shortly with confirmation details.",
    close: "Close",
    
    // Contact Page
    contactUs: "Contact Us",
    contactUsSubtitle: "We're here to help make your stay perfect. Reach out to us anytime for reservations, questions, or assistance.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Hours",
    sendMessage: "Send us a Message",
    sendMessageSubtitle: "Fill out the form below and we'll get back to you as soon as possible.",
    subject: "Subject",
    selectSubject: "Select a subject",
    newReservation: "New Reservation",
    existingReservation: "Existing Reservation",
    generalInquiry: "General Inquiry",
    amenitiesServices: "Amenities & Services",
    feedback: "Feedback",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Please tell us how we can help you...",
    newsletter: "I would like to receive updates and special offers via email",
    sendMessageBtn: "Send Message",
    
    // Amenities Page
    worldClassAmenities: "World-Class Amenities",
    worldClassAmenitiesSubtitle: "Experience luxury living with our comprehensive collection of premium amenities and personalized services designed to make your stay unforgettable.",
    accommodationFeatures: "Accommodation Features",
    recreationWellness: "Recreation & Wellness",
    diningEntertainment: "Dining & Entertainment",
    servicesConvenience: "Services & Convenience",
    familyBusiness: "Family & Business",
    premiumServices: "Premium Services",
    premiumServicesSubtitle: "Elevate your experience with our exclusive premium services, designed for guests seeking the ultimate in luxury and convenience.",
    experienceFacilities: "Experience Our Facilities",
    experienceFacilitiesSubtitle: "Take a visual tour of our stunning amenities and facilities that make Apartments Delfin the perfect choice for your vacation.",
    readyExperienceLuxury: "Ready to Experience Luxury?",
    readyExperienceLuxurySubtitle: "Book your stay today and enjoy access to all our world-class amenities and premium services.",
    viewApartments: "View Apartments",
    
    // Location Page
    primeBeachfrontLocation: "Prime Beachfront Location",
    primeLocationSubtitle: "Perfectly positioned on the stunning coastline with easy access to beaches, dining, attractions, and all the best the area has to offer.",
    perfectCoastalGetaway: "The Perfect Coastal Getaway",
    perfectCoastalGetawayDesc1: "Apartments Delfin is strategically located on the pristine coastline, offering guests the perfect blend of tranquil beachfront living and convenient access to local attractions, dining, and entertainment.",
    perfectCoastalGetawayDesc2: "Our prime location means you're just steps away from crystal-clear waters, golden sandy beaches, and a vibrant coastal community that offers something for everyone.",
    toBeach: "to Beach",
    toMarina: "to Marina",
    toDowntown: "to Downtown",
    toAirport: "to Airport",
    exploreArea: "Explore the Area",
    exploreAreaSubtitle: "Discover nearby attractions, restaurants, and points of interest around Apartments Delfin.",
    nearbyAttractions: "Nearby Attractions",
    nearbyAttractionsSubtitle: "From pristine beaches to cultural attractions, discover the best of what our area has to offer.",
    diningRestaurants: "Dining & Restaurants",
    diningRestaurantsSubtitle: "Savor exceptional cuisine at nearby restaurants, from casual beachside dining to fine dining experiences.",
    transportationAccess: "Transportation & Access",
    transportationAccessSubtitle: "Easily accessible by various transportation methods, making your journey to and from Apartments Delfin convenient and stress-free.",
    experiencePerfectLocation: "Experience Our Perfect Location",
    experiencePerfectLocationSubtitle: "Book your stay at Apartments Delfin and discover why our beachfront location is the perfect base for your coastal vacation.",
    getDirections: "Get Directions",
    
    // Dashboard
    myBookings: "My Bookings",
    myBookingsSubtitle: "View and manage your apartment reservations",
    totalBookings: "Total Bookings",
    confirmed: "Confirmed",
    upcoming: "Upcoming",
    totalSpent: "Total Spent",
    yourBookings: "Your Bookings",
    newBooking: "New Booking",
    noBookingsFound: "No bookings found",
    makeFirstBooking: "Make Your First Booking",
    bookingDetails: "Booking Details",
    stayDetails: "Stay Details",
    guestInfo: "Guest Information",
    paymentSummary: "Payment Summary",
    totalAmount: "Total Amount",
    status: "Status",
    paid: "Paid",
    viewDetails: "View Details",
    cancel: "Cancel",
    
    // Common
    learnMore: "Learn More",
    readMore: "Read More",
    showMore: "Show More",
    showLess: "Show Less",
    previous: "Previous",
    next: "Next",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    ok: "OK",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Info"
  },

  // Czech (cs)
  cs: {
    // Navigation & Header
    home: "Domů",
    apartments: "Apartmány",
    amenities: "Vybavení",
    location: "Poloha",
    contact: "Kontakt",
    bookNow: "Rezervovat nyní",
    
    // Hero Section
    heroTitle: "Luxusní apartmány",
    heroSubtitle: "Zažijte dokonalou kombinaci pohodlí, elegance a úchvatného výhledu na oceán v našich prémiových prázdninových apartmánech.",
    exploreApartments: "Prozkoumat apartmány",
    bookYourStay: "Rezervovat pobyt",
    
    // Features Section
    whyChoose: "Proč si vybrat Apartments Delfin?",
    whyChooseSubtitle: "Objevte dokonalou kombinaci luxusu, pohodlí a praktičnosti, která z našich apartmánů činí ideální volbu pro vaši dovolenou.",
    beachfrontLocation: "Poloha na pláži",
    beachfrontDesc: "Přímý přístup k nedotčené pláži s křišťálově čistou vodou",
    oceanViews: "Výhled na oceán",
    oceanViewsDesc: "Panoramatický výhled na oceán z každého apartmánu",
    swimmingPool: "Bazén",
    swimmingPoolDesc: "Nekonečný bazén s výhledem na oceán",
    fullKitchen: "Plně vybavená kuchyň",
    fullKitchenDesc: "Moderní kuchyně s prémiovými spotřebiči",
    freeWifi: "Bezplatné WiFi",
    freeWifiDesc: "Vysokorychlostní bezdrátový internet v celém objektu",
    freeParking: "Bezplatné parkování",
    freeParkingDesc: "Zabezpečené kryté parkování pro všechny hosty",
    
    // Apartments Section
    ourApartments: "Naše kolekce apartmánů",
    ourApartmentsSubtitle: "Vyberte si z našeho pečlivě vybraného výběru luxusních apartmánů, každý navržený tak, aby poskytoval maximální pohodlí a úžasný výhled na oceán.",
    guests: "Hosté",
    guest: "Host",
    beds: "Postele",
    bed: "Postel",
    baths: "Koupelny",
    bath: "Koupelna",
    viewDetailsBook: "Zobrazit detaily a rezervovat",
    
    // Calendar
    selectDates: "Vyberte své datumy",
    checkin: "Příjezd",
    checkout: "Odjezd",
    available: "Dostupné",
    booked: "Rezervováno",
    selected: "Vybráno",
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
    sun: "Ne",
    mon: "Po",
    tue: "Út",
    wed: "St",
    thu: "Čt",
    fri: "Pá",
    sat: "So",
    
    // Booking Modal
    bookYourStayTitle: "Rezervovat pobyt",
    checkinDate: "Datum příjezdu",
    checkoutDate: "Datum odjezdu",
    numberOfGuests: "Počet hostů",
    selectGuests: "Vyberte počet hostů",
    guestInformation: "Informace o hostovi",
    firstName: "Jméno",
    lastName: "Příjmení",
    emailAddress: "E-mailová adresa",
    phoneNumber: "Telefonní číslo",
    specialRequests: "Speciální požadavky",
    optional: "Volitelné",
    specialRequestsPlaceholder: "Jakékoli speciální požadavky nebo potřeby...",
    bookingSummary: "Shrnutí rezervace",
    nights: "Noci",
    ratePerNight: "Cena za noc",
    subtotal: "Mezisoučet",
    taxesFees: "Daně a poplatky",
    total: "Celkem",
    confirmBooking: "Potvrdit rezervaci",
    loading: "Zpracováváme vaši rezervaci...",
    bookingConfirmed: "Rezervace potvrzena!",
    bookingConfirmedMessage: "Děkujeme za vaši rezervaci. Brzy vás budeme kontaktovat s potvrzovacími údaji.",
    close: "Zavřít",
    
    // Contact Page
    contactUs: "Kontaktujte nás",
    contactUsSubtitle: "Jsme tu, abychom pomohli učinit váš pobyt dokonalým. Kontaktujte nás kdykoli pro rezervace, dotazy nebo pomoc.",
    phone: "Telefon",
    email: "E-mail",
    address: "Adresa",
    hours: "Otevírací doba",
    sendMessage: "Pošlete nám zprávu",
    sendMessageSubtitle: "Vyplňte formulář níže a my se vám ozveme co nejdříve.",
    subject: "Předmět",
    selectSubject: "Vyberte předmět",
    newReservation: "Nová rezervace",
    existingReservation: "Stávající rezervace",
    generalInquiry: "Obecný dotaz",
    amenitiesServices: "Vybavení a služby",
    feedback: "Zpětná vazba",
    other: "Jiné",
    message: "Zpráva",
    messagePlaceholder: "Prosím, řekněte nám, jak vám můžeme pomoci...",
    newsletter: "Chtěl bych dostávat aktualizace a speciální nabídky e-mailem",
    sendMessageBtn: "Odeslat zprávu",
    
    // Amenities Page
    worldClassAmenities: "Vybavení světové třídy",
    worldClassAmenitiesSubtitle: "Zažijte luxusní bydlení s naší komplexní kolekcí prémiového vybavení a personalizovaných služeb navržených tak, aby váš pobyt byl nezapomenutelný.",
    accommodationFeatures: "Vlastnosti ubytování",
    recreationWellness: "Rekreace a wellness",
    diningEntertainment: "Stravování a zábava",
    servicesConvenience: "Služby a pohodlí",
    familyBusiness: "Rodina a podnikání",
    premiumServices: "Prémiové služby",
    premiumServicesSubtitle: "Povyšte své zážitky s našimi exkluzivními prémiovými službami, navrženými pro hosty hledající vrchol luxusu a pohodlí.",
    experienceFacilities: "Zažijte naše zařízení",
    experienceFacilitiesSubtitle: "Podnikněte vizuální prohlídku našeho úžasného vybavení a zařízení, které z Apartments Delfin činí dokonalou volbu pro vaši dovolenou.",
    readyExperienceLuxury: "Připraveni zažít luxus?",
    readyExperienceLuxurySubtitle: "Rezervujte si pobyt ještě dnes a užijte si přístup ke všemu našemu vybavení světové třídy a prémiovým službám.",
    viewApartments: "Zobrazit apartmány",
    
    // Location Page
    primeBeachfrontLocation: "Prvotřídní poloha na pláži",
    primeLocationSubtitle: "Dokonale umístěné na úžasném pobřeží se snadným přístupem k plážím, restauracím, atrakcím a všemu nejlepšímu, co oblast nabízí.",
    perfectCoastalGetaway: "Dokonalý pobřežní únik",
    perfectCoastalGetawayDesc1: "Apartments Delfin je strategicky umístěn na nedotčeném pobřeží a nabízí hostům dokonalou kombinaci klidného života na pláži a pohodlného přístupu k místním atrakcím, restauracím a zábavě.",
    perfectCoastalGetawayDesc2: "Naše prvotřídní poloha znamená, že jste jen pár kroků od křišťálově čistých vod, zlatých písečných pláží a živé pobřežní komunity, která nabízí něco pro každého.",
    toBeach: "na pláž",
    toMarina: "do přístavu",
    toDowntown: "do centra",
    toAirport: "na letiště",
    exploreArea: "Prozkoumejte oblast",
    exploreAreaSubtitle: "Objevte blízké atrakce, restaurace a zajímavá místa kolem Apartments Delfin.",
    nearbyAttractions: "Blízké atrakce",
    nearbyAttractionsSubtitle: "Od nedotčených pláží po kulturní atrakce, objevte to nejlepší, co naše oblast nabízí.",
    diningRestaurants: "Stravování a restaurace",
    diningRestaurantsSubtitle: "Vychutnejte si výjimečnou kuchyni v blízkých restauracích, od neformálního stravování na pláži po fine dining zážitky.",
    transportationAccess: "Doprava a přístup",
    transportationAccessSubtitle: "Snadno dostupné různými dopravními prostředky, díky čemuž je vaše cesta do a z Apartments Delfin pohodlná a bez stresu.",
    experiencePerfectLocation: "Zažijte naši dokonalou polohu",
    experiencePerfectLocationSubtitle: "Rezervujte si pobyt v Apartments Delfin a objevte, proč je naše poloha na pláži dokonalou základnou pro vaši pobřežní dovolenou.",
    getDirections: "Získat směry",
    
    // Dashboard
    myBookings: "Moje rezervace",
    myBookingsSubtitle: "Zobrazit a spravovat rezervace apartmánů",
    totalBookings: "Celkem rezervací",
    confirmed: "Potvrzeno",
    upcoming: "Nadcházející",
    totalSpent: "Celkem utraceno",
    yourBookings: "Vaše rezervace",
    newBooking: "Nová rezervace",
    noBookingsFound: "Žádné rezervace nenalezeny",
    makeFirstBooking: "Proveďte svou první rezervaci",
    bookingDetails: "Detaily rezervace",
    stayDetails: "Detaily pobytu",
    guestInfo: "Informace o hostovi",
    paymentSummary: "Shrnutí platby",
    totalAmount: "Celková částka",
    status: "Stav",
    paid: "Zaplaceno",
    viewDetails: "Zobrazit detaily",
    cancel: "Zrušit",
    
    // Common
    learnMore: "Dozvědět se více",
    readMore: "Číst více",
    showMore: "Zobrazit více",
    showLess: "Zobrazit méně",
    previous: "Předchozí",
    next: "Další",
    save: "Uložit",
    edit: "Upravit",
    delete: "Smazat",
    confirm: "Potvrdit",
    yes: "Ano",
    no: "Ne",
    ok: "OK",
    error: "Chyba",
    success: "Úspěch",
    warning: "Varování",
    info: "Informace"
  },

  // Slovak (sk)
  sk: {
    // Navigation & Header
    home: "Domov",
    apartments: "Apartmány",
    amenities: "Vybavenie",
    location: "Poloha",
    contact: "Kontakt",
    bookNow: "Rezervovať teraz",
    
    // Hero Section
    heroTitle: "Luxusné apartmány",
    heroSubtitle: "Zažite dokonalú kombináciu pohodlia, elegancie a úchvatného výhľadu na oceán v našich prémiových prázdninových apartmánoch.",
    exploreApartments: "Preskúmať apartmány",
    bookYourStay: "Rezervovať pobyt",
    
    // Features Section
    whyChoose: "Prečo si vybrať Apartments Delfin?",
    whyChooseSubtitle: "Objavte dokonalú kombináciu luxusu, pohodlia a praktičnosti, ktorá z našich apartmánov robí ideálnu voľbu pre vašu dovolenku.",
    beachfrontLocation: "Poloha na pláži",
    beachfrontDesc: "Priamy prístup k nedotknutej pláži s krištáľovo čistou vodou",
    oceanViews: "Výhľad na oceán",
    oceanViewsDesc: "Panoramatický výhľad na oceán z každého apartmánu",
    swimmingPool: "Bazén",
    swimmingPoolDesc: "Nekonečný bazén s výhľadom na oceán",
    fullKitchen: "Plne vybavená kuchyňa",
    fullKitchenDesc: "Moderné kuchyne s prémiovými spotrebičmi",
    freeWifi: "Bezplatné WiFi",
    freeWifiDesc: "Vysokorýchlostný bezdrôtový internet v celom objekte",
    freeParking: "Bezplatné parkovanie",
    freeParkingDesc: "Zabezpečené kryté parkovanie pre všetkých hostí",
    
    // Apartments Section
    ourApartments: "Naša kolekcia apartmánov",
    ourApartmentsSubtitle: "Vyberte si z nášho starostlivo vybraného výberu luxusných apartmánov, každý navrhnutý tak, aby poskytoval maximálne pohodlie a úžasný výhľad na oceán.",
    guests: "Hostia",
    guest: "Hosť",
    beds: "Postele",
    bed: "Posteľ",
    baths: "Kúpeľne",
    bath: "Kúpeľňa",
    viewDetailsBook: "Zobraziť detaily a rezervovať",
    
    // Calendar
    selectDates: "Vyberte svoje dátumy",
    checkin: "Príchod",
    checkout: "Odchod",
    available: "Dostupné",
    booked: "Rezervované",
    selected: "Vybrané",
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
    sun: "Ne",
    mon: "Po",
    tue: "Ut",
    wed: "St",
    thu: "Št",
    fri: "Pi",
    sat: "So",
    
    // Booking Modal
    bookYourStayTitle: "Rezervovať pobyt",
    checkinDate: "Dátum príchodu",
    checkoutDate: "Dátum odchodu",
    numberOfGuests: "Počet hostí",
    selectGuests: "Vyberte počet hostí",
    guestInformation: "Informácie o hosťovi",
    firstName: "Meno",
    lastName: "Priezvisko",
    emailAddress: "E-mailová adresa",
    phoneNumber: "Telefónne číslo",
    specialRequests: "Špeciálne požiadavky",
    optional: "Voliteľné",
    specialRequestsPlaceholder: "Akékoľvek špeciálne požiadavky alebo potreby...",
    bookingSummary: "Zhrnutie rezervácie",
    nights: "Noci",
    ratePerNight: "Cena za noc",
    subtotal: "Medzisúčet",
    taxesFees: "Dane a poplatky",
    total: "Celkom",
    confirmBooking: "Potvrdiť rezerváciu",
    loading: "Spracovávame vašu rezerváciu...",
    bookingConfirmed: "Rezervácia potvrdená!",
    bookingConfirmedMessage: "Ďakujeme za vašu rezerváciu. Čoskoro vás budeme kontaktovať s potvrdzovacími údajmi.",
    close: "Zavrieť",
    
    // Contact Page
    contactUs: "Kontaktujte nás",
    contactUsSubtitle: "Sme tu, aby sme pomohli urobiť váš pobyt dokonalým. Kontaktujte nás kedykoľvek pre rezervácie, otázky alebo pomoc.",
    phone: "Telefón",
    email: "E-mail",
    address: "Adresa",
    hours: "Otváracie hodiny",
    sendMessage: "Pošlite nám správu",
    sendMessageSubtitle: "Vyplňte formulár nižšie a my sa vám ozveme čo najskôr.",
    subject: "Predmet",
    selectSubject: "Vyberte predmet",
    newReservation: "Nová rezervácia",
    existingReservation: "Existujúca rezervácia",
    generalInquiry: "Všeobecný dotaz",
    amenitiesServices: "Vybavenie a služby",
    feedback: "Spätná väzba",
    other: "Iné",
    message: "Správa",
    messagePlaceholder: "Prosím, povedzte nám, ako vám môžeme pomôcť...",
    newsletter: "Chcel by som dostávať aktualizácie a špeciálne ponuky e-mailom",
    sendMessageBtn: "Odoslať správu",
    
    // Amenities Page
    worldClassAmenities: "Vybavenie svetovej triedy",
    worldClassAmenitiesSubtitle: "Zažite luxusné bývanie s našou komplexnou kolekciou prémiového vybavenia a personalizovaných služieb navrhnutých tak, aby váš pobyt bol nezabudnuteľný.",
    accommodationFeatures: "Vlastnosti ubytovania",
    recreationWellness: "Rekreácia a wellness",
    diningEntertainment: "Stravovanie a zábava",
    servicesConvenience: "Služby a pohodlie",
    familyBusiness: "Rodina a podnikanie",
    premiumServices: "Prémiové služby",
    premiumServicesSubtitle: "Povýšte svoje zážitky s našimi exkluzívnymi prémiovými službami, navrhnutými pre hostí hľadajúcich vrchol luxusu a pohodlia.",
    experienceFacilities: "Zažite naše zariadenia",
    experienceFacilitiesSubtitle: "Podniknite vizuálnu prehliadku nášho úžasného vybavenia a zariadení, ktoré z Apartments Delfin robia dokonalú voľbu pre vašu dovolenku.",
    readyExperienceLuxury: "Pripravení zažiť luxus?",
    readyExperienceLuxurySubtitle: "Rezervujte si pobyt ešte dnes a užite si prístup ku všetkému nášmu vybaveniu svetovej triedy a prémiovým službám.",
    viewApartments: "Zobraziť apartmány",
    
    // Location Page
    primeBeachfrontLocation: "Prvotridná poloha na pláži",
    primeLocationSubtitle: "Dokonale umiestnené na úžasnom pobreží s ľahkým prístupom k plážam, reštauráciám, atrakciám a všetkému najlepšiemu, čo oblasť ponúka.",
    perfectCoastalGetaway: "Dokonalý pobrežný únik",
    perfectCoastalGetawayDesc1: "Apartments Delfin je strategicky umiestnený na nedotknutom pobreží a ponúka hosťom dokonalú kombináciu pokojného života na pláži a pohodlného prístupu k miestnym atrakciám, reštauráciám a zábave.",
    perfectCoastalGetawayDesc2: "Naša prvotridná poloha znamená, že ste len pár krokov od krištáľovo čistých vôd, zlatých piesočných pláží a živej pobrežnej komunity, ktorá ponúka niečo pre každého.",
    toBeach: "na pláž",
    toMarina: "do prístavu",
    toDowntown: "do centra",
    toAirport: "na letisko",
    exploreArea: "Preskúmajte oblasť",
    exploreAreaSubtitle: "Objavte blízke atrakcie, reštaurácie a zaujímavé miesta okolo Apartments Delfin.",
    nearbyAttractions: "Blízke atrakcie",
    nearbyAttractionsSubtitle: "Od nedotknutých pláží po kultúrne atrakcie, objavte to najlepšie, čo naša oblasť ponúka.",
    diningRestaurants: "Stravovanie a reštaurácie",
    diningRestaurantsSubtitle: "Vychutnajte si výnimočnú kuchyňu v blízkych reštauráciách, od neformálneho stravovania na pláži po fine dining zážitky.",
    transportationAccess: "Doprava a prístup",
    transportationAccessSubtitle: "Ľahko dostupné rôznymi dopravnými prostriedkami, vďaka čomu je vaša cesta do a z Apartments Delfin pohodlná a bez stresu.",
    experiencePerfectLocation: "Zažite našu dokonalú polohu",
    experiencePerfectLocationSubtitle: "Rezervujte si pobyt v Apartments Delfin a objavte, prečo je naša poloha na pláži dokonalou základňou pre vašu pobrežnú dovolenku.",
    getDirections: "Získať smery",
    
    // Dashboard
    myBookings: "Moje rezervácie",
    myBookingsSubtitle: "Zobraziť a spravovať rezervácie apartmánov",
    totalBookings: "Celkom rezervácií",
    confirmed: "Potvrdené",
    upcoming: "Nadchádzajúce",
    totalSpent: "Celkom minúť",
    yourBookings: "Vaše rezervácie",
    newBooking: "Nová rezervácia",
    noBookingsFound: "Žiadne rezervácie nenájdené",
    makeFirstBooking: "Urobte svoju prvú rezerváciu",
    bookingDetails: "Detaily rezervácie",
    stayDetails: "Detaily pobytu",
    guestInfo: "Informácie o hosťovi",
    paymentSummary: "Zhrnutie platby",
    totalAmount: "Celková suma",
    status: "Stav",
    paid: "Zaplatené",
    viewDetails: "Zobraziť detaily",
    cancel: "Zrušiť",
    
    // Common
    learnMore: "Dozvedieť sa viac",
    readMore: "Čítať viac",
    showMore: "Zobraziť viac",
    showLess: "Zobraziť menej",
    previous: "Predchádzajúce",
    next: "Ďalšie",
    save: "Uložiť",
    edit: "Upraviť",
    delete: "Vymazať",
    confirm: "Potvrdiť",
    yes: "Áno",
    no: "Nie",
    ok: "OK",
    error: "Chyba",
    success: "Úspech",
    warning: "Varovanie",
    info: "Informácie"
  },

  // Polish (pl)
  pl: {
    // Navigation & Header
    home: "Strona główna",
    apartments: "Apartamenty",
    amenities: "Udogodnienia",
    location: "Lokalizacja",
    contact: "Kontakt",
    bookNow: "Zarezerwuj teraz",
    
    // Hero Section
    heroTitle: "Luksusowe apartamenty",
    heroSubtitle: "Doświadcz idealnego połączenia komfortu, elegancji i zapierających dech w piersiach widoków na ocean w naszych premium apartamentach wakacyjnych.",
    exploreApartments: "Odkryj apartamenty",
    bookYourStay: "Zarezerwuj pobyt",
    
    // Features Section
    whyChoose: "Dlaczego wybrać Apartments Delfin?",
    whyChooseSubtitle: "Odkryj idealną kombinację luksusu, komfortu i wygody, która czyni nasze apartamenty idealnym wyborem na wakacje.",
    beachfrontLocation: "Lokalizacja przy plaży",
    beachfrontDesc: "Bezpośredni dostęp do dziewiczej plaży z krystalicznie czystą wodą",
    oceanViews: "Widoki na ocean",
    oceanViewsDesc: "Panoramiczne widoki na ocean z każdego apartamentu",
    swimmingPool: "Basen",
    swimmingPoolDesc: "Basen bez krawędzi z widokiem na ocean",
    fullKitchen: "Pełna kuchnia",
    fullKitchenDesc: "Nowoczesne kuchnie z premium urządzeniami",
    freeWifi: "Bezpłatne WiFi",
    freeWifiDesc: "Szybki internet bezprzewodowy w całym obiekcie",
    freeParking: "Bezpłatny parking",
    freeParkingDesc: "Bezpieczny zadaszony parking dla wszystkich gości",
    
    // Apartments Section
    ourApartments: "Nasza kolekcja apartamentów",
    ourApartmentsSubtitle: "Wybierz z naszej starannie wyselekcjonowanej kolekcji luksusowych apartamentów, każdy zaprojektowany tak, aby zapewnić najwyższy komfort i wspaniałe widoki na ocean.",
    guests: "Goście",
    guest: "Gość",
    beds: "Łóżka",
    bed: "Łóżko",
    baths: "Łazienki",
    bath: "Łazienka",
    viewDetailsBook: "Zobacz szczegóły i zarezerwuj",
    
    // Calendar
    selectDates: "Wybierz swoje daty",
    checkin: "Zameldowanie",
    checkout: "Wymeldowanie",
    available: "Dostępne",
    booked: "Zarezerwowane",
    selected: "Wybrane",
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
    sun: "Nd",
    mon: "Pn",
    tue: "Wt",
    wed: "Śr",
    thu: "Cz",
    fri: "Pt",
    sat: "Sb",
    
    // Booking Modal
    bookYourStayTitle: "Zarezerwuj pobyt",
    checkinDate: "Data zameldowania",
    checkoutDate: "Data wymeldowania",
    numberOfGuests: "Liczba gości",
    selectGuests: "Wybierz liczbę gości",
    guestInformation: "Informacje o gościu",
    firstName: "Imię",
    lastName: "Nazwisko",
    emailAddress: "Adres e-mail",
    phoneNumber: "Numer telefonu",
    specialRequests: "Specjalne życzenia",
    optional: "Opcjonalne",
    specialRequestsPlaceholder: "Wszelkie specjalne życzenia lub wymagania...",
    bookingSummary: "Podsumowanie rezerwacji",
    nights: "Noce",
    ratePerNight: "Cena za noc",
    subtotal: "Suma częściowa",
    taxesFees: "Podatki i opłaty",
    total: "Razem",
    confirmBooking: "Potwierdź rezerwację",
    loading: "Przetwarzamy twoją rezerwację...",
    bookingConfirmed: "Rezerwacja potwierdzona!",
    bookingConfirmedMessage: "Dziękujemy za rezerwację. Wkrótce skontaktujemy się z Tobą z szczegółami potwierdzenia.",
    close: "Zamknij",
    
    // Contact Page
    contactUs: "Skontaktuj się z nami",
    contactUsSubtitle: "Jesteśmy tutaj, aby pomóc uczynić twój pobyt idealnym. Skontaktuj się z nami w dowolnym momencie w sprawie rezerwacji, pytań lub pomocy.",
    phone: "Telefon",
    email: "E-mail",
    address: "Adres",
    hours: "Godziny",
    sendMessage: "Wyślij nam wiadomość",
    sendMessageSubtitle: "Wypełnij formularz poniżej, a my skontaktujemy się z Tobą tak szybko, jak to możliwe.",
    subject: "Temat",
    selectSubject: "Wybierz temat",
    newReservation: "Nowa rezerwacja",
    existingReservation: "Istniejąca rezerwacja",
    generalInquiry: "Ogólne zapytanie",
    amenitiesServices: "Udogodnienia i usługi",
    feedback: "Opinie",
    other: "Inne",
    message: "Wiadomość",
    messagePlaceholder: "Proszę powiedz nam, jak możemy Ci pomóc...",
    newsletter: "Chciałbym otrzymywać aktualizacje i specjalne oferty przez e-mail",
    sendMessageBtn: "Wyślij wiadomość",
    
    // Amenities Page
    worldClassAmenities: "Udogodnienia światowej klasy",
    worldClassAmenitiesSubtitle: "Doświadcz luksusowego życia dzięki naszej kompleksowej kolekcji premium udogodnień i spersonalizowanych usług zaprojektowanych tak, aby twój pobyt był niezapomniany.",
    accommodationFeatures: "Cechy zakwaterowania",
    recreationWellness: "Rekreacja i wellness",
    diningEntertainment: "Jedzenie i rozrywka",
    servicesConvenience: "Usługi i wygoda",
    familyBusiness: "Rodzina i biznes",
    premiumServices: "Usługi premium",
    premiumServicesSubtitle: "Podnieś swoje doświadczenie dzięki naszym ekskluzywnym usługom premium, zaprojektowanym dla gości poszukujących szczytu luksusu i wygody.",
    experienceFacilities: "Doświadcz naszych obiektów",
    experienceFacilitiesSubtitle: "Wybierz się na wizualną wycieczkę po naszych wspaniałych udogodnieniach i obiektach, które czynią Apartments Delfin idealnym wyborem na wakacje.",
    readyExperienceLuxury: "Gotowy na doświadczenie luksusu?",
    readyExperienceLuxurySubtitle: "Zarezerwuj pobyt już dziś i ciesz się dostępem do wszystkich naszych udogodnień światowej klasy i usług premium.",
    viewApartments: "Zobacz apartamenty",
    
    // Location Page
    primeBeachfrontLocation: "Pierwszorzędna lokalizacja przy plaży",
    primeLocationSubtitle: "Idealnie położone na wspaniałym wybrzeżu z łatwym dostępem do plaż, restauracji, atrakcji i wszystkiego, co najlepsze w okolicy.",
    perfectCoastalGetaway: "Idealny nadmorski wypoczynek",
    perfectCoastalGetawayDesc1: "Apartments Delfin jest strategicznie położony na dziewiczym wybrzeżu, oferując gościom idealne połączenie spokojnego życia przy plaży i wygodnego dostępu do lokalnych atrakcji, restauracji i rozrywki.",
    perfectCoastalGetawayDesc2: "Nasza pierwszorzędna lokalizacja oznacza, że jesteś zaledwie kilka kroków od krystalicznie czystych wód, złotych piaszczystych plaż i tętniącej życiem nadmorskiej społeczności, która oferuje coś dla każdego.",
    toBeach: "do plaży",
    toMarina: "do mariny",
    toDowntown: "do centrum",
    toAirport: "na lotnisko",
    exploreArea: "Odkryj okolicę",
    exploreAreaSubtitle: "Odkryj pobliskie atrakcje, restauracje i punkty zainteresowania wokół Apartments Delfin.",
    nearbyAttractions: "Pobliskie atrakcje",
    nearbyAttractionsSubtitle: "Od dziewiczych plaż po atrakcje kulturalne, odkryj to, co najlepsze w naszej okolicy.",
    diningRestaurants: "Jedzenie i restauracje",
    diningRestaurantsSubtitle: "Delektuj się wyjątkową kuchnią w pobliskich restauracjach, od swobodnych posiłków na plaży po wykwintne doznania kulinarne.",
    transportationAccess: "Transport i dostęp",
    transportationAccessSubtitle: "Łatwo dostępne różnymi środkami transportu, dzięki czemu podróż do i z Apartments Delfin jest wygodna i bezstresowa.",
    experiencePerfectLocation: "Doświadcz naszej idealnej lokalizacji",
    experiencePerfectLocationSubtitle: "Zarezerwuj pobyt w Apartments Delfin i odkryj, dlaczego nasza lokalizacja przy plaży jest idealną bazą na nadmorskie wakacje.",
    getDirections: "Uzyskaj wskazówki",
    
    // Dashboard
    myBookings: "Moje rezerwacje",
    myBookingsSubtitle: "Przeglądaj i zarządzaj rezerwacjami apartamentów",
    totalBookings: "Łączne rezerwacje",
    confirmed: "Potwierdzone",
    upcoming: "Nadchodzące",
    totalSpent: "Łącznie wydane",
    yourBookings: "Twoje rezerwacje",
    newBooking: "Nowa rezerwacja",
    noBookingsFound: "Nie znaleziono rezerwacji",
    makeFirstBooking: "Dokonaj pierwszej rezerwacji",
    bookingDetails: "Szczegóły rezerwacji",
    stayDetails: "Szczegóły pobytu",
    guestInfo: "Informacje o gościu",
    paymentSummary: "Podsumowanie płatności",
    totalAmount: "Łączna kwota",
    status: "Status",
    paid: "Opłacone",
    viewDetails: "Zobacz szczegóły",
    cancel: "Anuluj",
    
    // Common
    learnMore: "Dowiedz się więcej",
    readMore: "Czytaj więcej",
    showMore: "Pokaż więcej",
    showLess: "Pokaż mniej",
    previous: "Poprzedni",
    next: "Następny",
    save: "Zapisz",
    edit: "Edytuj",
    delete: "Usuń",
    confirm: "Potwierdź",
    yes: "Tak",
    no: "Nie",
    ok: "OK",
    error: "Błąd",
    success: "Sukces",
    warning: "Ostrzeżenie",
    info: "Informacja"
  },

  // French (fr)
  fr: {
    // Navigation & Header
    home: "Accueil",
    apartments: "Appartements",
    amenities: "Équipements",
    location: "Emplacement",
    contact: "Contact",
    bookNow: "Réserver maintenant",
    
    // Hero Section
    heroTitle: "Appartements de luxe",
    heroSubtitle: "Découvrez le mélange parfait de confort, d'élégance et de vues océaniques à couper le souffle dans nos appartements de vacances premium.",
    exploreApartments: "Explorer les appartements",
    bookYourStay: "Réservez votre séjour",
    
    // Features Section
    whyChoose: "Pourquoi choisir Apartments Delfin ?",
    whyChooseSubtitle: "Découvrez la combinaison parfaite de luxe, de confort et de commodité qui fait de nos appartements le choix idéal pour vos vacances.",
    beachfrontLocation: "Emplacement en bord de mer",
    beachfrontDesc: "Accès direct à une plage immaculée avec des eaux cristallines",
    oceanViews: "Vues sur l'océan",
    oceanViewsDesc: "Vues panoramiques sur l'océan depuis chaque appartement",
    swimmingPool: "Piscine",
    swimmingPoolDesc: "Piscine à débordement avec vue sur l'océan",
    fullKitchen: "Cuisine complète",
    fullKitchenDesc: "Cuisines modernes avec appareils haut de gamme",
    freeWifi: "WiFi gratuit",
    freeWifiDesc: "Internet sans fil haut débit dans tout l'établissement",
    freeParking: "Parking gratuit",
    freeParkingDesc: "Parking couvert sécurisé pour tous les clients",
    
    // Apartments Section
    ourApartments: "Notre collection d'appartements",
    ourApartmentsSubtitle: "Choisissez parmi notre sélection soigneusement organisée d'appartements de luxe, chacun conçu pour offrir le confort ultime et des vues océaniques époustouflantes.",
    guests: "Invités",
    guest: "Invité",
    beds: "Lits",
    bed: "Lit",
    baths: "Salles de bain",
    bath: "Salle de bain",
    viewDetailsBook: "Voir les détails et réserver",
    
    // Calendar
    selectDates: "Sélectionnez vos dates",
    checkin: "Arrivée",
    checkout: "Départ",
    available: "Disponible",
    booked: "Réservé",
    selected: "Sélectionné",
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
    sun: "Dim",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Jeu",
    fri: "Ven",
    sat: "Sam",
    
    // Booking Modal
    bookYourStayTitle: "Réservez votre séjour",
    checkinDate: "Date d'arrivée",
    checkoutDate: "Date de départ",
    numberOfGuests: "Nombre d'invités",
    selectGuests: "Sélectionnez le nombre d'invités",
    guestInformation: "Informations sur l'invité",
    firstName: "Prénom",
    lastName: "Nom de famille",
    emailAddress: "Adresse e-mail",
    phoneNumber: "Numéro de téléphone",
    specialRequests: "Demandes spéciales",
    optional: "Optionnel",
    specialRequestsPlaceholder: "Toute demande spéciale ou exigence...",
    bookingSummary: "Résumé de la réservation",
    nights: "Nuits",
    ratePerNight: "Tarif par nuit",
    subtotal: "Sous-total",
    taxesFees: "Taxes et frais",
    total: "Total",
    confirmBooking: "Confirmer la réservation",
    loading: "Traitement de votre réservation...",
    bookingConfirmed: "Réservation confirmée !",
    bookingConfirmedMessage: "Merci pour votre réservation. Nous vous contacterons bientôt avec les détails de confirmation.",
    close: "Fermer",
    
    // Contact Page
    contactUs: "Contactez-nous",
    contactUsSubtitle: "Nous sommes là pour vous aider à rendre votre séjour parfait. Contactez-nous à tout moment pour des réservations, des questions ou de l'aide.",
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    hours: "Heures",
    sendMessage: "Envoyez-nous un message",
    sendMessageSubtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
    subject: "Sujet",
    selectSubject: "Sélectionnez un sujet",
    newReservation: "Nouvelle réservation",
    existingReservation: "Réservation existante",
    generalInquiry: "Demande générale",
    amenitiesServices: "Équipements et services",
    feedback: "Commentaires",
    other: "Autre",
    message: "Message",
    messagePlaceholder: "Veuillez nous dire comment nous pouvons vous aider...",
    newsletter: "Je souhaite recevoir des mises à jour et des offres spéciales par e-mail",
    sendMessageBtn: "Envoyer le message",
    
    // Amenities Page
    worldClassAmenities: "Équipements de classe mondiale",
    worldClassAmenitiesSubtitle: "Découvrez la vie de luxe avec notre collection complète d'équipements premium et de services personnalisés conçus pour rendre votre séjour inoubliable.",
    accommodationFeatures: "Caractéristiques de l'hébergement",
    recreationWellness: "Loisirs et bien-être",
    diningEntertainment: "Restauration et divertissement",
    servicesConvenience: "Services et commodité",
    familyBusiness: "Famille et affaires",
    premiumServices: "Services premium",
    premiumServicesSubtitle: "Élevez votre expérience avec nos services premium exclusifs, conçus pour les clients recherchant le summum du luxe et de la commodité.",
    experienceFacilities: "Découvrez nos installations",
    experienceFacilitiesSubtitle: "Faites une visite visuelle de nos équipements et installations magnifiques qui font d'Apartments Delfin le choix parfait pour vos vacances.",
    readyExperienceLuxury: "Prêt à vivre le luxe ?",
    readyExperienceLuxurySubtitle: "Réservez votre séjour dès aujourd'hui et profitez de l'accès à tous nos équipements de classe mondiale et services premium.",
    viewApartments: "Voir les appartements",
    
    // Location Page
    primeBeachfrontLocation: "Emplacement privilégié en bord de mer",
    primeLocationSubtitle: "Parfaitement positionné sur le magnifique littoral avec un accès facile aux plages, restaurants, attractions et tout ce que la région a de mieux à offrir.",
    perfectCoastalGetaway: "L'escapade côtière parfaite",
    perfectCoastalGetawayDesc1: "Apartments Delfin est stratégiquement situé sur le littoral immaculé, offrant aux clients le mélange parfait de vie tranquille en bord de mer et d'accès pratique aux attractions locales, restaurants et divertissements.",
    perfectCoastalGetawayDesc2: "Notre emplacement privilégié signifie que vous n'êtes qu'à quelques pas des eaux cristallines, des plages de sable doré et d'une communauté côtière dynamique qui offre quelque chose pour tout le monde.",
    toBeach: "à la plage",
    toMarina: "à la marina",
    toDowntown: "au centre-ville",
    toAirport: "à l'aéroport",
    exploreArea: "Explorez la région",
    exploreAreaSubtitle: "Découvrez les attractions, restaurants et points d'intérêt à proximité d'Apartments Delfin.",
    nearbyAttractions: "Attractions à proximité",
    nearbyAttractionsSubtitle: "Des plages immaculées aux attractions culturelles, découvrez le meilleur de ce que notre région a à offrir.",
    diningRestaurants: "Restauration et restaurants",
    diningRestaurantsSubtitle: "Savourez une cuisine exceptionnelle dans les restaurants à proximité, des repas décontractés en bord de mer aux expériences gastronomiques raffinées.",
    transportationAccess: "Transport et accès",
    transportationAccessSubtitle: "Facilement accessible par divers moyens de transport, rendant votre voyage vers et depuis Apartments Delfin pratique et sans stress.",
    experiencePerfectLocation: "Découvrez notre emplacement parfait",
    experiencePerfectLocationSubtitle: "Réservez votre séjour à Apartments Delfin et découvrez pourquoi notre emplacement en bord de mer est la base parfaite pour vos vacances côtières.",
    getDirections: "Obtenir des directions",
    
    // Dashboard
    myBookings: "Mes réservations",
    myBookingsSubtitle: "Voir et gérer vos réservations d'appartements",
    totalBookings: "Total des réservations",
    confirmed: "Confirmé",
    upcoming: "À venir",
    totalSpent: "Total dépensé",
    yourBookings: "Vos réservations",
    newBooking: "Nouvelle réservation",
    noBookingsFound: "Aucune réservation trouvée",
    makeFirstBooking: "Faites votre première réservation",
    bookingDetails: "Détails de la réservation",
    stayDetails: "Détails du séjour",
    guestInfo: "Informations sur l'invité",
    paymentSummary: "Résumé du paiement",
    totalAmount: "Montant total",
    status: "Statut",
    paid: "Payé",
    viewDetails: "Voir les détails",
    cancel: "Annuler",
    
    // Common
    learnMore: "En savoir plus",
    readMore: "Lire la suite",
    showMore: "Afficher plus",
    showLess: "Afficher moins",
    previous: "Précédent",
    next: "Suivant",
    save: "Enregistrer",
    edit: "Modifier",
    delete: "Supprimer",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",
    ok: "OK",
    error: "Erreur",
    success: "Succès",
    warning: "Avertissement",
    info: "Information"
  },

  // Italian (it)
  it: {
    // Navigation & Header
    home: "Home",
    apartments: "Appartamenti",
    amenities: "Servizi",
    location: "Posizione",
    contact: "Contatto",
    bookNow: "Prenota ora",
    
    // Hero Section
    heroTitle: "Appartamenti di lusso",
    heroSubtitle: "Vivi la perfetta combinazione di comfort, eleganza e viste mozzafiato sull'oceano nei nostri appartamenti vacanza premium.",
    exploreApartments: "Esplora appartamenti",
    bookYourStay: "Prenota il tuo soggiorno",
    
    // Features Section
    whyChoose: "Perché scegliere Apartments Delfin?",
    whyChooseSubtitle: "Scopri la combinazione perfetta di lusso, comfort e convenienza che rende i nostri appartamenti la scelta ideale per le tue vacanze.",
    beachfrontLocation: "Posizione fronte mare",
    beachfrontDesc: "Accesso diretto a una spiaggia incontaminata con acque cristalline",
    oceanViews: "Vista oceano",
    oceanViewsDesc: "Viste panoramiche sull'oceano da ogni appartamento",
    swimmingPool: "Piscina",
    swimmingPoolDesc: "Piscina a sfioro con vista sull'oceano",
    fullKitchen: "Cucina completa",
    fullKitchenDesc: "Cucine moderne con elettrodomestici premium",
    freeWifi: "WiFi gratuito",
    freeWifiDesc: "Internet wireless ad alta velocità in tutta la struttura",
    freeParking: "Parcheggio gratuito",
    freeParkingDesc: "Parcheggio coperto sicuro per tutti gli ospiti",
    
    // Apartments Section
    ourApartments: "La nostra collezione di appartamenti",
    ourApartmentsSubtitle: "Scegli dalla nostra selezione accuratamente curata di appartamenti di lusso, ognuno progettato per fornire il massimo comfort e splendide viste sull'oceano.",
    guests: "Ospiti",
    guest: "Ospite",
    beds: "Letti",
    bed: "Letto",
    baths: "Bagni",
    bath: "Bagno",
    viewDetailsBook: "Vedi dettagli e prenota",
    
    // Calendar
    selectDates: "Seleziona le tue date",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Disponibile",
    booked: "Prenotato",
    selected: "Selezionato",
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
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Gio",
    fri: "Ven",
    sat: "Sab",
    
    // Booking Modal
    bookYourStayTitle: "Prenota il tuo soggiorno",
    checkinDate: "Data di check-in",
    checkoutDate: "Data di check-out",
    numberOfGuests: "Numero di ospiti",
    selectGuests: "Seleziona il numero di ospiti",
    guestInformation: "Informazioni ospite",
    firstName: "Nome",
    lastName: "Cognome",
    emailAddress: "Indirizzo email",
    phoneNumber: "Numero di telefono",
    specialRequests: "Richieste speciali",
    optional: "Opzionale",
    specialRequestsPlaceholder: "Qualsiasi richiesta speciale o requisito...",
    bookingSummary: "Riepilogo prenotazione",
    nights: "Notti",
    ratePerNight: "Tariffa per notte",
    subtotal: "Subtotale",
    taxesFees: "Tasse e commissioni",
    total: "Totale",
    confirmBooking: "Conferma prenotazione",
    loading: "Elaborazione della tua prenotazione...",
    bookingConfirmed: "Prenotazione confermata!",
    bookingConfirmedMessage: "Grazie per la tua prenotazione. Ti contatteremo presto con i dettagli di conferma.",
    close: "Chiudi",
    
    // Contact Page
    contactUs: "Contattaci",
    contactUsSubtitle: "Siamo qui per aiutarti a rendere perfetto il tuo soggiorno. Contattaci in qualsiasi momento per prenotazioni, domande o assistenza.",
    phone: "Telefono",
    email: "Email",
    address: "Indirizzo",
    hours: "Orari",
    sendMessage: "Inviaci un messaggio",
    sendMessageSubtitle: "Compila il modulo qui sotto e ti risponderemo il prima possibile.",
    subject: "Oggetto",
    selectSubject: "Seleziona un oggetto",
    newReservation: "Nuova prenotazione",
    existingReservation: "Prenotazione esistente",
    generalInquiry: "Richiesta generale",
    amenitiesServices: "Servizi e comfort",
    feedback: "Feedback",
    other: "Altro",
    message: "Messaggio",
    messagePlaceholder: "Per favore dicci come possiamo aiutarti...",
    newsletter: "Vorrei ricevere aggiornamenti e offerte speciali via email",
    sendMessageBtn: "Invia messaggio",
    
    // Amenities Page
    worldClassAmenities: "Servizi di classe mondiale",
    worldClassAmenitiesSubtitle: "Vivi la vita di lusso con la nostra collezione completa di servizi premium e servizi personalizzati progettati per rendere il tuo soggiorno indimenticabile.",
    accommodationFeatures: "Caratteristiche dell'alloggio",
    recreationWellness: "Ricreazione e benessere",
    diningEntertainment: "Ristorazione e intrattenimento",
    servicesConvenience: "Servizi e convenienza",
    familyBusiness: "Famiglia e affari",
    premiumServices: "Servizi premium",
    premiumServicesSubtitle: "Eleva la tua esperienza con i nostri servizi premium esclusivi, progettati per gli ospiti che cercano il massimo del lusso e della convenienza.",
    experienceFacilities: "Vivi le nostre strutture",
    experienceFacilitiesSubtitle: "Fai un tour visivo dei nostri splendidi servizi e strutture che rendono Apartments Delfin la scelta perfetta per le tue vacanze.",
    readyExperienceLuxury: "Pronto a vivere il lusso?",
    readyExperienceLuxurySubtitle: "Prenota il tuo soggiorno oggi e goditi l'accesso a tutti i nostri servizi di classe mondiale e servizi premium.",
    viewApartments: "Vedi appartamenti",
    
    // Location Page
    primeBeachfrontLocation: "Posizione privilegiata fronte mare",
    primeLocationSubtitle: "Perfettamente posizionato sulla splendida costa con facile accesso a spiagge, ristoranti, attrazioni e tutto il meglio che la zona ha da offrire.",
    perfectCoastalGetaway: "La fuga costiera perfetta",
    perfectCoastalGetawayDesc1: "Apartments Delfin è strategicamente situato sulla costa incontaminata, offrendo agli ospiti la perfetta combinazione di vita tranquilla fronte mare e accesso conveniente alle attrazioni locali, ristoranti e intrattenimento.",
    perfectCoastalGetawayDesc2: "La nostra posizione privilegiata significa che sei a pochi passi da acque cristalline, spiagge di sabbia dorata e una vivace comunità costiera che offre qualcosa per tutti.",
    toBeach: "alla spiaggia",
    toMarina: "al porto turistico",
    toDowntown: "al centro",
    toAirport: "all'aeroporto",
    exploreArea: "Esplora la zona",
    exploreAreaSubtitle: "Scopri attrazioni, ristoranti e punti di interesse nelle vicinanze di Apartments Delfin.",
    nearbyAttractions: "Attrazioni nelle vicinanze",
    nearbyAttractionsSubtitle: "Dalle spiagge incontaminate alle attrazioni culturali, scopri il meglio di ciò che la nostra zona ha da offrire.",
    diningRestaurants: "Ristorazione e ristoranti",
    diningRestaurantsSubtitle: "Assapora la cucina eccezionale nei ristoranti nelle vicinanze, dalla ristorazione casual sulla spiaggia alle esperienze di alta cucina.",
    transportationAccess: "Trasporti e accesso",
    transportationAccessSubtitle: "Facilmente accessibile con vari mezzi di trasporto, rendendo il tuo viaggio da e per Apartments Delfin conveniente e senza stress.",
    experiencePerfectLocation: "Vivi la nostra posizione perfetta",
    experiencePerfectLocationSubtitle: "Prenota il tuo soggiorno ad Apartments Delfin e scopri perché la nostra posizione fronte mare è la base perfetta per le tue vacanze costiere.",
    getDirections: "Ottieni indicazioni",
    
    // Dashboard
    myBookings: "Le mie prenotazioni",
    myBookingsSubtitle: "Visualizza e gestisci le tue prenotazioni di appartamenti",
    totalBookings: "Prenotazioni totali",
    confirmed: "Confermato",
    upcoming: "In arrivo",
    totalSpent: "Totale speso",
    yourBookings: "Le tue prenotazioni",
    newBooking: "Nuova prenotazione",
    noBookingsFound: "Nessuna prenotazione trovata",
    makeFirstBooking: "Fai la tua prima prenotazione",
    bookingDetails: "Dettagli prenotazione",
    stayDetails: "Dettagli soggiorno",
    guestInfo: "Informazioni ospite",
    paymentSummary: "Riepilogo pagamento",
    totalAmount: "Importo totale",
    status: "Stato",
    paid: "Pagato",
    viewDetails: "Vedi dettagli",
    cancel: "Annulla",
    
    // Common
    learnMore: "Scopri di più",
    readMore: "Leggi di più",
    showMore: "Mostra di più",
    showLess: "Mostra di meno",
    previous: "Precedente",
    next: "Successivo",
    save: "Salva",
    edit: "Modifica",
    delete: "Elimina",
    confirm: "Conferma",
    yes: "Sì",
    no: "No",
    ok: "OK",
    error: "Errore",
    success: "Successo",
    warning: "Avviso",
    info: "Informazione"
  },

  // German (de)
  de: {
    // Navigation & Header
    home: "Startseite",
    apartments: "Apartments",
    amenities: "Ausstattung",
    location: "Lage",
    contact: "Kontakt",
    bookNow: "Jetzt buchen",
    
    // Hero Section
    heroTitle: "Luxus-Apartments",
    heroSubtitle: "Erleben Sie die perfekte Mischung aus Komfort, Eleganz und atemberaubendem Meerblick in unseren Premium-Ferienapartments.",
    exploreApartments: "Apartments erkunden",
    bookYourStay: "Ihren Aufenthalt buchen",
    
    // Features Section
    whyChoose: "Warum Apartments Delfin wählen?",
    whyChooseSubtitle: "Entdecken Sie die perfekte Kombination aus Luxus, Komfort und Bequemlichkeit, die unsere Apartments zur idealen Wahl für Ihren Urlaub macht.",
    beachfrontLocation: "Strandlage",
    beachfrontDesc: "Direkter Zugang zu einem unberührten Strand mit kristallklarem Wasser",
    oceanViews: "Meerblick",
    oceanViewsDesc: "Panoramablick auf das Meer von jedem Apartment",
    swimmingPool: "Schwimmbad",
    swimmingPoolDesc: "Infinity-Pool mit Blick auf das Meer",
    fullKitchen: "Vollküche",
    fullKitchenDesc: "Moderne Küchen mit Premium-Geräten",
    freeWifi: "Kostenloses WLAN",
    freeWifiDesc: "Hochgeschwindigkeits-WLAN im gesamten Gebäude",
    freeParking: "Kostenlose Parkplätze",
    freeParkingDesc: "Sichere überdachte Parkplätze für alle Gäste",
    
    // Apartments Section
    ourApartments: "Unsere Apartment-Kollektion",
    ourApartmentsSubtitle: "Wählen Sie aus unserer sorgfältig kuratierten Auswahl an Luxus-Apartments, jedes entworfen, um ultimativen Komfort und atemberaubende Meerblicke zu bieten.",
    guests: "Gäste",
    guest: "Gast",
    beds: "Betten",
    bed: "Bett",
    baths: "Bäder",
    bath: "Bad",
    viewDetailsBook: "Details ansehen & buchen",
    
    // Calendar
    selectDates: "Wählen Sie Ihre Daten",
    checkin: "Check-in",
    checkout: "Check-out",
    available: "Verfügbar",
    booked: "Gebucht",
    selected: "Ausgewählt",
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
    sun: "So",
    mon: "Mo",
    tue: "Di",
    wed: "Mi",
    thu: "Do",
    fri: "Fr",
    sat: "Sa",
    
    // Booking Modal
    bookYourStayTitle: "Ihren Aufenthalt buchen",
    checkinDate: "Check-in-Datum",
    checkoutDate: "Check-out-Datum",
    numberOfGuests: "Anzahl der Gäste",
    selectGuests: "Anzahl der Gäste auswählen",
    guestInformation: "Gästeinformationen",
    firstName: "Vorname",
    lastName: "Nachname",
    emailAddress: "E-Mail-Adresse",
    phoneNumber: "Telefonnummer",
    specialRequests: "Besondere Wünsche",
    optional: "Optional",
    specialRequestsPlaceholder: "Besondere Wünsche oder Anforderungen...",
    bookingSummary: "Buchungszusammenfassung",
    nights: "Nächte",
    ratePerNight: "Preis pro Nacht",
    subtotal: "Zwischensumme",
    taxesFees: "Steuern & Gebühren",
    total: "Gesamt",
    confirmBooking: "Buchung bestätigen",
    loading: "Ihre Buchung wird bearbeitet...",
    bookingConfirmed: "Buchung bestätigt!",
    bookingConfirmedMessage: "Vielen Dank für Ihre Reservierung. Wir werden Sie in Kürze mit Bestätigungsdetails kontaktieren.",
    close: "Schließen",
    
    // Contact Page
    contactUs: "Kontaktieren Sie uns",
    contactUsSubtitle: "Wir sind hier, um Ihren Aufenthalt perfekt zu machen. Kontaktieren Sie uns jederzeit für Reservierungen, Fragen oder Hilfe.",
    phone: "Telefon",
    email: "E-Mail",
    address: "Adresse",
    hours: "Öffnungszeiten",
    sendMessage: "Senden Sie uns eine Nachricht",
    sendMessageSubtitle: "Füllen Sie das untenstehende Formular aus und wir melden uns so schnell wie möglich bei Ihnen.",
    subject: "Betreff",
    selectSubject: "Betreff auswählen",
    newReservation: "Neue Reservierung",
    existingReservation: "Bestehende Reservierung",
    generalInquiry: "Allgemeine Anfrage",
    amenitiesServices: "Ausstattung & Services",
    feedback: "Feedback",
    other: "Sonstiges",
    message: "Nachricht",
    messagePlaceholder: "Bitte teilen Sie uns mit, wie wir Ihnen helfen können...",
    newsletter: "Ich möchte Updates und Sonderangebote per E-Mail erhalten",
    sendMessageBtn: "Nachricht senden",
    
    // Amenities Page
    worldClassAmenities: "Weltklasse-Ausstattung",
    worldClassAmenitiesSubtitle: "Erleben Sie luxuriöses Wohnen mit unserer umfassenden Sammlung von Premium-Ausstattung und personalisierten Services, die Ihren Aufenthalt unvergesslich machen.",
    accommodationFeatures: "Unterkunfts-Features",
    recreationWellness: "Erholung & Wellness",
    diningEntertainment: "Gastronomie & Unterhaltung",
    servicesConvenience: "Services & Bequemlichkeit",
    familyBusiness: "Familie & Business",
    premiumServices: "Premium-Services",
    premiumServicesSubtitle: "Verbessern Sie Ihr Erlebnis mit unseren exklusiven Premium-Services, die für Gäste entwickelt wurden, die das Beste an Luxus und Bequemlichkeit suchen.",
    experienceFacilities: "Erleben Sie unsere Einrichtungen",
    experienceFacilitiesSubtitle: "Machen Sie eine visuelle Tour durch unsere atemberaubende Ausstattung und Einrichtungen, die Apartments Delfin zur perfekten Wahl für Ihren Urlaub machen.",
    readyExperienceLuxury: "Bereit für Luxus?",
    readyExperienceLuxurySubtitle: "Buchen Sie Ihren Aufenthalt noch heute und genießen Sie Zugang zu all unserer Weltklasse-Ausstattung und Premium-Services.",
    viewApartments: "Apartments ansehen",
    
    // Location Page
    primeBeachfrontLocation: "Erstklassige Strandlage",
    primeLocationSubtitle: "Perfekt positioniert an der atemberaubenden Küste mit einfachem Zugang zu Stränden, Restaurants, Attraktionen und allem Besten, was die Gegend zu bieten hat.",
    perfectCoastalGetaway: "Der perfekte Küstenurlaub",
    perfectCoastalGetawayDesc1: "Apartments Delfin ist strategisch an der unberührten Küste gelegen und bietet Gästen die perfekte Mischung aus ruhigem Strandleben und bequemem Zugang zu lokalen Attraktionen, Restaurants und Unterhaltung.",
    perfectCoastalGetawayDesc2: "Unsere erstklassige Lage bedeutet, dass Sie nur wenige Schritte von kristallklarem Wasser, goldenen Sandstränden und einer lebendigen Küstengemeinde entfernt sind, die für jeden etwas bietet.",
    toBeach: "zum Strand",
    toMarina: "zum Hafen",
    toDowntown: "zur Innenstadt",
    toAirport: "zum Flughafen",
    exploreArea: "Erkunden Sie die Gegend",
    exploreAreaSubtitle: "Entdecken Sie nahegelegene Attraktionen, Restaurants und Sehenswürdigkeiten rund um Apartments Delfin.",
    nearbyAttractions: "Nahegelegene Attraktionen",
    nearbyAttractionsSubtitle: "Von unberührten Stränden bis hin zu kulturellen Attraktionen, entdecken Sie das Beste, was unsere Gegend zu bieten hat.",
    diningRestaurants: "Gastronomie & Restaurants",
    diningRestaurantsSubtitle: "Genießen Sie außergewöhnliche Küche in nahegelegenen Restaurants, von ungezwungenen Strandrestaurants bis hin zu gehobenen Gastronomie-Erlebnissen.",
    transportationAccess: "Transport & Zugang",
    transportationAccessSubtitle: "Leicht erreichbar mit verschiedenen Transportmitteln, was Ihre Reise zu und von Apartments Delfin bequem und stressfrei macht.",
    experiencePerfectLocation: "Erleben Sie unsere perfekte Lage",
    experiencePerfectLocationSubtitle: "Buchen Sie Ihren Aufenthalt bei Apartments Delfin und entdecken Sie, warum unsere Strandlage die perfekte Basis für Ihren Küstenurlaub ist.",
    getDirections: "Wegbeschreibung",
    
    // Dashboard
    myBookings: "Meine Buchungen",
    myBookingsSubtitle: "Apartment-Reservierungen anzeigen und verwalten",
    totalBookings: "Gesamte Buchungen",
    confirmed: "Bestätigt",
    upcoming: "Bevorstehend",
    totalSpent: "Gesamt ausgegeben",
    yourBookings: "Ihre Buchungen",
    newBooking: "Neue Buchung",
    noBookingsFound: "Keine Buchungen gefunden",
    makeFirstBooking: "Machen Sie Ihre erste Buchung",
    bookingDetails: "Buchungsdetails",
    stayDetails: "Aufenthaltsdetails",
    guestInfo: "Gästeinformationen",
    paymentSummary: "Zahlungszusammenfassung",
    totalAmount: "Gesamtbetrag",
    status: "Status",
    paid: "Bezahlt",
    viewDetails: "Details anzeigen",
    cancel: "Stornieren",
    
    // Common
    learnMore: "Mehr erfahren",
    readMore: "Mehr lesen",
    showMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",
    previous: "Vorherige",
    next: "Nächste",
    save: "Speichern",
    edit: "Bearbeiten",
    delete: "Löschen",
    confirm: "Bestätigen",
    yes: "Ja",
    no: "Nein",
    ok: "OK",
    error: "Fehler",
    success: "Erfolg",
    warning: "Warnung",
    info: "Information"
  },

  // Ukrainian (uk)
  uk: {
    // Navigation & Header
    home: "Головна",
    apartments: "Апартаменти",
    amenities: "Зручності",
    location: "Розташування",
    contact: "Контакт",
    bookNow: "Забронювати зараз",
    
    // Hero Section
    heroTitle: "Розкішні апартаменти",
    heroSubtitle: "Відчуйте ідеальне поєднання комфорту, елегантності та захоплюючих видів на океан у наших преміум апартаментах для відпочинку.",
    exploreApartments: "Дослідити апартаменти",
    bookYourStay: "Забронювати проживання",
    
    // Features Section
    whyChoose: "Чому обрати Apartments Delfin?",
    whyChooseSubtitle: "Відкрийте ідеальну комбінацію розкоші, комфорту та зручності, яка робить наші апартаменти ідеальним вибором для вашої відпустки.",
    beachfrontLocation: "Розташування на березі",
    beachfrontDesc: "Прямий доступ до незайманого пляжу з кришталево чистою водою",
    oceanViews: "Вид на океан",
    oceanViewsDesc: "Панорамний вид на океан з кожного апартаменту",
    swimmingPool: "Басейн",
    swimmingPoolDesc: "Безкрайній басейн з видом на океан",
    fullKitchen: "Повна кухня",
    fullKitchenDesc: "Сучасні кухні з преміум обладнанням",
    freeWifi: "Безкоштовний WiFi",
    freeWifiDesc: "Високошвидкісний бездротовий інтернет по всій території",
    freeParking: "Безкоштовна парковка",
    freeParkingDesc: "Безпечна критя парковка для всіх гостей",
    
    // Apartments Section
    ourApartments: "Наша колекція апартаментів",
    ourApartmentsSubtitle: "Оберіть з нашої ретельно підібраної колекції розкішних апартаментів, кожен розроблений для забезпечення максимального комфорту та приголомшливих видів на океан.",
    guests: "Гості",
    guest: "Гість",
    beds: "Ліжка",
    bed: "Ліжко",
    baths: "Ванні",
    bath: "Ванна",
    viewDetailsBook: "Переглянути деталі та забронювати",
    
    // Calendar
    selectDates: "Оберіть ваші дати",
    checkin: "Заїзд",
    checkout: "Виїзд",
    available: "Доступно",
    booked: "Заброньовано",
    selected: "Обрано",
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
    sun: "Нд",
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб",
    
    // Booking Modal
    bookYourStayTitle: "Забронювати проживання",
    checkinDate: "Дата заїзду",
    checkoutDate: "Дата виїзду",
    numberOfGuests: "Кількість гостей",
    selectGuests: "Оберіть кількість гостей",
    guestInformation: "Інформація про гостя",
    firstName: "Ім'я",
    lastName: "Прізвище",
    emailAddress: "Електронна адреса",
    phoneNumber: "Номер телефону",
    specialRequests: "Особливі побажання",
    optional: "Необов'язково",
    specialRequestsPlaceholder: "Будь-які особливі побажання або вимоги...",
    bookingSummary: "Підсумок бронювання",
    nights: "Ночі",
    ratePerNight: "Ціна за ніч",
    subtotal: "Проміжний підсумок",
    taxesFees: "Податки та збори",
    total: "Загалом",
    confirmBooking: "Підтвердити бронювання",
    loading: "Обробляємо ваше бронювання...",
    bookingConfirmed: "Бронювання підтверджено!",
    bookingConfirmedMessage: "Дякуємо за вашу резервацію. Ми зв'яжемося з вами найближчим часом з деталями підтвердження.",
    close: "Закрити",
    
    // Contact Page
    contactUs: "Зв'яжіться з нами",
    contactUsSubtitle: "Ми тут, щоб допомогти зробити ваше перебування ідеальним. Зв'яжіться з нами в будь-який час для бронювання, питань або допомоги.",
    phone: "Телефон",
    email: "Електронна пошта",
    address: "Адреса",
    hours: "Години роботи",
    sendMessage: "Надішліть нам повідомлення",
    sendMessageSubtitle: "Заповніть форму нижче, і ми зв'яжемося з вами якомога швидше.",
    subject: "Тема",
    selectSubject: "Оберіть тему",
    newReservation: "Нове бронювання",
    existingReservation: "Існуюче бронювання",
    generalInquiry: "Загальний запит",
    amenitiesServices: "Зручності та послуги",
    feedback: "Відгук",
    other: "Інше",
    message: "Повідомлення",
    messagePlaceholder: "Будь ласка, розкажіть нам, як ми можемо вам допомогти...",
    newsletter: "Я хотів би отримувати оновлення та спеціальні пропозиції електронною поштою",
    sendMessageBtn: "Надіслати повідомлення",
    
    // Amenities Page
    worldClassAmenities: "Зручності світового класу",
    worldClassAmenitiesSubtitle: "Відчуйте розкішне життя з нашою комплексною колекцією преміум зручностей та персоналізованих послуг, розроблених для того, щоб зробити ваше перебування незабутнім.",
    accommodationFeatures: "Особливості розміщення",
    recreationWellness: "Відпочинок та велнес",
    diningEntertainment: "Харчування та розваги",
    servicesConvenience: "Послуги та зручність",
    familyBusiness: "Сім'я та бізнес",
    premiumServices: "Преміум послуги",
    premiumServicesSubtitle: "Підвищте свій досвід з нашими ексклюзивними преміум послугами, розробленими для гостей, які шукають вершину розкоші та зручності.",
    experienceFacilities: "Відчуйте наші об'єкти",
    experienceFacilitiesSubtitle: "Здійсніть візуальну екскурсію нашими приголомшливими зручностями та об'єктами, які роблять Apartments Delfin ідеальним вибором для вашої відпустки.",
    readyExperienceLuxury: "Готові відчути розкіш?",
    readyExperienceLuxurySubtitle: "Забронюйте своє перебування сьогодні та насолоджуйтесь доступом до всіх наших зручностей світового класу та преміум послуг.",
    viewApartments: "Переглянути апартаменти",
    
    // Location Page
    primeBeachfrontLocation: "Першокласне розташування на березі",
    primeLocationSubtitle: "Ідеально розташований на приголомшливому узбережжі з легким доступом до пляжів, ресторанів, атракцій та всього найкращого, що може запропонувати район.",
    perfectCoastalGetaway: "Ідеальний прибережний відпочинок",
    perfectCoastalGetawayDesc1: "Apartments Delfin стратегічно розташований на незайманому узбережжі, пропонуючи гостям ідеальне поєднання спокійного життя на березі та зручного доступу до місцевих атракцій, ресторанів та розваг.",
    perfectCoastalGetawayDesc2: "Наше першокласне розташування означає, що ви лише за кілька кроків від кришталево чистих вод, золотих піщаних пляжів та яскравої прибережної спільноти, яка пропонує щось для кожного.",
    toBeach: "до пляжу",
    toMarina: "до марини",
    toDowntown: "до центру",
    toAirport: "до аеропорту",
    exploreArea: "Дослідіть район",
    exploreAreaSubtitle: "Відкрийте для себе найближчі атракції, ресторани та цікаві місця навколо Apartments Delfin.",
    nearbyAttractions: "Найближчі атракції",
    nearbyAttractionsSubtitle: "Від незайманих пляжів до культурних атракцій, відкрийте найкраще з того, що може запропонувати наш район.",
    diningRestaurants: "Харчування та ресторани",
    diningRestaurantsSubtitle: "Насолоджуйтесь винятковою кухнею в найближчих ресторанах, від невимушеного харчування на пляжі до вишуканих гастрономічних вражень.",
    transportationAccess: "Транспорт та доступ",
    transportationAccessSubtitle: "Легко доступний різними видами транспорту, що робить вашу подорож до та з Apartments Delfin зручною та без стресу.",
    experiencePerfectLocation: "Відчуйте наше ідеальне розташування",
    experiencePerfectLocationSubtitle: "Забронюйте своє перебування в Apartments Delfin та відкрийте, чому наше розташування на березі є ідеальною базою для вашої прибережної відпустки.",
    getDirections: "Отримати маршрут",
    
    // Dashboard
    myBookings: "Мої бронювання",
    myBookingsSubtitle: "Переглядати та керувати резерваціями апартаментів",
    totalBookings: "Загальна кількість бронювань",
    confirmed: "Підтверджено",
    upcoming: "Майбутні",
    totalSpent: "Загалом витрачено",
    yourBookings: "Ваші бронювання",
    newBooking: "Нове бронювання",
    noBookingsFound: "Бронювань не знайдено",
    makeFirstBooking: "Зробіть своє перше бронювання",
    bookingDetails: "Деталі бронювання",
    stayDetails: "Деталі перебування",
    guestInfo: "Інформація про гостя",
    paymentSummary: "Підсумок платежу",
    totalAmount: "Загальна сума",
    status: "Статус",
    paid: "Сплачено",
    viewDetails: "Переглянути деталі",
    cancel: "Скасувати",
    
    // Common
    learnMore: "Дізнатися більше",
    readMore: "Читати далі",
    showMore: "Показати більше",
    showLess: "Показати менше",
    previous: "Попередній",
    next: "Наступний",
    save: "Зберегти",
    edit: "Редагувати",
    delete: "Видалити",
    confirm: "Підтвердити",
    yes: "Так",
    no: "Ні",
    ok: "ОК",
    error: "Помилка",
    success: "Успіх",
    warning: "Попередження",
    info: "Інформація"
  },

  // Russian (ru)
  ru: {
    // Navigation & Header
    home: "Главная",
    apartments: "Апартаменты",
    amenities: "Удобства",
    location: "Расположение",
    contact: "Контакт",
    bookNow: "Забронировать сейчас",
    
    // Hero Section
    heroTitle: "Роскошные апартаменты",
    heroSubtitle: "Почувствуйте идеальное сочетание комфорта, элегантности и захватывающих видов на океан в наших премиум апартаментах для отдыха.",
    exploreApartments: "Исследовать апартаменты",
    bookYourStay: "Забронировать проживание",
    
    // Features Section
    whyChoose: "Почему выбрать Apartments Delfin?",
    whyChooseSubtitle: "Откройте идеальную комбинацию роскоши, комфорта и удобства, которая делает наши апартаменты идеальным выбором для вашего отпуска.",
    beachfrontLocation: "Расположение на берегу",
    beachfrontDesc: "Прямой доступ к нетронутому пляжу с кристально чистой водой",
    oceanViews: "Вид на океан",
    oceanViewsDesc: "Панорамный вид на океан из каждого апартамента",
    swimmingPool: "Бассейн",
    swimmingPoolDesc: "Бесконечный бассейн с видом на океан",
    fullKitchen: "Полная кухня",
    fullKitchenDesc: "Современные кухни с премиум оборудованием",
    freeWifi: "Бесплатный WiFi",
    freeWifiDesc: "Высокоскоростной беспроводной интернет по всей территории",
    freeParking: "Бесплатная парковка",
    freeParkingDesc: "Безопасная крытая парковка для всех гостей",
    
    // Apartments Section
    ourApartments: "Наша коллекция апартаментов",
    ourApartmentsSubtitle: "Выберите из нашей тщательно подобранной коллекции роскошных апартаментов, каждый разработан для обеспечения максимального комфорта и потрясающих видов на океан.",
    guests: "Гости",
    guest: "Гость",
    beds: "Кровати",
    bed: "Кровать",
    baths: "Ванные",
    bath: "Ванная",
    viewDetailsBook: "Посмотреть детали и забронировать",
    
    // Calendar
    selectDates: "Выберите ваши даты",
    checkin: "Заезд",
    checkout: "Выезд",
    available: "Доступно",
    booked: "Забронировано",
    selected: "Выбрано",
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
    sun: "Вс",
    mon: "Пн",
    tue: "Вт",
    wed: "Ср",
    thu: "Чт",
    fri: "Пт",
    sat: "Сб",
    
    // Booking Modal
    bookYourStayTitle: "Забронировать проживание",
    checkinDate: "Дата заезда",
    checkoutDate: "Дата выезда",
    numberOfGuests: "Количество гостей",
    selectGuests: "Выберите количество гостей",
    guestInformation: "Информация о госте",
    firstName: "Имя",
    lastName: "Фамилия",
    emailAddress: "Электронный адрес",
    phoneNumber: "Номер телефона",
    specialRequests: "Особые пожелания",
    optional: "Необязательно",
    specialRequestsPlaceholder: "Любые особые пожелания или требования...",
    bookingSummary: "Итоги бронирования",
    nights: "Ночи",
    ratePerNight: "Цена за ночь",
    subtotal: "Промежуточный итог",
    taxesFees: "Налоги и сборы",
    total: "Итого",
    confirmBooking: "Подтвердить бронирование",
    loading: "Обрабатываем ваше бронирование...",
    bookingConfirmed: "Бронирование подтверждено!",
    bookingConfirmedMessage: "Спасибо за вашу резервацию. Мы свяжемся с вами в ближайшее время с деталями подтверждения.",
    close: "Закрыть",
    
    // Contact Page
    contactUs: "Свяжитесь с нами",
    contactUsSubtitle: "Мы здесь, чтобы помочь сделать ваше пребывание идеальным. Свяжитесь с нами в любое время для бронирования, вопросов или помощи.",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",
    hours: "Часы работы",
    sendMessage: "Отправьте нам сообщение",
    sendMessageSubtitle: "Заполните форму ниже, и мы свяжемся с вами как можно скорее.",
    subject: "Тема",
    selectSubject: "Выберите тему",
    newReservation: "Новое бронирование",
    existingReservation: "Существующее бронирование",
    generalInquiry: "Общий запрос",
    amenitiesServices: "Удобства и услуги",
    feedback: "Отзыв",
    other: "Другое",
    message: "Сообщение",
    messagePlaceholder: "Пожалуйста, расскажите нам, как мы можем вам помочь...",
    newsletter: "Я хотел бы получать обновления и специальные предложения по электронной почте",
    sendMessageBtn: "Отправить сообщение",
    
    // Amenities Page
    worldClassAmenities: "Удобства мирового класса",
    worldClassAmenitiesSubtitle: "Почувствуйте роскошную жизнь с нашей комплексной коллекцией премиум удобств и персонализированных услуг, разработанных для того, чтобы сделать ваше пребывание незабываемым.",
    accommodationFeatures: "Особенности размещения",
    recreationWellness: "Отдых и велнес",
    diningEntertainment: "Питание и развлечения",
    servicesConvenience: "Услуги и удобство",
    familyBusiness: "Семья и бизнес",
    premiumServices: "Премиум услуги",
    premiumServicesSubtitle: "Повысьте свой опыт с нашими эксклюзивными премиум услугами, разработанными для гостей, ищущих вершину роскоши и удобства.",
    experienceFacilities: "Почувствуйте наши объекты",
    experienceFacilitiesSubtitle: "Совершите визуальную экскурсию по нашим потрясающим удобствам и объектам, которые делают Apartments Delfin идеальным выбором для вашего отпуска.",
    readyExperienceLuxury: "Готовы почувствовать роскошь?",
    readyExperienceLuxurySubtitle: "Забронируйте свое пребывание сегодня и наслаждайтесь доступом ко всем нашим удобствам мирового класса и премиум услугам.",
    viewApartments: "Посмотреть апартаменты",
    
    // Location Page
    primeBeachfrontLocation: "Первоклассное расположение на берегу",
    primeLocationSubtitle: "Идеально расположен на потрясающем побережье с легким доступом к пляжам, ресторанам, достопримечательностям и всему лучшему, что может предложить район.",
    perfectCoastalGetaway: "Идеальный прибрежный отдых",
    perfectCoastalGetawayDesc1: "Apartments Delfin стратегически расположен на нетронутом побережье, предлагая гостям идеальное сочетание спокойной жизни на берегу и удобного доступа к местным достопримечательностям, ресторанам и развлечениям.",
    perfectCoastalGetawayDesc2: "Наше первоклассное расположение означает, что вы всего в нескольких шагах от кристально чистых вод, золотых песчаных пляжей и яркого прибрежного сообщества, которое предлагает что-то для каждого.",
    toBeach: "до пляжа",
    toMarina: "до марины",
    toDowntown: "до центра",
    toAirport: "до аэропорта",
    exploreArea: "Исследуйте район",
    exploreAreaSubtitle: "Откройте для себя ближайшие достопримечательности, рестораны и интересные места вокруг Apartments Delfin.",
    nearbyAttractions: "Ближайшие достопримечательности",
    nearbyAttractionsSubtitle: "От нетронутых пляжей до культурных достопримечательностей, откройте лучшее из того, что может предложить наш район.",
    diningRestaurants: "Питание и рестораны",
    diningRestaurantsSubtitle: "Наслаждайтесь исключительной кухней в ближайших ресторанах, от непринужденного питания на пляже до изысканных гастрономических впечатлений.",
    transportationAccess: "Транспорт и доступ",
    transportationAccessSubtitle: "Легко доступен различными видами транспорта, что делает ваше путешествие в и из Apartments Delfin удобным и без стресса.",
    experiencePerfectLocation: "Почувствуйте наше идеальное расположение",
    experiencePerfectLocationSubtitle: "Забронируйте свое пребывание в Apartments Delfin и откройте, почему наше расположение на берегу является идеальной базой для вашего прибрежного отпуска.",
    get Directions: "Получить маршрут",
    
    // Dashboard
    myBookings: "Мои бронирования",
    myBookingsSubtitle: "Просматривать и управлять резервациями апартаментов",
    totalBookings: "Общее количество бронирований",
    confirmed: "Подтверждено",
    upcoming: "Предстоящие",
    totalSpent: "Всего потрачено",
    yourBookings: "Ваши бронирования",
    newBooking: "Новое бронирование",
    noBookingsFound: "Бронирований не найдено",
    makeFirstBooking: "Сделайте свое первое бронирование",
    bookingDetails: "Детали бронирования",
    stayDetails: "Детали пребывания",
    guestInfo: "Информация о госте",
    paymentSummary: "Итоги платежа",
    totalAmount: "Общая сумма",
    status: "Статус",
    paid: "Оплачено",
    viewDetails: "Посмотреть детали",
    cancel: "Отменить",
    
    // Common
    learnMore: "Узнать больше",
    readMore: "Читать далее",
    showMore: "Показать больше",
    showLess: "Показать меньше",
    previous: "Предыдущий",
    next: "Следующий",
    save: "Сохранить",
    edit: "Редактировать",
    delete: "Удалить",
    confirm: "Подтвердить",
    yes: "Да",
    no: "Нет",
    ok: "ОК",
    error: "Ошибка",
    success: "Успех",
    warning: "Предупреждение",
    info: "Информация"
  }
};

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

let currentLanguage = 'en';

// Initialize language from localStorage or browser preference
export function initializeLanguage(): void {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      currentLanguage = savedLanguage;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        currentLanguage = browserLang;
      }
    }
  }
}

export function getCurrentLanguage(): string {
  return currentLanguage;
}

export function setLanguage(lang: string): void {
  if (translations[lang]) {
    currentLanguage = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Dispatch custom event for components to listen to
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
  }
}

export function t(key: keyof Translation): string {
  const translation = translations[currentLanguage];
  if (translation && translation[key]) {
    return translation[key];
  }
  
  // Fallback to English if translation not found
  const fallback = translations['en'];
  if (fallback && fallback[key]) {
    return fallback[key];
  }
  
  // Return key if no translation found
  return key;
}

// Initialize language when module loads
if (typeof window !== 'undefined') {
  initializeLanguage();
}