import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={visby.className}>{children}</body>
    </html>
  );
}