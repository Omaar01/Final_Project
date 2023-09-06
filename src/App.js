import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Port from "./components/Port";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './App.css'
function App() {
  return (
    <div>
  <NavBar />
  <Home />
  <About />
  <SocialLinks />
  <Port />

  <Experience />
  <Contact />
    </div>
  );
}

export default App;
