"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header({ onSimulateClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Lockup da Marca */}
        <a href="#" className={styles.brandLockup} title="Solimar Solar - Início">
          <img
            src="/logo-header.png"
            alt="Solimar Solar"
            className={styles.headerIcon}
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>SOLIMAR</span>
            <span className={styles.brandSub}>ENERGIA SOLAR</span>
          </div>
        </a>

        {/* Menu de Navegação Completo */}
        <nav className={styles.nav}>
          <a href="#projetos" className={styles.navLink}>Projetos</a>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#estimativas" className={styles.navLink}>Investimento</a>
          <a href="#beneficios" className={styles.navLink}>Benefícios</a>
          <a href="#faq" className={styles.navLink}>FAQ & Contato</a>
        </nav>

        {/* Botão de Ação */}
        <button className={styles.ctaButton} onClick={onSimulateClick}>
          <span>Simular Economia</span>
        </button>
      </div>
    </header>
  );
}