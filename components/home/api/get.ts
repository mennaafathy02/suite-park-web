import { api } from "@/lib/api";

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string; // Adjust based on your needs
  [key: string]: unknown; // <--- Add this line
}

export interface ContactResponse extends ContactRequest {
  id: number;
  updated_at: string;
  created_at: string;
}

/**
 * Submits contact form data or newsletter subscription
 */
export async function sendContactMessage(data: ContactRequest) {
  // Using the /contacts endpoint as requested
  const response = await api.post<ContactResponse>("contacts", data);
  return response;
}
