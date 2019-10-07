const express = require("express");
const app = express();
const routerUser =  require('./routes/user');
const routerCompany =  require('./routes/company');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


mongoose.connect(process.env.URL_DATA_BASE,{useNewUrlParser:true},()=>console.log("DB is connected!"))

app.use(express.json());

app.use('/api/company',routerCompany);
app.use('/api/user',routerUser);


//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
