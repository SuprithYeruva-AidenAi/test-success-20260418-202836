import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateAccountWithNric11 from './pages/CreateAccountWithNric11'
import FirstTimeUserNoPolicy from './pages/FirstTimeUserNoPolicy'
import Dashboard from './pages/Dashboard'
import SignUpViaSingpassCreatePassword from './pages/SignUpViaSingpassCreatePassword'
import OnboardingWelcomeMessage from './pages/OnboardingWelcomeMessage'
import OpenNotification from './pages/OpenNotification'
import Login from './pages/Login'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/create-account-with-nric-1-1" replace />} />
          <Route path="/create-account-with-nric-1-1" element={<CreateAccountWithNric11 />} />
          <Route path="/first-time-user-no-policy" element={<FirstTimeUserNoPolicy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up-via-singpass-create-password" element={<SignUpViaSingpassCreatePassword />} />
          <Route path="/onboarding-welcome-message" element={<OnboardingWelcomeMessage />} />
          <Route path="/open-notification" element={<OpenNotification />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
