const {
    sequelize,
    Sequelize
} = require('../data/index');

const fs = require('fs')

const Op = Sequelize.Op;
const Post = sequelize.import('../models/post');

class PostService {


    async save(request, image) {

        const user = request.user;
        const post = request.body;

        if (!user.companyId) {
            throw new Error('Nenhuma Empresa associada a esse usuário!');
        }

        post.companyId = user.companyId;
        post.image = image;

        return await Post.create(post);

    }

    async list(request) {

        let opt = {
            order: [
                ['createdAt', 'DESC']
            ],
        };


        if (!!request.query.limit) {
            opt.limit = Number.parseInt(request.query.limit);
        }

        if (!!request.query.offset) {
            opt.offset = Number.parseInt(request.query.offset);
        }


        if (!!request.query.key) {
            opt.where = {};
            opt.where.key = {
                [Op.like]: `${request.query.key}%`
            }
        }

        if (!!request.query.companyId) {
            opt.where = opt.where ? opt.where : {}
            opt.where.companyId = {
                [Op.and]: [{
                    companyId: request.query.companyId
                }]
            }
        }

        const result = await Post.findAll(opt);
        const resultPage = await Post.findAndCountAll(opt);

        if (resultPage.count) {
            result.page = Math.ceil(resultPage.count / opt.limit);
        }

        return result;

    }

    async delete(request) {


        const id = request.params.id;
        const post = await Post.findByPk(id);

        fs.unlinkSync(`./public/post/${post.image}`);    

        const result = await post.destroy();

        return result



    }
}

module.exports = new PostService();