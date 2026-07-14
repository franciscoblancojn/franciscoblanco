import React from "react";

export interface DataProyect {
  img: string;
  imgReplaceTitle?: boolean;
  title: string;
  short: (string | React.JSX.Element)[];
  description: (string | React.JSX.Element)[];
}

export const DataProyects: DataProyect[] = [
  {
    img: "/proyects/fenextjs.svg",
    imgReplaceTitle: true,
    title: "Fenextjs",
    short: [
      <i key="fenextjs-short-1">
        Una librería innovadora diseñada para optimizar y simplificar el
        desarrollo con React. Su objetivo es ahorrar tiempo y esfuerzo en tus
        proyectos mientras mantenemos la calidad y escalabilidad.
      </i>,
      <React.Fragment key="fenextjs-short-2">
        Desde 2020, he estado desarrollando <b>Fenextjs</b>. Durante mi
        experiencia trabajando en proyectos basados en React, identifiqué la
        oportunidad de estandarizar numerosos procesos, funciones y componentes.
        Esto me llevó a crear una librería que incluye herramientas clave para
        agilizar el desarrollo web.
        <br />
        <b>Fenextjs</b> proporciona una amplia gama de <b>Componentes</b>,{" "}
        <b>Hooks</b>, <b>Funciones</b>, y <b>Interfaces</b>, entre otros
        recursos esenciales.
      </React.Fragment>,
      <div key="fenextjs-short-3" className="print-force-break"></div>,
      <React.Fragment key="fenextjs-short-4">
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
      </React.Fragment>,
      <React.Fragment key="fenextjs-short-5">
        La documentación completa de <b>Fenextjs</b> está disponible en:{" "}
        <a href="https://fenextjs-doc.vercel.app/" target="_blank">
          https://fenextjs-doc.vercel.app/
        </a>
      </React.Fragment>,
    ],
    description: [
      <React.Fragment key="fenextjs-desc-1">
        <b>Fenextjs</b> nace como una solución real a problemas repetitivos en
        el desarrollo de aplicaciones React a gran escala. Tras años trabajando
        en proyectos complejos, detecté la necesidad de contar con una base
        sólida, reutilizable y bien estructurada que acelerara el desarrollo sin
        sacrificar calidad.
      </React.Fragment>,
      <React.Fragment key="fenextjs-desc-2">
        La librería está pensada para equipos y proyectos que buscan{" "}
        <b>consistencia, mantenibilidad y velocidad</b>. Fenextjs estandariza la
        forma de construir componentes, manejar estados, formularios, acciones y
        flujos de datos, reduciendo errores comunes y mejorando la experiencia
        del desarrollador.
      </React.Fragment>,
      <React.Fragment key="fenextjs-desc-3">
        Uno de los principales enfoques de Fenextjs es la <b>escalabilidad</b>.
        Cada componente y hook está diseñado para ser extensible, tipado y
        desacoplado, permitiendo que los proyectos crezcan sin volverse
        difíciles de mantener.
      </React.Fragment>,
      <React.Fragment key="fenextjs-desc-4">
        Actualmente Fenextjs es utilizado como base en proyectos personales y
        profesionales, sirviendo como núcleo para otras librerías y plataformas
        más grandes, demostrando su robustez y flexibilidad en entornos reales.
      </React.Fragment>,
      <React.Fragment key="fenextjs-desc-5">
        <b>Fenextjs</b> ha permitido reducir significativamente el tiempo de desarrollo en
        nuevos proyectos, mejorar la coherencia visual y técnica entre equipos, y
        establecer una base sólida que facilita el mantenimiento y la evolución del
        código a largo plazo.
      </React.Fragment>,
    ],
  },
  {
    img: "/proyects/aveonline.png",
    title: "Aveonline",
    short: [
      <i key="aveonline-short-1">Un plugin para wordpress para gestionar envíos.</i>,
      <React.Fragment key="aveonline-short-2">
        Aveonline es plugin para wordpress,
        diseñado para gestionar envíos desde Wordpress usando la plataforma de
        Aveonline de manera eficiente y clara.
      </React.Fragment>,
      <React.Fragment key="aveonline-short-3">
        Algunas de las funcionalidades de
        <b>Aveonline</b> incluyen:
        <ul>
          <li>Configurar la cuenta de aveonline en Wordpress.</li>
          <li>Configurar informacion de Productos para envíos.</li>
          <li>Muestra lista de Transportadoras a usar.</li>
          <li>Permite gestionar si el envíos es contra entrega</li>
        </ul>
      </React.Fragment>,
      <React.Fragment key="aveonline-short-4">
        El plugin de <b>Aveonline</b> está disponible en:{" "}
        <a
          href="https://github.com/franciscoblancojn/aveonline-shipping"
          target="_blank"
        >
          https://github.com/franciscoblancojn/aveonline-shipping
        </a>
      </React.Fragment>,
    ],
    description: [
      <React.Fragment key="aveonline-desc-1">
        <b>Aveonline</b> es un plugin de WordPress desarrollado para simplificar
        la gestión de envíos en tiendas en línea, integrando de forma directa y
        clara los servicios de la plataforma Aveonline dentro del ecosistema
        WordPress.
      </React.Fragment>,
      <React.Fragment key="aveonline-desc-2">
        El objetivo principal del plugin fue eliminar procesos manuales y
        reducir errores en la configuración de envíos, permitiendo a los
        administradores gestionar transportadoras, productos y condiciones de
        entrega desde un solo lugar.
      </React.Fragment>,
      <React.Fragment key="aveonline-desc-3">
        Durante su desarrollo desarrollé la lógica de integración con la API de{" "}
        <b>Aveonline</b> y diseñé la experiencia de usuario, priorizando simplicidad,
        estabilidad y facilidad de configuración.
      </React.Fragment>,
      <React.Fragment key="aveonline-desc-4">
        Este proyecto me permitió profundizar en el desarrollo de plugins para
        WordPress, buenas prácticas de PHP, seguridad, manejo de estados y
        consumo de APIs externas dentro de entornos CMS.
      </React.Fragment>,
    ],
  },
  {
    img: "/proyects/xell.svg",
    imgReplaceTitle: true,
    title: "Xell",
    short: [
      <i key="xell-short-1">
        CRM, Ventas, Bodegas, Productos, POS, Cajas... todo en una sola
        plataforma. Xell combina sencillez, intuición y robustez en una solución
        integral para negocios.
      </i>,
      <React.Fragment key="xell-short-2">
        Xell es una plataforma que desarrollé durante 3 años, diseñada para
        gestionar negocios de manera eficiente y clara. Esta solución permite
        manejar:
        <div style={{ height: ".25rem" }}></div>
        <b>Productos</b>, <b>Bodegas</b>, <b>Compras</b>, <b>Ventas</b>,{" "}
        <b>Clientes</b>, <b>Proveedores</b> y <b>Usuarios</b> con distintos
        roles.
        <div style={{ height: ".25rem" }}></div>
        Me encargué de desarrollar una{" "}
        <b>interfaz de usuario intuitiva, rápida y amigable</b>, diseñada para
        validar <b>roles y permisos</b> mientras mantiene una experiencia de
        navegación fluida, eliminando la necesidad de recargar páginas y
        optimizando el flujo de trabajo.
        <div style={{ height: ".25rem" }}></div>
        Además, diseñé y desarrollé distintas <b>librerías</b> para Xell, que
        permitieron modularizar este gran proyecto en componentes y servicios
        reutilizables, lo que aceleró su desarrollo y mejoró su escalabilidad.
      </React.Fragment>,
      <React.Fragment key="xell-short-3">
        Algunos de los módulos y servicios destacados que desarrollé incluyen:
        <ul>
          <li>
            <b>xell-adapters</b>: Adaptadores versátiles para conectar múltiples
            servicios.
          </li>
          <li>
            <b>xell-fenextjs</b>: Herramientas avanzadas basadas en Fenextjs.
          </li>
          <li>
            <b>xell-firebase</b>: Integración con Firebase para storage y base
            de datos.
          </li>
          <li>
            <b>xell-languages</b>: Soporte multilenguaje para una experiencia
            global.
          </li>
          <li>
            <b>xell-svg</b>: Librería optimizada para manejo de gráficos SVG.
          </li>
          <li>
            <b>xell-email-template</b>: Plantillas de correo electrónico
            dinámicas y personalizables.
          </li>
        </ul>
      </React.Fragment>,
      <React.Fragment key="xell-short-4">
        Puedes visitar la página oficial de <b>Xell</b> aquí:{" "}
        <a href="https://xell.shop/es/" target="_blank">
          https://xell.shop
        </a>
      </React.Fragment>,
    ],
    description: [
      <React.Fragment key="xell-desc-1">
        <b>Xell</b> es una plataforma empresarial completa diseñada para
        centralizar la operación de negocios de distintos tamaños en una sola
        solución digital, eliminando la necesidad de múltiples sistemas
        desconectados.
      </React.Fragment>,
      <React.Fragment key="xell-desc-2">
        Durante más de 3 años participé activamente en el diseño, arquitectura y
        desarrollo de la plataforma, abordando tanto el frontend como la lógica
        de negocio, con un fuerte enfoque en <b>rendimiento</b>,{" "}
        <b>usabilidad</b> y <b>seguridad</b>.
      </React.Fragment>,
      <React.Fragment key="xell-desc-3">
        Uno de los mayores retos de Xell fue manejar la complejidad de múltiples
        módulos (CRM, inventarios, ventas, POS, cajas y reportes) manteniendo
        una experiencia fluida. Para ello se implementó una arquitectura modular
        basada en librerías reutilizables.
      </React.Fragment>,
      <React.Fragment key="xell-desc-4">
        Gracias a esta modularización, Xell logró escalar de forma ordenada,
        facilitando nuevas funcionalidades, integraciones externas y
        personalización según el tipo de negocio, sin comprometer la estabilidad
        del sistema.
      </React.Fragment>,
    ],
  },
];
