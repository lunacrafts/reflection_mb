import { t } from "./trpc";

import { router as authenticators } from './routers/authenticators/authenticators.router';
import { router as mirrorboards } from './routers/mirrorboards/mirrorboards.router';

export const router = t.router({ authenticators, mirrorboards });

export type LunaRouter = typeof router;
