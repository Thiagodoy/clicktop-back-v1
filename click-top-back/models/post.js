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
            allowNull: false
        }, 
        image:{
            type: Sequelize.STRING,
            allowNull: false
        }      
    }, {
        sequelize,
        modelName: 'post'
    });

    return Post;

}