const {
    Sequelize,
    sequelize
} = require('../data/index');


module.exports = (s, DataTypes) => {

    class Profile extends Sequelize.Model {}

    Profile.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        key: {
            type: Sequelize.STRING,
            allowNull: false
        },             
    }, {
        sequelize,
        modelName: 'profile'
    });

    return Profile;

}