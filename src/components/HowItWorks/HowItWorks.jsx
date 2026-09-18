"use client";

import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import RayBadge from "@/components/RayBadge/RayBadge";
import styles from "./HowItWorks.module.css";
import { clientInfo } from "@/data/clientInfo";

const steps = [
  {
    number: "01",
    title: "Simulação Rápida",
    desc: "Você simula sua economia em menos de 1 minuto diretamente aqui pelo site.",
  },
  {
    number: "02",
    title: "Estudo de Viabilidade",
    desc: "Nossa engenharia analisa sua conta e desenha o projeto ideal sem custo.",
  },
  {
    number: "03",
    title: "Instalação Ágil",
    desc: "Equipe própria realiza a montagem física com homologação completa na concessionária.",
  },
  {
    number: "04",
    title: "Economia Imediata",
    desc: "Seu sistema entra em funcionamento e sua conta cai para o valor mínimo.",
  },
];

export default function HowItWorks() {
  const message = encodeURIComponent(
    "Olá! Vi o passo a passo no site e gostaria de fazer uma simulação gratuita do meu projeto."
  );

  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <span className={styles.tag}>PASSO A PASSO</span>
            <h2 className={styles.title}>
              A mudança para a energia solar começa na <span>decisão</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid de Cards dos Passos */}
        <div className={styles.grid}>
          {steps.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.15 * index}>
              <div className={styles.card}>
                <span className={styles.stepNumber}>{item.number}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Card Destaque Tipo a Publi do Insta */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.bannerCall}>
            <RayBadge style={{ top: "-20px", right: "20px" }} />
            <div className={styles.bannerText}>
              <h3>Energia solar não pesa no bolso.</h3>
              <p>Pesado é continuar pagando conta alta todo mês.</p>
            </div>
            <a
              href={`https://wa.me/${clientInfo.phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bannerBtn}
            >
              FAÇA SUA SIMULAÇÃO GRATUITA
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}