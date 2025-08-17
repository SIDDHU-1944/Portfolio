import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About me/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactMe/ContactMe";
import ParticlesBackground from "./components/ParticlesBack/ParticlesBackgr.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <div className={styles.footer}>
        <div className={styles.rights}>
          <p>
            <b>&copy; Siddhartha. All rights reserved</b>
          </p>
        </div>
        <div className={styles.icons}>
          <a href="https://github.com/SIDDHU-1944">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/siddhartha-bairaboina-692575250/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/siddhartha_24_?igsh=MW5oamgweDZwOW5lcg==">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://leetcode.com/u/Siddhartha2401/">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a href="mailto:bairaboinasiddhartha@gmail.com?subject=Hello&body=I want to connect with you.">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
