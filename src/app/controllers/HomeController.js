class HomeController {
    // GET Home
    index(req, res) {
        res.render('home')
    }
    // GET detail
    show(req, res) {
        res.send("Ahihi")
    }
}
module.exports = new HomeController;