import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Task from '../app/models/Task';
import Tag from '../app/models/Tag';

const models = [Task, Tag];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
