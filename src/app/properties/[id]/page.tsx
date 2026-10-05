import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { CinematicVideo } from "@/components/media/CinematicVideo"
import { PropertyAdvisor } from "@/components/home/PropertyAdvisor"
import { properties } from "@/data/properties"
import { ArrowLeft, MapPin, Maximize, Bed, Bath, Calendar } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return properties.map((p) => ({
    id: p.id,
  }))
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <CinematicVideo
              src="/videos/luxury-interior.mp4.mp4"
              poster={property.image}
              className=""
            />
            <div className="absolute inset-0 bg-obsidian/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/90 pointer-events-none" />
          </div>

          <Container className="relative h-full flex flex-col justify-end pb-16 md:pb-24 z-10">
            <Link 
              href="/properties" 
              className="flex items-center gap-2 text-[10px] text-champagne uppercase tracking-widest hover:text-warm-ivory transition-colors mb-12 w-max"
            >
              <ArrowLeft size={14} />
              <span>Back to Collection</span>
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-widest text-champagne uppercase bg-obsidian/40 backdrop-blur-md px-3 py-1.5 w-max">
                  {property.status}
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-warm-ivory uppercase max-w-3xl">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-sm text-muted-ivory uppercase tracking-widest mt-2">
                  <MapPin size={16} className="text-champagne" />
                  <span>{property.location}</span>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-[10px] tracking-widest text-muted-ivory uppercase">
                  {property.status === "Rent" ? "Annual Rent" : "Asking Price"}
                </span>
                <span className="font-serif text-4xl text-warm-ivory">
                  {property.price}
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Quick Details Bar */}
        <section className="border-b border-muted-border/30 bg-[#11110F]">
          <Container>
            <div className="flex flex-wrap items-center gap-8 md:gap-16 py-8">
              {property.beds && (
                <div className="flex items-center gap-4">
                  <Bed className="text-champagne" size={24} strokeWidth={1} />
                  <div className="flex flex-col">
                    <span className="text-warm-ivory text-sm">{property.beds}</span>
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Bedrooms</span>
                  </div>
                </div>
              )}
              {property.baths && (
                <div className="flex items-center gap-4">
                  <Bath className="text-champagne" size={24} strokeWidth={1} />
                  <div className="flex flex-col">
                    <span className="text-warm-ivory text-sm">{property.baths}</span>
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Bathrooms</span>
                  </div>
                </div>
              )}
              {property.area && (
                <div className="flex items-center gap-4">
                  <Maximize className="text-champagne" size={24} strokeWidth={1} />
                  <div className="flex flex-col">
                    <span className="text-warm-ivory text-sm">{property.area}</span>
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Total Area</span>
                  </div>
                </div>
              )}
              {property.completion && (
                <div className="flex items-center gap-4">
                  <Calendar className="text-champagne" size={24} strokeWidth={1} />
                  <div className="flex flex-col">
                    <span className="text-warm-ivory text-sm">{property.completion}</span>
                    <span className="text-[10px] text-muted-ivory tracking-widest uppercase">Handover</span>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Gallery / Description */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <h2 className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">
                  A Masterpiece of Modern Living.
                </h2>
                <div className="flex flex-col gap-6 text-muted-ivory font-light leading-relaxed">
                  <p>
                    {property.name} represents the pinnacle of luxury real estate in Dubai's most coveted location, {property.location}. Designed for those who appreciate the finest architectural details and uncompromising quality.
                  </p>
                  <p>
                    Every corner of this residence has been meticulously crafted to offer an unparalleled lifestyle. From the sweeping floor-to-ceiling windows that frame the skyline, to the bespoke finishes imported from Europe, this is a property that speaks for itself.
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-muted-border/30">
                  <h3 className="text-xs text-champagne tracking-widest uppercase mb-6">Key Amenities</h3>
                  <ul className="grid grid-cols-2 gap-4 text-sm text-warm-ivory">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> Private Infinity Pool</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> 24/7 Concierge</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> Smart Home System</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> Valet Parking</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> Spa & Wellness Center</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-champagne rounded-full"></span> Private Cinema</li>
                  </ul>
                </div>
              </div>

              {/* Right Gallery */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="aspect-[4/3] w-full bg-secondary-dark overflow-hidden">
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="aspect-square bg-secondary-dark overflow-hidden">
                    <img src={property.image} alt={`${property.name} Detail`} className="w-full h-full object-cover scale-110" />
                  </div>
                  <div className="aspect-square bg-secondary-dark overflow-hidden">
                    <img src={property.image} alt={`${property.name} Detail`} className="w-full h-full object-cover scale-125 origin-top-left" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Lead Capture */}
        <PropertyAdvisor />

      </main>

      <Footer />
    </div>
  )
}
