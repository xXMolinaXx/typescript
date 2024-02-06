## indice
1. [ Descripcion ](#intro)
2. [ Ejecucion ](#ejecucion)
    - descripcion : esta indice de extra nos dirigen a tips o cosas que nos podrian ser utiles para ejecutar y desarollan proyectos en TS


<a name="intro"></a>

# Proyecto
- Proyecto creado con TS , este proyecto es un proyecto de mensajeria instantanea o socket io, pero igualmente se utilizara para hacer otra cosas en el proyecto como un modulo de tienda. 

<a name="ejecucion"></a>

# Ejecucion
- usar node 14.17.6
- npm i 
- el proyecto tiene un comando npm start, donde se utiliza nodemon par apoder ejecutar ts y poder escuchar a los cambios. Existe un archivo nodemon.json el cual ejecuta ts-node para poder ejecutar ts directamente sin transformarlo a js primero y poder ahorrarnos un paso de ejecucion
- crear archivo .env , hay un archivo de ejemplo .env.example de ahi puede copiar los key. pero si no creas el archivo .env por default se cargan src/config/server.conf.ts se cargan valores por defecto. usar esta configuracion para cargar valores por defecto
- instalar editor config en los plugin desde cualquier editor de codigo que se use


# RUTAS ABSOLUTAS
- en el archivo tsconfig agrega los paths para poder rutas absolutas si se crea un archivo
