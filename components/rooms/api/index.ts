import { api } from "@/lib/api";
import type {
  LoginResponse,
  RegisterationResponse,
  VerifyCodeResponse,
  ResendVerificationResponse,
  ResetPasswordResponse,
  VerifyResetCodeResponse,
  SetNewPasswordResponse,
} from "../types/auth-form-types";

export interface RegisterData {
  image : File;
  phone: string;
  email: string;
  password: string;
  name: string;
  first_name: string;
  last_name: string;
  commercial_register: string;
  address: string;
  [key: string]: unknown;
  
}

export interface VerifyEmailData {
  email: string;
  verification_code: string;
  [key: string]: unknown;
}

export interface ResendVerificationData {
  email: string;
  [key: string]: unknown;
}

// Auth endpoints use skipAuthRedirect to prevent global 401 handling
// (401 on login means "wrong credentials", not "session expired")
const authRequestOptions = { skipAuthRedirect: true };

export async function login(data: { email: string; password: string }) {
  const response = await api.post<LoginResponse>("auth/company/login", data, authRequestOptions);
  return response;
}

export async function register(data: FormData) {
  const response = await api.post<RegisterationResponse>(
    "auth/company/register",
    data,
    authRequestOptions
  );
  return response;
}

export async function verifyEmail(data: VerifyEmailData) {
  const response = await api.post<VerifyCodeResponse>(
    "auth/company/verify-email",
    data,
    authRequestOptions
  );
  return response;
}

export async function resendVerification(data: ResendVerificationData) {
  const response = await api.post<ResendVerificationResponse>(
    "auth/company/resend-verification",
    data,
    authRequestOptions
  );
  return response;
}

// Password Reset APIs
export interface RequestPasswordResetData {
  email: string;
  [key: string]: unknown;
}

export interface VerifyResetCodeData {
  email: string;
  verification_code: string;
  [key: string]: unknown;
}

export interface SetNewPasswordData {
  reset_token: string;
  new_password: string;
  confirm_password: string;
  [key: string]: unknown;
}

export async function requestPasswordReset(data: RequestPasswordResetData) {
  const response = await api.post<ResetPasswordResponse>(
    "auth/company/reset-password",
    data,
    authRequestOptions
  );
  return response;
}

export async function verifyResetCode(data: VerifyResetCodeData) {
  const response = await api.post<VerifyResetCodeResponse>(
    "auth/company/verify-reset-code",
    data,
    authRequestOptions
  );
  return response;
}

export async function setNewPassword(data: SetNewPasswordData) {
  const response = await api.post<SetNewPasswordResponse>(
    "auth/company/set-new-password",
    data,
    authRequestOptions
  );
  return response;
}
