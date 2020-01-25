

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
const routerGalery =  require('./routes/galery-route');
const routerTourism =  require('./routes/tourism-route');
const routerVersion =  require('./routes/version-router');

const {sequelize} = require('./data/index');
const Company = sequelize.import('./models/company');
const State = sequelize.import('./models/state');
const City = sequelize.import('./models/city');
const Telephone = sequelize.import('./models/telephone');
const Post = sequelize.import('./models/post');
const Category = sequelize.import('./models/category');
const User = sequelize.import('./models/user');
const Tourism = sequelize.import('./models/tourism');
const bodyParser = require('body-parser');

const {importData} = require('./data/category-script');
//importData();

//sequelize.sync({force:true});
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))

//app.use(express.json());

//app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));//
//app.use(bodyParser({limit: '50mb'}));

// app.use('/',async(req,resp)=>{
//     resp.send("Bem vindo a api CLICK-TOP!")
// });

//Tourism.sync();

app.use('/api/company',routerCompany);
app.use('/api/user',routerUser);
app.use('/api/category',routerCategory);
app.use('/api/city', routerCity);
app.use('/api/state', routerState);
app.use('/api/post', routerPost);
app.use('/api/version', routerVersion);
app.use('/api/plan',routerPlan)
app.use('/api/galery',routerGalery);
app.use('/api/tourism',routerTourism);




//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
