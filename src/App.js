import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./sumit.css";
import ScalMarket from "./components/ScalMarket";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ScalMarket />
    </>
  );
}

export default App;
