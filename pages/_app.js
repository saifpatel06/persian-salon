import "@/styles/globals.css";
import { Bebas_Neue, Oswald } from "next/font/google";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const body = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${display.variable} ${body.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
