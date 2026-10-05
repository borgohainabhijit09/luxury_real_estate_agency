"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, SlidersHorizontal, X } from "lucide-react"

interface PropertyFiltersProps {
  onSearch: (filters: { location: string; beds: string }) => void
}

export function PropertyFilters({ onSearch }: PropertyFiltersProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [location, setLocation] = useState("All Locations")
  const [beds, setBeds] = useState("Any")

  const handleSearch = () => {
    onSearch({ location, beds })
    setIsMobileFiltersOpen(false)
  }

  const locations = ["All Locations", "Palm Jumeirah", "Downtown Dubai", "Dubai Hills", "Dubai Marina", "Dubai Creek Harbour"]
  const bedOptions = ["Any", "1–4 Beds", "2–4 Beds", "3 Beds", "4 Beds", "5 Beds"]

  const FiltersContent = () => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
        {/* Location */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="text-[10px] tracking-widest text-muted-ivory uppercase">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-warm-ivory border-b border-muted-border pb-2 focus:outline-none focus:border-champagne text-sm uppercase tracking-wide appearance-none cursor-pointer pr-8 w-full md:w-48"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-obsidian text-warm-ivory">
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="text-[10px] tracking-widest text-muted-ivory uppercase">Bedrooms</label>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="bg-transparent text-warm-ivory border-b border-muted-border pb-2 focus:outline-none focus:border-champagne text-sm uppercase tracking-wide appearance-none cursor-pointer pr-8 w-full md:w-32"
          >
            {bedOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-obsidian text-warm-ivory">
                {opt}
              </option>
            ))}
          </select>
        </div>
        
        {/* Decorative elements to look complex */}
        <div className="flex flex-col gap-2 w-full md:w-auto hidden lg:flex">
          <label className="text-[10px] tracking-widest text-muted-ivory uppercase">Property Type</label>
          <div className="border-b border-muted-border pb-2 text-sm text-warm-ivory uppercase tracking-wide pr-8">
            All Types
          </div>
        </div>
        
        <div className="flex flex-col gap-2 w-full md:w-auto hidden lg:flex">
          <label className="text-[10px] tracking-widest text-muted-ivory uppercase">Price</label>
          <div className="border-b border-muted-border pb-2 text-sm text-warm-ivory uppercase tracking-wide pr-8">
            Any Price
          </div>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="group flex items-center justify-between gap-6 bg-transparent border border-muted-border text-warm-ivory uppercase text-xs tracking-widest py-4 px-8 hover:border-champagne hover:text-champagne transition-colors duration-500 w-full md:w-auto mt-4 md:mt-0"
      >
        <span>Search Residences</span>
        <ArrowRight size={16} className="transform transition-transform duration-500 ease-out group-hover:translate-x-1" />
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block w-full py-8 border-y border-muted-border/50">
        <FiltersContent />
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end w-full border-y border-muted-border/50 py-4">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center gap-3 text-xs uppercase tracking-widest text-warm-ivory"
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-secondary-dark border-t border-muted-border p-6 flex flex-col max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-serif text-2xl text-warm-ivory">Filters</span>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-muted-ivory hover:text-warm-ivory"
                >
                  <X size={24} />
                </button>
              </div>
              
              <FiltersContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
