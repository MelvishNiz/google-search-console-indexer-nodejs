const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

let routes = app => {
    router.get("/", homeController.getHome);
    return app.use("/", router);
};

module.exports = routes;