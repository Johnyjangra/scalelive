import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Ankit.css"
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <AboutUs/>
      <Hero />
    </>
  );
}

export default App;
