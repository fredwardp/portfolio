import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InViewArticle = ({ title, period, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0% 42.5% 0% 42.5%" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3>{title}</h3>
        <p>{period}</p>
      </div>
      <img src={img} alt={title} />
    </motion.article>
  );
};

export default InViewArticle;