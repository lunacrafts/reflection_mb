import { login } from './procedures/login';
import { register } from './procedures/register';
import t from './trpc';

export const router = t.mergeRouters(login, register);

export type AuthRouter = typeof router;
