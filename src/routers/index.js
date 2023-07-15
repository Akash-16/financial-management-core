const routers = require("express").Router();
const {
  createUserValidation,
} = require("../utilities/validations/authValidations");
const authController = require("../controller/auth/auth.controller");

routers
  .route("/auth/register")
  .post(createUserValidation, authController.registerUser);

module.exports = routers;
