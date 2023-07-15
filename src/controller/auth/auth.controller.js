const authService = require("../../service/auth/auth.service");

class AuthController {
  async registerUser(req, res) {
    authService.register(req, res);
  }

  async login(req, res) {
    console.log("login");
  }
}

module.exports = new AuthController();
