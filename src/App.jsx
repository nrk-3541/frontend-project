import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Impact from './components/sections/Impact';
import CTA from './components/sections/CTA';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Services />
        <Pricing />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
