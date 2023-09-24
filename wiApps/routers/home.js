const express = require("express");
const HomeController = require("../controllers/home.controller");
const homeRouter = express.Router();

const homeController = new HomeController;

homeRouter.get("/", homeController.indexHome);
homeRouter.get("/login", homeController.indexLogin);

module.exports = homeRouter;