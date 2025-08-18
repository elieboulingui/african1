import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Languages } from "./components/languages";
import { LivePlayer } from "./components/live-player";
import { News } from "./components/news";
import { Programs } from "./components/programs";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LivePlayer />
        <Programs />
        <News />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}
