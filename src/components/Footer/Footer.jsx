"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topBar} />

      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Coluna 1: Logo & Redes */}
          <div className={styles.brandCol}>
            <a href="#" onClick={handleScrollToTop} className={styles.logoLink} title="Voltar ao início">
              <img src="/logo.png" alt="Solimar Solar Logo" className={styles.brandLogo} />
            </a>

            <p className={styles.brandDesc}>
              Engenharia e soluções em energia fotovoltaica sob medida para residências e empresas no Rio de Janeiro.
            </p>

            <a
              href="https://www.instagram.com/solimar_solar/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>@solimar_solar</span>
            </a>
          </div>

          {/* Coluna 2: Contato & Localização */}
          <div className={styles.infoCol}>
            <h4 className={styles.colTitle}>Contato & Localização</h4>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="https://wa.me/5521998880978" target="_blank" rel="noopener noreferrer">
                  (21) 99888-0978
                </a>
              </li>
              <li>
                <span className={styles.icon}>📍</span>
                <span>Rua Sousa Franco, 605 - Vila Isabel, Rio de Janeiro - RJ</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários (Alinhada à direita para bater com a Ágave) */}
          <div className={styles.infoColRight}>
            <h4 className={styles.colTitle}>Horários de Atendimento</h4>
            <ul className={`${styles.infoList} ${styles.infoListRight}`}>
              <li>
                <span className={styles.icon}>🕒</span>
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
              <li>
                <span className={styles.icon}>🕒</span>
                <span>Sábado: 08:00 - 12:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Solimar Solar. Todos os direitos reservados.
          </p>

          <div className={styles.agaveCredit}>
            <span>Desenvolvido por:</span>
            <a
              href="https://www.agavelab.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.agaveLink}
            >
              <img
                src="/agave-lab-logo.png"
                alt="Ágave Lab - Design & Code"
                className={styles.agaveLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}