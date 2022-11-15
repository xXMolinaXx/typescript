import io, {server} from './socket.io'
import databaseConnection from  "./database";
import { PORT } from './config/server.conf';
const db = new databaseConnection('base de datos chat honduras');

io.on('connection', (socket) => {
// @ts-ignore
    socket.on("hi",(arg)=>{
        // console.log(arg);
        // socket.broadcast.emit('message','hola desde el otro cliente')
    })
});
server.listen(PORT, function (this:any) {
    console.log('http://localhost:'+this.address().port);
});
