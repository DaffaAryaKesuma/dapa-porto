import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daffa Arya Kesuma | Full-Stack Web Developer",
  description:
    "Portofolio Daffa Arya Kesuma - Full-Stack Web Developer. Membangun sistem web berkinerja tinggi yang presisi, dari antarmuka pengguna hingga logika backend dengan inspirasi presisi rekayasa otomotif.",
  keywords: [
    "Daffa Arya Kesuma",
    "Full-Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Vue.js",
    "Tailwind CSS",
    "Web Developer Indonesia",
    "KRGarage",
  ],
  authors: [{ name: "Daffa Arya Kesuma" }],
  creator: "Daffa Arya Kesuma",
  openGraph: {
    title: "Daffa Arya Kesuma | Full-Stack Web Developer",
    description:
      "Membangun sistem web berkinerja tinggi yang presisi, dari antarmuka pengguna hingga logika backend.",
    type: "website",
    locale: "id_ID",
    url: "https://daffaaryakesuma.dev",
    siteName: "Daffa Arya Kesuma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffa Arya Kesuma | Full-Stack Web Developer",
    description:
      "Membangun sistem web berkinerja tinggi yang presisi, dari antarmuka pengguna hingga logika backend.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-yellow-500/30 selection:text-yellow-400"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
