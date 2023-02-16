import express from 'express';
import logger from 'morgan';
import debug from 'debug';
import auth from './routes/auth/auth.routes';

const log = debug('auth');
const app = express();

app.use(logger('dev'));

app.use('/auth', auth);

app.listen(4000, () => {
  log('Listening on 4000');
});
