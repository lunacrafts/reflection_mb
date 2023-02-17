import { initTRPC } from "@trpc/server";
import { router as mirrorboards } from 'openai-trpc';
import { router as openai } from 'openai-trpc';
import { NarniaContext } from "narnia-trpc-context";
import { OpenApiMeta } from 'trpc-openapi';

const t = initTRPC.meta<OpenApiMeta>().context<NarniaContext>().create();

export const router = t.router({ mirrorboards, openai });
export type NarniaRouter = typeof router;
