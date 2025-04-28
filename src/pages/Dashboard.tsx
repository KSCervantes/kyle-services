import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Calendar, Clock, Bookmark, LogOut, ChevronRight, LayoutDashboard, AlertCircle, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [services, setServices] = useState<any[]>([])
  const [selectedService, setSelectedService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState({
    services: true,
    appointments: true,
    booking: false
  })
  const navigate = useNavigate()

  // Fetch available services from Supabase
  const fetchServices = async () => {
    setLoading(prev => ({ ...prev, services: true }))
    const { data, error } = await supabase.from('services').select()
    if (error) {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Error Loading Services',
        text: error.message,
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
    } else {
      setServices(data || [])
    }
    setLoading(prev => ({ ...prev, services: false }))
  }

  // Fetch user's appointment history
  const fetchAppointments = async () => {
    setLoading(prev => ({ ...prev, appointments: true }))
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        navigate('/auth')
        return
      }

      const { data, error } = await supabase
        .from('appointments')
        .select('*, services(name)')
        .eq('user_id', user.id)
        .order('date', { ascending: true })

      if (error) {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: 'Error Loading Appointments',
          text: error.message,
          background: '#1e293b',
          color: '#f8fafc',
          confirmButtonColor: '#10b981'
        })
      } else {
        setAppointments(data || [])
      }
    } catch (err) {
      console.error("Failed to fetch appointments:", err)
    }
    setLoading(prev => ({ ...prev, appointments: false }))
  }

  // Book an appointment
  const bookAppointment = async () => {
    if (!selectedService || !date || !time) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please select a service, date, and time.',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
      return
    }

    setLoading(prev => ({ ...prev, booking: true }))

    try {
      const appointmentDate = `${date}T${time}:00.000Z`
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        navigate('/auth')
        return
      }

      const { error } = await supabase.from('appointments').insert({
        user_id: user.id,
        service_id: selectedService,
        date: appointmentDate,
      })

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Booking Error',
          text: error.message,
          background: '#1e293b',
          color: '#f8fafc',
          confirmButtonColor: '#10b981'
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked!',
          text: 'Your appointment has been scheduled successfully.',
          background: '#1e293b',
          color: '#f8fafc',
          confirmButtonColor: '#10b981'
        })
        setDate('')
        setTime('')
        setSelectedService('')
        fetchAppointments() // Refresh appointment history
      }
    } catch (err) {
      console.error("Failed to book appointment:", err)
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: 'Something went wrong. Please try again.',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
    } finally {
      setLoading(prev => ({ ...prev, booking: false }))
    }
  }

  // Logout Function
  const logout = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/auth') // Redirect to login page after logout
    } catch (err) {
      console.error("Failed to log out:", err)
      Swal.fire({
        icon: 'error',
        title: 'Logout Error',
        text: 'Failed to log out. Please try again.',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#10b981'
      })
    }
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  // Calculate if an appointment is upcoming or past
  const isUpcoming = (dateString: string) => {
    return new Date(dateString) > new Date()
  }

  // Fetch services and appointments on mount
  useEffect(() => {
    fetchServices()
    fetchAppointments()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 py-8 px-4">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 py-6 shadow-lg clip-header relative mb-16">
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
        className="max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-between mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <div className="bg-emerald-900/50 p-2 rounded-full border border-emerald-500/30">
              <LayoutDashboard className="h-5 w-5 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold text-white ml-2">Dashboard</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center px-3 py-2 rounded-lg bg-slate-700/50 text-gray-300 hover:text-red-400 hover:bg-slate-700 transition-colors duration-200"
          >
            <LogOut className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </motion.div>

        <motion.div
          className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden mb-6 border border-slate-700"
          variants={itemVariants}
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <Bookmark className="h-5 w-5 text-emerald-400 mr-2" />
              Book an Appointment
            </h2>

            <div className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service
                </label>
                <select
                  className="w-full px-3 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  onChange={(e) => setSelectedService(e.target.value)}
                  value={selectedService}
                  disabled={loading.services}
                >
                  <option value="">Select a Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-emerald-400 mr-1" />
                    Date
                  </div>
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-3 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>

              {/* Time Selection */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-emerald-400 mr-1" />
                    Time
                  </div>
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full px-3 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                />
              </div>

              {/* Book Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg hover:shadow-emerald-500/20"
                onClick={bookAppointment}
                disabled={loading.booking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading.booking ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700"
          variants={itemVariants}
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <Calendar className="h-5 w-5 text-emerald-400 mr-2" />
              Your Appointments
            </h2>

            {loading.appointments ? (
              <div className="flex justify-center py-8">
                <div className="h-8 w-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : appointments.length === 0 ? (
              <div className="text-center py-8 px-4">
                <AlertCircle className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-300">No appointments yet</h3>
                <p className="text-gray-400 mt-1">Book your first appointment above</p>
              </div>
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    className={`border rounded-lg p-4 transition-all duration-200 ${
                      isUpcoming(appointment.date)
                        ? 'border-emerald-800 bg-emerald-900/20'
                        : 'border-slate-600 bg-slate-700/30'
                    }`}
                    whileHover={{ y: -2, boxShadow: "0 4px 12px -1px rgba(0, 0, 0, 0.3), 0 2px 6px -1px rgba(0, 0, 0, 0.2)" }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-white">{appointment.services?.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{formatDate(appointment.date)}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isUpcoming(appointment.date)
                          ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                          : 'bg-slate-700 text-gray-300 border border-slate-600'
                      }`}>
                        {isUpcoming(appointment.date) ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        Created By Kyle Cervantes
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