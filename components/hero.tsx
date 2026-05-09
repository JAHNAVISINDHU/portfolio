"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ChevronDown, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/JAHNAVISINDHU",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jahnavi-sindhu-2b86a0290/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:jahnavisindhu673@gmail.com",
    icon: Mail,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/jahnavisindhu0/",
    icon: Code2,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-chart-2/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I am
            </motion.p>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Nakka Jahnavi</span>{" "}
              <span className="text-primary glow-text">Sindhu</span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-xl sm:text-2xl text-muted-foreground">
                Software Developer
              </span>
              <span className="text-primary">|</span>
              <span className="text-xl sm:text-2xl text-muted-foreground">
                Backend Engineer
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Passionate about building things that matter. I focus on backend systems, 
              clean architecture, and AI-driven solutions. Currently exploring transformer-based 
              deep learning for real-world environmental challenges.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="glow animate-pulse-glow">
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-chart-2 to-primary opacity-50 blur-xl"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Inner ring */}
              <div className="absolute inset-2 rounded-full bg-background" />
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/30 glow">
                <Image
                  src="/images/profile.jpeg"
                  alt="Nakka Jahnavi Sindhu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1 bg-card border border-border rounded-full text-xs font-mono text-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                MERN Stack
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-1 bg-card border border-border rounded-full text-xs font-mono text-chart-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Backend Dev
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
