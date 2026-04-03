import { useQuery } from "@tanstack/react-query";
import { filterNazels } from "../api";

export function useFilterNazels(params: {
  name_ar?: string;
  name_en?: string;
}) {
  return useQuery({
    queryKey: ["nazels", "filter", params],
    queryFn: () => filterNazels(params),
    enabled: !!(params.name_ar || params.name_en),
  });
}
