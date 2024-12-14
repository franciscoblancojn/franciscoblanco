import Head from "next/head";

import Banner from "@/components/banner";
import Container from "@/components/container";
import Col from "@/components/col";
import Row from "@/components/row";
import Title from "@/components/title";
import PorcentajeCircular from "@/components/porcentajeCircular";
import H from "@/components/h";
import TextList from "@/components/textList";
import RS from "@/components/rs";
import PorcentajeLinear from "@/components/procentajeLinear";
import Footer from "@/components/footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Francisco Blanco</title>
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
            <Col col={6} className="col-sm-7">
              <h1>Francisco Blanco</h1>
              <h2>FullStack Developer</h2>
              <div>
                <Row>
                  <Col col={6} className="col-xl-12">
                    <RS
                      className="email"
                      href="mailto:blancofrancisco34@gmail.com"
                      icon="fas fa-envelope"
                      text="blancofrancisco34@gmail.com"
                    />
                  </Col>
                  <Col col={6} className="col-xl-12">
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
            <Col col={6} className="col-sm-5">
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
      <Container className="content">
        <Row>
          <Col
            col={8}
            className="col-xl-6 col-lg-12"
            style={{ paddingTop: "50px" }}
          >
            <Title>Specialties</Title>
            <Container>
              <Row>
                <PorcentajeCircular p={90}>NodeJs</PorcentajeCircular>
                <PorcentajeCircular p={85}>NextJs</PorcentajeCircular>
                <PorcentajeCircular p={85}>React</PorcentajeCircular>
                <PorcentajeCircular p={96}>Wordpress</PorcentajeCircular>
              </Row>
            </Container>
            <H h="40px" />
            <Title>Projects</Title>
            <TextList
              title="Fenextjs"
              list={[
                <p>
                  An innovative library designed to revolutionize your
                  development experience with Next.js. Our mission is to
                  simplify your work, saving you valuable time and energy on
                  every project.
                </p>,
                <a href="https://fenextjs-doc.vercel.app/" target="_blank">
                  https://fenextjs-doc.vercel.app/
                </a>,
              ]}
            />
            <TextList
              title="Xell"
              list={[
                <p>
                  CRM, Sales, Warehousing, Products, POS, Cash Registers — all
                  in one place. A simple, intuitive, and robust platform.
                </p>,
                <a href="https://xell.shop/es/" target="_blank">
                  https://xell.shop
                </a>,
              ]}
            />
            <Title>Work Experience</Title>
            <TextList
              title="Web Developer, Byte4bit"
              date="03/2020 - 12/2024"
              list={[
                "Development of web pages in NextJs",
                "API development with NodeJs",
                "Database management with MySQL",
                "Database management with MongoDB",
                "Website development in Wordpress",
                "Plugin development for Wordpress",
                "Development of the Elios App",
                "Mobile app development with Flutter",
              ]}
            />
            <TextList
              title="Web Developer, Opperweb"
              date="09/2018 - 02/2020"
              list={[
                "Website development in Wordpress",
                "Plugin development for Wordpress",
              ]}
            />
          </Col>
          <Col
            col={4}
            className="aside col-xl-6 col-lg-12"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <Title>Professional Profile</Title>
            <p>
              I am a <strong>Web Developer</strong> with over 5 years of
              experience. I began studying Systems Engineering at the National
              Experimental University of Táchira (UNET). Since then, this field
              has become my true passion.
            </p>
            <p>
              I started my career working with WordPress and eventually
              specialized in JavaScript, which is now my favorite programming
              language. I love its versatility, as it allows for both frontend
              and backend development, enabling the creation of complete
              applications.
            </p>
            <p>
              I am always eager to learn and adopt new technologies. I have
              explored <strong>Mobile Development</strong> and the creation of{" "}
              <strong>Desktop Applications</strong>, though{" "}
              <strong>Web Development</strong> remains my favorite.
            </p>
            <p>
              Additionally, I enjoy contributing to the community by creating
              libraries on npm. My most notable project is{" "}
              <strong>
                <a href="https://www.npmjs.com/package/fenextjs">Fenextjs</a>
              </strong>
              , a library designed to simplify web development with Next.js.
            </p>

            <H h="30px" />
            <div>
              <RS
                className="email"
                href="mailto:blancofrancisco34@gmail.com"
                icon="far fa-envelope"
                text="blancofrancisco34@gmail.com"
              />
              <RS
                className="whatsapp"
                href="https://api.whatsapp.com/send?phone=573103557200"
                icon="fab fa-whatsapp"
                text="+57 310 355 7200"
              />
              <RS
                className="github"
                href="https://github.com/franciscoblancojn"
                icon="fab fa-github"
                text="franciscoblancojn"
              />
              <RS
                className="gitlab"
                href="https://gitlab.com/franciscoblancojn"
                icon="fab fa-gitlab"
                text="franciscoblancojn"
              />
              <RS
                className="instagram"
                href="https://www.instagram.com/franciscoblancojn/"
                icon="fab fa-instagram"
                text="franciscoblancojn"
              />
              <RS
                className="npm"
                href="https://www.npmjs.com/~franciscoblancojn/"
                icon="fab fa-npm"
                text="franciscoblancojn"
              />
              <RS
                className="linkedin"
                href="https://www.linkedin.com/in/francisco-blanco-ab1b91186/"
                icon="fab fa-linkedin-in"
                text="Francisco Blanco"
              />
            </div>
            <H h="30px" />
            <Title>Tech Competencies</Title>
            <PorcentajeLinear p={85}>Nextjs</PorcentajeLinear>
            <PorcentajeLinear p={85}>React</PorcentajeLinear>
            <PorcentajeLinear p={100}>Git</PorcentajeLinear>
            <PorcentajeLinear p={95}>JS</PorcentajeLinear>
            <PorcentajeLinear p={90}>Sass</PorcentajeLinear>
            <PorcentajeLinear p={85}>PHP</PorcentajeLinear>
            <PorcentajeLinear p={85}>Linux</PorcentajeLinear>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
