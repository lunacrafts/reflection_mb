import { t } from "../trpc";

import { router as session } from './routers/session/session.router';
import { router as authenticators } from './routers/authenticators/authenticators.router';

export const router = t.router({ session, authenticators });
