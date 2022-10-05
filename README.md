# instalacion de TS
- npm install typescript --save-dev
- npx tsc --version   
<br>normalmente typescript no se trabaja como una dependencia global.<br>  
si no como una dependencia de proyecto.<br>
extra: gitignore.io pagina para crear un git ignore

# COMANDOS DE TS
- npx tsc <ARCHIVO> compila de ts a js 
ejemplo npx tsc src/*.ts --outDir dist --target es6
- flags : --outDir(la traduciones la guarda en una carpeta, en el ejemplo de arriba se le llamo dist), --target ( se seleciona la version de ecma script que por defecto es es3 y en el ejemplo selecionamos es6)
- npx tsc --init crea el archivo tsconfig.json
- npx tsc --watch va a estar leyendo mis archivos constantemente y va traspilarlos a js para una actualizacion en vivo
# ARCHIVO tsconfig.json
- se descomentan estos valores en el archivo 
- rootDir: cual es la ruta de los archivo que se compilaran
- outDir: carpeta donde se guardaran los archivo transpilados
## TIPOS DE DATOS 
- null
- string
- number 
- boolena 
- undefined
- array
- symbol 
- object
- function

# cast 
- let variable = ( otra_variable as tipodedato);
 ejemplo let numero = ( numero_string as number );
 ejemplo 2 let numero = (<number>numero_string);

# UNION
permite poder selecionar 2 o mas  tipos de datos sera una variable.  
ejemplo: let numero : (string | number);
#  Literal types
son valores predefinidos ejemplo
let size: 'M'|'L'