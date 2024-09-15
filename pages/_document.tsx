import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // console.log("DOCUMENT -  PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index.follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* Search Engine Optimization - SEO */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and Sell properties anywhere anytime in South Korea. |" +
            "Russian: Koreani lyuboy joyida lyuboy ko'chmas mulk oldi sotdisi. |" +
            "대한민국 언제 어디서나 부동산을 사고 필 수 있씁니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
