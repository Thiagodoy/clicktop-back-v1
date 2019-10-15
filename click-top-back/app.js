const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();


const routerUser =  require('./routes/user');
const routerCompany =  require('./routes/company');
const routerCategory =  require('./routes/category');

const {sequelize} = require('./data/index');
const Company = sequelize.import('./models/company');
const State = sequelize.import('./models/state');
const City = sequelize.import('./models/city');
const Telephone = sequelize.import('./models/telephone');
const Post = sequelize.import('./models/post');
const User = sequelize.import('./models/user');
const Category = sequelize.import('./models/category');
const StateCitiesScript = require('./data/state-city-script');







//User.sync();
// Telephone.sync();
// User.sync();
// Category.sync();
sequelize.sync()














//mongoose.connect(process.env.URL_DATA_BASE,{useNewUrlParser:true},()=>console.log("DB is connected!"))

app.use(express.json());

app.use('/api/company',routerCompany);
app.use('/api/user',routerUser);
app.use('/api/category',routerCategory);


//app.get('/',(req,res)=> res.send('Olá'));

app.listen(3000,()=>console.log('Servidor no ar!'));
