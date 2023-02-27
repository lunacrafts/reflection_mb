import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import swaggerUi from 'swagger-ui-express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import cors from 'cors';
import supertokens from 'supertokens-node';
import {
  middleware as supertokensMiddleware,
  errorHandler as supertokensErrorHandler
} from "supertokens-node/framework/express";

import './supertokens';
import { openApiDocument } from './openapi';
import { createContext } from './context';
import { router } from './router';
import auth from './endpoints/auth';
import { env } from 'env';

const log = debug('auth');
const app = express();

app.use(cors({
  origin: env.MIRRORBOARDS_WEB_APP_URL,
  allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

app.use(logger('dev'));

app.use(supertokensMiddleware());
app.use('/auth', auth);

app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router, createContext }));
app.use('/api', createOpenApiExpressMiddleware({ router, createContext }));

app.use('/docs/swagger', swaggerUi.serve);
app.get('/docs/swagger', swaggerUi.setup(openApiDocument));

app.use('/', (req, res) => {
  res.redirect('/docs/swagger');
});

app.use(supertokensErrorHandler());

app.listen(4000, () => {
  log('Listening on 4000');
});
