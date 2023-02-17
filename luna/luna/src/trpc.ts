import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { WithLuna } from "./luna/procedures/withLuna.procedure";

export type LunaContext = WithLuna;

export const t = initTRPC
  .meta<OpenApiMeta>()
  .context<LunaContext>()
  .create();

