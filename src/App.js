import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import "./sumit.css";
import "./Ankit.css";
import ScalMarket from "./components/ScalMarket";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ScalMarket />
      <AboutUs />
      <TimeLine />
    </>
  );
}

export default App;
