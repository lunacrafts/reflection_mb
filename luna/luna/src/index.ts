import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import swaggerUi from 'swagger-ui-express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { env } from 'env';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import cookieParser from 'cookie-parser';

import { openApiDocument } from './openapi';
import { router, createContext } from 'luna-trpc';
import cors from 'cors';

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use(cors({
  origin: env.MIRRORBOARDS_WEB_APP_URL,
  credentials: true,
}));

app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router, createContext }));
app.use('/api', createOpenApiExpressMiddleware({ router, createContext }));

app.use('/docs/swagger', swaggerUi.serve);
app.get('/docs/swagger', swaggerUi.setup(openApiDocument));

app.use('/', (req, res) => {
  res.redirect('/docs/swagger');
});

app.listen(4100, () => {
  log('Listening on 4100');
});
