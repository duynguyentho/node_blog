const Category = require('../models/Category')
class CategoriesController {
    index(req, res, next) {
        Category.find({})
            .then(categories => {
                categories = categories.map(category => category.toObject())
                res.render('category',{categories})
            })
            .catch(next)
    }
}

module.exports = new CategoriesController;