import { api } from "@/lib/api";
import type { ApiImage, PolicyResponse } from "./types";

export function getPolicy() {
  return api.get<PolicyResponse>("policy");
}

export function getImagesByType(type: string) {
  return api.get<ApiImage[]>(`images/type/${type}`);
}
