const {    sequelize,    Sequelize} = require('../data');
const Op = Sequelize.Op;
const TelephoneRepository = sequelize.import('../models/telephone');

class TelefoneService{

    async save(telefone){
        return TelephoneRepository.create(telefone);
    }

    async saveList(telephones){
        return TelephoneRepository.bulkCreate(telephones);
    }

    async deleteList(telephones){
        telephones.forEach( telephone => {            
            t = await TelefoneService.findByPk(telephone.id);
            await t.destroy();
        });
    }

    async deleteByCompanyId(id){
       const { results, metadata} = await sequelize.query(`DELETE FROM telephones where companyId =${id}`);       
    }

}
module.exports = new TelefoneService();