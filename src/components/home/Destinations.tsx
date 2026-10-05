"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { CinematicVideo } from "@/components/media/CinematicVideo"
import { ArrowRight } from "lucide-react"

export function Destinations() {
  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="flex flex-col gap-6">
              <SectionLabel>Dubai Destinations</SectionLabel>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-ivory">
                THE ADDRESS <br />
                CHANGES EVERYTHING.
              </h2>
            </div>
            <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-sm">
              From waterfront privacy to the energy of Downtown, discover the addresses that define Dubai living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
            {/* Large Feature: Palm Jumeirah */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-12 lg:col-span-8 group cursor-pointer"
            >
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[16/10] overflow-hidden bg-secondary-dark w-full mb-6">
                <CinematicVideo
                  src="/videos/palm-jumeirah.mp4.mp4"
                  poster="/images/destinations/palm-jumeirah.png"
                  className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-ivory tracking-widest uppercase">Palm Jumeirah</span>
                  <span className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">Private Waterfront</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-warm-ivory uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hidden md:flex">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            {/* Smaller Feature 1: Dubai Hills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 lg:col-span-4 group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary-dark w-full mb-6 mt-0 lg:mt-24">
                <img
                  src="/images/destinations/dubai-hills.png"
                  alt="Dubai Hills"
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.svg")}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-ivory tracking-widest uppercase">Dubai Hills</span>
                  <span className="font-serif text-2xl md:text-3xl text-warm-ivory uppercase">Space To Breathe</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Feature: Downtown Dubai */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 lg:col-span-7 group cursor-pointer"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-secondary-dark w-full mb-6">
                <CinematicVideo
                  src="/videos/downtown-dubai.mp4.mp4"
                  poster="/images/destinations/downtown.png"
                  className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-ivory tracking-widest uppercase">Downtown Dubai</span>
                  <span className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">The City At Your Doorstep</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-warm-ivory uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hidden md:flex">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            {/* Smaller Feature 2: Dubai Marina */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-12 lg:col-span-5 group cursor-pointer flex flex-col justify-end"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary-dark w-full mb-6">
                <img
                  src="/images/destinations/dubai-marina.png"
                  alt="Dubai Marina"
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.svg")}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-ivory tracking-widest uppercase">Dubai Marina</span>
                  <span className="font-serif text-2xl md:text-3xl text-warm-ivory uppercase">Life By The Water</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
