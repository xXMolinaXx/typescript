import http from 'http'
import app from './app'
import { Server as SocketServer } from 'socket.io'
import databaseConnection from  "./database";
import { PORT } from './config/server.conf';
const db = new databaseConnection();

const server = http.createServer(app);
const io = new SocketServer(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});
//You can register several middleware functions, and they will be executed sequentially:
//Please make sure to call next() in any case. Otherwise, the connection will be 
//left hanging until it is closed after a given timeout.
io.use((socket,next)=>{
    console.log('mensaje del middleware');
    next();
})
io.on('connection', (socket) => {
    socket.on("hi",(arg)=>{
        console.log(arg);
        socket.broadcast.emit('message','hola desde el otro cliente')
    })
});
server.listen(PORT, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});
