const routers = require("express").Router();
const {
  createUserValidation,
  loginValidation,
} = require("../utilities/validations/authValidations");
const authController = require("../controller/auth/auth.controller");
const { tryCatch } = require("../utilities/functions/tryCatch");

routers
  .route("/auth/register")
  .post(createUserValidation, tryCatch(authController.registerUser));
routers
  .route("/auth/login")
  .post(loginValidation, tryCatch(authController.login));

module.exports = routers;
