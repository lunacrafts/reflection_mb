import { initTRPC } from "@trpc/server";
import superjson from 'superjson';
import { NarniaContext } from "narnia-trpc-context";
import { OpenApiMeta } from 'trpc-openapi';

export type NarniaWithMirrorboardsContext = NarniaContext;

export const t = initTRPC
  .meta<OpenApiMeta>()
  .context<NarniaWithMirrorboardsContext>()
  .create({
    transformer: superjson
  });

export default t;
