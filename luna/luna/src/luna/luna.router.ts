import { t } from "../trpc";

import { router as auth } from './routers/auth/auth.router';
import { router as authenticators } from './routers/authenticators/authenticators.router';

export const router = t.router({ auth, authenticators });
