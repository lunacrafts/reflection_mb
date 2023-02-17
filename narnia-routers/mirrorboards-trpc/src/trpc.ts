import { initTRPC } from "@trpc/server";
import { NarniaContext } from "narnia-trpc-context";
import { OpenApiMeta } from 'trpc-openapi';

export const t = initTRPC.meta<OpenApiMeta>().context<NarniaContext>().create();
export default t;
