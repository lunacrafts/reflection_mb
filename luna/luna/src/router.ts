import * as trpcExpress from '@trpc/server/adapters/express';
import { t } from "./trpc";
import { router as luna } from './luna/luna.router';
import { inferAsyncReturnType } from '@trpc/server';

export const router = t.mergeRouters(luna)

export type LunaRouter = typeof router;
