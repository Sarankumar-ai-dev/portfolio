import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  MessageSquare,
} from 'lucide-react'

const infos = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sarankumar.ai.dev@gmail.com',
    href:  'https://mail.google.com/mail/u/0/?fs=1&to=sarankumar.ai.dev@gmail.com&tf=cm',
    color: '#7C3AED',
  },

  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sarankumar',
    href: 'https://www.linkedin.com/in/sarankumar-s-3b38362a4/',
    color: '#0A66C2',
  },
]

export default function ContactSection({
  darkMode,
}) {
  return (
    <section
      id="contact"
      className={`relative py-24 overflow-hidden ${
        darkMode
          ? 'bg-[#0a0a0f]'
          : 'bg-[#f8f7ff]'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageSquare
              size={20}
              className="text-purple-500"
            />

            <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
              Contact
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold mb-5 ${
              darkMode
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            Get In
            <span className="text-purple-500">
              {' '}
              Touch
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode
                ? 'text-gray-400'
                : 'text-gray-600'
            }`}
          >
            Feel free to connect with me
            through email or LinkedIn.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-8">

          {infos.map(
            ({
              icon: Icon,
              label,
              value,
              href,
              color,
            }) => (
              <motion.a
                key={label}
                href={href}
                target={
                  href.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`p-8 rounded-3xl border backdrop-blur-xl transition-all ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/40'
                    : 'bg-white/80 border-gray-200 hover:border-purple-400'
                }`}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor:
                      color + '20',
                  }}
                >
                  <Icon
                    size={30}
                    style={{ color }}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
                >
                  {label}
                </h3>

                {/* Value */}
                <p className="text-purple-500 font-medium break-all">
                  {value}
                </p>
              </motion.a>
            )
          )}
        </div>
      </div>
    </section>
  )
}