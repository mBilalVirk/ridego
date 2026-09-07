import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AppPromo from "./components/AppPromo/AppPromo";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Stats />
        <HowItWorks />
        <AppPromo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
