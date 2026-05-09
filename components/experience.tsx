"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Aditya University",
    location: "Surampalem, Andhra Pradesh",
    period: "May 2025 - July 2025",
    type: "Internship",
    description: [
      "Built and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
      "Developed responsive, user-friendly interfaces with React, HTML5, CSS3",
      "Implemented RESTful APIs and integrated with MongoDB for efficient data storage and retrieval",
      "Optimized both front-end and back-end performance for speed, scalability, and cross-browser compatibility",
      "Collaborated in an Agile environment and stayed current with emerging web technologies and best practices",
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Agile"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Where I&apos;ve Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Work <span className="text-primary glow-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-border"
              >
                {/* Header with badge and title */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:text-right">
                    <span className="flex items-center gap-2 sm:justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 sm:justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description points - left aligned */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
