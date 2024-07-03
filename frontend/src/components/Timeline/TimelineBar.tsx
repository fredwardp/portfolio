import React from "react";
import { motion, useScroll } from "framer-motion";
import "./Timeline.css";

const TimelineBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="timeline-div">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="timeline-filling"
      ></motion.div>
    </div>
  );
};

export default TimelineBar;