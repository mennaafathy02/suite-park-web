import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getRoom } from "../api/get";

export function useGetRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: getRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });
}
