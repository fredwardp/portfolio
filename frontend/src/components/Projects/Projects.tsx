"use client";
import { Link } from "react-router-dom";
import "./Projects.css";
import projects from "./ProjectsData";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Feature {
  key: string;
  description: string;
}

interface Project {
  name: string;
  techUsed: string[];
  description: string;
  features: Feature[];
  liveSite: string;
  gitHub: string;
  gallery: string[];
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Get scroll progress
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["0 1", "1.33 1"]
//   });

  // Transform scroll progress to scale and opacity
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section className="projects_sec">
      <div className="in_work">
        <p>Still in work</p>
      </div>
      <h2>Projekte</h2>
      <div className="projects_wrapper" ref={sectionRef}>
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={index}
   
          >
            <Link to={`/project/${index}`}>
              <div className="projects_img_container">
                <img src={project.gallery[0]} alt={project.name} />
              </div>
              <h3>{project.name}</h3>
              <div className="projects_tech_wrapper">
                {project.techUsed.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
        <a
          className="more_projects"
          href="https://github.com/fredwardp?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jede Menge weiterer Projekte
        </a>
      </div>
    </section>
  );
};

export default Projects;