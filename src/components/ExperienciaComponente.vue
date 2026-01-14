<script setup>
import { experiencia } from '../data/data.js';
const titulo = 'Desarrollador Full Stack';
const fecha = 'Desde Enero 2022 - Actualidad';
</script>

<template>
    <div class="card">
        <h3 class="titulo">{{ titulo }}</h3>
        <p class="fecha">{{ fecha }}</p>
        <ul class="listado">
            <li class="item" v-for="item in experiencia" :key="item.id">
                <img class="image-svg" :src="item.src" width="45rem" :alt="item.parrafo">
                <p>{{ item.parrafo }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 15px;
    background-color: #ffffff; /* Fondo blanco para destacar el contenido */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
}

.titulo {
    font-size: 1.8rem;
    color: #1a73e8; /* Azul vibrante para el título */
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.fecha {
    font-size: 1.2rem;
    color: #5f6368; /* Gris neutro para la fecha */
    margin-bottom: 1.5rem;
}

.listado {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Espaciado entre los elementos */
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    background-color: #f1f3f4; /* Fondo gris claro para cada elemento */
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    transition: transform 0.2s, box-shadow 0.2s; /* Transición para hover */
}

.item:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
    background-color: #e8f0fe; /* Fondo azul claro al pasar el mouse */
}

.image-svg {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2)); /* Sombra para los iconos */
}

.item p {
    font-size: 1rem;
    color: #202124; /* Negro suave para el texto */
    line-height: 1.5;
}

.item p:hover {
    color: #1a73e8; /* Azul vibrante para el texto al pasar el mouse */
}
</style>