import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typewriter from "../Typewriter/Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <Typewriter />
        <h6 className={styles.role}>Student</h6>
        <p className={styles.description}>
          I'm interested in Full-Stack Web development and AI/ML. Open to
          learning, sharing, or teaming up — don't hesitate to reach out.
        </p>
        <div className={styles.btns}>
          <a href="/#projects" className={styles.viewBtn}>
            View My Work
          </a>
          <a href="/#contact" className={styles.contactBtn}>
            Contact Me
          </a>
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
      {/* <img
        src={getImageUrl("spiral.jpg")}
        alt="Hero"
        className={styles.heroImg}
      /> */}
      <DotLottieReact
        src="https://lottie.host/e0b06766-1a6f-4bab-bb85-8fd1ae26e591/NaOCcSl1KM.lottie"
        loop
        autoplay
        // style={{height:"40vw", zIndex:"3"}}
        className={styles.canvasWrapper}
      />
    </section>
  );
}
