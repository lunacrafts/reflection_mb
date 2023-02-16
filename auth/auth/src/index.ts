import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import swaggerUi from 'swagger-ui-express';

import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './router';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import { openApiDocument } from './openapi';

dotenv.config();

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use('/api', createOpenApiExpressMiddleware({ router }));
app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router }));

app.use('/docs/swagger', swaggerUi.serve);
app.get('/docs/swagger', swaggerUi.setup(openApiDocument));

app.use('/', (req, res) => {
  res.redirect('/docs/swagger');
});

app.listen(4000, () => {
  log('Listening on 4000');
});
