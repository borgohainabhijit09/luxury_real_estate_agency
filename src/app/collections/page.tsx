import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { FinalCTA } from "@/components/home/FinalCTA"
import Link from "next/link"

export const metadata = {
  title: "Collections | Aurelia Dubai",
  description: "Curated luxury property portfolios across Dubai.",
}

const collections = [
  {
    id: "waterfront",
    name: "The Waterfront Collection",
    description: "Exclusive beachfront villas and marina penthouses offering uninterrupted views of the Arabian Gulf.",
    image: "/images/properties/orion.png",
    count: 14
  },
  {
    id: "skyline",
    name: "The Skyline Collection",
    description: "Ultra-luxury penthouses and high-floor apartments sitting above the clouds in Downtown Dubai.",
    image: "/images/properties/skyline.png",
    count: 9
  },
  {
    id: "off-plan",
    name: "The Future Collection",
    description: "Carefully vetted off-plan investments and architectural masterpieces currently under development.",
    image: "/images/properties/vera.png",
    count: 22
  },
  {
    id: "trophy",
    name: "Trophy Assets",
    description: "Rare, generational estates priced above AED 50M. Strictly off-market and available via private advisory only.",
    image: "/images/properties/azure.png",
    count: 3
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Page Header */}
            <div className="flex flex-col gap-6 max-w-3xl border-b border-muted-border/30 pb-12">
              <span className="text-[10px] tracking-widest text-champagne uppercase">
                Curated Portfolios
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-warm-ivory uppercase">
                Aurelia <br /> Collections.
              </h1>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-xl mt-2">
                Properties curated not just by geography, but by lifestyle, architecture, and investment thesis. 
              </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {collections.map((collection) => (
                <Link 
                  href="/properties" 
                  key={collection.id}
                  className="group flex flex-col gap-6 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-secondary-dark overflow-hidden w-full">
                    <img 
                      src={collection.image} 
                      alt={collection.name} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-obsidian/20 transition-colors duration-700 group-hover:bg-obsidian/0" />
                    
                    <div className="absolute top-6 left-6">
                      <span className="text-[10px] tracking-widest text-warm-ivory uppercase bg-obsidian/50 backdrop-blur-md px-3 py-1.5">
                        {collection.count} Properties
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="font-serif text-3xl text-warm-ivory uppercase transition-colors group-hover:text-champagne">
                      {collection.name}
                    </h2>
                    <p className="text-sm text-muted-ivory font-light leading-relaxed max-w-sm">
                      {collection.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </Container>
      </main>

      <FinalCTA />
      <Footer />
    </div>
  )
}
