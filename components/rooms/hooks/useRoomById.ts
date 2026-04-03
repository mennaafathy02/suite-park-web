import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../api/get";

export function useRoomById(id: string) {
  return useQuery({
    queryKey: ["room", id],
    queryFn: () => getRoom(id),
    enabled: !!id,
  });
}
