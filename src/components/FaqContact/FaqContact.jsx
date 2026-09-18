"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { clientInfo } from "@/data/clientInfo";
import styles from "./FaqContact.module.css";

const faqData = [
  {
    question: "Quanto tempo demora a instalação completa do sistema?",
    answer: "A instalação física nos telhados leva em média de 1 a 3 dias. Todo o processo de homologação técnica junto à concessionária (Light/Enel) é gerido 100% pela nossa equipe de engenharia.",
  },
  {
    question: "Como funciona a garantia de 25 anos dos painéis?",
    answer: "Trabalhamos exclusivamente com módulos de primeira linha que garantem pelo menos 80% da eficiência de geração mesmo após 25 anos de utilização contínua.",
  },
  {
    question: "O que acontece em dias chuvosos ou nublados?",
    answer: "O sistema continua a gerar energia através da radiação solar difusa. Além disso, os créditos acumulados nos meses de sol intenso garantem o seu desconto total durante o ano.",
  },
  {
    question: "Preciso de obras complexas no meu imóvel para instalar?",
    answer: "Não! A instalação é limpa e rápida. Os painéis são fixados com estruturas específicas sobre o telhado existente e o inversor é conectado ao seu quadro elétrico.",
  },
];

export default function FaqContact() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Olá, Rodrigo! Enviei uma mensagem pelo formulário do site da Solimar Solar.\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📍 *Cidade/Bairro:* ${formData.city || "Não informado"}\n` +
      `💬 *Mensagem:* ${formData.message || "Sem mensagem adicional"}\n\n` +
      `Gostaria de solicitar um atendimento!`
    );

    window.open(`https://wa.me/${clientInfo.phone}?text=${message}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <span className={styles.tag}>TIRA-DÚVIDAS & CONTATO</span>
            <h2 className={styles.title}>
              Ficou com alguma dúvida? <span>Estamos prontos para ajudar</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid Pareado: FAQ + Formulário */}
        <div className={styles.grid}>
          {/* Esquerda: Perguntas Frequentes */}
          <div className={styles.faqCol}>
            <h3 className={styles.colTitle}>Perguntas Frequentes</h3>
            <div className={styles.accordionGroup}>
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.question}</span>
                      <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className={styles.faqAnswerWrapper}
                        >
                          <p className={styles.faqAnswer}>{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direita: Formulário Completo */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {!isSubmitted ? (
                <>
                  <h3 className={styles.formTitle}>Fale com a nossa Engenharia</h3>
                  <p className={styles.formDesc}>
                    Preencha seus dados e fale diretamente conosco no WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label>Seu Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label>WhatsApp / Telefone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(21) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label>Sua Cidade / Bairro no RJ</label>
                        <input
                          type="text"
                          placeholder="Ex: Niterói, Recreio..."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label>Sua Mensagem (Opcional)</label>
                      <textarea
                        rows="2"
                        placeholder="Conte brevemente como podemos te ajudar..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.198 8.198 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28z"/>
                      </svg>
                      <span>Enviar Mensagem no WhatsApp</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
                  <p className={styles.successDesc}>
                    Obrigado pelo contato. Abrimos o WhatsApp para concluir seu atendimento e em breve nossa equipe te responderá.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className={styles.resetBtn}>
                    Enviar nova mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Faixa Elegante do Mapa do Google abaixo das duas colunas */}
        <div className={styles.mapBanner}>
          <div className={styles.mapInfo}>
            <div className={styles.mapPinIcon}>📍</div>
            <div>
              <strong>Nossa Sede no Rio de Janeiro</strong>
              <p>Rua Sousa Franco, 605 - Vila Isabel - Rio de Janeiro / RJ</p>
            </div>
          </div>
          <div className={styles.mapFrame}>
            <iframe
              title="Endereço Solimar Solar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.201298123884!2d-43.2498218!3d-22.9152344!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5d886bc51d%3A0x1d4d547f83bc1c02!2sR.%20Sousa%20Franco%2C%20605%20-%20Vila%20Isabel%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020551-120!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}