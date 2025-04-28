import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, Shield, User } from 'lucide-react'

export default function Privacy() {

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
              <Shield className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-400">
              How we protect and manage your information
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-300"
            variants={itemVariants}
          >
            <p className="text-lg">
              At Kyle Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Contact us through our website</li>
                <li>Book a consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage our services</li>
              </ul>
              <p className="mt-3">
                This information may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and updates</li>
              </ul>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">3. Information Sharing</h2>
              <p className="mb-3">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described below:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent</li>
              </ul>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">5. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but this may limit your ability to use some features of our website.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">7. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-4">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">9. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                <p>
                  Email: <a href="mailto:kylecervantes2003@gmail.com" className="text-emerald-400 hover:text-emerald-300">kylecervantes2003@gmail.com</a><br />
                  Phone: <a href="tel:+639692091713" className="text-emerald-400 hover:text-emerald-300">+63 969-209-1713</a>
                </p>
              </div>
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