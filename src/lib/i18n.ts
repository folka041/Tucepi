export type SupportedLanguage = 'hr' | 'en' | 'cs' | 'sk' | 'pl' | 'fr' | 'it' | 'de' | 'uk' | 'ru';

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

const translations: Record<SupportedLanguage, Record<string, string>> = {
  hr: {
    // Navigation
    home: 'Početna',
    apartments: 'Apartmani',
    amenities: 'Sadržaji',
    location: 'Lokacija',
    contact: 'Kontakt',
    bookNow: 'Rezerviraj',
    
    // Authentication
    signIn: 'Prijava',
    signUp: 'Registracija',
    signOut: 'Odjava',
    emailAddress: 'Email adresa',
    password: 'Lozinka',
    firstName: 'Ime',
    lastName: 'Prezime',
    phoneNumber: 'Broj telefona',
    optional: 'Opcionalno',
    createAccount: 'Stvori račun',
    dontHaveAccount: 'Nemate račun? Registrirajte se',
    alreadyHaveAccount: 'Već imate račun? Prijavite se',
    forgotPassword: 'Zaboravili ste lozinku?',
    resetPassword: 'Resetiraj lozinku',
    rememberMe: 'Zapamti me',
    
    // Email confirmation
    checkYourEmail: 'Provjerite email',
    emailConfirmationSent: 'Poslali smo vam link za potvrdu na vašu email adresu. Molimo provjerite email i kliknite na link za verifikaciju računa.',
    emailConfirmationNote: 'Ako ne vidite email, provjerite spam mapu ili pokušajte ponovno.',
    resendConfirmation: 'Pošaljite ponovno email za potvrdu',
    backToSignIn: 'Povratak na prijavu',
    emailConfirmation: 'Potvrda emaila',
    confirmingEmail: 'Potvrđujemo vaš email...',
    emailConfirmed: 'Email potvrđen!',
    emailConfirmedDesc: 'Vaš email je uspješno potvrđen. Sada se možete prijaviti u svoj račun.',
    continueToSite: 'Nastavi na stranicu',
    confirmationFailed: 'Potvrda neuspješna',
    confirmationFailedDesc: 'Došlo je do greške pri potvrdi vašeg emaila. Link možda nije valjan ili je istekao.',
    backToHome: 'Povratak na početnu',
    tryAgain: 'Pokušajte ponovno',
    
    // Error messages
    invalidCredentials: 'Neispravni email ili lozinka',
    emailNotConfirmed: 'Molimo prvo potvrdite svoju email adresu',
    userAlreadyExists: 'Račun s ovim emailom već postoji',
    passwordTooShort: 'Lozinka mora imati najmanje 6 znakova',
    invalidEmailFormat: 'Molimo unesite valjanu email adresu',
    signupDisabled: 'Registracija računa trenutno nije dostupna',
    rateLimitError: 'Molimo pričekajte prije slanja novog emaila za potvrdu',
    noEmailToResend: 'Nema email adrese za ponovno slanje potvrde',
    confirmationResent: 'Email za potvrdu poslan! Molimo provjerite svoju poštu.',
    
    // Profile
    myProfile: 'Moj profil',
    myBookings: 'Moje rezervacije',
    editProfile: 'Uredi profil',
    changePassword: 'Promijeni lozinku',
    
    // Password validation
    passwordRequirements: 'Lozinka mora imati najmanje 6 znakova',
    confirmPassword: 'Potvrdi lozinku',
    newPassword: 'Nova lozinka',
    currentPassword: 'Trenutna lozinka',
    passwordsDoNotMatch: 'Lozinke se ne podudaraju',
    
    // Common
    loading: 'Učitavanje...',
    saving: 'Spremanje...',
    processing: 'Obrađuje se...',
    success: 'Uspjeh',
    error: 'Greška',
    close: 'Zatvori',
    cancel: 'Odustani',
    save: 'Spremi',
    saveChanges: 'Spremi promjene',
    
    // Hero section
    heroTitle: 'Luksuzni apartmani',
    heroSubtitle: 'Doživite savršen spoj udobnosti, elegancije i prekrasnog pogleda na ocean u našim premium apartmanima za odmor.',
    exploreApartments: 'Istražite apartmane',
    bookYourStay: 'Rezervirajte boravak',
    
    // Features
    whyChoose: 'Zašto odabrati Apartments Delfin?',
    whyChooseSubtitle: 'Otkrijte savršenu kombinaciju luksuza, udobnosti i praktičnosti koja naše apartmane čini idealnim izborom za vaš odmor.',
    beachfrontLocation: 'Lokacija na plaži',
    beachfrontDesc: 'Direktan pristup prekrasnoj plaži s kristalno čistim morem',
    oceanViews: 'Pogled na ocean',
    oceanViewsDesc: 'Panoramski pogledi na ocean iz svih apartmana',
    swimmingPool: 'Bazen',
    swimmingPoolDesc: 'Infinity bazen s pogledom na ocean',
    fullKitchen: 'Potpuno opremljena kuhinja',
    fullKitchenDesc: 'Moderne kuhinje s vrhunskim aparatima',
    freeWifi: 'Besplatni WiFi',
    freeWifiDesc: 'Brza internetska veza u cijelom objektu',
    freeParking: 'Besplatno parkiranje',
    freeParkingDesc: 'Sigurno natkriveno parkiranje za sve goste',
    
    // Apartments
    ourApartments: 'Naša kolekcija apartmana',
    ourApartmentsSubtitle: 'Odaberite iz naše pažljivo odabrane kolekcije premium apartmana s pogledom na ocean, svaki dizajniran za pružanje vrhunske udobnosti i prekrasnih pogleda.',
    guests: 'gostiju',
    guest: 'gost',
    beds: 'kreveta',
    bed: 'krevet',
    baths: 'kupaonice',
    bath: 'kupaonica',
    photos: 'fotografija',
    night: 'noć',
    viewDetailsBook: 'Pogledaj detalje i rezerviraj',
    viewDetails: 'Pogledaj detalje',
    more: 'više',
    
    // Booking
    bookYourStayTitle: 'Rezervirajte svoj boravak',
    checkinDate: 'Datum dolaska',
    checkoutDate: 'Datum odlaska',
    numberOfGuests: 'Broj gostiju',
    selectGuests: 'Odaberite broj gostiju',
    guestInformation: 'Podaci o gostu',
    specialRequests: 'Posebni zahtjevi',
    specialRequestsPlaceholder: 'Bilo koji posebni zahtjevi ili potrebe...',
    termsAndConditions: 'Uvjeti i odredbe',
    agreeTermsText: 'Slažem se s',
    termsOfService: 'Uvjetima korištenja',
    and: 'i',
    privacyPolicy: 'Pravilima privatnosti',
    marketingOptIn: 'Želim primati posebne ponude i ažuriranja putem emaila',
    confirmDetailsText: 'Potvrđujem da su svi navedeni podaci točni i potpuni',
    importantNotice: 'Važna napomena',
    cancellationPolicy: 'Besplatno otkazivanje do 48 sati prije dolaska. Otkazivanja unutar 48 sati podliježu naplati jedne noći.',
    bookingSummary: 'Sažetak rezervacije',
    nights: 'Noći',
    ratePerNight: 'Cijena po noći',
    subtotal: 'Međuzbroj',
    taxesFees: 'Porezi i naknade',
    total: 'Ukupno',
    confirmBooking: 'Potvrdi rezervaciju',
    bookingConfirmed: 'Rezervacija potvrđena!',
    bookingConfirmedMessage: 'Hvala vam na rezervaciji. Uskoro ćemo vas kontaktirati s detaljima potvrde.',
    
    // Calendar
    selectDates: 'Odaberite datume',
    checkin: 'Dolazak',
    checkout: 'Odlazak',
    clearDates: 'Obriši datume',
    available: 'Dostupno',
    booked: 'Rezervirano',
    selected: 'Odabrano',
    
    // Months
    january: 'Siječanj',
    february: 'Veljača',
    march: 'Ožujak',
    april: 'Travanj',
    may: 'Svibanj',
    june: 'Lipanj',
    july: 'Srpanj',
    august: 'Kolovoz',
    september: 'Rujan',
    october: 'Listopad',
    november: 'Studeni',
    december: 'Prosinac',
    
    // Days
    sun: 'Ned',
    mon: 'Pon',
    tue: 'Uto',
    wed: 'Sri',
    thu: 'Čet',
    fri: 'Pet',
    sat: 'Sub'
  },
  
  en: {
    // Navigation
    home: 'Home',
    apartments: 'Apartments',
    amenities: 'Amenities',
    location: 'Location',
    contact: 'Contact',
    bookNow: 'Book Now',
    
    // Authentication
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    emailAddress: 'Email Address',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: 'Phone Number',
    optional: 'Optional',
    createAccount: 'Create Account',
    dontHaveAccount: "Don't have an account? Sign up",
    alreadyHaveAccount: 'Already have an account? Sign in',
    forgotPassword: 'Forgot password?',
    resetPassword: 'Reset Password',
    rememberMe: 'Remember me',
    
    // Email confirmation
    checkYourEmail: 'Check Your Email',
    emailConfirmationSent: 'We\'ve sent a confirmation link to your email address. Please check your email and click the link to verify your account.',
    emailConfirmationNote: 'If you don\'t see the email, check your spam folder or try again.',
    resendConfirmation: 'Resend Confirmation Email',
    backToSignIn: 'Back to Sign In',
    emailConfirmation: 'Email Confirmation',
    confirmingEmail: 'Confirming your email...',
    emailConfirmed: 'Email Confirmed!',
    emailConfirmedDesc: 'Your email has been successfully confirmed. You can now sign in to your account.',
    continueToSite: 'Continue to Site',
    confirmationFailed: 'Confirmation Failed',
    confirmationFailedDesc: 'There was an error confirming your email. The link may be invalid or expired.',
    backToHome: 'Back to Home',
    tryAgain: 'Try Again',
    
    // Error messages
    invalidCredentials: 'Invalid email or password',
    emailNotConfirmed: 'Please confirm your email address first',
    userAlreadyExists: 'An account with this email already exists',
    passwordTooShort: 'Password must be at least 6 characters',
    invalidEmailFormat: 'Please enter a valid email address',
    signupDisabled: 'Account registration is currently disabled',
    rateLimitError: 'Please wait before requesting another confirmation email',
    noEmailToResend: 'No email address to resend confirmation to',
    confirmationResent: 'Confirmation email sent! Please check your inbox.',
    
    // Profile
    myProfile: 'My Profile',
    myBookings: 'My Bookings',
    editProfile: 'Edit Profile',
    changePassword: 'Change Password',
    
    // Password validation
    passwordRequirements: 'Password must be at least 6 characters',
    confirmPassword: 'Confirm Password',
    newPassword: 'New Password',
    currentPassword: 'Current Password',
    passwordsDoNotMatch: 'Passwords do not match',
    
    // Common
    loading: 'Loading...',
    saving: 'Saving...',
    processing: 'Processing...',
    success: 'Success',
    error: 'Error',
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save',
    saveChanges: 'Save Changes',
    
    // Hero section
    heroTitle: 'Luxury Apartments',
    heroSubtitle: 'Experience the perfect blend of comfort, elegance, and breathtaking ocean views in our premium vacation apartments.',
    exploreApartments: 'Explore Apartments',
    bookYourStay: 'Book Your Stay',
    
    // Features
    whyChoose: 'Why Choose Apartments Delfin?',
    whyChooseSubtitle: 'Discover the perfect combination of luxury, comfort, and convenience that makes our apartments the ideal choice for your vacation.',
    beachfrontLocation: 'Beachfront Location',
    beachfrontDesc: 'Direct access to pristine beach with crystal clear waters',
    oceanViews: 'Ocean Views',
    oceanViewsDesc: 'Panoramic ocean views from every apartment',
    swimmingPool: 'Swimming Pool',
    swimmingPoolDesc: 'Infinity pool overlooking the ocean',
    fullKitchen: 'Full Kitchen',
    fullKitchenDesc: 'Modern kitchens with premium appliances',
    freeWifi: 'Free WiFi',
    freeWifiDesc: 'High-speed internet throughout the property',
    freeParking: 'Free Parking',
    freeParkingDesc: 'Secure covered parking for all guests',
    
    // Apartments
    ourApartments: 'Our Apartment Collection',
    ourApartmentsSubtitle: 'Choose from our carefully curated selection of luxury apartments, each designed to provide the ultimate comfort and stunning ocean views.',
    guests: 'guests',
    guest: 'guest',
    beds: 'beds',
    bed: 'bed',
    baths: 'baths',
    bath: 'bath',
    photos: 'photos',
    night: 'night',
    viewDetailsBook: 'View Details & Book',
    viewDetails: 'View Details',
    more: 'more',
    
    // Booking
    bookYourStayTitle: 'Book Your Stay',
    checkinDate: 'Check-in Date',
    checkoutDate: 'Check-out Date',
    numberOfGuests: 'Number of Guests',
    selectGuests: 'Select number of guests',
    guestInformation: 'Guest Information',
    specialRequests: 'Special Requests',
    specialRequestsPlaceholder: 'Any special requests or requirements...',
    termsAndConditions: 'Terms & Conditions',
    agreeTermsText: 'I agree to the',
    termsOfService: 'Terms of Service',
    and: 'and',
    privacyPolicy: 'Privacy Policy',
    marketingOptIn: 'I would like to receive special offers and updates via email',
    confirmDetailsText: 'I confirm that all the information provided is accurate and complete',
    importantNotice: 'Important Notice',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. Cancellations within 48 hours are subject to a one-night charge.',
    bookingSummary: 'Booking Summary',
    nights: 'Nights',
    ratePerNight: 'Rate per night',
    subtotal: 'Subtotal',
    taxesFees: 'Taxes & Fees',
    total: 'Total',
    confirmBooking: 'Confirm Booking',
    bookingConfirmed: 'Booking Confirmed!',
    bookingConfirmedMessage: 'Thank you for your reservation. We\'ll contact you shortly with confirmation details.',
    
    // Calendar
    selectDates: 'Select Your Dates',
    checkin: 'Check-in',
    checkout: 'Check-out',
    clearDates: 'Clear Dates',
    available: 'Available',
    booked: 'Booked',
    selected: 'Selected',
    
    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    
    // Days
    sun: 'Sun',
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat'
  },
  
  // Add other languages with similar structure...
  cs: {
    // Navigation
    home: 'Domů',
    apartments: 'Apartmány',
    amenities: 'Vybavení',
    location: 'Poloha',
    contact: 'Kontakt',
    bookNow: 'Rezervovat',
    
    // Authentication
    signIn: 'Přihlásit se',
    signUp: 'Registrovat se',
    signOut: 'Odhlásit se',
    emailAddress: 'E-mailová adresa',
    password: 'Heslo',
    firstName: 'Jméno',
    lastName: 'Příjmení',
    phoneNumber: 'Telefonní číslo',
    optional: 'Volitelné',
    createAccount: 'Vytvořit účet',
    dontHaveAccount: 'Nemáte účet? Zaregistrujte se',
    alreadyHaveAccount: 'Již máte účet? Přihlaste se',
    forgotPassword: 'Zapomněli jste heslo?',
    resetPassword: 'Obnovit heslo',
    rememberMe: 'Zapamatovat si mě',
    
    // Email confirmation
    checkYourEmail: 'Zkontrolujte svůj e-mail',
    emailConfirmationSent: 'Poslali jsme vám potvrzovací odkaz na vaši e-mailovou adresu. Zkontrolujte prosím svůj e-mail a klikněte na odkaz pro ověření účtu.',
    emailConfirmationNote: 'Pokud e-mail nevidíte, zkontrolujte složku spam nebo to zkuste znovu.',
    resendConfirmation: 'Znovu odeslat potvrzovací e-mail',
    backToSignIn: 'Zpět k přihlášení',
    emailConfirmation: 'Potvrzení e-mailu',
    confirmingEmail: 'Potvrzujeme váš e-mail...',
    emailConfirmed: 'E-mail potvrzen!',
    emailConfirmedDesc: 'Váš e-mail byl úspěšně potvrzen. Nyní se můžete přihlásit ke svému účtu.',
    continueToSite: 'Pokračovat na stránku',
    confirmationFailed: 'Potvrzení selhalo',
    confirmationFailedDesc: 'Při potvrzování vašeho e-mailu došlo k chybě. Odkaz může být neplatný nebo vypršel.',
    backToHome: 'Zpět domů',
    tryAgain: 'Zkusit znovu',
    
    // Error messages
    invalidCredentials: 'Neplatný e-mail nebo heslo',
    emailNotConfirmed: 'Nejprve prosím potvrďte svou e-mailovou adresu',
    userAlreadyExists: 'Účet s tímto e-mailem již existuje',
    passwordTooShort: 'Heslo musí mít alespoň 6 znaků',
    invalidEmailFormat: 'Zadejte prosím platnou e-mailovou adresu',
    signupDisabled: 'Registrace účtu je momentálně zakázána',
    rateLimitError: 'Počkejte prosím před požadavkem na další potvrzovací e-mail',
    noEmailToResend: 'Žádná e-mailová adresa pro opětovné odeslání potvrzení',
    confirmationResent: 'Potvrzovací e-mail odeslán! Zkontrolujte prosím svou schránku.',
    
    // Profile
    myProfile: 'Můj profil',
    myBookings: 'Moje rezervace',
    editProfile: 'Upravit profil',
    changePassword: 'Změnit heslo',
    
    // Password validation
    passwordRequirements: 'Heslo musí mít alespoň 6 znaků',
    confirmPassword: 'Potvrdit heslo',
    newPassword: 'Nové heslo',
    currentPassword: 'Současné heslo',
    passwordsDoNotMatch: 'Hesla se neshodují',
    
    // Common
    loading: 'Načítání...',
    saving: 'Ukládání...',
    processing: 'Zpracování...',
    success: 'Úspěch',
    error: 'Chyba',
    close: 'Zavřít',
    cancel: 'Zrušit',
    save: 'Uložit',
    saveChanges: 'Uložit změny',
    
    // Hero section
    heroTitle: 'Luxusní apartmány',
    heroSubtitle: 'Zažijte dokonalou kombinaci pohodlí, elegance a úchvatných výhledů na oceán v našich prémiových prázdninových apartmánech.',
    exploreApartments: 'Prozkoumat apartmány',
    bookYourStay: 'Rezervovat pobyt',
    
    // Features
    whyChoose: 'Proč si vybrat Apartments Delfin?',
    whyChooseSubtitle: 'Objevte dokonalou kombinaci luxusu, pohodlí a praktičnosti, která dělá z našich apartmánů ideální volbu pro vaši dovolenou.',
    beachfrontLocation: 'Poloha na pláži',
    beachfrontDesc: 'Přímý přístup k nedotčené pláži s křišťálově čistou vodou',
    oceanViews: 'Výhledy na oceán',
    oceanViewsDesc: 'Panoramatické výhledy na oceán z každého apartmánu',
    swimmingPool: 'Bazén',
    swimmingPoolDesc: 'Nekonečný bazén s výhledem na oceán',
    fullKitchen: 'Plně vybavená kuchyň',
    fullKitchenDesc: 'Moderní kuchyně s prémiovými spotřebiči',
    freeWifi: 'Bezplatné WiFi',
    freeWifiDesc: 'Vysokorychlostní internet v celém objektu',
    freeParking: 'Bezplatné parkování',
    freeParkingDesc: 'Zabezpečené kryté parkování pro všechny hosty',
    
    // Apartments
    ourApartments: 'Naše kolekce apartmánů',
    ourApartmentsSubtitle: 'Vyberte si z naší pečlivě vybrané kolekce luxusních apartmánů, každý navržený tak, aby poskytoval maximální pohodlí a úžasné výhledy na oceán.',
    guests: 'hostů',
    guest: 'host',
    beds: 'postelí',
    bed: 'postel',
    baths: 'koupelen',
    bath: 'koupelna',
    photos: 'fotografií',
    night: 'noc',
    viewDetailsBook: 'Zobrazit detaily a rezervovat',
    viewDetails: 'Zobrazit detaily',
    more: 'více',
    
    // Booking
    bookYourStayTitle: 'Rezervujte si pobyt',
    checkinDate: 'Datum příjezdu',
    checkoutDate: 'Datum odjezdu',
    numberOfGuests: 'Počet hostů',
    selectGuests: 'Vyberte počet hostů',
    guestInformation: 'Informace o hostovi',
    specialRequests: 'Speciální požadavky',
    specialRequestsPlaceholder: 'Jakékoli speciální požadavky nebo potřeby...',
    termsAndConditions: 'Podmínky a ustanovení',
    agreeTermsText: 'Souhlasím s',
    termsOfService: 'Podmínkami služby',
    and: 'a',
    privacyPolicy: 'Zásadami ochrany osobních údajů',
    marketingOptIn: 'Chtěl bych dostávat speciální nabídky a aktualizace e-mailem',
    confirmDetailsText: 'Potvrzuji, že všechny poskytnuté informace jsou přesné a úplné',
    importantNotice: 'Důležité upozornění',
    cancellationPolicy: 'Bezplatné zrušení až 48 hodin před příjezdem. Zrušení do 48 hodin podléhá poplatku za jednu noc.',
    bookingSummary: 'Shrnutí rezervace',
    nights: 'Noci',
    ratePerNight: 'Cena za noc',
    subtotal: 'Mezisoučet',
    taxesFees: 'Daně a poplatky',
    total: 'Celkem',
    confirmBooking: 'Potvrdit rezervaci',
    bookingConfirmed: 'Rezervace potvrzena!',
    bookingConfirmedMessage: 'Děkujeme za vaši rezervaci. Brzy vás budeme kontaktovat s podrobnostmi o potvrzení.',
    
    // Calendar
    selectDates: 'Vyberte své datumy',
    checkin: 'Příjezd',
    checkout: 'Odjezd',
    clearDates: 'Vymazat datumy',
    available: 'Dostupné',
    booked: 'Rezervováno',
    selected: 'Vybráno',
    
    // Months
    january: 'Leden',
    february: 'Únor',
    march: 'Březen',
    april: 'Duben',
    may: 'Květen',
    june: 'Červen',
    july: 'Červenec',
    august: 'Srpen',
    september: 'Září',
    october: 'Říjen',
    november: 'Listopad',
    december: 'Prosinec',
    
    // Days
    sun: 'Ne',
    mon: 'Po',
    tue: 'Út',
    wed: 'St',
    thu: 'Čt',
    fri: 'Pá',
    sat: 'So'
  },
  
  // Add placeholders for other languages
  sk: { home: 'Domov' },
  pl: { home: 'Dom' },
  fr: { home: 'Accueil' },
  it: { home: 'Casa' },
  de: { home: 'Startseite' },
  uk: { home: 'Головна' },
  ru: { home: 'Главная' }
};

let currentLanguage: SupportedLanguage = 'en';

export function getCurrentLanguage(): SupportedLanguage {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language') as SupportedLanguage;
    if (stored && supportedLanguages.some(lang => lang.code === stored)) {
      currentLanguage = stored;
    }
  }
  return currentLanguage;
}

export function setLanguage(lang: SupportedLanguage): void {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }
}

export function t(key: string): string {
  const lang = getCurrentLanguage();
  return translations[lang]?.[key] || translations.en[key] || key;
}

// Initialize language on load
if (typeof window !== 'undefined') {
  getCurrentLanguage();
}