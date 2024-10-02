import Head from 'next/head'

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
import Referencia from "@/components/referencia";

const index = () => {
  return (
    <>
      <Head>
        <title>Francisco Blanco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"/><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
      </Head>
      <Banner>
        <Container>
          <Row className="alignCenter">
            <Col col={6} className="col-sm-7">
              <h1>Francisco Blano</h1>
              <h2>Desarrollador FullStack</h2>
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
              <div style={{textAlign:"center"}}>
                <img src="/img/I_am.jpg" alt="Francisco Blanco" className="img img-Iam" />
              </div>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Container className="content">
        <Row>
          <Col col={8} className="col-xl-6 col-lg-12" style={{paddingTop:"50px"}}>
            <Title>
              Especialidades
            </Title>
            <Container>
              <Row>
                <PorcentajeCircular p={90}>NodeJs</PorcentajeCircular>
                <PorcentajeCircular p={85}>NextJs</PorcentajeCircular>
                <PorcentajeCircular p={85}>React</PorcentajeCircular>
                <PorcentajeCircular p={96}>Wordpress</PorcentajeCircular>
                {/* <PorcentajeCircular p={86}>MongoDB <br/> MySQL</PorcentajeCircular> */}
              </Row>
            </Container>
            <H h="40px"/>
            <Title>
              Desarrollos
            </Title>
            <TextList
              title="Npm Packages"
              list={[
                <a href="https://www.npmjs.com/package/fenextjs" target="_blank">fenextjs</a>,
                <a href="https://www.npmjs.com/package/fenextjs-component" target="_blank">fenextjs-component</a>,
                <a href="https://www.npmjs.com/package/fenextjs-hook" target="_blank">fenextjs-hook</a>,
                <a href="https://www.npmjs.com/package/fenextjs-functions" target="_blank">fenextjs-functions</a>,
                <a href="https://www.npmjs.com/package/fenextjs-validator" target="_blank">fenextjs-validator</a>,
                <a href="https://www.npmjs.com/package/fenextjs-firebase" target="_blank">fenextjs-firebase</a>,
                <a href="https://fenextjs-doc.vercel.app/" target="_blank">fenextjs-doc</a>,
                <a href="https://www.npmjs.com/package/uselocalstoragenextjs" target="_blank">uselocalstoragenextjs</a>,
                <a href="https://www.npmjs.com/package/country-state-city-nextjs" target="_blank">country-state-city-nextjs</a>,
              ]}
            />
            {/* <TextList
              title="Comunidad"
              list={[
                <a href="https://gitlab.com/franciscoblancojn/templatenextjs" target="_blank">Templatenextjs</a>,
              ]}
            /> */}
            <TextList
              title="Mooveri"
              list={[
                <a href="https://mooveri.com/" target="_blank">Mooveri Wordpress</a>,
                <a href="https://app.mooveri.com/login" target="_blank">Mooveri NextJs</a>,
              ]}
            />
            <TextList
              title="Smarfit"
              list={[
                <a href="https://gitlab.com/franciscoblancojn/payment-niubiz" target="_blank">Payment Niubiz</a>,
                <a href="https://gitlab.com/franciscoblancojn/facturacion-smarfit" target="_blank">Facturacion Smarfit</a>,
                <a href="https://gitlab.com/franciscoblancojn/analytics-smarfit" target="_blank">Analytics Smarfit</a>,
              ]}
            />
            <TextList
              title="Onetradeaday"
              list={[
                <a href="https://gitlab.com/onetradeaday" target="_blank">Onetradeaday Repositorio</a>,
                <a href="https://onetradeaday.vercel.app/" target="_blank">Onetradeaday Web</a>,
                <a href="https://onetradeadaybackoffice.vercel.app/" target="_blank">Onetradeaday Backoffice</a>,
                <a href="https://gitlab.com/onetradeaday/api" target="_blank">Onetradeaday Api Repositorio</a>,
                <a href="https://onetradeaday.onrender.com/" target="_blank">Onetradeaday Api</a>,
              ]}
            />
            <TextList
              title="Takeprofit"
              list={[
                <a href="https://gitlab.com/franciscoblancojn/takeprofit" target="_blank">Takeprofit Repositorio</a>,
                <a href="https://takeprofit.vercel.app/" target="_blank">Takeprofit Web</a>,
                <a href="https://gitlab.com/franciscoblancojn/takeprofit-backoffice" target="_blank">Takeprofit Backoffice Repositorio</a>,
                <a href="https://takeprofi-backoffice.vercel.app/" target="_blank">Takeprofit Backoffice Web</a>,
                <a href="https://gitlab.com/franciscoblancojn/takeprofit-api" target="_blank">Takeprofit Api Repositorio</a>,
                <a href="https://takeprofi-api.herokuapp.com/" target="_blank">Takeprofit Api</a>,
              ]}
            />
            {/* <TextList
              title="Marketinghacking"
              list={[
                <a href="https://marketinghacking.academy/" target="_blank">Marketinghacking Web</a>,
              ]}
            /> */}
            <TextList
              title="Aveonline"
              list={[
                <a href="https://gitlab.com/franciscoblancojn/aveonline" target="_blank">Aveonline Plugin Wordpress</a>,
                <a href="https://gitlab.com/franciscoblancojn/dropshippingaveonline" target="_blank">Aveonline Drop Shipping</a>,
              ]}
            />
            {/* <TextList
              title="Elios"
              list={[
                <a href="https://gitlab.com/eliosapp/page-next" target="_blank">Elios Repositorio</a>,
                <a href="https://app.eliosanalytics.com/" target="_blank">Elios Web</a>,
                <a href="https://gitlab.com/eliosapp/plugin-wordpress" target="_blank">Elios Plugin Wordpress</a>,
              ]}
            /> */}
            <Title>
              Experiencia Laboral
            </Title>
            <TextList
              title="Desarrollador Web, Byte4bit"
              date="2020 - actualidad"
              list={[
                "Desarrollo de Paginas Web en NextJs",
                "Desarrollo de Api con NodeJs",
                "Manejo de Base de Datos MySQL",
                "Manejo de Base de Datos MongoDB",
                "Desarrollo de Paginas Web en Wordpress",
                "Desarrollo de Plugins para Wordpress",
                "Desarrollo del App Elios",
                "Desarrollo de App Movil con Flutter",
              ]}
            />
            <TextList
              title="Desarrollador Web, Bizmerk"
              date="2020 - 2020"
              list={[
                "Desarrollo de Paginas Web en Wordpress",
                "Desarrollo de Plugins para Wordpress",
              ]}
            />
            <TextList
              title="Desarrollador Web, Opperweb"
              date="2018 - 2020"
              list={[
                "Desarrollo de Paginas Web en Wordpress",
                "Desarrollo de Plugins para Wordpress",
              ]}
            />
            <Title>Formacion Academica</Title>
            <TextList
              title="Cursos Online"
              list={[
                "NodeJs and Express",
                "ReactJs and NextJs",
                "MySql",
                "MongoDB",
                "Wordpress",
                "PHP",
                "Python",
                "React Native",
                "Firebase in React",
                "React Native and Expo",
                "Servidores Linux",
                "C#",
                "Prisma ORM",
              ]}
            />
            <TextList
              title="Cursos en Edteam"
              list={[
                "HTML desde 0",
                "CSS desde 0",
                "JS desde 0",
                "SASS",
              ]}
            />
            <TextList
              title="Educacion Universitaria en UNET"
              list={[
                "Ingenieria Informatica",
                "Conferencia de Angular",
                "Conferencia de Desarrollo Android",
                "Preparador en Estructura de Datos",
                "Preparador en Fundamentos de Logica Digital",
              ]}
            />
          </Col>
          <Col col={4} className="aside col-xl-6 col-lg-12" style={{paddingTop:"50px",paddingBottom:"50px"}}>
            <Title>Mi Perfil</Title>
            <p>
              Soy un <strong>Desarrollador Web</strong> con 5 año de experiencia, estudié un tiempo Ingenieria en Sistema en UNET, lo deje a un lado por una oportunidad de trabajo, era la primera vez que desarrollaba web, es muy apasionante.
            </p>
            <p>
              Inicie trabajando en Wordpress, luego me fui especializando en JS, es mi lenguaje preferido, me encanta el hecho que puede trabajar en Frontend y Backend al mismo tiempo con JS.
            </p>
            <p>
              Me gusta aprender nuevas tecnologías, he probado el <strong>Desarrollo Movil</strong>, y creación de <strong>Aplicaciones de Escritorio</strong>, pero el <strong>Desarrollo Web</strong> sigue siendo mi favorito.
            </p>
            <p>
              Tambien me gusta desarollar librerias de npm para la comunidad.
              Mi mas grande orgullo es{" "}
              <strong><a href="https://www.npmjs.com/package/fenextjs">Fenextjs</a></strong>,
              libreria para el desarrollo de paginas web en Nextjs.
            </p>
            <H h="30px"/>
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
                className="gitlab"
                href="https://gitlab.com/franciscoblancojn"
                icon="fab fa-gitlab"
                text="franciscoblancojn"
              />
              <RS
                className="github"
                href="https://github.com/franciscoblancojn"
                icon="fab fa-github"
                text="franciscoblancojn"
              />
              <RS
                className="npm"
                href="https://www.instagram.com/franciscoblanco_ters/"
                icon="fab fa-instagram"
                text="franciscoblanco_ters"
              />
              <RS
                className="instagram"
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
            <H h="30px"/>
            <Title>Competencia Tic</Title>
            <PorcentajeLinear p={85}>Linux</PorcentajeLinear>
            <PorcentajeLinear p={100}>Git</PorcentajeLinear>
            <PorcentajeLinear p={95}>JS</PorcentajeLinear>
            <PorcentajeLinear p={90}>Sass</PorcentajeLinear>
            <PorcentajeLinear p={85}>PHP</PorcentajeLinear>
            {/* <PorcentajeLinear p={80}>MongoDB</PorcentajeLinear> */}
            <PorcentajeLinear p={85}>React</PorcentajeLinear>
            <PorcentajeLinear p={85}>Nextjs</PorcentajeLinear>
            <H h="30px"/>
            <Title>Idiomas</Title>
            <PorcentajeLinear p={100}>Español</PorcentajeLinear>
            <PorcentajeLinear p={20}>Ingles</PorcentajeLinear>
            <H h="30px"/>
            <Title>Referencias</Title>
            <Referencia email="agudelocjuan@gmail.com">Juan Agudelo (Byte4bit)</Referencia>
            <Referencia email="santiago@bizmerk.com">Santiago Gomez (Bizmerk)</Referencia>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default index
