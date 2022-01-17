import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
      <div className="flex flex-col max-w-3xl mx-auto min-h-full px-4">
        <Header />
        <main id="main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
