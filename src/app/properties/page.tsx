import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { properties } from "@/data/properties"
import { PropertyCard } from "@/components/home/PropertyCard"

export const metadata = {
  title: "Properties | Aurelia Dubai",
  description: "Discover exclusive luxury properties across Dubai.",
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="flex flex-col gap-12">
            
            {/* Page Header */}
            <div className="flex flex-col gap-4 border-b border-muted-border pb-12">
              <span className="text-[10px] tracking-widest text-champagne uppercase">
                The Collection
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-warm-ivory uppercase">
                Exceptional <br />
                Addresses.
              </h1>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>

            {/* Load More (Demo) */}
            <div className="flex justify-center mt-16">
              <button className="text-xs text-warm-ivory uppercase tracking-widest border-b border-muted-border pb-1 hover:text-champagne hover:border-champagne transition-colors duration-300 w-max">
                Load More Properties
              </button>
            </div>

          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  )
}
