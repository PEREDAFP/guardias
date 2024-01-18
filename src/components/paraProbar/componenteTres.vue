<template>
  <div>
    <h1>Componente 3 {{ login }}</h1>
  </div>
</template>

<script setup lang="ts">
//Prueba del composable que ha funcionado muy bien aquí. Hay más problemas cuando se trata de elementos
//que se cargan al iniciar la aplicación...ESTUDIEMOS.
import { useUsuario } from '@/stores/composables/useUsuario'
const { login } = useUsuario()
</script>

<style scoped></style>
