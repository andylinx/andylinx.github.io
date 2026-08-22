import type { Metadata } from "next";

import "./globals.css";
import "katex/dist/katex.min.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Nanxi Li's Homepage",
  description:
    "Nanxi Li, undergraduate student at Zhiyuan College, Shanghai Jiao Tong University. Research interests: AI safety and security, multimodal large language models.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  openGraph: {
    title: "Nanxi Li's Homepage",
    description:
      "Undergraduate student at Zhiyuan College, Shanghai Jiao Tong University. Research interests: AI safety and security, multimodal large language models.",
    url: "https://andylinx.github.io",
    siteName: "Nanxi Li's Homepage",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanxi Li's Homepage",
    description:
      "Undergraduate student at Zhiyuan College, Shanghai Jiao Tong University. Research interests: AI safety and security, multimodal large language models."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
