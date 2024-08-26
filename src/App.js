import "./App.css"
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mycontact from "./components/Mycontact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Mycontact />
    <Footer />
    </div>
  );
}

export default App;
