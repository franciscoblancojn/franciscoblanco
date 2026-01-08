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
import { DataProyects } from "data/proyects";

const index = () => {
  return (
    <>
      <Container className="content">
        <Row>
          <Col col={8} className="col-xl-12 col-lg-12">
            <Row>
              <Col col={8} className="col-lg-6 col-md-12 no-breack-print">
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
              <Col col={4} className="col-lg-6 col-md-12 no-breack-print">
                <div>
                  <H h="80px" className="md-none" />
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
            {
              DataProyects.map((proyecto) => (
                <TextList
                  key={proyecto.title}
                  title={proyecto.title}
                  img={proyecto.img}
                  url={`/proyectos-mas-importantes/${proyecto.title.trim().toLowerCase().replace(/\s+/g, "-")}`}
                  list={proyecto.short}
                />
              ))
            }
            <div className="print-force-break"></div>
          </Col>
          <Col col={4} className="aside col-xl-12 col-lg-12 ">
            <div className="print-2-col">
              <div>
                <Title>Competencia Tic</Title>
                <PorcentajeLinear p={85}>Nextjs</PorcentajeLinear>
                <PorcentajeLinear p={85}>React</PorcentajeLinear>
                <PorcentajeLinear p={95}>Git</PorcentajeLinear>
                <PorcentajeLinear p={95}>JS</PorcentajeLinear>
                <PorcentajeLinear p={90}>Sass</PorcentajeLinear>
                <PorcentajeLinear p={85}>PHP</PorcentajeLinear>
                <PorcentajeLinear p={75}>Laravel</PorcentajeLinear>
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
              title="Desarrollador Web, Aveonline"
              date="03/2025 - Actualidad"
              list={[
                "Desarrollo de Paginas Web en Nextjs",
                "Desarrollo de Api con Nodejs",
                "Desarrollo de Api con Laravel",
                "Desarrollo de Plugins para Wordpress",
              ]}
            />
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
