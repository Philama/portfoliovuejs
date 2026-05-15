<script setup>
defineProps({
  proyectos: {
    type: Array,
    required: true
  }
});
</script>

<template>
    <ul class="projects-grid">
        <li class="project-card" v-for="proyecto in proyectos" :key="proyecto.id">
            <div class="project-image-container">
                <img :src="proyecto.src" :alt="proyecto.titulo" class="project-image">
                <div class="project-overlay">
                  <div class="project-tags">
                    <span v-for="tag in proyecto.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
            </div>
            
            <div class="project-content">
                <h3 class="project-title">{{ proyecto.titulo }}</h3>
                <p class="project-description">{{ proyecto.descripcion }}</p>
                
                <div class="project-footer">
                  <a href="#" class="btn-project">Ver Detalle</a>
                  <a href="#" class="btn-icon" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    padding: 0;
    list-style: none;
}

.project-card {
    background: var(--color-surface);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--color-border);
    transition: var(--transition-all);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-accent);
}

.project-image-container {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: var(--transition-all);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background: var(--color-accent);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
}

.project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
}

.project-description {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.btn-project {
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition-all);
}

.btn-project::after {
    content: '→';
    transition: transform 0.3s ease;
}

.btn-project:hover {
    filter: brightness(1.2);
}

.btn-project:hover::after {
    transform: translateX(4px);
}

.btn-icon {
    color: var(--color-text-muted);
    transition: var(--transition-all);
}

.btn-icon:hover {
    color: var(--color-primary);
    transform: scale(1.1);
}

@media (max-width: 640px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>