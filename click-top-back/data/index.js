const Sequelize = require('sequelize');

const database = process.env.DATA_BASE;
const host = process.env.DATA_BASE_HOST;
const username = process.env.DATA_BASE_USER;
const password = process.env.DATA_BASE_USER_PASSWORD;

console.log(process.env,host,database, username, password);



const sequelize = new Sequelize('clicktop', 'root', 'root', {
    host:host,    
    dialect: 'mysql',
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.sync();
  
  



module.exports = {sequelize, Sequelize}