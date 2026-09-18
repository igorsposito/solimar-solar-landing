"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clientInfo } from "@/data/clientInfo";
import styles from "./Simulator.module.css";

export default function Simulator() {
  const { simulator, phone } = clientInfo;
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Residencial");
  const [billValue, setBillValue] = useState(simulator.defaultBillValue);

  const annualEconomy = Math.round(billValue * simulator.economyPercentage * 12);

  const handleWhatsAppSend = () => {
    const message = encodeURIComponent(
      `Olá, Rodrigo! Fiz a simulação no site da Solimar Solar.\n\n` +
      `📌 *Tipo de Imóvel:* ${propertyType}\n` +
      `💡 *Conta Atual:* R$ ${billValue}/mês\n` +
      `💰 *Economia Estimada:* R$ ${annualEconomy.toLocaleString("pt-BR")}/ano\n\n` +
      `Gostaria de solicitar um orçamento personalizado!`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className={styles.simulatorCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{simulator.title}</h3>
        <span className={styles.stepBadge}>Passo {step} de 3</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.2 }}
          >
            <label className={styles.label}>{simulator.step1Title}</label>
            <div className={styles.gridOptions}>
              {simulator.propertyTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPropertyType(type)}
                  className={`${styles.optionBtn} ${propertyType === type ? styles.activeOption : ""}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className={styles.nextBtn}
            >
              Próximo Passo →
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.2 }}
          >
            <label className={styles.label}>{simulator.step2Title}</label>
            <div className={styles.valueDisplay}>
              R$ {billValue} <span>/mês</span>
            </div>
            <input
              type="range"
              min={simulator.minBillValue}
              max={simulator.maxBillValue}
              step={simulator.stepBillValue}
              value={billValue}
              onChange={(e) => setBillValue(Number(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.btnRow}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className={styles.backBtn}
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className={styles.nextBtn}
              >
                Ver Economia →
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.resultStep}
          >
            <div className={styles.highlightCard}>
              <span className={styles.resultLabel}>Sua economia estimada é de até:</span>
              <div className={styles.resultValue}>
                R$ {annualEconomy.toLocaleString("pt-BR")}
                <span className={styles.period}>/ano</span>
              </div>
              <p className={styles.disclaimer}>
                *Baseado na tarifa média residencial/comercial do RJ.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className={styles.whatsappBtn}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.198 8.198 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28z"/>
              </svg>
              <span>Receber Proposta no WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className={styles.restartLink}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
              <span>Refazer simulação</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}