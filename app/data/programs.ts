import { Mic, Music, Globe } from "lucide-react"

export const programsData = [
  {
    slug: "journal-matinal",
    title: "Journal Matinal",
    time: "06h00 - 08h00",
    description: "L'actualité africaine et internationale pour bien commencer la journée",
    language: "Français",
    icon: Mic,
    color: "bg-primary/10 text-primary",
  },
  {
    slug: "african-beats",
    title: "African Beats",
    time: "12h00 - 14h00",
    description: "The best of African music from traditional to contemporary",
    language: "English",
    icon: Music,
    color: "bg-accent/10 text-accent",
  },
  {
    slug: "akhbar-al-masaa",
    title: "أخبار المساء",
    time: "18h00 - 19h00",
    description: "الأخبار والتحليلات من القارة الأفريقية والعالم العربي",
    language: "العربية",
    icon: Globe,
    color: "bg-primary/10 text-primary",
  },
  {
    slug: "habari-za-usiku",
    title: "Habari za Usiku",
    time: "20h00 - 21h00",
    description: "Habari na uchambuzi kutoka Afrika Mashariki",
    language: "Kiswahili",
    icon: Mic,
    color: "bg-accent/10 text-accent",
  },
  {
    slug: "noticias-lusofonas",
    title: "Notícias Lusófonas",
    time: "16h00 - 17h00",
    description: "Notícias e análises dos países africanos de língua portuguesa",
    language: "Português",
    icon: Globe,
    color: "bg-primary/10 text-primary",
  },
  {
    slug: "culture-mix",
    title: "Culture Mix",
    time: "22h00 - 00h00",
    description: "Émission culturelle multilingue célébrant la diversité africaine",
    language: "Multilingue",
    icon: Music,
    color: "bg-accent/10 text-accent",
  },
]

export default programsData