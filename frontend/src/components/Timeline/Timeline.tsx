import "./Timeline.css";
import { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import InViewArticle from "../InViewArticle";

const articles = [
  {
    title: "Fitnessökomie Studium / EMS-Studioleiter",
    period: "2017-10.2022",
    img: "/img/fitnessco.jpg",
  },
  {
    title: "Webflow / Figma / HTML&CSS Lernphase",
    period: "02.2022-11.2022",
    img: "/img/timeline2.png",
  },
  {
    title: "Nebenberuflich Designen & Umsetzen von Webseiten",
    period: "12.2022-10.2023",
    img: "/img/freelancer_cut.jpg",
  },
  {
    title: "Fullstack Coding Deepdive SuperCode",
    period: "10.2023-07.2024",
    img: "/img/supercode_cut.jpeg",
  },
];

const Timeline = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["14%", "-66.5%"]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("invisible");
        }
      });
    });

    const elements = document.querySelectorAll(".timeline-stations > div");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section ref={targetRef} className="timeline-section">
      <div className="container timeline-animation-wrapper">
        <h2>Life in a nutshell</h2>
        <motion.div style={{ x }} className="timeline-stations">
          {articles.map((article, index) => (
            <div key={index} className="invisible">
              <InViewArticle {...article} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;