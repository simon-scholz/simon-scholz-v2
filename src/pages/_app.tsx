import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      <ThemeSwitcher />
      <Component {...pageProps} />
    </div>
  );
}
