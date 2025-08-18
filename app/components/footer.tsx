import { Button } from "@/components/ui/button"
import { Radio, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Radio className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-poppins">Africa N1</h3>
                <p className="text-sm text-muted-foreground">Radio Internationale</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              La première radio panafricaine diffusant 24h/24 dans cinq langues. Nous connectons l'Afrique au monde et
              le monde à l'Afrique.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#programmes" className="text-muted-foreground hover:text-primary transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#actualites" className="text-muted-foreground hover:text-primary transition-colors">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Libreville , Gabon</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+241 01 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@african1.radio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lecteur en bas de page */}
        <div className="bg-primary/5 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-primary rounded-full p-3">
                <Radio className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Écouter Africa N1</h4>
                <p className="text-sm text-muted-foreground">En direct • Qualité HD</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Écouter Maintenant</Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">© 2024 Africa N1. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
