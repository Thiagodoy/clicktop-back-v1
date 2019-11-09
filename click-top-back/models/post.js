const {
    Sequelize,
    sequelize
} = require('../data/index');


module.exports = (s, DataTypes) => {

    class Post extends Sequelize.Model {}

    Post.init({

        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        key: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '0',
        }, 
        image:{
            type: Sequelize.TEXT,
            allowNull: false
        } ,
        instagran:{
            type: Sequelize.INTEGER,
            defaultValue: 0,
            
        } ,
        faceboock:{
            type: Sequelize.INTEGER,
            defaultValue: 0,
            
        } ,
        date_init:{
            type: Sequelize.DATE,           
            allowNull: false
        },
        date_end:{
            type: Sequelize.DATE,
            allowNull: false            
        }              

    }, {
        sequelize,
        modelName: 'post'
    });

    return Post;

}