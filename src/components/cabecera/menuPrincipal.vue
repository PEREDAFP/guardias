<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { RouteLink } from '@/components/interfaces'
const visible = ref<boolean>(false)

interface Props {
  urls: RouteLink[]
  conectado: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <nav>
    <div class="menu-icon" @click="visible = !visible">&#9776;</div>
    <ul class="menu-ul" :class="visible ? 'menu-ul--peque' : ''">
      <li v-for="url in props.urls" :key="url.name">
        <RouterLink :to="url.name" v-if="props.conectado">{{ url.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
