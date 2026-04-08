export type SortType = "recommended" | "price-asc" | "price-desc" | "rating";

export interface RoomImage {
  id: number;
  name: string;
  path: string;
  type: string;
  room_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface Amenities {
  id: number;
  name_ar: string;
  name_en: string;
  image_id: number;
  created_at: string;
  updated_at: string;
  details?: {
    room_id: number;
    amenity_id: number;
    number: number;
    value: string;
    created_at: string;
    updated_at: string;
  };
  image?: {
    id: number;
    name: string;
    path: string;
    type: string;
    room_id: number | null;
    created_at: string;
    updated_at: string;
  } | null;
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
  min_price: number;
  max_price: number;
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
  thumbnails?: RoomImage[];
  images?: RoomImage[];
  amenities: Amenities[];
}

export interface CreateRoomBody {
  name_ar: string;
  name_en: string;
  stars: number;
  location_ar: string;
  location_en: string;
  description_ar: string;
  description_en: string;
  min_price: number;
  max_price: number;
  type_id: number;
  type_name_ar: string;
  type_name_en: string;
  wehda_name_ar: string;
  wehda_name_en: string;
  area: number;
  look_ar: string;
  look_en: string;
  nazel_name_id: number;
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
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export type RoomApiResponse = Room;
