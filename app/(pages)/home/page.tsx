"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaBolt,
  FaQuoteLeft,
  FaServer,
  FaCheckCircle,
  FaCode,
  FaLaptop,
  FaSearch,
  FaPaintBrush,
  FaTerminal,
  FaRocket,
  FaBriefcase,
  FaShieldAlt,
  FaHourglassHalf  // Use this instead
} from 'react-icons/fa';

// --- TS Compliant Animation Variants ---
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const transitionSettings = { 
  duration: 0.8, 
  ease: [0.16, 1, 0.3, 1] as const 
};

export default function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "payton",
      description: "Revolutionizing Financial Management Simplify and streamline your institution's finances with payton's innovative platform",
      image: "/payton.png",
      category: ["flutter"],
      technologies: ["flutter"],
      link: "https://play.google.com/store/apps/details?id=com.payton.app&hl=en/"
    },
    {
      id: 2,
      title: "ChopWell Mobile App",
      description: "Cross-platform mobile app for othering food delivery riders to manage orders, track deliveries, and communicate with customers",
      image: "/chopwell.png",
      category: ["flutter"],
      technologies: ["React Native", "Firebase", "Redux"],
      link: "https://play.google.com/store/apps/details?id=chopwell.rider&hl=en"
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
      description: "Subscription Management App",
      image: "/skribe.png",
      category: ["flutter"],
      technologies: ["Flutter", "FireBase"],
      link: "https://skribe-website.vercel.app/"
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
      id: 6,
      title: "Talim",
      description: "Full-featured school managment platform with payment integration",
      image: "/vi.png",
      category: ["react", "next"],
      technologies: ["Next.js", "React"],
      link: "https://www.mytalim.com/"
    },
    {
      id: 7,
      title: "Empower Dreams",
      description: "Creating meaningful change in communities worldwide",
      image: "/REC.png",
      category: ["react", "next"],
      technologies: ["Next.js", "React"],
      link: "https://www.empowerdreamz.org/"
    },
    {
      id: 8,
      title: "Circlepay",
      description: "Technology powered contributions meet cultural savings values. Digitized Ajo. Real-time visibility. Zero drama.",
      image: "/24.10.2025_22.23.03_REC.png",
      category: ["react", "next"],
      technologies: ["Next.js", "React"],
      link: "https://circlepaytech.com//"
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  return (
    <div className="bg-white text-[#0f172a] selection:bg-indigo-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-md border-b border-slate-100' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter">SM<span className="text-indigo-600">.</span></div>
          <div className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {['Stack', 'Lifecycle', 'Pricing', 'Work', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} transition={transitionSettings}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-indigo-600"></span>
              <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px]">Senior Full Stack Engineer</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8">
              Engineering <span className="text-slate-300 italic font-serif font-light">Resilient</span> <br />
              Digital Ecosystems.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed mb-12">
              I am <span className="text-black font-semibold">Shammah Maida</span>. I architect high-performance applications with a focus on scale, security, and human-centric design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE STACK (Bento Grid) */}
      <section id="stack" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-white p-10 rounded-3xl border border-slate-100 flex flex-col justify-between h-80">
            
            <div>
              <h4 className="text-2xl font-bold mb-4">Mobile Systems</h4>
              <p className="text-slate-500 text-sm">Flutter & React Native expert specializing in high-fidelity animations and offline-first syncing.</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col justify-between">
            <FaServer className="text-indigo-400 w-8 h-8" />
            <p className="text-xl font-bold">Scalable <br />Backends</p>
          </div>
          <div className="bg-indigo-600 text-white p-10 rounded-3xl flex flex-col justify-between">
            <FaBolt className="text-white w-8 h-8" />
            <p className="text-xl font-bold">Optimization <br />& Audits</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold text-indigo-600 tracking-[0.5em] uppercase mb-4">About Me</h2>
            <h3 className="text-4xl font-black tracking-tight">Full-Stack Developer</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Image Column - Takes 2 columns */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200">
                  <Image src="/sham.jpg" alt="Shammah Maida" width={500} height={600} className="w-full" />
                </div>
              </div>
            </motion.div>
            
            {/* Content Column - Takes 3 columns */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="md:col-span-3">
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                With over 2 and a half years of experience in web and mobile development, I specialize in creating robust applications using modern technologies. My expertise spans across the full stack, allowing me to deliver end-to-end solutions that meet business goals and exceed user expectations.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                I am passionate about clean code, performance optimization, and creating intuitive user experiences. My approach combines technical excellence with a deep understanding of user needs to build products that make a real difference.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-900">Location</h4>
                    <p className="text-slate-500">Abuja, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-900">Availability</h4>
                    <p className="text-slate-500">Freelance & Full-time</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </a>
                <a 
                  href="/files/shammahcv.pdf" 
                  download
                  className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT LIFECYCLE (The Process) */}
      <section id="lifecycle" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs font-bold text-indigo-600 tracking-[0.5em] uppercase mb-4 text-center">Development Process</h2>
            <h3 className="text-4xl font-black tracking-tight text-center">HOW WE BRING IDEAS TO LIFE</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {[
              { icon: <FaSearch />, title: "Discovery", desc: "Defining product scope, stack selection, and mapping the user journey." },
              { icon: <FaPaintBrush />, title: "Architecture", desc: "Designing system schemas and modular UI components for scalability." },
              { icon: <FaTerminal />, title: "Engineering", desc: "Clean, type-safe development with daily sprints and CI/CD integration." },
              { icon: <FaRocket />, title: "Launch & QA", desc: "Stress testing, store submission, and post-launch performance monitoring." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} initial="initial" whileInView="whileInView" transition={{ delay: i * 0.1 }} className="relative z-10 text-center md:text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-indigo-600 border border-slate-100 shadow-sm mx-auto md:mx-0">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">0{i+1}. {step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
            <div className="hidden md:block absolute top-7 left-0 w-full h-[1px] bg-slate-200 -z-0" />
          </div>
        </div>
      </section>

      {/* 5. PRICING & ENGAGEMENT */}
      <section id="pricing" className="py-32 px-6 bg-slate-900 text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-xs font-bold text-indigo-400 tracking-[0.5em] uppercase mb-4">Engagement</h2>
            <h3 className="text-4xl font-black tracking-tight">INVESTMENT MODELS</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { plan: "Consulting", price: "$70/hr", icon: <FaHourglassHalf />, perks: ["Code Audits", "Feature Refactors", "Technical Advice"] },
              { plan: "Fixed Project", price: "Custom", icon: <FaBriefcase />, perks: ["Full Product Builds", "Defined Milestones", "Post-Launch Support"] },
              { plan: "Retainer", price: "Priority", icon: <FaShieldAlt  />, perks: ["Dedicated Weekly Hours", "Emergency Fixes", "Continuous Dev"] }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} initial="initial" whileInView="whileInView" className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:border-indigo-500 transition-colors">
                <div className="text-indigo-400 mb-8">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-2">{item.plan}</h4>
                <p className="text-3xl font-black mb-8">{item.price}</p>
                <ul className="space-y-4">
                  {item.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                      <FaCheckCircle className="w-4 h-4 text-indigo-500" /> {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WORK (Case Studies with Tabs) */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-black tracking-tight mb-12 text-center">SELECTED WORK</h3>
          
          {/* Project Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('react')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'react' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              React
            </button>
            <button 
              onClick={() => setActiveTab('next')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'next' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Next.js
            </button>
            <button 
              onClick={() => setActiveTab('flutter')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'flutter' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Flutter
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <motion.a 
                key={p.id} 
                variants={fadeInUp} 
                initial="initial" 
                whileInView="whileInView" 
                href={p.link} 
                className="group bg-white p-4 rounded-[2rem] border border-slate-100 block hover:shadow-xl transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
                </div>
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{p.title}</h4>
                    <FaArrowRight className="text-slate-300 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNICAL SERVICES */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6"><FaCode className="text-indigo-600" /></div>
            <h3 className="text-xl font-bold mb-4">Mobile Engineering</h3>
            <p className="text-slate-500 text-sm">Cross-platform mastery for iOS & Android with a single codebase.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6"><FaLaptop className="text-slate-900" /></div>
            <h3 className="text-xl font-bold mb-4">Systems Design</h3>
            <p className="text-slate-500 text-sm">Architecting the skeletal framework of complex web applications.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6"><FaShieldAlt className="text-indigo-600" /></div>
            <h3 className="text-xl font-bold mb-4">Security Audits</h3>
            <p className="text-slate-500 text-sm">Hardening data protection and ensuring API integrity.</p>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Minimal Floating Design) */}
      <section className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto relative">
          <FaQuoteLeft className="absolute top-0 left-0 w-32 h-32 text-indigo-500 opacity-10 -translate-x-12 -translate-y-12" />
          <div className="grid md:grid-cols-2 gap-24 relative z-10">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <p className="text-3xl font-light italic leading-tight mb-8">&quot;Shammah brings a level of technical foresight that saved our project months of refactoring.&quot;</p>
              <div className="flex items-center gap-4 text-indigo-400 font-bold text-xs uppercase tracking-widest"><span className="w-8 h-[1px] bg-indigo-500"></span> Lead Architect, Payton</div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="md:mt-32">
              <p className="text-3xl font-light italic leading-tight mb-8">&quot;Professional, disciplined, and delivers code that is a joy to read.&quot; </p>
              <div className="flex items-center gap-4 text-indigo-400 font-bold text-xs uppercase tracking-widest"><span className="w-8 h-[1px] bg-indigo-500"></span> Founder, Talim</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. ROADMAP (Future Focus) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold text-indigo-600 tracking-[0.5em] uppercase mb-16">Future Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-l border-slate-200">
              <h4 className="font-bold mb-4 text-lg">AI & Mobile</h4>
              <p className="text-slate-400 text-sm">On-device ML models for smarter logistics routing.</p>
            </div>
            <div className="p-8 border-l border-slate-200">
              <h4 className="font-bold mb-4 text-lg">Node Backend</h4>
              <p className="text-slate-400 text-sm">Implementing high-speed calculation engines in Node.</p>
            </div>
            <div className="p-8 border-l border-slate-200">
              <h4 className="font-bold mb-4 text-lg">Open Source</h4>
              <p className="text-slate-400 text-sm">Launching a UI kit for African Fintech applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER & STATUS */}
      <footer id="contact" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Available for 2026 Projects</span>
             </div>
             <a href="mailto:shammahmaida.sm@gmail.com" className="text-2xl md:text-4xl font-black hover:text-indigo-600 transition-colors tracking-tighter block">shammahmaida.sm@gmail.com</a>
             <a href="tel:+2347042924951" className="text-base text-slate-600 hover:text-indigo-600 transition-colors mt-3 block">+234 704 292 4951</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/shammah-hub" className="p-5 bg-slate-50 rounded-2xl hover:bg-black hover:text-white transition-all"><FaGithub className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/shammah-maida123/" className="p-5 bg-slate-50 rounded-2xl hover:bg-black hover:text-white transition-all"><FaLinkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}