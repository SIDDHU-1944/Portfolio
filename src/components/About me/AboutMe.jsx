import styles from './AboutMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faServer, faCode, faBookOpen, faArrowsToCircle, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


export default function AboutMe() {

    return(
        <section className={styles.aboutMe} id='about'>
            <div className={styles.container}>
                <h3 className={styles.title}>About Me</h3>
                <div className={styles.detailsBox}>
                    <div className={styles.details}>
                        <div className={styles.detailsIcon}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className={styles.detailsText}>
                            <h4>Student</h4>
                            <p>Currently pursuing my undergraduate degree at NIT Warangal. CGPA: <b>8.21</b></p>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.detailsIcon}>
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <div className={styles.detailsText}>
                            <h4>Frontend Developer</h4>
                            <p>Familiar with creating responsive and user-friendly interfaces.</p>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.detailsIcon}>
                            <FontAwesomeIcon icon={faServer} /> 
                        </div>
                        <div className={styles.detailsText}>
                            <h4>Backend Developer</h4>
                            <p>Experience in building RESTful APIs  handle server-side logic and working with databases.</p>
                        </div>    
                    </div>
                    <div className={styles.details}>
                        <div className={styles.detailsIcon}>
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <div className={styles.detailsText}>
                            <h4>Course Work</h4>
                            <ul style={{listStyle:"none"}}> 
                                <li> DSA</li>
                                <li>DBMS, OS, OOPs</li>
                                <li>Swarm Intelligence Techniques, Machine Learning</li>
                            </ul>
                        </div>    
                    </div>
                    <div className={styles.extraInfo}>
                        <div className={styles.details}>
                            <div className={styles.detailsIcon}>
                                <FontAwesomeIcon icon={faArrowsToCircle} />
                            </div>
                            <div className={styles.detailsText}>
                                <h4>Areas of Interest</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>Integration of AI into web applications</li>
                                    <li>LLM models</li>
                                    <li>robust web applications</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.detailsIcon}>
                                <FontAwesomeIcon icon={faPeopleArrows} />
                            </div>
                            <div className={styles.detailsText}>
                                <h4>Co-Curricular</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>Worked as a Team Lead and Executive member in ChES & IICHE clubs of Nitw for 2 years</li>
                        
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}