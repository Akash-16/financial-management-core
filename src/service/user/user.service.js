const authRepository = require("../../repository/auth/auth.repository");

class UserService {
  constructor() {}

  async findUserByEmail(email) {
    return authRepository.findUserByEmail(email);
  }
}

module.exports = new UserService();
