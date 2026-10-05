import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/ui/Container"
import { FinalCTA } from "@/components/home/FinalCTA"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Insights | Aurelia Dubai",
  description: "Market intelligence and editorial on Dubai's luxury real estate.",
}

const articles = [
  {
    id: "branded-residences",
    category: "Market Report",
    date: "Oct 2026",
    title: "Why Branded Residences Are Outperforming Standard Luxury in Dubai",
    excerpt: "An analysis of the premium associated with luxury hospitality brands entering the residential space, from Dorchester to Bvlgari.",
    image: "/images/properties/meridian.png"
  },
  {
    id: "palm-jebel-ali",
    category: "Investment Thesis",
    date: "Sep 2026",
    title: "Palm Jebel Ali: The Next Generational Wealth Creation Event",
    excerpt: "Examining the masterplan and projected capital appreciation for early investors in Dubai's newest mega-project.",
    image: "/images/properties/azure-palm.png"
  },
  {
    id: "q3-report",
    category: "Data",
    date: "Aug 2026",
    title: "Q3 2026: Ultra-Prime Transaction Volume Hits Record Highs",
    excerpt: "Breaking down the $20M+ transaction data across Palm Jumeirah, Dubai Hills, and Jumeira Bay Island.",
    image: "/images/properties/skyline.png"
  }
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Page Header */}
            <div className="flex flex-col gap-6 max-w-3xl border-b border-muted-border/30 pb-12">
              <span className="text-[10px] tracking-widest text-champagne uppercase">
                Market Intelligence
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-warm-ivory uppercase">
                Aurelia <br /> Insights.
              </h1>
              <p className="text-muted-ivory text-base md:text-lg font-light tracking-wide max-w-xl mt-2">
                Actionable intelligence, market reports, and editorial deep-dives into the highest echelon of Dubai real estate.
              </p>
            </div>

            {/* Featured Insight (First Article) */}
            <Link href="#" className="group flex flex-col lg:flex-row gap-12 lg:gap-16 items-center cursor-pointer border-b border-muted-border/30 pb-16">
              <div className="w-full lg:w-7/12 aspect-[16/9] bg-secondary-dark overflow-hidden relative">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/20 transition-colors duration-700 group-hover:bg-obsidian/0" />
              </div>
              <div className="w-full lg:w-5/12 flex flex-col gap-6">
                <div className="flex items-center gap-4 text-[10px] tracking-widest text-champagne uppercase">
                  <span>{articles[0].category}</span>
                  <span className="w-1 h-1 bg-champagne rounded-full"></span>
                  <span>{articles[0].date}</span>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-warm-ivory uppercase leading-[1.1] transition-colors group-hover:text-champagne">
                  {articles[0].title}
                </h2>
                <p className="text-base text-muted-ivory font-light leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-warm-ivory uppercase tracking-widest mt-4">
                  <span>Read Full Report</span>
                  <ArrowRight size={14} className="transform transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            {/* Other Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {articles.slice(1).map((article) => (
                <Link href="#" key={article.id} className="group flex flex-col gap-6 cursor-pointer">
                  <div className="relative aspect-[4/3] bg-secondary-dark overflow-hidden w-full">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-obsidian/20 transition-colors duration-700 group-hover:bg-obsidian/0" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-[10px] tracking-widest text-champagne uppercase">
                      <span>{article.category}</span>
                      <span className="w-1 h-1 bg-champagne rounded-full"></span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-warm-ivory uppercase leading-tight transition-colors group-hover:text-champagne">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-ivory font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
