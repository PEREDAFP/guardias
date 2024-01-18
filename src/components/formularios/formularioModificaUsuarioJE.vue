<script setup lang="ts">
import '@/assets/formularios.css'
</script>
<template>
  <div class="login-container">
    <h2>Usuario</h2>
    <form @submit.prevent="">
      <input class="login-input" type="text" placeholder="Nombre de usuario" required />
      <input class="login-input" type="password" placeholder="Contraseña" required />
      <input class="login-input" type="password" placeholder="Repite Contraseña" required />
      <input
        class="login-input"
        type="email"
        id="email"
        name="email"
        placeholder="Correo electrónico"
        required
      />
      <select class="login-input">
        <option value="" disabled selected>Selecciona un nivel</option>
        <option value="profesor">Profesor</option>
        <option value="jefe-estudios">Jefe de Estudios</option>
        <option value="administrador">Administrador</option>
      </select>
      <label><input type="checkbox" />Activo</label>
      <textarea class="login-input" style="height: 100px" placeholder="Observaciones"></textarea>
      <button class="login-button" type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>
<style scoped></style>
