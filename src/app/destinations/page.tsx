import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { CinematicVideo } from "@/components/media/CinematicVideo"
import { FinalCTA } from "@/components/home/FinalCTA"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Destinations | Aurelia Dubai",
  description: "Explore the most exclusive and sought-after neighborhoods in Dubai.",
}

const destinations = [
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    tagline: "Private Waterfront",
    description: "The ultimate address for beachfront luxury. A triumph of engineering offering absolute privacy, panoramic ocean views, and resort-style living at the edge of the Arabian Gulf.",
    mediaType: "video",
    mediaSrc: "/videos/palm-jumeirah.mp4.mp4",
    poster: "/images/destinations/palm-jumeirah.png",
    propertiesCount: 12
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    tagline: "The City At Your Doorstep",
    description: "The vibrant heart of the city. Home to iconic architecture, world-class dining, and spectacular high-rise penthouses that offer front-row seats to the Dubai skyline.",
    mediaType: "video",
    mediaSrc: "/videos/downtown-dubai.mp4.mp4",
    poster: "/images/destinations/downtown.png",
    propertiesCount: 24
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills",
    tagline: "Space To Breathe",
    description: "A serene, master-planned estate built around an 18-hole championship golf course. Offering sprawling modern mansions wrapped in lush, perfectly manicured greenery.",
    mediaType: "image",
    mediaSrc: "/images/destinations/dubai-hills.png",
    poster: "",
    propertiesCount: 8
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    tagline: "Life By The Water",
    description: "A cosmopolitan waterfront community where luxury yachts meet soaring skyscrapers. The perfect blend of vibrant nightlife and relaxed Riviera-style living.",
    mediaType: "image",
    mediaSrc: "/images/destinations/dubai-marina.png",
    poster: "",
    propertiesCount: 18
  }
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <Container>
            <div className="flex flex-col gap-6 max-w-3xl">
              <span className="text-[10px] tracking-widest text-champagne uppercase">
                Location Guide
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-warm-ivory uppercase">
                The Addresses <br /> That Matter.
              </h1>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-lg mt-4">
                Dubai is a city of distinct neighborhoods, each offering a completely unique luxury lifestyle. Discover where you belong.
              </p>
            </div>
          </Container>
        </section>

        {/* Destinations List */}
        <section className="pb-24 md:pb-32">
          <div className="flex flex-col gap-24 md:gap-40">
            {destinations.map((dest, index) => (
              <div key={dest.id} className="w-full">
                <Container>
                  <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                    
                    {/* Media Area */}
                    <div className="w-full lg:w-7/12">
                      <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-secondary-dark w-full">
                        {dest.mediaType === "video" ? (
                          <CinematicVideo
                            src={dest.mediaSrc}
                            poster={dest.poster}
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                          />
                        ) : (
                          <img
                            src={dest.mediaSrc}
                            alt={dest.name}
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-obsidian/10 pointer-events-none" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                      <div className="flex items-center gap-4 text-[10px] text-champagne tracking-widest uppercase">
                        <span>0{index + 1}</span>
                        <span className="w-8 h-[1px] bg-champagne"></span>
                        <span>{dest.tagline}</span>
                      </div>
                      
                      <h2 className="font-serif text-4xl md:text-5xl text-warm-ivory uppercase">
                        {dest.name}
                      </h2>
                      
                      <p className="text-muted-ivory font-light leading-relaxed mb-4">
                        {dest.description}
                      </p>

                      <Link 
                        href="/properties" 
                        className="group flex items-center gap-4 text-xs text-warm-ivory uppercase tracking-widest w-max pb-1 border-b border-muted-border hover:border-champagne hover:text-champagne transition-colors duration-300"
                      >
                        <span>Explore {dest.propertiesCount} Properties</span>
                        <ArrowRight size={14} className="transform transition-transform duration-500 group-hover:translate-x-2" />
                      </Link>
                    </div>

                  </div>
                </Container>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
