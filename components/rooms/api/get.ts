import { api } from "@/lib/api";
import type { RoomApiResponse, RoomsApiResponse } from "../types";

export function getRooms(params?: { page?: number; per_page?: number }) {
  // CORRECT: Pass 'params' directly as the second argument
  return api.get<RoomsApiResponse>("rooms", { params });
}

export function getRoom(id: string) {
  return api.get<RoomApiResponse>(`rooms/${id}`);
}
 
 