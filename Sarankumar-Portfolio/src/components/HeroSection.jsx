import { motion } from 'framer-motion'
import {
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Mail,
  Code2,
} from 'lucide-react'

const dots = [
  { x: '55%', y: '20%', size: 8, delay: 0 },
  { x: '72%', y: '35%', size: 5, delay: 0.5 },
  { x: '85%', y: '55%', size: 7, delay: 1 },
  { x: '60%', y: '65%', size: 4, delay: 1.5 },
  { x: '48%', y: '40%', size: 6, delay: 0.8 },
  { x: '92%', y: '30%', size: 5, delay: 0.3 },
]

const socials = [
  {
    icon: Github,
    href: 'https://github.com/Sarankumar-ai-dev',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href:
      'https://www.linkedin.com/in/sarankumar-s-3b38362a4/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href:
       'mailto:sarankumar.ai.dev@gmail.com',
    label: 'Email',
  },
  {
    icon: Code2,
    href:
      'https://leetcode.com/u/Sarankumar_ai_dev/',
    label: 'Code',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection({
  darkMode,
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? 'bg-[#0a0a0f]'
            : 'bg-[#f8f7ff]'
        }`}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-light/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Dots */}
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-purple/40"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: d.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              variants={item}
              className="mb-6"
            >
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                  darkMode
                    ? 'bg-brand-purple/10 border-brand-purple/30 text-brand-light'
                    : 'bg-brand-purple/5 border-brand-purple/20 text-brand-purple'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />

                Full Stack Developer |
                AI Enthusiast
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={item}
              className="mb-6"
            >
              <h1
                className={`text-5xl lg:text-7xl font-bold leading-tight ${
                  darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                Hi, I'm
              </h1>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gradient">
                Sarankumar
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className={`text-lg leading-relaxed mb-8 max-w-lg ${
                darkMode
                  ? 'text-gray-400'
                  : 'text-gray-600'
              }`}
            >
              I build modern web
              applications using React,
              Django and AI
              technologies. Passionate
              about problem solving and
              creating impactful
              solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mb-10"
            >
              {/* View Projects */}
              <motion.button
                onClick={() =>
                  document
                    .querySelector(
                      '#projects'
                    )
                    ?.scrollIntoView({
                      behavior:
                        'smooth',
                    })
                }
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    '0 0 25px rgba(124,58,237,0.5)',
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  darkMode
                    ? 'bg-brand-purple hover:bg-brand-violet text-white'
                    : 'bg-brand-purple hover:bg-brand-violet text-black'
                }`}
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              {/* Contact Me */}
              <motion.button
                onClick={() =>
                  document
                    .querySelector(
                      '#contact'
                    )
                    ?.scrollIntoView({
                      behavior:
                        'smooth',
                    })
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-colors ${
                  darkMode
                    ? 'border-white/20 text-white hover:bg-white/5'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Contact Me
                <Send size={14} />
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              {socials.map(
                ({
                  icon: Icon,
                  href,
                  label,
                }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={
                      label !== 'Email'
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      label !== 'Email'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={label}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                      darkMode
                        ? 'border-white/20 text-gray-400 hover:border-brand-purple hover:text-brand-purple hover:bg-brand-purple/10'
                        : 'border-gray-300 text-gray-600 hover:border-brand-purple hover:text-brand-purple'
                    }`}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.3,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Rotating Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-purple/30"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-4 rounded-full border border-brand-light/20"
              />

              {/* Profile Image */}
              <div
                className={`absolute inset-6 rounded-full overflow-hidden border-4 border-brand-purple/40 glow-purple ${
                  darkMode
                    ? 'bg-gradient-to-b from-purple-900/40 to-[#0a0a0f]'
                    : 'bg-gradient-to-b from-purple-100 to-purple-50'
                }`}
              >
                <img
                  src="/profile.jpg"
                  alt="Sarankumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}