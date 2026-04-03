import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNazel } from "../api";
import { toast } from "sonner";

export function useUpdateNazel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNazel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nazels"] });
      toast.success("Nazel updated successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
