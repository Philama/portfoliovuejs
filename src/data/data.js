
import iconoVentas from '../assets/ventas.svg';
import iconoEcomerce from '../assets/ecomerce.svg';
import iconoConfig from '../assets/configuracion.svg';
import iconoUiUx from '../assets/uiux.svg';
import iconoWatch from '../assets/watch.svg';

import imgRestaurant from '../assets/restaurant.png';
import imgElearning from '../assets/e-learning.png';
import imgBlog from '../assets/blog.png';

import imgLogo from '../assets/logo.jpg';

// Icons for Skills
import iconJs from '../components/icons/js.svg';
import iconPython from '../components/icons/python.svg';
import iconHtmlCss from '../components/icons/html-css.svg';
import iconJava from '../components/icons/java.svg';
import iconSql from '../components/icons/sql.svg';
import iconReact from '../components/icons/react.svg';
import iconVue from '../components/icons/vue.svg';
import iconNode from '../components/icons/node.svg';
import iconDjango from '../components/icons/django.svg';
import iconBootstrap from '../components/icons/bootstrap.svg';
import iconGit from '../components/icons/git.svg';
import iconDocker from '../components/icons/docker.svg';
import iconCypress from '../components/icons/cypress.svg';
import iconFigma from '../components/icons/figma.svg';
import iconVisual from '../components/icons/visual.svg';
import iconMongo from '../components/icons/mongo.svg';
import iconMysql from '../components/icons/mysql.svg';
import iconPostgres from '../components/icons/postgres.svg';

import iconLinkedin from '../assets/icons8-linkedin.svg';
import iconGithub from '../assets/icons8-github.svg';

export const datosPersonales = {
  nombre: "Guardini Philama",
  titulo: "Técnico Universitario en Programación",
  descripcion: "Desarrollador Web Full Stack",
  residencia: "Cordoba Capital, Cordoba, Argentina",
  presentacion: "Hola, bienvenido a mi portafolio de proyectos. Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web.",
  email: "Guardi2005@yahoo.fr",
  telefono: "+54 9 351 208-0323",
  fotoPerfil: "https://avatars.githubusercontent.com/u/25463245?v=4",
  logo: imgLogo,
  redesSociales: [
    { id: 1, name: "LinkedIn", src: iconLinkedin, url: 'https://www.linkedin.com/in/guardini-philama/' },
    { id: 2, name: "WhatsApp", src: 'https://img.icons8.com/color/48/whatsapp--v1.png', url: 'https://wa.me/5493512080323' },
    { id: 3, name: "GitHub", src: iconGithub, url: 'https://github.com/Philama' }
  ]
};

export const experiencia = [
  {
    id: 1,
    src: iconoVentas,
    parrafo: 'Desarrollador Full Stack | Freelance (2024 - Presente): Desarrollo de aplicaciones web a medida para clientes internacionales usando Vue.js y Node.js.'
  },
  {
    id: 2,
    src: iconoEcomerce,
    parrafo: 'Desarrollador Frontend | Empresa X (2022 - 2024): Optimización de interfaces de usuario y mejora de rendimiento en e-commerce de alto tráfico.'
  },
  {
    id: 3,
    src: iconoConfig,
    parrafo: 'Soporte Técnico IT | Empresa Y (2020 - 2022): Resolución de incidentes, mantenimiento de servidores y soporte a usuarios finales.'
  },
  {
    id: 4,
    src: iconoUiUx,
    parrafo: 'Prácticas Profesionales | Estudio de Diseño (2019): Colaboración en el diseño de prototipos UI/UX para aplicaciones móviles.'
  },
];

