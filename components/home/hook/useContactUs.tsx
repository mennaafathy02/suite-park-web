/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ContactFormValues, contactSchema } from "../newsletter";
import { sendContactMessage } from "../api/get";

export const useContactUs = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "contactus",
    },
  });

  const mutation = useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => {
      toast.success("Message sent successfully!");
      form.reset();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to send message");
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // data.type is already "contactus" from defaultValues
    mutation.mutate(data);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading: mutation.isPending,
  };
};