const { sequelize,Sequelize} = require('../data');
const Op = Sequelize.Op;
const CityRepository = sequelize.import('../models/city');
const State = sequelize.import('../models/state');

class CityService {

    async list(request) {

        let name = request.query.name;
        let stateId = request.query.stateId;


        let opt = {};

       
        console.log(sequelize.models);

        if (!!name) {
            opt = {
                where: Sequelize.where(
                  Sequelize.fn("UPPER", Sequelize.col("name_city")),                  
                  {[Op.like] : `${name.toUpperCase()}%`},                 
                )
              };
            
        }


        if (!!stateId) {
            opt.where = {};
            opt.where.stateId = {
                [Op.eq]: stateId
            }
        }


      
        opt.include = [{model:State}];

        return await CityRepository.findAll(opt);
    }

    async findByPk(id){
        return await CityRepository.findByPk(id);
    }
}

module.exports = new CityService();