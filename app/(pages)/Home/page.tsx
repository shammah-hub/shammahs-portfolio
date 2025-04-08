// pages/index.js or app/page.js (for App Router)
"use client"; // Remove this if using Pages Router

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiJavascript, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { CiMobile2 } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";



import ContactSection from '@/app/components/Contactsection';

export default function Homepage() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const projects = [
    {
      id: 6,
      title: "payton",
      description: "Revolutionizing Financial Management Simplify and streamline your institution's finances with Ledga's innovative platform",
      image: "/payton.png",
      category: ["flutter"],
      technologies: ["flutter"],
      link: "https://www.ledgafinance.com/"
    },
    
    {
      id: 2,
      title: "ChopWell Mobile App",
      description: "Cross-platform mobile app for tracking fitness goals",
      image: "/chopwell.png",
      category: ["flutter"],
      technologies: ["React Native", "Firebase", "Redux"],
      link: "https://play.google.com/store/apps/details?id=chopwell.merchant"
    },
    {
      id: 3,
      title: "CloudDust",
      description: "Clouddust is an online literary entertainment platform that offers users the best of literature from emerging writers from across the globe",
      image: "/clouddust.png",
      category: ["flutter"],
      technologies: ["flutter", "FireBase"],
      link: "https://play.google.com/store/apps/details?id=clouddust.app"
    },
    {
      id: 4,
      title: "Skribe",
      description: "Subscription Management app",
      image: "/skribe.png",
      category: ["flutter"],
      technologies: ["Flutter", "FireBase"],
      link: "https://skribe.example.com"
    },
    {
      id: 5,
      title: "Nabteb",
      description: "National Business and Technical Examinations Board",
      image: "/nbtb.png",
      category: ["next", "react"],
      technologies: ["next"],
      link: "https://nabteb.example.com"
    },

    {
      id: 1,
      title: "Talim",
      description: "Full-featured e-commerce platform with payment integration",
      image: "/talm.png",
      category: ["react", "next"],
      technologies: ["Next.js", "React"],
      link: "https://talim-landing-page.vercel.app/"
    },
    
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

 

  const services = [
    {
      title: "Web Application Development",
      description: "End-to-end web application development using React and Next.js with responsive designs and optimal performance.",
      icon: <FaCode  size={32} />
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter that deliver native-like experiences.",
      icon: <CiMobile2  size={32} />
    },
    {
      title: "Frontend Development",
      description: "Creating stunning user interfaces with modern HTML, CSS, and JavaScript leveraging the latest frameworks.",
      icon: <MdComputer  size={32} />
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete solutions from frontend to backend integration using Next.js and various database technologies.",
      icon: <CgMoreO size={32} />
    }
  ];

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>Shammah Maida | Front-End Developer</title>
          <meta name="description" content="Portfolio of a Full-Stack Developer specializing in React, Next.js, React Native, and Flutter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation */}
        <nav className="bg-[#1e1e1e] shadow-md  dark:bg-gray-800 dark:shadow-gray-700/20 fixed w-full z-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">SM</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-white dark:text-white hover:text-gray-400 px-3 py-2 font-medium">Home</a>
                <a href="#about" className="text-white dark:text-white hover:text-grey-400 px-3 py-2 font-medium">About</a>
                <a href="#skills" className="text-white dark:text-white hover:text-grey-400 px-3 py-2 font-medium">Skills</a>
                <a href="#services" className="text-white dark:text-white hover:text-grey-400 px-3 py-2 font-medium">Services</a>
                <a href="#projects" className="text-white dark:text-white hover:text-grey-400 px-3 py-2 font-medium">Projects</a>
                <a href="#contact" className="text-white dark:text-white hover:text-grey-400 px-3 py-2 font-medium">Contact</a>
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
                <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#1e1e1e] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="md:w-1/2 mb-12 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h1 className="flex px-4 justify-center text-4xl sm:text-5xl bg-white md:text-5xl inline-block rounded-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I am  <span className="text-black dark:text-black"> Shammah Maida</span>
                </h1>
                <p className="mt-4 text-xl font-bold sm:text-3xl text-white dark:text-white">
                  Front-End Developer <span className='text-gray-300'>Specializing <br/>in </span>
                  React, Next.js, React Native, Flutter, html, css, WordPress
                </p>
                
                <p className="mt-6 text-lg text-gray-300 dark:text-gray-300 max-w-lg">
                  I build responsive, scalabale and modern interfaces.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#contact" 
                    className="px-5 py-3 bg-white  text-black font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Hire Me
                  </a>
                  <a 
                    href="#projects" 
                    className="px-6 py-3  hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Projects
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-black to-[#f7f7f7] p-1">
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <Image src="/sham.jpg" alt="John Doe" width={400} height={400} className="rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-[#1e1e1e] dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">About Me</h2>
              <div className="mt-2 h-1 w-20 bg-grey-500 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center md:space-x-10">
              <motion.div 
                className="md:w-2/5 mb-12 md:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-black to-[#d0d0d0] rounded-lg opacity-33 blur"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <Image src="/sham.jpg" alt="About Me" width={500} height={400} className="rounded-lg" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-white dark:text-white mb-4">Full-Stack Developer</h3>
                <p className="text-white dark:text-gray-300 mb-6">
                  With over 2 and a half years of experience in web and mobile development, I specialize in creating robust applications using modern technologies. My expertise spans across the full stack, allowing me to deliver end-to-end solutions that meet business goals and exceed user expectations.
                </p>
                <p className="text-white dark:text-gray-300 mb-6">
                  I am passionate about clean code, performance optimization, and creating intuitive user experiences. My approach combines technical excellence with a deep understanding of user needs to build products that make a real difference.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="font-bold text-white dark:text-white">Name:</h4>
                    <p className="text-white dark:text-gray-300">Shammah Maida</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white dark:text-white">Email:</h4>
                    <p className="text-white dark:text-gray-300">shammahmaida.sm@gmail,com</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white dark:text-white">Location:</h4>
                    <p className="text-white dark:text-gray-300">Abuja, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white dark:text-white">Availability:</h4>
                    <p className="text-white dark:text-gray-300">Freelance & Full-time</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-white text-black font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Me
                  </a>
                  <a 
                       href="/files/shammahcv.pdf" 
                       download
                       className="px-6 py-3  hover:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold rounded-lg transition-all duration-300"
                         >
                      Download CV
                      </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILSS SECTION  */}
        <section id="skills" className="py-16 md:py-24 bg-[#1e1e1e] dark:bg-gray-800 transition-colors duration-300">
          

          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
              <div className="mt-2 h-1 w-20 bg-black mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                i have Worked with a variety of technologies in the web and mobile development world.
                Here are my main areas of expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
          <div className='h-24 flex justify-center text-3xl'>
          <h1 className='txt-2xl text-white font-bold'>My Skills</h1>

          </div>

                    
        <div className="relative flex flex-col items-center justify-center w-full my-24">
  {/* First div rotated counterclockwise */}
  <div className="absolute h-20 w-screen bg-white border-2 px-6 border-gray-300 transform -rotate-7">       
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center">
      <Image src="/react.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">React</span>
      </div>
      
      <div className="flex items-center">
      <Image src="/html.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">HTML</span>
      </div>

      <div className="flex items-center">
      <Image src="/wordpress.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">WordPress</span>
      </div>

      <div className="flex items-center">
      <Image src="/flutter.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">Flutter</span>
      </div>
      
      <div className="flex items-center">
        <Image src="/css.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
         <span className="ml-2 text-lg">CSS</span>
      </div>

      <div className="flex items-center">
      <Image src="/images.jpg" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">FireBase</span>
      </div>
      
      <div className="flex items-center">
      <Image src="/next.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">Next.js</span>
      </div>
      
      <div className="flex items-center">
      <Image src="/github.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">GitHub</span>
      </div>
    </div>
  </div>

  {/* Second div rotated clockwise */}
  <div className="absolute h-20 w-screen bg-white border-2 px-6 border-gray-300 transform rotate-7">       
    <div className="flex items-center justify-between h-full">
    <div className="flex items-center">
    <Image src="/flutter.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
    <span className="ml-2 text-lg">Flutter</span>
      </div>
      
      <div className="flex items-center">
      <Image src="/react.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">React Native</span>
      </div>
      
      <div className="flex items-center">
      <Image src="/vscode.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">VS Code</span>
      </div>

      
      <div className="flex items-center">
      <Image src="/tailwind.png" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">Tailwind</span>
      </div>

      <div className="flex items-center">
      <Image src="/images.jpg" width={100} height={100} alt="CSS" className="w-8 h-8" />
      <span className="ml-2 text-lg">FireBase</span>
      </div>
      
    </div>
  </div>
</div>


        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-[#1e1e1e] dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Services I Offer</h2>
              <div className="mt-2 h-1 w-20 bg-black mx-auto"></div>
              <p className="mt-6 text-lg text-white dark:text-gray-300 max-w-2xl mx-auto">
                I provide end-to-end development services tailored to your specific needs.
                From concept to deployment, I am committed to delivering high-quality solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className=" dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex bg-white rounded-4xl p-2 mb-4">
                   {service.icon}
                   </div>
                  <h3 className="text-xl font-bold text-white dark:text-white mb-4">{service.title}</h3>
                  <p className="text-white dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-[#1e1e1e] dark:bg-gray-800 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">My Projects</h2>
      <div className="mt-2 h-1 w-20 bg-black mx-auto"></div>
      <p className="mt-6 text-lg text-white dark:text-gray-300 max-w-2xl mx-auto">
        Here are some of my recent projects that showcase my skills and expertise.
      </p>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button 
        onClick={() => setActiveTab('all')}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeTab === 'all' 
            ? 'bg-black text-white' 
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
        }`}
      >
        All
      </button>
      <button 
        onClick={() => setActiveTab('react')}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeTab === 'react' 
            ? 'bg-black text-white' 
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
        }`}
      >
        React
      </button>
      <button 
        onClick={() => setActiveTab('next')}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeTab === 'next' 
            ? 'bg-black text-white' 
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
        }`}
      >
        Next.js
      </button>
      <button 
        onClick={() => setActiveTab('react-native')}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeTab === 'react-native' 
            ? 'bg-black text-white' 
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
        }`}
      >
        React Native
      </button>
      <button 
        onClick={() => setActiveTab('flutter')}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeTab === 'flutter' 
            ? 'bg-black text-white' 
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
        }`}
      >
        Flutter
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredProjects.map((project) => (
        <motion.div 
          key={project.id}
          className=" dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative">
              <Image src={project.image} alt={project.title} width={600} height={400} className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-black dark:text-blue-200 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* CONTACT SECTION */}
        <ContactSection />

        {/* FOOTER */}
        <footer className="bg-[#1e1e1e] text-white py-12">
          <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold text-white">SM</span>
                <p className="mt-2 text-gray-400">Full-Stack Developer</p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
              </div>
            </div>
            
            <div className="border-t border-grey mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Shammah Maida. All Rights Reserved.</p>
              
              <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                  href="https://github.com/shammah-hub" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    <FaGithub size={20} />
                     </Link>

                <Link 
                   href="https://linkedin.com/in/shammah-maida123/" 
                   target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                   >
                      <FaLinkedin size={20} />
                   </Link>
                 <Link 
                     href="https://www.instagram.com/shammah_m_/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                   >
                      <FaInstagram size={20} />
                   </Link>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}
