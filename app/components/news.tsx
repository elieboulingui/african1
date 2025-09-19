'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock, MapPin, User, Filter } from "lucide-react";

export function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredNews = [
    {
      id: 1,
      title: "Sommet de l'Union Africaine : Les dirigeants se réunissent à Addis-Abeba",
      excerpt: "Les chefs d'État africains discutent des enjeux économiques et sécuritaires du continent lors du 37e sommet ordinaire de l'UA.",
      content: "Le 37e sommet ordinaire de l'Union Africaine s'est ouvert aujourd'hui à Addis-Abeba avec la participation de plus de 40 chefs d'État et de gouvernement...",
      date: "15 Février 2024",
      time: "14:30",
      category: "Politique",
      location: "Addis-Abeba, Éthiopie",
      author: "Équipe Africa N1",
      image: "/african-union-summit.png",
      featured: true,
    },
    {
      id: 2,
      title: "La tech africaine en pleine expansion avec de nouveaux investissements",
      excerpt: "Les startups technologiques du continent attirent des financements record de 2,4 milliards de dollars en 2024.",
      content: "L'écosystème technologique africain continue sa croissance exceptionnelle avec des investissements qui ont doublé par rapport à l'année précédente...",
      date: "14 Février 2024",
      time: "10:15",
      category: "Économie",
      location: "Lagos, Nigeria",
      author: "Sarah Koné",
      image: "/african-tech-innovation.png",
      featured: false,
    },
    {
      id: 3,
      title: "Festival de musique panafricain : Célébration de la diversité culturelle",
      excerpt: "Plus de 200 artistes de 54 pays africains se rassemblent à Dakar pour le plus grand festival musical du continent.",
      content: "Le Festival Panafricain de Dakar bat son plein avec des performances exceptionnelles qui mettent en valeur la richesse culturelle africaine...",
      date: "13 Février 2024",
      time: "18:45",
      category: "Culture",
      location: "Dakar, Sénégal",
      author: "Mamadou Diallo",
      image: "/african-music-festival.png",
      featured: false,
    },
    {
      id: 4,
      title: "Nouveau programme de développement agricole en Afrique de l'Ouest",
      excerpt: "Un investissement de 500 millions de dollars pour moderniser l'agriculture dans la région.",
      content: "Les pays d'Afrique de l'Ouest ont lancé un programme ambitieux pour transformer le secteur agricole...",
      date: "12 Février 2024",
      time: "09:00",
      category: "Économie",
      location: "Abuja, Nigeria",
      author: "Amara Diop",
      image: "/agriculture-africa.png",
      featured: false,
    },
    {
      id: 5,
      title: "Coupe d'Afrique des Nations : Préparatifs pour l'édition 2025",
      excerpt: "Le Maroc accélère les préparatifs pour accueillir la prochaine CAN.",
      content: "Le comité d'organisation de la Coupe d'Afrique des Nations 2025 a tenu sa première réunion...",
      date: "11 Février 2024",
      time: "16:20",
      category: "Sport",
      location: "Rabat, Maroc",
      author: "Kwame Mensah",
      image: "/can-2025.png",
      featured: false,
    },
  ];

  const breakingNews = [
    "Accord commercial historique entre le Ghana et la Côte d'Ivoire",
    "Nouvelle découverte pétrolière au large du Mozambique",
    "Lancement du satellite nigérian NigComSat-2 prévu demain",
  ];

  const recentUpdates = [
    {
      id: 1,
      title: "Météo : Prévisions pour la semaine en Afrique de l'Ouest",
      time: "Il y a 2h",
      category: "Météo",
    },
    {
      id: 2,
      title: "Bourse : Les marchés africains en hausse de 3,2%",
      time: "Il y a 4h",
      category: "Finance",
    },
    {
      id: 3,
      title: "Sport : Qualification de 5 équipes africaines pour la Coupe du Monde",
      time: "Il y a 6h",
      category: "Sport",
    },
  ];

  const categories = [
    "Tous",
    "Politique",
    "Économie",
    "Culture",
    "Sport",
    "Technologie",
    "Santé",
    "Éducation",
    "Environnement",
  ];

  const filteredNews = selectedCategory && selectedCategory !== "Tous"
    ? featuredNews.filter(article => article.category === selectedCategory)
    : featuredNews;

  const handleArticleClick = (articleId: number) => {
    // Navigate to article detail page
    console.log(`Navigating to article ${articleId}`);
  };

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log("Subscribing to newsletter");
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="actualites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Journal Africa N1
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre source d'information de référence pour l'Afrique et le monde
          </p>
        </div>

        {/* Breaking News Banner */}
        <div className="bg-primary/10 border-l-4 border-primary p-4 mb-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
            <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Dernières nouvelles
          </h3>
          <div className="space-y-1">
            {breakingNews.map((news, index) => (
              <p key={index} className="text-sm text-foreground">
                • {news}
              </p>
            ))}
          </div>
        </div>

        {/* Category Filter - Now at the top */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtrer par catégorie
            </h3>
            {selectedCategory && selectedCategory !== "Tous" && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setSelectedCategory("Tous")}
              >
                Tout afficher
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="px-3 py-1 cursor-pointer transition-all"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main News Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <Card
                  key={article.id}
                  className={`overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    article.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                  onClick={() => handleArticleClick(article.id)}
                >
                  <div className={`aspect-video overflow-hidden ${article.featured ? "aspect-[16/9]" : ""}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x225?text=Africa+N1";
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle
                      className={`font-semibold text-foreground line-clamp-2 ${
                        article.featured ? "text-xl" : "text-lg"
                      }`}
                    >
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.time}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {article.location}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-primary hover:text-primary/80"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleArticleClick(article.id);
                        }}
                      >
                        Lire l'article
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Recent Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mises à jour récentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentUpdates.map((update) => (
                    <div key={update.id} className="border-b border-muted pb-3 last:border-b-0 last:pb-0">
                      <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                        {update.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {update.category}
                        </Badge>
                        <span>{update.time}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Subscription */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Restez informé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail.
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={handleSubscribe}
                  >
                    S'abonner à la newsletter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          <Button size="lg" className="mr-4">
            Voir tous les articles
          </Button>
          <Button size="lg" variant="outline" onClick={handleSubscribe}>
            S'abonner à la newsletter
          </Button>
        </div>
      </div>

      {/* Add line-clamp utility if not already in your CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}