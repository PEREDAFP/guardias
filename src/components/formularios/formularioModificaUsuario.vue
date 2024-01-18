<script setup lang="ts">
import '@/assets/formularios.css'

import { useUsuarioStore } from '@/stores/usuario'
import { reactive, ref } from 'vue'
import type { Usuario } from '@/components/interfaces'
import type { Ref } from 'vue'

const useUsuario = useUsuarioStore()

const usuario:Usuario = reactive(useUsuario.informacionUsuario())

const password:Ref<string>=ref("")
const repassword:Ref<string>=ref("")


//Textos
const INPUTUSUARIO: string = import.meta.env.VITE_INPUTUSUARIO
const INPUTPASSWORD: string = import.meta.env.VITE_INPUTPASSWORD
const INPUTREPITEPASSWORD: string = import.meta.env.VITE_INPUTREPITEPASSWORD
const EMAIL: string = import.meta.env.VITE_EMAIL
const SELECCIONANIVEL: string = import.meta.env.VITE_SELECCIONANIVEL
const BOTONGUARDAR: string = import.meta.env.VITE_BOTON_GUARDAR
const USUARIO: string = import.meta.env.VITE_USUARIO
const PASSWORD_DEBEN_SER_IGUALES = import.meta.env.VITE_PASSWORD_DEBEN_SER_IGUALES



</script>
<template>
  <div class="login-container">
    <h2>{{ USUARIO }}</h2>
    <form @submit.prevent="useUsuario.modificaUsuario(usuario,password)">
      <input v-model="usuario.login" class="login-input" type="text" :placeholder="INPUTUSUARIO" :required="true" />
      <input v-model="password" class="login-input" type="password" :placeholder="INPUTPASSWORD" :required="true" />
      <input v-model="repassword" class="login-input" type="password" :placeholder="INPUTREPITEPASSWORD" :required="true" />
      <input
        v-model="usuario.email"
        class="login-input"
        type="email"
        id="email"
        name="email"
        :placeholder="EMAIL"
        :required="true"
      />
      <!-- La lista de niveles la obtendremos de la BBDD, CRUD, API o similar-->
      <select class="login-input">
        <option value="" disabled selected>{{ SELECCIONANIVEL }}</option>
        <option value="profesor">Profesor</option>
        <option value="jefe-estudios">Jefe de Estudios</option>
        <option value="administrador">Administrador</option>
      </select>
      <button v-if="password === repassword" button class="login-button" type="submit">{{ BOTONGUARDAR }}</button>
      <h2 v-else>{{ PASSWORD_DEBEN_SER_IGUALES }}</h2>
    </form>
    <h1>{{ usuario.nivel }}</h1>
  
  </div>
</template>
<style scoped></style>
