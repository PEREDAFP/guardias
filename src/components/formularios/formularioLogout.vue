<script setup lang="ts">
import '@/assets/formularios.css'
import { useUsuarioStore } from '@/stores/usuario'
import { useRouter } from 'vue-router'

const LOGOUT: string = import.meta.env.VITE_LOGOUT
const router = useRouter()

const useUsuario = useUsuarioStore()

const desconecta = () => {
  useUsuario.desconectaUsuario()
  router.push({ name: 'inicio' })
}
</script>

<template>
  <div class="login-container">
    <h2>{{ LOGOUT }}</h2>
    <form @submit.prevent="desconecta">
      <button class="create-user-button" type="submit">{{ LOGOUT }}</button>
    </form>
  </div>
</template>

<style scoped></style>
