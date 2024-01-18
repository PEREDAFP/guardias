//En este fichero crearemos todos los interfaces TypeScript con los que vamos a trabajar

//Para pasar como prop al menú y poder trabajar con los diferentes router
export interface RouteLink {
  name: string
  path: string
  title: string
}

//Este interface es para las conexiones con la base de datos
export interface Usuario {
  id: number | null
  login: string
  nivel: number | null
  email: string
}

//Este interface es para grabar los log de cuando se ha producido un cambio y demás
export interface UsuarioLog {
  id: number | null
  login: string
  fecha: Date | null


}
