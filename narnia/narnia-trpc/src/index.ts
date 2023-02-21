import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from 'trpc-openapi';
import { NarniaContext } from "narnia-trpc-context";

import { router as auth } from 'auth-trpc';
import { router as mirrorboards } from 'mirrorboards-trpc';
import { router as openai } from 'openai-trpc';

const t = initTRPC.meta<OpenApiMeta>().context<NarniaContext>().create();

export const router = t.router({ auth, mirrorboards, openai });
export type NarniaRouter = typeof router;
