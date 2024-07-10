"use client";
import { Link } from "react-router-dom";
import "./Projects.css"
import projects from "./ProjectsData.js"
import { useScroll } from "framer-motion";
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
const ref = useRef<HTMLAnchorElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    return (  
    <section className="projects_sec">
        <div className="in_work">
            <p >still in work</p>   
        </div>
        <h2>Projekte</h2>
        <div className="projects_wrapper">
            {projects.map((project: Project, index: number) => (
                <Link style={{scale: scrollYProgress, opacity: scrollYProgress}} ref={ref} key={index} to={`/project/${index}`}>
                    <div className="projects_img_container">
                        <img src={project.gallery[0]} alt="" />
                    </div>
                    <h3>{project.name}</h3>
                    <div className="projects_tech_wrapper">{project.techUsed.map((tech) => (
                        <p key={tech}>{tech}</p>
                        ))}
                    </div>
                </Link >
))}
<a className="more_projects" href="https://github.com/fredwardp?tab=repositories" target="_blank">Jede Menge weiterer Projekte</a >
        </div>
    </section>);
}
 
export default Projects;