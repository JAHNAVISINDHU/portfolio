"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Leaf, Calendar, Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Self Care Tracking System",
    description:
      "A personal wellness platform that helps users log and monitor daily self-care habits. Tracks mood, sleep, hydration, and activity with visual progress dashboards and streak tracking.",
    icon: Leaf,
    tags: ["React", "Node.js", "Express.js", "SQL"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50",
    features: [
      "Habit tracking with streaks",
      "Visual progress dashboards",
      "Mood and wellness logging",
      "Data visualization",
    ],
  },
  {
    title: "Appointment Booking System",
    description:
      "A full-stack scheduling platform with real-time slot availability, user authentication, and automated booking confirmation. Built for seamless calendar management.",
    icon: Calendar,
    tags: ["JavaScript", "Node.js", "Express.js", "SQL"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
    features: [
      "Real-time availability",
      "User authentication",
      "Automated confirmations",
      "Calendar integration",
    ],
  },
  {
    title: "Satellite Image Change Detection",
    description:
      "Transformer-based deep learning model for accurate multi-temporal satellite image change detection. Aimed at environmental monitoring and land use analysis.",
    icon: Satellite,
    tags: ["Python", "PyTorch", "Transformers", "Remote Sensing"],
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/50",
    features: [
      "Transformer architecture",
      "Multi-temporal analysis",
      "Environmental monitoring",
      "High accuracy detection",
    ],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl bg-card border border-border ${project.borderColor} transition-all duration-500 overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                  >
                    <project.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href="https://github.com/JAHNAVISINDHU"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
            <a
              href="https://github.com/JAHNAVISINDHU?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
