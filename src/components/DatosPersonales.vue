<script setup>
import { datosPersonales } from '../data/data.js';
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-image-wrapper">
        <img :src="datosPersonales.fotoPerfil" alt="Foto de perfil" class="hero-avatar" />
      </div>

      <div class="hero-content">
        <h1 class="hero-title">{{ datosPersonales.nombre }}</h1>
        <p class="hero-subtitle">{{ datosPersonales.titulo }}</p>
        <p class="hero-description">{{ datosPersonales.presentacion }}</p>

        <div class="hero-footer">
          <div class="contact-badges">
            <span class="badge"><i class="icon">📧</i> {{ datosPersonales.email }}</span>
            <span class="badge"><i class="icon">📍</i> {{ datosPersonales.residencia }}</span>
          </div>

          <ul class="social-links">
            <li v-for="red in datosPersonales.redesSociales" :key="red.id">
              <a :href="red.url" target="_blank" rel="noopener noreferrer" class="social-link">
                <img :src="red.src" :alt="red.name" class="social-icon theme-icon">
              </a>
            </li>
          </ul>

          <div class="hero-cta">
            <a :href="`mailto:${datosPersonales.email}`" class="btn-cta">Contactar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
}

.hero-container {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
}

.hero-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-surface);
  box-shadow: var(--shadow-lg);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero-avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-accent);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  max-width: 650px;
  margin: 0 auto 2rem;
  line-height: 1.8;
}

.hero-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.contact-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.badge {
  background: var(--color-surface);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-surface);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: var(--transition-all);
}

.social-link:hover {
  border-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.social-icon {
  width: 24px;
  height: 24px;
}

.btn-cta {
  background: var(--color-accent);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: var(--transition-all);
  box-shadow: 0 10px 20px -5px rgba(13, 148, 136, 0.3);
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

@media (max-width: 640px) {
  .hero-avatar {
    width: 140px;
    height: 140px;
  }
}
</style>
