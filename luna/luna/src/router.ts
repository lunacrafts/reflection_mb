import { t } from "./trpc";
import { router as luna } from './luna/luna.router';

export const router = t.mergeRouters(luna)

export type LunaRouter = typeof router;
