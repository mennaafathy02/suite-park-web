import { ApiResponseBase } from "@/types/global";

export interface AuthFormProps {
  type: "login" | "otp" | "reset" | "forget";
  setType: (type: "login" | "otp" | "reset" | "forget") => void;
  onSuccess?: () => void;
}

export interface LoginResponse extends ApiResponseBase {
  data: {
    tokens: {
      access_token: string;
      refresh_token: string;
      expires_in: number;
      token_type: string;
    };
    user: User;
  };
}
export interface RegisterationResponse extends ApiResponseBase {
  data: {
    tokens: Tokens;
    data: {
      company_id: number;
      verification_code_id: number;
      email: string;
      message: string;
    };
  };
}

export interface ResendVerificationResponse extends ApiResponseBase {
  data: {
    email: string;
    verification_code_id: number;
  };
}

export interface VerifyCodeResponse extends ApiResponseBase {
  data: {
    company_id: number;
    user_id: number;
    email_verified: boolean;
    account_active: boolean;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  logo: string;
  company_type: string;
  is_verified: boolean;
  balance: number;
  credit_limit: number;
  available_credit: number;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

// Password Reset Types
export interface ResetPasswordResponse extends ApiResponseBase {
  data: {
    company_id: number;
    verification_code_id: number;
    email: string;
  };
}

export interface VerifyResetCodeResponse extends ApiResponseBase {
  data: {
    reset_token: string;
    expires_in: number;
  };
}

export interface SetNewPasswordResponse extends ApiResponseBase {
  data: {
    company_id: number;
  };
}
