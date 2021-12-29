# Next.js y SQLite

Este respositorio contiene un proyecto básico de [Next.js](https://nextjs.org/) con la capacidad de obtener datos de una base de datos [SQLite](https://sqlite.org/).

Puedes leer un apunte con más detalle en [https://isfegu.netlify.app/nextjs-sqlite-ssg-getstaticprops](https://isfegu.netlify.app/nextjs-sqlite-ssg-getstaticprops).

## Requisitos

* [Node.js](https://nodejs.org) en su última versión LTS (en la creación de este repositorio 16.x)
* [Yarn](https://classic.yarnpkg.com/) en su última versión _classic_

## Ejecución

1. Descargar este repositorio
2. Instalar dependencias
```bash
nextjs-sqlite$ yarn
```
3. Ejecutar el proyecto
```bash
nextjs-sqlite$ yarn dev
```
4. Abrir el proyecto en un navegador [http://localhost:3000](http://localhost:3000)

5. Abrir la URL que obtiene datos de SQLite: [http://localhost:3000/distros](http://localhost:3000/distros)

## Dependencias

La versión de Next.js que se utiliza es la 12.

Para la conexión con SQLite se utiliza [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3).
