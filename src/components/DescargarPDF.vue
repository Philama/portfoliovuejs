<script setup>
import { jsPDF } from 'jspdf';

const descargarPDF = () => {
  const doc = new jsPDF();

  // Configuración inicial
  const pageHeight = 297; // Altura de la página A4 en mm
  const margin = 10; // Margen en mm
  let y = margin; // Posición vertical inicial

  // Función para agregar texto y manejar saltos de página
  const agregarTexto = (texto, x, incrementoY) => {
    if (y + incrementoY > pageHeight - margin) {
      doc.addPage(); // Agregar nueva página si se excede el límite
      y = margin; // Reiniciar posición vertical
    }
    doc.text(texto, x, y);
    y += incrementoY; // Incrementar la posición vertical
  };

  // Título del documento
  doc.setFontSize(18);
  agregarTexto('Portafolio de Guardini Philama', margin, 10);

  // Sección: Sobre mí
  doc.setFontSize(14);
  agregarTexto('Sobre mí:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('Guardini Philama', margin, 7);
  agregarTexto('Técnico Universitario en Programación', margin, 7);
  agregarTexto('Hola, bienvenido a mi portafolio de proyectos.', margin, 7);
  agregarTexto('Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web.', margin, 7);
  agregarTexto('Contacto: Guardi2005@yahoo.fr', margin, 7);
  agregarTexto('Ubicación: Córdoba Capital, Córdoba, Argentina', margin, 7);
  agregarTexto('LinkedIn | Instagram | GitHub', margin, 10);

  // Sección: Educación
  doc.setFontSize(14);
  agregarTexto('Educación:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Ingeniería en Sistemas (2015)', margin, 7);
  agregarTexto('  Universidad Tecnológica de Córdoba', margin, 7);
  agregarTexto('- TEST AUTOMATION UNIVERSITY (2021 - 2022)', margin, 7);
  agregarTexto('  Web UI JavaScript Path & Mobile JavaScript Path', margin, 7);
  agregarTexto('- AVALTH Skill Factory ReactJS (Jul-2022 - 2023)', margin, 7);
  agregarTexto('  Training in Full Stack MERN Development provided by Avalith', margin, 10);

  // Sección: Experiencia
  doc.setFontSize(14);
  agregarTexto('Experiencia:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Desarrollador Full Stack (Desde Enero 2022)', margin, 7);
  agregarTexto('  Lideré un equipo de desarrollo y optimicé procesos.', margin, 10);

  // Sección: Proyectos
  doc.setFontSize(14);
  agregarTexto('Proyectos:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Aplicación de Reservas para Restaurantes (2023)', margin, 7);
  agregarTexto('  Creé una app móvil para reservas en restaurantes locales.', margin, 7);
  agregarTexto('- Plataforma de E-learning (2022)', margin, 7);
  agregarTexto('  Diseñé una plataforma educativa con Django y React.', margin, 10);

  // Sección: Habilidades
  doc.setFontSize(14);
  agregarTexto('Habilidades:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- JavaScript, Python, HTML/CSS, Java, SQL', margin, 7);
  agregarTexto('- React.js, Vue.js, Node.js, Django, Bootstrap', margin, 7);
  agregarTexto('- Git, Docker, Cypress, Figma, Visual Studio Code', margin, 10);

  // Sección: Idiomas
  doc.setFontSize(14);
  agregarTexto('Idiomas:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Español: Nativo (C2)', margin, 7);
  agregarTexto('- Inglés: Avanzado (C2)', margin, 7);
  agregarTexto('- Francés: Nativo (C2)', margin, 7);
  agregarTexto('- Criollo Haitiano: Nativo (C2)', margin, 10);

  // Sección: Voluntariado Social
  doc.setFontSize(14);
  agregarTexto('Voluntariado Social:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Voluntario | Comedor Comunitario | Nocturno Papa Francisco | 2017', margin, 7);
  agregarTexto('  Colaboré en la preparación y distribución de alimentos a familias en', margin, 7);
  agregarTexto('  situación de vulnerabilidad. Mi experiencia me permitió desarrollar', margin, 7);
  agregarTexto('  habilidades de trabajo en equipo y fortalecer mi compromiso social.', margin, 10);

  // Sección: Intereses
  doc.setFontSize(14);
  agregarTexto('Intereses:', margin, 10);
  doc.setFontSize(12);
  agregarTexto('- Desarrollo de software, diseño de interfaces, aprendizaje continuo.', margin, 10);

  // Guardar el archivo PDF
  doc.save('portafolio.pdf');
};
</script>

<template>
  <!-- Botón flotante para descargar PDF -->
  <button class="btn-descargar" @click="descargarPDF" title="Descargar CV">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  </button>
</template>

<style scoped>
.btn-descargar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-descargar:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}
</style>