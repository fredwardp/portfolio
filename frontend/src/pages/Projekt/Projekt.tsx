import "./Projekt.css";
import { useParams } from "react-router-dom";
import projects from "../../components/Projects/ProjectsData.js";
import ImgPopup from "../../components/ImgPopup/ImgPopup";
import { useContext, useEffect, useState } from "react";
import { color } from "framer-motion";
import { NavColorConext } from "../../components/context.js";

interface Feature {
  key: string;
  description: string;
}

interface Color {
  bg: string,
  text: string,
  highlight: string,
  block:string
}
interface Project {
  name: string;
  techUsed: string[];
  description: string;
  features: Feature[];
  liveSite: string;
  gitHub: string;
  gallery: string[];
  color: Color
}

const Project = () => {
  const [showPopup, setShowPopUp] = useState<boolean>(false);
  const [imgShown, setImgShown] = useState<number>(0);
  const { index } = useParams<{ index: string }>();
  const { setNavColor} = useContext(NavColorConext)

  const projectIndex = parseInt(index, 10);
  const project: Project | undefined = projects[projectIndex];

  if (!project) {
    return <p>Project not found</p>;
  }

  const openPopupHandler = (imgIndex: number) => {
    setImgShown(imgIndex);
    setShowPopUp(true);
  };

  useEffect(() => {
    setNavColor(project.color.highlight)
  }, [])

  return (
    <header style={{backgroundColor: project.color.bg}} className={`container projekt_header ${showPopup && "no_scroll" }`}>
      {showPopup && (
        <ImgPopup
          setShowPopUp={setShowPopUp}
          gallery={project.gallery}
          imgShown={imgShown}
          setImgShown={setImgShown}
        />
      )}

      <h1 style={{color: project.color.highlight}}>{project.name}</h1>
      <div className="mainimg_wrapper">
        <img
          className="mainimg"
          src={project.gallery[0]}
          alt={project.name}
          onClick={() => openPopupHandler(0)}
        />
        <div className="gallery_wrapper">
          {project.gallery.map((img: string, imgIndex: number) => (
            imgIndex !== 0 && (
              <img
                key={imgIndex}
                onClick={() => openPopupHandler(imgIndex)}
                src={img}
                alt={`Gallery image ${imgIndex}`}
              />
            )
          ))}
        </div>
      </div>
      <div className="projekt_content_wrapper">
        <article style={{backgroundColor: project.color.block, color: project.color.text}} className="green_content">
          <h2>TechStack</h2>
          <div className="projekt_tech_wrapper">
            {project.techUsed.map((tech: string, techIndex: number) => (
              <p key={techIndex}>{tech}</p>
            ))}
          </div>
          <h2>Projekt Beschreibung</h2>
          <p>{project.description}</p>
          <div className="projekt_features">
            <h2>Projekt Features</h2>
            {project.features.map((feature: Feature, featureIndex: number) => (
              <p key={featureIndex}>
                <span>{feature.key}: </span>
                {feature.description}
              </p>
            ))}
          </div>
          <div  className="projekt_link_wrapper">
            {
            project.liveSite &&             
              <a style={{color: project.color.highlight}} target="_blank" href={project.liveSite}>LiveSite</a>
            }
{
project.gitHub &&
      <a style={{color: project.color.highlight}}  target="_blank" href={project.gitHub}>Github</a>
}
      
          </div>
        </article>
      </div>
    </header>
  );
};

export default Project;