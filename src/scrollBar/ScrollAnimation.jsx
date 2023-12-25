import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.50, 1],
    ["rgb(0, 54, 54)", "rgb(0, 54, 54)", "rgb(0, 225, 225)"]
  );

  return (
    <div className="box">
      <motion.div
        style={{ transformOrigin: "left", scaleX, backgroundColor }}
        className=" h-[5px] w-full bg-black fixed bottom-[1px] left-0"
      />
    </div>
  );
};

export default ScrollAnimation;
