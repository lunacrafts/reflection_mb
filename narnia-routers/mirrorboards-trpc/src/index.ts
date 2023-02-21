import t from './trpc';

import { router as mirrorboards } from './routers/mirrorboards/mirrorboards.router';

export const router = t.router({ mirrorboards });

export type MirrorboardsRouter = typeof router;
