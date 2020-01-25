const {
    sequelize,
    Sequelize
} = require('../data/index');
const Tourism = sequelize.import('../models/tourism');

class TourismService {

    async save(tourism) {
        let result = await Tourism.create(tourism);
        return result.id
    }

    async update(tourism){

        const id = tourism.id;
        const tourismEntity = await Tourism.findByPk(id);
        

        if(tourism.name && tourism.name != tourismEntity.name){
            tourismEntity.name = tourism.name;
        }

        if(tourism.name && tourism.name != tourismEntity.name){
            tourismEntity.name = tourism.name;
        }

        if(tourism.telephone_1 && tourism.telephone_1 != tourismEntity.telephone_1){
            tourismEntity.telephone_1 = tourism.telephone_1;            
        }

        if(tourism.telephone_2 && tourism.telephone_2 != tourismEntity.telephone_2){
            tourismEntity.telephone_2 = tourism.telephone_2;            
        }

        if(tourism.telephone_3 && tourism.telephone_3 != tourismEntity.telephone_3){
            tourismEntity.telephone_3 = tourism.telephone_3;            
        }

        if(tourism.address && tourism.address != tourismEntity.address){
            tourismEntity.address = tourism.address;            
        }

        if(tourism.address_complement && tourism.address_complement != tourismEntity.address_complement){
            tourismEntity.address_complement = tourism.address_complement;            
        }

        if(tourism.address_zip_code && tourism.address_zip_code != tourismEntity.address_zip_code){
            tourismEntity.address_zip_code = tourism.address_zip_code;            
        }

        if(tourism.address_city && tourism.address_city != tourismEntity.address_city){
            tourismEntity.address_city = tourism.address_city;            
        }

        if(tourism.opening_hours && tourism.opening_hours != tourismEntity.opening_hours){
            tourismEntity.opening_hours = tourism.opening_hours;            
        }

        if(tourism.closing_hours && tourism.closing_hours != tourismEntity.closing_hours){
            tourismEntity.closing_hours = tourism.closing_hours;            
        }

        if(tourism.email && tourism.email != tourismEntity.email){
            tourismEntity.email = tourism.email;            
        }

        if(tourism.image && tourism.image != tourismEntity.image){
            tourismEntity.image = tourism.image;            
        }

        if(tourism.website && tourism.website != tourismEntity.website){
            tourismEntity.website = tourism.website;            
        }

        if(tourism.instagran && tourism.instagran != tourismEntity.instagran){
            tourismEntity.instagran = tourism.instagran;            
        }

        if(tourism.facebook && tourism.facebook != tourismEntity.facebook){
            tourismEntity.facebook = tourism.facebook;            
        }

        if(tourism.history && tourism.history != tourismEntity.history){
            tourismEntity.history = tourism.history;            
        }
        
        if(tourism.id_city && tourism.id_city != tourismEntity.id_city){
            tourismEntity.id_city = tourism.id_city;            
        }
        await tourismEntity.save(); 
    }

    async list() {       
       return await Tourism.findAll({});
    }

    async delete(id){        
        const tourism = await Tourism.findByPk(id);      
        await tourism.destroy();
    }
}

module.exports = new TourismService();