import { useState } from "react";
import "./TechStack.css"



const TechStack = () => {
    const [bgChange, setBgChange] = useState("./img/react_background.png")

    console.log(bgChange);
    
    return ( 
    <section className="techstack_section">
        <div className="techstack_wrapper">
            <div className="video_wrapper">
                <video src="/video/test_cut.mp4" autoPlay muted loop></video>
                <div className="video_gradient"></div>
                <div className="video_overlay"></div>
            </div>
            <div className="stack_wrapper" style={{backgroundImage: `url(${bgChange})`}}>
                <h2>Tech Stack</h2>
                <article>
                    <div onMouseEnter={() => setBgChange("./img/react_background.png")}>
                        <img src="/img/React-icon.svg" alt="" />
                        <p>React</p>
                    </div>
                    <div  onMouseEnter={() => setBgChange("./img/javascript_background.png")}>
                        <img src="/img/javascript-icon.svg" alt="" />
                        <p>Javascript</p>
                    </div>
                    <div onMouseEnter={() => setBgChange("./img/html_css_background.png")}>
                        <img src="/img/html_css-icon.svg" alt="" />
                        <p>html & css</p>
                    </div>
                    <div onMouseEnter={() => setBgChange("./img/typescript_background.png")}>
                        <img src="/img/Typescript-icon.svg" alt="" />
                        <p>typescript</p>
                    </div>
                    <div onMouseEnter={() => setBgChange("./img/node_background.png")}>
                        <img src="/img/node-icon.svg" alt="" />
                        <p>node js</p>
                    </div>
                    <div onMouseEnter={() => setBgChange("./img/express_background.png")}>
                        <img src="/img/express-icon.svg" alt="" />
                        <p>express js</p>
                    </div>
                    <div onMouseEnter={() => setBgChange("./img/mongodb_background.png")}>
                        <img src="/img/mongodb-icon.svg" alt="" />
                        <p>mongodb</p>
                    </div>
                    </article>
            </div>
        </div>
    </section> );
}
 
export default TechStack;