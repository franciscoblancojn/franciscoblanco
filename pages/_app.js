import Head from "next/head";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Blanco</title>
        <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        />
      </Head>
      <meta property="og:title" content="Francisco Blanco" />
      <meta
        property="og:description"
        content="Soy Desarrollador Web con más de 5 años de experiencia. Especializado en Nextjs, Javascript y CSS, tambien soy el creador de Fenextjs"
      />
      <meta property="og:image" content="/favicon.png" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
