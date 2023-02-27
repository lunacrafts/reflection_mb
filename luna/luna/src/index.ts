import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import swaggerUi from 'swagger-ui-express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';

import { openApiDocument } from './openapi';
import { createContext } from './context';
import { router } from './router';

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router, createContext }));
app.use('/api', createOpenApiExpressMiddleware({ router, createContext }));

app.use('/docs/swagger', swaggerUi.serve);
app.get('/docs/swagger', swaggerUi.setup(openApiDocument));

app.use('/', (req, res) => {
  res.redirect('/docs/swagger');
});

app.listen(4000, () => {
  log('Listening on 4000');
});
