import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNazel } from "../api";
import { toast } from "sonner";

export function useDeleteNazel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNazel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nazels"] });
      toast.success("Nazel deleted successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
