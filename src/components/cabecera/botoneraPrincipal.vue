<script setup lang="ts">
//import { toRefs } from 'vue'
//Textos obtenidos del .env
const LOGIN: string = import.meta.env.VITE_LOGIN
const LOGOUT: string = import.meta.env.VITE_LOGOUT
const CREATE_USUARIO: string = import.meta.env.VITE_CREATE_USUARIO
const MODIFICA_USUARIO: string  = import.meta.env.VITE_MODIFICA_USUARIO

interface Props {
  conectado: boolean
}
const conectado = defineProps<Props>()
</script>

<template>
  <div v-if="!conectado">
    <!-- Si no estamos conectados -->
    <button id="login-button">
      <RouterLink to="login"> {{ LOGIN }} </RouterLink>
    </button>
    <button id="logout-button">
      <RouterLink to="createlogin"> {{ CREATE_USUARIO }}</RouterLink>
    </button>
  </div>
  <div v-else>
    <!-- Si no estamos conectados -->
    <button id="login-button">
      <RouterLink to="modificaUser">{{ MODIFICA_USUARIO }}</RouterLink>
    </button>
    <button id="logout-button">
      <RouterLink to="logout">{{ LOGOUT }} </RouterLink>
    </button>
  </div>
</template>

<style scoped></style>
