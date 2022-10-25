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
io.on('connection', (socket) => {
    console.log('nueva conexion de scoket io =>',socket.id)
});
server.listen(PORT, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});