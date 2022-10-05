const express = require('express');
const app = express();
const user = require('./routes/users.routes')

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/users',user);


export default app;