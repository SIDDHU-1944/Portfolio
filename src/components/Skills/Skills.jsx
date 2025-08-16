import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/Skills.json"

export default function Skills(){

    return (
        <section id="skills">
            <div className={styles.skillsContainer}>
                <h3 className={styles.title}>Skills</h3>
                <div className={styles.skills}>
                    {skills.map((skill,id)=>{
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.imageContainer}>
                                    <img src={getImageUrl(skill.imagesrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}