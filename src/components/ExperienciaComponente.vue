<script setup>
defineProps({
  titulo: {
    type: String,
    default: 'Desarrollador Full Stack'
  },
  fecha: {
    type: String,
    default: 'Desde Enero 2022 - Actualidad'
  },
  experiencia: {
    type: Array,
    required: true
  }
});
</script>

<template>
    <div class="experience-card">
        <header class="experience-header">
          <h3 class="experience-title">{{ titulo }}</h3>
          <span class="experience-date">{{ fecha }}</span>
        </header>
        
        <ul class="experience-details">
            <li class="experience-item" v-for="item in experiencia" :key="item.id">
                <div class="item-icon-wrapper">
                  <img class="item-icon icon-flip" :src="item.src" :alt="item.parrafo">
                </div>
                <p class="item-text">{{ item.parrafo }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.experience-card {
    background: var(--color-surface);
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    transition: var(--transition-all);
}

.experience-card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--color-accent);
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.experience-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--color-primary);
    margin: 0;
}

.experience-date {
    background: var(--color-background);
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-accent);
    border: 1px solid var(--color-border);
}

.experience-details {
    display: grid;
    gap: 2rem;
    padding: 0;
    list-style: none;
}

.experience-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.item-icon-wrapper {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: var(--color-background);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    transition: var(--transition-all);
}

.experience-item:hover .item-icon-wrapper {
    background: var(--color-accent);
    border-color: var(--color-accent);
    transform: scale(1.1) rotate(-5deg);
}

.item-icon {
    width: 24px;
    height: 24px;
    transition: var(--transition-all);
}

.experience-item:hover .item-icon {
    filter: brightness(0) invert(1);
}

.item-text {
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
}

@media (max-width: 640px) {
    .experience-header {
        flex-direction: column;
    }
}
</style>