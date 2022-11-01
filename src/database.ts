import { connect, } from 'mongoose'
import { DATABASE_URL } from './config/server.conf';

class MongoDB {
    constructor()  {
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
} 
export default MongoDB;