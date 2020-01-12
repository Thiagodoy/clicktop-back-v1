const bcrypt = require('bcryptjs');
const { sequelize, Sequelize } = require('../data/index');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');

const validateUser = require('../validation/user-validation');
const validateLogin = require('../validation/login-validation');

const UserRepository = sequelize.import('../models/user');
const Company = sequelize.import('../models/company');

class UserService {

    async findById(id){
        return await UserRepository.findByPk(id);        
    }

    async findAll(request){
        return await UserRepository.findAll();        
    }

    async findByEmail(email, isAuth) {

        let include = isAuth ? [{model: Company}] : [];

        let result = await UserRepository.findAll({
            include,
            where: {
                email: {[Op.like]:`${email.toUpperCase()}%`}, 
                status: {[Op.like]:'ACTIVE'}               
            }
        });

        return result;
    }    

    async delete(request){

        const id  =  (request.param) ? request.param.id : request.id;        
        await sequelize.query(`DELETE FROM users where id =${id}`); 
        
    }

    async save(request,userCompany) {        


            const userTemp = userCompany ? userCompany : request.body; 
            const {  error } = validateUser(userTemp);

            if (error) {
                throw new Error(error.details[0].message);
            }

            const userExists = await this.findByEmail(userTemp.email);

            if (userExists && userExists.length > 0){
                throw new Error('Usuário já cadastrado!');
            }

            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(userTemp.password, salt);

            const user = { ...userTemp };

            user.password = password;
            user.email = user.email.toUpperCase();
            user.name = user.name.toUpperCase();

            return  await UserRepository.create(user);           
       
    }

    async findByEmailOrName(request) {

        let opt = {};

        const limit = request.query.limit;
        const offset = request.query.offset;
        const name = request.query.name;
        const email = request.query.email;
        const loadCompany = request.query.loadCompany;

        if (!!limit) {
            opt.limit = Number.parseInt(limit);
        }

        if (!!offset) {
            opt.offset = Number.parseInt(offset);
        }

        if (!!name) {
            opt.where = {};
            opt.where.name = {
                [Op.like]: `${name.toUpperCase()}%`
            }

        } else if (!!email) {
            opt.limit = 10;
            opt.where = {};
            opt.where.email = {
                [Op.iLike]: `${email.toUpperCase()}`
            }
        }

        if (!!loadCompany && loadCompany == 'true') {
            opt.include = [{
                model: Company
            }]
        }

        let result = await UserRepository.findAndCountAll(opt);
        if (result.count) {
            result.page = Math.ceil(result.count / opt.limit);
        }

        return result;
    }

    async update(request){ 


        const userTemp  = request.user && !request.body.userUpdate ? request.user : request.body.userUpdate;    

        const user = await this.findById(userTemp.id);

        if(userTemp.name && userTemp.name != user.name){
            user.name = userTemp.name;
        }

        if(userTemp.email && userTemp.email != user.email){
            user.email = userTemp.email;
        }

        if(userTemp.telefone && userTemp.telefone != user.telefone){
            user.telefone = userTemp.telefone;
        }

        if(userTemp.celular && userTemp.celular != user.celular){
            user.celular = userTemp.celular;
        }

        if(userTemp.profile && userTemp.profile != user.profile){
            user.profile = userTemp.profile;
        }

        if(userTemp.rg && userTemp.rg != user.rg){
            user.rg = userTemp.rg;
        }

        if(userTemp.cpf && userTemp.cpf != user.cpf){
            user.cpf = userTemp.cpf;
        }

        if(userTemp.image && userTemp.image != user.image){
            user.image = userTemp.image;
        }

        if(userTemp.password){
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(userTemp.password, salt);
        }

        return await user.save();
    }

    async auth(request){

        const { error } = validateLogin(request.body);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const user = await this.findByEmail(request.body.email);
        
        if (user.length == 0) {
            throw new Error('Email inválido!');
        }

        const validPass = await bcrypt.compare(request.body.password, user[0].password)
        if (!validPass){
            throw new Error('Password inválido!');
        } 

        let userTemp = {
            email: user[0].email,
            name: user[0].name,
            id: user[0].id,
            profile:user[0].profile,
            companyId: user[0].company ? user[0].company.id : null
        };


        const token = await jwt.sign(userTemp, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        });

        const res = {
            user: userTemp,
            token
        };

        return res;

    }
}

module.exports = new UserService();