import { login } from './procedures/login';
import { me } from './procedures/me';
import { register } from './procedures/register';
import t from './trpc';

export const router = t.mergeRouters(login, register, me);

export type AuthRouter = typeof router;
