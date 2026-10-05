"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#11110F] border border-muted-border p-8 md:p-12 overflow-y-auto max-h-[90vh] no-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-muted-ivory hover:text-champagne transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[10px] tracking-widest text-champagne uppercase block mb-3">
                  Private Advisory
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">
                  Submit an Enquiry
                </h3>
              </div>

              <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-[10px] tracking-widest text-muted-ivory uppercase transition-colors group-focus-within:text-champagne">Full Name</label>
                  <input required type="text" className="bg-transparent border-b border-muted-border pb-2 text-warm-ivory focus:outline-none focus:border-champagne transition-colors" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-[10px] tracking-widest text-muted-ivory uppercase transition-colors group-focus-within:text-champagne">Email Address</label>
                    <input required type="email" className="bg-transparent border-b border-muted-border pb-2 text-warm-ivory focus:outline-none focus:border-champagne transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-[10px] tracking-widest text-muted-ivory uppercase transition-colors group-focus-within:text-champagne">Phone Number</label>
                    <input required type="tel" className="bg-transparent border-b border-muted-border pb-2 text-warm-ivory focus:outline-none focus:border-champagne transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label className="text-[10px] tracking-widest text-muted-ivory uppercase transition-colors group-focus-within:text-champagne">Interest</label>
                  <select className="bg-transparent border-b border-muted-border pb-2 text-warm-ivory focus:outline-none focus:border-champagne transition-colors appearance-none cursor-pointer">
                    <option className="bg-obsidian">Buying a Property</option>
                    <option className="bg-obsidian">Renting a Property</option>
                    <option className="bg-obsidian">Off-Plan Investment</option>
                    <option className="bg-obsidian">General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label className="text-[10px] tracking-widest text-muted-ivory uppercase transition-colors group-focus-within:text-champagne">Message (Optional)</label>
                  <textarea rows={3} className="bg-transparent border-b border-muted-border pb-2 text-warm-ivory focus:outline-none focus:border-champagne transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="mt-4 bg-champagne text-obsidian uppercase tracking-widest text-xs font-medium py-4 px-8 hover:bg-warm-ivory transition-colors duration-500 w-full">
                  Request Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
