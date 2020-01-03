const {sequelize} = require('.')
const Plan = sequelize.import('../models/plan');


async function importData (){

  for(let plan of data.plan){
      await Plan.create({name:plan.name});  
  }

}

const data =  {
    "plan": [
      {name:"Grátis"},
      {name:"Prata"},
      {name:"Prata Top"},
      {name:"Ouro"},
      {name:"Ouro Top"}
    ]
    
  };

  module.exports = {importData};