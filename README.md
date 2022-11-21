## indice
1. [ Instalacion ](#intro)
2. [ tsconfig.json ](#tsconfig)
2. [ interfaces ](#interfaces)
3. [ POO: seccion avanzada ](#desc)
4. [ Clases con interfaces ](#POO_INTERFACES)
5. [ Singleton ](#SINGLETON)
6. [ Extras ](#extras)
    - descripcion : esta indice de extra nos dirigen a tips o cosas que nos podrian ser utiles para ejecutar y desarollan proyectos en TS


<a name="intro"></a>

# instalacion de TS
- **npm install typescript --save-dev**
- **npx tsc --version**   
<p>normalmente typescript no se trabaja como una dependencia global. si no como una dependencia de proyecto.<p>

# COMANDOS DE TS
- **npx tsc** <ARCHIVO> compila de ts a js 
ejemplo npx tsc src/*.ts --outDir dist --target es6
- flags : --outDir(la traduciones la guarda en una carpeta, en el ejemplo de arriba se le llamo dist), --target ( se seleciona la version de ecma script que por defecto es es3 y en el ejemplo selecionamos es6)
- **npx tsc --init** crea el archivo tsconfig.json
- **npx tsc --watch** va a estar leyendo mis archivos constantemente y va traspilarlos a js para una actualizacion en vivo
extra: transpilar de ts a js solo ocupamos ejecutar **npx tsc** ,esto depende si en el archivo tsconfig.json ya esta definido esta instruciones

<a name="tsconfig"></a>

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

<a name="interfaces"></a>

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


# POO
## indice


***
## Indice especial
- temas importantes
## README BASADO EN POO
- se debe iniciliar un valor a fuerza
```
class name {
    parametro1:tipo=valor
    constructor(parametro1:tipo){
        this.parametro1=parametro1
    }
}
const variable = new name(valor)
```

## metodos de POO

<a name="desc"></a>

```
<nombre>(parametors):<tipo de retorno>{

}
```
## tipos de acceos
### acceso public
- el acceso por defecto es public se puede escribir la palabra publi, pero si no se escribe es public por defecto
```
class name {
    public parametro1:tipo=valor
    constructor(parametro1:tipo){
        this.parametro1=parametro1
    }
    public metodo():<tipo>{

    }
}
const variable = new name(valor)
```
### acceso private
- private debe definirce explicitamente
```
class MongoDB {
    private nameDB:string;
    constructor(nameDb:string)  {
        this.nameDB = nameDb;
    }
    printName ():string{
        return this.nameDB
    }
} 
```
### optimizacion de constructor
- podemos definir valores por defecto
- debe de ir explicitamente el acceso del tipo para poder usar este tipo de optimizacion de codigo
```
constructor ( public year: number, private day:string){}
//is the same as this
year: string
day:string
constructor ( year: number,day:string){
    this.year = year
    ...
}
constructor ( year: number = 1,day:string){
    this.year = year
    ...
}
```
## get and set
```
get <name>(){
    return value
}

my instance
console.log(instance.day)
```

- set funciona de la misma forma solo que con la palabra set

## herencia
- extends es la palara para usar herencia
- en el contructor usamos super() pasamos los valores
## acces protected
- tipo de datos protected es como private solo que este permite que los hijos que hereden la clases puedan acceder a este valor
## interface con clases

<a name="POO_INTERFACES"></a>

- se usa la palabra extend y despues el nombre del interface 

## SINGLETON: constructor privado

<a name="SINGLETON"></a>

- singleton nos protege de crear multiples instancias de un mismo objeto, solo creamos una sola instancia que se comparte
- se cambia el acceso del constructor a private
- **investigar mas**


<a name="extras"></a>

## extras

- [gitignore.io](https://www.toptal.com/developers/gitignore/) pagina para crear un git ignore solo se especifica lenguajes de programacion, entorno de desarollo y SO y te genera un gitignore 
- [ts node](https://www.npmjs.com/package/ts-node) paquete de npm que me permite ejecutar directamente typescript sin necesidad de transpilar los archivos a js
- //@ts-check, able ts check for the js file permite que ts revise los archivos js y que no tegnan errors
- //@ts-nocheck, disable ts check just for the entire file
- //@ts-ignore, disable ts check just for a line
- [quicktype](https://quicktype.io/) pagina web para crear un type de un json 