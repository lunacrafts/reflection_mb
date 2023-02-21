import { login } from './procedures/login';
import t from './trpc';

export const router = t.mergeRouters(login);

export type AuthRouter = typeof router;
