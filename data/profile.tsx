import React from "react";

export interface SocialLink {
  className: string;
  href: string;
  icon: string;
  text: string;
}

export const profileBio: React.JSX.Element[] = [
  <>
    Soy <strong>Desarrollador Web</strong> con más de{" "}
    <strong>5 años</strong> de experiencia. Comencé mis estudios
    en Ingeniería de Sistemas en la Universidad Nacional
    Experimental del Táchira (UNET). Desde entonces, esta área se
    ha convertido en mi verdadera pasión.
  </>,
  <>
    Inicié mi carrera trabajando con <strong>WordPress</strong>, y
    con el tiempo me especialicé en <strong>JavaScript</strong>,
    que hoy es mi lenguaje favorito. Me entusiasma su
    versatilidad, ya que permite trabajar tanto en el Frontend
    como en el Backend, facilitando la creación de aplicaciones
    completas.
  </>,
  <>
    Estoy siempre en busca de aprender y adoptar nuevas
    tecnologías. He explorado el <strong>Desarrollo Móvil</strong>{" "}
    y la creación de <strong>Aplicaciones de Escritorio</strong>,
    aunque el <strong>Desarrollo Web</strong> sigue siendo mi
    preferido.
  </>,
  <>
    Además, disfruto contribuir a la comunidad creando librerías
    en npm. Mi proyecto más destacado es{" "}
    <strong>
      <a href="https://www.npmjs.com/package/fenextjs">
        Fenextjs
      </a>
    </strong>
    , una librería para facilitar el desarrollo de sitios web con
    Nextjs.
  </>,
];

export const socialLinks: SocialLink[] = [
  {
    className: "email",
    href: "mailto:blancofrancisco34@gmail.com",
    icon: "far fa-envelope",
    text: "blancofrancisco34@gmail.com",
  },
  {
    className: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=573103557200",
    icon: "fab fa-whatsapp",
    text: "+57 310 355 7200",
  },
  {
    className: "github",
    href: "https://github.com/franciscoblancojn",
    icon: "fab fa-github",
    text: "franciscoblancojn",
  },
  {
    className: "instagram",
    href: "https://www.instagram.com/franciscoblancojn/",
    icon: "fab fa-instagram",
    text: "franciscoblancojn",
  },
  {
    className: "npm",
    href: "https://www.npmjs.com/~franciscoblancojn/",
    icon: "fab fa-npm",
    text: "franciscoblancojn",
  },
  {
    className: "linkedin",
    href: "https://www.linkedin.com/in/francisco-blanco-ab1b91186/",
    icon: "fab fa-linkedin-in",
    text: "Francisco Blanco",
  },
];
