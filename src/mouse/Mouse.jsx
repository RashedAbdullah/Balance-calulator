import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./Use-follow-pointer";

export default function Mouse() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="h-2 w-2 bg-green-500 rounded-full fixed"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 7,
        stiffness: 100,
        restDelta: 0.001,
      }}
    ></motion.div>
  );
}
