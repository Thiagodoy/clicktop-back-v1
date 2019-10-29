const {
    sequelize,
    Sequelize
} = require('../data/index');
const Op = Sequelize.Op;

const UserService = require('../services/user-service');
const StateService = require('../services/state-service');
const CityService = require('../services/city-service');
const ClientGoogleRest = require('../client/client-rest');
const Company = sequelize.import('../models/company');
const Galery = sequelize.import('../models/galery');




class CompanyService {

    async save(request, response) {

        let user = undefined;
        if (request.body.user) {

            user = await UserService.save(request,request.body.user)
            delete request.body.user;
        }

        let tempCompany = {
            ...request.body
        };

        if (user) {
            tempCompany.userId = user.id;
        }

    
        let resultCity = await CityService.findByPk(tempCompany.id_city);
        let resultState = await StateService.findByPk(resultCity.stateId);

        //company.address} ${company.address_number} ${company.city} ${company.state}`

        let req = {
            address: tempCompany.address,
            address_number: tempCompany.address_number,
            city: resultCity.name,
            state: resultState.initials
        }

        let resultLocation = await this.getLocation(req);

        tempCompany.latitude = resultLocation.lat;
        tempCompany.longitude = resultLocation.lng;

        return await Company.create(tempCompany);

    }

    async getLocation(request){

        let result  = await ClientGoogleRest.getAddress(request);
        
        if(result.length == 1){

            let lat = result[0].geometry.location.lat;
            let lng = result[0].geometry.location.lat;
            return {lat,lng};
        }else{
            let lat = 0;
            let lng = 0;
            return {lat,lng};
        }



    }

    async list(request) {

        let limit = request.query.limit ? request.query.limit : 10
        let offset = request.query.offset ? request.query.offset : 10



        if (!!request.query.id) {
            return await Company.findByPk(request.query.id);
        }

        if (!!request.query.name) {
            return await Company.findAll({
                limit,
                offset,
                where: {
                    name: {
                        [Op.like]: `${request.query.name}%`
                    }
                }
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
                }
            });
        }

        return await Company.findAll({
            limit,
            offset,
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