const {
    Sequelize,
    sequelize
} = require('../data/index');


//const State = sequelize.import('./state');



module.exports = (s, DataTypes) => {

    class City extends Sequelize.Model {}

    City.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        name_city: {
            type: Sequelize.STRING,            
                    
        },
      
    }, {
        sequelize,
        modelName: 'city'
    });

   // City.hasOne(State,{foreignKey:'stateId'});
   

    return City;

}