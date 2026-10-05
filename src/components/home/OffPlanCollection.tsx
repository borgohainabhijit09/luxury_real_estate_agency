"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"

export function OffPlanCollection() {
  const projects = [
    {
      name: "Véra Residences",
      location: "Downtown Dubai",
      price: "From AED 3.8M",
      completion: "Completion 2029",
      image: "/images/properties/vera.png"
    },
    {
      name: "Solara",
      location: "Dubai Creek Harbour",
      price: "From AED 2.9M",
      completion: "Completion 2028",
      image: "/images/properties/solara.png"
    },
    {
      name: "Azure Palm",
      location: "Palm Jumeirah",
      price: "From AED 6.4M",
      completion: "Completion 2029",
      image: "/images/properties/azure-palm.png"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col gap-6 text-center items-center">
            <SectionLabel>Off-Plan</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-ivory uppercase">
              What's Next <br />
              Starts Here.
            </h2>
            <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-md mt-4">
              Discover selected developments shaping the next generation of Dubai addresses.
            </p>
            <span className="text-[10px] tracking-widest text-champagne uppercase mt-4">
              Demonstration Content
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col gap-6"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary-dark w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.svg")}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20 pointer-events-none" />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="font-serif text-2xl text-warm-ivory uppercase leading-tight mb-1">
                        {project.name}
                      </span>
                      <span className="text-xs text-muted-ivory tracking-wider uppercase">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-champagne font-medium tracking-wide">
                    {project.price}
                  </div>

                  <div className="text-[11px] text-muted-ivory tracking-widest uppercase">
                    {project.completion}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
