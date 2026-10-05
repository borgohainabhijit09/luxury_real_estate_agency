import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-muted-border pt-24 pb-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col">
            <span className="font-serif text-3xl tracking-wide text-warm-ivory uppercase mb-2">
              Aurelia
            </span>
            <span className="text-[10px] tracking-widest text-muted-ivory uppercase">
              Dubai · Private Real Estate
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-ivory">
            <a href="#" className="hover:text-champagne transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-champagne transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-champagne transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-muted-border flex justify-between items-center text-xs text-muted-ivory/50">
          <p>© {new Date().getFullYear()} Aurelia Real Estate. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
