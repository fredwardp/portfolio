

import { useContext, useEffect, useRef } from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import Timeline from "../../components/Timeline/Timeline";
import "./Home.css"
import { NavColorConext } from "../../components/context";
const Home :React.FC = () => {
    const { setNavColor, navColor} = useContext(NavColorConext)

    useEffect(() => {
        setNavColor("#183d3d")
    },[])
    
    const quoteRef = useRef(null);

  const quoteText = "If you follow your heart and do what you like, you will always do much better. It doesn't matter what your educational qualification is.";
  const author = "Sundar Pichai";
  const position = "CEO, Google";

  useEffect(() => {
    const letters = quoteRef.current.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.04}s`;
    });
  }, []);

    return ( 
        <>
        <HomeHero/>
        <section className="quote_section">
                <blockquote ref={quoteRef} className="quote">
            {quoteText.split('').map((char, index) => (
                <span key={index} className="letter">
                {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
            <br />

            </blockquote>
                        <p ><br />{author}</p>
            <br />
            <p >{position}</p>
        </section>
        <Timeline/>
        <TechStack/>
        <Projects/>
        </>
    );
}
 
export default Home ;