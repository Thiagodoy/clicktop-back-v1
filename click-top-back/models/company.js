



const { Sequelize, sequelize} = require('../data/index');
const Telephone = sequelize.import('./telephone');
const Galery = sequelize.import('./galery');
const Post = sequelize.import('./post');
const Category = sequelize.import('./category');
const City = sequelize.import('./city');
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
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.STRING
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
        zip_code: {
            type: Sequelize.STRING,                        
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
        status: {
            type: Sequelize.STRING,
            defaultValue: 'ACTIVE'                        
        },
        main_products:{
            type: Sequelize.STRING,            
        },        
        opening_hours:{
            type: Sequelize.STRING,            
        },
        closing_hours:{
            type: Sequelize.STRING,            
        },
        link_whats:{
            type: Sequelize.STRING,            
        },
        keys:{
            type: Sequelize.STRING
        },
        latilong:{
            type: Sequelize.BLOB,            
        },
        point_text:{
            type: Sequelize.STRING,
        },
        plan: {
            type: Sequelize.INTEGER,                        
        },
    }, {
        sequelize,
        modelName: 'company'
    });


    Company.hasMany(Telephone); 
    Company.hasMany(Galery);
    Company.hasMany(Post);
    Company.belongsTo(Category,{foreignKey: 'id_category'});
    Company.belongsTo(City,{foreignKey: 'id_city'});

    return Company;

}