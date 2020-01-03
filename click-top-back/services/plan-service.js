const {
    sequelize,
    Sequelize
} = require('../data/index');
const Op = Sequelize.Op;


const Plan = sequelize.import('../models/plan');

class PlanService {

    async list() {
        return await Plan.findAll();
    }   
}
module.exports = new PlanService();