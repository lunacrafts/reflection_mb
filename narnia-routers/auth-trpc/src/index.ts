import { me } from './procedures/me';
import t from './trpc';

export const router = t.mergeRouters(me);

export type AuthRouter = typeof router;
