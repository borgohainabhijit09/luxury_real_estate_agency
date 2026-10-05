import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { SignatureProperty } from "@/components/home/SignatureProperty"
import { PropertyDiscovery } from "@/components/home/PropertyDiscovery"
import { Destinations } from "@/components/home/Destinations"
import { Investment } from "@/components/home/Investment"
import { OffPlanCollection } from "@/components/home/OffPlanCollection"
import { PropertyAdvisor } from "@/components/home/PropertyAdvisor"
import { DigitalConcierge } from "@/components/home/DigitalConcierge"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SignatureProperty />
        <PropertyDiscovery />
        <Destinations />
        <Investment />
        <OffPlanCollection />
        <PropertyAdvisor />
        <DigitalConcierge />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
