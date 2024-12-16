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
      <Banner>
        <Container>
          <Row className="alignCenter">
            <Col col={6} className="col-sm-7 no-breack-print">
              <h1>Francisco Blanco</h1>
              <h2>FullStack Developer</h2>
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
                <Title>Professional Profile</Title>
                <p>
                  I am a <strong>Web Developer</strong> with more than{" "}
                  <strong>5 years</strong> of experience. I began my studies in
                  Systems Engineering at the National Experimental University of
                  Táchira (UNET). Since then, this field has become my true
                  passion.
                </p>
                <p>
                  I started my career working with <strong>WordPress</strong>,
                  and over time, I specialized in <strong>JavaScript</strong>,
                  which today is my favorite language. I’m enthusiastic about
                  its versatility, as it allows working on both Frontend and
                  Backend, enabling the creation of complete applications.
                </p>
                <p>
                  I’m always seeking to learn and adopt new technologies. I’ve
                  explored <strong>Mobile Development</strong> and creating{" "}
                  <strong>Desktop Applications</strong>, though{" "}
                  <strong>Web Development</strong> remains my favorite.
                </p>
                <p>
                  Additionally, I enjoy contributing to the community by
                  creating libraries on npm. My most notable project is{" "}
                  <strong>
                    <a href="https://www.npmjs.com/package/fenextjs">
                      Fenextjs
                    </a>
                  </strong>
                  , a library designed to simplify web development with Next.js.
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
            <Title>Key Projects</Title>
            <TextList
              title="Fenextjs"
              list={[
                <i>
                  An innovative library designed to optimize and simplify
                  development with Next.js. Our mission is to save time and
                  effort on your projects while maintaining quality and
                  scalability.
                </i>,
                <>
                  Since 2020, I have been developing <b>Fenextjs</b>. During my
                  experience working on Next.js-based projects, I identified the
                  opportunity to standardize numerous processes, functions, and
                  components. This led me to create a library that includes
                  essential tools to streamline web development.
                  <br />
                  <b>Fenextjs</b> provides a wide range of <b>Components</b>,{" "}
                  <b>Hooks</b>, <b>Functions</b>, and <b>Interfaces</b>, among
                  other key resources.
                </>,
                <>
                  Some of the most prominent and widely used features in{" "}
                  <b>Fenextjs</b> include:
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
                  The complete documentation for <b>Fenextjs</b> is available
                  at:{" "}
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
                  CRM, Sales, Warehouses, Products, POS, Cash Registers... all
                  in one platform. Xell combines simplicity, intuitiveness, and
                  robustness in an all-in-one business solution.
                </i>,
                <>
                  Xell is a platform I developed over 3 years, designed to
                  efficiently and clearly manage businesses. This solution
                  enables the management of:
                  <div style={{ height: ".25rem" }}></div>
                  <b>Products</b>, <b>Warehouses</b>, <b>Purchases</b>,{" "}
                  <b>Sales</b>, <b>Clients</b>, <b>Suppliers</b>, and{" "}
                  <b>Users</b> with different roles.
                  <div style={{ height: ".25rem" }}></div>I took care of
                  developing an{" "}
                  <b>intuitive, fast, and user-friendly interface</b>, designed
                  to validate <b>roles and permissions</b> while maintaining a
                  seamless navigation experience, eliminating the need to reload
                  pages and optimizing workflow.
                  <div style={{ height: ".25rem" }}></div>
                  Additionally, I designed and developed various{" "}
                  <b>libraries</b> for Xell, allowing this large project to be
                  modularized into reusable components and services, which
                  accelerated its development and improved scalability.
                </>,
                <>
                  Some of the key modules and services I developed include:
                  <ul>
                    <li>
                      <b>xell-adapters</b>: Versatile adapters to connect
                      multiple services.
                    </li>
                    <li>
                      <b>xell-fenextjs</b>: Advanced tools based on Fenextjs.
                    </li>
                    <li>
                      <b>xell-firebase</b>: Integration with Firebase for
                      storage and database.
                    </li>
                    <li>
                      <b>xell-languages</b>: Multilanguage support for a global
                      experience.
                    </li>
                    <li>
                      <b>xell-svg</b>: Optimized library for handling SVG
                      graphics.
                    </li>
                    <li>
                      <b>xell-email-template</b>: Dynamic and customizable email
                      templates.
                    </li>
                  </ul>
                </>,
                <>
                  You can visit the official <b>Xell</b> page here:{" "}
                  <a href="https://xell.shop/en/" target="_blank">
                    https://xell.shop
                  </a>
                </>,
              ]}
            />
          </Col>
          <Col col={4} className="aside col-xl-12 col-lg-12 print-force-break">
            <div className="print-2-col">
              <div>
                <Title>Tech Competence</Title>
                <PorcentajeLinear p={85}>Nextjs</PorcentajeLinear>
                <PorcentajeLinear p={85}>React</PorcentajeLinear>
                <PorcentajeLinear p={100}>Git</PorcentajeLinear>
                <PorcentajeLinear p={95}>JS</PorcentajeLinear>
                <PorcentajeLinear p={90}>Sass</PorcentajeLinear>
                <PorcentajeLinear p={85}>PHP</PorcentajeLinear>
              </div>
              <H h="30px" className="no-print" />
              <div>
                <Title>Specialties</Title>
                <Container>
                  <Row>
                    <PorcentajeCircular p={90}>NodeJs</PorcentajeCircular>
                    <PorcentajeCircular p={85}>NextJs</PorcentajeCircular>
                    <PorcentajeCircular p={85}>React</PorcentajeCircular>
                    <PorcentajeCircular p={96}>WordPress</PorcentajeCircular>
                  </Row>
                </Container>
              </div>
            </div>
            <Title>Work Experience</Title>
            <TextList
              title="Web Developer, Byte4bit"
              date="03/2020 - 12/2024"
              list={[
                "Development of Xell",
                "Development of Web Pages with Nextjs",
                "API Development with Nodejs",
                "Development of Web Pages with WordPress",
                "Development of Plugins for WordPress",
              ]}
            />
            <TextList
              title="Web Developer, Opperweb"
              date="09/2018 - 02/2020"
              list={[
                "Development of Web Pages with WordPress",
                "Development of Plugins for WordPress",
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
