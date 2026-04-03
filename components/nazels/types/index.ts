import type { Room } from "@/components/rooms/types";

export interface Nazel {
  id: number;
  name_ar: string;
  name_en: string;
  created_at: string;
  updated_at: string;
}

export interface NazelWithRooms extends Nazel {
  rooms: Room[];
}

export interface NazelFilterResponse {
  status: boolean;
  data: NazelWithRooms[];
}

export interface NazelFormData {
  name_ar: string;
  name_en: string;
}

export interface NazelListResponse {
  status: boolean;
  data: Nazel[];
}

export interface NazelMutationResponse {
  status: boolean;
  message?: string;
  data: Nazel;
}
