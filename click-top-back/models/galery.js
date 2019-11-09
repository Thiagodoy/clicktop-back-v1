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

        image: {
            type: Sequelize.TEXT,    

        },
        type: {
            type: Sequelize.STRING,                                                        
        },
      
    }, {
        sequelize,
        modelName: 'galery'
    });

    

    return Galery;

}