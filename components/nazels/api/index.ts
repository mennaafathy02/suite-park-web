import { api } from "@/lib/api";
import type {
  NazelListResponse,
  NazelMutationResponse,
  NazelFormData,
  NazelFilterResponse,
} from "../types";

export function getNazels() {
  return api.get<NazelListResponse>("nazels");
}

export function getNazel(id: number) {
  return api.get<NazelMutationResponse>(`nazels/${id}`);
}

export function createNazel(data: NazelFormData) {
  return api.post<NazelMutationResponse>("nazels", { ...data });
}

export function updateNazel({ id, data }: { id: number; data: NazelFormData }) {
  return api.put<NazelMutationResponse>(`nazels/${id}`, { ...data });
}

export function deleteNazel(id: number) {
  return api.delete<NazelMutationResponse>(`nazels/${id}`);
}

export function filterNazels(params: { name_ar?: string; name_en?: string }) {
  return api.get<NazelFilterResponse>("nazels/filter", { params });
}
