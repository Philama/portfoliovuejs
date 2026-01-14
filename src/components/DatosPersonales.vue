<script setup>
import { datosPersonales } from '../data/data.js';
</script>


<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-image">
        <img :src="datosPersonales.fotoPerfil" alt="Foto de perfil" />
      </div>

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
          <p>{{ datosPersonales.email }}</p>
          <p>{{ datosPersonales.telefono }}</p>
          <small>{{ datosPersonales.residencia }}</small>
        </div>
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
}

.hero-content {
  display: flex;
  flex-direction: column;
  /* Stacked layout for centered look */
  align-items: center;
  max-width: 800px;
  /* Reduced width for better centered focus */
  width: 100%;
  gap: 2rem;
  text-align: center;
}

.hero-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Center everything */
  gap: 1rem;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--color-primary);
  /* Check main.css/base.css for this variable */
  font-weight: 800;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--color-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.descripcion {
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  line-height: 1.6;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.icon-redsocial {
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease;
}

.icon-redsocial:hover {
  transform: scale(1.1);
}

.hero-actions {
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  filter: brightness(0.9);
  transform: translateY(-2px);
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-secondary);
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
