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

        let ids =  telephones.map( telephone => {            
           return telephone.id;
        }).join(',');

        const { results, metadata} = await sequelize.query(`DELETE FROM telephones where id in(${ids}`);               
    }

    async deleteByCompanyId(id){
       const { results, metadata} = await sequelize.query(`DELETE FROM telephones where companyId =${id}`);       
    }

}
module.exports = new TelefoneService();