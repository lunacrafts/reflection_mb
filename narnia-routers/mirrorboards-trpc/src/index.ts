import t from './trpc';

import { router as mirrorboards } from './mirrorboards/routers/mirrorboards/mirrorboards.router';

export const router = t.mergeRouters(mirrorboards);

export type MirrorboardsRouter = typeof router;
