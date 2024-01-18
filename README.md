# Guardias

Proyecto de programa de gestión de guardias

- Creado con VUE3 js
- TypeScript..primer proyecto...
- El componente botonera obtiene las rutas directamente del Router que le definamos.


## Recomiendo, si estás trabajando con VisualStudio Code

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)  + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## la base de datos, de momento, se trabaja con json-server

```
npm install json-server
```
## Una vez instalado
``
json-server db/bbdd.json
```

## Configuración del proyecto

```
npm install

```

### Compilar y ejecutar en desarrollo

```
npm run dev
```

### Para pasar a producción

```
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/) (en desarrollo)

```
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/) (en desarrollo)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
