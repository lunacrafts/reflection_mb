import { t } from "./trpc";
import { router as auth } from './auth/auth.router';

export const router = t.mergeRouters(auth)

export type AuthRouter = typeof router;
