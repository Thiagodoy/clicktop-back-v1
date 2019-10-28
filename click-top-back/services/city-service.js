const { sequelize,Sequelize} = require('../data');
const Op = Sequelize.Op;
const CityRepository = sequelize.import('../models/city');

class CityService {

    async list(request) {

        let name = request.query.name;
        let stateId = request.query.stateId;


        let opt = {};

        if (!!name) {
            opt.where = {};
            opt.where.name = {
                [Op.like]: `${name}%`
            }
        }


        if (!!stateId) {
            opt.where = {};
            opt.where.stateId = {
                [Op.eq]: stateId
            }
        }

        //opt.include = [{model:State}];

        return await CityRepository.findAll(opt);
    }
}

module.exports = new CityService();