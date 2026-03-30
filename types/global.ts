export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface ApiResponseBase {
  success: boolean;
  message: string;
  timestamp: string;
  status_code: number;
}

export const LANGS = {
  en: { label: "EN", flag: "/usa.svg" },
  ar: { label: "AR", flag: "/ksa.svg" },
};
export type LangKey = keyof typeof LANGS;
