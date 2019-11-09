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

}
module.exports = new TelefoneService();