const authService = require("../../service/auth/auth.service");

class AuthController {
  async registerUser(req, res) {
    await authService.register(req, res);
  }

  async login(req, res) {
    await authService.login(req, res);
  }
}

module.exports = new AuthController();
