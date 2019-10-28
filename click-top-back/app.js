

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
const routerVersion =  require('./routes/version-router');

const {sequelize} = require('./data/index');
const Company = sequelize.import('./models/company');
const State = sequelize.import('./models/state');
const City = sequelize.import('./models/city');
const Telephone = sequelize.import('./models/telephone');
const Post = sequelize.import('./models/post');
const Category = sequelize.import('./models/category');
const User = sequelize.import('./models/user');

//const {importData} = require('./data/state-city-script');
//const {importData} = require('./data/category-script');

//importData();

//sequelize.sync({force:true})













//mongoose.connect(process.env.URL_DATA_BASE,{useNewUrlParser:true},()=>console.log("DB is connected!"))

app.use(express.json());

app.use('/api/company',routerCompany);
app.use('/api/user',routerUser);
app.use('/api/category',routerCategory);
app.use('/api/city', routerCity);
app.use('/api/state', routerState);
app.use('/api/post', routerPost);
app.use('/api/version', routerVersion);


//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
