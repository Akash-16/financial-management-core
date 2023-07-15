const routers = require("express").Router();
const authController = require("../controller/auth/auth.controller");

routers.route("/auth/register").post(authController.registerUser);

module.exports = routers;
