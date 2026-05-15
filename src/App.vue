<script setup>
import { defineAsyncComponent } from 'vue';
import { 
  datosPersonales, 
  experiencia, 
  proyectos, 
  habilidades, 
  intereses 
} from './data/data.js';

import DescargarPDF from './components/DescargarPDF.vue';
import NavBar from './components/NavBar.vue';
import DatosPersonales from './components/DatosPersonales.vue';

const Educacion = defineAsyncComponent(() => import('./components/EducacionComponente.vue'));
const ExperienciaComponente = defineAsyncComponent(() => import('./components/ExperienciaComponente.vue'));
const ProyectosComponente = defineAsyncComponent(() => import('./components/ProyectosComponente.vue'));
const HabilidadesComponente = defineAsyncComponent(() => import('./components/HabilidadesComponente.vue'));
const InteresesComponente = defineAsyncComponent(() => import('./components/InteresesComponente.vue'));

const educacionData = [
    {
        fecha: '2022',
        title: 'Tecnicatura Universitaria en Programación',
        descripcion: 'Operación y programación de computadoras.',
        enlace: 'https://youtube.com',
    },
    {
        fecha: '2015',
        title: 'Ingeniería en Sistemas',
        descripcion: 'Universidad Tecnológica de Córdoba',
        enlace: 'https://youtube.com',
    },
    {
        fecha: '2021 - 2022',
        title: 'TEST AUTOMATION UNIVERSITY (TAU)',
        descripcion: 'Web UI JavaScript Path & Mobile JavaScript Path.',
        enlace: 'https://testautomationu.applitools.com/',
    },
    {
        fecha: 'Jul-2022 - 2023',
        title: 'AVALTH Skill Factory ReactJS',
        descripcion: 'Training in Full Stack MERN Development provided by the Avalith team.',
        enlace: 'https://avalith.net/',
    },
];
</script>

<template>
    <header id="top">
        <NavBar :logo="datosPersonales.logo" />
        <DatosPersonales />
        <h1 class="visual-hidden">{{ datosPersonales.nombre }} - {{ datosPersonales.titulo }}</h1>
    </header>
    
    <main class="container">
        <section id="educacion" class="fade-in">
            <h2>Educación</h2>
            <Educacion :educacion="educacionData" />
        </section>
        
        <section id="experiencia" class="fade-in">
            <h2>Experiencia</h2>
            <ExperienciaComponente :experiencia="experiencia" />
        </section>
        
        <section id="proyectos" class="fade-in">
            <h2>Proyectos Destacados</h2>
            <ProyectosComponente :proyectos="proyectos" />
        </section>
        
        <section id="habilidades" class="fade-in">
            <h2>Stack Tecnológico</h2>
            <HabilidadesComponente :habilidades="habilidades" />
        </section>
        
        <section id="intereses" class="fade-in">
            <h2>Más sobre mí</h2>
            <InteresesComponente :intereses="intereses" />
        </section>
    </main>

    <footer class="footer">
        <div class="footer-content">
          <a href="#top" class="back-to-top" aria-label="Volver al inicio">
            <span class="arrow">↑</span>
          </a>
          <p class="copyright">© 2024 {{ datosPersonales.nombre }}</p>
          <p class="footer-tagline">Soluciones Digitales & Desarrollo Full Stack</p>
        </div>
    </footer>

    <DescargarPDF />
</template>

<style scoped>
.visual-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.footer {
  padding: 5rem 0 3rem;
  background: var(--color-surface);
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
  text-align: center;
  margin-top: 4rem;
  transition: var(--transition-all);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.back-to-top {
  width: 50px;
  height: 50px;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: var(--transition-all);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-md);
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.copyright {
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0;
  color: var(--color-primary);
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

section {
  padding: 8rem 0;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--color-primary);
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInSection 1s ease-out forwards;
}

@keyframes fadeInSection {
  to {
      opacity: 1;
      transform: translateY(0);
  }
}
</style>