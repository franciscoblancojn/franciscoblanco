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
            <Col col={6} className="col-sm-7 no-breack-print">
              <h1>Francisco Blano</h1>
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
      <Container className="content">
        <Row>
          <Col col={8} className="col-xl-6 col-lg-12">
            <Row>
              <Col col={8} className=" no-breack-print">
                <Title>Perfil Profesional</Title>
                <p>
                  Soy <strong>Desarrollador Web</strong> con más de{" "}
                  <strong>5 años</strong> de experiencia. Comencé mis estudios
                  en Ingeniería de Sistemas en la Universidad Nacional
                  Experimental del Táchira (UNET). Desde entonces, esta área se
                  ha convertido en mi verdadera pasión.
                </p>
                <p>
                  Inicié mi carrera trabajando con <strong>WordPress</strong>, y
                  con el tiempo me especialicé en <strong>JavaScript</strong>,
                  que hoy es mi lenguaje favorito. Me entusiasma su
                  versatilidad, ya que permite trabajar tanto en el Frontend
                  como en el Backend, facilitando la creación de aplicaciones
                  completas.
                </p>
                <p>
                  Estoy siempre en busca de aprender y adoptar nuevas
                  tecnologías. He explorado el <strong>Desarrollo Móvil</strong>{" "}
                  y la creación de <strong>Aplicaciones de Escritorio</strong>,
                  aunque el <strong>Desarrollo Web</strong> sigue siendo mi
                  preferido.
                </p>
                <p>
                  Además, disfruto contribuir a la comunidad creando librerías
                  en npm. Mi proyecto más destacado es{" "}
                  <strong>
                    <a href="https://www.npmjs.com/package/fenextjs">
                      Fenextjs
                    </a>
                  </strong>
                  , una librería para facilitar el desarrollo de sitios web con
                  Nextjs.
                </p>
              </Col>
              <Col col={4} className=" no-breack-print">
                <div>
                  <H h="80px" className="" />
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
              </Col>
            </Row>
            {/* <H h="40px" /> */}
            <Title>Proyectos mas importantes</Title>
            <TextList
              title="Fenextjs"
              list={[
                <i>
                  Una librería innovadora diseñada para optimizar y simplificar
                  el desarrollo con Next.js. Nuestra misión es ahorrar tiempo y
                  esfuerzo en tus proyectos mientras mantenemos la calidad y
                  escalabilidad.
                </i>,
                <>
                  Desde 2020, he estado desarrollando <b>Fenextjs</b>. Durante
                  mi experiencia trabajando en proyectos basados en Next.js,
                  identifiqué la oportunidad de estandarizar numerosos procesos,
                  funciones y componentes. Esto me llevó a crear una librería
                  que incluye herramientas clave para agilizar el desarrollo
                  web.
                  <br />
                  <b>Fenextjs</b> proporciona una amplia gama de{" "}
                  <b>Componentes</b>, <b>Hooks</b>, <b>Funciones</b>, y{" "}
                  <b>Interfaces</b>, entre otros recursos esenciales.
                </>,
                <>
                  Algunas de las funcionalidades más destacadas y utilizadas en{" "}
                  <b>Fenextjs</b> incluyen:
                  <ul>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/components/button"
                        target="_blank"
                      >
                        Button
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/components/input/text"
                        target="_blank"
                      >
                        InputText
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/components/input/select"
                        target="_blank"
                      >
                        InputSelect
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/hook/usedata"
                        target="_blank"
                      >
                        useData
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/hook/useaction"
                        target="_blank"
                      >
                        useAction
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fenextjs-doc.vercel.app/hook/uselocalstorage"
                        target="_blank"
                      >
                        useLocalStorage
                      </a>
                    </li>
                  </ul>
                </>,
                <>
                  La documentación completa de <b>Fenextjs</b> está disponible
                  en:{" "}
                  <a href="https://fenextjs-doc.vercel.app/" target="_blank">
                    https://fenextjs-doc.vercel.app/
                  </a>
                </>,
              ]}
            />

            <TextList
              title="Xell"
              list={[
                <i>
                  CRM, Ventas, Bodegas, Productos, POS, Cajas... todo en una
                  sola plataforma. Xell combina sencillez, intuición y robustez
                  en una solución integral para negocios.
                </i>,
                <>
                  Xell es una plataforma que desarrollé durante 3 años, diseñada
                  para gestionar negocios de manera eficiente y clara. Esta
                  solución permite manejar:
                  <div style={{ height: ".25rem" }}></div>
                  <b>Productos</b>, <b>Bodegas</b>, <b>Compras</b>,{" "}
                  <b>Ventas</b>, <b>Clientes</b>, <b>Proveedores</b> y{" "}
                  <b>Usuarios</b> con distintos roles.
                  <div style={{ height: ".25rem" }}></div>
                  Me encargué de desarrollar una{" "}
                  <b>interfaz de usuario intuitiva, rápida y amigable</b>,
                  diseñada para validar <b>roles y permisos</b> mientras
                  mantiene una experiencia de navegación fluida, eliminando la
                  necesidad de recargar páginas y optimizando el flujo de
                  trabajo.
                  <div style={{ height: ".25rem" }}></div>
                  Además, diseñé y desarrollé distintas <b>librerías</b> para
                  Xell, que permitieron modularizar este gran proyecto en
                  componentes y servicios reutilizables, lo que aceleró su
                  desarrollo y mejoró su escalabilidad.
                </>,
                <>
                  Algunos de los módulos y servicios destacados que desarrollé
                  incluyen:
                  <ul>
                    <li>
                      <b>xell-adapters</b>: Adaptadores versátiles para conectar
                      múltiples servicios.
                    </li>
                    <li>
                      <b>xell-fenextjs</b>: Herramientas avanzadas basadas en
                      Fenextjs.
                    </li>
                    <li>
                      <b>xell-firebase</b>: Integración con Firebase para
                      storage y base de datos.
                    </li>
                    <li>
                      <b>xell-languages</b>: Soporte multilenguaje para una
                      experiencia global.
                    </li>
                    <li>
                      <b>xell-svg</b>: Librería optimizada para manejo de
                      gráficos SVG.
                    </li>
                    <li>
                      <b>xell-email-template</b>: Plantillas de correo
                      electrónico dinámicas y personalizables.
                    </li>
                  </ul>
                </>,
                <>
                  Puedes visitar la página oficial de <b>Xell</b> aquí:{" "}
                  <a href="https://xell.shop/es/" target="_blank">
                    https://xell.shop
                  </a>
                </>,
              ]}
            />
          </Col>
          <Col col={4} className="aside col-xl-6 col-lg-12 print-force-break">
            <div className="print-2-col">
              <div>
                <Title>Competencia Tic</Title>
                <PorcentajeLinear p={85}>Nextjs</PorcentajeLinear>
                <PorcentajeLinear p={85}>React</PorcentajeLinear>
                <PorcentajeLinear p={100}>Git</PorcentajeLinear>
                <PorcentajeLinear p={95}>JS</PorcentajeLinear>
                <PorcentajeLinear p={90}>Sass</PorcentajeLinear>
                <PorcentajeLinear p={85}>PHP</PorcentajeLinear>
              </div>
              <H h="30px" className="no-print" />
              <div>
                <Title>Especialidades</Title>
                <Container>
                  <Row>
                    <PorcentajeCircular p={90}>NodeJs</PorcentajeCircular>
                    <PorcentajeCircular p={85}>NextJs</PorcentajeCircular>
                    <PorcentajeCircular p={85}>React</PorcentajeCircular>
                    <PorcentajeCircular p={96}>Wordpress</PorcentajeCircular>
                  </Row>
                </Container>
              </div>
            </div>
            <Title>Experiencia Laboral</Title>
            <TextList
              title="Desarrollador Web, Byte4bit"
              date="03/2020 - 12/2024"
              list={[
                "Desarrollo de Xell",
                "Desarrollo de Paginas Web en Nextjs",
                "Desarrollo de Api con Nodejs",
                "Desarrollo de Paginas Web en Wordpress",
                "Desarrollo de Plugins para Wordpress",
              ]}
            />
            <TextList
              title="Desarrollador Web, Opperweb"
              date="09/2018 - 02/2020"
              list={[
                "Desarrollo de Paginas Web en Wordpress",
                "Desarrollo de Plugins para Wordpress",
              ]}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
