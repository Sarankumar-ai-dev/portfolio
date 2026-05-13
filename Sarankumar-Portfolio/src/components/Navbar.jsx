import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sun,
  Moon,
  Download,
  Menu,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const FILE_ID =
  '13pcEmgIEQ9z9Er2FseLgq-yJ6oQrQcxh'
const VIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/view?usp=sharing`

const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [scrolled, setScrolled] =
    useState(false)

  const [active, setActive] =
    useState('Home')

  const [menuOpen, setMenuOpen] =
    useState(false)

  useEffect(() => {
    const fn = () =>
      setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', fn)

    return () =>
      window.removeEventListener(
        'scroll',
        fn
      )
  }, [])

  const go = (label, href) => {
    setActive(label)
    setMenuOpen(false)

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5'
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{
                scale: 1.05,
              }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  SK
                </span>
              </div>

              <span
                className={`font-semibold text-lg hidden sm:block ${
                  darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                Sarankumar
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() =>
                    go(
                      link.label,
                      link.href
                    )
                  }
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active ===
                    link.label
                      ? 'text-purple-500'
                      : darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Sun
                  size={14}
                  className={
                    darkMode
                      ? 'text-gray-500'
                      : 'text-yellow-500'
                  }
                />

                <button
                  onClick={() =>
                    setDarkMode(
                      !darkMode
                    )
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                    darkMode
                      ? 'bg-purple-600'
                      : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    animate={{
                      x: darkMode
                        ? 22
                        : 2,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md"
                  />
                </button>

                <Moon
                  size={14}
                  className={
                    darkMode
                      ? 'text-violet-400'
                      : 'text-gray-400'
                  }
                />
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <motion.button
                  onClick={() =>
                    window.open(
                      VIEW_URL,
                      '_blank'
                    )
                  }
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="px-4 py-2 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-sm font-semibold transition-all"
                >
                  View Resume
                </motion.button>

                {/* Download Resume */}
                <motion.a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </motion.a>
              </div>

              {/* Mobile Menu */}
              <button
                onClick={() =>
                  setMenuOpen(
                    !menuOpen
                  )
                }
                className={`lg:hidden p-2 rounded-lg ${
                  darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                {menuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className={`lg:hidden border-t ${
                darkMode
                  ? 'bg-[#0d0d18]'
                  : 'bg-white'
              }`}
            >
              <div className="px-4 py-4 flex flex-col gap-2">

                {navLinks.map(
                  (link) => (
                    <button
                      key={
                        link.label
                      }
                      onClick={() =>
                        go(
                          link.label,
                          link.href
                        )
                      }
                      className="text-left px-4 py-3 rounded-xl text-sm"
                    >
                      {link.label}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    window.open(
                      VIEW_URL,
                      '_blank'
                    )
                  }
                  className="px-4 py-3 rounded-xl border border-purple-500 text-purple-500 text-sm font-semibold"
                >
                  View Resume
                </button>

                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 text-white text-sm font-semibold"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}