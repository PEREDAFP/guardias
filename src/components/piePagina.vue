<script setup lang="ts">
interface Props {
  texto: string
}
const props = defineProps<Props>()
</script>

<template>
  <footer>{{ props.texto }}</footer>
</template>

<style scoped></style>
