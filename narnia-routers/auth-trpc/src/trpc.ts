import { initTRPC } from "@trpc/server";
import { NarniaContext } from "narnia-trpc-context";
import superjson from 'superjson';
import { OpenApiMeta } from 'trpc-openapi';

export const t = initTRPC.meta<OpenApiMeta>().context<NarniaContext>().create({
  transformer: superjson
});
export default t;
