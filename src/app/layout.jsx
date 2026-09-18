// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Solimar Solar | Reduza até 95% na Conta de Luz no RJ",
  description: "Projetos de energia fotovoltaica sob medida no Rio de Janeiro. Faça sua simulação gratuita e economize agora.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}