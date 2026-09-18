"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import RayBadge from "@/components/RayBadge/RayBadge";
import styles from "./Hero.module.css";

export default function Hero({ children }) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section className={styles.heroSection}>
      <motion.div className={styles.bgWrapper} style={{ y: yBg }}>
        <div 
          className={styles.bgImage}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <ScrollReveal direction="left" delay={0.1}>
            <h1 className={styles.title}>
              <span>Economize</span> na sua conta de energia todos os meses.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.25}>
            <p className={styles.subtitle}>
              Projetos e engenharia fotovoltaica sob medida para residências e empresas no Rio de Janeiro.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.35}>
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <strong className={styles.statNumber}>+500</strong>
                <span>Projetos no RJ</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.trustItem}>
                <strong className={styles.statNumber}>95%</strong>
                <span>Redução na fatura</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.trustItem}>
                <strong className={styles.statNumber}>25 Anos</strong>
                <span>Garantia de fábrica</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.rightCol} style={{ position: "relative" }}>
          {/* Raiozinho decorativo flutuando no canto do simulador */}
          <RayBadge style={{ top: "-18px", right: "20px" }} />

          <ScrollReveal direction="right" delay={0.2}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}