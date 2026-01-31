export interface Property {
  id: string;
  slug: string;
  title: string;
  location: {
    district: string;
    taluk?: string;
    village?: string;
  };
  landType: "farm" | "investment" | "industrial" | "temple";
  size: {
    acres: number;
    cents: number;
  };
  idealFor: string[];
  price?: number;
  priceDisplay: string;
  images: string[];
  verification: {
    patta: boolean;
    encumbrance: boolean;
    surveyed: boolean;
  };
  details: {
    accessRoad: string;
    water: string;
    electricity: string;
    distanceToTemple?: number;
    distanceToHighway?: number;
    distanceToTown?: number;
  };
  legal: {
    title: string;
    conversionStatus?: string;
    restrictions?: string[];
  };
  connectivity: string[];
  investmentThesis: string[];
}



