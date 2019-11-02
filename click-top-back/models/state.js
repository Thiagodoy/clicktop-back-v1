const {
    Sequelize,
    sequelize
} = require('../data/index');

const City = sequelize.import('./city');


module.exports = (s, DataTypes) => {

    class State extends Sequelize.Model {}

    State.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name_state: {
            type: Sequelize.STRING,            
            allowNull:false
        },
        initials: {
            type: Sequelize.STRING,            
            allowNull:false
        },
      
    }, {
        sequelize,
        modelName: 'state'
    });

    State.hasOne(City)
    City.belongsTo(State); 

    return State;

}