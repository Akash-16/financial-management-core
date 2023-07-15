const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const authRepository = require("../../repository/auth/auth.repository");

class AuthService {
  constructor() {}

  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errMsg = errors.array().map((err) => {
          return { [err.path]: err.msg };
        });

        let finalObj = {};
        for (let i = 0; i < errMsg.length; i++) {
          Object.assign(finalObj, errMsg[i]);
        }
        res.status(500).json(finalObj);
      } else {
        const data = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(data.password, salt);

        const userData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
          password: passwordHash,
          uid: data.uid,
        };

        await authRepository.createUser(userData);

        res.status(201).json({
          data: "Register SuccessFully",
          message: "success",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AuthService();
