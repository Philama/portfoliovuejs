<script setup>
defineProps({
  habilidades: {
    type: Array,
    required: true
  }
});
</script>

<template>
    <div class="skills-section">
        <div v-for="categoria in habilidades" :key="categoria.id" class="skills-category">
            <h3 class="category-title">{{ categoria.nombre }}</h3>
            <ul class="skills-grid">
                <li v-for="item in categoria.habilidades" :key="item.id" class="skill-card">
                    <div class="skill-icon-wrapper">
                      <img v-if="categoria.nombre !== 'Idiomas'" :src="item.icono" :alt="item.nombre" class="skill-icon icon-flip">
                      <span v-else class="skill-emoji" aria-hidden="true">{{ item.icono }}</span>
                    </div>
                    <div class="skill-info">
                      <span class="skill-name">{{ item.nombre }}</span>
                      <span class="skill-level">{{ item.nivel }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.skills-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 2rem;
    padding-left: 1rem;
    border-left: 4px solid var(--color-accent);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    padding: 0;
    list-style: none;
}

.skill-card {
    background: var(--color-surface);
    padding: 1.25rem;
    border-radius: 16px;
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: var(--transition-all);
    box-shadow: var(--shadow-sm);
}

.skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent);
    box-shadow: var(--shadow-md);
}

.skill-icon-wrapper {
    width: 48px;
    height: 48px;
    background: var(--color-background);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: var(--transition-all);
}

.skill-card:hover .skill-icon-wrapper {
    background: var(--color-accent);
    color: white;
}

.skill-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
    transition: var(--transition-all);
}

.skill-card:hover .skill-icon {
    filter: brightness(0) invert(1);
}

.skill-emoji {
    font-size: 1.5rem;
}

.skill-info {
    display: flex;
    flex-direction: column;
}

.skill-name {
    font-weight: 600;
    color: var(--color-primary);
    font-size: 1rem;
}

.skill-level {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    font-weight: 500;
}

@media (max-width: 640px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>