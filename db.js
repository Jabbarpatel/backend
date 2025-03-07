import { where } from "sequelize";
import { User } from "./model.js";

export class DB {
  async getUsers() {
    return await User.findAll({
      raw: true,
    });
  }

  async addUser(firstName, lastName) {
    return await User.create({
      first_name: firstName,
      last_name: lastName,
    });
  }

  async deleteUser(idx) {
    const user = await User.findOne({ where: { idx: idx } });
    if (user) {
      return await user.destroy();
    }
    throw new Error(`User not found with idx ${idx}`);
  }

  async updateUser(idx, firstName, lastName) {
    const user = await User.findOne({ where: { idx: idx } });
    if (user) {
      return await user.update({
        first_name: firstName,
        last_name: lastName,
      });
    }
    throw new Error(`User not found with idx ${idx}`);
  }
}
