//@ts-check able ts check for the js file
//@ts-nocheck disable ts check just for the entire file
//@ts-ignore disable ts check just for a line
comando para que analiza el codigon en js
# instalacion de TS
- npm install typescript --save-dev
- npx tsc --version   
<br>normalmente typescript no se trabaja como una dependencia global.<br>  
si no como una dependencia de proyecto.<br>
extra: gitignore.io pagina para crear un git ignore
extra2: ts node ejecuta codigo de ts desde backend

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

# enums
enum NOMBRE { 
    NOMBREROL = 1,
    NOMBREROL = 'VALOR',
}
- sirve para definir valor ya definidas, y para definir los valores se hace asi 

const variable: NOMBRE = NOMBRE.NOMBREROL;

# tupla 
 let variable : [tipo de dato 1 , tipo de datos 2 , ... ,  tipo de datos n]
 las tuplas definen el tamano de arreglo y el tipo de datos que debe de ser el indice 

# unknown type
- es parecido a any, pero su funcion da mas seguridad que any
# never type 
#  sobrecarga de funciones
- es simplemente definir el tipo de dato de salida  y de entrada de una funcion que acepta en una valor dos tipos o mas tipos de entrada y salida
-ejemplo =>
function parse (input: string ):string[];
function parse (input: string[] ):string;
function parse (input: string | string[]):string | string[]{
    ...codigo
}

# interface 
- interface permite herencia
interface uno {
    ...
}
interface dos extends uno {
    ...
}
# utility types
- link https://www.typescriptlang.org/docs/handbook/utility-types.html
## omit and pick type
- interface {
    id:string,
    name:string,
    place:string,
    hi:string,
}
- type CreateProduc = Omit<product,'id'|'name'>
- interface interfasedos extends Omit<product,id> {
...
}
- pick funciona de la misma forma solo que seleciono los campos que ocupo
## Partial and required and  readonly
- funcionan como lo de arriba 
- partial hace que todos los campos sean opcionales
- required hace todos los campos necesarios
interface nueva extends Partial<otraInterface>{
    ...
}
## ReadOnlyArray
- https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type