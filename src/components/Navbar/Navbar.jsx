import styles from './Navbar.module.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return(
        <nav className={styles.navbar}>
            <a className={styles.logo} href="/">Siddhartha</a>
            <div className={styles.navLinks}>
                {isOpen ? <button className={styles.LinksBtn} aria-label="Close navigation menu" onClick={handleMenu}><FontAwesomeIcon icon={faXmark} /></button> 
                :<button className={styles.LinksBtn} aria-label="Open navigation menu" onClick={handleMenu}><FontAwesomeIcon icon={faBars} /></button>}
                <ul className={`${styles.navList} ${isOpen && styles.active}`} onClick={handleMenu}>
                    <li><a href="/#hero">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
