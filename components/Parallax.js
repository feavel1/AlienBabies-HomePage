import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Parallax({ speed, children }) {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      style={{ y: yValue }}
    >
      {children}
    </motion.div>
  );
}
