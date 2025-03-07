export class DB_OPERATIONS {
  constructor(model) {
    this.model = model;
  }
  async findAll(options = {}) {
    return this.model.findAll(options);
  }
}
