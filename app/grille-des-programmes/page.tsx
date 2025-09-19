import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Mic, Music, Globe, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Données des programmes (les mêmes que dans la page détail)
const programsData = [
  {
    slug: "journal-matinal",
    title: "Journal Matinal",
    time: "06h00 - 08h00",
    description: "L'actualité africaine et internationale pour bien commencer la journée",
    language: "Français",
    icon: Mic,
    color: "bg-primary/10 text-primary",
    schedule: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
  },
  {
    slug: "african-beats",
    title: "African Beats",
    time: "12h00 - 14h00",
    description: "The best of African music from traditional to contemporary",
    language: "English",
    icon: Music,
    color: "bg-accent/10 text-accent",
    schedule: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  },
  {
    slug: "akhbar-al-masaa",
    title: "أخبار المساء",
    time: "18h00 - 19h00",
    description: "الأخبار والتحليلات من القارة الأفريقية والعالم العربي",
    language: "العربية",
    icon: Globe,
    color: "bg-primary/10 text-primary",
    schedule: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"]
  },
  {
    slug: "habari-za-usiku",
    title: "Habari za Usiku",
    time: "20h00 - 21h00",
    description: "Habari na uchambuzi kutoka Afrika Mashariki",
    language: "Kiswahili",
    icon: Mic,
    color: "bg-accent/10 text-accent",
    schedule: ["Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa"]
  },
  {
    slug: "noticias-lusofonas",
    title: "Notícias Lusófonas",
    time: "16h00 - 17h00",
    description: "Notícias e análises dos países africanos de língua portuguesa",
    language: "Português",
    icon: Globe,
    color: "bg-primary/10 text-primary",
    schedule: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
  },
  {
    slug: "culture-mix",
    title: "Culture Mix",
    time: "22h00 - 00h00",
    description: "Émission culturelle multilingue célébrant la diversité africaine",
    language: "Multilingue",
    icon: Music,
    color: "bg-accent/10 text-accent",
    schedule: ["Samedi", "Dimanche"]
  }
]

// Organiser les programmes par créneau horaire
const timeSlots = [
  { time: "06h00 - 08h00", programs: programsData.filter(p => p.time === "06h00 - 08h00") },
  { time: "12h00 - 14h00", programs: programsData.filter(p => p.time === "12h00 - 14h00") },
  { time: "16h00 - 17h00", programs: programsData.filter(p => p.time === "16h00 - 17h00") },
  { time: "18h00 - 19h00", programs: programsData.filter(p => p.time === "18h00 - 19h00") },
  { time: "20h00 - 21h00", programs: programsData.filter(p => p.time === "20h00 - 21h00") },
  { time: "22h00 - 00h00", programs: programsData.filter(p => p.time === "22h00 - 00h00") },
]

export default function ProgramGridPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#programmes">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux programmes
          </Link>
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Grille des Programmes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'ensemble de nos programmes et leurs horaires de diffusion
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {timeSlots.map((timeSlot, index) => (
              <Card key={index}>
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {timeSlot.time}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    {timeSlot.programs.map((program, programIndex) => {
                      const IconComponent = program.icon
                      return (
                        <div key={programIndex} className="flex items-start justify-between p-4 border rounded-lg">
                          <div className="flex items-start gap-4">
                            <div className={`rounded-full p-3 ${program.color}`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{program.title}</h3>
                              <p className="text-sm text-muted-foreground">{program.description}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {program.language}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {Array.isArray(program.schedule) ? program.schedule.join(", ") : program.schedule}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/programmes/${program.slug}`}>
                              Détails
                            </Link>
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/ecouter-en-direct">
              Écouter Africa N1 en direct
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}