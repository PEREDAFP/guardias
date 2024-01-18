<script setup lang="ts">
import cabeceraPrincipal from '@/components/cabeceraPrincipal.vue'
import piePagina from '@/components/piePagina.vue'
import { RouterView } from 'vue-router'
const TextoPiePagina: string = import.meta.env.VITE_PIE_PAGINA
</script>

<template>
  <cabeceraPrincipal />

  <RouterView />

  <piePagina :texto="TextoPiePagina" />
</template>

<style scoped></style>
