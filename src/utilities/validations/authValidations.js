const { body } = require("express-validator");

exports.createUserValidation = [
  body("uid").exists().notEmpty().withMessage("Uid is required"),
  body("firstName").exists().notEmpty().withMessage("First name is required"),
  body("lastName").exists().notEmpty().withMessage("Last name is required"),
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter the valid email"),
  body("gender").exists().notEmpty().withMessage("Gender is required"),
  body("dateOfBirth")
    .exists()
    .notEmpty()
    .withMessage("Date of birth is required"),
  body("password").exists().notEmpty().withMessage("Password is required"),
];

exports.loginValidation = [
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter the valid email"),
  body("password").exists().notEmpty().withMessage("Password is required"),
];
