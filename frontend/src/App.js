import "@/App.css";
import { WelcomeModal } from "@/components/site/WelcomeModal";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Doctor } from "@/components/site/Doctor";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-[#f9f8f6]">
      <WelcomeModal />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctor />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
