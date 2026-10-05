"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { PropertyCard } from "./PropertyCard"
import { PropertyFilters } from "./PropertyFilters"
import { properties, PropertyStatus } from "@/data/properties"

const tabs: PropertyStatus[] = ["Buy", "Rent", "Off-Plan"]

export function PropertyDiscovery() {
  const [activeTab, setActiveTab] = useState<PropertyStatus>("Buy")
  const [filters, setFilters] = useState({ location: "All Locations", beds: "Any" })

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Filter by tab
      if (p.status !== activeTab) return false
      
      // Filter by location
      if (filters.location !== "All Locations" && p.location !== filters.location) {
        return false
      }
      
      // Filter by beds
      if (filters.beds !== "Any") {
        if (!p.beds) return false
        // Simple string match for mock data
        if (p.beds !== filters.beds) return false
      }
      
      return true
    })
  }, [activeTab, filters])

  const handleTabChange = (tab: PropertyStatus) => {
    setActiveTab(tab)
    setFilters({ location: "All Locations", beds: "Any" })
  }

  return (
    <section className="py-24 md:py-32 bg-obsidian text-warm-ivory min-h-screen">
      <Container>
        <div className="flex flex-col gap-16 md:gap-20">
          
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="flex flex-col gap-6">
              <SectionLabel>Discover</SectionLabel>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                FIND <br />
                YOUR ADDRESS.
              </h2>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-md mt-4">
                Explore residences selected for their architecture, location and long-term value.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-8 md:gap-12 border-b border-muted-border pb-4 w-full md:w-auto overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`text-xs md:text-sm tracking-widest uppercase transition-colors duration-500 whitespace-nowrap relative ${
                    activeTab === tab ? "text-champagne font-medium" : "text-muted-ivory hover:text-warm-ivory"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-[17px] left-0 right-0 h-[1px] bg-champagne"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <PropertyFilters onSearch={setFilters} />

          {/* Properties Grid */}
          <motion.div layout className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {filteredProperties.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24"
                >
                  {filteredProperties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-5%" }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-32 text-center border border-muted-border/30"
                >
                  <p className="font-serif text-2xl md:text-3xl text-warm-ivory mb-4 uppercase">
                    NO RESIDENCES MATCH YOUR SEARCH.
                  </p>
                  <p className="text-muted-ivory text-sm tracking-wide mb-10">
                    Refine your criteria or speak with a private advisor.
                  </p>
                  <button
                    onClick={() => setFilters({ location: "All Locations", beds: "Any" })}
                    className="text-xs text-champagne uppercase tracking-widest border-b border-champagne pb-1 hover:text-warm-ivory hover:border-warm-ivory transition-colors duration-300"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </Container>
    </section>
  )
}
