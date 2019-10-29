const {    sequelize,    Sequelize} = require('../data');
const Op = Sequelize.Op;
const State = sequelize.import('../models/state');

class StateService {

    async list(request) {

        let name = request.query.name;

        let opt = {};

        if (!!name) {
            opt.where = {};
            opt.where.name = {
                [Op.like]: `${name}%`
            }
        }
        return await State.findAll(opt);        
    }

    async findByPk(id){
        return await State.findByPk(id);
    }
}
module.exports = new StateService();