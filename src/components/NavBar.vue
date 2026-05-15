<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="navbar-container">
      <a href="#top" class="navbar-logo">
        <img :src="logo" alt="Logo" class="logo-img" />
      </a>
      
      <ul class="nav-links">
        <li v-for="nav in navegacion" :key="nav.nombre">
          <a :href="nav.enlace" class="nav-link">{{ nav.nombre }}</a>
        </li>
      </ul>

      <div class="nav-actions">
        <button class="theme-toggle" @click="toggleDarkMode" :aria-label="isDark ? 'Light mode' : 'Dark mode'">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  logo: {
    type: String,
    required: true
  }
});

const navegacion = [
  { id: 1, nombre: 'Educación', enlace: '#educacion' },
  { id: 2, nombre: 'Experiencia', enlace: '#experiencia' },
  { id: 3, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 4, nombre: 'Habilidades', enlace: '#habilidades' },
  { id: 5, nombre: 'Intereses', enlace: '#intereses' }
];

const isDark = ref(false);
const scrolled = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.body.classList.add('dark');
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: var(--transition-all);
}

.navbar-scrolled {
  padding: 0.75rem 0;
  background: rgba(var(--color-surface), 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

/* Need to handle background color specifically because backdrop-filter needs opacity */
.navbar-scrolled {
  background: var(--color-surface); /* Fallback */
}

@supports (backdrop-filter: blur(12px)) {
  .navbar-scrolled {
    background: transparent;
  }
  .navbar::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: var(--transition-all);
  }
  .navbar-scrolled::before {
    background: rgba(var(--color-surface-rgb), 0.8);
    backdrop-filter: blur(12px);
  }
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
  object-fit: cover;
  transition: var(--transition-all);
}

.logo-img:hover {
  transform: rotate(10deg);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: var(--transition-all);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: var(--transition-all);
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: var(--transition-all);
  box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>