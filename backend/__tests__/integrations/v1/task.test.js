import request from 'supertest';
import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('Task', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create task', async () => {
    const task = await factory.attrs('Task');

    const response = await request(app)
      .post('/v1/tasks')
      .send(task);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('description');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('updatedAt');
    expect(response.body).toHaveProperty('Tags');
    expect(response.body.Tags[0]).toHaveProperty('id');
    expect(response.body.Tags[0]).toHaveProperty('title');
  });

  it('should be not able to create task without title', async () => {
    const response = await request(app)
      .post('/v1/tasks')
      .send({ title: '' });

    expect(response.status).toBe(400);
  });

  it('should be not able to create task with invalid tag', async () => {
    const response = await request(app)
      .post('/v1/tasks')
      .send({
        title: 'Test',
        description: 'Testing',
        tags: [{ name: 'name' }],
      });

    expect(response.status).toBe(400);
  });

  it('should be not able to create task without array tags', async () => {
    const response = await request(app)
      .post('/v1/tasks')
      .send({
        title: 'Test',
        description: 'Testing',
        tags: 'tag',
      });

    expect(response.status).toBe(400);
  });

  it('should be not able to create task with invalid description', async () => {
    const response = await request(app)
      .post('/v1/tasks')
      .send({
        title: 'Test',
        description: {},
        tags: 'tag',
      });

    expect(response.status).toBe(400);
  });

  it('should be able to update task', async () => {
    const task = await factory.attrs('Task');

    const created = await request(app)
      .post('/v1/tasks')
      .send(task);

    const response = await request(app)
      .put(`/v1/tasks/${created.body.id}`)
      .send(task);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('description');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('updatedAt');
    expect(response.body).toHaveProperty('Tags');
    expect(response.body.Tags[0]).toHaveProperty('id');
    expect(response.body.Tags[0]).toHaveProperty('title');
    expect(response.body.Tags[0].title).toBe('Web');
  });

  it('should be not able to update task with not exists id', async () => {
    const task = await factory.attrs('Task');

    const response = await request(app)
      .put('/v1/tasks/7')
      .send(task);

    expect(response.status).toBe(404);
  });

  it('should be not able to update task without title', async () => {
    const response = await request(app)
      .put('/v1/tasks/7')
      .send({ title: '' });

    expect(response.status).toBe(400);
  });

  it('should be not able to update task with invalid tag', async () => {
    const response = await request(app)
      .put('/v1/tasks/7')
      .send({
        title: 'Test',
        description: 'Testing',
        tags: [{ name: 'name' }],
      });

    expect(response.status).toBe(400);
  });

  it('should be not able to update task without array tags', async () => {
    const response = await request(app)
      .put('/v1/tasks/7')
      .send({
        title: 'Test',
        description: 'Testing',
        tags: 'tag',
      });

    expect(response.status).toBe(400);
  });

  it('should be not able to update task with invalid description', async () => {
    const response = await request(app)
      .put('/v1/tasks/7')
      .send({
        title: 'Test',
        description: {},
        tags: 'tag',
      });

    expect(response.status).toBe(400);
  });

  it('should be return all tasks', async () => {
    const task = await factory.attrs('Task');

    await request(app)
      .post('/v1/tasks')
      .send(task);

    await request(app)
      .post('/v1/tasks')
      .send(task);

    const response = await request(app).get('/v1/tasks');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('items');
    expect(response.body.items[0]).toHaveProperty('title');
    expect(response.body.items[0]).toHaveProperty('description');
    expect(response.body.items[0]).toHaveProperty('createdAt');
    expect(response.body.items[0]).toHaveProperty('updatedAt');
    expect(response.body.items[0]).toHaveProperty('Tags');
    expect(response.body.items[0].Tags[0]).toHaveProperty('id');
    expect(response.body.items[0].Tags[0]).toHaveProperty('title');
  });

  it('should be able to delete task', async () => {
    const task = await factory.attrs('Task');

    const created = await request(app)
      .post('/v1/tasks')
      .send(task);

    const response = await request(app).delete(`/v1/tasks/${created.body.id}`);

    expect(response.status).toBe(204);
  });

  it('should be not able to delete task with id not exists', async () => {
    const response = await request(app).delete('/v1/tasks/7');

    expect(response.status).toBe(404);
  });
});
