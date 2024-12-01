import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const UnderlineText = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.8 } },
  };

  return (
    <div className="relative inline-block" ref={ref}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={underlineVariants}
        className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
        style={{ width: "100%", transformOrigin: "left" }}
      />
      <span className="relative">{text}</span>
    </div>
  );
};

export default UnderlineText;