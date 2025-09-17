import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Share, Download } from "lucide-react";
import { Key } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

// Définir le type d'un programme
type Program = {
  name: string;
  time: string;
  host: string;
};

// Définir le type d'une langue
type Language = {
  name: string;
  nativeName: string;
  description: string;
  listeners: string;
  flag: string;
  programs: Program[];
  liveStream: string;
  slogan: string;
};

// Props pour la page et generateMetadata
type PageProps = {
  params: {
    slug: string;
  };
};

/* -------------------------------------------------------------------------- */
/*                                 Données                                     */
/* -------------------------------------------------------------------------- */

// Définir toutes les langues possibles
const languages: Record<string, Language> = {
  francais: {
    name: "Français",
    nativeName: "Français",
    description:
      "Programmes d'information, culture et divertissement pour la francophonie africaine",
    listeners: "12M+",
    flag: "🇫🇷",
    programs: [
      { name: "Journal Matinal", time: "06:00 - 09:00", host: "Jean-Luc Mbenga" },
      { name: "Débat Citoyen", time: "12:00 - 13:30", host: "Amina Sarr" },
      { name: "Musiques Francophones", time: "19:00 - 21:00", host: "Pierre Diop" },
    ],
    liveStream: "https://stream.african1.com/french",
    slogan: "La voix de l'Afrique francophone",
  },
  english: {
    name: "English",
    nativeName: "English",
    description: "News, music and cultural programs for English-speaking Africa",
    listeners: "18M+",
    flag: "🇬🇧",
    programs: [
      { name: "Morning News", time: "06:00 - 09:00", host: "John Mensah" },
      { name: "African Beats", time: "14:00 - 16:00", host: "Sarah Chidi" },
      { name: "Business Today", time: "18:00 - 19:00", host: "David Ofori" },
    ],
    liveStream: "https://stream.african1.com/english",
    slogan: "The sound of English-speaking Africa",
  },
  arabic: {
    name: "العربية",
    nativeName: "Arabic",
    description: "برامج إخبارية وثقافية وترفيهية للمجتمعات العربية في أفريقيا",
    listeners: "8M+",
    flag: "🇸🇦",
    programs: [
      { name: "أخبار المساء", time: "17:00 - 18:00", host: "خالد أمين" },
      { name: "الثقافة العربية", time: "20:00 - 21:00", host: "فاطمة الزهراء" },
      { name: "موسيقى عربية", time: "22:00 - 00:00", host: "عمر عبد الله" },
    ],
    liveStream: "https://stream.african1.com/arabic",
    slogan: "صوت África النابض",
  },
  kiswahili: {
    name: "Kiswahili",
    nativeName: "Kiswahili",
    description: "Programu za habari, utamaduni na burudani kwa waongezaji wa Kiswahili",
    listeners: "15M+",
    flag: "🇹🇿",
    programs: [
      { name: "Habari za Asubuhi", time: "06:00 - 09:00", host: "Rajab Abdi" },
      { name: "Muziki wa Afrika", time: "12:00 - 14:00", host: "Neema Samuel" },
      { name: "Mazungumzo ya Kijamii", time: "16:00 - 17:30", host: "Juma Athumani" },
    ],
    liveStream: "https://stream.african1.com/swahili",
    slogan: "Sauti ya Afrika ya Kiswahili",
  },
  portugues: {
    name: "Português",
    nativeName: "Português",
    description:
      "Programas informativos, culturais e de entretenimento para a lusofonia africana",
    listeners: "6M+",
    flag: "🇵🇹",
    programs: [
      { name: "Jornal da Manhã", time: "06:00 - 08:00", host: "Carlos Mendes" },
      { name: "Cultura Lusófona", time: "14:00 - 15:00", host: "Sofia dos Santos" },
      { name: "Música Africana", time: "19:00 - 21:00", host: "Miguel Tavares" },
    ],
    liveStream: "https://stream.african1.com/portuguese",
    slogan: "A voz da África lusófona",
  },
};

/* -------------------------------------------------------------------------- */
/*                              Page Metadata                                  */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }: PageProps) {
  const language = languages[params.slug];
  if (!language) {
    return { title: "Langue non trouvée - Africa N1" };
  }
  return {
    title: `${language.name} - Africa N1 Radio`,
    description: language.description,
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Page                                       */
/* -------------------------------------------------------------------------- */

export default function LanguagePage({ params }: PageProps) {
  const language = languages[params.slug];
  if (!language) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-60 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">{language.flag}</div>
            <h1 className="text-4xl font-bold font-poppins">{language.nativeName}</h1>
            <p className="text-xl mt-2">{language.slogan}</p>
          </div>
        </div>

        <Link href="/" className="absolute top-6 left-6">
          <Button variant="secondary" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Retour aux langues
          </Button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 -mt-16">
        {/* Live Section */}
        <div className="bg-card rounded-lg shadow-lg p-6 mb-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold font-poppins">Écouter en direct</h2>
              <p className="text-muted-foreground">{language.listeners} auditeurs réguliers</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Play size={18} className="mr-2" />
                Lecture en direct
              </Button>
              <Button variant="outline" size="lg">
                <Share size={18} className="mr-2" />
                Partager
              </Button>
              <Button variant="outline" size="lg">
                <Download size={18} className="mr-2" />
                Télécharger l'app
              </Button>
            </div>
          </div>
        </div>

        {/* Programs + About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programs */}
          <div>
            <h2 className="text-2xl font-bold font-poppins mb-6">Programmes populaires</h2>
            <div className="space-y-4">
              {language.programs.map((program: Program, index: Key) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{program.name}</h3>
                      <p className="text-muted-foreground">{program.host}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{program.time}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Play size={14} className="mr-1" />
                        Écouter
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold font-poppins mb-6">À propos</h2>
            <div className="bg-card rounded-lg p-6 shadow mb-6">
              <p className="mb-4">{language.description}</p>
              <p>
                Africa N1 diffuse en {language.nativeName} pour connecter les communautés à travers le
                continent et offrir un contenu de qualité qui reflète la diversité et la richesse
                culturelle de l'Afrique.
              </p>
            </div>

            <h2 className="text-2xl font-bold font-poppins mb-4">Disponible sur</h2>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-14">
                <div className="flex items-center gap-2">
                  <i className="fab fa-android text-xl"></i>
                  <span>Android</span>
                </div>
              </Button>
              <Button variant="outline" className="h-14">
                <div className="flex items-center gap-2">
                  <i className="fab fa-apple text-xl"></i>
                  <span>iOS</span>
                </div>
              </Button>
              <Button variant="outline" className="h-14">
                <div className="flex items-center gap-2">
                  <i className="fas fa-desktop text-xl"></i>
                  <span>Web</span>
                </div>
              </Button>
              <Button variant="outline" className="h-14">
                <div className="flex items-center gap-2">
                  <i className="fas fa-radio text-xl"></i>
                  <span>Radio</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Static Params (SSG)                               */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
  return [
    { slug: "francais" },
    { slug: "english" },
    { slug: "arabic" },
    { slug: "kiswahili" },
    { slug: "portugues" },
  ];
}
