import { initTRPC } from "@trpc/server";
import { router as openai } from 'openai-trpc';
import { NarniaContext } from "narnia-trpc-context";

const t = initTRPC.context<NarniaContext>().create();

export const router = t.router({ openai });
export type NarniaRouter = typeof router;
