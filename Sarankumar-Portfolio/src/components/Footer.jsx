import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com/Sarankumar-ai-dev',          label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sarankumar-s-3b38362a4/',      label: 'LinkedIn' },
  { icon: Mail,     href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sarankumar.ai.dev@gmail.com',           label: 'Email' },
  { icon: Code2,    href: 'https://leetcode.com/u/Sarankumar_ai_dev/',         label: 'Code' },
]

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t py-10 ${darkMode ? 'border-white/5 bg-[#0a0a0f]' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-light flex items-center justify-center">
              <span className="text-white font-bold text-xs">SK</span>
            </div>
            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sarankumar</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm transition-colors ${darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  darkMode
                    ? 'border-white/10 text-gray-500 hover:border-brand-purple hover:text-brand-purple'
                    : 'border-gray-200 text-gray-400 hover:border-brand-purple hover:text-brand-purple'
                }`}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          <p className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Made with <Heart size={10} className="text-red-500 fill-red-500" /> by Sarankumar © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}