export const proyectos = [
  {
    id: 1,
    src: imgRestaurant,
    titulo: "Sistema de Reservas (Demo)",
    descripcion: "Aplicación completa para gestionar reservas de restaurantes. Tech stack: Vue.js, Firebase.",
    tags: ["Vue.js", "Firebase", "Web App"]
  },
  {
    id: 2,
    src: imgElearning,
    titulo: "Plataforma Educativa (Demo)",
    descripcion: "Sitio web de cursos online con dashboard de estudiantes y pasarela de pagos.",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    id: 3,
    src: imgBlog,
    titulo: "Blog Personal (Demo)",
    descripcion: "Blog optimizado para SEO con CMS headless y diseño minimalista.",
    tags: ["Astro", "Markdown", "SEO"]
  },
  // Añade tus proyectos reales aquí copiando la estructura anterior
];

export const habilidades = [
  {
    id: 1, nombre: 'Lenguajes de Programación', habilidades: [
      { id: 1, nombre: 'JavaScript', nivel: 'Avanzado', icono: iconJs },
      { id: 2, nombre: 'Python', nivel: 'Intermedio', icono: iconPython },
      { id: 3, nombre: 'HTML/CSS', nivel: 'Avanzado', icono: iconHtmlCss },
      { id: 4, nombre: 'Java', nivel: 'Intermedio', icono: iconJava },
      { id: 5, nombre: 'SQL', nivel: 'Intermedio', icono: iconSql }
    ]
  },
  {
    id: 2, nombre: 'Frameworks y Librerías', habilidades: [
      { id: 1, nombre: 'React.js', nivel: 'Avanzado', icono: iconReact },
      { id: 2, nombre: 'Vue.js', nivel: 'Intermedio', icono: iconVue },
      { id: 3, nombre: 'Node.js', nivel: 'Avanzado', icono: iconNode },
      { id: 4, nombre: 'Django', nivel: 'Intermedio', icono: iconDjango },
      { id: 5, nombre: 'Bootstrap', nivel: 'Avanzado', icono: iconBootstrap }
    ]
  },
  {
    id: 3, nombre: 'Herramientas y Software', habilidades: [
      { id: 1, nombre: 'Git', nivel: 'Avanzado', icono: iconGit },
      { id: 2, nombre: 'Docker', nivel: 'Intermedio', icono: iconDocker },
      { id: 3, nombre: 'Cypress', nivel: 'Intermedio', icono: iconCypress },
      { id: 4, nombre: 'Figma', nivel: 'Intermedio', icono: iconFigma },
      { id: 5, nombre: 'Visual Studio Code', nivel: 'Avanzado', icono: iconVisual }
    ]
  },
  {
    id: 4, nombre: 'Bases de Datos', habilidades: [
      { id: 1, nombre: 'MongoDB', nivel: 'Avanzado', icono: iconMongo },
      { id: 2, nombre: 'MySQL', nivel: 'Intermedio', icono: iconMysql },
      { id: 3, nombre: 'PostgreSQL', nivel: 'Intermedio', icono: iconPostgres }
    ]
  },
  {
    id: 5,
    nombre: 'Idiomas',
    habilidades: [
      { id: 1, nombre: 'Español', nivel: 'Nativo (C2)', icono: '🇦🇷' },
      { id: 2, nombre: 'Inglés', nivel: 'Avanzado (C2)', icono: '🇺🇸' },
      { id: 3, nombre: 'Francés', nivel: 'Nativo (C2)', icono: '🇫🇷' },
      { id: 4, nombre: 'Criollo Haitiano', nivel: 'Nativo (C2)', icono: '🇭🇹' }
    ]
  }
];

export const intereses = [
  '- Desarrollo de Software de Código Abierto: Contribuyo a proyectos en GitHub, colaborando con otros desarrolladores para mejorar herramientas y librerías populares.',
  '- Tecnología de Innovación: Me apasiona explorar nuevas tendencias tecnológicas como la inteligencia artificial y el desarrollo de aplicaciones móviles.',
  '- Fotografía: Practico la fotografía como un hobby, lo que me ayuda a mantener una perspectiva creativa tanto en mi vida profesional como personal.'
];
