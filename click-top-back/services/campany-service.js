const {
    sequelize,
    Sequelize
} = require('../data/index');
const Op = Sequelize.Op;

const UserService = require('../services/user-service');
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

        return await Company.create(tempCompany);

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