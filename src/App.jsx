import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Porfolio";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Links />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
