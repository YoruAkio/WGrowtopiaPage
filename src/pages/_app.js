import "@/styles/globals.css";
import localFont from 'next/font/local';

const fungisFont = localFont({ src: './fonts/FungisRegular.woff2' })
const boldenBold = localFont({ src: './fonts/BoldenVan.woff', variable: '--font-bolden-bold' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fungisFont.className} ${boldenBold.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
