import SendError from '../services/SendError';
import Task from '../models/Task';
import Tag from '../models/Tag';

class TaskController {
  async store(req, res, next) {
    try {
      const { title, description, tags } = req.body;

      const task = await Task.create({ title, description });

      if (tags) {
        await Promise.all(
          tags.map(async tag => {
            await Tag.create({
              title: tag,
              task_id: task.id,
            });
          })
        );
      }

      const findTask = await Task.findByPk(task.id, {
        include: [
          {
            model: Tag,
            attributes: ['id', 'title'],
          },
        ],
      });

      return res.status(201).json(findTask);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, tags } = req.body;

      const task = await Task.findByPk(id);

      if (!task) {
        throw new SendError('Not Found', 'Not found task', 404);
      }

      task.update({ title, description });

      if (tags) {
        await Tag.destroy({ where: { task_id: id } });

        await Promise.all(
          tags.map(async tag => {
            await Tag.create({
              title: tag,
              task_id: id,
            });
          })
        );
      }

      const findTask = await Task.findByPk(id, {
        include: [
          {
            model: Tag,
            attributes: ['id', 'title'],
          },
        ],
      });

      return res.status(201).json(findTask);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const task = await Task.findByPk(id);

      if (!task) {
        throw new SendError('Not Found', 'Not found task', 404);
      }

      await Task.destroy({ where: { id } });

      return res.status(204).json();
    } catch (error) {
      return next(error);
    }
  }

  async index(req, res, next) {
    try {
      const tasks = await Task.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: Tag,
            attributes: ['id', 'title'],
          },
        ],
      });

      return res.json({ items: tasks });
    } catch (error) {
      return next(error);
    }
  }
}

export default new TaskController();
