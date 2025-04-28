import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Confirm() {
  const [status, setStatus] = useState('Confirming your email...')
  const navigate = useNavigate()

  useEffect(() => {
    const confirmEmail = async () => {
      const { data } = await supabase.auth.getSession()

      if (data.session) {
        setStatus('Email confirmed! Redirecting to dashboard...')
        setTimeout(() => navigate('/'), 2000)
      } else {
        setStatus('Confirmation failed. Please try logging in again.')
      }
    }

    confirmEmail()
  }, [navigate])

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Email Confirmation</h1>
      <p>{status}</p>
    </div>
  )
}
