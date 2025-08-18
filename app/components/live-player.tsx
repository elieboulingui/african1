"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Radio } from "lucide-react"

export function LivePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(75)

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">EN DIRECT MAINTENANT</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-poppins">Journal du Soir</h2>
              <p className="text-muted-foreground">Avec Aminata Traoré • 19h00 - 20h00 GMT</p>
            </div>

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

                  <div className="w-full bg-muted rounded-full h-1">
                    <div className="bg-primary h-1 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">À venir</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">20h00</span>
                    <span className="text-foreground">Musiques d'Afrique</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">22h00</span>
                    <span className="text-foreground">Débat Économique</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Autres langues</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    English
                  </Button>
                  <Button variant="outline" size="sm">
                    العربية
                  </Button>
                  <Button variant="outline" size="sm">
                    Kiswahili
                  </Button>
                  <Button variant="outline" size="sm">
                    Português
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
