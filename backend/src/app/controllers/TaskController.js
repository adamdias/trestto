import SendError from '../services/SendError';
import Task from '../models/Task';
import Tag from '../models/Tag';

class TaskController {
  async store(req, res, next) {
    try {
      const { title, description, tags } = req.body;

      const task = await Task.create({ title, description });

      if (tags) {
        Promise.all([
          tags.map(async tag => {
            await Tag.create({ title: tag, task_id: task.id });
          }),
        ]);
      }

      return res.status(201).json({ ...task.toJSON(), tags });
    } catch (error) {
      return next(error);
    }
  }

  async index(req, res, next) {
    try {
      const tasks = await Task.find();

      return res.json(tasks);
    } catch (error) {
      return next(error);
    }
  }
}

export default new TaskController();
