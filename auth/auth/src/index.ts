import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import debug from 'debug';

import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './router';

dotenv.config();

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use('/trpc', trpcExpress.createExpressMiddleware({ router }));

app.listen(4000, () => {
  log('Listening on 4000');
});
