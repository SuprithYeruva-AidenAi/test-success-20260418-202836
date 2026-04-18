import axios from 'axios'
import { useAuthStore } from '../store/authStore'

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for 401 handling
let isRefreshing = false
let refreshPromise: Promise<string> | null = null

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      if (!isRefreshing) {
        isRefreshing = true
        refreshPromise = acquireNewToken()
      }
      
      try {
        const newToken = await refreshPromise
        useAuthStore.getState().setToken(newToken)
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return apiClient(originalRequest)
      } catch (refreshError) {
        useAuthStore.getState().clearToken()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
        refreshPromise = null
      }
    }
    
    return Promise.reject(error)
  }
)

async function acquireNewToken(): Promise<string> {
  // In a real app, this would call a refresh token endpoint
  // For demo purposes, return a new mock token
  return new Promise((resolve) => {
    setTimeout(() => resolve('refreshed-token-456'), 100)
  })
}

export default apiClient
