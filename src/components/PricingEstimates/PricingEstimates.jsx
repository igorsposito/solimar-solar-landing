"use client";

import styles from "./PricingEstimates.module.css";

const plans = [
  {
    kwh: "300 kWh",
    profile: "Pequeno Porte / Residencial",
    price: "12x de R$ 986,10",
    installment: "Parcelamento no cartão em até 24x",
    features: [
      "Ideal para casas pequenas",
      "Economia média de R$ 350/mês",
      "Garantia de 25 anos",
    ],
    featured: false,
  },
  {
    kwh: "700 kWh",
    profile: "Médio Porte / Famílias",
    price: "12x de R$ 1.654,50",
    installment: "Parcelamento no cartão em até 24x",
    features: [
      "Ideal para casas grandes/sobrados",
      "Economia média de R$ 850/mês",
      "Garantia de 25 anos",
    ],
    featured: true,
    badgeText: "MAIS PEDIDO ⚡",
  },
  {
    kwh: "1200 kWh",
    profile: "Alto Padrão / Comercial",
    price: "12x de R$ 2.890,00",
    installment: "Parcelamento no cartão em até 24x",
    features: [
      "Ideal para comércios e empresas",
      "Economia média de R$ 1.500/mês",
      "Garantia de 25 anos",
    ],
    featured: false,
  },
];

export default function PricingEstimates({ onSelectPlan }) {
  return (
    <section id="estimativas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>TRANSPARÊNCIA TOTAL</span>
          <h2 className={styles.title}>
            Exemplos de sistemas e <span>investimento estimado</span>
          </h2>
          <p className={styles.subtitle}>
            Com a Solimar Solar, você transforma o custo fixo da conta de luz em um investimento com retorno garantido.
          </p>
        </div>

        {/* Trilho dos Cards */}
        <div className={styles.cardsGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ""}`}
            >
              {plan.featured && (
                <div className={styles.badgeFeatured}>{plan.badgeText}</div>
              )}

              <div className={styles.cardHeader}>
                <span className={styles.kwhBadge}>{plan.kwh}</span>
                <p className={styles.profileTitle}>{plan.profile}</p>
              </div>

              <div className={styles.priceBlock}>
                <p className={styles.priceMain}>{plan.price}</p>
                <p className={styles.priceSub}>{plan.installment}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((item, fIndex) => (
                  <li key={fIndex}>
                    <span className={styles.bullet}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={styles.selectBtn}
                onClick={() => onSelectPlan && onSelectPlan(plan.kwh)}
              >
                SOLICITAR ESTE PROJETO
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}