import styles from "./Project.module.css";
import projects from "../../data/Project.json";
import { getImageUrl } from "../../utils";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects(){
    return (
        <section id="projects" className={styles.container}>
            <h3 className={styles.title}>Projects</h3>
            <div className={styles.projects}>
                {projects.map((project,id)=>{
                    return (
                        <ProjectCard key={id} project={project}/>
                    )
                })}
            </div>
        </section>
    )
}