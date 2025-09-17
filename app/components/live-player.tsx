"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Radio, Clock, Calendar, ExternalLink } from "lucide-react"

// URL de flux radio réels (quelques exemples de radios africaines)
const RADIO_STREAMS = {
  francais: "https://stream.radioafrica.net/radioafrica",
  english: "https://streaming.radio.co/sa09dabcc7/listen",
  arabic: "https://streaming.radio.co/s6c5e5d98c/listen",
  kiswahili: "https://streaming.radio.co/s38c37c3a2/listen",
  portugues: "https://streaming.radio.co/s1a8a5c0a5/listen"
} as const;

type Language = keyof typeof RADIO_STREAMS;

// Simulation des informations en direct
const BREAKING_NEWS = [
  "Sommet de l'Union africaine: les dirigeants se réunissent à Addis-Abeba pour discuter de l'intégration économique",
  "Innovation agricole: un jeune entrepreneur kényan lance une application pour réduire le gaspillage alimentaire",
  "Coupe d'Afrique des Nations: les préparatifs s'accélèrent pour le tournoi 2025 au Maroc",
  "Croissance économique: la BAD revoit ses prévisions à la hausse pour plusieurs pays africains"
]

interface Program {
  title: string;
  host: string;
  time: string;
  description?: string;
}

const CURRENT_PROGRAM: Program = {
  title: "Journal du Soir",
  host: "Aminata Traoré",
  time: "19h00 - 20h00 GMT",
  description: "L'actualité africaine et internationale décryptée avec nos correspondants sur tout le continent"
}

const UPCOMING_PROGRAMS: Program[] = [
  { time: "20h00", title: "Musiques d'Afrique", host: "DJ Sékou" },
  { time: "22h00", title: "Débat Économique", host: "Dr. Kwame N'Gom" },
  { time: "23h30", title: "Nuit Culturelle", host: "Fatou Diagne" }
]

export function LivePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(75)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [currentLanguage, setCurrentLanguage] = useState<Language>("francais")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialiser l'élément audio
  useEffect(() => {
    audioRef.current = new Audio(RADIO_STREAMS[currentLanguage])
    audioRef.current.volume = volume / 100
    audioRef.current.preload = "none"

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [currentLanguage])

  // Mettre à jour le volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  // Gérer la lecture/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Erreur de lecture:", error)
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Changer de flux radio
  const changeLanguage = (lang: Language) => {
    if (audioRef.current) {
      const wasPlaying = isPlaying
      setIsPlaying(false)
      
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.src = RADIO_STREAMS[lang]
          setCurrentLanguage(lang)
          
          if (wasPlaying) {
            setIsPlaying(true)
          }
        }
      }, 100)
    }
  }

  // Changer les nouvelles flash chaque 15 secondes
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % BREAKING_NEWS.length)
    }, 15000)
    return () => clearInterval(newsInterval)
  }, [])

  // Formater l'heure actuelle
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'UTC' 
    })
  }

  // Formater la date actuelle
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            {/* En-tête avec informations en direct */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">EN DIRECT MAINTENANT</span>
              </div>

              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {getCurrentTime()} GMT
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {getCurrentDate()}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-poppins">
                {CURRENT_PROGRAM.title}
              </h2>
              <p className="text-muted-foreground">Avec {CURRENT_PROGRAM.host} • {CURRENT_PROGRAM.time}</p>
              
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                {CURRENT_PROGRAM.description}
              </p>
            </div>

            {/* Bandeau d'information en direct */}
            <div className="bg-primary/10 rounded-lg p-3 mb-6 overflow-hidden">
              <div className="flex items-center">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-3">BREAKING</span>
                <div className="flex-1">
                  <div className="overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap">
                      {BREAKING_NEWS[currentNewsIndex]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contrôles du lecteur */}
            <div className="bg-background/50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary rounded-full p-4 mr-6">
                  <Radio className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                    </Button>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => setIsMuted(!isMuted)}>
                          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </Button>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => setVolume(Number.parseInt(e.target.value))}
                          className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground w-8">{isMuted ? 0 : volume}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all duration-1000" 
                      style={{ width: isPlaying ? '70%' : '0%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>19:00</span>
                    <span>20:00</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  En direct de Dakar, Sénégal
                </p>
                <a 
                  href={RADIO_STREAMS[currentLanguage]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-primary hover:underline"
                >
                  Ouvrir le flux direct <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Programmation et autres langues */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">À venir aujourd'hui</h3>
                <div className="space-y-3">
                  {UPCOMING_PROGRAMS.map((program, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                      <span className="text-muted-foreground text-sm">{program.time}</span>
                      <div className="text-right">
                        <p className="text-foreground text-sm font-medium">{program.title}</p>
                        <p className="text-muted-foreground text-xs">{program.host}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Écouter dans d'autres langues</h3>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={currentLanguage === "francais" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => changeLanguage("francais")}
                  >
                    Français
                  </Button>
                  <Button 
                    variant={currentLanguage === "english" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => changeLanguage("english")}
                  >
                    English
                  </Button>
                  <Button 
                    variant={currentLanguage === "arabic" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => changeLanguage("arabic")}
                  >
                    العربية
                  </Button>
                  <Button 
                    variant={currentLanguage === "kiswahili" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => changeLanguage("kiswahili")}
                  >
                    Kiswahili
                  </Button>
                  <Button 
                    variant={currentLanguage === "portugues" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => changeLanguage("portugues")}
                  >
                    Português
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Conseil:</strong> Si la lecture ne fonctionne pas, cliquez sur "Ouvrir le flux direct" pour écouter dans votre lecteur audio préféré.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Ajouter les styles pour l'animation de marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  )
}