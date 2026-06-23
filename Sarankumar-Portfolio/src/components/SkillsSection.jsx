import { motion } from 'framer-motion'

import {
  Layers,
  Code2,
  Database,
  Brain,
  GitBranch,
  Globe,
  Server,
  Cpu,
  Box,
} from 'lucide-react'

const categories = [
  {
    category: 'Programming',
    skills: [
      {
        name: 'Python',
        level: 90,
        icon: Code2,
      },
    ],
  },

  {
    category: 'Web Development',
    skills: [
      {
        name: 'Django',
        level: 85,
        icon: Server,
      },

      {
        name: 'Django REST Framework',
        level: 82,
        icon: Globe,
      },

      {
        name: 'FAST APIs',
        level: 80,
        icon: Box,
      },
    ],
  },

  {
    category: 'Database',
    skills: [
      {
        name: 'SQL',
        level: 82,
        icon: Database,
      },

      {
        name: 'PostgreSQL',
        level: 78,
        icon: Database,
      },
    ],
  },

  {
    category: 'AI',
    skills: [
      {
        name: 'Machine Learning',
        level: 75,
        icon: Brain,
      },

      {
        name: 'Deep Learning',
        level: 70,
        icon: Cpu,
      },

      {
        name: 'Generative AI',
        level: 68,
        icon: Brain,
      },
      {
        name: 'AI Automation',
        level: 64,
        icon: Brain,
      },
    ],
  },

  {
    category: 'Concepts',
    skills: [
      {
        name: 'Data Structures',
        level: 80,
        icon: Code2,
      },

      {
        name: 'Algorithms',
        level: 78,
        icon: Cpu,
      },
    ],
  },

  {
    category: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        level: 88,
        icon: GitBranch,
      },

      {
        name: 'GitHub',
        level: 88,
        icon: GitBranch,
      },
    ],
  },
]

export default function SkillsSection({
  darkMode,
}) {
  return (
    <section
      id="skills"
      className={`relative py-24 overflow-hidden ${
        darkMode
          ? 'bg-[#0a0a0f]'
          : 'bg-[#f8f7ff]'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
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
            <Layers
              size={20}
              className="text-purple-500"
            />

            <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">
              Skills
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            My
            <span className="text-purple-500">
              {' '}
              Tech Stack
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: ci * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className={`rounded-3xl p-7 border backdrop-blur-xl transition-all ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:border-purple-500/40'
                  : 'bg-white/80 border-gray-200 hover:border-purple-400'
              }`}
            >
              {/* Category */}
              <h3
                className={`text-xl font-bold mb-6 ${
                  darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                {cat.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-col gap-5">

                {cat.skills.map((s, si) => {
                  const Icon = s.icon

                  return (
                    <motion.div
                      key={s.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          ci * 0.1 +
                          si * 0.07,
                      }}
                    >
                      {/* Skill Top */}
                      <div className="flex items-center justify-between mb-2">

                        <div className="flex items-center gap-3">

                          {/* Icon */}
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              darkMode
                                ? 'bg-purple-500/10'
                                : 'bg-purple-100'
                            }`}
                          >
                            <Icon
                              size={18}
                              className="text-purple-500"
                            />
                          </div>

                          {/* Skill Name */}
                          <span
                            className={`text-sm font-medium ${
                              darkMode
                                ? 'text-gray-300'
                                : 'text-gray-700'
                            }`}
                          >
                            {s.name}
                          </span>
                        </div>

                        {/* Percentage */}
                        <span className="text-xs font-semibold text-purple-500">
                          {s.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          darkMode
                            ? 'bg-white/10'
                            : 'bg-gray-200'
                        }`}
                      >
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${s.level}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay:
                              ci * 0.1 +
                              si * 0.07,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400"
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}