import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNazel } from "../api";
import { toast } from "sonner";

export function useCreateNazel() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNazel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nazels"] });
      toast.success("Nazel created successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
