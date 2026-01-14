<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <a href="#top" class="logo-link">
        <img :src="datosPersonales.logo" alt="Logo" class="logo" />
      </a>
      <ul>
        <a v-for="nav in navegacion" :key="nav.nombre" :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a>
      </ul>
      <button class="dark-mode-btn" @click="changeMode">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { datosPersonales } from '../data/data.js';

const navegacion = ref([
  { id: 1, nombre: 'Educación', enlace: '#educacion' },
  { id: 2, nombre: 'Experiencia', enlace: '#experiencia' },
  { id: 3, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 4, nombre: 'Habilidades', enlace: '#habilidades' },
  { id: 5, nombre: 'Intereses', enlace: '#intereses' }
]);

const isDark = ref(false);

const changeMode = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark');
}
</script>

<style scoped>
.navbar {
  position: fixed;
  /* Fija la barra de navegación en la parte superior */
  top: 0;
  /* Alinea la barra al borde superior */
  left: 0;
  /* Alinea la barra al borde izquierdo */
  width: 100%;
  /* Asegura que la barra ocupe todo el ancho */
  z-index: 1000;
  /* Asegura que la barra esté por encima de otros elementos */
  background-color: #01182c;
  /* Fondo sólido azul */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Sombra para destacar la barra */
  padding: 1rem;
  /* Espaciado interno */
  color: #fff;
  /* Establece el color del texto en blanco */
  align-items: center;
  /* Centra verticalmente los elementos dentro de la navbar */
}

.navbar-item {
  color: #ffffff;
  /* Establece el color del texto en blanco */
  text-decoration: none;
  /* Elimina el subrayado de los enlaces */
  margin-right: 1rem;
  /* Añade un margen derecho de 1rem entre los elementos */
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  height: 40px;
  /* Tamaño ajustado para navbar */
  width: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid white;
  object-fit: cover;
}

a {
  position: relative;
  /* Necesario para efectos futuros */
  color: #fff;
  /* Color del texto */
  text-decoration: none;
  /* Elimina el subrayado de los enlaces */
  margin-right: 1rem;
  /* Añade un margen derecho de 1rem entre los elementos */
  border-radius: 5px;
  /* Redondea las esquinas del borde */
  padding: 5px;
  /* Añade un padding de 5px alrededor del contenido */
  transition: transform 0.2s;
  /* Transición suave para el efecto */
}

a:hover {
  background-color: #0056b3;
  /* Cambia el color de fondo al pasar el mouse sobre un enlace */
  box-shadow: 0 0 10px #0056b3;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: flex;
    /* Organiza los elementos en línea usando flexbox */
    justify-content: center;
    /* Alinea los elementos al centro en pantallas pequeñas */
    width: 100%;
    /* Asegura que la navbar ocupe el 100% del ancho en pantallas pequeñas */
  }
}

.dark-mode-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: transform 0.3s ease;
}

.dark-mode-btn:hover {
  transform: rotate(360deg);
}
</style>