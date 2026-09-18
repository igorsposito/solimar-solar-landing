"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./VideoShowcase.module.css";

const videosData = [
  {
    id: 1,
    videoUrl: "/videos/drone-1.mp4",
    title: "Obra Empresarial Niterói",
    location: "IMAGEMFIX - RJ",
    tag: "🚁 Voo de Drone",
  },
  {
    id: 2,
    videoUrl: "/videos/drone-2.mp4",
    title: "Instalação Comercial Completa",
    location: "IMAGEMFIX - RJ",
    tag: "⚡ Execução de Obra",
  },
  {
    id: 3,
    videoUrl: "/videos/drone-3.mp4",
    title: "Sistema residencial de 8,19 KWp",
    location: "Vargem Pequena - RJ",
    tag: "Instaçlação residencial",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <span className={styles.tag}>BASTIDORES & DRONE</span>
            <h2 className={styles.title}>
              Veja nossas instalações <span>em ação</span>.
            </h2>
            <p className={styles.subtitle}>
              Imagens aéreas reais dos projetos entregues pela nossa engenharia no Rio de Janeiro.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Vídeos Verticais */}
        <div className={styles.grid}>
          {videosData.map((item) => (
            <div
              key={item.id}
              className={styles.videoCard}
              onClick={() => setActiveVideo(item)}
            >
              {/* Badge no topo */}
              <span className={styles.cardTag}>{item.tag}</span>

              {/* Vídeo em Loop Silencioso */}
              <video
                src={item.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className={styles.previewVideo}
              />

              {/* Overlay com Informações e Botão de Play */}
              <div className={styles.cardOverlay}>
                <div className={styles.playIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardLocation}>📍 {item.location}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Assistir com Áudio */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setActiveVideo(null)}>
                ✕
              </button>
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className={styles.modalVideo}
              />
              <div className={styles.modalFooter}>
                <h3>{activeVideo.title}</h3>
                <p>📍 {activeVideo.location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}