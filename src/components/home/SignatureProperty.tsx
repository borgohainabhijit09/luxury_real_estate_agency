"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ArrowRight } from "lucide-react"
import { CinematicVideo } from "@/components/media/CinematicVideo"

export function SignatureProperty() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="col-span-1 lg:col-span-7 xl:col-span-8">
              <motion.div variants={itemVariants} className="mb-6">
                <SectionLabel>Featured Residence</SectionLabel>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-ivory"
              >
                A RESIDENCE <br className="hidden md:block" />
                WORTH ARRIVING <br className="hidden md:block" />
                HOME TO.
              </motion.h2>
            </div>
            <div className="col-span-1 lg:col-span-5 xl:col-span-4">
              <motion.p
                variants={itemVariants}
                className="text-muted-ivory text-base md:text-lg font-light tracking-wide leading-relaxed"
              >
                A private waterfront residence where architecture, light and space
                come together in extraordinary balance.
              </motion.p>
            </div>
          </div>

          {/* Media & Info Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* 60% Visual Area */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 lg:col-span-7 xl:col-span-8 group relative overflow-hidden bg-[#11110F] aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] w-full cursor-pointer"
            >
              <CinematicVideo
                src="/videos/signature-residence.mp4.mp4"
                poster="/images/signature-residence.jpg"
                className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/10" />
            </motion.div>

            {/* 40% Information Area */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col justify-center py-4"
            >
              <div className="flex flex-col gap-12 group cursor-pointer">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-muted-ivory uppercase block mb-4">
                    Palm Jumeirah <br />
                    Dubai
                  </span>
                  <h3 className="font-serif text-4xl text-warm-ivory uppercase leading-tight mb-8">
                    The Orion <br />
                    Residence
                  </h3>
                  <div className="text-xl text-champagne mb-8">
                    AED 28,500,000
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-ivory tracking-wider uppercase">
                    <span>5 Bedrooms</span>
                    <span>7 Bathrooms</span>
                    <span>9,240 SQ.FT.</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs tracking-widest text-warm-ivory uppercase group-hover:text-champagne transition-colors duration-500">
                  <span>View Residence</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transform transition-transform duration-500 ease-out group-hover:translate-x-2"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
