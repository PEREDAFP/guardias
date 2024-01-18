import { createRouter, createWebHistory } from 'vue-router'
import inicioComponente from '@/components/inicioComponente.vue'
import componenteUno from '@/components/paraProbar/componenteUno.vue'
import componenteDos from '@/components/paraProbar/componenteDos.vue'

/* con el componente tres haremos un lazy loaded
import componenteTres from '@/components/paraProbar/componenteTres.vue'
*/
import componenteCuatro from '@/components/paraProbar/componenteCuatro.vue'

//pinia viene ahora
//ojo que únicamente podemos utilizarlo después de cargar router. Si esto no es así nos
//aparecerá un error de que no hemos cargado pinia

import { useUsuarioStore } from '@/stores/usuario'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicioComponente
    },
    //Componentes y rutas de prueba y como ejercicio para los alumnos
    //Se accederá a ellos únicamente si se está conectado
    {
      path: '/uno',
      name: 'uno',
      component: componenteUno
    },
    {
      path: '/dos',
      name: 'dos',
      component: componenteDos
    },
    {
      path: '/tres',
      name: 'tres',
      component: () => import('@/components/paraProbar/componenteTres.vue')
    },
    {
      path: '/cuatro',
      name: 'cuatro',
      component: componenteCuatro
    },
    {
      path: '/cinco',
      name: 'cinco',
      component: () => import('@/components/paraProbar/componenteCinco.vue')
    },
    //Rutas de formulario de acceso, logout y creación de cuenta
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/formularios/formularioAcceso.vue')
    },
    //Solo si estamos conectados
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/components/formularios/formularioLogout.vue')
      //beforeEnter:[función que devuelva un boolean]
    },
    {
      path: '/createlogin',
      name: 'createlogin',
      component: () => import('@/components/formularios/formularioCreaCuenta.vue')
    },
    //Solo si estamos conectados
    {
      path: '/modificaUser',
      name: 'modificaUser',
      component: () => import('@/components/formularios/formularioModificaUsuario.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'inicio' })
    }
  ]
})

//OJO si se quiere trabajar con pinia y router hay que hacerlo así

router.beforeEach((to, from, next) => {
  //En esta tabla añadimos las rutas que pueden accederse sin estar conectados
  const rutasSinLogin:string[] = ['login', 'createlogin', 'inicio']
  const usuario = useUsuarioStore()
  const { conectado } = storeToRefs(usuario)
  if (!conectado.value) {
    //if (to.name == 'login' || to.name == 'createlogin' || to.name === 'inicio') next()
    if (rutasSinLogin.includes(to.name as string)) next()
  } else next() //Implementaremos los filtros a rutas de Jefatura de Estudios
})

export default router
