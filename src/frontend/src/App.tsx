import CountdownSection from "./components/CountdownSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import HeroStackedCards from "./components/HeroStackedCards";
import Navigation from "./components/Navigation";
import ServicesSection from "./components/ServicesSection";
import StudioStorySection from "./components/StudioStorySection";
import WorkSection from "./components/WorkSection";

export default function App() {
  return (
    <div className="relative" style={{ background: "oklch(0.97 0.006 80)" }}>
      <Navigation />
      <main>
        <HeroStackedCards />
        <CountdownSection />
        <ServicesSection />
        <StudioStorySection />
        <WorkSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
