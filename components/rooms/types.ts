export interface Place {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  badges: string[];
  tags: string[];
  features: string[];
  rating: number;
}

export type SortType = "recommended" | "price-asc" | "price-desc" | "rating";

export interface CardProps {
  place: Place;
  onToggleFav: (id: number) => void;
  isFav: boolean;
}
