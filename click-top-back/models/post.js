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
            type: Sequelize.STRING,
            allowNull: false
        } ,
        instagran:{
            type: Sequelize.INTEGER,
            defaultValue: 0,
            
        } ,
        faceboock:{
            type: Sequelize.INTEGER,
            defaultValue: 0,
            
        }      
    }, {
        sequelize,
        modelName: 'post'
    });

    return Post;

}