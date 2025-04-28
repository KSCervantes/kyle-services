// src/pages/ResetPassword.tsx
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const navigate = useNavigate()

  const handleUpdatePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) {
      Swal.fire('Error', error.message, 'error')
    } else {
      Swal.fire('Success', 'Password updated successfully!', 'success').then(() =>
        navigate('/auth')
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Set New Password</h2>
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />
        <button
          onClick={handleUpdatePassword}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Update Password
        </button>
      </div>
    </div>
  )
}
