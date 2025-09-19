import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Radio, Newspaper, ArrowLeft, Map } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background flex items-center justify-center px-4 py-12">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            {/* Illustration de l'Afrique */}
            <div className="w-48 h-48 mx-auto mb-6">
              <svg 
                viewBox="0 0 800 600" 
                className="w-full h-full text-primary/20"
                fill="currentColor"
              >
                <path d="M400,100 C500,50 600,80 650,150 C700,220 680,300 600,400 C520,500 400,550 300,500 C200,450 150,350 180,250 C210,150 300,150 400,100 Z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-primary font-poppins">404</div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Oups ! Page introuvable
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Il semble que vous vous soyez aventuré(e) hors des sentiers battus. 
            Cette page n'existe pas, mais de nombreuses autres merveilles vous attendent sur Africa N1.
          </p>
          
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-12">
            <Map className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">Exploration interrompue</span>
          </div>
        </div>

        <Card className="max-w-3xl mx-auto border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-center mb-6">
              Reprenez votre exploration
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Page d'accueil</h4>
                    <p className="text-sm text-muted-foreground">Retour au point de départ</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Nos programmes</h4>
                    <p className="text-sm text-muted-foreground">Découvrez nos émissions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Actualités</h4>
                    <p className="text-sm text-muted-foreground">Les dernières nouvelles</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" />
                      <path d="M12 16V12" />
                      <path d="M12 8H12.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Aide & Support</h4>
                    <p className="text-sm text-muted-foreground">Contactez-nous</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à l'accueil
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Éléments décoratifs africains */}
        <div className="absolute top-10 left-5 opacity-10">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-5 opacity-10">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
        
        <div className="absolute top-1/4 right-1/3 opacity-5">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
      </div>
    </div>
  )
}