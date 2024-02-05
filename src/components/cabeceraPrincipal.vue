<script setup lang="ts">
import menuPrincipal from '@/components/cabecera/menuPrincipal.vue'
import botoneraPrincipal from '@/components/cabecera/botoneraPrincipal.vue'
import logoPrincipal from '@/components/cabecera/logoPrincipal.vue'

//Para obtener las rutas del routevue
import type { RouteLink } from '@/components/interfaces'
import router from '@/router/index' //Recordemos que siempre hay que importar el router para poder trabajar con él
import { getRoutes } from '@/utils/getRoutes'

//Para comprobar si estamos o no conectados
import { useUsuarioStore } from '@/stores/usuario'
import { storeToRefs } from 'pinia'
const usuario = useUsuarioStore()
const { conectado } = storeToRefs(usuario)

const TextoCabecera: string = import.meta.env.VITE_CABECERA
const enlaces: RouteLink[] = getRoutes(router)

</script>
<template>
  <header>
    <logoPrincipal :cabecera="TextoCabecera" />
    <menuPrincipal :urls="enlaces" :conectado="conectado" />
    <botoneraPrincipal :conectado="conectado" />
  </header>
</template>

<style scoped></style>
