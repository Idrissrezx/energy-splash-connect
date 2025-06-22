
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Coaches from "../components/Coaches";
import News from "../components/News";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Coaches />
      <News />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
