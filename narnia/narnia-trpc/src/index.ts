import { initTRPC } from "@trpc/server";
import { router as openai } from 'openai-trpc';

const t = initTRPC.create();

export const router = t.router({ openai });
export type NarniaRouter = typeof router;
