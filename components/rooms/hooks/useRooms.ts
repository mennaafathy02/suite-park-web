import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api/get";

// Fetch all rooms
export function useRooms(
  params?: { page?: number; per_page?: number },
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ["rooms", params],
    queryFn: () => getRooms(params),
    enabled: options?.enabled ?? true,
  });
}
