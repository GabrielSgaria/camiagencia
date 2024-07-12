import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const visby = localFont({
  src: [{
    path: '../../public/fonts/visby_font/VisbyRegular.otf',
    weight: "400",
    style: 'normal',

  },
  {
    path: '../../public/fonts/visby_font/VisbyBold.otf',
    weight: "700",
    style: 'normal'
  }
  ]

})

export const metadata: Metadata = {
  title: "Cami Agência Criativa",
  description: "Cami Agência Criativa | Identidade Visual",
  metadataBase: new URL("https://www.camiagencia.com.br"),
  icons: '/favicon.png',
  openGraph: {
    title: "Cami Agência Criativa | Identidade Visual",
    description: "Cami Agência Criativa | Identidade Visual",
    url: "Cami Agência Criativa | Identidade Visual",
    siteName: "Cami Agência Criativa",
    images: [
      {
        url: "https://sa-east-1.graphassets.com/clwqdkiy400yu07ls56ql92po/clyiqh1k70iui07lu0jqowpmf",
        width: 800,
        height: 600,
      },
      {
        url: "https://sa-east-1.graphassets.com/clwqdkiy400yu07ls56ql92po/clyiqh1ku0iun07lup6mm8x08",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: ["agencia criativa", "criativa agencia de comunicação", "agencia de marketing", "agencia de publicidade",
    "agencia de valor", "Agência Criativa", "Identidade Visual", "Design Gráfico",
    "Branding", "Logotipo", "Marca", "Publicidade", "Marketing Digital", "Criação de Conteúdo",
    "Web Design", "Estratégia de Marca", "Campanhas Publicitárias", "Arte Digital", "Ilustração",
    "Desenvolvimento Web", "Criatividade", "Inovação", "Experiência do Usuário", "Soluções Criativas", "Comunicação Visual",]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={visby.className}>{children}</body>
      <GoogleAnalytics gaId="G-JXVQKJVV7C" />
    </html>
  );
}