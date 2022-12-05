
import http from 'http'
import app from './app'
import { Server as SocketServer } from 'socket.io'

export const server = http.createServer(app);

const io = new SocketServer(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});
//You can register several middleware functions, and they will be executed sequentially:
//Please make sure to call next() in any case. Otherwise, the connection will be 
//left hanging until it is closed after a given timeout.
io.use((socket, next) => {
    const user = socket.handshake.auth;
    if (!user) {
      return next(new Error("no user logged"));
    }
// @ts-ignore
    socket.user = {...user,socketId:socket.id};
    next();
  });
export default io;
