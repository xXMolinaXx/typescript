# POO
## indice
1. [ Description. ](#desc)
2. [ Clases con interfaces ](#POO_INTERFACES)
3. [ Singleton ](#SINGLETON)

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