import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About me/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactMe/ContactMe";
import ParticlesBackground from "./components/ParticlesBack/ParticlesBackgr.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className={styles.App}>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
