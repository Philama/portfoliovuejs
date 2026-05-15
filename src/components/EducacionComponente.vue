<script setup>
defineProps({
  educacion: {
    type: Array,
    required: true
  },
  fechaColor: {
    type: Array,
    default: () => [
      { color: '#0d9488' }, // Teal 600
      { color: '#0f172a' }, // Slate 900
      { color: '#334155' }, // Slate 700
      { color: '#45b7d1' }, 
    ]
  }
});
</script>

<template>
    <ul class="timeline">
        <li v-for="(item, index) in educacion" :key="index" 
            :style="{ '--marker-color': fechaColor[index % fechaColor.length].color, '--index': index }"
            class="timeline-item">
            
            <div class="timeline-marker">
              <span class="timeline-date">{{ item.fecha }}</span>
            </div>
            
            <div class="timeline-content">
              <h3 class="timeline-title">
                <a v-if="item.enlace" :href="item.enlace" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
                <span v-else>{{ item.title }}</span>
              </h3>
              <p class="timeline-description">{{ item.descripcion }}</p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.timeline {
    position: relative;
    max-width: 800px;
    margin: 2rem auto;
    padding: 0;
    list-style: none;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: var(--color-border);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-left: 60px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.6s ease-out forwards;
    animation-delay: calc(var(--index) * 0.1s);
}

.timeline-marker {
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    height: 42px;
    background: var(--color-surface);
    border: 3px solid var(--marker-color);
    border-radius: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm);
}

.timeline-date {
    display: none; /* Mobile optimization */
}

.timeline-content {
    background: var(--color-surface);
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-all);
}

.timeline-item:hover .timeline-content {
    transform: translateX(8px);
    border-color: var(--marker-color);
    box-shadow: var(--shadow-md);
}

.timeline-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
}

.timeline-title a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
}

.timeline-title a:hover {
    color: var(--color-accent);
}

.timeline-description {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
}

@media (min-width: 768px) {
    .timeline::before {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .timeline-item {
        width: 50%;
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 4rem;
    }
    
    .timeline-item:nth-child(odd) {
        left: 0;
        text-align: right;
    }
    
    .timeline-item:nth-child(even) {
        left: 50%;
        text-align: left;
    }
    
    .timeline-marker {
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-item:nth-child(odd) .timeline-marker {
        left: 100%;
    }
    
    .timeline-item:nth-child(even) .timeline-marker {
        left: 0;
    }

    .timeline-item:hover .timeline-content {
        transform: scale(1.02);
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>