
const {Sequelize,sequelize} = require('../data/index');


module.exports = (s,DataTypes)=>{

    class Category extends Sequelize.Model {}

    Category.init({
    
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,            
        },                      
    },{
        sequelize,
        modelName: 'categories'
      });
    

      Category.sync();

      return Category;

}



  

  


 