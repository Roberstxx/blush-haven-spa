import Nav from "./components/Nav";
import CTAWhatsApp from "./components/CTAWhatsApp";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import FAQs from "./sections/FAQs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <CTAWhatsApp />
      
      <style jsx global>{`
        .app {
          padding-top: 80px; /* Account for fixed nav */
        }
        
        @media (max-width: 768px) {
          .app {
            padding-top: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
