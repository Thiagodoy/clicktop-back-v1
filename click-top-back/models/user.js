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
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        photo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'ACTIVE'                        
        },
        profile: {
            type: Sequelize.STRING,
            defaultValue: 'USER'                        
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