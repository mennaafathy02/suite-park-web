import { toast } from "sonner";
import { getAuthState } from "./auth-store";

// Next.js public environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL;

type RequestBody = Record<string, unknown> | FormData | null | undefined;

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: RequestBody;
  params?: Record<
    string,
    string | number | boolean | string[] | number[] | undefined | null
  >;
  cache?: RequestCache;
  skipAuthRedirect?: boolean; // Skip logout/redirect on 401 errors (for auth endpoints)
};

function buildUrlWithParams(
  url: string,
  params?: RequestOptions["params"],
): string {
  if (!params) return url;
  const filteredParams = Object.entries(params).filter(
    ([, value]) => value !== undefined && value !== null,
  );
  if (filteredParams.length === 0) return url;
  const searchParams = new URLSearchParams();
  for (const [key, value] of filteredParams) {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        searchParams.append(`${key}[]`, String(v));
      });
    } else {
      searchParams.append(key, String(value));
    }
  }
  return `${url}?${searchParams.toString()}`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function getDefaultLang() {
  const lang = getCookie("locale");
  return lang ? lang.split(",")[0].split(";")[0].trim() : "en";
}

// Get token from Zustand store or localStorage fallback
function getToken() {
  const authState = getAuthState();
  return authState.tokens?.access_token || localStorage.getItem("token");
}

function handleLogoutAndRedirect() {
  // Use Zustand store logout
  getAuthState().logout();
  if (typeof window !== "undefined") {
    // Redirect to home (login is a dialog, not a page)
    window.location.href = "/";
  }
}

async function fetchApi<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const {
    method = "GET",
    headers = {},
    body,
    params,
    cache = "no-store",
  } = options;

  const token = getToken();
  const simpleLang = getDefaultLang();

  const fullUrl = buildUrlWithParams(`${API_URL}${url}`, params);

  try {
    const response = await fetch(fullUrl, {
      method,
      headers: {
        ...(body instanceof FormData
          ? {
              Accept: "application/json",
              "Accept-Language": simpleLang,
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            }
          : {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Accept-Language": simpleLang,
              ...headers,
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            }),
        "Accept-Language": simpleLang,
      },
      body: body
        ? body instanceof FormData
          ? body
          : JSON.stringify(body)
        : undefined,
      cache,
    });

    // Handle authentication errors
    if (response.status === 401) {
      if (!options.skipAuthRedirect) {
        handleLogoutAndRedirect();
      }
      // Parse error message from response
      let message = "انتهت صلاحية الجلسة - يرجى تسجيل الدخول مرة أخرى";
      try {
        const data = await response.json();
        message = data.message || data.error || message;
      } catch {
        // JSON parsing failed, use default message
      }
      throw new Error(message);
    }

    if (response.status === 403) {
      toast.error("تم رفض الوصول - ليس لديك صلاحية لهذا الإجراء");
      throw new Error("تم رفض الوصول");
    }

    if (!response.ok) {
      let message = response.statusText;
      try {
        const data = await response.json();
        message = data.message || data.error || message;
      } catch {
        // JSON parsing failed, use statusText
      }

      if (response.status !== 404) {
        toast.error(message);
      }
      throw new Error(message);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }

    return {} as T;
  } catch (error: unknown) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      toast.error("خطأ في الشبكة - يرجى التحقق من اتصالك بالإنترنت");
    }
    throw error;
  }
}

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "GET" });
  },
  post<T>(
    url: string,
    body?: RequestBody,
    options?: RequestOptions,
  ): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "POST", body });
  },
  put<T>(
    url: string,
    body?: RequestBody,
    options?: RequestOptions,
  ): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PUT", body });
  },
  patch<T>(
    url: string,
    body?: RequestBody,
    options?: RequestOptions,
  ): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PATCH", body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "DELETE" });
  },
};
