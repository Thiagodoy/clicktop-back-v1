
const { Sequelize, sequelize} = require('../data/index');
const City = sequelize.import('./city');
const Category = sequelize.import('./category');

module.exports = (s, DataTypes) => {

    class Tourism extends Sequelize.Model {}

    Tourism.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },  
        telephone_1: {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        telephone_2: {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        telephone_3: {
            type: Sequelize.STRING,
            allowNull: true
        },        
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        address_complement: {
            type: Sequelize.STRING,
            allowNull: true
        },
        address_zip_code: {
            type: Sequelize.STRING,
            allowNull: true
        },
        address_city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        opening_hours:{
            type: Sequelize.STRING,            
        },
        closing_hours:{
            type: Sequelize.STRING,            
        },        
        email: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        website:{
            type:Sequelize.STRING
        },
        facebook: {
            type: Sequelize.STRING,                        
        }, 
        instagran: {
            type: Sequelize.STRING,                        
        },   
        history: {
            type: Sequelize.STRING,                        
        }       
    }, {
        sequelize,
        modelName: 'tourism'
    });    

    Tourism.belongsTo(City,{foreignKey: 'id_city'});
    Tourism.belongsTo(Category,{foreignKey: 'id_category'});

    return Tourism;
}