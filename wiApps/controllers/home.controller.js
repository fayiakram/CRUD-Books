class HomeController {
    indexHome(req, res) {
        res.render("home");
    }
    indexLogin(req, res) {
        res.render("login");
    }
}

module.exports = HomeController;