"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ArrowDown, MessageCircle, CalendarCheck, User } from "lucide-react"

export function DigitalConcierge() {
  const lineVariants = {
    hidden: { height: 0 },
    show: { height: "3rem", transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section className="py-24 md:py-32 bg-obsidian border-t border-muted-border/30 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="lg:w-5/12 flex flex-col gap-8 w-full text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <SectionLabel>Digital Concierge</SectionLabel>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-warm-ivory uppercase">
                Every Enquiry <br />
                Deserves An <br />
                Answer.
              </h2>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-sm mt-2">
                A connected digital experience can bring property discovery, lead management, advisor assignment and follow-up into one workflow.
              </p>
            </div>
            <div className="text-[10px] tracking-widest text-champagne uppercase px-4 py-1.5 border border-champagne/30 mt-4">
              Sygmia System Demo
            </div>
          </div>

          <div className="lg:w-7/12 w-full flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              transition={{ staggerChildren: 0.3 }}
              className="flex flex-col items-center w-full max-w-md font-sans"
            >
              
              {/* Box 1 */}
              <motion.div variants={boxVariants} className="w-full bg-secondary-dark border border-muted-border p-6 md:p-8 flex flex-col gap-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-champagne uppercase">New Enquiry</span>
                  <span className="text-xs text-muted-ivory/50">Just now</span>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-warm-ivory uppercase">The Orion Residence</h4>
                  <p className="text-xs text-muted-ivory tracking-widest uppercase mt-1">Palm Jumeirah</p>
                </div>
                <div className="border-t border-muted-border/50 pt-4 mt-2 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-warm-ivory">Ahmed Rahman</span>
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Investor</span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Budget</span>
                    <span className="text-sm text-champagne">AED 20–30M</span>
                  </div>
                </div>
              </motion.div>

              {/* Line */}
              <motion.div variants={lineVariants} className="w-[1px] bg-champagne my-2 relative">
                <ArrowDown size={14} className="text-champagne absolute -bottom-3 -left-[6.5px]" />
              </motion.div>

              {/* Box 2 */}
              <motion.div variants={boxVariants} className="w-11/12 bg-secondary-dark border border-muted-border p-5 mt-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-widest text-champagne uppercase">Assigned To</span>
                  <span className="text-sm text-warm-ivory uppercase">Maya Rahman</span>
                  <span className="text-[10px] text-muted-ivory uppercase tracking-widest">Senior Property Advisor</span>
                </div>
                <User className="text-muted-ivory" size={20} strokeWidth={1.5} />
              </motion.div>

              {/* Line */}
              <motion.div variants={lineVariants} className="w-[1px] bg-champagne my-2 relative">
                <ArrowDown size={14} className="text-champagne absolute -bottom-3 -left-[6.5px]" />
              </motion.div>

              {/* Box 3 */}
              <motion.div variants={boxVariants} className="w-10/12 bg-secondary-dark border border-muted-border p-5 mt-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-widest text-champagne uppercase">Follow-Up</span>
                  <div className="flex items-center gap-2 mt-1">
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span className="text-sm text-warm-ivory">WhatsApp sent · 10:42 AM</span>
                  </div>
                  <span className="text-xs text-muted-ivory mt-1">"Viewing requested for tomorrow"</span>
                </div>
              </motion.div>

              {/* Line */}
              <motion.div variants={lineVariants} className="w-[1px] bg-champagne my-2 relative">
                <ArrowDown size={14} className="text-champagne absolute -bottom-3 -left-[6.5px]" />
              </motion.div>

              {/* Box 4 */}
              <motion.div variants={boxVariants} className="w-9/12 bg-champagne text-obsidian p-5 mt-4 flex items-center justify-center gap-3">
                <CalendarCheck size={18} />
                <span className="text-xs font-semibold tracking-widest uppercase">Private Viewing Confirmed</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  )
}
