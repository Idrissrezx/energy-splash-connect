
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      
      {/* Temporary Admin Access Link */}
      <div className="fixed top-4 right-4 z-50">
        <Link to="/admin">
          <Button variant="outline" size="sm">
            Admin Dashboard
          </Button>
        </Link>
      </div>
      
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
