import { motion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Code2,
  Brain,
} from 'lucide-react'

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: `B.Tech – Artificial Intelligence and Data Science
P.S.R.R College of Engineering, Sivakasi (2023–2027)

Higher Secondary (12th)
G.S Hindu Higher Secondary School, Srivilliputhur (2022–2023)

CGPA: 7.8
Percentage: 72%`,
  },
  {
    icon: Code2,
    title: 'Focus',
    desc: `Full Stack Development
Frontend Development
Backend Development
REST APIs
Responsive UI Design`,
  },
  {
    icon: Brain,
    title: 'Backend & AI',
    desc: `Python
Django
Machine Learning
Deep Learning
AI-Powered Applications`,
  },
  {
    icon: MapPin,
    title: 'Location',
    desc: `Srivilliputhur,
Virudhunagar District,
Tamil Nadu, India`,
  },
]

export default function AboutSection({ darkMode }) {
  return (
    <section
      id="about"
      className={`relative py-28 overflow-hidden ${
        darkMode ? 'bg-[#0a0a0f]' : 'bg-[#f8f7ff]'
      }`}
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border mb-5 ${
              darkMode
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                : 'bg-purple-100 border-purple-200 text-purple-700'
            }`}
          >
            About Me
          </span>

          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About
            <span className="text-purple-500">
              {' '}
              Me
            </span>
          </h2>

          <p
            className={`max-w-3xl mx-auto text-lg leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Motivated B.Tech Artificial Intelligence and
            Data Science student passionate about Full Stack
            Development, scalable web applications, and
            AI-driven solutions.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`p-6 rounded-3xl border backdrop-blur-xl transition-all whitespace-pre-line ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/40'
                    : 'bg-white/80 border-gray-200 hover:border-purple-400'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-400 flex items-center justify-center mb-5 shadow-lg">
                  <Icon size={24} className="text-white" />
                </div>

                <h3
                  className={`text-xl font-semibold mb-3 ${
                    darkMode
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  {card.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-14 p-8 rounded-3xl border text-center backdrop-blur-xl ${
            darkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Passionate About Technology & Innovation
          </h3>

          <p
            className={`max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Skilled in Python, React, Django, and AI-based
            technologies with a strong interest in building
            impactful digital products and solving
            real-world problems through software engineering.
          </p>
        </motion.div>
      </div>
    </section>
  )
}