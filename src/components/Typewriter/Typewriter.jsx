import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

export default function Typewriter() {
    const lines = [
        "Welcome to my Portfolio!",
        "I'm Siddhartha"
    ]
    const [currentText, setCurrentText] = useState("");
    const [showFinalText, setShowFinalText] = useState(false);

    // Helper: delay function
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeLines = async () => {
        for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j <= line.length; j++) {
            setCurrentText(line.slice(0, j));
            await sleep(50); // typing speed
        }

        if (i < lines.length - 1) {
            await sleep(1000); // pause before clearing
            setCurrentText(""); // clear before next line
            await sleep(300);  // slight delay after clear
        }
        }

        // When done, lock the last line
        setShowFinalText(true);
    };

    useEffect(() => {
        typeLines();
    }, []);

    return(
        <div className="typeWriterContainer">
            {!showFinalText ? (
                <h1 className={styles.text}>{currentText}</h1>
            ): (
                
                <h1 className={`${styles.text} ${styles.noCursor}`}>{lines[lines.length-1]}</h1>
                
            )}
        </div>
    )
}