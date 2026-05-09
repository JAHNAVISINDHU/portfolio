"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Cloud, Brain, Music, BookOpen } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern technologies",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Designing scalable APIs and database architectures",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on cloud platforms",
  },
  {
    icon: Brain,
    title: "AI/ML Research",
    description: "Exploring transformer models for satellite image analysis",
  },
]

const interests = [
  { icon: Music, label: "Listening to Music" },
  { icon: BookOpen, label: "Reading Books" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-primary glow-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m <span className="text-primary font-semibold">Nakka Jahnavi Sindhu</span> - a software developer
                with a strong focus on backend systems, clean architecture, and AI-driven solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work spans full-stack web development, database management, and deep learning research.
                I love turning complex problems into elegant, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently building a transformer-based deep learning model for satellite image change detection -
                applying AI to real-world environmental challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-mono text-sm">Always learning, always shipping.</span> I believe
                great software is both technically solid and genuinely useful.
              </p>

              {/* Interests */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">When I&apos;m not coding:</p>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
                    >
                      <interest.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "9.25", label: "CGPA" },
            { value: "5+", label: "Projects" },
            { value: "5", label: "HackerRank Stars" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card/50 border border-border"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary glow-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
