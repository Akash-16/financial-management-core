const UserModel = require("../../models/user.model");

class AuthRepository {
  constructor() {
    this.model = UserModel;
  }

  async createUser(credentials) {
    await this.model.create(credentials);
  }

  async loginUser() {
    console.log("loggin user");
  }
}

module.exports = new AuthRepository();
