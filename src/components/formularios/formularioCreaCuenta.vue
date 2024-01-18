<script setup lang="ts">
import '@/assets/formularios.css'
</script>

<template>
  <div class="login-container">
    <h2>Creación de cuenta</h2>
    <form @submit.prevent="">
      <input class="login-input" type="text" placeholder="Nombre de usuario" required />
      <input class="login-input" type="password" placeholder="Contraseña" required />
      <input class="login-input" type="password" placeholder="Repite la contraseña" required />
      <input
        class="login-input"
        type="email"
        id="email"
        name="email"
        placeholder="Correo electrónico de recuperación"
        required
      />
      <button class="login-button" type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<style scoped></style>
