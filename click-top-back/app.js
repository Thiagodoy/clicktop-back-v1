const express = require("express");
const app = express();
const routerUser =  require('./routes/user');
const dotenv = require('dotenv');

dotenv.config();


app.use(express.json());

app.use('/api/user',routerUser);


//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
