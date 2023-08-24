import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./sumit.css"
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ScalMarket from "./components/ScalMarket";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ScalMarket/>
      <ContactUs/>
      <Footer/> 
    </>
  );
}

export default App;
