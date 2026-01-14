import { datosPersonales } from '../data/data.js';


<template>
  <section class="datos-personales">
    <div class="card">
      <img :src="datosPersonales.fotoPerfil" alt="Foto de perfil" class="foto-perfil" />
      <h1>{{ datosPersonales.nombre }}</h1>
      <h2>{{ datosPersonales.titulo }}</h2>
      <p class="descripcion">{{ datosPersonales.presentacion }}</p>

      <ul class="container-lista">
        <li v-for="red in datosPersonales.redesSociales" :key="red.id">
          <a :href="red.url" target="_blank" rel="noopener noreferrer">
            <img class="icon-redsocial" :src="red.src" width="35rem" :alt="red.name">
          </a>
        </li>
      </ul>

      <!-- Contact Button -->
      <div class="contact-container">
        <a :href="`mailto:${datosPersonales.email}`" class="btn-contacto">Contactar</a>
      </div>

      <div class="info-footer">
        <!-- <h3>{{ datosPersonales.email }}</h3> -->
        <h4>{{ datosPersonales.residencia }}</h4>
      </div>
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
  color: var(--color-text);
}

p {
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 1rem;
  color: var(--color-secondary);
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

.contact-container {
  margin: 20px 0;
  text-align: center;
}

.btn-contacto {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-block;
}

.btn-contacto:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.info-footer {
  margin-top: 1rem;
  color: #ccc;
}
</style>