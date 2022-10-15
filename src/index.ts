import app from './app'
import SocketIO from 'socket.io'
import databaseConnection from  "./database";
const db = new databaseConnection();

const server = app.listen(4000, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});
/*const io = SocketIO(server);
io.on('connection', () => {
    console.log('nueva conexion')
})*/
