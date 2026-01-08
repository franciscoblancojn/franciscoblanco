import Head from "next/head";
import Banner from "@/components/banner";
import Container from "@/components/container";
import Col from "@/components/col";
import Row from "@/components/row";
import RS from "@/components/rs";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Blanco</title>
        <meta property="og:title" content="Francisco Blanco" />
        <meta
          property="og:description"
          content="Soy Desarrollador Web con más de 5 años de experiencia. Especializado en Nextjs, Javascript y CSS, tambien soy el creador de Fenextjs"
        />
        <meta property="og:image" content="/favicon.png" />
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
      <Banner>
        <Container>
          <Row className="alignCenter">
            <Col col={6} className="col-sm-7 no-breack-print">
              <h1>Francisco Blanco</h1>
              <h2>Desarrollador FullStack</h2>
              <div>
                <Row>
                  <Col col={6} className="col-xl-12 no-breack-print">
                    <RS
                      className="email"
                      href="mailto:blancofrancisco34@gmail.com"
                      icon="fas fa-envelope"
                      text="blancofrancisco34@gmail.com"
                    />
                  </Col>
                  <Col col={6} className="col-xl-12 no-breack-print">
                    <RS
                      className="whatsapp"
                      href="https://api.whatsapp.com/send?phone=573103557200"
                      icon="fab fa-whatsapp"
                      text="+57 310 355 7200"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col col={6} className="col-sm-5 no-breack-print">
              <div style={{ textAlign: "center" }}>
                <img
                  src="/img/I_am.jpg"
                  alt="Francisco Blanco"
                  className="img img-Iam"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Banner className="banner-scroll">
        <Container>
          <Row className="alignCenter">
            <Col col={4} className="col-sm-9 no-breack-print">
              <h2>Francisco Blanco</h2>
            </Col>
            <Col col={4} className="sm-none no-breack-print">
              <RS
                className="email"
                href="mailto:blancofrancisco34@gmail.com"
                icon="fas fa-envelope"
                text="blancofrancisco34@gmail.com"
              />
            </Col>
            <Col col={4} className="col-sm-3 no-breack-print">
              <div style={{ textAlign: "center",display:"flex",justifyContent:"center" }}>
                <img
                  src="/img/I_am.jpg"
                  alt="Francisco Blanco"
                  className="img img-Iam-small"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
