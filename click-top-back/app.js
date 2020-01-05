

require('dotenv').config();


const express = require("express");
const app = express();
var cors = require('cors');

app.use(cors());


const routerUser =  require('./routes/user-route');
const routerCompany =  require('./routes/company-route');
const routerCategory =  require('./routes/category-route');
const routerCity =  require('./routes/city-route');
const routerState =  require('./routes/state-route');
const routerPost =  require('./routes/post-route');
const routerPlan =  require('./routes/plan-route');
const routerVersion =  require('./routes/version-router');

const {sequelize} = require('./data/index');
const Company = sequelize.import('./models/company');
const State = sequelize.import('./models/state');
const City = sequelize.import('./models/city');
const Telephone = sequelize.import('./models/telephone');
const Post = sequelize.import('./models/post');
const Category = sequelize.import('./models/category');
const User = sequelize.import('./models/user');

const {importData} = require('./data/category-script');
//importData();

//sequelize.sync({force:true});

app.use(express.json());

// app.use('/',async(req,resp)=>{
//     resp.send("Bem vindo a api CLICK-TOP!")
// });

app.use('/company',routerCompany);
app.use('/user',routerUser);
app.use('/category',routerCategory);
app.use('/city', routerCity);
app.use('/state', routerState);
app.use('/post', routerPost);
app.use('version', routerVersion);
app.use('/plan',routerPlan)


//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
