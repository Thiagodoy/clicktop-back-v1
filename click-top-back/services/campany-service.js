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


    async listLocation(){

        return await sequelize.query(`SELECT id FROM clicktop.companies c
                                                    where ST_Distance(latilong, ST_GeomFromText('POINT(-21.7685791 -48.167224)', 4326)) <= 10000`,
                                                    { raw: true });



    }
    async save(request, response) {

        let user = undefined;
        let tempPhones = undefined;
        let temGalery = undefined

        try{

            // if (request.body.user) {
            //     user = await UserService.save(request,request.body.user)
            //     delete request.body.user;
            // }


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

            let req = {
                address: tempCompany.address,
                address_number: tempCompany.address_number,
                city: resultCity.name_city,
                state: resultState.initials
            }

             let resultLocation = await this.getLocation(req);

             tempCompany.latitude = `${resultLocation.lat}`;
             tempCompany.longitude = `${resultLocation.lng}`;
             tempCompany.point_text  = `POINT(${resultLocation.lat} ${resultLocation.lng})`;


            let resultCompany =  await Company.create(tempCompany);

            if(tempPhones){
                tempPhones.forEach(t=>{
                    t.companyId = resultCompany.id;
                });

                await TelephoneService.saveList(tempPhones);

            }

            if(temGalery){
                temGalery.forEach(g=>{
                    g.companyId = resultCompany.id;
                });

                await GaleryService.save(temGalery);

            }


            return resultCompany;


        }catch(error){

            // if(user){
            //     await UserService.delete(user);
            // }

            throw error;
        }


    }


    async update(request){

        const id = request.body.id;
        const company = await Company.findByPk(id);
        const companyUpdate = request.body;

        if(company.name !== companyUpdate.name){
            company.name = companyUpdate.name;
        }

        if(company.email !== companyUpdate.email){
            company.email = companyUpdate.email;

            // let user = await UserService.findById(company.userId);
            // user.email = company.email.toUpperCase();
            // await UserService.update({user});
            
        }

        if(company.description !== companyUpdate.description){
            company.description = companyUpdate.description;
        }

        if(company.address !== companyUpdate.address){
            company.address = companyUpdate.address;
        }

        if(company.address_neighborhood !== companyUpdate.address_neighborhood){
            company.address_neighborhood = companyUpdate.address_neighborhood;
        }

        if(company.address_complement !== companyUpdate.address_complement){
            company.address_complement = companyUpdate.address_complement;
        }

        if(company.address_number !== companyUpdate.address_number){
            company.address_number = companyUpdate.address_number;
        }

        if(company.zip_code !== companyUpdate.zip_code){
            company.zip_code = companyUpdate.zip_code;
        }

        if(company.website !== companyUpdate.website){
            company.website = companyUpdate.website;
        }

        if(company.facebook !== companyUpdate.facebook){
            company.facebook = companyUpdate.facebook;
        }

        if(company.instagran !== companyUpdate.instagran){
            company.instagran = companyUpdate.instagran;
        }

        if(company.main_products !== companyUpdate.main_products){
            company.main_products = companyUpdate.main_products;
        }

        if(company.opening_hours !== companyUpdate.opening_hours){
            company.opening_hours = companyUpdate.opening_hours;
        }

        if(company.closing_hours !== companyUpdate.closing_hours){
            company.closing_hours = companyUpdate.closing_hours;
        }

        if(company.keys !== companyUpdate.keys){
            company.keys = companyUpdate.keys;
        }

        if(company.id_plan !== companyUpdate.id_plan){
            company.id_plan = companyUpdate.id_plan;
        }

        let tempPhones = undefined;
        let temGalery = undefined;

        if(request.body.telephones){
            tempPhones = request.body.telephones;
            delete request.body.telephones;
        }

        if(request.body.galery){
            temGalery = request.body.galery;
            delete request.body.galery;
        }

        await company.save();
        await TelephoneService.deleteByCompanyId(id);
        await GaleryService.deleteByCompanyId(id);

        if(tempPhones){
            tempPhones.forEach(t=>{
                t.companyId = company.id;
            });
            await TelephoneService.saveList(tempPhones);
        }

        if(temGalery){
            temGalery.forEach(g=>{
                g.companyId = company.id;
            });
            await GaleryService.save(temGalery);
        }

        return Promise.resolve();

    }


    async getLocation(request){

        let result  = await ClientGoogleRest.getAddress(request);

        if(result && result.length == 1){

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
        let offset = request.query.offset ? parseInt(request.query.offset) : 0
        let id_city = request.query.id_city ? parseInt(request.query.id_city) : undefined;
        let distance = request.query.distance ? parseInt(request.query.distance) : undefined;
        let id = request.query.id ? parseInt(request.query.id) : undefined;

        let include = [];

        if(request.query.galery){
            include.push({ model: Galery });
        }

        if(request.query.telephone){
            include.push({ model: Telephone });
        }

        if (!!id) {
            return await Company.findByPk(request.query.id,{include:include});
        }else if(id_city && distance){

            const city =  await CityService.findByPk(parseInt(tempCompany.id_city));
            const ids = sequelize.query(`SELECT id FROM clicktop.companies c
                                         where ST_Distance(latilong, ST_GeomFromText('POINT(${city.latitude} ${city.longitude})', 4326)) <= ${distance * 1000} LIMIT ${offset},${limit}`,
                                                    { raw: true });
            return await Company.findAll({
                where: {
                    id: {
                        [Op.in]: ids
                    }
                },
                include:include
            });
        }else if (!!request.query.name) {
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
        }else if (!!request.query.email) {
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
        }else{
            return await Company.findAll({
                limit,
                offset,
                include:include
            });
        }


    }

    async delete(request){

        const id  = request.query.id;
        const company = await Company.findByPk(id);
        await TelephoneService.deleteByCompanyId(id);
        await GaleryService.deleteByCompanyId(id);
        //await UserService.delete({id:company.userId});

        return await company.destroy();

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
