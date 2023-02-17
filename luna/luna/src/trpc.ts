import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { WithLuna } from "./luna/procedures/withLuna.procedure";
import { WithSession } from "./luna/procedures/withSession.procedure";

export type LunaContext = WithLuna & WithSession;

export const t = initTRPC
  .meta<OpenApiMeta>()
  .context<LunaContext>()
  .create();

