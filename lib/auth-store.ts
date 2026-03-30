import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import type { User, Tokens } from "@/components/auth/types/auth-form-types";

interface PendingVerification {
  email: string;
}

interface PendingEmailChange {
  email: string;
}

interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  pendingVerification: PendingVerification | null;
  pendingEmailChange: PendingEmailChange | null;
}

interface AuthActions {
  login: (user: User, tokens: Tokens) => void;
  logout: () => void;
  setHydrated: () => void;
  setPendingVerification: (email: string) => void;
  clearPendingVerification: () => void;
  setPendingEmailChange: (email: string) => void;
  clearPendingEmailChange: () => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isHydrated: false,
      pendingVerification: null,
      pendingEmailChange: null,

      login: (user, tokens) => {
        // Also store token in localStorage for API client compatibility
        localStorage.setItem("token", tokens.access_token);
        set({
          user,
          tokens,
          isAuthenticated: true,
        });
      },

      logout: () => {
        localStorage.removeItem("token");
        set({
          user: null,
          tokens: null,
          isAuthenticated: false,
          pendingVerification: null,
          pendingEmailChange: null,
        });
      },

      setHydrated: () => set({ isHydrated: true }),

      setPendingVerification: (email: string) =>
        set({ pendingVerification: { email } }),

      clearPendingVerification: () => set({ pendingVerification: null }),

      setPendingEmailChange: (email: string) =>
        set({ pendingEmailChange: { email } }),

      clearPendingEmailChange: () => set({ pendingEmailChange: null }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated,
        pendingVerification: state.pendingVerification,
        pendingEmailChange: state.pendingEmailChange,
      }),
    }
  )
);

// Selectors for better performance
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);
export const useIsHydrated = () => useAuthStore((state) => state.isHydrated);
export const usePendingVerification = () =>
  useAuthStore((state) => state.pendingVerification);
export const usePendingEmailChange = () =>
  useAuthStore((state) => state.pendingEmailChange);
export const useAuthActions = () =>
  useAuthStore(
    useShallow((state) => ({
      login: state.login,
      logout: state.logout,
      setPendingVerification: state.setPendingVerification,
      clearPendingVerification: state.clearPendingVerification,
      setPendingEmailChange: state.setPendingEmailChange,
      clearPendingEmailChange: state.clearPendingEmailChange,
    }))
  );

// Non-hook access for use outside React (e.g., in API client)
export const getAuthState = () => useAuthStore.getState();
export const getToken = () => useAuthStore.getState().tokens?.access_token;
