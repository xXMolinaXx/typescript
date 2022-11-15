# POO
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
-podemos definir valores por defecto
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