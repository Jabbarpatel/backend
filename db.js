import { User } from "./model.js";
import { DB_OPERATIONS } from "./operations.js";

export class DB extends DB_OPERATIONS {
  constructor() {
    super(User);
  }
  async getUsers() {
    return this.findAll({
      raw: true,
    });
  }
}
