<script setup>
import linkedin from '/src/assets/icons8-linkedin.svg';
import github from '/src/assets/icons8-github.svg';

const fotoPerfil = "https://avatars.githubusercontent.com/u/25463245?v=4"; // Reemplaza con tu URL real
const tittle = "Guardini Philama";
const descripcion = "Tecnico Universitario en Programacion";
const residencia = "Cordoba Capital, Cordoba, Argentina";
const presentacion = "Hola, bienvenido a mi portafolio de proyectos. Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web.";
const redesSociales = [
    {id: 1, name: "LinkedIn", src: linkedin, url: 'https://www.linkedin.com/in/guardini-philama/'},
    {id: 2, name: "WhatsApp", src: 'https://img.icons8.com/color/48/whatsapp--v1.png', url: 'https://wa.me/5493512080323'},
    {id: 3, name: "GitHub", src: github, url: 'https://github.com/Philama'}     
];
const mail = 'Guardi2005@yahoo.fr';
</script>

<template>
  <section class="datos-personales">
       <div class="card">
               <img :src="fotoPerfil" alt="Foto de perfil" class="foto-perfil" />
               <h1>{{ tittle }}</h1>
               <h2>{{descripcion}}</h2>
               <p>{{presentacion}}</p>
               <ul class="container-lista">
                    <li v-for="red in redesSociales" :key="red.id">
                        <a :href="red.url" target="_blank" rel="noopener noreferrer">
                            <img class="icon-redsocial" :src="red.src" width="35rem" :alt="red.name">
                        </a>
                    </li>
               </ul>
               <h3>Contacto: {{mail}}</h3>
               <h4>{{residencia}}</h4>
         </div>
   </section>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 4rem;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: rgb(236, 236, 236);
}

p {
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 1rem;
  color: rgb(236, 236, 236);
}

.card {
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.foto-perfil {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.container-lista {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.icon-redsocial {
  width: 35px;
  height: 35px;
  align-items: center;
  background-color: rgb(21, 30, 70);
  border-radius: 50%;
  padding: 0px;
  margin: 5px;
  box-shadow: 0 0 10px hsla(204, 100%, 58%, 0.934);
}

.icon-redsocial:hover {
  background-color: hsla(204, 100%, 58%, 0.934);
  box-shadow: 0 0 10px rgba(77, 139, 255, 0.815);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
}
</style>