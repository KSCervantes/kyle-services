// src/pages/ForgotPassword.tsx
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import Swal from 'sweetalert2'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleReset = async () => {
    if (!email) {
      Swal.fire('Oops', 'Email is required', 'warning')
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/reset-password',
    })

    if (error) {
      Swal.fire('Error', error.message, 'error')
    } else {
      Swal.fire('Success', 'Password reset email sent!', 'success')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset your password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />
        <button
          onClick={handleReset}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  )
}
