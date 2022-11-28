import io, {server} from './socket.io'
import databaseConnection from  "./database";
import { PORT } from './config/server.conf';
import { DATABASE_URL } from "./config/server.conf";



const db = new databaseConnection('base de datos chat honduras',DATABASE_URL);
db.conectDataBase();
db.nameDataBase = 'Base de datos'
io.on('connection',socket => {
    console.log('Clients conected => ',io.engine.clientsCount);
    console.log('cocket id => ', socket.id );
// @ts-ignore
    socket.on("hi",(arg)=>{
        // console.log(arg);
        // socket.broadcast.emit('message','hola desde el otro cliente')
    })
    socket.on("disconnect",()=>{
        console.log('cliente desconectado')
    }) 
});

server.listen(PORT, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});
