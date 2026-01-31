// Import images
import paddyFieldsImage from "@/assets/images/farms/paddy-fields.jpg";
import arunachalaTempleImage from "@/assets/images/temples/arunachala-temple.jpg";
import heritageStreetImage from "@/assets/images/streets/heritage-street.jpg";
import industrialFacilityImage from "@/assets/images/factories/industrial-facility.jpg";

// Property Types
export type Region = "thiruvannamalai" | "kallakurichi" | "villupuram" | "sankarapuram";
export type VerificationStatus = "not_verified" | "in_progress" | "verified";
export type BuyerProgressStage = "listed" | "interest" | "token" | "sold";
export type UseCase = "residential" | "agriculture" | "industrial" | "mixed_use";
export type ImageCategory = "land" | "road" | "landmark" | "lifestyle";

export interface PropertyImage {
  src: string;
  alt: {
    en: string;
    ta: string;
  };
  category: ImageCategory;
}

export interface Connectivity {
  distance: string;
  time: string;
}

export interface BuyerProgress {
  stage: BuyerProgressStage;
  interestedBuyers?: number;
}

export interface Property {
  id: string;
  slug: string;
  title: {
    en: string;
    ta: string;
  };
  tagline: {
    en: string;
    ta: string;
  };
  region: Region;
  area: {
    value: number;
    unit: "acres" | "cents";
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  verification: VerificationStatus;
  buyerProgress: BuyerProgress;
  overview: {
    en: string;
    ta: string;
  };
  useCases: UseCase[];
  useCaseDetails: {
    [key in UseCase]?: {
      en: string;
      ta: string;
    };
  };
  connectivity: {
    chennai: Connectivity;
    bengaluru: Connectivity;
    salem: Connectivity;
    nearestHighway?: string;
    nearestRailway?: string;
  };
  images: PropertyImage[];
  createdAt: string;
  updatedAt: string;
}

// Sample Properties Data
export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "arunachala-view-agricultural-land",
    title: {
      en: "Arunachala View Agricultural Land",
      ta: "அருணாசலா காட்சி விவசாய நிலம்",
    },
    tagline: {
      en: "5.2 acres of fertile agricultural land with panoramic views of the sacred Arunachala Hill",
      ta: "புனித அருணாச்சலா மலையின் பரந்த காட்சியுடன் 5.2 ஏக்கர் வளமான விவசாய நிலம்",
    },
    region: "thiruvannamalai",
    area: {
      value: 5.2,
      unit: "acres",
    },
    coordinates: {
      lat: 12.2253,
      lng: 79.0747,
    },
    verification: "verified",
    buyerProgress: {
      stage: "interest",
      interestedBuyers: 3,
    },
    overview: {
      en: `This exceptional 5.2-acre parcel represents a rare opportunity to acquire agricultural land within visual proximity of Arunachala Hill, one of India's most revered spiritual landmarks. The property benefits from established irrigation infrastructure and fertile soil composition suited for diverse cultivation, from traditional crops to high-value horticulture.

The strategic positioning offers both agricultural utility and long-term appreciation potential as Thiruvannamalai's infrastructure continues to develop. The parcel maintains clear title documentation spanning three generations, with all encumbrances resolved and verified by our legal team.

For investors seeking land that combines productive agricultural capacity with spiritual significance and future development optionality, this property presents a compelling thesis. The proximity to the Girivalam path—circumambulated by millions annually—adds a dimension of cultural capital rarely available in land acquisitions.`,
      ta: `இந்த அசாதாரணமான 5.2 ஏக்கர் நிலம், இந்தியாவின் மிகவும் மதிக்கப்படும் ஆன்மீக அடையாளங்களில் ஒன்றான அருணாச்சலா மலையின் காட்சி தூரத்தில் விவசாய நிலத்தை வாங்க அரிய வாய்ப்பை வழங்குகிறது. இந்த சொத்து நிறுவப்பட்ட நீர்ப்பாசன உள்கட்டமைப்பு மற்றும் பாரம்பரிய பயிர்கள் முதல் உயர் மதிப்பு தோட்டக்கலை வரை பல்வேறு சாகுபடிக்கு ஏற்ற வளமான மண் கலவையிலிருந்து பயனடைகிறது.

திருவண்ணாமலையின் உள்கட்டமைப்பு தொடர்ந்து வளரும்போது மூலோபாய நிலைப்படுத்தல் விவசாய பயன்பாடு மற்றும் நீண்டகால மதிப்பீட்டு திறன் இரண்டையும் வழங்குகிறது. இந்த நிலம் மூன்று தலைமுறைகளாக தெளிவான உரிமை ஆவணங்களை பராமரிக்கிறது, அனைத்து சுமைகளும் எங்கள் சட்ட குழுவால் தீர்க்கப்பட்டு சரிபார்க்கப்பட்டன.

உற்பத்தி விவசாய திறன், ஆன்மீக முக்கியத்துவம் மற்றும் எதிர்கால வளர்ச்சி விருப்பங்களை இணைக்கும் நிலத்தை தேடும் முதலீட்டாளர்களுக்கு, இந்த சொத்து கவர்ச்சிகரமான ஆய்வறிக்கையை முன்வைக்கிறது.`,
    },
    useCases: ["agriculture", "residential", "mixed_use"],
    useCaseDetails: {
      agriculture: {
        en: "Ideal for organic farming, mango orchards, or high-value vegetable cultivation. Existing borewell and channel irrigation support year-round cultivation.",
        ta: "கரிம விவசாயம், மாம்பழத் தோட்டங்கள் அல்லது உயர் மதிப்பு காய்கறி சாகுபடிக்கு ஏற்றது. ஆண்டு முழுவதும் சாகுபடிக்கு ஆதரவாக ஆழ்துளை கிணறு மற்றும் கால்வாய் நீர்ப்பாசனம் உள்ளது.",
      },
      residential: {
        en: "Suitable for a premium farmhouse or villa development with unobstructed mountain views. Zoning permits residential construction with agricultural retention.",
        ta: "தடையற்ற மலைக் காட்சிகளுடன் பிரீமியம் பண்ணை வீடு அல்லது வில்லா வளர்ச்சிக்கு ஏற்றது. விவசாய தக்கவைப்புடன் குடியிருப்பு கட்டுமானத்தை மண்டல அனுமதிகள் அனுமதிக்கின்றன.",
      },
      mixed_use: {
        en: "Long-term hold strategy for future appreciation as Thiruvannamalai develops into a regional hub. Current agricultural income provides holding cost offset.",
        ta: "திருவண்ணாமலை பிராந்திய மையமாக வளரும்போது எதிர்கால மதிப்பீட்டிற்கான நீண்டகால பிடிப்பு உத்தி. தற்போதைய விவசாய வருமானம் வைத்திருப்பு செலவு ஈடுசெய்தலை வழங்குகிறது.",
      },
    },
    connectivity: {
      chennai: { distance: "185 km", time: "3.5 hours" },
      bengaluru: { distance: "210 km", time: "4 hours" },
      salem: { distance: "110 km", time: "2.5 hours" },
      nearestHighway: "NH48 (Chennai-Bengaluru Highway) - 12 km",
      nearestRailway: "Thiruvannamalai Railway Station - 8 km",
    },
    images: [
      {
        src: paddyFieldsImage,
        alt: {
          en: "Panoramic view of agricultural land with Arunachala Hill in background",
          ta: "பின்னணியில் அருணாச்சலா மலையுடன் விவசாய நிலத்தின் பரந்த காட்சி",
        },
        category: "land",
      },
      {
        src: arunachalaTempleImage,
        alt: {
          en: "View of Arunachaleswarar Temple from the property vicinity",
          ta: "சொத்தின் அருகிலிருந்து அருணாச்சலேஸ்வரர் கோவிலின் காட்சி",
        },
        category: "landmark",
      },
      {
        src: heritageStreetImage,
        alt: {
          en: "Access road leading to the property",
          ta: "சொத்துக்கு செல்லும் அணுகல் சாலை",
        },
        category: "road",
      },
    ],
    createdAt: "2024-01-15",
    updatedAt: "2024-02-20",
  },
  {
    id: "prop-002",
    slug: "kallakurichi-industrial-plot",
    title: {
      en: "Kallakurichi Industrial Corridor Plot",
      ta: "கள்ளக்குறிச்சி தொழில்துறை நடைபாதை நிலம்",
    },
    tagline: {
      en: "12 acres of industrial-zoned land on the emerging Chennai-Salem corridor",
      ta: "வளர்ந்து வரும் சென்னை-சேலம் நடைபாதையில் 12 ஏக்கர் தொழில்துறை மண்டல நிலம்",
    },
    region: "kallakurichi",
    area: {
      value: 12,
      unit: "acres",
    },
    coordinates: {
      lat: 11.7384,
      lng: 78.9615,
    },
    verification: "in_progress",
    buyerProgress: {
      stage: "listed",
    },
    overview: {
      en: `This 12-acre industrial-zoned parcel is positioned at the nexus of Tamil Nadu's emerging manufacturing belt. Kallakurichi, as a newly formed district, offers compelling valuations relative to established industrial zones while benefiting from improving infrastructure connectivity.

The property features road frontage along a state highway with planned widening, ensuring future logistics efficiency. The terrain is level and suitable for manufacturing facility construction without significant grading requirements. Existing power infrastructure with 11kV line access reduces development timeline.

Government incentives for industries establishing in newly formed districts provide additional investment merit. The parcel is positioned within the influence zone of the Chennai-Salem Expressway, which will dramatically reduce transit times to both Chennai port and Bengaluru upon completion.`,
      ta: `இந்த 12 ஏக்கர் தொழில்துறை மண்டல நிலம் தமிழ்நாட்டின் வளர்ந்து வரும் உற்பத்தி பெல்ட்டின் மையத்தில் அமைந்துள்ளது. கள்ளக்குறிச்சி, புதிதாக உருவாக்கப்பட்ட மாவட்டமாக, நிறுவப்பட்ட தொழில்துறை மண்டலங்களுடன் ஒப்பிடும்போது கவர்ச்சிகரமான மதிப்பீடுகளை வழங்குகிறது, அதே நேரத்தில் மேம்படுத்தப்பட்ட உள்கட்டமைப்பு இணைப்பிலிருந்து பயனடைகிறது.

இந்த சொத்து திட்டமிடப்பட்ட விரிவாக்கத்துடன் மாநில நெடுஞ்சாலையில் சாலை முகப்பைக் கொண்டுள்ளது, இது எதிர்கால தளவாட செயல்திறனை உறுதி செய்கிறது. நிலப்பரப்பு சமநிலையானது மற்றும் குறிப்பிடத்தக்க தரநிலை தேவைகள் இல்லாமல் உற்பத்தி வசதி கட்டுமானத்திற்கு ஏற்றது.`,
    },
    useCases: ["industrial", "mixed_use"],
    useCaseDetails: {
      industrial: {
        en: "Optimal for manufacturing, warehousing, or logistics hub development. Industrial zoning with SIPCOT adjacency offers streamlined approvals.",
        ta: "உற்பத்தி, கிடங்கு அல்லது தளவாட மைய வளர்ச்சிக்கு உகந்தது. SIPCOT அருகாமையுடன் தொழில்துறை மண்டலம் எளிமைப்படுத்தப்பட்ட ஒப்புதல்களை வழங்குகிறது.",
      },
      mixed_use: {
        en: "Strategic land banking opportunity as corridor development accelerates. Industrial income potential with long-term residential conversion optionality.",
        ta: "நடைபாதை வளர்ச்சி துரிதப்படுத்தும்போது மூலோபாய நிலம் வங்கி வாய்ப்பு. நீண்டகால குடியிருப்பு மாற்ற விருப்பத்துடன் தொழில்துறை வருமான சாத்தியம்.",
      },
    },
    connectivity: {
      chennai: { distance: "220 km", time: "4 hours" },
      bengaluru: { distance: "180 km", time: "3.5 hours" },
      salem: { distance: "65 km", time: "1.5 hours" },
      nearestHighway: "Chennai-Salem Expressway (under construction) - 5 km",
      nearestRailway: "Kallakurichi Railway Station - 3 km",
    },
    images: [
      {
        src: industrialFacilityImage,
        alt: {
          en: "Industrial corridor development potential visualization",
          ta: "தொழில்துறை நடைபாதை வளர்ச்சி திறன் காட்சிப்படுத்தல்",
        },
        category: "land",
      },
    ],
    createdAt: "2024-02-01",
    updatedAt: "2024-02-25",
  },
  {
    id: "prop-003",
    slug: "villupuram-logistics-hub",
    title: {
      en: "Villupuram Railway Junction Land",
      ta: "விழுப்புரம் இரயில் சந்திப்பு நிலம்",
    },
    tagline: {
      en: "8.5 acres near major railway junction ideal for warehousing and distribution",
      ta: "கிடங்கு மற்றும் விநியோகத்திற்கு ஏற்ற முக்கிய இரயில் சந்திப்பு அருகே 8.5 ஏக்கர்",
    },
    region: "villupuram",
    area: {
      value: 8.5,
      unit: "acres",
    },
    coordinates: {
      lat: 11.9395,
      lng: 79.4924,
    },
    verification: "verified",
    buyerProgress: {
      stage: "token",
    },
    overview: {
      en: `Villupuram represents one of Tamil Nadu's most strategically positioned railway junctions, serving as a critical node in the southern rail network. This 8.5-acre parcel, located within 2 kilometers of the junction, offers exceptional logistics and warehousing potential.

The property's positioning enables multi-modal connectivity—rail for long-haul freight and road for last-mile distribution. The Chennai port is accessible within 3 hours, making this an optimal location for import-export related warehousing and manufacturing.

Title verification has been completed with clear documentation. The seller is a single family with three-generation ownership, eliminating complexity often associated with multi-owner parcels. DTCP approval pathway is established for commercial development.`,
      ta: `விழுப்புரம் தமிழ்நாட்டின் மிகவும் மூலோபாயமாக நிலைநிறுத்தப்பட்ட இரயில் சந்திப்புகளில் ஒன்றை பிரதிநிதித்துவப்படுத்துகிறது, தெற்கு இரயில் வலையமைப்பில் முக்கியமான முனையாக செயல்படுகிறது. இந்த 8.5 ஏக்கர் நிலம், சந்திப்பிலிருந்து 2 கிலோமீட்டர் தூரத்தில் அமைந்துள்ளது, இது அசாதாரணமான தளவாட மற்றும் கிடங்கு திறனை வழங்குகிறது.

சொத்தின் நிலைப்படுத்தல் பல்முறை இணைப்பை செயல்படுத்துகிறது—நீண்ட தூர சரக்குக்கு இரயில் மற்றும் கடைசி மைல் விநியோகத்திற்கு சாலை. சென்னை துறைமுகம் 3 மணி நேரத்தில் அணுகக்கூடியது, இது இறக்குமதி-ஏற்றுமதி தொடர்பான கிடங்கு மற்றும் உற்பத்திக்கு உகந்த இடமாக அமைகிறது.`,
    },
    useCases: ["industrial", "mixed_use"],
    useCaseDetails: {
      industrial: {
        en: "Prime location for warehousing, cold storage, or distribution center. Rail siding potential for direct freight access.",
        ta: "கிடங்கு, குளிர் சேமிப்பு அல்லது விநியோக மையத்திற்கு முதன்மை இடம். நேரடி சரக்கு அணுகலுக்கு இரயில் பக்க திறன்.",
      },
      mixed_use: {
        en: "Commercial development with retail and logistics combination. Growing town center provides rental income potential.",
        ta: "சில்லறை மற்றும் தளவாட கலவையுடன் வணிக வளர்ச்சி. வளரும் நகர மையம் வாடகை வருமான திறனை வழங்குகிறது.",
      },
    },
    connectivity: {
      chennai: { distance: "160 km", time: "3 hours" },
      bengaluru: { distance: "280 km", time: "5 hours" },
      salem: { distance: "140 km", time: "3 hours" },
      nearestHighway: "NH32 - 1 km",
      nearestRailway: "Villupuram Junction - 2 km",
    },
    images: [
      {
        src: industrialFacilityImage,
        alt: {
          en: "Land near Villupuram railway junction with logistics potential",
          ta: "தளவாட திறனுடன் விழுப்புரம் இரயில் சந்திப்பு அருகே நிலம்",
        },
        category: "land",
      },
    ],
    createdAt: "2024-01-20",
    updatedAt: "2024-03-01",
  },
  {
    id: "prop-004",
    slug: "sankarapuram-emerging-opportunity",
    title: {
      en: "Sankarapuram Growth Corridor Land",
      ta: "சங்கராபுரம் வளர்ச்சி நடைபாதை நிலம்",
    },
    tagline: {
      en: "25 acres of untouched land in an emerging taluk with exceptional long-term potential",
      ta: "அசாதாரண நீண்டகால திறனுடன் வளர்ந்து வரும் தாலுகாவில் 25 ஏக்கர் தொடப்படாத நிலம்",
    },
    region: "sankarapuram",
    area: {
      value: 25,
      unit: "acres",
    },
    coordinates: {
      lat: 11.8834,
      lng: 78.8912,
    },
    verification: "not_verified",
    buyerProgress: {
      stage: "listed",
    },
    overview: {
      en: `Sankarapuram represents the patient capital thesis—an emerging taluk where infrastructure development is underway but land valuations have not yet reflected future potential. This 25-acre parcel offers scale rarely available in more developed regions.

The taluk is positioned between the established centers of Kallakurichi and Villupuram, benefiting from spillover development as those regions reach capacity constraints. Road infrastructure improvements are in planning stages, with state highway upgrades expected within 3-5 years.

For investors with a 7-10 year horizon and patience for gradual appreciation, Sankarapuram offers entry points significantly below neighboring taluks. The property is suitable for agricultural income generation during the holding period, providing cost offset while awaiting development catalysts.`,
      ta: `சங்கராபுரம் பொறுமையான மூலதன ஆய்வறிக்கையை பிரதிநிதித்துவப்படுத்துகிறது—உள்கட்டமைப்பு வளர்ச்சி நடந்து கொண்டிருக்கும் ஆனால் நில மதிப்பீடுகள் இன்னும் எதிர்கால திறனை பிரதிபலிக்கவில்லை என்ற வளர்ந்து வரும் தாலுகா. இந்த 25 ஏக்கர் நிலம் மேலும் வளர்ந்த பகுதிகளில் அரிதாகக் கிடைக்கும் அளவை வழங்குகிறது.

இந்த தாலுகா கள்ளக்குறிச்சி மற்றும் விழுப்புரம் ஆகிய நிறுவப்பட்ட மையங்களுக்கு இடையில் அமைந்துள்ளது, அந்த பகுதிகள் திறன் கட்டுப்பாடுகளை அடையும்போது நிரம்பி வழியும் வளர்ச்சியிலிருந்து பயனடைகிறது. சாலை உள்கட்டமைப்பு மேம்பாடுகள் திட்டமிடல் நிலைகளில் உள்ளன, 3-5 ஆண்டுகளுக்குள் மாநில நெடுஞ்சாலை மேம்பாடுகள் எதிர்பார்க்கப்படுகின்றன.`,
    },
    useCases: ["agriculture", "mixed_use"],
    useCaseDetails: {
      agriculture: {
        en: "Large-scale agricultural operation potential—coconut plantation, mango orchard, or contract farming. Water table is accessible at reasonable depths.",
        ta: "பெரிய அளவிலான விவசாய செயல்பாட்டு திறன்—தென்னை தோட்டம், மாம்பழ தோட்டம் அல்லது ஒப்பந்த விவசாயம். நீர் மட்டம் நியாயமான ஆழங்களில் அணுகக்கூடியது.",
      },
      mixed_use: {
        en: "Strategic land banking with 7-10 year horizon. Agricultural income during hold period with future residential or commercial conversion potential.",
        ta: "7-10 வருட எல்லையுடன் மூலோபாய நில வங்கி. எதிர்கால குடியிருப்பு அல்லது வணிக மாற்ற திறனுடன் வைத்திருப்பு காலத்தில் விவசாய வருமானம்.",
      },
    },
    connectivity: {
      chennai: { distance: "240 km", time: "4.5 hours" },
      bengaluru: { distance: "160 km", time: "3 hours" },
      salem: { distance: "45 km", time: "1 hour" },
      nearestHighway: "SH87 - 8 km",
      nearestRailway: "Attur Railway Station - 20 km",
    },
    images: [
      {
        src: paddyFieldsImage,
        alt: {
          en: "Expansive agricultural land in Sankarapuram with development potential",
          ta: "வளர்ச்சி திறனுடன் சங்கராபுரத்தில் விரிவான விவசாய நிலம்",
        },
        category: "land",
      },
    ],
    createdAt: "2024-02-10",
    updatedAt: "2024-02-28",
  },
];

// Helper functions
export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((p) => p.slug === slug);
};

export const getPropertiesByRegion = (region: Region): Property[] => {
  return properties.filter((p) => p.region === region);
};

export const getPropertiesByUseCase = (useCase: UseCase): Property[] => {
  return properties.filter((p) => p.useCases.includes(useCase));
};

export const getPropertiesByVerification = (status: VerificationStatus): Property[] => {
  return properties.filter((p) => p.verification === status);
};

export const getFilteredProperties = (filters: {
  region?: Region;
  useCase?: UseCase;
  verification?: VerificationStatus;
}): Property[] => {
  return properties.filter((p) => {
    if (filters.region && p.region !== filters.region) return false;
    if (filters.useCase && !p.useCases.includes(filters.useCase)) return false;
    if (filters.verification && p.verification !== filters.verification) return false;
    return true;
  });
};
