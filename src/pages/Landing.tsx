import { Link } from 'react-router-dom'
import { Code, Smartphone, Layout, Database, Zap, ChevronRight, Users, MessageSquare, Mail, Phone, MapPin, Github, Facebook, Instagram } from 'lucide-react'
import { FaReact, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiSupabase, SiHtml5, SiVuedotjs, SiPython, SiFigma } from 'react-icons/si';
import { SiPhp } from "react-icons/si";
import { FaFlutter } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { name: "Web Development", icon: <Code className="w-8 h-8 mb-2 text-emerald-500" />, description: "Modern, responsive websites built with the latest technologies" },
    { name: "Mobile Development", icon: <Smartphone className="w-8 h-8 mb-2 text-emerald-500" />, description: "Native and cross-platform mobile applications" },
    { name: "Frontend Development", icon: <Layout className="w-8 h-8 mb-2 text-emerald-500" />, description: "Beautiful user interfaces with smooth interactions" },
    { name: "Backend Development", icon: <Database className="w-8 h-8 mb-2 text-emerald-500" />, description: "Scalable and secure server-side solutions" },
    { name: "UI Design", icon: <Zap className="w-8 h-8 mb-2 text-emerald-500" />, description: "Intuitive and visually appealing user experiences" }
  ]

  const stats = [
    { value: "80%", label: "Client Satisfaction" },
    { value: "10+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ]

  const technologies = [
    { name: "React", icon: <FaReact className="text-emerald-500 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-8 h-8" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-600 w-8 h-8" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-8 h-8" /> },
    { name: "Flutter", icon: <FaFlutter className="text-blue-400 w-8 h-8" /> },
    { name: "VUE", icon: <SiVuedotjs className="text-green-500 w-8 h-8" /> },
    { name: "Python", icon: <SiPython className="text-blue-500 w-8 h-8" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500 w-8 h-8" /> },
    { name: "PHP", icon: <SiPhp className="text-purple-600 w-8 h-8" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E] w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      {/* Style for clip path */}
      <style>{`
        .clip-header {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .nav-fixed {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Fixed Navigation Bar */}
      <div className={`fixed w-full top-0 z-50 nav-fixed ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-white">Kyle<span className="text-emerald-300">Services</span></Link>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          <Link to="/auth" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/20">Book Now</Link>
        </div>
      </div>

      {/* Header - Added padding-top to account for fixed navbar */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 py-24 shadow-lg clip-header relative ">
        <div className="absolute -bottom-4 left-0 w-full overflow-hidden h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-gray-900">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 pt-12">
        {/* Hero Section */}
        <div className="py-20 px-6 md:px-12 lg:px-24 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Bringing Your <span className="text-emerald-400">Digital Vision</span> To Life
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  A passionate developer creating web and mobile solutions tailored to your unique business needs.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/auth" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all font-medium text-lg inline-flex items-center justify-center">
                    Get Started <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a href="#services" className="bg-slate-800 text-emerald-400 border border-emerald-500/30 px-8 py-3 rounded-lg hover:bg-slate-700 transition-all font-medium text-lg">
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="max-w-md mx-auto">
                  <img
                    src="/src/assets/Profile.png"
                    alt="Web Development Services"
                    className="rounded-2xl shadow-2xl border border-slate-700 w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 bg-slate-800/80 backdrop-blur-sm shadow-md relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                  <h3 className="text-4xl font-bold text-emerald-400">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="pt-24 pb-20 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern marketplace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-700 group">
                  <div className="flex flex-col items-center">
                    <div className="bg-emerald-900/50 p-4 rounded-lg mb-4 group-hover:bg-emerald-900/70 transition-colors border border-emerald-500/30">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300">{service.description}</p>
                    <Link to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 text-emerald-400 inline-flex items-center font-medium hover:text-emerald-300">
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div id="portfolio" className="pt-24 pb-20 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">My Recent Work</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Check out some of my latest projects that showcase my skills and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Portfolio",
                  category: "Web Development",
                  github: "https://github.com/KSCervantes/Typescript_Portfolio",
                  demo: "https://kylecervantes.netlify.app/",
                  image: "/src/assets/Portfolio.png",
                  status: "Completed", // Add status here
                },
                {
                  title: "ROTC Enrollment",
                  category: "Web Development",
                  github: "#",
                  demo: "https://fitness-tracker-demo.com",
                  image: "/src/assets/ROTC Logo.png",
                  status: "Soon to be Publish", // Add status here
                },
                {
                  title: "Community Bulletin App",
                  category: "Mobile App Development",
                  github: "#",
                  demo: "https://corporate-dashboard-demo.com",
                  image: "/src/assets/ogol.png",
                  status: "In Progress", // Add status here
                },
              ].map((project, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg group border border-slate-700">
                  <div className="relative">
                    <img
                      src={project.image} // Use the image property here
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="font-bold text-xl">{project.title}</h3>
                        <p className="text-sm text-emerald-300">{project.category}</p>
                        <p className={`text-sm mt-2 ${project.status === "In Progress" ? "text-yellow-400" : "text-emerald-400"}`}>
                          {project.status}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-800">
                    <div className="flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://kylecervantes.netlify.app/"
                className="bg-slate-800 text-emerald-400 border border-emerald-500/30 px-6 py-2 rounded-lg hover:bg-slate-700 transition-all font-medium inline-flex items-center"
              >
                View All Projects <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="about" className="pt-24 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="max-w-md mx-auto">
                  <img
                    src="/src/assets/Profile.png"
                    alt="Our Team"
                    className="rounded-xl shadow-2xl border border-emerald-500/30 w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12 bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Kyle Services?</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Users className="w-10 h-10 mr-4 flex-shrink-0 text-emerald-400" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Expert Knowledge</h3>
                      <p className="text-gray-300">
                        With specialized skills in modern web and mobile technologies, I deliver cutting-edge solutions that stand out.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-10 h-10 mr-4 flex-shrink-0 text-emerald-400" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Fast Delivery</h3>
                      <p className="text-gray-300">
                        I value your time and deliver high-quality results within agreed timeframes without compromising quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="w-10 h-10 mr-4 flex-shrink-0 text-emerald-400" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Ongoing Support</h3>
                      <p className="text-gray-300">
                        I don't just build and leave - I provide continued support to ensure your project's long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-16 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Technologies I Work With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-slate-800/80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-slate-700"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <p className="text-gray-300 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="pt-24 pb-20 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto bg-slate-800/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="max-w-xs mx-auto">
                  <img
                    src="/src/assets/Profile.png"
                    alt="Contact Us"
                    className="rounded-full border-4 border-emerald-500/30 shadow-lg w-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Ideas into Reality?</h2>
                <p className="text-lg mb-8 text-gray-300">
                  Book a free consultation now and let's discuss how Kyle Services can help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-start">
                  <Link
                    to="/auth"
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all font-medium text-lg inline-flex items-center justify-center"
                  >
                    Book Free Consultation <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a
                    href="https://kylecervantes.netlify.app/"
                    className="bg-slate-800 text-emerald-400 border border-emerald-500/30 px-8 py-3 rounded-lg hover:bg-slate-700 transition-all font-medium text-lg inline-flex items-center justify-center"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-16 px-6 bg-slate-900 text-white relative overflow-hidden mt-24">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              {/* About Column */}
              <div className="text-left">
                <h3 className="font-bold text-2xl mb-4">Kyle<span className="text-emerald-400">Services</span></h3>
                <p className="text-gray-300 mb-6">
                  Transforming digital ideas into reality with modern web and mobile solutions tailored for businesses of all sizes.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/KSCervantes" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href='https://web.facebook.com/kylecervantes2003/' className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/its_kylcrvnts/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-4 text-white">Contact Information</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">kylecervantes2003@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">+63 969-209-1713</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Lianga, Surigao Del Sur, Philippines</span>
                  </li>
                </ul>
              </div>

              {/* Services & Skills */}
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-4 text-white">Services & Skills</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h5 className="font-medium text-emerald-400 mb-2">Services</h5>
                    <ul className="space-y-2">
                      <li className="text-gray-300 hover:text-white transition-colors">
                        <a href="#services">Web Development</a>
                      </li>
                      <li className="text-gray-300 hover:text-white transition-colors">
                        <a href="#services">Mobile Development</a>
                      </li>
                      <li className="text-gray-300 hover:text-white transition-colors">
                        <a href="#services">UI/UX Design</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-400 mb-2">Skills</h5>
                    <ul className="space-y-2">
                      <li className="text-gray-300">Frontend</li>
                      <li className="text-gray-300">Backend</li>
                      <li className="text-gray-300">React Native</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300 hover:text-white transition-colors">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="text-gray-300 hover:text-white transition-colors">
                    <a href="#about">About Me</a>
                  </li>
                  <li className="text-gray-300 hover:text-white transition-colors">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="text-gray-300 hover:text-white transition-colors">
                    <Link to="/terms">Terms of Service</Link>
                  </li>
                  <li className="text-gray-300 hover:text-white transition-colors">
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl mb-12 border border-slate-700">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-left">
                  <h4 className="text-xl font-semibold mb-2 text-white">Subscribe to My Newsletter</h4>
                  <p className="text-gray-300">Get the latest updates, tips and special offers directly to your inbox.</p>
                </div>
                <div className="flex w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-lg w-full md:w-64 bg-slate-700 border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Kyle Services. All rights reserved.</p>
                <div className="flex space-x-6">
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
                  <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </footer>
      </div>
    </div>
  )
}