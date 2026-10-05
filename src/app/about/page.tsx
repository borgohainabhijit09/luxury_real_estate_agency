import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { DigitalConcierge } from "@/components/home/DigitalConcierge"
import { PropertyAdvisor } from "@/components/home/PropertyAdvisor"
import { FinalCTA } from "@/components/home/FinalCTA"
import { CinematicVideo } from "@/components/media/CinematicVideo"

export const metadata = {
  title: "About Aurelia | Dubai Private Real Estate",
  description: "The story of Aurelia, Dubai's premier private property brokerage.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 border-b border-muted-border/30 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <CinematicVideo
              src="/videos/dubai-establishing.mp4.mp4"
              poster="/images/hero-poster.png"
              className=""
            />
            <div className="absolute inset-0 bg-obsidian/70 pointer-events-none" />
          </div>

          <Container className="relative z-10">
            <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center items-center">
              <span className="text-[10px] tracking-widest text-champagne uppercase">
                The Aurelia Standard
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-warm-ivory uppercase">
                Redefining <br />
                Dubai Real Estate.
              </h1>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-2xl mt-4">
                Aurelia is a private property brokerage dedicated to the absolute high-end of the Dubai market. We bypass the noise of traditional agencies to deliver a discreet, highly curated advisory experience.
              </p>
            </div>
          </Container>
        </section>

        {/* Narrative Image & Text */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/5] bg-secondary-dark w-full overflow-hidden">
                <CinematicVideo 
                  src="/videos/signature-residence.mp4.mp4" 
                  poster="/images/signature-residence.png" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="font-serif text-3xl md:text-4xl text-warm-ivory uppercase">
                  Built on Discretion. <br />
                  Driven by Data.
                </h2>
                <div className="flex flex-col gap-6 text-muted-ivory font-light leading-relaxed">
                  <p>
                    Founded to serve ultra-high-net-worth individuals, family offices, and institutional investors, Aurelia operates on a strictly advisory model. We do not list properties just to make up numbers; every address in our collection has been vetted for architectural merit, location prestige, and long-term investment value.
                  </p>
                  <p>
                    Behind our refined advisory service is the proprietary <strong>Sygmia Innovative</strong> technology stack. This allows our advisors to provide clients with real-time market insights, off-market opportunities, and seamless digital transaction management—merging traditional white-glove service with modern efficiency.
                  </p>
                </div>
                <div className="flex items-center gap-12 mt-8 border-t border-muted-border/30 pt-8">
                  <div className="flex flex-col gap-2">
                    <span className="font-serif text-4xl text-warm-ivory">AED 4B+</span>
                    <span className="text-[10px] tracking-widest text-muted-ivory uppercase">Transactions</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-serif text-4xl text-warm-ivory">45</span>
                    <span className="text-[10px] tracking-widest text-muted-ivory uppercase">Global Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Re-using components to establish the brand value */}
        <DigitalConcierge />
        <PropertyAdvisor />
        <FinalCTA />

      </main>

      <Footer />
    </div>
  )
}
