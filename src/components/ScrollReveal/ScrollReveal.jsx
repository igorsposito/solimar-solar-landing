"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.5 
}) {
  // Configuração das direções de entrada
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Efeito de transição suave
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }} // Anima apenas 1x quando o bloco entra no ecrã
      variants={variants}
    >
      {children}
    </motion.div>
  );
}