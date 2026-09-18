// src/app/page.jsx
"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Simulator from "@/components/Simulator/Simulator";
import Stats from "@/components/Stats/Stats";
import ProjectsGallery from "@/components/ProjectsGallery/ProjectsGallery";
import VideoShowcase from "@/components/VideoShowcase/VideoShowcase";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import PricingEstimates from "@/components/PricingEstimates/PricingEstimates";
import Comparison from "@/components/Comparison/Comparison";
import FaqContact from "@/components/FaqContact/FaqContact";
import Footer from "@/components/Footer/Footer";
import { clientInfo } from "@/data/clientInfo";

export default function Home() {
  const handleScrollToSimulador = () => {
    const el = document.getElementById("simulador");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (kwh) => {
    const message = encodeURIComponent(
      `Olá, Rodrigo! Vi a tabela de estimativas no site da Solimar Solar e gostaria de saber mais sobre o projeto de *${kwh}*.`
    );
    window.open(`https://wa.me/${clientInfo.phone}?text=${message}`, "_blank");
  };

  return (
    <main>
      <Header onSimulateClick={handleScrollToSimulador} />
      
      <Hero>
        <div id="simulador">
          <Simulator />
        </div>
      </Hero>

      <Stats />

      {/* Galeria de Fotos */}
      <ProjectsGallery />

      {/* Seção de Vídeos de Drone (Estilo Reels) */}
      <VideoShowcase />

      {/* Como Funciona */}
      <div id="como-funciona">
        <HowItWorks />
      </div>

      {/* Estimativas de Investimento */}
      <div id="estimativas">
        <PricingEstimates onSelectPlan={handleSelectPlan} />
      </div>

      {/* Comparativo Com vs Sem Solimar */}
      <div id="beneficios">
        <Comparison onSimulateClick={handleScrollToSimulador} />
      </div>

      {/* FAQ Accordion + Form WhatsApp + Mapa Google */}
      <div id="faq">
        <FaqContact />
      </div>

      {/* Rodapé com Assinatura da Ágave Lab */}
      <Footer />
    </main>
  );
}