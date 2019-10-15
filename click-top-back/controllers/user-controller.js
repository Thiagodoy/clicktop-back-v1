const {
    sequelize,
    Sequelize
} = require('../data/index');
const Op = Sequelize.Op;
const User = sequelize.import('../models/user');
const Company = sequelize.import('../models/company');


class UserController {

    async save(user) {
        let result = await User.create(user);
        return result;
    }

    async findByEmail(email) {

        let result = await User.findAll({
            where: {
                email: email
            }
        });

        return result;
    }

    async findById(id){
        let result = await User.findByPk(id);
        return result; 
    }

    async update(user){
        return await user.save();
    }

    async delete(id){
        let user = await this.findById(id);
        return await user.destroy();
    }

    async findByEmailOrName(map) {

        let opt = {};


        if (!!map.get('limit')) {
            opt.limit = Number.parseInt(map.get('limit'));
        }

        if (!!map.get('offset')) {
            opt.offset = Number.parseInt(map.get('offset'));
        }

        if (!!map.get('name')) {
            opt.where = {};
            opt.where.name = {
                [Op.like]: `${map.get('name').toUpperCase()}%`
            }

        } else if (!!map.get('email')) {
            opt.limit = map.get('email');
            opt.where = {};
            opt.where.email = {
                [Op.iLike]: `${map.get('email').toUpperCase()}`
            }
        }

        if(!!map.get('loadCompany') && map.get('loadCompany') == 'true' ){         
            opt.include = [{model:Company}]
        }

        let result =  await User.findAndCountAll(opt);
        if(result.count){
            result.page =  Math.ceil(result.count / opt.limit);
        }

        return  result;
    }



}

module.exports = new UserController();