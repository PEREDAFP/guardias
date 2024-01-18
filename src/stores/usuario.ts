import { defineStore } from 'pinia'
import { ref } from 'vue'


import type { Usuario, UsuarioLog } from '@/components/interfaces'

export const useUsuarioStore = defineStore('usuario', () => {

  const conectado = ref<boolean>(false)

  const datosUsuario = ref<Usuario>({
    id: null,
    login: '',
    nivel: null,
    email:'',
  })

  const nivelUsuario = () => datosUsuario.value.nivel

  const conectaUsuario = (datos: Usuario, password: string):boolean => {
    
    if ( datos.login === 'pepe' && password === '1234' ) {//Esta línea la cambiaremos con la conexión a la API
      datosUsuario.value = datos
      conectado.value = true
      return true
    } 
    return false
    
  }

  const desconectaUsuario = () => {
    datosUsuario.value = {
      id: null,
      login: '',
      nivel: null,
      email:''
    }
    conectado.value = false
  }

  //Esta función se utilizará para grabar la información del usuario en los diferentes logs
  const informacionUsuarioLog = (): UsuarioLog => {
    return {
      id: datosUsuario.value.id,
      login: datosUsuario.value.login,
      fecha: new Date()
    }
  }
  const informacionUsuario = (): Usuario => {
    return {
      id: datosUsuario.value.id,
      login: datosUsuario.value.login,
      email: datosUsuario.value.email,
      nivel: datosUsuario.value.nivel,
    }
  }

  const modificaUsuario = (datos:Usuario, password:string) =>{
    
    datosUsuario.value = datos
    //El password se grabará en la API, bbdd o demás...por ahora solo lo mostramos
    console.log(password)
    //Tendremos que implementar la opción de grabarla en nuestra BBDD, API o similar
  }

  return {
    conectado,
    nivelUsuario,
    conectaUsuario,
    desconectaUsuario,
    informacionUsuarioLog,
    informacionUsuario,
    modificaUsuario,
  }
})
