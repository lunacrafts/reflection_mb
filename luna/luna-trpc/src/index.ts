import auth from './routers/auth';
import t from './trpc';

export const router = t.mergeRouters(auth);

export type LunaRouter = typeof router;
