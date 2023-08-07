const spendingService = require("../../service/spendings/spendings.service");

class AuthController {
  constructor() {}

  async create(req, res) {
    await spendingService.create(req.body);
  }

  async findOne(req, res) {}

  async findAll(req, res) {}

  async Update(req, res) {}

  async delete(req, res) {}
}

module.exports = new AuthController();
