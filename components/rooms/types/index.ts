export type SortType = "recommended" | "price-asc" | "price-desc" | "rating";

export interface Amenities {
  id: number;
  name_ar: string;
  name_en: string;
  image_id: number;
  created_at: string;
  updated_at: string;
  image: {
    id: number;
    name: string;
    path: string;
    type: string;
    room_id: number;
    created_at: string;
    updated_at: string;
  };
}
export interface Room {
  id: number;
  name_ar: string;
  name_en: string;
  stars: number;
  location_ar: string;
  location_en: string;
  description_ar: string;
  description_en: string;
  max_price: number;
  min_price: number;
  type_id: number;
  type_name_ar: string;
  type_name_en: string;
  wehda_name_ar: string;
  wehda_name_en: string;
  area: string;
  look_ar: string;
  look_en: string;
  created_at: string;
  updated_at: string;
  images: {
    id: number;
    name: string;
    path: string;
    type: string;
    room_id: number;
    created_at: string;
    updated_at: string;
  }[];
  amenities: Amenities[];
}

export interface RoomsApiResponse {
  current_page: number;
  data: Room[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
  }[];
  next_page_url: number;
  path: string;
  per_page: number;
  prev_page_url: number;
  to: number;
  total: number;
}
export type RoomApiResponse = Room;
