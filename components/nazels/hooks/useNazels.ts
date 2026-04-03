import { useQuery } from "@tanstack/react-query";
import { getNazels } from "../api";

export function useNazels() {
  return useQuery({
    queryKey: ["nazels"],
    queryFn: getNazels,
  });
}
