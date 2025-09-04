import styles from "./Project.module.css";
import projects from "../../data/Project.json";
import { getImageUrl } from "../../utils";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h3 className={styles.title}>Projects</h3>
      <Swiper
        modules={[Keyboard, Navigation, EffectCoverflow, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={600}
        initialSlide={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 20,
          depth: 100,
          scale:1,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className={`${styles.myswiper}`}
      >
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return (
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardWrapper}>
                    <ProjectCard key={id} project={project}  className={styles.projectCard}/>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
}
