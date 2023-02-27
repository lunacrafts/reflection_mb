import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import superjson from 'superjson';
import type { LunaContext } from "luna-trpc";

export const t = initTRPC
  .meta<OpenApiMeta>()
  .context<LunaContext>()
  .create({
    transformer: superjson,
  });

