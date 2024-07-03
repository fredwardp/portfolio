import "./Timeline.css"
import {motion, useTransform, useScroll} from "framer-motion"

const TimelineBar = () => {
const {scrollYProgress} = useScroll()

    return (          
    <div className="timeline-div">
        <div style={{scaleX: scrollYProgress}} className="timeline-filling"></div>
    </div> );
}
 
export default TimelineBar;