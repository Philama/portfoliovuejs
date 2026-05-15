<script setup>
defineProps({
  intereses: {
    type: Array,
    required: true
  }
});
</script>

<template>
    <div class="interests-card">
        <ul class="interests-list">
            <li class="interest-item" v-for="(interes, index) in intereses" :key="index">
                <span class="interest-bullet">✦</span>
                <p class="interest-text">{{ interes }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.interests-card {
    background: var(--color-surface);
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
}

.interests-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    list-style: none;
}

.interest-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.interest-bullet {
    color: var(--color-accent);
    font-size: 1.25rem;
    line-height: 1.2;
    flex-shrink: 0;
}

.interest-text {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 640px) {
    .interests-card {
        padding: 1.5rem;
    }
}
</style>