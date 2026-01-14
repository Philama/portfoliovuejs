<script setup>
import { proyectos } from '../data/data.js';
</script>

<template>
    <!-- Aquí va el código HTML de la galería de proyectos -->
    <div class="galeria">
        <!-- Itera sobre cada proyecto en la lista de misProyectos -->
        <!--key es una propiedad especial que se utiliza para identificar de forma única cada elemento en una lista de Vue.js-->
        <li class="proyecto" v-for="proyecto in proyectos" :key="proyecto.id">
            <!-- Muestra la imagen del proyecto utilizando : que es una directiva de enlace de atributo en Vue.js -->
            <img :src="proyecto.src" :alt="proyecto.titlulo">
            <div class="proyecto-info">
                <!-- Muestra el título y la descripción del proyecto utilizando la interpolación de Vue.js -->
                <h3>{{ proyecto.titulo }}</h3>
                <p>{{ proyecto.descripcion }}</p>
                
            </div>
        </li>
    </div>
</template>

<style scoped>
/* Contenedor principal de la galería */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3 columnas adaptables */
    gap: 20px; /* Espaciado entre los elementos */
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #000211e5, #e5e7eb); /* Fondo degradado suave */
}

/* Contenedor individual de cada proyecto */
.proyecto {
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e7eb; /* Borde gris claro */
    border-radius: 10px;
    overflow: hidden;
    background-color: #ffffff; /* Fondo blanco */
    box-shadow: 0 4px 6px rgba(214, 214, 221, 0.1); /* Sombra ligera */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave */
}

/* Efecto hover para el contenedor del proyecto */
.proyecto:hover {
    transform: translateY(-10px); /* Eleva el proyecto al pasar el mouse */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
}

/* Imagen del proyecto */
.proyecto img {
    width: 100%;
    height: auto;
    display: block;
    border-bottom: 1px solid #e5e7eb; /* Línea divisoria entre la imagen y el contenido */
}

/* Contenedor de la información del proyecto */
.proyecto-info {
    padding: 15px;
    text-align: center;
}

/* Título del proyecto */
.proyecto-info h3 {
    font-size: 1.5rem;
    color: #1f2937; /* Gris oscuro */
    margin-bottom: 10px;
    font-weight: bold;
    transition: color 0.3s ease; /* Transición para el color */
}

/* Efecto hover para el título */
.proyecto-info h3:hover {
    color: #2563eb; /* Azul vibrante */
}

/* Descripción del proyecto */
.proyecto-info p {
    font-size: 1rem;
    color: #6b7280; /* Gris medio */
    line-height: 1.5;
    margin-bottom: 15px;
}

/* Botones y enlaces del proyecto */
.proyecto-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

/* Botón de "Ver Más" */
.proyecto-links .btn-ver-mas {
    background-color: #2563eb; /* Azul vibrante */
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Transición suave */
}

/* Efecto hover para el botón */
.proyecto-links .btn-ver-mas:hover {
    background-color: #1e40af; /* Azul más oscuro */
    transform: scale(1.05); /* Aumenta ligeramente el tamaño */
}

/* Enlace a GitHub */
.proyecto-links .github-link {
    color: #374151; /* Gris oscuro */
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease; /* Transición para el color */
}

/* Efecto hover para el enlace a GitHub */
.proyecto-links .github-link:hover {
    color: #2563eb; /* Azul vibrante */
    text-decoration: underline;
}
</style>