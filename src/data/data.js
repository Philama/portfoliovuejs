
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
    { id: 1, name: "LinkedIn", src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg', url: 'https://www.linkedin.com/in/guardini-philama/' },
    { id: 2, name: "WhatsApp", src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg', url: 'https://wa.me/5493512080323' },
    { id: 3, name: "GitHub", src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg', url: 'https://github.com/Philama' }
  ]
};

export const experiencia = [
  { id: 1, src: iconoVentas, parrafo: 'Lideré un equipo de 5 desarrolladores en la creación de una plataforma de comercio electrónico que incrementó las ventas en un 35% durante el primer año.' },
  { id: 2, src: iconoEcomerce, parrafo: 'Diseñé y desarrollé aplicaciones web utilizando Node.js, React y MongoDB, logrando reducir el tiempo de carga de las páginas en un 50%.' },
  { id: 3, src: iconoConfig, parrafo: 'Implementé soluciones de autenticación y autorización, mejorando la seguridad del sitio web y reduciendo los intentos de acceso no autorizado en un 20%.' },
  { id: 4, src: iconoUiUx, parrafo: 'Colaboré con diseñadores de UX/UI para crear interfaces de usuario atractivas y fáciles de usar, aumentando la satisfacción del cliente en un 15%.' },
  { id: 5, src: iconoWatch, parrafo: 'Automaticé procesos de despliegue continuo utilizando Jenkins y Docker, reduciendo los tiempos de despliegue en un 40%.' },
];

export const proyectos = [
  {
    id: 1,
    src: imgRestaurant,
    titulo: "Aplicación de Reservas para Restaurantes (2023)",
    descripcion: "Creé una aplicación móvil con Flutter que permite a los usuarios reservar mesas en restaurantes locales.",
    tags: ["Flutter", "Mobile"]
  },
  {
    id: 2,
    src: imgElearning,
    titulo: "Plataforma de E-learning (2022)",
    descripcion: "Diseñé y desarrollé una plataforma de educación en línea utilizando Django y React. Incluye gestión de cursos y foros de discusión.",
    tags: ["Django", "React", "Education"]
  },
  {
    id: 3,
    src: imgBlog,
    titulo: "Blog Personal con CMS (2022)",
    descripcion: "Construí un blog personal con un sistema de gestión de contenidos (CMS) personalizado en WordPress.",
    tags: ["WordPress", "CMS"]
  },
  {
    id: 4,
    src: imgRestaurant,
    titulo: "Sistema de Gestión de Inventarios (2023)",
    descripcion: "Desarrollé un sistema de gestión de inventarios para pequeñas empresas utilizando Vue.js y Firebase.",
    tags: ["Vue.js", "Firebase"]
  },
  {
    id: 5,
    src: "https://picsum.photos/300/200?random=5",
    titulo: "Aplicación de Clima en Tiempo Real (2023)",
    descripcion: "Creé una aplicación móvil que muestra el clima en tiempo real utilizando APIs públicas como OpenWeather.",
    tags: ["API", "Weather"]
  },
  {
    id: 6,
    src: "https://picsum.photos/300/200?random=6",
    titulo: "Tienda en Línea con Carrito de Compras (2022)",
    descripcion: "Diseñé una tienda en línea con Laravel y Vue.js que incluye un carrito de compras y pasarela de pagos.",
    tags: ["Laravel", "Vue.js", "E-commerce"]
  },
  {
    id: 7,
    src: "https://picsum.photos/300/200?random=7",
    titulo: "Sistema de Gestión de Tareas (2023)",
    descripcion: "Desarrollé un sistema de gestión de tareas colaborativo con Node.js y MongoDB. Incluye un tablero Kanban interactivo.",
    tags: ["Node.js", "MongoDB"]
  },
  {
    id: 8,
    src: "https://picsum.photos/300/200?random=8",
    titulo: "Aplicación de Seguimiento de Hábitos (2023)",
    descripcion: "Construí una aplicación móvil para el seguimiento de hábitos diarios utilizando Flutter y Firebase.",
    tags: ["Flutter", "Firebase"]
  }
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
