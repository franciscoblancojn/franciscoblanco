import Container from "@/components/container";
import Col from "@/components/col";
import Row from "@/components/row";
import Title from "@/components/title";
import TextList from "@/components/textList";
import Footer from "@/components/footer";

const index = () => {
  return (
    <>
      <Container className="content">
        <Row>
          <Col col={12} className="col-xl-12 col-lg-12">
            <Title back={true}>Proyectos mas importantes</Title>
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
            <div className="print-force-break"></div>,
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
            <div className="print-force-break"></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
