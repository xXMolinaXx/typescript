import express from 'express';
import path from 'path';
const app = express();
import user from './routes/users.routes';
import message from './routes/message.routes'
import cors from 'cors';
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.json());
app.use(cors());
app.use('/users',user);
app.use('/message',message);

export default app;