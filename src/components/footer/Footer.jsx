
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return (
        <div className={styles.footer}>
        <div className={styles.rights}>
          <p>
            <b>&copy; Siddhartha_Bairaboina. All rights reserved</b>
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
    )
}