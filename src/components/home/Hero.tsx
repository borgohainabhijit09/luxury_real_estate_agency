"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { CinematicVideo } from "@/components/media/CinematicVideo"
import Link from "next/link"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <CinematicVideo
          src="/videos/dubai-establishing.mp4.mp4"
          poster="/images/hero-poster.jpg"
          className=""
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-obsidian/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/20 to-obsidian/90 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16 flex flex-col justify-end pb-24 md:pb-32 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs tracking-[0.2em] text-champagne uppercase font-medium">
              Dubai · Private Real Estate
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-warm-ivory mb-6 md:mb-8"
          >
            LIVE <br />
            ABOVE <br />
            ORDINARY.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-ivory text-lg md:text-xl font-light tracking-wide max-w-md mb-10 md:mb-12"
          >
            Curated residences. <br className="hidden md:block" />
            Exceptional addresses. Dubai.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link href="/properties">
              <Button variant="primary">Explore Residences</Button>
            </Link>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://wa.me/919113067486', '_blank')}
            >
              Private Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-5 md:right-12 lg:right-16 flex flex-col items-center gap-3 z-10 hidden md:flex"
      >
        <span className="text-[10px] tracking-[0.2em] text-muted-ivory uppercase writing-vertical-rl transform rotate-180">
          Scroll
        </span>
        <motion.div
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
        >
          <motion.div className="absolute w-full bg-champagne h-full top-0 left-0" />
        </motion.div>
      </motion.div>
    </section>
  )
}
