import { connect, } from 'mongoose'

class MongoDB {
    constructor()  {
        (async ()=>{
            try {
                const db = await connect('mongodb://localhost:27017/chatingHn')
                console.log('Conectado a la bd',db.connection.name);   
            } catch (error) {
                console.log('hola');
                console.log(error.message);
            }
        })()
    }
} 
export default MongoDB;