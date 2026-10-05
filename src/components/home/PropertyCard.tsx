"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import { Property } from "@/data/properties"

import Link from "next/link"

interface PropertyCardProps {
  property: Property
  index?: number // To support stagger animations later if needed
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleFavourite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavourite(!isFavourite)
  }

  return (
    <Link href={`/properties/${property.id}`} className="group cursor-pointer flex flex-col gap-6">
      {/* Image Area */}
      <div className="relative overflow-hidden aspect-[4/5] bg-secondary-dark w-full">
        {/* We use standard img to make it simple without next/image domains overhead for mock */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.svg"
          }}
        />
        
        {/* Top bar over image */}
        <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-start z-10 bg-gradient-to-b from-obsidian/40 to-transparent">
          <span className="text-[10px] tracking-widest text-warm-ivory uppercase bg-obsidian/30 backdrop-blur-sm px-3 py-1.5">
            {property.status}
          </span>
          <button
            onClick={handleFavourite}
            className="p-2 text-warm-ivory hover:text-champagne transition-colors duration-300"
            aria-label="Toggle favourite"
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              className={`transition-all duration-300 ${
                isFavourite ? "fill-champagne text-champagne" : "fill-transparent"
              }`}
            />
          </button>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20 pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-warm-ivory uppercase leading-tight mb-1">
              {property.name}
            </span>
            <span className="text-xs text-muted-ivory tracking-wider uppercase">
              {property.location}
            </span>
          </div>
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="text-warm-ivory opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0 hidden md:block mt-1"
          />
        </div>

        <div className="text-champagne font-medium tracking-wide">
          {property.price}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-muted-ivory tracking-widest uppercase flex-wrap">
          {property.beds && <span>{property.beds}</span>}
          {property.baths && (
            <>
              <span className="opacity-50">·</span>
              <span>{property.baths}</span>
            </>
          )}
          {property.area && (
            <>
              <span className="opacity-50">·</span>
              <span>{property.area}</span>
            </>
          )}
          {property.completion && (
            <>
              <span className="opacity-50">·</span>
              <span>{property.completion}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
