const { sequelize,Sequelize} = require('../data');
const Op = Sequelize.Op;
const GaleryRepository = sequelize.import('../models/galery');


class GaleryService{

    async save(galerys){
        return await GaleryRepository.bulkCreate(galerys);
    }

    async delete(id){
        const galery = await GaleryService.findByPk(id);
        return await galery.destroy();
    }

    async deleteByCompanyId(id){
        const { results, metadata} = await sequelize.query(`DELETE FROM galeries where companyId = ${id}`); 
    }
}
module.exports = new GaleryService();