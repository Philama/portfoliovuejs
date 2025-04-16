<script setup>
import { defineAsyncComponent } from 'vue';
import DescargarPDF from './components/DescargarPDF.vue';

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const DatosPersonales = defineAsyncComponent(() => import('./components/DatosPersonales.vue'));
const Educacion = defineAsyncComponent(() => import('./components/EducacionComponente.vue'));
const ExperienciaComponente = defineAsyncComponent(() => import('./components/ExperienciaComponente.vue'));
const ProyectosComponente = defineAsyncComponent(() => import('./components/ProyectosComponente.vue'));
const HabilidadesComponente = defineAsyncComponent(() => import('./components/HabilidadesComponente.vue'));
const InteresesComponente = defineAsyncComponent(() => import('./components/InteresesComponente.vue'));
</script>

<template>
    <header id="top">
        <NavBar />
        <DatosPersonales />
    </header>
    <main>
        <div class="container">
            <section id="educacion" class="fade-in">
                <h2>Educación - Cursos</h2>
                <Educacion />
            </section>
            <section id="experiencia" class="fade-in">
                <h2>Experiencia</h2>
                <ExperienciaComponente />
            </section>
            <section id="proyectos" class="fade-in">
                <h2>Proyectos</h2>
                <ProyectosComponente />
            </section>
            <section id="habilidades" class="fade-in">
                <h2>Habilidades</h2>
                <HabilidadesComponente />
            </section>
            <section id="intereses" class="fade-in">
                <h2>Intereses</h2>
                <InteresesComponente />
            </section>
        </div>
    </main>
    <footer>
        <a href="#top" class="back-to-top">⬆ Volver al Inicio</a>
        <p>© 2024 Guardini Philama - Portafolio web - UTN FRSR</p>
    </footer>

    <!-- Botón para descargar PDF -->
    <DescargarPDF />
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-size: 1.3rem;
    background-color: #f8f9fa;
  }

  .back-to-top {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .back-to-top:hover {
    background-color: #0056b3;
  }

  /* Animaciones */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease-in-out forwards;
  }

  @keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }

  /* Botón de modo oscuro */
  .dark-mode-toggle {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .dark-mode-toggle:hover {
    background-color: var(--button-bg-hover);
  }

  /* Estilos para el modo oscuro */
  body.dark {
    background-color: #121212;
    color: #ffffff;
  }

  body.dark a {
    color: #90caf9;
  }

  /* Estilo para el botón flotante */
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