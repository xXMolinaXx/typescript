import app from './app'
const SocketIO = require('socket.io');
const databaseConnection = require("./database");


const server = app.listen(4000, function () {
    console.log('Hola, servidor iniciado en =>', this.address().port);
});
const io = SocketIO(server);
io.on('connection', () => {
    console.log('nueva conexion')
})