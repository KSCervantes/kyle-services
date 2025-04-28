import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, Book, User } from 'lucide-react'

export default function Terms() {

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
      {/* Modern Header with Angled Background similar to Auth */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 py-6 shadow-lg clip-header relative">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <User className="text-emerald-600 h-6 w-6" />
            </div>
            <h1 className="text-white text-3xl font-extrabold tracking-tight">KYLE SERVICES</h1>
          </Link>
          <Link
            to="/"
            className="flex items-center text-white hover:text-emerald-200 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
          </Link>
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

      <div className="flex-grow container mx-auto py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700 text-white"
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
              <Book className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-400">
              Important information about using Kyle Services
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-300"
            variants={itemVariants}
          >
            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Kyle Services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">2. Description of Services</h2>
              <p>
                Kyle Services provides web development, mobile application development, UI/UX design, and related digital services as described on our website.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">3. Project Scope and Deliverables</h2>
              <p>
                All projects will be governed by a separate agreement that outlines specific deliverables, timelines, and payment terms. These agreements form part of these Terms of Service.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">4. Payment Terms</h2>
              <p>
                Payment schedules, methods, and terms will be outlined in individual project agreements. Kyle Services typically requires a deposit before beginning work, with remaining payments due at specified milestones.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">5. Intellectual Property Rights</h2>
              <p>
                Upon full payment, clients receive ownership rights to the final deliverables as specified in the project agreement. Kyle Services retains the right to display and link to completed work as part of our portfolio unless otherwise agreed.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">6. Confidentiality</h2>
              <p>
                We respect the confidentiality of all client information and will not share sensitive details with third parties without explicit permission.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">7. Project Changes and Revisions</h2>
              <p>
                The number of revisions included in a project will be specified in the project agreement. Additional revisions or significant changes to the project scope may incur additional charges.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">8. Termination</h2>
              <p>
                Either party may terminate services with written notice if the other party breaches these terms. Clients remain responsible for payment for work completed prior to termination.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">9. Limitation of Liability</h2>
              <p>
                Kyle Services is not liable for any indirect, consequential, or incidental damages arising from the use of our services. Our total liability is limited to the amount paid for the services in question.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Philippines. Any disputes will be resolved in the courts of Surigao Del Sur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">11. Changes to Terms</h2>
              <p>
                Kyle Services reserves the right to modify these terms at any time. Continued use of our services after such changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <p className="text-gray-400 pt-4 text-center text-sm">
              Last updated: April 24, 2025
            </p>
          </motion.div>
        </motion.div>
      </div>

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