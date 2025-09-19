import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mic, Music, Globe, Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Données des programmes (à déplacer dans un fichier séparé en production)
const programsData = [
  {
    slug: "journal-matinal",
    title: "Journal Matinal",
    time: "06h00 - 08h00",
    description: "L'actualité africaine et internationale pour bien commencer la journée",
    fullDescription: "Le Journal Matinal d'Africa N1 vous offre une analyse approfondie de l'actualité africaine et internationale. Nos journalistes et experts décryptent les enjeux politiques, économiques et sociaux du continent. Chaque matin, retrouvez les dernières nouvelles, des reportages exclusifs et des interviews avec des personnalités influentes.",
    language: "Français",
    icon: Mic,
    color: "bg-primary/10 text-primary",
    hosts: ["Marie Diallo", "Paul N'diaye"],
    schedule: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    frequency: "Quotidien"
  },
  {
    slug: "african-beats",
    title: "African Beats",
    time: "12h00 - 14h00",
    description: "The best of African music from traditional to contemporary",
    fullDescription: "African Beats is your daily journey through the rich and diverse musical landscape of Africa. From traditional rhythms to contemporary Afrobeat, we explore the sounds that define the continent. Discover new artists, learn about musical traditions, and enjoy exclusive live performances.",
    language: "English",
    icon: Music,
    color: "bg-accent/10 text-accent",
    hosts: ["DJ Kofi", "Amina Mensah"],
    schedule: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    frequency: "Quotidien"
  },
  {
    slug: "akhbar-al-masaa",
    title: "أخبار المساء",
    time: "18h00 - 19h00",
    description: "الأخبار والتحليلات من القارة الأفريقية والعالم العربي",
    fullDescription: "برنامج أخبار المساء يقدم لك آخر المستجدات من القارة الأفريقية والعالم العربي. تحليلات عميقة، تقارير ميدانية، وحوارات مع صناع القرار. نسلط الضوء على القضايا الاقتصادية، السياسية والاجتماعية التي تهم المشاهد العربي.",
    language: "العربية",
    icon: Globe,
    color: "bg-primary/10 text-primary",
    hosts: ["خالد أحمد", "فاطمة الزهراء"],
    schedule: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
    frequency: "يومي"
  },
  {
    slug: "habari-za-usiku",
    title: "Habari za Usiku",
    time: "20h00 - 21h00",
    description: "Habari na uchambuzi kutoka Afrika Mashariki",
    fullDescription: "Habari za Usiku ni kipindi cha habari na uchambuzi kinachowaletea masuala muhimu kutoka Afrika Mashariki na bara la Afrika kwa ujumla. Wanahabari wetu wanawapa hadithi zenye kina na mvuto.",
    language: "Kiswahili",
    icon: Mic,
    color: "bg-accent/10 text-accent",
    hosts: ["John Mwamba", "Grace Otieno"],
    schedule: ["Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa"],
    frequency: "Kila siku"
  },
  {
    slug: "noticias-lusofonas",
    title: "Notícias Lusófonas",
    time: "16h00 - 17h00",
    description: "Notícias e análises dos países africanos de língua portuguesa",
    fullDescription: "Notícias Lusófonas é o seu programa de referência para acompanhar tudo o que acontece nos países africanos de língua portuguesa. Das notícias políticas às económicas, passando pela cultura e desporto, temos a cobertura mais completa.",
    language: "Português",
    icon: Globe,
    color: "bg-primary/10 text-primary",
    hosts: ["Carlos Silva", "Maria Santos"],
    schedule: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    frequency: "Diário"
  },
  {
    slug: "culture-mix",
    title: "Culture Mix",
    time: "22h00 - 00h00",
    description: "Émission culturelle multilingue célébrant la diversité africaine",
    fullDescription: "Culture Mix est une émission unique qui célèbre la richesse culturelle de l'Afrique à travers ses langues, ses traditions et ses expressions artistiques. Chaque épisode explore une thématique différente à travers des reportages, des interviews et des performances.",
    language: "Multilingue",
    icon: Music,
    color: "bg-accent/10 text-accent",
    hosts: ["Équipe multiculturelle"],
    schedule: ["Samedi", "Dimanche"],
    frequency: "Hebdomadaire"
  }
]

interface ProgramDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  // Attendre la résolution des params
  const { slug } = await params;
  
  const program = programsData.find(p => p.slug === slug);
  
  if (!program) {
    notFound();
  }
  
  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#programmes">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux programmes
          </Link>
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className={`rounded-full p-4 ${program.color}`}>
              <IconComponent className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-2">{program.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>{program.time}</span>
                <span className="mx-2">•</span>
                <span>{program.language}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-muted-foreground mb-6">{program.fullDescription}</p>
                  
                  <h2 className="text-xl font-semibold mb-4">Animateurs</h2>
                  <div className="flex items-center gap-2 mb-6">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span>{Array.isArray(program.hosts) ? program.hosts.join(", ") : program.hosts}</span>
                  </div>
                  
                  <Button asChild>
                    <Link href="/ecouter-en-direct">
                      Écouter en direct
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Horaires</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Jours de diffusion</p>
                        <p className="text-muted-foreground">
                          {Array.isArray(program.schedule) ? program.schedule.join(", ") : program.schedule}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium">Fréquence</p>
                      <p className="text-muted-foreground">{program.frequency}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Heure</p>
                      <p className="text-muted-foreground">{program.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Podcasts</h2>
                  <p className="text-muted-foreground mb-4">
                    Écoutez les derniers épisodes de {program.title}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/podcasts/${program.slug}`}>
                      Voir les podcasts
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({ params }: ProgramDetailPageProps) {
  // Attendre la résolution des params
  const { slug } = await params;
  
  const program = programsData.find(p => p.slug === slug);
  
  if (!program) {
    return {
      title: "Programme non trouvé",
    }
  }
  
  return {
    title: `${program.title} - Africa N1`,
    description: program.description,
  }
}