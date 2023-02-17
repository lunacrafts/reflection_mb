import t from './trpc';
import { router as auth } from './routers/auth/auth.router';

export const router = t.router({ auth });

export type MirrorboardsRouter = typeof router;
