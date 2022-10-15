import express from 'express';
const app = express();
import user from './routes/users.routes';

import cors from 'cors';
app.use(express.json());
app.use(cors());
app.use('/users',user);


export default app;