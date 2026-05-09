"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/JAHNAVISINDHU", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jahnavi-sindhu-2b86a0290/", icon: Linkedin },
  { name: "Email", href: "mailto:jahnavisindhu673@gmail.com", icon: Mail },
  { name: "LeetCode", href: "https://leetcode.com/u/jahnavisindhu0/", icon: Code2 },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-primary glow-text">
              JS
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Software Developer & Backend Engineer passionate about building impactful solutions 
              with clean code and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Nakka Jahnavi Sindhu
          </p>
          <p className="text-sm text-muted-foreground">
            2025. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
