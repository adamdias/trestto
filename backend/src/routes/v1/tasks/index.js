import { Router } from 'express';

import TaskController from '../../../app/controllers/TaskController';
import TaskStoreValidator from '../../../app/validators/TaskStore';

const routes = Router();

routes.post('/tasks', TaskStoreValidator, TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:id', TaskStoreValidator, TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);

export default routes;
