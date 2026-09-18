// data/clientInfo.js

export const clientInfo = {
  name: "Solimar Solar",
  tagline: "Energia Fotovoltaica no Rio de Janeiro",
  phone: "+5521998880978", 
  location: "Rio de Janeiro - RJ",
  
  // Textos principais da Hero
hero: {
  badge: "Energia Solar Residencial e Comercial",
  title: "Reduza em até",
  highlightText: "95%",
  titleEnd: "o valor da sua conta de luz",
  subtitle: "Projetos personalizados, engenharia própria e instalação rápida para sua residência ou empresa no RJ.",
  ctaButton: "Simular Economia Agora",
  images: [
    "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1600&auto=format&fit=crop"
  ]
},

  // Parâmetros do Simulador
    simulator: {
    title: "Simulador de Economia",
    step1Title: "Qual o tipo do seu imóvel?",
    step2Title: "Qual o valor médio da sua conta de luz mensal?",
    step3Title: "Sua economia estimada é de até:",
    propertyTypes: ["Residencial", "Comercial", "Rural"],
    defaultBillValue: 600,
    minBillValue: 200,
    maxBillValue: 5000,
    stepBillValue: 50,
    economyPercentage: 0.90, // 90% de economia estimativa
    whatsappBaseMessage: "Olá! Fiz a simulação no site da Solimar Solar e gostaria de um orçamento detalhado.",
  },

  // Prova Social / Estatísticas
  stats: [
    { value: "+500", label: "Projetos Executados no RJ" },
    { value: "95%", label: "Redução Média na Fatura" },
    { value: "25 Anos", label: "Garantia nos Painéis" },
  ],
};