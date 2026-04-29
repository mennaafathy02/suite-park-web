import { useQuery } from "@tanstack/react-query";
import { getImagesByType, getPolicy } from "./api";

export function usePolicy() {
  return useQuery({
    queryKey: ["policy"],
    queryFn: getPolicy,
    retry: false,
  });
}

export function useImagesByType(type: string) {
  return useQuery({
    queryKey: ["images", "type", type],
    queryFn: () => getImagesByType(type),
    enabled: !!type,
    retry: false,
  });
}
