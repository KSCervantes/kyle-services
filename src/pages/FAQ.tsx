import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState([0, 1])

  const toggleQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(item => item !== index))
    } else {
      setOpenQuestions([...openQuestions, index])
    }
  }

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What services do you offer?",
          answer: "I offer a comprehensive range of digital services including web development, mobile application development, frontend development, backend development, and UI design. Each service is tailored to meet your specific business needs and goals."
        },
        {
          question: "How can I request a quote for my project?",
          answer: "You can request a quote by booking a free consultation through the 'Book Now' button on the homepage or by contacting me directly via email or phone. During the consultation, we'll discuss your project requirements and I'll provide you with a detailed proposal."
        },
        {
          question: "Do you work with clients internationally?",
          answer: "Yes, I work with clients worldwide. With modern communication tools and my flexible schedule, I can accommodate different time zones to ensure smooth collaboration regardless of your location."
        }
      ]
    },
    {
      title: "Project Process",
      questions: [
        {
          question: "What is your development process like?",
          answer: "My development process typically includes: 1) Initial consultation and requirement gathering, 2) Design and prototype creation, 3) Development and implementation, 4) Testing and quality assurance, 5) Deployment, and 6) Ongoing support and maintenance. I keep you involved throughout the entire process to ensure the final product meets your expectations."
        },
        {
          question: "How long does it take to complete a project?",
          answer: "The timeline varies depending on the project's complexity, scope, and your specific requirements. A simple website might take 2-4 weeks, while more complex web applications or mobile apps could take 2-6 months. I'll provide you with a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide ongoing maintenance after project completion?",
          answer: "Yes, I offer ongoing maintenance and support services to keep your digital products running smoothly. This includes regular updates, bug fixes, security patches, and performance optimizations. We can discuss different maintenance packages based on your needs."
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "What technologies do you work with?",
          answer: "I work with a wide range of modern technologies including React, Node.js, JavaScript, TypeScript, Tailwind CSS, MongoDB, Express, React Native, Next.js, and Firebase. I continually update my skills to stay current with the latest industry trends and best practices."
        },
        {
          question: "Can you redesign my existing website or application?",
          answer: "Absolutely! I offer redesign services to modernize your existing digital products. This can include updating the visual design, improving user experience, enhancing performance, or adding new features to keep your product competitive in today's market."
        },
        {
          question: "Do you offer responsive design for mobile devices?",
          answer: "Yes, all my web development projects include responsive design as a standard feature. This ensures your website or application looks and functions properly across all devices, from desktop computers to tablets and smartphones."
        }
      ]
    },
    {
      title: "Payment and Billing",
      questions: [
        {
          question: "What are your payment terms?",
          answer: "My standard payment structure typically includes a 30% deposit to begin the project, with the remaining balance paid in milestones as we progress. For larger projects, I can offer flexible payment plans. I accept various payment methods including bank transfers and major credit cards."
        },
        {
          question: "Do you offer fixed-price quotes or hourly billing?",
          answer: "I offer both fixed-price quotes and hourly billing options. Fixed-price quotes work well for projects with clearly defined scopes, while hourly billing may be more suitable for projects with evolving requirements or ongoing development needs. We can discuss which option best suits your project during our consultation."
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
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

      {/* Navigation */}
      <nav className="bg-slate-800 py-4 px-6 shadow-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-emerald-400">Kyle<span className="text-white">Services</span></Link>
          <Link
            to="/"
            className="flex items-center text-white hover:text-emerald-200 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex items-center mb-8 text-gray-400">
          <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">FAQ</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 mb-8">
            Find answers to common questions about my services, process, and more.
            If you can't find what you're looking for, feel free to contact me directly.
          </p>

          <div className="space-y-6">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
                variants={itemVariants}
              >
                <h2 className="text-xl font-semibold text-white p-6 bg-slate-700/50 border-b border-slate-600">{category.title}</h2>
                <div className="divide-y divide-slate-700">
                  {category.questions.map((faq, qIndex) => {
                    const questionIndex = catIndex * 10 + qIndex
                    const isOpen = openQuestions.includes(questionIndex)

                    return (
                      <div key={qIndex} className="p-6">
                        <button
                          className="flex justify-between items-center w-full text-left"
                          onClick={() => toggleQuestion(questionIndex)}
                        >
                          <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                          {isOpen ?
                            <ChevronUp className="w-5 h-5 text-emerald-400" /> :
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          }
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-gray-300"
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Still Have Questions Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-8 rounded-2xl shadow-2xl"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">
              Feel free to reach out directly and I'll get back to you as soon as possible.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="mailto:kylecervantes2003@gmail.com"
                className="bg-white text-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-all font-medium flex items-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 w-5 h-5" /> Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Kyle Services. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors">Sitemap</Link>
            <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link>
          </div>
        </div>
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