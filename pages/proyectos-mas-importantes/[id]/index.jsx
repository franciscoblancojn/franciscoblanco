import Container from "@/components/container";
import Col from "@/components/col";
import Row from "@/components/row";
import TextList from "@/components/textList";
import Footer from "@/components/footer";
import Back from "@/components/back";
import { DataProyects } from "data/proyects";

const index = ({ id }) => {
  const proyect = DataProyects.find(
    (p) => p.title.toLowerCase() === `${id}`.toLowerCase(),
  );
  return (
    <>
      <Container className="content">
        <Row>
          <Col col={12} className="col-xl-12 col-lg-12">
            <Back has={proyect.title.trim().toLowerCase().replace(/\s+/g, "-")} />
            {proyect && (
              <TextList
                title={proyect.title}
                img={proyect.img}
                single={true}
                imgReplaceTitle={proyect?.imgReplaceTitle}
                list={[...proyect.short, ...proyect.description]}
              />
            )}
            <div className="print-force-break"></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export const getStaticPaths = async (context) => {
  const paths = DataProyects.map((project) => ({
    params: {
      id: project.title.toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
};

export default index;
