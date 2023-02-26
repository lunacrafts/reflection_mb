import { t } from "../trpc";

import { router as session } from './routers/session/session.router';

export const router = t.router({ session });
