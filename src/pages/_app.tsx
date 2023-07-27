import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const JetBrainsMono = localFont({
  src: "../../public/fonts/JetBrains-Mono/JetBrainsMono-Regular.woff2",
  display: "swap",
  variable: "--font-jetbrains",
});

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`relative min-h-screen ${JetBrainsMono.variable} ${inter.variable} font-sans`}
    >
      <ThemeSwitcher />
      <Component {...pageProps} />
    </main>
  );
}
