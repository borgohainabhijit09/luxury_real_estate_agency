"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { CinematicVideo } from "@/components/media/CinematicVideo"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 lg:py-64 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <CinematicVideo
          src="/videos/dubai-night.mp4.mp4"
          poster="/images/dubai-night-poster.jpg"
          className=""
        />
        <div className="absolute inset-0 bg-obsidian/70" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.2em] text-champagne uppercase font-medium mb-8">
            Dubai · UAE
          </span>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-warm-ivory uppercase mb-6">
            Your Next <br />
            Address <br />
            Starts Here.
          </h2>
          
          <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide mb-12">
            Tell us what you're looking for. <br className="hidden md:block" />
            We'll take it from there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <Button 
              variant="primary"
              onClick={() => window.open('https://wa.me/919113067486', '_blank')}
            >
              Private Consultation
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://wa.me/919113067486', '_blank')}
            >
              WhatsApp An Advisor
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
