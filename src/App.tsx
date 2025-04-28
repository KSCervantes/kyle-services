import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Confirm from './pages/Confirm'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Sitemap from './pages/Sitemap'
import FAQ from './pages/FAQ'

function App() {
  const [session, setSession] = useState<any | null>(undefined)

  useEffect(() => {
    // Get current session on load
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // Cleanup on unmount
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  // Loading state until session is known
  if (session === undefined) return <div className="p-6 text-center">Loading...</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!session ? <Auth /> : <Navigate to="/dashboard" />}
        />
        <Route path="/auth/callback" element={<Confirm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
