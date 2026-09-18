import { clientInfo } from "@/data/clientInfo";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Stats.module.css";

export default function Stats() {
  const { stats } = clientInfo;

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.15}>
            <div className={styles.statCard}>
              <span className={styles.value}>{item.value}</span>
              <p className={styles.label}>{item.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}