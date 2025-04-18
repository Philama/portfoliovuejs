<script setup>
import icono1 from '/src/assets/ventas.svg';
import icono2 from '/src/assets/ecomerce.svg';
import icono3 from '/src/assets/configuracion.svg';
import icono4 from '/src/assets/uiux.svg';
import icono5 from '/src/assets/watch.svg';

import { ref } from 'vue';
const titulo = 'Desarrollador Full Stack';
const fecha = 'Desde Enero 2022 - Actualidad';
const experiencias = ref([
    { id: 1, src: icono1, parrafo: 'Lideré un equipo de 5 desarrolladores en la creación de una plataforma de comercio electrónico que incrementó las ventas en un 35% durante el primer año.' },
    { id: 2, src: icono2, parrafo: 'Diseñé y desarrollé aplicaciones web utilizando Node.js, React y MongoDB, logrando reducir el tiempo de carga de las páginas en un 50%.' },
    { id: 3, src: icono3, parrafo: 'Implementé soluciones de autenticación y autorización, mejorando la seguridad del sitio web y reduciendo los intentos de acceso no autorizado en un 20%.' },
    { id: 4, src: icono4, parrafo: 'Colaboré con diseñadores de UX/UI para crear interfaces de usuario atractivas y fáciles de usar, aumentando la satisfacción del cliente en un 15%.' },
    { id: 5, src: icono5, parrafo: 'Automaticé procesos de despliegue continuo utilizando Jenkins y Docker, reduciendo los tiempos de despliegue en un 40%.' },
]);
</script>

<template>
    <div class="card">
        <h3 class="titulo">{{ titulo }}</h3>
        <p class="fecha">{{ fecha }}</p>
        <ul class="listado">
            <li class="item" v-for="experiencia in experiencias" :key="experiencia.id">
                <img class="image-svg" :src="experiencia.src" width="45rem" :alt="experiencia.parrafo">
                <p>{{ experiencia.parrafo }}</p>
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