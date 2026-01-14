<script setup>
import { datosPersonales } from '../data/data.js';
</script>


<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{{ datosPersonales.nombre }}</h1>
        <h2>{{ datosPersonales.titulo }}</h2>
        <p class="descripcion">{{ datosPersonales.presentacion }}</p>

        <ul class="social-links">
          <li v-for="red in datosPersonales.redesSociales" :key="red.id">
            <a :href="red.url" target="_blank" rel="noopener noreferrer">
              <img class="icon-redsocial" :src="red.src" :alt="red.name">
            </a>
          </li>
        </ul>

        <div class="hero-actions">
          <a :href="`mailto:${datosPersonales.email}`" class="btn-primary">Contactar</a>
        </div>

        <div class="location-info">
          <small>{{ datosPersonales.residencia }}</small>
        </div>
      </div>

      <div class="hero-image">
        <img :src="datosPersonales.fotoPerfil" alt="Foto de perfil" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  background-color: var(--color-background);
  /* Asegura que el fondo sea correcto */
}

.hero-content {
  display: flex;
  flex-direction: column-reverse;
  /* Móvil primero: texto abajo, imagen arriba (opcional, o columna normal) */
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
}

/* Diseño de escritorio */
@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .hero-text {
    flex: 1;
    align-items: flex-start;
    /* Alinea items a la izquierda */
    text-align: left;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    /* Imagen a la derecha */
  }
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centrado en móvil */
  text-align: center;
  /* Centrado en móvil */
  gap: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  color: var(--color-heading);
  font-weight: 800;
}

h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  font-weight: 500;
}

.descripcion {
  font-size: 1.2rem;
  color: var(--color-secondary);
  max-width: 600px;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.icon-redsocial {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.icon-redsocial:hover {
  transform: scale(1.1);
}

.hero-actions {
  margin-top: 1rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: var(--color-primary);
  /* Podrías oscurecerlo un poco con CSS filters o variable hover */
  filter: brightness(0.9);
  transform: translateY(-2px);
}

.hero-image img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  /* Opcional: square con border radius pequeño para modernizar */
  object-fit: cover;
  border: 5px solid var(--color-primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.location-info {
  margin-top: 1rem;
  color: var(--color-secondary);
  opacity: 0.8;
}
</style>