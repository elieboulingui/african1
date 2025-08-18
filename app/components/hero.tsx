import { Button } from "@/components/ui/button"
import { Play, Headphones, Globe2, Radio } from "lucide-react"

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">EN DIRECT</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-poppins">
              Africa <span className="text-primary">N1</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              La voix de l'Afrique qui résonne dans le monde
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Radio internationale diffusant 24h/24 en français, anglais, arabe, swahili et portugais. Actualités,
              musique, culture et débats depuis le cœur de l'Afrique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Écouter en Direct
            </Button>

            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Headphones className="mr-2 h-5 w-5" />
              Nos Programmes
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">5 Langues</h3>
              <p className="text-sm text-muted-foreground">Français, Anglais, Arabe, Swahili, Portugais</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">24</span>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">24h/24</h3>
              <p className="text-sm text-muted-foreground">Diffusion continue toute la journée</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Radio className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Qualité HD</h3>
              <p className="text-sm text-muted-foreground">Son cristallin en haute définition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
