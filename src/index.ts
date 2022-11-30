import io, {server} from './socket.io'
import databaseConnection from  "./database";
import { PORT } from './config/server.conf';
import { DATABASE_URL } from "./config/server.conf";



const db = new databaseConnection('base de datos chat honduras',DATABASE_URL);
db.conectDataBase();
db.nameDataBase = 'Base de datos'

const socketOnline: string[] = [];

io.on('connection',socket => {
    socketOnline.push(socket.id);
    console.log('hola socket.io')
    console.log('Clients conected => ',io.engine.clientsCount);
    console.log('cocket id => ', socket.id );
// @ts-ignore
    socket.on("hi",(arg)=>{
        // console.log(arg);
        // socket.broadcast.emit('message','hola desde el otro cliente')
    })
    // emision basica
    socket.emit('login','hola dice el server')
    socket.on("disconnect",()=>{
        console.log('cliente desconectado => ', socket.id )
    })
    //emision a todos
    io.emit('everyone',socket.id+' se ha conectado');
    // emision a un solo usuario
    socket.on('chating',message=>{
        console.log(message);
        const lastSocket:string = socketOnline[socketOnline.length-1];
        console.log(lastSocket);
        //hacer emit a un usuario especifico
        io.to(lastSocket).emit('receiveMessage',message);
        //broadcast emit
    });

    // on, once, off
    /*
    on escucha siempre que se emita
    socket.on('nombre',()=>{})
    once escucha solo una vez
    socket.once('nombre',()=>{})
    off apaga la funcion que esta activa a esta funcion de parametro se le pasa la misma funcion de la funcion activa 
    socket.off('nombre',()=>{})
    */
   const offEvent = ()=>{
    console.log('turning off ');
   }
   //EJEMPLO DE OFF
   socket.on('off',offEvent);
   socket.off('off',offEvent);
   // EJEMPLO DE OFF
   // emicion de broadcast
   io.emit('nombre','valor')
   // emite el valor en modo broadcast menos a mi
   socket.broadcast.emit('nombre',1)
});

server.listen(PORT, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});
