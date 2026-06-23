import { motion } from 'framer-motion'
import {
  Briefcase,
  ExternalLink,
  Github,
} from 'lucide-react'

const projects = [
  {
    title: 'Resume Analyzer',
    desc:
      'AI-powered application tool that evaluates resumes,ATS score,chat bot',
    tags: ['React', 'Django', 'Weather API'],
    color: '#0EA5E9',
    emoji: '🌤️',

    github: 'https://github.com/Sarankumar-ai-dev/resume_analyze',

    live: 'https://resume-analyze-beige.vercel.app',
  },
  {
    title: 'Weather Prediction App',
    desc:
      'Real-time weather forecasting application with interactive UI and API integration.',
    tags: ['React', 'Django', 'Weather API'],
    color: '#0EA5E9',
    emoji: '🌤️',

    github: 'https://github.com/Sarankumar-ai-dev/weather_prediction',

    live: 'https://weather-prediction-one-rust.vercel.app',
  },

  {
    title: 'Quiz Platform',
    desc:
      'Online quiz platform with quiz creation, unique quiz keys and score tracking.',
    tags: ['React', 'Django', 'MySQL'],
    color: '#7C3AED',
    emoji: '🧩',

    github: 'https://github.com/Sarankumar-ai-dev/Quiz',
    live: 'https://quizapplication-navy.vercel.app',
  },

  {
    title: 'To Do List App',
    desc:
      'Task management application with add, update, delete and completion tracking features.',
    tags: ['React', 'Tailwind', 'Local Storage'],
    color: '#10B981',
    emoji: '📝',

    github: 'https://github.com/Sarankumar-ai-dev/todo-list-project',
    live: 'https://todo-list-project-u8kd.vercel.app',
  },
]

export default function ProjectsSection({
  darkMode,
}) {
  return (
    <section
      id="projects"
      className={`relative py-24 overflow-hidden ${
        darkMode ? 'bg-[#0a0a0f]' : 'bg-[#f8f7ff]'
      }`}
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Briefcase
              size={20}
              className="text-purple-500"
            />

            <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
              Projects
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured
            <span className="text-purple-500">
              {' '}
              Projects
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`group relative rounded-3xl overflow-hidden border backdrop-blur-xl transition-all ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:border-purple-500/40'
                  : 'bg-white/80 border-gray-200 hover:border-purple-400'
              }`}
            >
              <div
                className="h-1 w-full"
                style={{
                  backgroundColor: p.color,
                }}
              />

              <div className="p-7">
                <div className="flex items-start justify-between mb-5">

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{
                      backgroundColor:
                        p.color + '20',
                      border: `1px solid ${p.color}40`,
                    }}
                  >
                    {p.emoji}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className={`p-2 rounded-xl ${
                        darkMode
                          ? 'bg-white/10 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-xl bg-purple-600 text-white"
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    darkMode
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg font-medium"
                      style={{
                        backgroundColor:
                          p.color + '15',
                        color: p.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}