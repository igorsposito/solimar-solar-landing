"use client";

import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import RayBadge from "@/components/RayBadge/RayBadge";
import styles from "./Comparison.module.css";
import { clientInfo } from "@/data/clientInfo";

const withoutSolimar = [
  "Pagamento contínuo e vitalício à concessionária",
  "Submissão a aumentos e reajustes tarifários anuais",
  "Zero retorno do valor investido mês a mês",
  "Incerteza no orçamento familiar ou da empresa",
];

const withSolimar = [
  "Economia imediata de até 95% na fatura de luz",
  "Proteção total contra a inflação energética",
  "Valorização imediata do seu imóvel no RJ",
  "Investimento que se paga sozinho (Payback)",
  "Garantia de eficiência de 25 anos nos painéis",
];

export default function Comparison({ onSimulateClick }) {
  const handleCtaClick = () => {
    const message = encodeURIComponent("Olá! Vi a comparação no site e quero economizar até 95% na minha conta com a Solimar Solar.");
    window.open(`https://wa.me/${clientInfo.phone}?text=${message}`, "_blank");
  };

  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <span className={styles.tag}>DECISÃO INTELIGENTE</span>
            <h2 className={styles.title}>
              Compare o seu cenário <span>atual com o futuro</span>.
            </h2>
            <p className={styles.subtitle}>
              Entenda por que continuar pagando a conta de luz tradicional é o pior negócio para o seu bolso.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Card: Sem Solimar */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className={styles.cardNegative}>
              <div className={styles.cardHeader}>
                <span className={styles.badgeNegative}>CENÁRIO ATUAL</span>
                <h3 className={styles.cardTitle}>Sem Energia Solar</h3>
                <p className={styles.cardPrice}>Dinheiro a fundo perdido</p>
              </div>

              <ul className={styles.list}>
                {withoutSolimar.map((item, index) => (
                  <li key={index} className={styles.itemNegative}>
                    <span className={styles.iconCross}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Card: Com Solimar */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.cardPositive}>
              <RayBadge style={{ top: "-18px", right: "20px" }} />

              <div className={styles.cardHeader}>
                <span className={styles.badgePositive}>COM A SOLIMAR SOLAR</span>
                <h3 className={styles.cardTitleLight}>Sua Própria Usina</h3>
                <p className={styles.cardPriceHighlight}>Até 95% de economia</p>
              </div>

              <ul className={styles.list}>
                {withSolimar.map((item, index) => (
                  <li key={index} className={styles.itemPositive}>
                    <span className={styles.iconCheck}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className={styles.ctaButton} onClick={handleCtaClick}>
                QUERO ESSA ECONOMIA AGORA
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}