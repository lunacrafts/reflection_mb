import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import debug from 'debug';

// Routes
import auth from './auth/auth.routes';

// Service
dotenv.config();

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use('/auth', auth);

app.listen(4000, () => {
  log('Listening on 4000');
});
