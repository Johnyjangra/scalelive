import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Ankit.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import "./sumit.css";
import ScalMarket from "./components/ScalMarket";
import Faqs from "./components/Faqs";
import Products from "./components/Products";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { product_data, services_data } from "./components/common/Helper";
import Services from "./components/Services";
function App() {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Hero />
      <ScalMarket />
      <Products Product={product_data} />
      <Services Service={services_data} />
      <Faqs />
    </>
  );
}

export default App;
