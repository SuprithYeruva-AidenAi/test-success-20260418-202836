import { create } from 'zustand'

interface AuthState {
  token: string | null
  setToken: (token: string) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
}))

// Initialize token on app start
if (typeof window !== 'undefined') {
  // In a real app, this would come from secure storage or an auth flow
  // For demo purposes, we'll set a mock token
  useAuthStore.getState().setToken('demo-token-123')
}
