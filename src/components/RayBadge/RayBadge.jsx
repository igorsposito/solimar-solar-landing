"use client";

import { motion } from "framer-motion";
import styles from "./RayBadge.module.css";

export default function RayBadge({ style }) {
  return (
    <motion.div
      className={styles.rayContainer}
      style={style}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    </motion.div>
  );
}