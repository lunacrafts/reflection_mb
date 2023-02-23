import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import supertokens from "supertokens-node";
import { middleware, errorHandler } from "supertokens-node/framework/express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './router';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import { openApiDocument } from './openapi';
import { createContext } from './context';

import './supertokens';

const log = debug('auth');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

app.use(logger('dev'));

app.use('/api', middleware());

app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router, createContext }));
app.use('/api', createOpenApiExpressMiddleware({ router, createContext }));

app.use('/docs/swagger', swaggerUi.serve);
app.get('/docs/swagger', swaggerUi.setup(openApiDocument));

app.use('/', (req, res) => {
  res.redirect('/docs/swagger');
});

app.use('/api', errorHandler());

app.listen(4000, () => {
  log('Listening on 4000');
});
