import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Users, Radio } from "lucide-react"
import Link from "next/link"

export function Languages() {
  const languages = [
    {
      name: "Français",
      nativeName: "Français",
      description: "Programmes d'information, culture et divertissement pour la francophonie africaine",
      listeners: "12M+",
      flag: "🇫🇷",
      programs: ["Journal Matinal", "Débat Citoyen", "Musiques Francophones"],
      slug: "francais",
    },
    {
      name: "English",
      nativeName: "English",
      description: "News, music and cultural programs for English-speaking Africa",
      listeners: "18M+",
      flag: "🇬🇧",
      programs: ["Morning News", "African Beats", "Business Today"],
      slug: "english",
    },
    {
      name: "العربية",
      nativeName: "Arabic",
      description: "برامج إخبارية وثقافية وترفيهية للمجتمعات العربية في أفريقيا",
      listeners: "8M+",
      flag: "🇸🇦",
      programs: ["أخبار المساء", "الثقافة العربية", "موسيقى عربية"],
      slug: "arabic",
    },
    {
      name: "Kiswahili",
      nativeName: "Kiswahili",
      description: "Programu za habari, utamaduni na burudani kwa waongezaji wa Kiswahili",
      listeners: "15M+",
      flag: "🇹🇿",
      programs: ["Habari za Asubuhi", "Muziki wa Afrika", "Mazungumzo ya Kijamii"],
      slug: "kiswahili",
    },
    {
      name: "Português",
      nativeName: "Português",
      description: "Programas informativos, culturais e de entretenimento para a lusofonia africana",
      listeners: "6M+",
      flag: "🇵🇹",
      programs: ["Jornal da Manhã", "Cultura Lusófona", "Música Africana"],
      slug: "portugues",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">Nos Langues</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Africa N1 diffuse dans cinq langues principales pour toucher tous les auditeurs du continent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {languages.map((language, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1 font-poppins">{language.nativeName}</h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {language.listeners}
                    </div>
                    <div className="flex items-center">
                      <Radio className="h-4 w-4 mr-1" />
                      24h/7j
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 text-center">{language.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Programmes populaires:</h4>
                  <div className="space-y-1">
                    {language.programs.map((program, idx) => (
                      <div key={idx} className="text-xs bg-muted px-2 py-1 rounded-full inline-block mr-1 mb-1">
                        {program}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/languages/${language.slug}`} passHref>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Globe className="h-4 w-4 mr-2" />
                    Écouter en {language.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Une Radio, Cinq Voix, Un Continent</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Découvrez la richesse linguistique et culturelle de l'Afrique à travers nos programmes multilingues. Chaque
            langue raconte une histoire unique du continent.
          </p>
          <Link href="/programs" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Découvrir tous nos programmes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}