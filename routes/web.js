const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const submitController = require("../controllers/submitController")

let routes = app => {
    router.get("/", homeController.getHome);
    router.post("/", submitController.postSubmit);
    return app.use("/", router);
};

module.exports = routes;