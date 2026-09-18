# ☀️ Solimar Solar — Landing Page de Alta Conversão

> Landing page institucional e comercial desenvolvida para a **Solimar Solar**, empresa especializada em engenharia fotovoltaica e usinas solares no Estado do Rio de Janeiro.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-Scoped-informational?style=for-the-badge&logo=css3)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)

---

## 🚀 Sobre o Projeto

A **Solimar Solar** precisava de uma presença online moderna, veloz e focada em conversão direta de leads via WhatsApp. A plataforma foi projetada para transmitir autoridade imediata, destacando projetos executados, simulador de economia interativo e vitrine de vídeos de alta resolução gravados por drone.

### 🌟 Principais Destaques
- **Header Glassmorphism:** Navegação fixa com efeito blur, lockup da marca e botões de chamada rápida.
- **Simulador Interativo:** Formulário em etapas para estimar o perfil do imóvel e direcionar a proposta.
- **Vitrine de Projetos Realizados:** Esteira de fotos em alta definição com modal de ampliação (Lightbox).
- **Showcase de Vídeos de Drone:** Interface em formato *Reels/Shorts* com efeito *peek* responsivo para vídeos verticais em *loop*.
- **Estimativas de Investimento:** Cards de planos com navegação por carrossel horizontal magnético no mobile.
- **Performance & Responsividade:** Design 100% otimizado para dispositivos móveis com *CSS Scroll Snap*.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Biblioteca UI:** [React](https://react.dev/)
- **Estilização:** CSS Modules + Variáveis Globais de Cores
- **Animações:** [Framer Motion](https://framer.com/motion)
- **Otimização de Mídias:** Componentes nativos de imagem e vídeo HTML5/Next
- **Deploy:** [Vercel](https://vercel.com)

---

## 📁 Estrutura do Projeto

```text
solimar-solar/
├── public/
│   ├── projetos/         # Fotos em alta resolução das obras
│   ├── videos/           # Vídeos verticais de drone (.mp4)
│   └── logo-header.png   # Identidade visual da marca
├── src/
│   ├── app/
│   │   ├── globals.css   # Estilos globais e scroll suave
│   │   ├── layout.jsx    # Configurações de Viewport e Metadados SEO
│   │   └── page.jsx      # Montagem principal dos componentes
│   └── components/       # Módulos reutilizáveis e CSS escopado
│       ├── Header/
│       ├── Hero/
│       ├── Simulator/
│       ├── ProjectsGallery/
│       ├── VideoShowcase/
│       ├── PricingEstimates/
│       └── ...