<script setup lang="ts">
import '@/assets/formularios.css'
</script>

<template>
  <div class="login-container">
    <h2>Acceso a la Aplicación</h2>
    <form @submit.prevent="">
      <input class="login-input" type="text" placeholder="Nombre de usuario" required />
      <input class="login-input" type="password" placeholder="Contraseña" required />
      <select class="login-input">
        <option value="" disabled selected>Selecciona un rol</option>
        <option value="profesor">Profesor</option>
        <option value="jefe-estudios">Jefe de Estudios</option>
        <option value="administrador">Administrador</option>
      </select>
      <label><input type="checkbox" /> Activo</label>
      <button class="login-button" type="submit">Iniciar sesión</button>
      <textarea
        class="login-input"
        style="height: 100px"
        placeholder="Añadir comentarios"
      ></textarea>
      <label for="email">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Ingresa tu correo electrónico"
        required
      />
    </form>
    <button
      class="create-user-button"
      onclick="alert('Funcionalidad de crear usuario en desarrollo')"
    >
      Crear usuario
    </button>
    <p style="text-align: center"><a href="#">¿Olvidaste la contraseña?</a></p>
  </div>
</template>

<style scoped></style>
