<script setup>
import { intereses } from '../data/data.js';
import FondoLava from './FondoLava.vue';
</script>

<template>
    <div class="intereses-contenedor">
        <FondoLava />
        <ul class="contenedor-lista">
            <li class="item" v-for="interes in intereses" :key="interes">
                {{ interes }}
            </li>
        </ul>
    </div>

</template>

<style scoped>
.intereses-contenedor {
    display: flex;
    position: relative;
    margin: 0 auto;
    max-width: 85%;
    padding: 1rem;
}

.contenedor-lista {
    list-style-type: none;
    padding: 1rem;
    margin-bottom: .5rem;
    color: var(--color-text);
    font-size: 1.4rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

.item {
    margin-bottom: 1rem;
}
</style>