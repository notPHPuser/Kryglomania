const { User } = require('../models/user');

class UserController {
  async addUser(req, res) {
    const { name, surname, phone, password } = req.body;
    const user = await User.create({ name, surname, phone, password });
    return res.json(user);
  }

  async getUser(req, res) {
    const user = await User.findAll();
    return res.json(user);
  }
}

module.exports = new UserController();
