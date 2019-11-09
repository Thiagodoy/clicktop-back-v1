const {sequelize,Sequelize} = require('../data');



module.exports = (s,DataTypes)=>{

    class Telephone extends Sequelize.Model {}

    Telephone.init({
    
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        number: {
            type: Sequelize.STRING,
            allowNull: false,            
        },       
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'HOME'
        },           
    },{
        sequelize,
        modelName: 'telephone'
      });
    
      
      //Telephone.sync({force:true });

      return Telephone;

}

