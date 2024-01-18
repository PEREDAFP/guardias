import type { RouteLink } from '@/components/interfaces'
import type { Router } from 'vue-router' //Necesario para poder utilizar el tipo en el parámetro de getRoutes

export const getRoutes = (router: Router): RouteLink[] =>
  //Es necesario importar el router en el componente donde se vaya a utilizar
  {
    //Vamos a utilizar este array para incluir las rutas que no se muestran en el menú
    const rutasNoMenuPrincipal = [
      '/:pathMatch(.*)*',
      '/login',
      '/logout',
      '/createlogin',
      '/modificaUser'
    ]
    return router
      .getRoutes() //Este método nos devuelve, del router, un array con todas las rutas
      .map((el) => {
        return {
          path: el.path as string, //hacemos el cast porque el.path no contiene un string sino un RouterRecordName
          name: el.name as string,
          title: el.name as string
        }
      })
      .filter((el) => !rutasNoMenuPrincipal.includes(el.path))
  }
