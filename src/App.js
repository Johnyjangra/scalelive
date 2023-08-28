import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import BackToTop from "./components/BackToTop";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ScalMarket from "./components/ScalMarket";
import TimeLine from "./components/TimeLine";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// helper
import { product_data, services_data } from "./components/common/Helper";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init(
      {disable: 'mobile',
      duration: 3000,
      once:true,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden mw_1920 mx-auto">
        <BackToTop />
        <NavBar />
        <Hero />
        <ScalMarket />
        <TimeLine />
        <AboutUs />
        <Products Product={product_data} />
        <Services Service={services_data} />
        <Faqs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
