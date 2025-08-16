import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({project: {title, imagesrc, description, skills, demo, source}}){
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imagesrc)} alt={`image of ${title}`} className={styles.image}/>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill,id)=>{
                    return <li key={id} className={styles.skill}>{skill}</li>
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Visit</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>                                            
    )
}