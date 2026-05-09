"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Star, Trophy } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Aditya Engineering College",
    location: "Andhra Pradesh",
    period: "2023 - 2027",
    score: "CGPA: 9.25/10",
    percentage: "85%",
    current: true,
  },
  {
    degree: "Intermediate (Class XII)",
    field: "MPC - Mathematics, Physics, Chemistry",
    institution: "KSN Junior College",
    location: "Andhra Pradesh",
    period: "2021 - 2023",
    score: "98%",
    percentage: "98%",
    current: false,
  },
  {
    degree: "Secondary School Certificate (Class X)",
    field: "General Studies",
    institution: "JNMPL High School",
    location: "Andhra Pradesh",
    period: "Completed 2021",
    score: "97%",
    percentage: "97%",
    current: false,
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2024",
    description: "Participated in India's largest hackathon, showcasing problem-solving skills",
  },
  {
    icon: Star,
    title: "5-Star HackerRank Badges",
    description: "Achieved 5-star ratings in C, Python, Java, and Problem Solving",
  },
  {
    icon: Award,
    title: "Programming Certifications",
    description: "Completed certifications in C, Python, Java, and more",
  },
  {
    icon: GraduationCap,
    title: "Technical Fest Volunteer",
    description: "Volunteered in organizing college technical and cultural fests",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Academic Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Education & <span className="text-primary glow-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold mb-8 flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px] ${
                    edu.current ? "bg-primary glow animate-pulse" : "bg-muted-foreground"
                  }`} />

                  <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    {edu.current && (
                      <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono mb-2">
                        Currently Pursuing
                      </span>
                    )}
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-primary text-sm mb-1">{edu.field}</p>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="text-primary font-mono font-bold">{edu.score}</span>
                    </div>

                    {/* Score bar */}
                    <div className="mt-3">
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: edu.percentage } : {}}
                          transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold mb-8 flex items-center gap-2"
            >
              <Trophy className="w-6 h-6 text-primary" />
              Achievements
            </motion.h3>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
