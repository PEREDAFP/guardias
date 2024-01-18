import { useUsuarioStore } from '@/stores/usuario'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const usuario = useUsuarioStore()
const { conectado } = storeToRefs(usuario)
export const useUsuario = () => {
  const login = ref<boolean>(conectado.value)

  return {
    login
  }
}
