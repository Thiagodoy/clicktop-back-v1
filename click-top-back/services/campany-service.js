const {
    sequelize,
    Sequelize
} = require('../data/index');
const Op = Sequelize.Op;

const UserService = require('../services/user-service');
const StateService = require('../services/state-service');
const CityService = require('../services/city-service');
const TelephoneService = require('../services/telephone-service');
const GaleryService = require('../services/galery-service');
const ClientGoogleRest = require('../client/client-rest');
const Company = sequelize.import('../models/company');
const Galery = sequelize.import('../models/galery');
const Telephone = sequelize.import('../models/telephone');




class CompanyService {

    async save(request, response) {

        let user = undefined;
        let tempPhones = undefined;        
        let temGalery = undefined

        try{

            if (request.body.user) {
                user = await UserService.save(request,request.body.user)
                delete request.body.user;
            }
    
            
            if(request.body.telephones){
                tempPhones = request.body.telephones;
                delete request.body.telephones;
            }   
            
            if(request.body.galery){
                temGalery = request.body.galery;
                delete request.body.galery;
            }
    
    
            let tempCompany = {
                ...request.body
            };
    
            delete tempCompany.city;
            delete tempCompany.category;

            if (user) {
                tempCompany.userId = user.id;
            }
    
        
            let resultCity = await CityService.findByPk(parseInt(tempCompany.id_city));
            let resultState = await StateService.findByPk(resultCity.stateId);

            tempCompany.id_category = parseInt(tempCompany.id_category);
    
            //company.address} ${company.address_number} ${company.city} ${company.state}`
    
            // let req = {
            //     address: tempCompany.address,
            //     address_number: tempCompany.address_number,
            //     city: resultCity.name_city,
            //     state: resultState.initials
            // }
    
            // let resultLocation = await this.getLocation(req);
    
            // tempCompany.latitude = resultLocation.lat;
            // tempCompany.longitude = resultLocation.lng;       
    
            
            let resultCompany =  await Company.create(tempCompany);
    
            if(tempPhones){
                tempPhones.forEach(t=>{
                    t.companyId = resultCompany.id;
                });
    
                let resultPhones = await TelephoneService.saveList(tempPhones);
                
            }
    
            if(temGalery){
                temGalery.forEach(g=>{
                    g.companyId = resultCompany.id;
                });
                
                let resultGalery = await GaleryService.save(temGalery);
                
            }
    
    
            return resultCompany;
    

        }catch(error){

            if(user){
                await UserService.delete(user);
            }

            throw error;
        }

        
    }

    

    async getLocation(request){

        let result  = await ClientGoogleRest.getAddress(request);
        
        if(result.length == 1){

            let lat = result[0].geometry.location.lat;
            let lng = result[0].geometry.location.lng;
            return {lat,lng};
        }else{
            let lat = 0;
            let lng = 0;
            return {lat,lng};
        }



    }

    async list(request) {

        let limit = request.query.limit ? parseInt(request.query.limit) : 10
        let offset = request.query.offset ? parseInt(request.query.offset) : 1

        let include = [];

        if(request.query.galery){
            include.push({ model: Galery });
        }

        if(request.query.telephone){
            include.push({ model: Telephone });
        }

        if (!!request.query.id) {
            return await Company.findByPk(request.query.id,{include:include});
        }

       

        if (!!request.query.name) {
            return await Company.findAll({
                limit,
                offset,
                where: {
                    name: {
                        [Op.like]: `${request.query.name}%`
                    }
                },
                include:include
            });
        }

        if (!!request.query.email) {
            return await Company.findAll({
                limit,
                offset,
                where: {
                    email: {
                        [Op.like]: `${request.query.email}%`
                    }
                },
                include:include
            });
        }

        return await Company.findAll({
            limit,
            offset,
            include:include
        });

    }

    async delete(request){

         const id  =  request.param.id;

        return await Company.update({status: 'DEACTIVATED'},{
             where: {id: id}
        });
    }

    async saveGalery(request,image){
        
        const user = request.user;
        const galery = request.body;

        if (!user.companyId) {
            throw new Error('Nenhuma Empresa associada a esse usuário!');
        }

        galery.companyId = user.companyId;
        galery.path = image;

        return await Galery.create(galery);
    }


    async deleteFromGalery(request) {
        const id = request.params.id;
        const galery = await Galery.findByPk(id);
        fs.unlinkSync(`./public/galery/${galery.path}`);    
        const result = await galery.destroy();
        return result;
    }

    async listGalery(request){

        return await Galery.findAll({
            where:{
                companyId: request.user.companyId
            }
        });
    }
}
module.exports = new CompanyService();