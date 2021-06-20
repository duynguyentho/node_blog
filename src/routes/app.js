const homeRouter = require('./home')
const categoryRouter = require('./category')
function route(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
    // Home
    app.use('/home', homeRouter)
    // Category
    app.use('/category', categoryRouter )


}

module.exports = route;