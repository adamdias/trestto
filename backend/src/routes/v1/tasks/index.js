import { Router } from 'express';

import TaskController from '../../../app/controllers/TaskController';
import TaskStoreValidator from '../../../app/validators/TaskStore';

const routes = Router();

routes.post('/tasks', TaskStoreValidator, TaskController.store);

export default routes;
