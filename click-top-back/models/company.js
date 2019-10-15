



const { Sequelize, sequelize} = require('../data/index');
const Telephone = sequelize.import('./telephone');
const Galery = sequelize.import('./galery');
//const User = sequelize.import('./user');

module.exports = (s, DataTypes) => {

    class Company extends Sequelize.Model {}

    Company.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.BIGINT
        },
        longitude: {
            type: Sequelize.BIGINT
        },
        description: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },       
        address_neighborhood: {
            type: Sequelize.STRING,                        
        },
        address_complement: {
            type: Sequelize.STRING,                        
        },
        address_number: {
            type: Sequelize.INTEGER,                        
        }, 

    }, {
        sequelize,
        modelName: 'company'
    });


    Company.hasMany(Telephone); 
    Company.hasMany(Galery);
    //Company.hasOne(User);

    return Company;

}