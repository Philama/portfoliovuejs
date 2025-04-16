<script setup>
import proyecto1 from '/src/assets/restaurant.png';
import proyecto2 from '/src/assets/e-learning.png';
import proyecto3 from '/src/assets/blog.png';
import proyecto4 from '/src/assets/restaurant.png';

// Este componente muestra una galería de proyectos con información sobre cada proyecto
import { ref } from 'vue';
//.ref es una función que se utiliza para crear una referencia reactiva en Vue 3
var misProyectos = ref([]);
//.value es una propiedad que se utiliza para acceder al valor de una referencia reactiva en Vue 3
misProyectos.value = [
    {
        id: 1,
        src: proyecto1, // Imagen original
        titulo: "Aplicación de Reservas para Restaurantes (2023)",
        descripcion: "Creé una aplicación móvil con Flutter que permite a los usuarios reservar mesas en restaurantes locales."
    },
    {
        id: 2,
        src: proyecto2, // Imagen original
        titulo: "Plataforma de E-learning (2022)",
        descripcion: "Diseñé y desarrollé una plataforma de educación en línea utilizando Django y React. Incluye gestión de cursos y foros de discusión."
    },
    {
        id: 3,
        src: proyecto3, // Imagen original
        titulo: "Blog Personal con CMS (2022)",
        descripcion: "Construí un blog personal con un sistema de gestión de contenidos (CMS) personalizado en WordPress."
    },
    {
        id: 4,
        src: proyecto4, // Imagen original
        titulo: "Sistema de Gestión de Inventarios (2023)",
        descripcion: "Desarrollé un sistema de gestión de inventarios para pequeñas empresas utilizando Vue.js y Firebase."
    },
    {
        id: 5,
        src: "https://picsum.photos/300/200?random=5", // Imagen generada automáticamente
        titulo: "Aplicación de Clima en Tiempo Real (2023)",
        descripcion: "Creé una aplicación móvil que muestra el clima en tiempo real utilizando APIs públicas como OpenWeather."
    },
    {
        id: 6,
        src: "https://picsum.photos/300/200?random=6", // Imagen generada automáticamente
        titulo: "Tienda en Línea con Carrito de Compras (2022)",
        descripcion: "Diseñé una tienda en línea con Laravel y Vue.js que incluye un carrito de compras y pasarela de pagos."
    },
    {
        id: 7,
        src: "https://picsum.photos/300/200?random=7", // Imagen generada automáticamente
        titulo: "Sistema de Gestión de Tareas (2023)",
        descripcion: "Desarrollé un sistema de gestión de tareas colaborativo con Node.js y MongoDB. Incluye un tablero Kanban interactivo."
    },
    {
        id: 8,
        src: "https://picsum.photos/300/200?random=8", // Imagen generada automáticamente
        titulo: "Aplicación de Seguimiento de Hábitos (2023)",
        descripcion: "Construí una aplicación móvil para el seguimiento de hábitos diarios utilizando Flutter y Firebase."
    }
];
</script>

<template>
    <!-- Aquí va el código HTML de la galería de proyectos -->
    <div class="galeria">
        <!-- Itera sobre cada proyecto en la lista de misProyectos -->
        <!--key es una propiedad especial que se utiliza para identificar de forma única cada elemento en una lista de Vue.js-->
        <li class="proyecto" v-for="proyecto in misProyectos" :key="proyecto.id">
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