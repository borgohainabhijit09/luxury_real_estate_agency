export type PropertyStatus = "Buy" | "Rent" | "Off-Plan"

export interface Property {
  id: string
  name: string
  location: string
  price: string
  beds: string
  baths?: string
  area?: string
  completion?: string
  status: PropertyStatus
  image: string
}

export const properties: Property[] = [
  // Buy
  {
    id: "orion-residence",
    name: "The Orion Residence",
    location: "Palm Jumeirah",
    price: "AED 28.5M",
    beds: "5 Beds",
    baths: "7 Baths",
    area: "9,240 SQ.FT.",
    status: "Buy",
    image: "/images/properties/orion.png",
  },
  {
    id: "meridian",
    name: "The Meridian",
    location: "Downtown Dubai",
    price: "AED 8.9M",
    beds: "3 Beds",
    baths: "4 Baths",
    area: "2,860 SQ.FT.",
    status: "Buy",
    image: "/images/properties/meridian.png",
  },
  {
    id: "azure-house",
    name: "Azure House",
    location: "Dubai Hills",
    price: "AED 12.4M",
    beds: "4 Beds",
    baths: "5 Baths",
    area: "4,320 SQ.FT.",
    status: "Buy",
    image: "/images/properties/azure.png",
  },
  {
    id: "cove-residence",
    name: "The Cove Residence",
    location: "Dubai Marina",
    price: "AED 6.8M",
    beds: "3 Beds",
    baths: "4 Baths",
    area: "2,240 SQ.FT.",
    status: "Buy",
    image: "/images/properties/cove.png",
  },
  
  // Rent
  {
    id: "skyline-residence",
    name: "Skyline Residence",
    location: "Downtown Dubai",
    price: "AED 420,000 / YEAR",
    beds: "3 Beds",
    baths: "4 Baths",
    area: "2,100 SQ.FT.",
    status: "Rent",
    image: "/images/properties/skyline.png",
  },

  // Off-Plan
  {
    id: "vera-residences",
    name: "VÉRA RESIDENCES",
    location: "Downtown Dubai",
    price: "FROM AED 3.8M",
    beds: "2–4 Beds",
    completion: "Completion 2029",
    status: "Off-Plan",
    image: "/images/properties/vera.png",
  },
  {
    id: "solara",
    name: "SOLARA",
    location: "Dubai Creek Harbour",
    price: "FROM AED 2.9M",
    beds: "1–4 Beds",
    completion: "Completion 2028",
    status: "Off-Plan",
    image: "/images/properties/solara.png",
  },
]
