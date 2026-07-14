import React from "react";
import type { NextPage } from "next";
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
import { profileBio, socialLinks } from "data/profile";
import { techCompetence, specialties } from "data/skills";
import { workExperience } from "data/experience";

const index: NextPage = () => {
  return (
    <>
      <Container className="content">
        <Row>
          <Col col={8} className="col-xl-12 col-lg-12">
            <Row>
              <Col col={8} className="col-lg-6 col-md-12 no-breack-print">
                <Title>Perfil Profesional</Title>
                {profileBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </Col>
              <Col col={4} className="col-lg-6 col-md-12 no-breack-print">
                <div>
                  <H h="80px" className="md-none" />
                  {socialLinks.map((link) => (
                    <RS
                      key={link.className}
                      className={link.className}
                      href={link.href}
                      icon={link.icon}
                      text={link.text}
                    />
                  ))}
                </div>
              </Col>
            </Row>
            <Title>Proyectos mas importantes</Title>
            {
              DataProyects.map((proyecto) => (
                <TextList
                  key={proyecto.title}
                  title={proyecto.title}
                  img={proyecto.img}
                  imgReplaceTitle={proyecto.imgReplaceTitle}
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
                {techCompetence.map((skill) => (
                  <PorcentajeLinear key={skill.name} p={skill.p}>
                    {skill.name}
                  </PorcentajeLinear>
                ))}
              </div>
              <H h="30px" className="no-print" />
              <div>
                <Title>Especialidades</Title>
                <Container>
                  <Row>
                    {specialties.map((skill) => (
                      <PorcentajeCircular key={skill.name} p={skill.p}>
                        {skill.name}
                      </PorcentajeCircular>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
            <Title>Experiencia Laboral</Title>
            {workExperience.map((exp) => (
              <TextList
                key={exp.title}
                title={exp.title}
                date={exp.date}
                list={exp.tasks}
              />
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
