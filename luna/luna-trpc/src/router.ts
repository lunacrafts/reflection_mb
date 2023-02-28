import { t } from "./trpc";

import { router as authenticators } from './routers/authenticators/authenticators.router';

export const router = t.router({ authenticators });
