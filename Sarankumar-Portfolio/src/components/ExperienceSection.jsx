import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Full Stack Developer Intern', company: 'Tech Startup', period: 'Jan 2024 – Present',
    desc: 'Building and maintaining web applications using React and Django. Collaborating with cross-functional teams to deliver high-quality software.',
    tags: ['React', 'Django', 'MySQL', 'REST API'], color: '#7C3AED',
  },
  {
    role: 'Frontend Developer', company: 'Freelance', period: 'Jun 2023 – Dec 2023',
    desc: 'Developed responsive web applications for various clients. Focused on creating clean, intuitive user interfaces with modern CSS frameworks.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'], color: '#0EA5E9',
  },
  {
    role: 'AI/ML Enthusiast', company: 'Self Learning', period: 'Jan 2023 – Present',
    desc: 'Exploring AI and machine learning technologies. Building projects that leverage modern AI models for real-world applications.',
    tags: ['Python', 'AI/ML', 'TensorFlow'], color: '#10B981',
  },
]

export default function ExperienceSection({ darkMode }) {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Briefcase size={20} className="text-brand-purple" />
            <span className="text-brand-purple font-semibold text-sm uppercase tracking-widest">Experience</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-6 sm:left-1/2 top-0 bottom-0 w-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} pl-16 sm:pl-0`}
              >
                <div
                  className="absolute left-4 sm:left-1/2 top-6 w-5 h-5 rounded-full border-2 border-brand-purple -translate-x-1/2 z-10"
                  style={{ backgroundColor: exp.color }}
                />
                <div className={`w-full sm:w-5/12 ${i % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-5 ${darkMode ? 'bg-[#111118] border border-white/5' : 'bg-white border border-gray-100 shadow-sm'}`}
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{ backgroundColor: exp.color + '20', color: exp.color }}>
                      <Calendar size={11} /> {exp.period}
                    </div>
                    <h3 className={`font-bold text-sm mb-0.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className="text-brand-purple text-xs font-semibold mb-2">{exp.company}</p>
                    <p className={`text-xs leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-medium ${darkMode ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}