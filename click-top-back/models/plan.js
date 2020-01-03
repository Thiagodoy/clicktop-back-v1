



const { Sequelize, sequelize} = require('../data/index');

module.exports = (s, DataTypes) => {

    class Plan extends Sequelize.Model {}

    Plan.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },      
    }, {
        sequelize,
        modelName: 'plan'
    });    

    return Plan;
}