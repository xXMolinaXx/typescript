import express from 'express';
const app = express();
import user from './routes/users.routes';
import message from './routes/message.routes'
import cors from 'cors';
app.use(express.json());
app.use(cors());
app.use('/users',user);
app.use('/message',message);

export default app;