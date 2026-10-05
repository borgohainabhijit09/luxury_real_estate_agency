"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ArrowRight } from "lucide-react"

export function PropertyAdvisor() {
  return (
    <section className="py-24 md:py-32 bg-secondary-dark relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <SectionLabel>Private Property Advisor</SectionLabel>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-warm-ivory uppercase">
                Your Property. <br />
                Your Advisor.
              </h2>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-sm mt-2">
                A private advisory experience built around what you're looking for — not what's easiest to sell.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <button 
                onClick={() => window.open('https://wa.me/919113067486', '_blank')}
                className="group flex items-center justify-between gap-6 bg-champagne text-obsidian uppercase text-xs tracking-widest py-4 px-8 transition-all duration-500 hover:bg-warm-ivory w-full md:w-max"
              >
                <span className="font-medium">WhatsApp Maya</span>
                <ArrowRight size={16} className="transform transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </button>
              
              <button className="text-xs text-warm-ivory uppercase tracking-widest border-b border-muted-border pb-1 hover:text-champagne hover:border-champagne transition-colors duration-300 w-max">
                Book A Private Viewing
              </button>
            </div>
            
            <div className="text-[10px] tracking-widest text-muted-ivory/50 uppercase mt-8">
              Demonstration Content
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] bg-obsidian overflow-hidden max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <img
                src="/images/advisor-maya.png"
                alt="Maya Rahman"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.svg")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian/90 to-transparent p-8 md:p-12 pt-24 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">Maya Rahman</h3>
                  <span className="text-xs tracking-widest text-champagne uppercase">Senior Property Advisor · Dubai</span>
                </div>
                
                <div className="flex items-center gap-6 text-[10px] tracking-widest text-muted-ivory uppercase mt-4">
                  <span>12 Years Experience</span>
                  <span className="w-1 h-1 bg-muted-ivory/50 rounded-full"></span>
                  <span>Private Client Advisory</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
