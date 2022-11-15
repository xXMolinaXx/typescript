import { connect, } from 'mongoose'
import { DATABASE_URL } from './config/server.conf';

class MongoDB {
    public nameDB:string;
    constructor(nameDb:string)  {
        this.nameDB = nameDb;
        (async ()=>{
            try {
                const db = await connect(DATABASE_URL)
                console.log('Conectado a la bd',db.connection.name);   
            } catch (error:any) {
                console.log('hola');
                console.log(error.message);
            }
        })()
    }
    //TS METHODS
    public printName ():string{
        return this.nameDB
    }
} 
export default MongoDB;