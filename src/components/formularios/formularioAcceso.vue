<script setup lang="ts">
import '@/assets/formularios.css'

//Textos
const USUARIOINCORRECTO: string = import.meta.env.VITE_USUARIOINCORRECTO
const INPUTUSUARIO: string = import.meta.env.VITE_INPUTUSUARIO
const INPUTPASSWORD: string = import.meta.env.VITE_INPUTPASSWORD
const CONEXION: string = import.meta.env.VITE_LOGIN
const INICIAR_SESION: string = import.meta.env.VITE_BOTON_INICIAR_SESION


//Eliminaremos este texto cuando obtengamos el email de la base de datos. Es para hacer prueba con modificación
const EMAIL: string = import.meta.env.VITE_EMAIL


import { useUsuarioStore } from '@/stores/usuario'
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import type { Usuario } from '@/components/interfaces'
import { useRouter } from 'vue-router'

const router = useRouter()

const useUsuario = useUsuarioStore()

const usuario:Usuario = reactive({
  id: null,
  login :'',
  nivel: 0,
  email:'',
})

//El password lo "descolgamos" del objeto usuario para evitar que se encuentre almacenado en algún sitio
//y permita vulnerabilidades
const password:Ref<string> = ref("")
const mensaje:Ref<string> = ref("")

const conecta = () => {
  if (useUsuario.conectaUsuario(usuario, password.value)){
    router.push({ name: 'inicio' })
  }else {
    mensaje.value = USUARIOINCORRECTO
  }
  
}  
</script>

<template>
  <div class="login-container">
    <h2>{{ CONEXION }}</h2>
    <form @submit.prevent="conecta()">                                              
      <input v-model = "usuario.login" class="login-input" type="text" :placeholder="INPUTUSUARIO" :required="true" />
      <input v-model = "password" class="login-input" type="password" :placeholder="INPUTPASSWORD" :required="true" />
      <!--Eliminaremos esto al obtener el email de la BBDD. Es para probar con modificación-->
      <input
        v-model="usuario.email"
        class="login-input"
        type="email"
        id="email"
        name="email"
        :placeholder="EMAIL"
        :required="true"
      />
      <button class="login-button" type="submit">{{ INICIAR_SESION }}</button>
    </form>
    <h3 class="error"> {{ mensaje }}</h3>
  </div>
</template>

<style scoped></style>
