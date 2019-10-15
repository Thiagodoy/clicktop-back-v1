const {
    Sequelize,
    sequelize
} = require('../data/index');




module.exports = (s, DataTypes) => {

    class City extends Sequelize.Model {}

    City.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING,            
                    
        },
      
    }, {
        sequelize,
        modelName: 'city'
    });

    

    return City;

}