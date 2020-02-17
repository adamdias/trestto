import faker from 'faker';
import { factory } from 'factory-girl';

import Task from '../src/app/models/Task';

factory.define('Task', Task, {
  title: faker.lorem.words,
  description: faker.lorem.paragraphs,
  tags: ['Web', 'Mobile', 'Linux'],
});

export default factory;
