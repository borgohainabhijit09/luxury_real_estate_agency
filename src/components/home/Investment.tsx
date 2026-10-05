"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ArrowRight } from "lucide-react"

export function Investment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-[#11110F] relative overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start"
        >
          {/* Text Area */}
          <div className="flex flex-col gap-6 lg:w-5/12">
            <motion.div variants={itemVariants}>
              <SectionLabel>Investment</SectionLabel>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-ivory uppercase"
            >
              Property is <br />
              More Than <br />
              An Address.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-sm mt-4 mb-8"
            >
              Understand the opportunity behind the property, with insights shaped around location, demand and long-term value.
            </motion.p>
            
            <motion.button
              variants={itemVariants}
              className="group flex items-center justify-between gap-6 bg-transparent border border-muted-border text-warm-ivory uppercase text-xs tracking-widest py-4 px-8 hover:border-champagne hover:text-champagne transition-colors duration-500 w-max"
            >
              <span>Speak To An Investment Advisor</span>
              <ArrowRight size={16} className="transform transition-transform duration-500 ease-out group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Visualization Area */}
          <div className="lg:w-6/12 flex flex-col justify-center w-full">
            <motion.div variants={itemVariants} className="text-[10px] tracking-widest text-champagne uppercase mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-champagne block"></span>
              Illustrative Demo Data
            </motion.div>

            <div className="flex flex-col gap-12 border-l border-muted-border pl-8 md:pl-12">
              <motion.div variants={itemVariants} className="flex flex-col gap-2 relative">
                <div className="absolute -left-[33px] md:-left-[49px] top-4 w-4 h-[1px] bg-champagne"></div>
                <span className="font-serif text-5xl md:text-6xl text-warm-ivory">AED 4.8M</span>
                <span className="text-xs text-muted-ivory tracking-widest uppercase">Average acquisition</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 relative">
                <div className="absolute -left-[33px] md:-left-[49px] top-4 w-4 h-[1px] bg-champagne"></div>
                <span className="font-serif text-5xl md:text-6xl text-warm-ivory">6.7%</span>
                <span className="text-xs text-muted-ivory tracking-widest uppercase">Indicative rental yield</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 relative">
                <div className="absolute -left-[33px] md:-left-[49px] top-4 w-4 h-[1px] bg-champagne"></div>
                <span className="font-serif text-5xl md:text-6xl text-warm-ivory">AED 321K</span>
                <span className="text-xs text-muted-ivory tracking-widest uppercase">Annual rental potential</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
