import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Mic, Music, Globe } from "lucide-react"

export function Programs() {
  const programs = [
    {
      title: "Journal Matinal",
      time: "06h00 - 08h00",
      description: "L'actualité africaine et internationale pour bien commencer la journée",
      language: "Français",
      icon: Mic,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "African Beats",
      time: "12h00 - 14h00",
      description: "The best of African music from traditional to contemporary",
      language: "English",
      icon: Music,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "أخبار المساء",
      time: "18h00 - 19h00",
      description: "الأخبار والتحليلات من القارة الأفريقية والعالم العربي",
      language: "العربية",
      icon: Globe,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Habari za Usiku",
      time: "20h00 - 21h00",
      description: "Habari na uchambuzi kutoka Afrika Mashariki",
      language: "Kiswahili",
      icon: Mic,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Notícias Lusófonas",
      time: "16h00 - 17h00",
      description: "Notícias e análises dos países africanos de língua portuguesa",
      language: "Português",
      icon: Globe,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Culture Mix",
      time: "22h00 - 00h00",
      description: "Émission culturelle multilingue célébrant la diversité africaine",
      language: "Multilingue",
      icon: Music,
      color: "bg-accent/10 text-accent",
    },
  ]

  return (
    <section id="programmes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">Nos Programmes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une programmation riche et variée dans cinq langues pour célébrer la diversité africaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`rounded-full p-3 ${program.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.time}
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full mt-1 inline-block">
                        {program.language}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Voir la grille complète
          </Button>
        </div>
      </div>
    </section>
  )
}
