import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FAF5EF" />
        <meta
          name="description"
          content="Persian Salon — Camp, Pune's trusted destination for hair styling, skin & spa treatments, bridal makeup, and men's grooming since 2009."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
