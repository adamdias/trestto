import { Model, Sequelize } from 'sequelize';

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Task, {
      foreignKey: 'task_id',
      as: 'task',
    });
  }
}

export default Tag;
