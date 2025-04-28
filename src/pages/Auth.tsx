import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, LogIn, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all fields',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
      return
    }

    setIsLoading(true)

    try {
      const { error } = isLogin
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: error.message,
          background: '#1e293b',
          color: '#f8fafc',
          confirmButtonColor: '#10b981'
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: isLogin ? 'Welcome Back!' : 'Account Created',
          text: isLogin
            ? 'You have successfully logged in.'
            : 'Your account has been created successfully!',
          background: '#1e293b',
          color: '#f8fafc',
          confirmButtonColor: '#10b981'
        })
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: 'Something went wrong. Please try again.',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleView = () => {
    setIsLogin(!isLogin)
    // Clear fields when switching views
    setEmail('')
    setPassword('')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: 20 }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 px-4">
      {/* Modern Header with Angled Background */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 py-6 shadow-lg clip-header relative">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <User className="text-emerald-600 h-6 w-6" />
          </div>
          <h1 className="text-center text-white text-3xl font-extrabold tracking-tight">KYLE SERVICES</h1>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-0 w-full overflow-hidden h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-gray-900">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </header>

      <motion.div
        className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8 mt-16 mb-8 border border-slate-700 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center p-3 bg-emerald-900/50 rounded-full mb-4 border border-emerald-500/30">
            {isLogin ? (
              <LogIn className="h-8 w-8 text-emerald-400" />
            ) : (
              <UserPlus className="h-8 w-8 text-emerald-400" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-400 text-lg">
            {isLogin ? 'Sign in to access your account' : 'Sign up for a new account'}
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-emerald-400 transition-colors duration-200" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-3.5 border border-slate-600 rounded-xl bg-slate-700/50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-white transition-all duration-200"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-emerald-400 transition-colors duration-200" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-12 py-3.5 border border-slate-600 rounded-xl bg-slate-700/50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-white transition-all duration-200"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              onClick={() => navigate('/forgot-password')}
              className="text-sm text-emerald-400 hover:text-emerald-300 underline"
            >
              Forgot Password?
            </button>
          </div>

          <motion.button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3.5 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="h-6 w-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 mb-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={toggleView}
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200 underline underline-offset-2"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </motion.div>
      </motion.div>

      <footer className="w-full text-center pb-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Kyle Services. All rights reserved.
      </footer>

      {/* Add global style for the clip path */}
      <style>{`
        .clip-header {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </div>
  )
}