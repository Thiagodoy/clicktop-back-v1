const {
    Sequelize,
    sequelize
} = require('../data/index');


const Company = sequelize.import('./company');

module.exports = (s, DataTypes) => {

    class User extends Sequelize.Model {}

    
    User.init({

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
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rg: {
            type: Sequelize.STRING,
            allowNull: false
        },        
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'ACTIVE'                        
        },
        profile: {
            type: Sequelize.STRING,                                   
        },
        celular: {
            type: Sequelize.STRING,
            allowNull: true
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'user'
    });

       //User.sync({force:true}); 
       User.hasOne(Company); 
       Company.belongsTo(User);
    
    return User;

}