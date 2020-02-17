import './bootstrap';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import redis from 'redis';
import RateLimit from 'express-rate-limit';
import RateLimitRedis from 'rate-limit-redis';
import cors from 'cors';
import routes from './routes/v1';
import ErrorHandler from './app/middlewares/ErrorHandler';

import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.middlewares();
    this.routes();
    this.errorMiddlewares();
  }

  middlewares() {
    this.app.use(cors({ origin: process.env.WEB_URL }));
    this.app.use(helmet());
    this.app.use(express.json());

    if (
      process.env.NODE_ENV !== 'development' &&
      process.env.NODE_ENV !== 'test'
    ) {
      this.app.use(
        new RateLimit({
          store: new RateLimitRedis({
            client: redis.createClient({
              host: process.env.REDIS_HOST,
              port: process.env.REDIS_PORT,
            }),
          }),
          windowMs: 1000 * 60 * 10,
          max: 250,
        })
      );
    }
  }

  routes() {
    this.app.use('/v1', routes);
  }

  errorMiddlewares() {
    this.app.use(ErrorHandler.catchNotFound);
    this.app.use(ErrorHandler.catchErrors);
  }
}

export default new App().server;
