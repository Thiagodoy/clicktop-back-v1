const express = require('express');
const {
    sequelize
} = require('../data');
const Category = sequelize.import('../models/category');

class CategoryService {

    async list(request) {


        let name = request.query.name;
        let group_name = request.query.group_name;

        let opt = {};

        if (!!group_name) {
            opt.where = {};
            opt.where.group_name = {
                [Op.like]: `${map.get('group_name')}%`
            }

        } else if (!!name) {
            opt.where = {};
            opt.where.name = {
                [Op.like]: `${map.get('name')}%`
            }
        }

        return await Category.findAll(opt);

    }

    async group() {

        let result = await Category.aggregate('group_name', 'DISTINCT', {
            plain: false
        });

        result = result.map(e => {
            return {
                group_name: e.DISTINCT
            }
        });

        return result;
    }


}

module.exports = new CategoryService();