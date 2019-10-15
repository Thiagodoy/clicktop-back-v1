const {
    Sequelize,
    sequelize
} = require('../data/index');




module.exports = (s, DataTypes) => {

    class Galery extends Sequelize.Model {}

    Galery.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },

        path: {
            type: Sequelize.STRING,    

        },
        type: {
            type: Sequelize.STRING,                                
            defaultValue:'OTHERS',            
        },
      
    }, {
        sequelize,
        modelName: 'galery'
    });

    

    return Galery;

}