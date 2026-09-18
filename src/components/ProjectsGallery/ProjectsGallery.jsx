"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./ProjectsGallery.module.css";

// Mapeamento apontando diretamente para as fotos salvas na pasta public/projetos/
const projectImages = [
  {
    url: "/projetos/projeto-1.jpg",
    title: "Engenho Novo, RJ",
    specs: "Sistema 6,9 kWp",
  },
  {
    url: "/projetos/projeto-2.jpg",
    title: "Engenho Novo, RJ",
    specs: "Sistema 6,9 kWp",
  },
  {
    url: "/projetos/projeto-3.jpg",
    title: "Instalação ambiente comercial",
    specs: "Instalação dos perfis",
  },
  {
    url: "/projetos/projeto-4.jpg",
    title: "Instalação ambiente comercial",
    specs: "Instalação dos perfis",
  },
  {
    url: "/projetos/projeto-5.jpg",
    title: "Instalação ambiente comercial",
    specs: "Instalação dos modulos",
  },
    {
    url: "/projetos/projeto-6.jpg",
    title: "Instalação ambiente comercial",
    specs: "Instalação dos modulos",
  },
];

export default function ProjectsGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Duplicação para garantir a esteira contínua e sem fendas no loop
  const marqueeImages = [...projectImages, ...projectImages];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.headerContainer}>
        <ScrollReveal direction="up" delay={0.1}>
          <span className={styles.tag}>PROVAS REAIS</span>
          <h2 className={styles.title}>
            Instalações executadas com <span>excelência no RJ</span>.
          </h2>
        </ScrollReveal>
      </div>

      {/* Faixa Contínua de Projetos */}
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {marqueeImages.map((project, index) => {
            const originalIndex = index % projectImages.length;
            return (
              <div
                key={index}
                className={styles.imageCard}
                onClick={() => setSelectedIndex(originalIndex)}
              >
                <img src={project.url} alt={project.title} className={styles.image} />
                <div className={styles.hoverOverlay}>
                  <span className={styles.zoomIcon}>🔍 Clique para ampliar</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>
                ✕
              </button>

              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
                ‹
              </button>

              <img
                src={projectImages[selectedIndex].url}
                alt={projectImages[selectedIndex].title}
                className={styles.modalImage}
              />

              <div className={styles.modalFooter}>
                <h3>{projectImages[selectedIndex].title}</h3>
                <p>{projectImages[selectedIndex].specs}</p>
              </div>

              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}