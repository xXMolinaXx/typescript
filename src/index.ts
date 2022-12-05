import io, { server } from "./socket.io";
import databaseConnection from "./database";
import { PORT } from "./config/server.conf";
import { DATABASE_URL } from "./config/server.conf";
import { userLogged } from "./interface/users.interface";

const db = new databaseConnection("base de datos chat honduras", DATABASE_URL);
db.conectDataBase();
db.nameDataBase = "Base de datos";

let socketOnline: userLogged[] = [];

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    socketOnline = socketOnline.filter((el) => el.socketId !== socket.id);
    io.emit("peopleConnected", {
      amountConnected: io.engine.clientsCount,
      dataUserConnected: socketOnline,
    });
  });
  //@ts-ignore
  socketOnline.push(socket?.user);
  io.emit("peopleConnected", {
    amountConnected: io.engine.clientsCount,
    dataUserConnected: socketOnline,
  });
  /*
    // emision a un solo usuario
    socket.on('chating',message=>{
        console.log(message);
        const lastSocket:string = socketOnline[socketOnline.length-1];
        console.log(lastSocket);
        //hacer emit a un usuario especifico
        io.to(lastSocket).emit('receiveMessage',message);
        //broadcast emit
    });
    console.log('Clients conected => ',io.engine.clientsCount);
    console.log('socket id actual => ', socket.id );
    -- escucha el vento hi --
    socket.on("hi",(arg)=>{
        // console.log(arg);
        // socket.broadcast.emit('message','hola desde el otro cliente')
    })
    -- emision a todos --
    io.emit('everyone',socket.id+' se ha conectado');
    -- emision basica --
    socket.emit('login','hola dice el server')
    // on, once, off
    on escucha siempre que se emita
    socket.on('nombre',()=>{})
    once escucha solo una vez
    socket.once('nombre',()=>{})
    off apaga la funcion que esta activa a esta funcion de parametro se le pasa la misma funcion de la funcion activa 
    socket.off('nombre',()=>{})
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

   -- socket y creacion de salas --
   asi se crea una sala y se une a esa sala
   socket.join('room1') se puede colocar cualquier nombre
   io.to('room1').emit('send message','hola') enviar mensaje a la room1
   socket.leave('room1') saca de la sala room1
   
   
   -- namspaces --
   const socket = io(url/namespace); asi se crea un namespace client
   const newnamespace = io.of('namespace') asi se crea en el server el namespace
   newnamespace.on('conection', socket => {

   }) server
    */
});

server.listen(PORT, function (this: any) {
  console.log("http://localhost:" + this.address().port);
});
